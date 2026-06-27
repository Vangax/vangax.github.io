(function (root) {
  "use strict";
  var A = { on: false, ctx: null, master: null, _nodes: [], _dropTimer: null, noise: null };

  function makeNoise(ctx) {
    var n = ctx.sampleRate * 2, b = ctx.createBuffer(1, n, ctx.sampleRate), d = b.getChannelData(0), last = 0;
    for (var i = 0; i < n; i++) { var wv = Math.random() * 2 - 1; last = (last + 0.02 * wv) / 1.02; d[i] = last * 3.2; }
    return b;
  }
  function ensure() {
    if (A.ctx) return;
    try {
      var Ctx = root.AudioContext || root.webkitAudioContext; A.ctx = new Ctx();
      A.master = A.ctx.createGain(); A.master.gain.value = 0; A.master.connect(A.ctx.destination);
      A.noise = makeNoise(A.ctx);
    } catch (e) {}
  }
  function now() { return A.ctx.currentTime; }

  function startBed() {
    if (!A.ctx || A._nodes.length) return; var t = now();
    var s = A.ctx.createBufferSource(), lp = A.ctx.createBiquadFilter(), wg = A.ctx.createGain();
    s.buffer = A.noise; s.loop = true; lp.type = "lowpass"; lp.frequency.value = 500; lp.Q.value = 2; wg.gain.value = 0.5;
    var lfo = A.ctx.createOscillator(), lg = A.ctx.createGain(); lfo.frequency.value = 0.06; lg.gain.value = 260;
    lfo.connect(lg); lg.connect(lp.frequency);
    s.connect(lp); lp.connect(wg); wg.connect(A.master); s.start(t); lfo.start(t);
    A._nodes.push(s, lfo);
    [130.8, 196, 261.6].forEach(function (f, i) {
      var o = A.ctx.createOscillator(), g = A.ctx.createGain(), pl = A.ctx.createBiquadFilter();
      o.type = i === 2 ? "sine" : "triangle"; o.frequency.value = f; o.detune.value = (i - 1) * 5;
      pl.type = "lowpass"; pl.frequency.value = 700; g.gain.value = 0.05 / (i + 1);
      var po = A.ctx.createOscillator(), pg = A.ctx.createGain(); po.frequency.value = 0.04 + i * 0.02; pg.gain.value = 0.025;
      po.connect(pg); pg.connect(g.gain);
      o.connect(pl); pl.connect(g); g.connect(A.master); o.start(t); po.start(t); A._nodes.push(o, po);
    });
    scheduleDrop();
  }
  function scheduleDrop() {
    A._dropTimer = setTimeout(function () { if (A.on) { drop(0.25); scheduleDrop(); } }, 4000 + Math.random() * 9000);
  }
  function drop(vol) {
    if (!A.ctx || !A.on) return; var t = now();
    var o = A.ctx.createOscillator(), g = A.ctx.createGain(), bp = A.ctx.createBiquadFilter();
    o.type = "sine"; bp.type = "bandpass"; bp.frequency.value = 1100; bp.Q.value = 3;
    o.frequency.setValueAtTime(1650, t); o.frequency.exponentialRampToValueAtTime(540, t + 0.12);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.5 * (vol || 0.3), t + 0.006);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
    o.connect(bp); bp.connect(g); g.connect(A.master); o.start(t); o.stop(t + 0.26);
  }

  A.toggle = function () {
    ensure(); if (!A.ctx) return false;
    if (A.ctx.state === "suspended") A.ctx.resume();
    A.on = !A.on;
    if (A.on) { startBed(); A.master.gain.setTargetAtTime(0.7, now(), 1.4); }
    else { A.master.gain.setTargetAtTime(0, now(), 0.5); clearTimeout(A._dropTimer); }
    return A.on;
  };
  A.tap = function () { if (A.on) drop(0.22); };

  root.Ambient = A;
})(window);
