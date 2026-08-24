(function (root) {
  "use strict";

  var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var TAU = Math.PI * 2;

  function V(x, y, z) { return { x: x, y: y, z: z }; }
  function sub(a, b) { return V(a.x - b.x, a.y - b.y, a.z - b.z); }
  function add(a, b) { return V(a.x + b.x, a.y + b.y, a.z + b.z); }
  function mul(a, s) { return V(a.x * s, a.y * s, a.z * s); }
  function dot(a, b) { return a.x * b.x + a.y * b.y + a.z * b.z; }
  function cross(a, b) {
    return V(a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x);
  }
  function len(a) { return Math.sqrt(dot(a, a)); }
  function norm(a) { var l = len(a) || 1; return mul(a, 1 / l); }
  function mix(a, b, t) { return V(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t, a.z + (b.z - a.z) * t); }
  function mid3(t) {
    return V((t[0].x + t[1].x + t[2].x) / 3, (t[0].y + t[1].y + t[2].y) / 3, (t[0].z + t[1].z + t[2].z) / 3);
  }

  var B = 104;
  var Hh = 168;
  var ROWS = 6;

  var APEX = V(0, Hh, 0);
  var FL = V(-B, 0, B), FR = V(B, 0, B), BR = V(B, 0, -B), BL = V(-B, 0, -B);

  var FACES = [
    { id: "front", tri: [APEX, FL, FR], live: true },
    { id: "right", tri: [APEX, FR, BR], live: false },
    { id: "back",  tri: [APEX, BR, BL], live: false },
    { id: "left",  tri: [APEX, BL, FL], live: false }
  ];

  function panelise(A, L, R, n) {
    var out = [];
    for (var i = 0; i < n; i++) {
      var t0 = i / n, t1 = (i + 1) / n;
      var tl = mix(A, L, t0), tr = mix(A, R, t0);
      var bl = mix(A, L, t1), br = mix(A, R, t1);
      var cols = i + 1;
      for (var j = 0; j < cols; j++) {
        var a = mix(tl, tr, j / cols);
        var b = mix(tl, tr, (j + 1) / cols);
        var c = mix(bl, br, (j + 1) / cols);
        var d = mix(bl, br, j / cols);
        var flip = ((i + j) % 2) === 0;
        out.push({
          row: i, col: j, quad: [a, b, c, d], flip: flip,
          brace: flip ? [a, c] : [b, d],
          c: V((a.x + b.x + c.x + d.x) / 4, (a.y + b.y + c.y + d.y) / 4, (a.z + b.z + c.z + d.z) / 4)
        });
      }
    }
    return out;
  }

  FACES.forEach(function (f) {
    f.n = norm(cross(sub(f.tri[1], f.tri[0]), sub(f.tri[2], f.tri[0])));
    f.cells = panelise(f.tri[0], f.tri[1], f.tri[2], ROWS);
    f.cells.forEach(function (c) { c.n = f.n; c.face = f; });
  });
  var FRONT = FACES[0];

  var SLOTS = [];
  (function () {
    for (var r = 0; r < ROWS; r++) {
      for (var c = 0; c < r + 1; c++) SLOTS.push([r, c]);
    }
  })();
  function slot(i) {
    var s = SLOTS[i];
    if (!s) return null;
    for (var k = 0; k < FRONT.cells.length; k++) {
      var c = FRONT.cells[k];
      if (c.row === s[0] && c.col === s[1]) return c;
    }
    return null;
  }

  var cam = { eye: V(-20, 14, 236), at: V(2, 112, 0), fov: 60 };
  var bx = { r: V(1, 0, 0), u: V(0, 1, 0), f: V(0, 0, -1) };
  var UP = V(0, 1, 0);
  function rebuild() {
    bx.f = norm(sub(cam.at, cam.eye));
    bx.r = norm(cross(bx.f, UP));
    bx.u = cross(bx.r, bx.f);
  }

  var W = 0, H = 0, dpr = 1, cv = null, ctx = null, gb = null, gx = null;
  var NEAR = 1.2;

  function toView(p) {
    var d = sub(p, cam.eye);
    return { x: dot(d, bx.r), y: dot(d, bx.u), z: dot(d, bx.f) };
  }
  function toScreen(v) {
    var f = (H * 0.5) / Math.tan(cam.fov * Math.PI / 360);
    return { x: W * 0.5 + v.x * f / v.z, y: H * 0.5 - v.y * f / v.z, z: v.z };
  }
  function P(p) { var v = toView(p); return v.z < NEAR ? null : toScreen(v); }
  function seg(p, q) {
    var a = toView(p), b = toView(q), t;
    if (a.z < NEAR && b.z < NEAR) return null;
    if (a.z < NEAR) { t = (NEAR - a.z) / (b.z - a.z);
      a = { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, z: NEAR }; }
    else if (b.z < NEAR) { t = (NEAR - b.z) / (a.z - b.z);
      b = { x: b.x + (a.x - b.x) * t, y: b.y + (a.y - b.y) * t, z: NEAR }; }
    return [toScreen(a), toScreen(b)];
  }

  var bg = new Image(), bgOK = false;
  bg.onload = function () { bgOK = true; };
  bg.src = "assets/blackwall.jpg";

  function drawBackplate(g, el) {
    if (bgOK && bg.naturalWidth) {
      var drift = 1.10;
      var s = Math.max(W / bg.naturalWidth, H / bg.naturalHeight) * drift;
      var dw = bg.naturalWidth * s, dh = bg.naturalHeight * s;
      var m = P(V(0, Hh * 0.4, 0));
      var px = m ? (m.x - W * 0.5) * 0.06 : 0;
      var py = m ? (m.y - H * 0.5) * 0.04 : 0;
      g.save();
      try { g.filter = "blur(7px) saturate(1.25) brightness(.72)"; } catch (e) {}
      g.drawImage(bg, (W - dw) / 2 - px - 14, (H - dh) / 2 - py - 14, dw + 28, dh + 28);
      g.restore();
    } else {
      var f = g.createLinearGradient(0, 0, 0, H);
      f.addColorStop(0, "#0A2733");
      f.addColorStop(0.55, "#12475A");
      f.addColorStop(1, "#0B2E3C");
      g.fillStyle = f; g.fillRect(0, 0, W, H);
    }
    g.save();
    g.globalCompositeOperation = "lighter";
    g.fillStyle = "rgba(96,150,178,.20)";
    g.fillRect(0, 0, W, H);
    g.restore();
  }

  var MOTES = (function () {
    var out = [], sd = 20260824;
    function r() { sd = (sd * 1103515245 + 12345) & 0x7fffffff; return sd / 0x7fffffff; }
    for (var i = 0; i < 90; i++) {
      out.push({ x: r(), y: r(), v: 0.006 + r() * 0.022,
                 s: 0.6 + r() * 2.0, a: 0.10 + r() * 0.45, w: r() * 6.28 });
    }
    return out;
  })();

  function drawMotes(g, el) {
    if (reduced) return;
    g.save();
    g.globalCompositeOperation = "lighter";
    for (var i = 0; i < MOTES.length; i++) {
      var m = MOTES[i];
      var y = (m.y - el * m.v) % 1; if (y < 0) y += 1;
      var x = m.x + Math.sin(el * 0.25 + m.w) * 0.012;
      g.fillStyle = "rgba(206,246,255," + m.a.toFixed(3) + ")";
      g.fillRect(x * W, y * H, m.s, m.s * 2.6);
    }
    g.restore();
  }

  function drawVoid(g, el) {
    drawBackplate(g, el);
    drawMotes(g, el);

    var m = P(V(0, Hh * 0.50, 0));
    var cx = m ? m.x : W * 0.5, cy = m ? m.y : H * 0.48;
    var pulse = 0.94 + 0.06 * Math.sin(el * 0.5);
    var far = Math.max(W, H);

    g.save();
    g.globalCompositeOperation = "lighter";

    var halo = g.createRadialGradient(cx, cy, 0, cx, cy, far * 0.80);
    halo.addColorStop(0.00, "rgba(255,255,255," + (0.50 * pulse).toFixed(3) + ")");
    halo.addColorStop(0.14, "rgba(238,250,255," + (0.30 * pulse).toFixed(3) + ")");
    halo.addColorStop(0.32, "rgba(206,236,255," + (0.14 * pulse).toFixed(3) + ")");
    halo.addColorStop(0.60, "rgba(180,220,246,.05)");
    halo.addColorStop(1.00, "rgba(180,220,246,0)");
    g.fillStyle = halo; g.fillRect(0, 0, W, H);

    var ap = P(APEX);
    if (ap && !reduced) {
      for (var i = 0; i < 22; i++) {
        var a = (i / 22) * TAU + el * 0.010;
        var wd = 0.010 + ((i * 37) % 11) / 11 * 0.034;
        var ln = far * (0.60 + ((i * 53) % 7) / 7 * 0.80);
        var al = 0.030 + ((i * 29) % 5) / 5 * 0.055;
        var rg = g.createLinearGradient(ap.x, ap.y, ap.x + Math.cos(a) * ln, ap.y + Math.sin(a) * ln);
        rg.addColorStop(0, "rgba(255,255,255," + al.toFixed(3) + ")");
        rg.addColorStop(1, "rgba(255,255,255,0)");
        g.fillStyle = rg;
        g.beginPath(); g.moveTo(ap.x, ap.y);
        g.lineTo(ap.x + Math.cos(a - wd) * ln, ap.y + Math.sin(a - wd) * ln);
        g.lineTo(ap.x + Math.cos(a + wd) * ln, ap.y + Math.sin(a + wd) * ln);
        g.closePath(); g.fill();
      }
    }
    g.restore();
  }

  function drawFloor(g) {
    var N = 22, S = 84, EX = N * S;
    g.lineWidth = 1;
    for (var i = -N; i <= N; i++) {
      var far = Math.abs(i) / N, al = (1 - far * far) * 0.30;
      if (al <= 0.004) continue;
      var s1 = seg(V(-EX, 0, i * S), V(EX, 0, i * S));
      if (s1) {
        g.strokeStyle = "rgba(232,248,255," + al.toFixed(3) + ")";
        g.beginPath(); g.moveTo(s1[0].x, s1[0].y); g.lineTo(s1[1].x, s1[1].y); g.stroke();
      }
      var s2 = seg(V(i * S, 0, -EX), V(i * S, 0, EX));
      if (s2) {
        g.strokeStyle = "rgba(232,248,255," + (al * 0.7).toFixed(3) + ")";
        g.beginPath(); g.moveTo(s2[0].x, s2[0].y); g.lineTo(s2[1].x, s2[1].y); g.stroke();
      }
    }
  }

  var hovered = null, content = {}, mode = "face";
  var scanOn = false, scanHit = {}, progress = {};
  var beamQuad = null, beamHot = false, beamItem = null;
  var ptr = { x: -9999, y: -9999, on: false };
  var tris = [], fade = 1, t0 = performance.now();

  function key(c) { return c.row + ":" + c.col; }

  function inset(q, t) {
    var cx = (q[0].x + q[1].x + q[2].x + q[3].x) / 4;
    var cy = (q[0].y + q[1].y + q[2].y + q[3].y) / 4;
    return q.map(function (p) {
      return { x: p.x + (cx - p.x) * t, y: p.y + (cy - p.y) * t, z: p.z };
    });
  }
  function trace(g, q) {
    g.beginPath();
    g.moveTo(q[0].x, q[0].y);
    for (var i = 1; i < 4; i++) g.lineTo(q[i].x, q[i].y);
    g.closePath();
  }

  function drawCell(g, cell, glow, el, mirror) {
    var q = cell.quad.map(function (p) { return P(mirror ? V(p.x, -p.y, p.z) : p); });
    if (!q[0] || !q[1] || !q[2] || !q[3]) return null;

    function path() {
      g.beginPath();
      g.moveTo(q[0].x, q[0].y);
      for (var i = 1; i < 4; i++) g.lineTo(q[i].x, q[i].y);
      g.closePath();
    }

    var face = cell.face;
    var live = face.live;
    var item = live ? content[key(cell)] : null;
    var lit = !!item;
    var muted = scanOn && lit && !scanHit[item.slug];
    if (muted) lit = false;
    var isHit = scanOn && item && scanHit[item.slug];
    var hot = !mirror && live && hovered &&
              hovered.row === cell.row && hovered.col === cell.col;

    var toward = dot(cell.n, sub(cam.eye, cell.c)) > 0;
    var facing = Math.abs(dot(cell.n, norm(sub(cam.eye, cell.c))));
    var depth = (q[0].z + q[1].z + q[2].z + q[3].z) / 4;
    var tube = Math.max(toward ? 1.3 : 0.7, (toward ? 1000 : 520) / depth);
    var dim = toward ? 1 : 0.34;

    if (glow) {
      var br = 0.82 + 0.18 * Math.sin(el * 1.6 + cell.row * 0.9 + cell.col * 0.5);
      var rim = inset(q, 0.055);

      if (lit || hot) {
        trace(g, q);
        g.fillStyle = "rgba(255,255,255," + ((hot ? 1 : br) * dim).toFixed(3) + ")";
        g.fill();
      } else {
        trace(g, q);
        g.fillStyle = "rgba(150,235,255," + (0.045 * dim * (0.5 + facing * 0.5)).toFixed(3) + ")";
        g.fill();
      }

      var tI = (lit || hot) ? (isHit ? 1.3 : 1) : (muted ? 0.10 : 0.30);
      trace(g, rim);
      g.lineJoin = "round";
      g.strokeStyle = "rgba(190,246,255," + (tI * dim).toFixed(3) + ")";
      g.lineWidth = Math.max(1.4, tube * (lit || hot ? 1.7 : 0.85));
      g.stroke();
      g.strokeStyle = "rgba(255,255,255," + (tI * 0.9 * dim).toFixed(3) + ")";
      g.lineWidth = Math.max(0.6, tube * 0.42);
      g.stroke();

      if ((lit || hot) && toward && !reduced) {
        var ph = (el * 0.42 + cell.row * 0.31 + cell.col * 0.17) % 1;
        var ax = q[0].x + (q[2].x - q[0].x) * ph;
        var ay = q[0].y + (q[2].y - q[0].y) * ph;
        var sw = g.createRadialGradient(ax, ay, 0, ax, ay,
          Math.max(18, Math.abs(q[2].x - q[0].x) * 0.5));
        sw.addColorStop(0, "rgba(255,255,255,.95)");
        sw.addColorStop(1, "rgba(255,255,255,0)");
        trace(g, q);
        g.save(); g.clip();
        g.fillStyle = sw; g.fill();
        g.restore();
      }

      return { p: q, depth: depth, cell: cell, toward: toward };
    }

    path();
    if (hot) {
      g.fillStyle = "rgba(255,255,255,.98)";
      g.fill();
    } else if (lit) {
      var b2 = 0.92 + 0.08 * Math.sin(el * 1.05 + cell.row * 0.9);
      g.fillStyle = "rgba(255,255,255," + b2.toFixed(3) + ")";
      g.fill();
    } else {
      var jitter = ((cell.row * 7 + cell.col * 13) % 9) / 9;
      var lo = (0.030 + facing * 0.055 + jitter * 0.02) * dim;
      var hi = (0.085 + facing * 0.13 + jitter * 0.03) * dim;
      var fg2 = g.createLinearGradient(q[0].x, q[0].y, q[2].x, q[2].y);
      fg2.addColorStop(0, "rgba(238,250,255," + hi.toFixed(3) + ")");
      fg2.addColorStop(0.55, "rgba(228,246,255," + lo.toFixed(3) + ")");
      fg2.addColorStop(1, "rgba(248,253,255," + (hi * 0.8).toFixed(3) + ")");
      g.fillStyle = fg2; g.fill();

      var sp = g.createLinearGradient(q[0].x, q[0].y, q[1].x, q[1].y);
      var k = (0.05 + 0.10 * facing) * dim;
      sp.addColorStop(0, "rgba(255,255,255,0)");
      sp.addColorStop(0.38 + jitter * 0.24, "rgba(255,255,255," + k.toFixed(3) + ")");
      sp.addColorStop(1, "rgba(255,255,255,0)");
      g.save(); g.globalCompositeOperation = "lighter";
      g.fillStyle = sp; g.fill(); g.restore();
    }

    if ((lit || hot) && toward) {
      var cxp = (q[0].x + q[1].x + q[2].x + q[3].x) / 4;
      var cyp = (q[0].y + q[1].y + q[2].y + q[3].y) / 4;
      var rad = Math.max(Math.abs(q[0].x - q[2].x), Math.abs(q[0].y - q[2].y)) * 0.75 + 5;
      var cg = g.createRadialGradient(cxp, cyp, 0, cxp, cyp, rad * 1.5);
      cg.addColorStop(0, "rgba(255,255,255,1)");
      cg.addColorStop(0.45, "rgba(255,255,255,.86)");
      cg.addColorStop(0.75, "rgba(232,248,255,.42)");
      cg.addColorStop(1, "rgba(210,238,255,0)");
      g.save();
      g.globalCompositeOperation = "lighter";
      g.fillStyle = cg; g.fill();
      g.restore();
    }

    var bp = cell.brace.map(function (p) { return P(mirror ? V(p.x, -p.y, p.z) : p); });
    if (bp[0] && bp[1]) {
      g.beginPath(); g.moveTo(bp[0].x, bp[0].y); g.lineTo(bp[1].x, bp[1].y);
      g.strokeStyle = "rgba(6,10,14," + (0.86 * dim + 0.08).toFixed(2) + ")";
      g.lineWidth = tube * 0.46; g.stroke();
      g.strokeStyle = "rgba(255,255,255," + (0.62 * dim).toFixed(3) + ")";
      g.lineWidth = Math.max(0.4, tube * 0.14); g.stroke();
    }

    path();
    g.lineJoin = "round";
    g.strokeStyle = "rgba(4,8,12," + (0.90 * dim + 0.08).toFixed(2) + ")";
    g.lineWidth = tube; g.stroke();

    var rim2 = inset(q, 0.055);
    trace(g, rim2);
    g.lineJoin = "round";
    g.strokeStyle = "rgba(178,240,255," + ((lit || hot ? 1 : 0.34) * dim).toFixed(3) + ")";
    g.lineWidth = Math.max(1.0, tube * (lit || hot ? 0.70 : 0.34));
    g.stroke();
    g.strokeStyle = "rgba(255,255,255," + ((lit || hot ? 1 : 0.42) * dim).toFixed(3) + ")";
    g.lineWidth = Math.max(0.45, tube * (lit || hot ? 0.30 : 0.14));
    g.stroke();

    if (item && toward && !mirror) {
      var pr = progress[item.slug] || 0;
      if (pr > 0.01) {
        var bx0 = q[3].x, by0 = q[3].y, bx1 = q[2].x, by1 = q[2].y;
        g.beginPath();
        g.moveTo(bx0, by0);
        g.lineTo(bx0 + (bx1 - bx0) * pr, by0 + (by1 - by0) * pr);
        g.strokeStyle = pr > 0.97 ? "rgba(120,255,190,.95)" : "rgba(255,255,255,.95)";
        g.lineWidth = Math.max(2, tube * 0.8);
        g.lineCap = "round";
        g.stroke();
        g.lineCap = "butt";
      }
    }

    return { p: q, depth: depth, cell: cell, toward: toward };
  }

  function drawStructure(g, glow, el, mirror) {
    var all = [];
    FACES.forEach(function (f) {
      f.cells.forEach(function (c) { all.push(c); });
    });
    all.sort(function (a, b) {
      return len(sub(b.c, cam.eye)) - len(sub(a.c, cam.eye));
    });
    var picks = [];
    all.forEach(function (cell) {
      var r = drawCell(g, cell, glow, el, mirror);
      if (r && r.toward && cell.face.live && !glow && !mirror) picks.push(r);
    });
    if (!glow && !mirror) tris = picks;
  }

  function drawBeam(g, pulse) {
    var a = P(APEX), b = P(V(0, Hh + 2800, 0));
    if (!a || !b) { beamQuad = null; return; }
    var wb = Math.max(4, 1700 / a.z * 2.8);
    if (beamHot) { pulse = Math.min(1.6, pulse * 1.9); wb *= 1.5; }
    var gw = Math.max(wb * 3.2, 26);
    beamQuad = [
      { x: a.x - gw, y: a.y }, { x: a.x + gw, y: a.y },
      { x: b.x + gw * 0.6, y: b.y }, { x: b.x - gw * 0.6, y: b.y }
    ];
    var grd = g.createLinearGradient(a.x, a.y, b.x, b.y);
    grd.addColorStop(0, "rgba(255,255,255," + (0.66 * pulse).toFixed(3) + ")");
    grd.addColorStop(0.22, "rgba(255,255,255," + (0.24 * pulse).toFixed(3) + ")");
    grd.addColorStop(1, "rgba(255,255,255,0)");
    g.fillStyle = grd;
    g.beginPath();
    g.moveTo(a.x - wb, a.y); g.lineTo(a.x + wb, a.y);
    g.lineTo(b.x + wb * 0.24, b.y); g.lineTo(b.x - wb * 0.24, b.y);
    g.closePath(); g.fill();
  }

  function drawPlinth(g) {
    var PB = B * 1.06, PD = 16;
    [{ a: V(-PB, 0, PB), b: V(PB, 0, PB), n: V(0, 0, 1) },
     { a: V(PB, 0, PB), b: V(PB, 0, -PB), n: V(1, 0, 0) },
     { a: V(-PB, 0, -PB), b: V(-PB, 0, PB), n: V(-1, 0, 0) }
    ].forEach(function (w) {
      if (dot(w.n, sub(cam.eye, w.a)) <= 0) return;
      var t1 = P(w.a), t2 = P(w.b);
      var b1 = P(V(w.a.x, -PD, w.a.z)), b2 = P(V(w.b.x, -PD, w.b.z));
      if (!t1 || !t2 || !b1 || !b2) return;
      g.beginPath();
      g.moveTo(t1.x, t1.y); g.lineTo(t2.x, t2.y);
      g.lineTo(b2.x, b2.y); g.lineTo(b1.x, b1.y); g.closePath();
      var pg = g.createLinearGradient(t1.x, t1.y, b1.x, b1.y);
      pg.addColorStop(0, "rgba(226,246,255,.46)");
      pg.addColorStop(1, "rgba(150,196,222,.20)");
      g.fillStyle = pg; g.fill();
      g.beginPath(); g.moveTo(t1.x, t1.y); g.lineTo(t2.x, t2.y);
      g.strokeStyle = "rgba(255,255,255,.9)"; g.lineWidth = 2.6; g.stroke();
    });
  }

  var flight = null, rest = null;
  function q5(t) { return t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2; }
  function glide(t) { return 1 - Math.pow(1 - t, 4.2); }

  function flyTo(target, ms, opts) {
    opts = opts || {};
    if (reduced) {
      cam.eye = target.eye; cam.at = target.at; cam.fov = target.fov;
      rest = cam.eye; rebuild(); return Promise.resolve();
    }
    return new Promise(function (done) {
      var from = { eye: cam.eye, at: cam.at, fov: cam.fov };
      var span = len(sub(target.eye, from.eye)) || 1;
      var side = norm(cross(norm(sub(target.eye, from.eye)), UP));
      var bow = opts.arc == null ? 0.26 : opts.arc;
      rest = null;
      var f = {
        from: from, to: target, t: 0, dur: ms,
        ctrl: add(add(mix(from.eye, target.eye, 0.5), mul(side, span * bow)),
                  V(0, span * bow * 0.42, 0)),
        ease: opts.ease === "glide" ? glide : q5, done: done
      };
      f.guard = setTimeout(function () {
        if (flight !== f) return;
        cam.eye = target.eye; cam.at = target.at; cam.fov = target.fov;
        rest = cam.eye; rebuild(); flight = null; done();
      }, ms + 400);
      flight = f;
    });
  }
  function stepFlight(dt) {
    if (!flight) return;
    flight.t = Math.min(1, flight.t + dt / flight.dur);
    var e = flight.ease(flight.t), s = q5(flight.t);
    cam.eye = mix(mix(flight.from.eye, flight.ctrl, e), mix(flight.ctrl, flight.to.eye, e), e);
    cam.at = mix(flight.from.at, flight.to.at, s);
    cam.fov = flight.from.fov + (flight.to.fov - flight.from.fov) * s;
    rebuild();
    if (flight.t >= 1) {
      var d = flight.done;
      clearTimeout(flight.guard);
      flight = null;
      rest = cam.eye;
      d();
    }
  }

  function fitDistance(cy, fov, marginY, marginX) {
    var half = Math.tan(fov * Math.PI / 360);
    var aspect = (W && H) ? W / H : 16 / 9;
    var pts = [V(0, Hh, 0), V(-B, 0, B), V(B, 0, B)];
    function fits(d) {
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i], dz = d - p.z;
        if (dz < 1) return false;
        if (Math.abs((p.y - cy) / dz) > half * marginY) return false;
        if (Math.abs(p.x / dz) > half * aspect * marginX) return false;
      }
      return true;
    }
    var lo = B + 2, hi = 5000;
    for (var i = 0; i < 44; i++) {
      var mid = (lo + hi) / 2;
      if (fits(mid)) hi = mid; else lo = mid;
    }
    return hi;
  }

  function camGround() {
    var fov = 64, cy = Hh * 0.36;
    var d = fitDistance(cy, fov, 0.94, 1.6) * 0.74;
    return { eye: V(-d * 0.10, 16, d), at: V(2, Hh * 0.72, 0), fov: fov };
  }
  function camFace() {
    var fov = 58, cy = Hh * 0.34;
    var d = fitDistance(cy, fov, 0.955, 1.5);
    return { eye: V(0, Hh * 0.26, d), at: V(0, Hh * 0.52, 0), fov: fov };
  }
  function camCell(c) { return { eye: add(c.c, mul(c.n, 26)), at: c.c, fov: 38 }; }

  function inTri(px, py, a, b, c) {
    var d1 = (px - b.x) * (a.y - b.y) - (a.x - b.x) * (py - b.y);
    var d2 = (px - c.x) * (b.y - c.y) - (b.x - c.x) * (py - c.y);
    var d3 = (px - a.x) * (c.y - a.y) - (c.x - a.x) * (py - a.y);
    return !(((d1 < 0) || (d2 < 0) || (d3 < 0)) && ((d1 > 0) || (d2 > 0) || (d3 > 0)));
  }
  function inQuad(x, y, p) {
    return inTri(x, y, p[0], p[1], p[2]) || inTri(x, y, p[0], p[2], p[3]);
  }
  function pick(x, y) {
    var best = null;
    for (var i = 0; i < tris.length; i++) {
      var t = tris[i];
      if (inQuad(x, y, t.p) && (!best || t.depth < best.depth)) best = t;
    }
    return best ? best.cell : null;
  }

  var last = 0, running = false;
  function frame(now) {
    requestAnimationFrame(frame);
    var dt = Math.min(64, now - last) || 16; last = now;
    if (document.hidden || !ctx || !running) return;

    stepFlight(dt);
    var el = (now - t0) / 1000;

    if (!flight && !reduced) {
      if (!rest) rest = cam.eye;
      cam.eye = add(rest, V(Math.sin(el * 0.19) * 1.6, Math.sin(el * 0.15 + 1.4) * 1.1, 0));
      rebuild();
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.globalAlpha = 1;
    ctx.clearRect(0, 0, W, H);

    drawVoid(ctx, el);
    ctx.globalAlpha = fade;

    ctx.save();
    ctx.globalAlpha = fade * 0.16;
    drawStructure(ctx, false, el, true);
    ctx.restore();
    ctx.save();
    ctx.globalCompositeOperation = "destination-out";
    var fg = ctx.createLinearGradient(0, H * 0.50, 0, H);
    fg.addColorStop(0, "rgba(0,0,0,0)");
    fg.addColorStop(1, "rgba(0,0,0,.92)");
    ctx.fillStyle = fg; ctx.fillRect(0, H * 0.50, W, H * 0.50);
    ctx.restore();

    drawFloor(ctx);

    var pulse = 0.80 + 0.20 * Math.sin(el * 0.8);

    gx.setTransform(dpr, 0, 0, dpr, 0, 0);
    gx.clearRect(0, 0, W, H);
    drawBeam(gx, pulse);
    drawStructure(gx, true, el, false);

    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    var PASSES = [[3, 0.95], [11, 0.85], [30, 0.70], [78, 0.55]];
    for (var bp = 0; bp < PASSES.length; bp++) {
      try { ctx.filter = "blur(" + PASSES[bp][0] + "px)"; } catch (e) {}
      ctx.globalAlpha = fade * PASSES[bp][1];
      ctx.drawImage(gb, 0, 0, W, H);
    }
    try { ctx.filter = "blur(150px) saturate(2.2) hue-rotate(-8deg)"; } catch (e) {}
    ctx.globalAlpha = fade * 0.5;
    ctx.drawImage(gb, 0, 0, W, H);
    ctx.restore();

    ctx.globalAlpha = fade;
    drawBeam(ctx, pulse * 0.5);
    if (beamHot && beamQuad) {
      var ap2 = P(APEX);
      if (ap2) {
        var rg = ctx.createRadialGradient(ap2.x, ap2.y, 0, ap2.x, ap2.y, 90);
        rg.addColorStop(0, "rgba(255,255,255,.75)");
        rg.addColorStop(0.5, "rgba(190,246,255,.28)");
        rg.addColorStop(1, "rgba(190,246,255,0)");
        ctx.save(); ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = rg;
        ctx.beginPath(); ctx.arc(ap2.x, ap2.y, 90, 0, TAU); ctx.fill();
        ctx.restore();
      }
    }
    drawPlinth(ctx);
    drawStructure(ctx, false, el, false);

    if (ptr.on && !flight && mode === "face") {
      var prev = hovered, prevBeam = beamHot;
      var c = pick(ptr.x, ptr.y);
      hovered = (c && content[key(c)]) ? c : null;
      beamHot = !hovered && !!beamItem && !!beamQuad &&
                inQuad(ptr.x, ptr.y, beamQuad);
      if (prev !== hovered || prevBeam !== beamHot) {
        cv.style.cursor = (hovered || beamHot) ? "pointer" : "default";
        if (api.onHover) api.onHover(hovered, beamHot ? beamItem : null);
      }
    }
  }

  function resize() {
    dpr = Math.min(root.devicePixelRatio || 1, 2);
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = Math.max(1, (W * dpr) | 0);
    cv.height = Math.max(1, (H * dpr) | 0);
    gb.width = cv.width; gb.height = cv.height;
    if (running && !flight && (mode === "ground" || mode === "face")) {
      var t = (mode === "ground") ? camGround() : camFace();
      cam.eye = t.eye; cam.at = t.at; cam.fov = t.fov; rest = cam.eye;
    }
    rebuild();
  }

  var api = {
    onHover: null,

    init: function (canvas) {
      cv = canvas;
      ctx = cv.getContext("2d");
      gb = document.createElement("canvas");
      gx = gb.getContext("2d");
      resize();
      root.addEventListener("resize", resize);
      root.addEventListener("pointermove", function (e) {
        ptr.x = e.clientX; ptr.y = e.clientY; ptr.on = true;
      }, { passive: true });
      root.addEventListener("pointerleave", function () { ptr.on = false; hovered = null; });
      rebuild();
      requestAnimationFrame(frame);
    },

    arrive: function (ms) {
      running = true;
      var t = camFace();
      cam.eye = V(t.eye.x + 10, t.eye.y - 58, t.eye.z * 0.30);
      cam.at = add(t.at, V(0, -26, 0));
      cam.fov = t.fov + 24;
      rebuild();
      mode = "moving";
      return flyTo(t, ms || 2200, { arc: 0.03, ease: "glide" })
        .then(function () { mode = "face"; });
    },

    stop: function () { running = false; },
    start: function () { running = true; },

    place: function (list) {
      content = {};
      list.forEach(function (item, i) {
        var cell = slot(i);
        if (!cell) return;
        content[key(cell)] = item;
        item._cell = cell;
        item._cmp = "CMP " + String(i + 1).padStart(2, "0");
      });
    },

    contentAt: function (c) { return c ? content[key(c)] : null; },
    setBeam: function (item) {
      beamItem = item || null;
      if (beamItem) beamItem._cmp = "RAY";
    },
    beamHot: function () { return beamHot; },
    beamItem: function () { return beamItem; },
    toBeam: function (ms) {
      mode = "moving";
      return flyTo({ eye: V(0, Hh * 1.02, 62), at: V(0, Hh + 240, 0), fov: 52 },
                   ms || 1300, { arc: 0.05, ease: "glide" })
        .then(function () { mode = "inside"; });
    },
    setScan: function (on, hits) { scanOn = !!on; scanHit = hits || {}; },
    setProgress: function (slug, p) { progress[slug] = p; },
    hovered: function () { return hovered; },
    setMode: function (m) { mode = m; hovered = null; },
    setFade: function (f) { fade = f; },

    toGround: function (ms) {
      mode = "moving";
      return flyTo(camGround(), ms || 1700, { arc: 0.18 })
        .then(function () { mode = "ground"; });
    },
    toFace: function (ms) {
      mode = "moving";
      return flyTo(camFace(), ms || 1600, { arc: 0.14, ease: "glide" })
        .then(function () { mode = "face"; });
    },
    toCell: function (cell, ms) {
      mode = "moving";
      return flyTo(camCell(cell), ms || 1300, { arc: 0.04, ease: "glide" })
        .then(function () { mode = "inside"; });
    }
  };

  root.Monument = api;
})(window);
