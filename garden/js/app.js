(function (root) {
  "use strict";

  var doc = document;
  var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var MON = root.Monument;
  var PLT = root.Plate;

  var CH = (root.VOLUME || { chapters: [] }).chapters;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function inl(s) {
    s = esc(s);
    s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, "<a href='$2' target='_blank' rel='noopener'>$1</a>");
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/\*([^*]+)\*/g, "<em>$1</em>");
    return s;
  }
  function blocks(b) {
    return b.map(function (x) {
      if (typeof x === "string") return "<p>" + inl(x) + "</p>";
      if (!x) return "";
      if (x.q) return "<blockquote>" + inl(x.q) + "</blockquote>";
      if (x.lead) return "<blockquote class='lead'>" + inl(x.lead) + "</blockquote>";
      if (x.sec) return "<div class='num'>" + inl(x.sec) + "</div>";
      if (x.h) return "<h2>" + inl(x.h) + "</h2>";
      if (x.h3) return "<h3>" + inl(x.h3) + "</h3>";
      if (x.hr) return "<hr>";
      if (x.ul) return "<ul>" + x.ul.map(function (l) { return "<li>" + inl(l) + "</li>"; }).join("") + "</ul>";
      if (x.ol) return "<ol>" + x.ol.map(function (l) { return "<li>" + inl(l) + "</li>"; }).join("") + "</ol>";
      if (x.img) return "<figure><img src='" + esc(x.img) + "' alt='" + esc(x.alt || "") + "' loading='lazy'>" +
        (x.cap ? "<figcaption>" + inl(x.cap) + "</figcaption>" : "") + "</figure>";
      if (x.table) return "<div class='tw'><table><thead><tr>" +
        x.table.head.map(function (h) { return "<th>" + inl(h) + "</th>"; }).join("") +
        "</tr></thead><tbody>" +
        x.table.rows.map(function (r) {
          return "<tr>" + r.map(function (c) { return "<td>" + inl(c) + "</td>"; }).join("") + "</tr>";
        }).join("") + "</tbody></table></div>";
      return "";
    }).join("");
  }
  function flat(b) {
    var o = [];
    b.forEach(function (x) {
      if (typeof x === "string") { o.push(x); return; }
      if (!x) return;
      ["q", "lead", "h", "h3", "sec"].forEach(function (k) { if (x[k]) o.push(x[k]); });
      if (x.ul) o.push(x.ul.join(" "));
      if (x.ol) o.push(x.ol.join(" "));
    });
    return o.join(" ");
  }
  function words(t) { return (t.match(/[A-Za-z0-9’'\-]+/g) || []).length; }

  CH.forEach(function (c) {
    c.hay = (c.name + " " + c.rule + " " + (c.standfirst || "") + " " +
             (c.piece ? flat(c.piece.body) : "") + " " +
             (c.debts || []).map(function (d) { return d.t + " " + d.d; }).join(" ")
            ).toLowerCase();
    c.words = c.piece ? words(flat(c.piece.body)) : 0;
    c.mins = Math.max(1, Math.round(c.words / 225));
    c.date = c.piece ? c.piece.date : null;
  });

  var cloud = null, names = [], justSigned = null;
  function whenCloud(fn) {
    if (root.GardenCloud) fn(root.GardenCloud);
    else root.addEventListener("gardencloud-ready", function () { fn(root.GardenCloud); }, { once: true });
  }
  function everyone() { return cloud ? [cloud.HOST_NODE].concat(names) : names.slice(); }
  function ours() {
    try {
      var a = JSON.parse(localStorage.getItem("dg_mine") || "[]"), o = {};
      a.forEach(function (x) { o[x] = 1; }); return o;
    } catch (e) { return {}; }
  }
  function keepMine(id) {
    try {
      var a = JSON.parse(localStorage.getItem("dg_mine") || "[]");
      if (a.indexOf(id) < 0) { a.push(id); localStorage.setItem("dg_mine", JSON.stringify(a.slice(-60))); }
    } catch (e) {}
  }
  function ago(ms) {
    if (!ms) return "at the beginning";
    var s = (Date.now() - ms) / 1000;
    if (s < 60) return "moments ago";
    if (s < 3600) return Math.floor(s / 60) + " min ago";
    if (s < 86400) return Math.floor(s / 3600) + " hr ago";
    if (s < 2592000) return Math.floor(s / 86400) + " days ago";
    return new Date(ms).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  }
  function who(m) {
    var n = (m.name || "anonymous").trim();
    return n.length > 22 ? n.slice(0, 21) + "…" : n;
  }

  var toastEl = null, toastT = 0;
  function toast(k, b) {
    if (!toastEl) {
      toastEl = doc.createElement("div");
      toastEl.id = "toast"; toastEl.setAttribute("role", "status");
      doc.body.appendChild(toastEl);
    }
    toastEl.innerHTML = "<span>" + esc(k) + "</span><b>" + esc(b) + "</b>";
    toastEl.classList.add("on");
    clearTimeout(toastT);
    toastT = setTimeout(function () { toastEl.classList.remove("on"); }, 4200);
  }

  var bloomEl = doc.getElementById("bloom");
  function wash(ms, peak) {
    if (reduced) return;
    var t0 = performance.now(), top = peak == null ? 0.9 : peak;
    (function step(now) {
      var t = Math.min(1, (now - t0) / ms);
      var v = t < 0.42
        ? Math.pow(t / 0.42, 1.7)
        : Math.pow(1 - (t - 0.42) / 0.58, 2.1);
      bloomEl.style.opacity = (v * top).toFixed(3);
      if (t < 1) requestAnimationFrame(step);
      else bloomEl.style.opacity = "0";
    })(t0);
  }

  var stage = "boot";
  var open = null;
  var busy = false;

  var body = doc.body;
  var elBack = doc.getElementById("btnBack");
  var elBkLabel = doc.getElementById("bkLabel");
  var elProbe = doc.getElementById("probe");
  var elPrNum = doc.getElementById("prNum");
  var elPrName = doc.getElementById("prName");
  var elPrMeta = doc.getElementById("prMeta");
  var elReader = doc.getElementById("reader");
  var elScroll = doc.getElementById("rdScroll");
  var elProg = doc.getElementById("rdProg");

  function setStage(s) {
    stage = s;
    body.dataset.stage = s;
    elBack.hidden = (s === "boot");
    elBkLabel.textContent = s === "read" ? "back to the pyramid" : "pull out";
    if (s !== "face") { elProbe.hidden = true; }
  }

  function enterPyramid() {
    if (busy || stage !== "boot") return;
    busy = true;

    var DIVE = reduced ? 240 : 2300;
    PLT.dive();
    wash(DIVE + 1500, 1);

    setTimeout(function () {
      PLT.done();
      body.dataset.stage = "face";
      MON.arrive(reduced ? 1 : 2200).then(function () {
        setStage("face");
        busy = false;
      });
    }, reduced ? 200 : DIVE * 0.82);
  }

  function enterCell(item) {
    if (busy || !item || !item._cell) return;
    busy = true;
    elProbe.hidden = true;
    wash(1900, 0.98);
    MON.toCell(item._cell, 1300).then(function () {
      openReader(item);
      setStage("read");
      busy = false;
    });
  }

  function enterBeam(item) {
    if (busy || !item) return;
    busy = true;
    elProbe.hidden = true;
    wash(1900, 0.98);
    MON.toBeam(1300).then(function () {
      openReader(item);
      setStage("read");
      busy = false;
    });
  }

  function pullOut() {
    if (busy) return;
    if (stage === "read") {
      busy = true;
      closeReader();
      wash(1300, 0.85);
      setTimeout(function () {
        MON.toFace(1300).then(function () {
          setStage("face");
          busy = false;
        });
      }, 240);
    } else if (stage === "face") {
      busy = true;
      wash(1900, 0.95);
      MON.setMode("moving");
      MON.toGround(reduced ? 1 : 1100);
      setTimeout(function () {
        PLT.back();
        setStage("boot");
        MON.stop();
        busy = false;
      }, reduced ? 200 : 800);
    }
  }

  function readMap() {
    try { return JSON.parse(localStorage.getItem("dg_read") || "{}"); }
    catch (e) { return {}; }
  }
  function saveRead(slug, frac) {
    try {
      var m = readMap();
      m[slug] = Math.max(m[slug] || 0, Math.round(frac * 1000) / 1000);
      localStorage.setItem("dg_read", JSON.stringify(m));
    } catch (e) {}
    MON.setProgress(slug, frac);
  }
  function pushProgressToMonument() {
    var m = readMap();
    Object.keys(m).forEach(function (k) { MON.setProgress(k, m[k]); });
  }

  var scanQ = "";
  function runScan(q) {
    scanQ = (q || "").trim().toLowerCase();
    var box = doc.getElementById("scanBox");
    if (!scanQ) {
      MON.setScan(false, {});
      if (box) box.textContent = "";
      return;
    }
    var hits = {}, n = 0;
    CH.forEach(function (c) {
      if (c.hay.indexOf(scanQ) >= 0) { hits[c.slug] = 1; n++; }
    });
    MON.setScan(true, hits);
    if (box) {
      box.textContent = n ? n + (n === 1 ? " compartment" : " compartments") : "no match";
      box.classList.toggle("none", n === 0);
    }
  }

  function sizeNow() {
    var z = 1; try { z = parseFloat(localStorage.getItem("dg_sz")) || 1; } catch (e) {}
    return Math.min(1.5, Math.max(0.86, z));
  }
  function setSize(z) {
    z = Math.min(1.5, Math.max(0.86, Math.round(z * 100) / 100));
    doc.documentElement.style.setProperty("--sz", z);
    try { localStorage.setItem("dg_sz", String(z)); } catch (e) {}
  }

  function openReader(item) {
    open = item;
    doc.getElementById("rdCell").textContent = item._cmp;
    doc.getElementById("rdRule").textContent = item.rule;
    doc.getElementById("rdKick").textContent = "compartment " + item._cmp.slice(4) + " · chapter " + item.roman;
    doc.getElementById("rdTitle").textContent = item.name;

    var meta = [];
    if (item.date) meta.push(item.date);
    if (item.words) meta.push(item.words.toLocaleString() + " words");
    if (item.words) meta.push("about " + item.mins + " min");
    doc.getElementById("rdMeta").textContent = item.words ? item.mins + " min read" : "live";
    doc.getElementById("rdBy").innerHTML =
      "<span>written by <b>vang</b></span>" +
      meta.map(function (m) { return "<span>" + esc(m) + "</span>"; }).join("");

    var host = doc.getElementById("rdBody");
    if (item.piece) {
      host.innerHTML = "<p class='lede-standfirst'></p>" + blocks(item.piece.body);
      host.firstChild.remove();
    } else if (item.slug === "unwritten") {
      host.innerHTML =
        "<p>" + esc(item.standfirst) + "</p>" +
        "<div class='rd-list'>" + item.debts.map(function (d) {
          return "<div class='rd-item'><div><h4>" + esc(d.t) + "</h4><p>" + esc(d.d) + "</p></div>" +
                 "<div class='st " + esc(d.w) + "'>" + esc(d.w) + "</div></div>";
        }).join("") + "</div>" +
        "<p style='margin-top:24px'>" + esc(item.colophon) + "</p>";
    } else if (item.slug === "lattice") {
      host.innerHTML =
        "<p>" + esc(item.standfirst) + "</p>" +
        "<div class='sign'>" +
          "<h4>Leave your name</h4>" +
          "<p class='k'>a line and a name. it goes on the register below and stays there. " +
          "mine is the first one on it.</p>" +
          "<form id='signForm' autocomplete='off'>" +
            "<div class='sign-row'>" +
              "<div><label for='sgName'>name</label>" +
                "<input id='sgName' maxlength='40' placeholder='what should i call you' " +
                "autocomplete='nickname' spellcheck='false'></div>" +
              "<div><label for='sgMsg'>a line</label>" +
                "<input id='sgMsg' maxlength='280' placeholder='anything at all. a hello counts.'></div>" +
            "</div>" +
            "<div class='sign-foot'><button class='btn' type='submit'>transmit</button>" +
              "<span style='font-family:var(--f-mo);font-size:9px;letter-spacing:.2em;" +
              "text-transform:uppercase;color:var(--hud-dim)' id='sgMode'>connecting…</span></div>" +
            "<div class='sign-note' id='sgNote' hidden></div>" +
          "</form>" +
        "</div>" +
        "<div class='names' id='register'></div>";
      var f = doc.getElementById("signForm");
      if (f) f.addEventListener("submit", sign);
      paintRegister();
      paintSignMode();
    }

    var idx = doc.getElementById("rdIndex");
    if (idx) {
      var heads = [].slice.call(host.querySelectorAll("h2"));
      if (heads.length > 1) {
        idx.innerHTML = "<button class='ix-t' type='button'>sections &#9662;</button>" +
          "<div class='ix-list'>" + heads.map(function (h, i) {
            h.id = "sec" + i;
            return "<button data-jump='sec" + i + "'>" + esc(h.textContent) + "</button>";
          }).join("") + "</div>";
        idx.hidden = false;
        idx.querySelector(".ix-t").addEventListener("click", function () {
          idx.classList.toggle("open");
        });
        idx.querySelectorAll("[data-jump]").forEach(function (b) {
          b.addEventListener("click", function () {
            var t = doc.getElementById(b.dataset.jump);
            if (t) elScroll.scrollTo({ top: t.offsetTop - 24, behavior: "smooth" });
            idx.classList.remove("open");
          });
        });
      } else { idx.hidden = true; idx.innerHTML = ""; }
    }

    elScroll.scrollTop = 0;
    elProg.style.width = "0%";
    var was = readMap()[item.slug] || 0;
    if (was > 0.02 && was < 0.985) {
      requestAnimationFrame(function () {
        var run = elScroll.scrollHeight - elScroll.clientHeight;
        if (run > 0) elScroll.scrollTop = run * was;
        toast("resumed", Math.round(was * 100) + "% through — press Home to restart");
      });
    }
    elReader.hidden = false;
    void elReader.offsetWidth;
    elReader.classList.add("on");
    setTimeout(function () { elScroll.focus && elScroll.focus(); }, 340);
  }

  function closeReader() {
    elReader.classList.remove("on");
    setTimeout(function () { elReader.hidden = true; open = null; }, 460);
  }

  var saveT = 0;
  elScroll.addEventListener("scroll", function () {
    var run = elScroll.scrollHeight - elScroll.clientHeight;
    var frac = run <= 0 ? 1 : elScroll.scrollTop / run;
    elProg.style.width = (frac * 100).toFixed(1) + "%";
    if (!open) return;
    clearTimeout(saveT);
    saveT = setTimeout(function () { saveRead(open.slug, frac); }, 260);
  }, { passive: true });

  function paintRegister() {
    var el = doc.getElementById("register");
    if (!el) return;
    var mine = ours(), list = everyone();
    el.innerHTML = list.length ? list.map(function (m) {
      return "<div class='nrow" + (m.host ? " host" : "") + "'>" +
        "<span class='nn'>" + esc(who(m)) + (m.host ? " · keeper" : (mine[m.id] ? " · you" : "")) + "</span>" +
        "<span class='nm'>" + esc(m.message) + "</span>" +
        "<span class='nw'>" + esc(ago(m.createdAt)) + "</span></div>";
    }).join("") : "<div class='nrow'><span class='nm'>nobody yet. you would be the first.</span></div>";
  }
  function paintSignMode() {
    var el = doc.getElementById("sgMode");
    if (!el) return;
    el.textContent = !cloud ? "connecting…"
      : cloud.mode === "firebase" ? "shared · everyone sees this"
      : "this device only";
  }
  function said(t, bad) {
    var el = doc.getElementById("sgNote");
    if (!el) return;
    el.textContent = t; el.classList.toggle("bad", !!bad); el.hidden = false;
  }
  function sign(e) {
    e.preventDefault();
    var n = doc.getElementById("sgName"), m = doc.getElementById("sgMsg");
    var btn = e.target.querySelector("button[type=submit]");
    var msg = (m.value || "").trim();
    if (!msg) { said("write a line first, even one word.", true); m.focus(); return; }
    var last = 0; try { last = +localStorage.getItem("dg_last") || 0; } catch (x) {}
    if (Date.now() - last < 15000) { said("give it fifteen seconds between transmissions.", true); return; }
    if (!cloud) { said("still connecting. one second.", true); return; }

    btn.disabled = true;
    cloud.addMessage(n.value, msg).then(function (s) {
      try { localStorage.setItem("dg_last", String(Date.now())); } catch (x) {}
      keepMine(s.id); justSigned = s;
      m.value = "";
      said("logged. your name is on the register, marked (you). it stays.", false);
      toast("registered", (s.name || "anonymous") + " is on the wall");
      paintRegister();
    }).catch(function () {
      said("that did not go through. try again in a moment.", true);
    }).then(function () { btn.disabled = false; });
  }

  function clock() {
    var c = doc.getElementById("hClock"), d = doc.getElementById("hDate");
    function tick() {
      var n = new Date();
      c.textContent = String(n.getHours()).padStart(2, "0") + ":" +
                      String(n.getMinutes()).padStart(2, "0") + ":" +
                      String(n.getSeconds()).padStart(2, "0");
      d.textContent = n.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
    }
    tick(); setInterval(tick, 1000);
  }

  function trace(c) {
    c.registerVisit()
      .then(function (v) { doc.getElementById("hVisits").textContent = v.toLocaleString(); })
      .catch(function () { doc.getElementById("hVisits").textContent = "—"; });
    c.locate().then(function (l) {
      var w = doc.getElementById("hWhere"), k = doc.getElementById("hCoord");
      if (!l) { w.textContent = "unresolved"; k.textContent = "origin masked"; return; }
      w.textContent = [l.city, l.country].filter(Boolean).join(", ") || "somewhere";
      if (isFinite(l.lat)) {
        k.textContent = Math.abs(l.lat).toFixed(2) + "°" + (l.lat < 0 ? "S" : "N") + "  " +
                        Math.abs(l.lon).toFixed(2) + "°" + (l.lon < 0 ? "W" : "E");
      }
    }).catch(function () {
      doc.getElementById("hWhere").textContent = "unresolved";
    });
  }

  function init() {
    setSize(sizeNow());
    clock();

    PLT.init();

    var cv = doc.getElementById("stage");
    MON.init(cv);

    MON.place(CH.filter(function (c) { return !c.onBeam; }));
    MON.setBeam(CH.filter(function (c) { return c.onBeam; })[0]);

    MON.onHover = function (cell, beam) {
      if (stage === "face" && beam) {
        elPrNum.textContent = "RAY";
        elPrName.textContent = beam.name;
        elPrMeta.textContent = beam.blurb || beam.rule;
        elProbe.hidden = false;
        return;
      }
      if (stage === "face" && cell) {
        var item = MON.contentAt(cell);
        if (item) {
          elPrNum.textContent = item._cmp.slice(4);
          elPrName.textContent = item.name;
          elPrMeta.textContent = item.blurb || item.rule;
          var st = doc.getElementById("prStat");
          if (st) {
            st.textContent = item.words
              ? item.words.toLocaleString() + " words · " + item.mins + " min read"
              : (item.debts ? item.debts.length + " outstanding" : "live");
          }
          elProbe.hidden = false;
          return;
        }
      }
      elProbe.hidden = true;
    };

    var linkEl = doc.getElementById("hLink");
    var wasHot = false;
    root.addEventListener("pointermove", function (e) {
      if (stage !== "boot" || busy) return;
      var on = PLT.hit(e.clientX, e.clientY);
      if (on === wasHot) return;
      wasHot = on;
      PLT.hot(on);
      body.style.cursor = on ? "pointer" : "";
      linkEl.textContent = on ? "▸ enter" : "link stable";
      linkEl.style.color = on ? "var(--jade)" : "";
    }, { passive: true });

    root.addEventListener("click", function (e) {
      if (busy) return;
      if (stage === "boot") {
        if (PLT.hit(e.clientX, e.clientY)) { body.style.cursor = ""; enterPyramid(); }
      } else if (stage === "face") {
        if (e.target.closest(".reader") || e.target.closest(".hud")) return;
        if (MON.beamHot()) { enterBeam(MON.beamItem()); return; }
        var cell = MON.hovered();
        if (cell) {
          var item = MON.contentAt(cell);
          if (item) enterCell(item);
        }
      }
    });

    var scanIn = doc.getElementById("scanIn");
    if (scanIn) {
      var st = 0;
      scanIn.addEventListener("input", function () {
        clearTimeout(st);
        st = setTimeout(function () { runScan(scanIn.value); }, 120);
      });
      scanIn.addEventListener("keydown", function (e) {
        if (e.key === "Escape") { scanIn.value = ""; runScan(""); scanIn.blur(); }
        e.stopPropagation();
      });
    }
    pushProgressToMonument();

    elBack.addEventListener("click", pullOut);
    doc.getElementById("rdClose").addEventListener("click", pullOut);

    doc.querySelectorAll(".rd-size button").forEach(function (b) {
      b.addEventListener("click", function () {
        var d = +b.dataset.sz;
        setSize(d === 0 ? 1 : sizeNow() + d * 0.11);
      });
    });

    doc.addEventListener("keydown", function (e) {
      if (e.key === "/" && stage !== "read") {
        var si = doc.getElementById("scanIn");
        if (si) { e.preventDefault(); si.focus(); si.select(); }
        return;
      }
      if (e.key === "Home" && stage === "read" && open) {
        e.preventDefault();
        elScroll.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      if (e.key === "Escape") { pullOut(); return; }
      if (busy) return;
      if (stage === "boot" && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault(); enterPyramid(); return;
      }
      if (stage === "face" && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
        e.preventDefault();
        var lit = CH.filter(function (c) { return c._cell; });
        var i = open ? lit.indexOf(open) : -1;
        var n = e.key === "ArrowDown" ? Math.min(lit.length - 1, i + 1) : Math.max(0, i - 1);
        var item = lit[n < 0 ? 0 : n];
        if (item) enterCell(item);
      }
      if (stage === "read" && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
        var lit2 = CH.filter(function (c) { return c._cell; });
        var j = lit2.indexOf(open);
        var k = e.key === "ArrowRight" ? j + 1 : j - 1;
        if (k >= 0 && k < lit2.length) {
          e.preventDefault();
          closeReader();
          setTimeout(function () { busy = false; enterCell(lit2[k]); }, 260);
          busy = true;
        }
      }
    });

    whenCloud(function (c) {
      cloud = c;
      c.onMessages(function (l) { names = l || []; paintRegister(); });
      trace(c);
      paintSignMode();
    });

    var h = location.hash.replace(/^#\/?/, "");
    if (h) { try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {} }
    if (h) {
      var target = CH.filter(function (c) { return c.slug === h; })[0];
      setTimeout(function () {
        if (target) {
          enterPyramid();
          setTimeout(function () {
            busy = false;
            if (target.onBeam) enterBeam(target); else enterCell(target);
          }, reduced ? 500 : 5200);
        } else if (h === "pyramid") {
          enterPyramid();
        }
      }, reduced ? 60 : 1400);
    }
  }

  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", init);
  else init();
})(window);
