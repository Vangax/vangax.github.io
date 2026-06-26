/* garden-cloud.js
   Data layer for the guestbook, the visitor counter, and visitor location.
   Uses Firebase Firestore when a config is set below; otherwise saves to this
   browser's localStorage so the site still works with no setup.
   To go live and shared across everyone, see SETUP-firebase.md. */

/* Paste your Firebase web config here (Firebase console > Project settings >
   Your apps > Web app > Config). Leave it as-is to stay in local mode. */
const firebaseConfig = {
  apiKey: "AIzaSyAjYQayZjwnFqf2_7Vur161mR07gVzNCxk",
  authDomain: "the-koi-pond.firebaseapp.com",
  projectId: "the-koi-pond",
  storageBucket: "the-koi-pond.firebasestorage.app",
  messagingSenderId: "894586526230",
  appId: "1:894586526230:web:761d49c4337e4bc3e37337",
  measurementId: "G-VZVZXBWZ58"
};

const FIREBASE_VER = "10.12.2";
const useFirebase = firebaseConfig.apiKey && !/^PASTE/.test(firebaseConfig.apiKey);

/* A koi that is always in the pond so it is never empty. Edit this freely. */
const HOST_KOI = {
  id: "host-welcome", host: true, name: "vangax",
  message: "welcome to my pond. leave a message and your koi joins the garden.",
  createdAt: 0
};

function clean(s, max) {
  return String(s == null ? "" : s)
    .replace(/[\u0000-\u001f]/g, " ")
    .replace(/\s+/g, " ").trim().slice(0, max);
}
function emit(name, detail) { window.dispatchEvent(new CustomEvent(name, { detail: detail })); }

/* Local mode: localStorage, per device, no setup. */
function makeLocal() {
  var subs = [];
  function load() { try { return JSON.parse(localStorage.getItem("vx_guestbook") || "[]"); } catch (e) { return []; } }
  function save(a) { try { localStorage.setItem("vx_guestbook", JSON.stringify(a.slice(-300))); } catch (e) {} }
  function list() { return load().sort(function (a, b) { return b.createdAt - a.createdAt; }); }
  function fan() { var l = list(); subs.forEach(function (cb) { try { cb(l); } catch (e) {} }); }

  window.addEventListener("storage", function (e) { if (e.key === "vx_guestbook") fan(); });

  return {
    mode: "local",
    onMessages: function (cb) { subs.push(cb); cb(list()); return function () { subs = subs.filter(function (x) { return x !== cb; }); }; },
    addMessage: function (name, message) {
      var n = clean(name, 40) || "anonymous", m = clean(message, 280);
      if (!m) return Promise.reject(new Error("empty"));
      var msg = { id: "l" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6), name: n, message: m, createdAt: Date.now() };
      var a = load(); a.push(msg); save(a); fan();
      return Promise.resolve(msg);
    },
    registerVisit: function () {
      var counted = false; try { counted = sessionStorage.getItem("vx_counted") === "1"; } catch (e) {}
      var v = 1; try { v = parseInt(localStorage.getItem("vx_visits") || "0", 10) || 0; } catch (e) {}
      if (!counted) { v += 1; try { localStorage.setItem("vx_visits", String(v)); sessionStorage.setItem("vx_counted", "1"); } catch (e) {} }
      return Promise.resolve(v || 1);
    }
  };
}

/* Firebase mode: Firestore, real and shared across all visitors. */
async function makeFirebase() {
  var base = "https://www.gstatic.com/firebasejs/" + FIREBASE_VER + "/";
  var appMod = await import(base + "firebase-app.js");
  var fs = await import(base + "firebase-firestore.js");

  var app = appMod.initializeApp(firebaseConfig);
  var db = fs.getFirestore(app);

  function toMs(ts) { return ts && typeof ts.toMillis === "function" ? ts.toMillis() : (typeof ts === "number" ? ts : Date.now()); }

  return {
    mode: "firebase",
    onMessages: function (cb) {
      var q = fs.query(fs.collection(db, "guestbook"), fs.orderBy("createdAt", "desc"), fs.limit(250));
      return fs.onSnapshot(q, function (snap) {
        var arr = snap.docs.map(function (d) { var x = d.data(); return { id: d.id, name: x.name, message: x.message, createdAt: toMs(x.createdAt) }; });
        cb(arr);
      }, function (err) { console.warn("guestbook listen failed:", err); cb([]); });
    },
    addMessage: function (name, message) {
      var n = clean(name, 40) || "anonymous", m = clean(message, 280);
      if (!m) return Promise.reject(new Error("empty"));
      return fs.addDoc(fs.collection(db, "guestbook"), { name: n, message: m, createdAt: fs.serverTimestamp() })
        .then(function (ref) { return { id: ref.id, name: n, message: m, createdAt: Date.now() }; });
    },
    registerVisit: function () {
      var ref = fs.doc(db, "meta", "stats");
      var counted = false; try { counted = sessionStorage.getItem("vx_counted") === "1"; } catch (e) {}
      var p = counted
        ? Promise.resolve()
        : fs.setDoc(ref, { visits: fs.increment(1) }, { merge: true }).then(function () { try { sessionStorage.setItem("vx_counted", "1"); } catch (e) {} });
      return p.then(function () { return fs.getDoc(ref); }).then(function (s) { return (s.exists() && s.data().visits) || 1; });
    }
  };
}

/* Visitor location for the globe pin. Key-less and best effort. */
function locateVisitor() {
  function tryUrl(url, map) {
    var ctrl = new AbortController(); var to = setTimeout(function () { ctrl.abort(); }, 4500);
    return fetch(url, { signal: ctrl.signal }).then(function (r) { return r.json(); }).then(function (j) { clearTimeout(to); return map(j); });
  }
  return tryUrl("https://ipwho.is/", function (j) {
    if (!j || j.success === false || !j.latitude) throw 0;
    return { city: j.city, region: j.region, country: j.country, lat: +j.latitude, lon: +j.longitude };
  }).catch(function () {
    return tryUrl("https://ipapi.co/json/", function (j) {
      if (!j || !j.latitude) throw 0;
      return { city: j.city, region: j.region, country: j.country_name, lat: +j.latitude, lon: +j.longitude };
    });
  }).catch(function () { return null; });
}

/* Pick a backend, expose window.GardenCloud, announce ready. */
(async function boot() {
  var cloud;
  if (useFirebase) {
    try { cloud = await makeFirebase(); }
    catch (e) { console.warn("Firebase init failed, using local mode.", e); cloud = makeLocal(); }
  } else {
    cloud = makeLocal();
  }
  cloud.HOST_KOI = HOST_KOI;
  cloud.locate = locateVisitor;
  window.GardenCloud = cloud;
  emit("gardencloud-ready", cloud);
  console.info("data layer ready, mode = " + cloud.mode);
})();
