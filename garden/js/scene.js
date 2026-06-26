/* scene.js: the background world. Clouds, balloons, a plane, trees, fish,
   butterflies, motes, click bubbles, the koi, day and night, idle bubbles.
   Transform-only and reduced-motion aware. */
(function (root) {
  "use strict";
  var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var SVGNS = "http://www.w3.org/2000/svg";
  function rand(a, b) { return a + Math.random() * (b - a); }
  function pick(a) { return a[(Math.random() * a.length) | 0]; }
  function img(cls, src, parent) { var e = document.createElement("img"); e.className = cls; e.src = src; e.alt = ""; e.loading = "lazy"; e.decoding = "async"; (parent || document.body).appendChild(e); return e; }

  var cv, ctx, w, h, dpr, motes = [], pointer = { x: -999, y: -999 };
  function Mote(init) {
    this.reset = function (top) {
      this.x = rand(0, w); this.y = top ? rand(0, h) : h + rand(8, 60);
      this.bub = Math.random() < 0.25; this.r = this.bub ? rand(3, 8) : rand(1, 3.2);
      this.vy = rand(7, 22) + this.r; this.sway = rand(8, 28); this.freq = rand(.4, 1.3); this.ph = rand(0, 6.28);
      this.a = this.bub ? rand(.16, .38) : rand(.3, .8);
    }; this.reset(init);
  }
  function resize() { dpr = Math.min(root.devicePixelRatio || 1, 2); w = cv.clientWidth; h = cv.clientHeight; cv.width = w * dpr | 0; cv.height = h * dpr | 0; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
  var last = 0;
  function frame(t) {
    if (root.__sceneStop) return;
    if (!cv.width) resize();
    var dt = Math.min(.05, (t - last) / 1000) || .016; last = t;
    if (document.hidden) { requestAnimationFrame(frame); return; }
    ctx.clearRect(0, 0, w, h);
    for (var i = 0; i < motes.length; i++) {
      var m = motes[i]; m.y -= m.vy * dt; m.ph += m.freq * dt;
      var mx = m.x + Math.sin(m.ph) * m.sway;
      var dx = mx - pointer.x, dy = m.y - pointer.y, d2 = dx * dx + dy * dy;
      if (d2 < 13000) { var f = (1 - d2 / 13000) * dt; mx += dx * f * 1.2; m.y += dy * f * 1.2; }
      if (m.y < -20) m.reset(false);
      if (m.bub) {
        var g = ctx.createRadialGradient(mx - m.r * .3, m.y - m.r * .3, m.r * .1, mx, m.y, m.r);
        g.addColorStop(0, "rgba(255,255,255," + (m.a + .3) + ")"); g.addColorStop(.5, "rgba(183,228,199," + m.a * .6 + ")"); g.addColorStop(1, "rgba(72,202,228," + m.a * .35 + ")");
        ctx.beginPath(); ctx.arc(mx, m.y, m.r, 0, 6.283); ctx.fillStyle = g; ctx.fill();
        ctx.beginPath(); ctx.arc(mx - m.r * .35, m.y - m.r * .4, m.r * .22, 0, 6.283); ctx.fillStyle = "rgba(255,255,255," + (m.a + .3) + ")"; ctx.fill();
      } else {
        var gg = ctx.createRadialGradient(mx, m.y, 0, mx, m.y, m.r * 2.4);
        gg.addColorStop(0, "rgba(245,255,240," + m.a + ")"); gg.addColorStop(1, "rgba(149,213,178,0)");
        ctx.beginPath(); ctx.arc(mx, m.y, m.r * 2.4, 0, 6.283); ctx.fillStyle = gg; ctx.fill();
      }
    }
    requestAnimationFrame(frame);
  }

  function crosser(el, opts) {  // travel left<->right, bob, reroll on finish
    function run() {
      var vw = root.innerWidth, vh = root.innerHeight;
      var ltr = Math.random() < .5, dir = ltr ? 1 : -1;
      var y = rand(opts.yMin * vh, opts.yMax * vh), bob = rand(opts.bob[0], opts.bob[1]);
      var x0 = ltr ? -opts.pad : vw + opts.pad, x1 = ltr ? vw + opts.pad : -opts.pad;
      var sc = rand(opts.scale[0], opts.scale[1]);
      var a = el.animate([
        { transform: "translate(" + x0 + "px," + y + "px) scale(" + dir * sc + "," + sc + ")" },
        { transform: "translate(" + ((x0 + x1) / 2) + "px," + (y - bob) + "px) scale(" + dir * sc + "," + sc + ")" },
        { transform: "translate(" + x1 + "px," + y + "px) scale(" + dir * sc + "," + sc + ")" }
      ], { duration: rand(opts.dur[0], opts.dur[1]), easing: "ease-in-out", delay: opts.delay || 0 });
      a.onfinish = run; opts.delay = 0;
    }
    if (!reduced) run(); else el.style.transform = "translate(" + (root.innerWidth * .6) + "px," + (root.innerHeight * .3) + "px)";
  }
  function wanderer(el, dur) {   // butterflies: roam to random points
    function run() {
      var vw = root.innerWidth, vh = root.innerHeight, fr = [], n = 7;
      for (var i = 0; i <= n; i++) fr.push({ transform: "translate(" + rand(30, vw - 70) + "px," + rand(vh * .12, vh * .8) + "px) rotate(" + rand(-16, 16) + "deg) scaleX(" + (Math.random() < .5 ? 1 : -1) + ")", offset: i / n });
      var a = el.animate(fr, { duration: rand(dur[0], dur[1]), easing: "ease-in-out" }); a.onfinish = run;
    }
    if (!reduced) run();
  }

  function buildSky() {
    var sky = document.getElementById("sky"); if (!sky) return;
    var clouds = ["assets/cloud1.png", "assets/cloud2.png", "assets/cloud3.png", "assets/cloud4.png", "assets/cloud6.png"];
    var n = reduced ? 2 : 5;
    for (var i = 0; i < n; i++) {
      var c = img("cloud", clouds[i % clouds.length], sky);
      c.style.top = rand(2, 42) + "%"; c.dataset.i = i;
      crosser(c, { yMin: 0, yMax: 0, bob: [0, 0], scale: [.5 + i * .12, .7 + i * .12], dur: [70000, 130000], pad: 500, delay: -rand(0, 60000) });
      c.style.transform = "translateX(-600px)";
      driftCloud(c, .4 + i * .18);
    }
    if (!reduced) {
      var b1 = img("balloon-sky", "assets/sky_balloon1.png", sky); floatBalloon(b1, [60000, 90000]);
      var b2 = img("balloon-sky", "assets/sky_balloon3.png", sky); floatBalloon(b2, [80000, 120000]);
      var plane = img("plane-sky", "assets/sky_plane1.png", sky); planeLoop(plane);
    }
  }
  function driftCloud(el, speed) {
    function run() {
      var vw = root.innerWidth, ltr = Math.random() < .5;
      var x0 = ltr ? -el.offsetWidth - 60 : vw + 60, x1 = ltr ? vw + 60 : -el.offsetWidth - 60;
      var top = rand(1, 42);
      el.style.top = top + "%";
      var a = el.animate([{ transform: "translateX(" + x0 + "px)" }, { transform: "translateX(" + x1 + "px)" }],
        { duration: rand(80000, 150000) / Math.max(.4, speed), easing: "linear" });
      a.onfinish = run;
    }
    if (!reduced) run();
  }
  function floatBalloon(el, dur) {
    function run() {
      var vw = root.innerWidth, vh = root.innerHeight, x = rand(.1, .85) * vw, drift = rand(-80, 80), sc = rand(.5, .95);
      el.style.transform = "translate(" + x + "px," + (vh + 160) + "px) scale(" + sc + ")";
      var a = el.animate([
        { transform: "translate(" + x + "px," + (vh + 160) + "px) scale(" + sc + ")" },
        { transform: "translate(" + (x + drift) + "px," + (-260) + "px) scale(" + sc + ")" }
      ], { duration: rand(dur[0], dur[1]), easing: "ease-in" });
      a.onfinish = run;
    }
    run();
  }
  function planeLoop(el) {
    function go() {
      var vw = root.innerWidth, vh = root.innerHeight, ltr = Math.random() < .5, dir = ltr ? 1 : -1;
      var y = rand(.06, .3) * vh, sc = rand(.4, .7);
      var x0 = ltr ? -el.offsetWidth - 80 : vw + 80, x1 = ltr ? vw + 80 : -el.offsetWidth - 80;
      var a = el.animate([
        { transform: "translate(" + x0 + "px," + y + "px) scaleX(" + dir + ") scale(" + sc + ")", offset: 0 },
        { transform: "translate(" + x1 + "px," + (y - 30) + "px) scaleX(" + dir + ") scale(" + sc + ")", offset: 1 }
      ], { duration: rand(14000, 22000), easing: "linear" });
      a.onfinish = function () { setTimeout(go, rand(12000, 26000)); };
    }
    setTimeout(go, rand(3000, 9000));
  }
  function buildFloor() {
    var floor = document.getElementById("floor"); if (!floor) return;
    var trees = ["assets/tree1.png", "assets/tree2.png", "assets/tree3.png", "assets/tree4.png", "assets/tree6.png"];
    var n = reduced ? 4 : 9;
    for (var i = 0; i < n; i++) {
      var t = img("tree", pick(trees), floor);
      var depth = Math.random();                  // 0 far(small,pale) .. 1 near(big)
      var hgt = 70 + depth * 120;
      t.style.height = hgt + "px"; t.style.left = (i / (n - 1) * 100 + rand(-6, 6)) + "%";
      t.style.opacity = (.55 + depth * .45).toFixed(2);
      t.style.zIndex = (depth * 10) | 0;
      t.style.setProperty("--sw", rand(5, 9).toFixed(1) + "s");
      t.classList.add("swayer");
      t.style.animationDelay = (-rand(0, 6)).toFixed(1) + "s";
    }
  }
  function buildLife() {
    var fish = ["assets/fish1.png", "assets/fish2.png", "assets/fish3.png", "assets/fish4.png", "assets/fish6.png"];
    var n = reduced ? 2 : 5;
    for (var i = 0; i < n; i++) {
      var f = img("fish", fish[i % fish.length]);
      crosser(f, { yMin: .25, yMax: .82, bob: [16, 46], scale: [.5, .95], dur: [20000, 38000], pad: 140 });
    }
    ["assets/butterfly.png", "assets/bug2.png"].forEach(function (src, i) {
      var b = img("flit", src); b.style.width = (i ? 52 : 60) + "px"; wanderer(b, [22000, 36000]);
    });
  }

  var bubbleSrc = ["assets/bubble1.png", "assets/bubble2.png", "assets/bubble3.png", "assets/bubble4.png"], liveBubbles = 0;
  // click anywhere, get a bubble. simple pleasures.
  function popBubble(x, y) {
    if (reduced || liveBubbles > 8) return; liveBubbles++;
    var b = img("clickbub", pick(bubbleSrc)); var s = rand(26, 64);
    b.style.width = s + "px"; b.style.left = (x - s / 2) + "px"; b.style.top = (y - s / 2) + "px";
    var a = b.animate([
      { transform: "translateY(0) scale(.4)", opacity: 0 },
      { transform: "translateY(-30px) scale(1)", opacity: .95, offset: .2 },
      { transform: "translateY(" + (-rand(160, 320)) + "px) translateX(" + rand(-40, 40) + "px) scale(1.05)", opacity: 0 }
    ], { duration: rand(1600, 2600), easing: "ease-out" });
    a.onfinish = function () { b.remove(); liveBubbles--; };
  }

  function escTxt(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function hueFor(s) { var h = 0; s = String(s || "koi"); for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h % 360; }
  var koiSrc = ["assets/fish1.png", "assets/fish2.png", "assets/fish3.png", "assets/fish4.png", "assets/fish6.png"];
  var koiBand = { min: 0.30, max: 0.82 }, liveKoi = [], KOI_MAX = 16;

  function koiSwim(wrap, fish, sz) {
    function run() {
      var vw = root.innerWidth, vh = root.innerHeight;
      var ltr = Math.random() < .5, dir = ltr ? 1 : -1;
      var y = rand(koiBand.min * vh, koiBand.max * vh), bob = rand(14, 40);
      var x0 = ltr ? -sz - 70 : vw + sz + 70, x1 = ltr ? vw + sz + 70 : -sz - 70;
      fish.style.transform = "scaleX(" + dir + ")";
      var a = wrap.animate([
        { transform: "translate(" + x0 + "px," + y + "px)" },
        { transform: "translate(" + ((x0 + x1) / 2) + "px," + (y - bob) + "px)" },
        { transform: "translate(" + x1 + "px," + y + "px)" }
      ], { duration: rand(26000, 47000), easing: "ease-in-out" });
      a.onfinish = run;
    }
    if (!reduced) run(); else wrap.style.transform = "translate(" + (root.innerWidth * .5) + "px," + (root.innerHeight * .5) + "px)";
  }
  function makeKoi(msg) {
    var wrap = document.createElement("div"); wrap.className = "koi";
    var fish = document.createElement("img"); fish.className = "koi-fish"; fish.src = pick(koiSrc); fish.alt = ""; fish.decoding = "async";
    var sz = rand(62, 104); fish.style.width = sz + "px";
    fish.style.filter = "hue-rotate(" + hueFor(msg.name) + "deg) saturate(1.18) drop-shadow(0 8px 12px rgba(16,52,80,.3))";
    var tag = document.createElement("span"); tag.className = "koi-tag"; tag.textContent = msg.name || "anonymous";
    var bub = document.createElement("div"); bub.className = "koi-bubble"; bub.innerHTML = "<b>" + escTxt(msg.name || "anonymous") + "</b>" + escTxt(msg.message);
    wrap.appendChild(fish); wrap.appendChild(tag); wrap.appendChild(bub);
    document.body.appendChild(wrap);
    fish.addEventListener("pointerenter", function () { wrap.classList.add("show"); });
    fish.addEventListener("pointerleave", function () { wrap.classList.remove("show"); });
    fish.addEventListener("click", function (e) { e.stopPropagation(); wrap.classList.toggle("show"); if (root.Ambient) root.Ambient.tap(); });
    koiSwim(wrap, fish, sz);
    return wrap;
  }

  var phaseOverride = null;                 // null = follow real local time; else a fixed phase
  try { phaseOverride = localStorage.getItem("vx_phase") || null; } catch (e) {}
  function autoPhase() { var h = new Date().getHours(); return (h >= 5 && h < 8) ? "dawn" : (h >= 8 && h < 17) ? "day" : (h >= 17 && h < 20) ? "dusk" : "night"; }
  function effectivePhase() { return phaseOverride || autoPhase(); }
  function applyPhase() { document.body.dataset.phase = effectivePhase(); }
  function setupAtmosphere() {
    var dn = document.createElement("div"); dn.id = "daynight"; dn.setAttribute("aria-hidden", "true"); document.body.appendChild(dn);
    var stars = document.createElement("div"); stars.id = "stars"; stars.setAttribute("aria-hidden", "true");
    var sp = ""; for (var i = 0; i < 70; i++) sp += "<i style='left:" + rand(0, 100).toFixed(2) + "%;top:" + rand(0, 60).toFixed(2) + "%;--tw:" + rand(2.2, 6).toFixed(1) + "s;--sd:" + rand(0, 5).toFixed(1) + "s;width:" + rand(1, 2.6).toFixed(1) + "px'></i>";
    stars.innerHTML = sp; document.body.appendChild(stars);
    applyPhase(); setInterval(function () { if (!phaseOverride) applyPhase(); }, 300000);
  }

  // leave the page alone for ~28s and the bubbles come out. windows 7 would be proud.
  function idleBubble() {
    var b = img("idlebub", pick(bubbleSrc)); var s = rand(70, 160), vh = root.innerHeight;
    b.style.width = s + "px"; b.style.left = rand(0, root.innerWidth - s) + "px"; b.style.top = (vh + s) + "px";
    var a = b.animate([
      { transform: "translateY(0) scale(.9)", opacity: 0 },
      { transform: "translateY(" + (-vh * .25) + "px) translateX(" + rand(-30, 30) + "px) scale(1)", opacity: .5, offset: .25 },
      { transform: "translateY(" + (-vh - s) + "px) translateX(" + rand(-90, 90) + "px) scale(1.05)", opacity: 0 }
    ], { duration: rand(9000, 15000), easing: "ease-in-out" });
    a.onfinish = function () { b.remove(); };
  }
  function setupIdle() {
    if (reduced) return; var t = null, idle = false;
    function pump() { if (!idle || document.hidden) return; idleBubble(); setTimeout(pump, rand(1100, 2200)); }
    function sleep() { idle = true; pump(); }
    function wake() { if (idle) idle = false; clearTimeout(t); t = setTimeout(sleep, 28000); }
    ["pointermove", "pointerdown", "keydown", "scroll", "touchstart"].forEach(function (ev) { root.addEventListener(ev, wake, { passive: true }); });
    wake();
  }

  function init() {
    cv = document.getElementById("motes"); if (cv) { ctx = cv.getContext("2d"); resize(); root.addEventListener("resize", resize); for (var i = 0; i < (reduced ? 12 : 40); i++) motes.push(new Mote(true)); requestAnimationFrame(frame); }
    root.addEventListener("pointermove", function (e) {
      pointer.x = e.clientX; pointer.y = e.clientY;
      if (!reduced) { var d = document.documentElement; d.style.setProperty("--px", ((e.clientX / root.innerWidth - .5) * 2).toFixed(3)); d.style.setProperty("--py", ((e.clientY / root.innerHeight - .5) * 2).toFixed(3)); }
    }, { passive: true });
    root.addEventListener("pointerleave", function () { pointer.x = -999; pointer.y = -999; });
    root.addEventListener("pointerdown", function (e) { popBubble(e.clientX, e.clientY); }, { passive: true });
    buildSky(); buildFloor(); buildLife(); setupAtmosphere(); setupIdle();
  }

  root.Scene = {
    addKoi: function (msg) {
      if (reduced || !msg) return null;
      var w = makeKoi(msg); liveKoi.push(w);
      while (liveKoi.length > KOI_MAX) { var old = liveKoi.shift(); if (old && old.remove) old.remove(); }
      return w;
    },
    celebrate: function () { if (reduced) return; var n = 5; for (var i = 0; i < n; i++) (function (k) { setTimeout(function () { popBubble(root.innerWidth * rand(.35, .65), root.innerHeight - rand(20, 90)); }, k * 90); })(i); },
    setPhase: function (p) {
      if (!p || p === "auto") { phaseOverride = null; try { localStorage.removeItem("vx_phase"); } catch (e) {} }
      else { phaseOverride = p; try { localStorage.setItem("vx_phase", p); } catch (e) {} }
      applyPhase(); return effectivePhase();
    },
    getPhase: function () { return effectivePhase(); },
    isAuto: function () { return !phaseOverride; }
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})(window);
