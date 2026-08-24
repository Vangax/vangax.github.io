(function (root) {
  "use strict";

  var doc = document;

  var TRACE_W = 3840, TRACE_H = 2160;
  var SHAPE = [[2128, 395], [2857, 1100], [1831, 1166], [1501, 1084]]
    .map(function (p) { return [p[0] / TRACE_W, p[1] / TRACE_H]; });

  var TRI = SHAPE.map(function (p) { return [p[0] * TRACE_W, p[1] * TRACE_H]; });

  var elPlate = null, elFit = null, elImg = null, elFall = null, elSvg = null;
  var natural = { w: TRACE_W, h: TRACE_H };
  var usingFallback = false;
  function retrace() {
    TRI = SHAPE.map(function (p) { return [p[0] * natural.w, p[1] * natural.h]; });
  }
  var ready = false;

  function layout() {
    if (!elFit) return;
    var vw = root.innerWidth, vh = root.innerHeight;
    var s = Math.max(vw / natural.w, vh / natural.h);
    var w = natural.w * s, h = natural.h * s;
    var cxf = 0, cyf = 0;
    SHAPE.forEach(function (q) { cxf += q[0]; cyf += q[1]; });
    cxf /= SHAPE.length; cyf /= SHAPE.length;

    var left = (vw - w) / 2, top = (vh - h) / 2;
    if (w > vw) {
      var want = vw * 0.5 - cxf * w;
      left = Math.max(vw - w, Math.min(0, left + (want - left) * 0.85));
    }
    if (h > vh) {
      var wantY = vh * 0.46 - cyf * h;
      top = Math.max(vh - h, Math.min(0, top + (wantY - top) * 0.85));
    }
    elFit.style.width = w + "px";
    elFit.style.height = h + "px";
    elFit.style.left = left + "px";
    elFit.style.top = top + "px";

    var sx = 0, sy = 0;
    SHAPE.forEach(function (q) { sx += q[0]; sy += q[1]; });
    var cx = sx / SHAPE.length * 100;
    var cy = (sy / SHAPE.length - 0.06) * 100;
    elFit.style.transformOrigin = cx.toFixed(2) + "% " + cy.toFixed(2) + "%";

    if (usingFallback && elFall && elFall.width !== (w | 0)) paintFallback(w | 0, h | 0);
  }

  function rnd(seed) {
    var s = seed >>> 0 || 1;
    return function () {
      s ^= s << 13; s >>>= 0; s ^= s >> 17; s ^= s << 5; s >>>= 0;
      return s / 4294967296;
    };
  }

  function paintFallback(w, h) {
    if (!elFall || w < 2 || h < 2) return;
    elFall.width = w; elFall.height = h;
    var g = elFall.getContext("2d");
    var R = rnd(0xD06704), TAU = Math.PI * 2;
    var hz = h * 0.62;

    var sky = g.createLinearGradient(0, 0, 0, hz);
    sky.addColorStop(0, "#03080A");
    sky.addColorStop(0.45, "#07181B");
    sky.addColorStop(0.82, "#0C2E2C");
    sky.addColorStop(1, "#14443D");
    g.fillStyle = sky; g.fillRect(0, 0, w, hz + 2);

    var bl = g.createRadialGradient(w * 0.56, hz * 0.80, 0, w * 0.56, hz * 0.80, h * 0.66);
    bl.addColorStop(0, "rgba(96,232,196,.32)");
    bl.addColorStop(0.36, "rgba(52,150,140,.12)");
    bl.addColorStop(1, "rgba(52,150,140,0)");
    g.fillStyle = bl; g.fillRect(0, 0, w, h);

    g.fillStyle = "#03090B";
    g.beginPath(); g.moveTo(-10, hz);
    g.quadraticCurveTo(w * 0.24, hz - h * 0.30, w * 0.56, hz - h * 0.12);
    g.lineTo(w * 0.56, hz + 4); g.lineTo(-10, hz + 4); g.closePath(); g.fill();

    g.fillStyle = "#04090C";
    g.beginPath(); g.moveTo(w + 10, hz + 6); g.lineTo(w + 10, h * 0.04);
    g.quadraticCurveTo(w * 0.90, h * 0.10, w * 0.878, h * 0.42);
    g.quadraticCurveTo(w * 0.870, h * 0.62, w * 0.90, hz + 6);
    g.closePath(); g.fill();

    var neon = ["#FF2E88", "#22E8D0", "#F5D33C", "#7A5BFF", "#FF5A2E"];
    for (var s2 = 0; s2 < 30; s2++) {
      var bx = w * 0.28 + (R() - 0.5) * w * 0.19;
      var by = hz - h * 0.17 + (R() - 0.5) * h * 0.13;
      g.globalAlpha = 0.2 + R() * 0.5;
      g.fillStyle = neon[(R() * neon.length) | 0];
      g.fillRect(bx, by, 6 + R() * 32, 2.5 + R() * 6);
      g.globalAlpha = 1;
    }

    var sx = w / natural.w, sy = h / natural.h;
    var A = [TRI[0][0] * sx, TRI[0][1] * sy];
    var L = [TRI[1][0] * sx, TRI[1][1] * sy];
    var Rt = [TRI[TRI.length - 1][0] * sx, TRI[TRI.length - 1][1] * sy];

    var pg = g.createLinearGradient(A[0], A[1], (L[0] + Rt[0]) / 2, L[1]);
    pg.addColorStop(0, "rgba(190,255,240,.42)");
    pg.addColorStop(1, "rgba(50,170,158,.30)");
    g.beginPath(); g.moveTo(A[0], A[1]); g.lineTo(L[0], L[1]); g.lineTo(Rt[0], Rt[1]);
    g.closePath(); g.fillStyle = pg; g.fill();

    g.strokeStyle = "rgba(150,250,224,.55)"; g.lineWidth = Math.max(1, w / 900);
    var N = 5;
    for (var i = 1; i <= N; i++) {
      var t = i / N;
      var a = [A[0] + (L[0] - A[0]) * t, A[1] + (L[1] - A[1]) * t];
      var b = [A[0] + (Rt[0] - A[0]) * t, A[1] + (Rt[1] - A[1]) * t];
      g.beginPath(); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); g.stroke();
      for (var j = 0; j <= i; j++) {
        var p = [a[0] + (b[0] - a[0]) * (j / i || 0), a[1] + (b[1] - a[1]) * (j / i || 0)];
        g.beginPath(); g.moveTo(A[0], A[1]); g.lineTo(p[0], p[1]); g.stroke();
      }
    }
    g.beginPath(); g.moveTo(A[0], A[1]); g.lineTo(L[0], L[1]); g.lineTo(Rt[0], Rt[1]);
    g.closePath(); g.strokeStyle = "rgba(190,255,242,.85)";
    g.lineWidth = Math.max(1.4, w / 600); g.stroke();

    var bg = g.createLinearGradient(A[0], A[1], A[0], 0);
    bg.addColorStop(0, "rgba(140,255,224,.55)");
    bg.addColorStop(1, "rgba(140,255,224,0)");
    g.fillStyle = bg;
    g.beginPath();
    g.moveTo(A[0] - w * 0.006, A[1]); g.lineTo(A[0] + w * 0.006, A[1]);
    g.lineTo(A[0] + w * 0.002, 0); g.lineTo(A[0] - w * 0.002, 0);
    g.closePath(); g.fill();

    var gr = g.createLinearGradient(0, hz, 0, h);
    gr.addColorStop(0, "#0C2A28"); gr.addColorStop(0.24, "#061417"); gr.addColorStop(1, "#02060A");
    g.fillStyle = gr; g.fillRect(0, hz - 1, w, h - hz + 1);

    g.save();
    g.translate(w * 0.32, hz + (h - hz) * 0.52); g.scale(1, 0.30);
    g.strokeStyle = "rgba(255,46,136,.5)"; g.lineWidth = 3;
    g.beginPath(); g.arc(0, 0, w * 0.14, 0, TAU); g.stroke();
    g.restore();

    var ox = w * 0.315, oby = hz + (h - hz) * 0.56, oh = h * 0.42, ow = w * 0.016;
    g.fillStyle = "#080D0E";
    g.beginPath();
    g.moveTo(ox - ow * 0.5, oby); g.lineTo(ox - ow * 0.34, oby - oh);
    g.lineTo(ox, oby - oh - h * 0.032); g.lineTo(ox + ow * 0.34, oby - oh);
    g.lineTo(ox + ow * 0.5, oby); g.closePath(); g.fill();

    for (var rf = 0; rf < (w / 10) | 0; rf++) {
      g.fillStyle = "rgba(96,220,200," + (0.012 + R() * 0.05).toFixed(3) + ")";
      g.fillRect(R() * w, hz, 1 + R() * 2.4, (h - hz) * (0.05 + R() * 0.5));
    }
    elFall.classList.add("on");
  }

  var api = {
    hit: function (x, y) {
      if (!elFit) return false;
      var r = elFit.getBoundingClientRect();
      var px = (x - r.left) / r.width * natural.w;
      var py = (y - r.top) / r.height * natural.h;
      var inside = false;
      for (var i = 0, j = TRI.length - 1; i < TRI.length; j = i++) {
        var xi = TRI[i][0], yi = TRI[i][1], xj = TRI[j][0], yj = TRI[j][1];
        if (((yi > py) !== (yj > py)) &&
            (px < (xj - xi) * (py - yi) / ((yj - yi) || 1e-6) + xi)) inside = !inside;
      }
      return inside;
    },

    hot: function (on) { elPlate.classList.toggle("hot", !!on); },

    dive: function () { elPlate.classList.add("diving"); },
    done: function () { elPlate.classList.add("gone"); },
    back: function () {
      elFit.style.transition = "none";
      elPlate.classList.remove("diving");
      layout();
      void elFit.offsetWidth;
      requestAnimationFrame(function () {
        elFit.style.transition = "";
        elPlate.classList.remove("gone");
      });
    },

    ready: function () { return ready; },

    init: function () {
      elPlate = doc.getElementById("plate");
      elFit = doc.getElementById("plateFit");
      elImg = doc.getElementById("plateImg");
      elFall = doc.getElementById("plateFall");
      elSvg = doc.getElementById("plateHot");

      var tries = ["assets/dogtown.webp", "assets/dogtown.jpg", "assets/dogtown.png"];
      var i = 0;
      function next() {
        if (i >= tries.length) {
          console.info("[garden] no dogtown plate on disk — painting the fallback. " +
                       "drop your screenshot at garden/assets/dogtown.jpg to use the real frame.");
          retrace();
          usingFallback = true;
          paintFallback(elFit.clientWidth | 0, elFit.clientHeight | 0);
          ready = true;
          layout();
          return;
        }
        var probe = new Image();
        probe.onload = function () {
          natural.w = probe.naturalWidth || TRACE_W;
          natural.h = probe.naturalHeight || TRACE_H;
          retrace();
          elSvg.setAttribute("viewBox", "0 0 " + natural.w + " " + natural.h);
          var pts = TRI.map(function (p) { return p[0] + "," + p[1]; }).join(" ");
          doc.getElementById("hotTri").setAttribute("points", pts);
          doc.getElementById("hotEdge").setAttribute("points", pts);
          elImg.src = probe.src;
          elImg.classList.add("on");
          ready = true;
          layout();
        };
        probe.onerror = function () { i++; next(); };
        probe.src = tries[i];
      }
      next();

      layout();
      root.addEventListener("resize", layout);
    }
  };

  root.Plate = api;
})(window);
