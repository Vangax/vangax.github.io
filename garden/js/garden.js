/* garden.js: page content and behaviour. The rooms, routing, sidebar
   gadgets, weather, and the koi pond. All writing lives in ROOMS below. */
(function (root) {
  "use strict";

  var ROOMS = {
    bench: { name: "The Bench", img: "assets/bench.png", accent: "green", tag: "Sit a while. The quiet moments live here.",
      intro: "This is the bench at the edge of everything. Some days I share it; some days I keep it for myself and the view. Either way, it's where I do my best thinking.",
      posts: [
        { title: "The friends who feel like home", date: "May 12, 2026", tags: ["friends", "gratitude"], body: [
          "There's a particular kind of quiet you only get with the right people, the kind where nobody feels the need to fill the silence. We just sat here, watching the light go gold, saying almost nothing.",
          { q: "Good company never asks you to perform." }, "I want to remember this more often than I do. The people, not the plans." ] },
        { title: "A view worth the climb", date: "Mar 2, 2026", tags: ["scenery", "slow"], body: [
          "It took longer to get up here than I'd like to admit. But then the whole valley opened up, green folding into blue, and the climb stopped mattering.",
          "I think that's the trick with most things. You don't get the view without the legs." ] },
        { title: "On sitting alone (and liking it)", date: "Nov 20, 2025", tags: ["solitude"], body: [
          "Being alone used to feel like waiting for someone to show up. Lately it feels more like company with myself.",
          "Same bench. Same view. Just quieter, and somehow fuller." ] } ] },
    world: { name: "The World", img: "assets/globe.png", accent: "blue", tag: "A small person on a big blue marble.",
      intro: "Hi, I'm Vangax. This room is the wide-angle shot: who I am, what I care about, and the old, glossy internet I keep trying to bring back.",
      posts: [
        { title: "Hello, I'm Vangax", date: "Jun 1, 2026", tags: ["about", "start here"], body: [
          "I make things on the internet and get a little too attached to how they look. I like green hills, blue skies, glass that catches the light, and software that feels alive instead of flat.",
          "If you found this garden, you probably like those things too. Make yourself at home." ] },
        { title: "The internet I wish we kept", date: "Apr 18, 2026", tags: ["frutiger aero", "nostalgia"], body: [
          "Somewhere around 2013 the web went flat and grey and we called it progress. But I remember when interfaces were wet, glossy, hopeful, bubbles and water and skies in every banner.",
          { q: "Optimism was a design language, and we let it expire." }, "This whole place is my small attempt to renew the licence." ] },
        { title: "Things I believe (this week)", date: "Feb 9, 2026", tags: ["notes"], body: [
          "Beauty is not a waste of compute. Slow is often correct. A good background changes a whole room.",
          "Ask me next week and the list will have grown a little." ] } ] },
    travels: { name: "Departures", img: "assets/plane.png", accent: "blue", tag: "Window seat, always.",
      intro: "The departures board. Places I've been, places still on the list, and the strange, weightless peace of an airport at 3am.",
      posts: [
        { title: "Places that stayed with me", date: "May 3, 2026", tags: ["memory"], body: [
          "Some cities you visit; some you keep. The ones I kept all had the same thing, a moment where I forgot to take a photo because I was too busy being there.",
          "That's how I rank them now. By how little I documented." ] },
        { title: "Still on the list", date: "Jan 22, 2026", tags: ["someday"], body: [
          "Cold places with hot springs. A train that takes too long on purpose. One ocean I haven't met yet.", "No rush. The list is half the fun." ] },
        { title: "Airports at 3am", date: "Oct 14, 2025", tags: ["liminal"], body: [
          "Everything hums. The shops are shut, the floors are shining, and you belong to nowhere for a few hours.",
          "I love it. It's the closest a building gets to feeling like a held breath." ] } ] },
    dreams: { name: "Up & Away", img: "assets/balloon.png", accent: "green", tag: "Some things you don't rush. You just rise.",
      intro: "The balloon never hurries. This room is for the long, drifting goals, the ones you measure in years, and the tiny adventures that keep you pointed upward.",
      posts: [
        { title: "What I'm chasing", date: "Jun 8, 2026", tags: ["goals"], body: [
          "To build one thing people genuinely love. To get good enough at something that it looks easy. To stay curious past the age when that's considered cute.", "Slow ascent. Steady burner." ] },
        { title: "Tiny adventures", date: "Mar 30, 2026", tags: ["joy"], body: [
          "A new route home. A recipe I had no business attempting. Saying yes to the smaller plan instead of the safer one.", "Adventures don't have to be expensive to count." ] },
        { title: "A letter to future me", date: "Dec 31, 2025", tags: ["letter"], body: [
          "Hey. If you're reading this, you made it another year. I hope you kept making things, and I hope at least one of them surprised you.",
          { q: "Don't trade the wonder for the to-do list." } ] } ] },
    city: { name: "The City", img: "assets/city.png", accent: "blue", tag: "I build things. Some of them even work.",
      intro: "A skyline of everything I'm making, code, mostly half-finished, mostly held together with hope and console.log. This is the workshop with the lights on.",
      posts: [
        { title: "netrunner.os, a love letter to old computers", date: "Jun 15, 2026", tags: ["project", "code"], body: [
          "It started as a joke and became the thing I think about in the shower. A little OS-flavoured playground for the kind of computing that felt like magic before everything became a login screen.",
          "It's rough. It's mine. It's getting better." ] },
        { title: "What I'm building now", date: "Apr 27, 2026", tags: ["wip"], body: [
          "Glass interfaces. A few experiments that probably won't ship. Whatever this garden becomes next.", "If a build looks finished, I haven't looked closely enough yet." ] },
        { title: "Lessons from broken code", date: "Sep 5, 2025", tags: ["lessons"], body: [
          "Every bug I ever fixed taught me something I should've already known. The good ones taught me twice.",
          { q: "The code is honest. It does exactly what you said, not what you meant." } ] } ] },
    trinkets: { name: "Trinkets", img: "assets/ornament.png", accent: "green", tag: "Every object here has a story.",
      intro: "The curiosity cabinet. Games that rewired me, albums on permanent repeat, the comfort media I keep returning to like a warm room.",
      posts: [
        { title: "Games that rewired me", date: "May 20, 2026", tags: ["games"], body: [
          "Some games are toys; a few are arguments. The ones that stuck asked me to think while they entertained me, sneaking through a tanker in the rain, questioning who was even telling the story.",
          "I still hear those codec beeps in my dreams." ] },
        { title: "The albums on repeat", date: "Mar 11, 2026", tags: ["music"], body: [
          "There's a small shelf of records that are basically load-bearing at this point. Put one on and the whole day re-centres.", "Skipping a track on these feels rude." ] },
        { title: "Comfort media", date: "Nov 2, 2025", tags: ["cozy"], body: [
          "The shows and sounds I reach for when the world is loud. Nothing to prove, nothing to solve, just a known, gentle place.", "Everyone should have a few. These are mine." ] } ],
      gallery: [
        { img: "assets/obj2.png", cap: "The future, circa 2003", note: "a laptop that felt like pure magic" },
        { img: "assets/obj1.png", cap: "Kept because it's beautiful", note: "no other reason needed" },
        { img: "assets/obj3.png", cap: "From a good day", note: "small souvenir, big memory" },
        { img: "assets/obj4.png", cap: "Still works, somehow", note: "older than it has any right to be" },
        { img: "assets/obj5.png", cap: "A little treasure", note: "found, not bought" },
        { img: "assets/obj7.png", cap: "Pixel-perfect nostalgia", note: "glossy like the old web" },
        { img: "assets/obj8.png", cap: "On permanent display", note: "the comfort object" },
        { img: "assets/obj9.png", cap: "Tiny but mighty", note: "punches above its size" },
        { img: "assets/obj10.png", cap: "Just because", note: "joy needs no justification" },
        { img: "assets/obj6.png", cap: "The crown of the cabinet", note: "my favourite of them all" } ] }
  };
  var ORDER = ["bench", "world", "travels", "dreams", "city", "trinkets"];

  /* aggregates */
  function esc(s) { return String(s).replace(/[&<>]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]; }); }
  function bodyHTML(b) { return b.map(function (x) { return typeof x === "string" ? "<p>" + esc(x) + "</p>" : (x && x.q ? "<blockquote>" + esc(x.q) + "</blockquote>" : ""); }).join(""); }
  function tagsHTML(t, a) { return (t || []).map(function (x) { return "<span class='pill" + (a === "blue" ? " sky" : "") + "'>" + esc(x) + "</span>"; }).join(""); }
  function excerpt(p) { var s = ""; for (var i = 0; i < p.body.length; i++) if (typeof p.body[i] === "string") { s = p.body[i]; break; } s = s.replace(/\s+/g, " ").trim(); return s.length > 132 ? s.slice(0, 130) + "…" : s; }
  var allPosts = [];
  ORDER.forEach(function (id) { ROOMS[id].posts.forEach(function (p, i) { allPosts.push({ roomId: id, room: ROOMS[id], i: i, title: p.title, date: p.date, d: new Date(p.date), tags: p.tags || [], excerpt: excerpt(p) }); }); });
  allPosts.sort(function (a, b) { return b.d - a.d; });
  var tagCounts = {}; allPosts.forEach(function (p) { p.tags.forEach(function (t) { tagCounts[t] = (tagCounts[t] || 0) + 1; }); });

  var current = null, query = "", pendingPost = null;

  /* the real data layer (guestbook, visitors, koi) */
  var cloud = null, messages = [], spawnedKoi = {};
  function whenCloud(fn) { if (root.GardenCloud) fn(root.GardenCloud); else root.addEventListener("gardencloud-ready", function () { fn(root.GardenCloud); }, { once: true }); }
  function hueFor(s) { var h = 0; s = String(s || "koi"); for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h % 360; }
  function rand(a, b) { return a + Math.random() * (b - a); }
  function fmtWhen(ms) {
    if (!ms) return "host";
    var s = (Date.now() - ms) / 1000;
    if (s < 60) return "just now"; if (s < 3600) return Math.floor(s / 60) + "m ago"; if (s < 86400) return Math.floor(s / 3600) + "h ago";
    return new Date(ms).toLocaleDateString(undefined, { month: "short", day: "numeric" });
  }
  function items() { return cloud ? [cloud.HOST_KOI].concat(messages) : messages.slice(); }
  var KOI_IMGS = ["assets/fish1.png", "assets/fish2.png", "assets/fish3.png", "assets/fish4.png", "assets/fish6.png"];
  function koiImg(m) { return KOI_IMGS[hueFor((m && (m.id || m.name) || "k") + "f") % KOI_IMGS.length]; }
  function mineIds() { try { var a = JSON.parse(localStorage.getItem("vx_mine") || "[]"), o = {}; a.forEach(function (x) { o[x] = 1; }); return o; } catch (e) { return {}; } }
  function markMine(id) { try { var a = JSON.parse(localStorage.getItem("vx_mine") || "[]"); if (a.indexOf(id) < 0) { a.push(id); localStorage.setItem("vx_mine", JSON.stringify(a.slice(-50))); } } catch (e) {} }
  var pondTarget = null, lastSigned = null, lakeStop = null, lakeIds = "", pendingSpot = null;

  /* feed the live world: each message becomes a koi (most-recent set) */
  function syncKoi() {
    if (!root.Scene || !root.Scene.addKoi || !cloud) return;
    var pool = [cloud.HOST_KOI].concat(messages).slice(0, 16);
    pool.forEach(function (m) { if (m && !spawnedKoi[m.id]) { spawnedKoi[m.id] = 1; root.Scene.addKoi(m); } });
  }
  function renderMiniGuest() {
    var el = document.getElementById("gbookMini"); if (!el) return;
    var list = items().slice(0, 4);
    el.innerHTML = list.length
      ? list.map(function (m) { return "<div class='gmsg'><b>" + esc(m.name || "anon") + ":</b> " + esc(m.message) + "</div>"; }).join("")
      : "<div class='gmsg muted'>be the first to sign ♥</div>";
    var kc = document.getElementById("koiCount"); if (kc) kc.textContent = String(messages.length);
  }
  function renderPondList() {
    var el = document.getElementById("pondlist"); if (!el) return;
    el.innerHTML = items().map(function (m) {
      return "<div class='pondmsg" + (m.host ? " host" : "") + "'><span class='pm-koi' style='filter:hue-rotate(" + hueFor(m.name) + "deg) saturate(1.2)'></span>" +
        "<div class='pm-body'><div class='pm-top'><b>" + esc(m.name || "anonymous") + "</b><span class='pm-date'>" + esc(fmtWhen(m.createdAt)) + "</span></div><p>" + esc(m.message) + "</p></div></div>";
    }).join("");
    var pc = document.getElementById("pondCount"), pn = document.getElementById("pondNum");
    if (pc) pc.textContent = messages.length + " koi";
    if (pn) pn.textContent = String(messages.length);
  }
  function startGuestbook(c) {
    cloud = c;
    c.onMessages(function (list) { messages = list || []; renderMiniGuest(); renderPondList(); syncKoi(); refreshLakeIfOpen(); });
  }
  function setupVisitors(c) {
    var num = document.getElementById("visitsNum");
    c.registerVisit().then(function (v) { if (num) num.textContent = String(v); }).catch(function () { if (num) num.textContent = "-"; });
    c.locate().then(function (loc) {
      var vl = document.getElementById("vloc"), pin = document.getElementById("vpin");
      if (!loc) { if (vl) vl.textContent = "somewhere lovely"; return; }
      var where = [loc.city, loc.country].filter(Boolean).join(", ");
      if (vl) vl.innerHTML = "visiting from<br><b>" + esc(where || "somewhere lovely") + "</b>";
      if (pin && isFinite(loc.lat) && isFinite(loc.lon)) {
        var nx = loc.lon / 180, ny = -loc.lat / 90, len = Math.hypot(nx, ny); if (len > 1) { nx /= len; ny /= len; }
        pin.style.left = (50 + nx * 34).toFixed(1) + "%"; pin.style.top = (50 + ny * 34).toFixed(1) + "%"; pin.hidden = false;
      }
    });
  }
  function showNote(el, text, bad) { if (!el) return; el.textContent = text; el.classList.toggle("bad", !!bad); el.hidden = false; }
  function submitSign(e) {
    e.preventDefault();
    var nameEl = document.getElementById("gName"), msgEl = document.getElementById("gMsg"), note = document.getElementById("gNote"), btn = e.target.querySelector("button");
    var msg = (msgEl.value || "").trim();
    if (!msg) { showNote(note, "write a message first.", true); msgEl.focus(); return; }
    var last = 0; try { last = +localStorage.getItem("vx_lastsign") || 0; } catch (err) {}
    if (Date.now() - last < 15000) { showNote(note, "give it a few seconds between messages.", true); return; }
    if (!cloud) { showNote(note, "the pond is still loading, try again in a moment.", true); return; }
    btn.disabled = true; btn.classList.add("busy");
    cloud.addMessage(nameEl.value, msg).then(function (saved) {
      try { localStorage.setItem("vx_lastsign", String(Date.now())); } catch (err) {}
      markMine(saved.id); lastSigned = { id: saved.id, name: saved.name }; pendingSpot = saved.id;
      msgEl.value = ""; showNote(note, "your koi is now swimming above, labelled (you). copy its link below to share it.", false);
      if (root.Scene) { if (!spawnedKoi[saved.id]) { spawnedKoi[saved.id] = 1; root.Scene.addKoi(saved); } root.Scene.celebrate(); }
      var sh = document.getElementById("gShareRow"); if (sh) sh.hidden = false;
      lakeIds = "*force*"; refreshLakeIfOpen();
    }).catch(function () { showNote(note, "that did not save. try again in a moment.", true); })
      .then(function () { btn.disabled = false; btn.classList.remove("busy"); });
  }

  /* The lake: named koi from the guestbook, plus decorative fish, all swimming. */
  function buildLake(container) {
    var lake = container.querySelector(".lake"), layer = container.querySelector("#lakeKoi");
    if (!lake || !layer) return;
    if (lakeStop) { lakeStop(); lakeStop = null; }
    layer.innerHTML = "";
    var old = lake.querySelector(".lake-bubbles"); if (old) old.remove();
    var mine = mineIds(), list = items().slice(0, 28);
    lakeIds = list.map(function (m) { return m.id; }).join(",");
    var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    var W = layer.clientWidth || 600, H = layer.clientHeight || 360;
    var swimmers = [];

    function place(k) { k.el.style.transform = "translate(" + (k.cx - k.size / 2) + "px," + (k.cy - k.size / 2) + "px)"; }
    function leg(k) {
      var w = layer.clientWidth || W, h = layer.clientHeight || H, pad = k.size * 0.7;
      var nx = rand(pad, Math.max(pad + 1, w - pad)), ny = rand(pad, Math.max(pad + 1, h - pad));
      k.fish.style.transform = nx < k.cx ? "scaleX(-1)" : "scaleX(1)";
      var dist = Math.hypot(nx - k.cx, ny - k.cy), dur = Math.max(2600, dist * (k.slow || 20) + rand(0, 1600));
      var a = k.el.animate(
        [{ transform: "translate(" + (k.cx - k.size / 2) + "px," + (k.cy - k.size / 2) + "px)" },
         { transform: "translate(" + (nx - k.size / 2) + "px," + (ny - k.size / 2) + "px)" }],
        { duration: dur, easing: "ease-in-out", fill: "forwards" });
      k.cx = nx; k.cy = ny; k.anim = a; a.onfinish = function () { if (document.body.contains(k.el)) leg(k); };
    }

    // named koi (guestbook signatures)
    list.forEach(function (m) {
      var el = document.createElement("div"); el.className = "lkoi" + (m.host ? " host" : "") + (mine[m.id] ? " mine" : "");
      el.dataset.id = m.id;
      var sz = Math.round(rand(48, 78)), hue = hueFor(m.name);
      var who = m.host ? esc(m.name) + " (keeper)" : (mine[m.id] ? esc(m.name) + " (you)" : esc(m.name || "anonymous"));
      el.innerHTML =
        "<div class='lk-bubble'><b>" + who + "</b>" + esc(m.message) + "</div>" +
        "<img class='lk-fish' src='" + koiImg(m) + "' alt='' style='width:" + sz + "px;filter:hue-rotate(" + hue + "deg) saturate(1.2) drop-shadow(0 6px 9px rgba(8,40,60,.34))'>" +
        "<span class='lk-tag'>" + esc(m.name || "anon") + (m.host ? " (keeper)" : (mine[m.id] ? " (you)" : "")) + "</span>";
      layer.appendChild(el);
      var k = { el: el, fish: el.querySelector(".lk-fish"), size: sz, cx: rand(sz, W - sz), cy: rand(sz, H - sz), anim: null };
      place(k);
      el.addEventListener("pointerenter", function () { el.classList.add("show"); });
      el.addEventListener("pointerleave", function () { el.classList.remove("show"); });
      el.addEventListener("click", function (e) { e.stopPropagation(); var open = el.classList.contains("show"); layer.querySelectorAll(".lkoi.show").forEach(function (o) { o.classList.remove("show"); }); if (!open) el.classList.add("show"); tap(); });
      swimmers.push(k);
    });

    // decorative fish so the pond is always full and lively
    var FISH = ["assets/fish1.png", "assets/fish2.png", "assets/fish3.png", "assets/fish4.png", "assets/fish6.png"];
    var deco = Math.max(6, Math.min(11, Math.round(W / 95)));
    for (var i = 0; i < deco; i++) {
      var el2 = document.createElement("div"); el2.className = "lfish";
      var sz2 = Math.round(rand(30, 62)), op = rand(.5, .92);
      el2.innerHTML = "<img class='lk-fish' src='" + FISH[(Math.random() * FISH.length) | 0] + "' alt='' style='width:" + sz2 + "px;opacity:" + op.toFixed(2) + ";filter:hue-rotate(" + ((Math.random() * 360) | 0) + "deg) saturate(1.1) drop-shadow(0 5px 8px rgba(8,40,60,.28))'>";
      layer.appendChild(el2);
      var k2 = { el: el2, fish: el2.querySelector(".lk-fish"), size: sz2, cx: rand(sz2, W - sz2), cy: rand(sz2, H - sz2), anim: null, slow: rand(16, 30) };
      place(k2); swimmers.push(k2);
    }

    // rising bubbles
    var bubs = document.createElement("div"); bubs.className = "lake-bubbles"; bubs.setAttribute("aria-hidden", "true");
    var nb = Math.max(6, Math.min(12, Math.round(W / 80))), bh = "";
    for (var b = 0; b < nb; b++) bh += "<span style='left:" + rand(3, 97).toFixed(1) + "%;width:" + rand(5, 16).toFixed(0) + "px;animation-duration:" + rand(4, 9).toFixed(1) + "s;animation-delay:" + (-rand(0, 8)).toFixed(1) + "s'></span>";
    bubs.innerHTML = bh; lake.appendChild(bubs);

    if (!reduced) swimmers.forEach(function (k) { setTimeout(function () { leg(k); }, rand(0, 1600)); });

    // tap the water: ripple, and the nearest fish dart over to feed
    function feed(e) {
      if (e.target.closest(".lkoi")) return;
      var r = lake.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
      var rip = document.createElement("span"); rip.className = "lake-ripple"; rip.style.left = x + "px"; rip.style.top = y + "px"; lake.appendChild(rip); setTimeout(function () { rip.remove(); }, 900);
      if (reduced) return;
      swimmers.slice().sort(function (a, c) { return Math.hypot(a.cx - x, a.cy - y) - Math.hypot(c.cx - x, c.cy - y); }).slice(0, 4).forEach(function (k) {
        if (k.anim) k.anim.cancel();
        k.fish.style.transform = x < k.cx ? "scaleX(-1)" : "scaleX(1)";
        var a = k.el.animate([{ transform: "translate(" + (k.cx - k.size / 2) + "px," + (k.cy - k.size / 2) + "px)" }, { transform: "translate(" + (x - k.size / 2) + "px," + (y - k.size / 2) + "px)" }], { duration: Math.max(700, Math.hypot(x - k.cx, y - k.cy) * 8), easing: "ease-out", fill: "forwards" });
        k.cx = x; k.cy = y; k.anim = a; a.onfinish = function () { if (document.body.contains(k.el)) leg(k); };
      });
    }
    lake.addEventListener("pointerdown", feed);
    lakeStop = function () { lake.removeEventListener("pointerdown", feed); swimmers.forEach(function (k) { if (k.anim) k.anim.cancel(); }); };
  }
  function refreshLakeIfOpen() {
    var c = document.querySelector(".pond-view"); if (!c) return;
    var ids = items().slice(0, 28).map(function (m) { return m.id; }).join(",");
    if (ids !== lakeIds) buildLake(c);
    if (pendingSpot && spotlightKoi(pendingSpot)) pendingSpot = null;
  }
  function spotlightKoi(id, viaLink) {
    if (!id) return false;
    var el = document.querySelector('.lkoi[data-id="' + String(id).replace(/"/g, '\\"') + '"]');
    if (!el) return false;
    el.classList.add("spotlight", "show");
    var lake = el.closest(".lake"); if (lake) lake.scrollIntoView({ behavior: "smooth", block: "center" });
    if (viaLink) { var b = document.getElementById("pondBanner"); if (b) { var nm = ((el.querySelector(".lk-bubble b") || {}).textContent || "this").replace(/ \(.*\)$/, ""); b.innerHTML = "You followed <b>" + esc(nm) + "</b>'s koi here. Sign below and yours will swim next to it."; b.hidden = false; } }
    setTimeout(function () { el.classList.remove("spotlight"); }, 5200);
    return true;
  }

  /* Share your koi: copies a link that spotlights it for whoever opens it. */
  function koiLink(id) { return location.origin + location.pathname + "#/pond/" + encodeURIComponent(id); }
  function shareKoi(id, name) {
    if (!id) { go("#/pond"); return; }
    var url = koiLink(id), note = document.getElementById("gNote");
    var text = (name ? name + "'s koi" : "my koi") + " is swimming in the koi pond. come find it and leave your own.";
    if (navigator.share) { navigator.share({ title: "The Koi Pond", text: text, url: url }).catch(function () {}); return; }
    var done = function () { showNote(note, "link copied. paste it anywhere to show your koi.", false); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(done, function () { prompt("Copy your koi link:", url); });
    else prompt("Copy your koi link:", url);
  }

  /* day / night toggle (overrides the auto sky) */
  function setupSkyToggle() {
    var btn = document.getElementById("sky-toggle"); if (!btn || !root.Scene || !root.Scene.getPhase) return;
    function isNight() { return root.Scene.getPhase() === "night"; }
    function refresh() { var n = isNight(); btn.classList.toggle("night", n); btn.setAttribute("aria-pressed", String(n)); var l = btn.querySelector(".st-label"); if (l) l.textContent = n ? "Night" : "Daytime"; }
    btn.addEventListener("click", function () { root.Scene.setPhase(isNight() ? "day" : "night"); refresh(); tap(); });
    refresh();
  }

  /* feed */
  function feedHTML(list) {
    if (!list.length) return "<p class='muted' style='padding:12px;color:var(--ink-soft)'>Nothing here yet.</p>";
    return "<div class='feed'>" + list.map(function (p) {
      var hay = (p.title + " " + p.excerpt + " " + p.room.name + " " + p.tags.join(" ")).toLowerCase();
      return "<div class='entry' data-room='" + p.roomId + "' data-i='" + p.i + "' data-search=\"" + esc(hay) + "\">" +
        "<div class='e-thumb'><img src='" + p.room.img + "' alt='' loading='lazy'></div>" +
        "<div class='e-main'><div class='e-top'><span class='pill" + (p.room.accent === "blue" ? " sky" : "") + "'>" + esc(p.room.name) + "</span>" +
        "<h3>" + esc(p.title) + "</h3><span class='e-date'>" + esc(p.date) + "</span></div><p>" + esc(p.excerpt) + "</p></div></div>";
    }).join("") + "</div>";
  }

  /* views */
  function renderHome() {
    var tiles = ORDER.map(function (id) {
      var r = ROOMS[id];
      return "<button class='ex-tile' data-room='" + id + "'><div class='th'><img src='" + r.img + "' alt='' loading='lazy'></div><b>" + esc(r.name) + "</b><small>" + r.posts.length + " " + (r.posts.length === 1 ? "entry" : "entries") + "</small></button>";
    }).join("");
    return "<section class='view'>" +
      "<div class='panel'><div class='panel-h green'>Welcome</div><div class='panel-b'><div class='welcome'>" +
        "<div class='w-text'><h2>A little corner of the web</h2><p>I'm Vangax. This is my garden, part museum, part blog, part quiet afternoon outside. Browse the latest below, wander the rooms, or just watch the fish for a while.</p>" +
        "<div class='row'><button class='btn' data-room='bench'><span>Start at the bench</span></button><button class='btn sky' data-room='world'><span>Who's Vangax?</span></button></div></div></div></div></div>" +
      "<div class='panel'><div class='panel-h'>Latest entries<span class='right'>" + allPosts.length + " posts</span></div><div class='panel-b'>" + feedHTML(allPosts) + "</div></div>" +
      "<div class='panel'><div class='panel-h green'>The exhibits<span class='right'>" + ORDER.length + " rooms</span></div><div class='panel-b'><div class='ex-strip'>" + tiles + "</div></div></div>" +
    "</section>";
  }
  function renderRoom(id) {
    var r = ROOMS[id]; if (!r) return renderHome();
    var hp = r.accent === "blue" ? "" : " green";
    var posts = r.posts.map(function (p) {
      return "<article class='post'><div class='head'><h3>" + esc(p.title) + "</h3><span class='date'>" + esc(p.date) + "</span></div>" +
        "<div class='body'>" + bodyHTML(p.body) + "</div><div class='tags'>" + tagsHTML(p.tags, r.accent) + "</div></article>";
    }).join("");
    var cab = "";
    if (r.gallery) cab = "<div class='panel'><div class='panel-h green'>The cabinet<span class='right'>" + r.gallery.length + " relics · click to inspect</span></div><div class='panel-b'><div class='cabinet'>" +
      r.gallery.map(function (g, i) { return "<button class='relic' data-gi='" + i + "' aria-label='" + esc(g.cap) + "'><img src='" + g.img + "' alt='" + esc(g.cap) + "' loading='lazy'></button>"; }).join("") + "</div></div></div>";
    return "<section class='view'>" +
      "<div><a class='back' href='#/'><img src='assets/leaf_swoosh.png' alt=''><span>Back to the garden</span></a></div>" +
      "<div class='panel'><div class='panel-h" + hp + "'>" + esc(r.name) + "</div><div class='panel-b'><div class='room-banner'>" +
        "<img class='ribbon' src='assets/ribbon_green.png' alt='' aria-hidden='true'><div class='obj'><img src='" + r.img + "' alt=''></div>" +
        "<div><h1>" + esc(r.name) + "</h1><div class='tag'>" + esc(r.tag) + "</div><p class='intro'>" + esc(r.intro) + "</p></div></div></div></div>" +
      "<div class='panel'><div class='panel-h" + hp + "'>Entries<span class='right'>" + r.posts.length + "</span></div><div class='panel-b' style='padding:0 18px'>" + posts + "</div></div>" + cab +
    "</section>";
  }
  function renderTag(t) {
    var list = allPosts.filter(function (p) { return p.tags.indexOf(t) >= 0; });
    return "<section class='view'>" +
      "<div><a class='back' href='#/'><img src='assets/leaf_swoosh.png' alt=''><span>Back to the garden</span></a></div>" +
      "<div class='panel'><div class='panel-h'>Tagged &ldquo;" + esc(t) + "&rdquo;<span class='right'>" + list.length + " " + (list.length === 1 ? "entry" : "entries") + "</span></div><div class='panel-b'>" + feedHTML(list) + "</div></div></section>";
  }
  function renderPond() {
    var shared = cloud && cloud.mode === "firebase";
    var mode = shared
      ? "<span class='gform-mode live'>shared and live. everyone sees your fish.</span>"
      : "<span class='gform-mode'>saving on this device only. add Firebase to share with everyone.</span>";
    var shareHidden = lastSigned ? "" : " hidden";
    return "<section class='view pond-view'>" +
      "<div><a class='back' href='#/'><img src='assets/leaf_swoosh.png' alt=''><span>Back to the garden</span></a></div>" +
      "<div class='pond-banner' id='pondBanner' hidden></div>" +
      // the visible lake
      "<div class='panel'><div class='panel-h'>The Koi Pond<span class='right' id='pondCount'>…</span></div>" +
        "<div class='panel-b lake-wrap'><div class='lake' id='lake'>" +
          "<div class='lake-shimmer'></div><div class='lake-pads'><i></i><i></i><i></i><i></i></div>" +
          "<div class='lake-koi' id='lakeKoi'></div>" +
          "<div class='lake-cap'>hover a fish to read its message. tap the water to feed them.</div>" +
        "</div></div></div>" +
      // step 1: sign (this CREATES your koi)
      "<div class='panel'><div class='panel-h green'>Sign the pond</div><div class='panel-b'>" +
        "<p class='pond-lead'>Write your name and a message, then press <b>Sign the pond</b>. A koi with your name starts swimming in the pond above and stays in the garden for good. One koi is already there for you: the keeper.</p>" +
        "<form class='gform' id='gform'>" +
          "<div class='gform-row'><input id='gName' maxlength='40' placeholder='your name' autocomplete='nickname' spellcheck='false'>" +
            "<input id='gMsg' maxlength='280' placeholder='your message' autocomplete='off'></div>" +
          "<div class='gform-foot'>" + mode + "<button class='btn sky' type='submit'><span>Sign the pond</span></button></div>" +
          "<div class='gform-note' id='gNote' hidden></div>" +
        "</form>" +
        // step 2: share (this only copies a link to the koi you already made)
        "<div class='gshare' id='gShareRow'" + shareHidden + ">" +
          "<span>Your koi is swimming above. Want friends to find it? This button copies a link that makes your koi light up for them.</span>" +
          "<button class='btn' type='button' id='gShare'><span>Copy my koi link</span></button>" +
        "</div>" +
      "</div></div>" +
      // the full list
      "<div class='panel'><div class='panel-h green'>Every message<span class='right' id='pondNum'>…</span></div><div class='panel-b'><div class='pondlist' id='pondlist'><div class='gmsg muted'>loading the pond…</div></div></div></div>" +
    "</section>";
  }

  /* sidebar gadgets */
  function gad(title, body, blue) { return "<div class='gad" + (blue ? " blue" : "") + "'><div class='gad-h'><span class='dot'></span>" + title + "</div><div class='gad-b'>" + body + "</div></div>"; }
  function buildSide() {
    var side = document.getElementById("side");
    var nav = ORDER.map(function (id) { var r = ROOMS[id]; return "<div class='navrow' data-room='" + id + "'><span class='ico'><img src='" + r.img + "' alt=''></span><b>" + esc(r.name) + "</b><small>" + r.posts.length + "</small></div>"; }).join("");
    nav += "<div class='navrow pond-nav' data-pond='1'><span class='ico'><img src='assets/fish2.png' alt=''></span><b>The Koi Pond</b><small>live</small></div>";
    var tags = Object.keys(tagCounts).sort(function (a, b) { return tagCounts[b] - tagCounts[a]; }).slice(0, 12)
      .map(function (t) { return "<button data-tag='" + esc(t) + "'>" + esc(t) + "</button>"; }).join("");
    var peek = (ROOMS.trinkets.gallery || []).slice(0, 4).map(function (g, i) { return "<button data-relic='" + i + "'><img src='" + g.img + "' alt=''></button>"; }).join("");
    side.innerHTML =
      gad("Navigate", nav) +
      gad("Weather", "<div class='wx'><div class='wx-orb sunny'><span class='wx-sun'></span></div><div><div class='wx-temp'>25°</div><div class='wx-meta'>Always sunny in my garden</div></div></div>", true) +
      gad("Right now", "<div class='statline'><span>building</span><b>netrunner.os</b></div><div class='statline'><span>listening</span><b>lo-fi &amp; rain</b></div><div class='statline'><span>mood</span><b>optimistic</b></div>") +
      gad("Visitors", "<div class='visitors'><div class='vglobe'><img src='assets/globe2.png' alt=''><span class='vpin' id='vpin' hidden></span></div><div class='vinfo'><div class='vcount'><b id='visitsNum'>-</b><small>visitors</small></div><div class='vloc' id='vloc'>locating you…</div></div></div>", true) +
      gad("Tags", "<div class='tagcloud'>" + tags + "</div>") +
      gad("This garden", "<div class='statline'><span>entries</span><b>" + allPosts.length + "</b></div><div class='statline'><span>rooms</span><b>" + ORDER.length + "</b></div><div class='statline'><span>koi in the pond</span><b id='koiCount'>-</b></div><div class='statline'><span>growing since</span><b>2024</b></div>", true) +
      gad("From the cabinet", "<div class='peek'>" + peek + "</div>") +
      gad("Guestbook", "<div class='gbook' id='gbookMini'><div class='gmsg muted'>opening the pond…</div></div><button class='gbtn' id='gbSign' type='button'><span>Sign the guestbook</span></button>");

    // wiring
    side.querySelectorAll(".navrow").forEach(function (el) { el.addEventListener("click", function () { go(el.dataset.pond ? "#/pond" : "#/" + el.dataset.room); }); });
    side.querySelectorAll(".tagcloud button").forEach(function (el) { el.addEventListener("click", function () { go("#/tag/" + encodeURIComponent(el.dataset.tag)); }); });
    side.querySelectorAll(".peek button").forEach(function (el) { el.addEventListener("click", function () { go("#/trinkets"); setTimeout(function () { openLB(ROOMS.trinkets.gallery, +el.dataset.relic); }, 420); }); });
    var gbSign = side.querySelector("#gbSign"); if (gbSign) gbSign.addEventListener("click", function () { go("#/pond"); });
  }
  function syncSideActive() {
    var onPond = location.hash.replace(/^#\/?/, "") === "pond";
    document.querySelectorAll(".navrow").forEach(function (el) { el.classList.toggle("active", el.dataset.pond ? onPond : el.dataset.room === current); });
  }

  /* lightbox */
  var lb, lbImg, lbCap, lbList = [], lbIdx = 0;
  function buildLB() {
    lb = document.createElement("div"); lb.id = "lightbox"; lb.setAttribute("aria-hidden", "true");
    lb.innerHTML = "<div class='lb-frame'><button class='lb-btn lb-close' aria-label='Close'>✕</button><button class='lb-btn lb-prev' aria-label='Previous'>‹</button><button class='lb-btn lb-next' aria-label='Next'>›</button><img alt=''><div class='lb-cap'></div></div>";
    document.body.appendChild(lb);
    lbImg = lb.querySelector("img"); lbCap = lb.querySelector(".lb-cap");
    lb.addEventListener("click", function (e) { if (e.target === lb) closeLB(); });
    lb.querySelector(".lb-close").addEventListener("click", closeLB);
    lb.querySelector(".lb-prev").addEventListener("click", function () { stepLB(-1); });
    lb.querySelector(".lb-next").addEventListener("click", function () { stepLB(1); });
  }
  function showLB() { var g = lbList[lbIdx]; if (!g) return; lbImg.src = g.img; lbCap.innerHTML = esc(g.cap) + (g.note ? "<small>" + esc(g.note) + "</small>" : ""); }
  function openLB(list, i) { lbList = list; lbIdx = i || 0; showLB(); lb.classList.add("on"); lb.setAttribute("aria-hidden", "false"); }
  function closeLB() { lb.classList.remove("on"); lb.setAttribute("aria-hidden", "true"); }
  function stepLB(d) { if (!lbList.length) return; lbIdx = (lbIdx + d + lbList.length) % lbList.length; showLB(); if (root.Ambient) root.Ambient.tap(); }

  /* enhance + filter */
  function rippleAt(el, e) { var r = el.getBoundingClientRect(), s = Math.max(r.width, r.height) * 1.3; var sp = document.createElement("span"); sp.className = "ripple"; sp.style.width = sp.style.height = s + "px"; sp.style.left = (e.clientX - r.left) + "px"; sp.style.top = (e.clientY - r.top) + "px"; el.appendChild(sp); setTimeout(function () { sp.remove(); }, 650); }
  function tap() { if (root.Ambient) root.Ambient.tap(); }
  function enhance(app) {
    app.querySelectorAll(".entry").forEach(function (el) { el.addEventListener("click", function () { pendingPost = { roomId: el.dataset.room, i: +el.dataset.i }; tap(); go("#/" + el.dataset.room); }); });
    app.querySelectorAll(".ex-tile,[data-room]").forEach(function (el) { if (el.dataset.room) el.addEventListener("click", function () { tap(); go("#/" + el.dataset.room); }); });
    app.querySelectorAll(".relic").forEach(function (el) { el.addEventListener("click", function () { tap(); var g = current && ROOMS[current] && ROOMS[current].gallery; if (g) openLB(g, +el.dataset.gi); }); });
    app.querySelectorAll(".btn,.relic,.ex-tile").forEach(function (b) { b.addEventListener("pointerdown", function (e) { rippleAt(b, e); }); });
    var pond = app.querySelector(".pond-view");
    if (pond) {
      renderPondList(); buildLake(pond);
      var f = app.querySelector("#gform"); if (f) f.addEventListener("submit", submitSign);
      var sh = app.querySelector("#gShare"); if (sh) sh.addEventListener("click", function () { shareKoi(lastSigned && lastSigned.id, lastSigned && lastSigned.name); });
      if (pondTarget) { var pt = pondTarget; setTimeout(function () { spotlightKoi(pt, true); }, 500); }
    }
    applyFilter();
  }
  function applyFilter() {
    var feed = document.querySelector(".feed"); if (!feed || current) return;
    var n = 0; feed.querySelectorAll(".entry").forEach(function (e) { var ok = !query || e.dataset.search.indexOf(query) >= 0; e.style.display = ok ? "" : "none"; if (ok) n++; });
    var note = feed.parentNode.querySelector(".feed-empty"); if (query && !n) { if (!note) { note = document.createElement("p"); note.className = "feed-empty"; note.style.cssText = "padding:10px;color:var(--ink-soft)"; feed.parentNode.appendChild(note); } note.textContent = "Nothing matches “" + query + "”."; } else if (note) note.remove();
  }

  /* router */
  function go(hash) { location.hash = hash; }
  function paint() {
    var h = location.hash.replace(/^#\/?/, ""), app = document.getElementById("app");
    var html, title;
    if (h.indexOf("tag/") === 0) { var t = decodeURIComponent(h.slice(4)); current = null; html = renderTag(t); title = "#" + t; }
    else if (h === "pond" || h.indexOf("pond/") === 0) { current = null; pondTarget = h.indexOf("pond/") === 0 ? decodeURIComponent(h.slice(5)) : null; html = renderPond(); title = "The Koi Pond"; }
    else if (ROOMS[h]) { current = h; html = renderRoom(h); title = ROOMS[h].name; }
    else { current = null; html = renderHome(); title = "The Garden"; }
    app.innerHTML = html; document.title = "Vangax · " + title;
    syncSideActive(); enhance(app);
    if (current && pendingPost && pendingPost.roomId === current) { var ps = app.querySelectorAll(".post"); var el = ps[pendingPost.i]; if (el) setTimeout(function () { el.scrollIntoView({ behavior: "smooth", block: "center" }); el.style.transition = "background .3s"; el.style.background = "rgba(116,198,157,.22)"; setTimeout(function () { el.style.background = ""; }, 1300); }, 360); pendingPost = null; }
    else root.scrollTo({ top: 0, behavior: "auto" });
  }
  function route() { if (document.startViewTransition && !matchMedia("(prefers-reduced-motion: reduce)").matches) document.startViewTransition(paint); else paint(); }

  /* entry gate */
  function runGate() {
    var gate = document.getElementById("gate"); if (!gate) return;
    var entered = false; try { entered = sessionStorage.getItem("vx_entered") === "1"; } catch (e) {}
    if (entered) { gate.classList.add("gone"); gate.setAttribute("aria-hidden", "true"); return; }
    requestAnimationFrame(function () { var b = gate.querySelector(".gate-bar i"); if (b) b.style.width = "100%"; });
    var done = false;
    function open() { if (done) return; done = true; try { sessionStorage.setItem("vx_entered", "1"); } catch (e) {} gate.classList.add("open"); setTimeout(function () { gate.classList.add("gone"); gate.setAttribute("aria-hidden", "true"); }, 1000); }
    document.getElementById("gate-skip").addEventListener("click", open);
    gate.addEventListener("click", function (e) { if (e.target === gate) open(); });
    setTimeout(open, 2600);
  }

  /* clock */
  function startClock() {
    var el = document.getElementById("clock"); if (!el) return;
    function tick() { var n = new Date(), h = n.getHours(), hh = (h % 12 || 12); el.innerHTML = "<b>" + hh + ":" + String(n.getMinutes()).padStart(2, "0") + " " + (h < 12 ? "AM" : "PM") + "</b><small>" + n.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" }) + "</small>"; }
    tick(); setInterval(tick, 1000);
  }

  /* init */
  function init() {
    document.getElementById("year").textContent = new Date().getFullYear();
    var brand = document.getElementById("brand");
    brand.addEventListener("click", function () { go("#/"); });
    brand.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go("#/"); } });
    var sound = document.getElementById("sound");
    sound.addEventListener("click", function () { var on = root.Ambient ? root.Ambient.toggle() : false; sound.classList.toggle("on", on); sound.setAttribute("aria-pressed", String(on)); });
    var search = document.getElementById("search");
    search.addEventListener("input", function () { query = search.value.trim().toLowerCase(); if (current) { go("#/"); setTimeout(applyFilter, 60); } else applyFilter(); });

    buildSide(); buildLB(); startClock(); setupSkyToggle();
    whenCloud(function (c) { startGuestbook(c); setupVisitors(c); });
    document.addEventListener("keydown", function (e) { if (!lb || !lb.classList.contains("on")) return; if (e.key === "Escape") closeLB(); else if (e.key === "ArrowLeft") stepLB(-1); else if (e.key === "ArrowRight") stepLB(1); });
    root.addEventListener("hashchange", route);
    paint(); runGate();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})(window);
