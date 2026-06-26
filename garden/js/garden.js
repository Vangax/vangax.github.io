/* garden.js: page content and behaviour. The rooms, routing, sidebar
   gadgets, weather, and the koi pond. All writing lives in ROOMS below. */
(function (root) {
  "use strict";

  var ROOMS = {
    bench: { name: "The Bench", img: "assets/bench.png", accent: "green", tag: "sit a while. the long version of me lives here.",
      intro: "this is the bench. its where i actually sit down and try to explain myself instead of building something and sprinting off. the first post is the big one, the whole who-am-i. grab a drink.",
      posts: [
        { title: "who am i? (grab a drink, this one is long)", date: "Jun 24, 2026", tags: ["about", "start here", "engram", "football"], body: [
          "okay so. hi. im devang. online im vang, or vangax when vang is already taken, which it always is. im 19, im a guy from india, and im interested in a genuinely unreasonable number of things. this little bench is where i finally sit down and try to explain myself. this is the long one.",
          "the honest one-liner about me: i start things, i get them to about 90 percent, and then i vanish. like a magician, except the trick is just abandonment. ninety percent done. only the hardest, most boring ten percent left, and vang has already mentally relocated to a different country.",
          { q: "i have a graveyard of projects that were almost amazing. every headstone reads the same thing: here lies a thing that was 90% done." },
          "the single exception, the one project i actually dragged across the finish line, is engram. ill get to engram. engram is special and engram nearly killed me, lovingly.",
          "i am fairly sure i have adhd. undiagnosed, self-awarded, but the symptoms are doing a lot of heavy lifting. i will be neck-deep in neuroscience for three weeks like my life depends on it, and then one random tuesday my brain goes, and what if we learned about, hmm, medieval lockpicking, and thats just the rest of the month gone.",
          "building is the thing. building is my dopamine. making something, breaking it, learning exactly how it works, going SO deep i forget to eat, and then the second i finally understand it, losing all interest and not touching it for four months. then rediscovering it at 2am like an old friend and getting obsessed all over again. rinse, repeat, forever.",
          "and the worst part is i never do this with one thing. its always five things at once. five tabs of my actual life, all open, all half loaded, all making that little spinning noise.",
          { q: "oh god what am i. im not god, so why am i trying to do everything at once. honestly vang, youre pretty stupid. ...oh yeah i am. lol." },
          "anyway. thats the disclaimer out of the way. now let me rewind, because this didnt come from nowhere.",
          "as a kid i played everything. every sport you put in front of me. but football was THE one. football is still the one. if you ever cant find me, check the nearest ground, im the guy who definitely should not be playing on this hip but is playing anyway.",
          "i also loved cricket, mostly because of steve smith. i liked steve smith to death. still do. the man bats like hes solving a completely different equation than everyone else on the field and i respect it on a spiritual level. fidgety, twitchy genius. my people.",
          "swimming, games, anything that let me move or press buttons. i was not a calm child. i was a child with way too many tabs open even back then.",
          "and the games. oh, the games. this is dangerous territory because i could write ten thousand words right here and not stop.",
          "nfs carbon. i have to physically stop myself, because im going to write an entire separate post about nfs carbon, a love letter, possibly a tearful one. the canyon duels. the autosculpt. that menu music living rent-free in my skull twelve years later. (the full nfs carbon post is coming. treat this as the trailer.)",
          "project igi. man. those times. one save slot, no mid-mission saves, getting spotted by a guard on the literal other side of the map who apparently had eagle vision. i lost years to that game and i would lose them again, gladly.",
          "assassins creed. damn. this game HAD me. completely. climbing everything, the leap of faith, the feeling of a city you could actually disappear into. it rearranged something in my brain about what a game was even allowed to be.",
          "and heres a concerning one: i learned what torrents were when i was six. SIX. i should have been learning to tie my shoes and instead i was figuring out seeders and leechers because i wanted a game that badly. six-year-old vang, hunched over a desktop, committing mild crimes for a racing game. iconic. slightly alarming. mostly iconic.",
          "somewhere in there i got curious about how games were actually MADE. what is happening behind the screen. i went down that rabbit hole hard, learned a bunch about engines and how it all fit together, and then, classic vang, forgot all of it. i have no idea now. if you asked me today id just point at the screen and whisper, magic, probably.",
          "so thats chapter one: games, sports, a bit of studying, full chaos, right up until about thirteen.",
          "at 13 i started a youtube channel. and i didnt just dabble, i got seriously into editing. proper, professional-level editing, the kind where you sit for six hours nudging one clip three frames left because it FEELS wrong. i did that for two, three years. it taught me more about pacing and attention and finishing things than i realised at the time.",
          { q: "editing is where i first learned the last 10 percent is where the magic lives. i then proceeded to ignore that lesson for the rest of my life." },
          "then college happened. i came to symbiosis. first year was gentle, programming from scratch, football whenever i could, enjoying the small stuff. but something was quietly shifting in how i thought. i could feel the gears changing.",
          "i got into programming properly. then data science. then the door blew off its hinges and everything behind it was interesting.",
          "around then i also found my people online. theres this little community called dokidoki and its honestly one of my favourite corners of the internet. thats where kaye is, leeza, the og VA youtuber and valo streamer, genuinely one of the good ones. and my little circle there, belani, hjd, lakshay, and yes, sussy baka (you know who you are). the kind of online friends that feel very real.",
          "and then i got serious. or more accurately, my chaos finally got a direction.",
          "i started working in neuroscience and brain tech, building actual projects. this is where the real ones live, the ones that survived past 90 percent, or at least got far enough to scare me.",
          "engram. okay, properly now. engram wasnt planned. it showed up in my head one night while i was just thinking, and it hit deep, not a normal idea, it felt heavy and real. i was thinking about everyone quietly getting left behind as the world speeds up, and how were all getting lonelier at the same time. i was reading the bhagavad gita around then and one idea lodged in me: that when you actually find your true self, you stop getting thrown around by your own suffering, you start watching it from a third seat, almost like youre supporting your own body instead of being dragged by it. and i thought, what if there was something that just gently reminds you who you actually are. not addictive. not replacing you. just bringing you back to yourself, again and again. thats engram.",
          "the build was humbling. the ui phase was pure suffering, things breaking, nothing feeling right, layouts betraying me daily. i had 19 features planned. NINETEEN. then i started building and realised about 17 of them were ego, so i cut it to 2 core things and finally it breathed. engram v0.2 is alive. it is living proof that vang can, in fact, finish a thing.",
          "then theres blackwall. blackwall v1 is 5-phase emergent language detection and containment in multi-agent reinforcement learning, which is a very fancy way of saying: what happens when ai agents start inventing their own private language to talk to each other, and can you catch it and box it before it gets weird. that question keeps me up at night in the good way.",
          "and amalgam, the most unhinged one, a hybrid digital-biological neural net where layer 4 is, and im being completely serious, slime mold. actual slime mold. as a layer. in a neural network. i dont know what to tell you, the idea grabbed me and i was not strong enough to say no.",
          "and nebula, the netrunner thing, my love letter to old computers and the cyberpunk idea of a network you can actually SEE and walk into. i went full neo4j on it, because a network literally IS a graph, nodes and connections, so you store it as a graph and ask it questions in cypher. that one started because i saw people i follow casually working at CERN and it yanked my physics brain straight out of its coma, atoms and fields and particles, all this insane invisible stuff happening every single second right under the resolution of being a human. johnny silverhand may also have been involved in the inspiration. no further questions.",
          "oh, physics. i have to mention physics, because physics has been with me the longest. ive been learning it deeply for about five years and i genuinely love it, theories, the why of things, sitting and thinking about the universe like its a personal problem. astrophysics especially. for a long time, thinking about it was enough. lately its not, my brain wants to BUILD with it now, not just admire it. thinking phase to building phase. thats honestly the whole arc of me right now.",
          "and the BCI research, the one im quieter about, brain-computer interface authentication using P300 signals, the little voltage spike your brain makes about 300ms after it notices something it cares about. using your brains own reaction as a password, basically. its under proper supervision, its ongoing, and ill write it up properly when im further along instead of fumbling it here.",
          "now i have to back up and tell the part thats not all projects and jokes, because it shaped most of this.",
          "before all of it i was studying physics and prepping for medical, applied maths on the side, fully committed, that was THE path, the only one i could see for myself. and then i didnt get in. and it hit so much harder than i expected, not even because of the result, but because the entire direction in my head just vanished. and somewhere in that fog i quietly drifted away from physics too, without even noticing. like everything paused and i didnt know what to hold onto.",
          "the farewell got me though. 2024, school ending, everything ending at once. after the whole ceremony, when everyone had already started leaving, me and my best friend just didnt. we picked up a ball and played football on the ground in our formal clothes, full pants, shirts, shoes, for over an hour. talking, laughing, but also feeling that heavy thing, that this is the last time it looks like this. it was never about the game. it was about holding the moment a little longer. i did not think i would miss school that much. that day told me otherwise.",
          { q: "we played football in our formal clothes until it got dark. thats the most accurate self-portrait i have." },
          "college pulled me out of it slowly. then in 2025 i did an internship at AIT GLOBAL and it genuinely rewired me, real systems, real workflows, real problems instead of theory rattling around my head. ajeet singh, the delivery head, taught me how to think practically, how things actually work out there. i walked into second year a different person. less dreaming, more doing.",
          "(theres also the time i trained so hard for a national football tournament that i injured my own hip, and then went and played anyway, and it somehow turned into one of the best trips of my life, classrooms turned into bedrooms, new friends from schools all over, celebrating nitins birthday at the venue. but thats its own post. remind me.)",
          "which brings me to now. june 2026. vang is, on paper, doing great. i hunted for an internship for months and i finally landed one. should feel like a clean win. and it is. but its remote and it feels SLOW, and slow is the one thing my dopamine-shaped brain cannot metabolise. i know, logically, that slow IS the process, that real things take real time. my nervous system has simply not received the memo.",
          "so i did what i always do when im overwhelmed and understimulated at the exact same time: i started a brand new thing. this thing. this entire glossy green frutiger-aero garden you are currently sitting inside. is it a slightly unhinged response to work stress? yes. is it also kind of beautiful? also yes. ahahaha.",
          { q: "some people journal to cope. i build a koi pond with a real-time day-night cycle. were not the same. (we are exactly the same.)" },
          "so thats me. devang. vang. 19, too many tabs, allergic to the last ten percent, hopelessly in love with football and steve smith and physics and games and building things that probably shouldnt exist yet. starting things, finishing some, abandoning more, and every so often, rarely, gloriously, seeing one all the way through.",
          "if you sign the koi pond, your koi swims here next to mine. ill probably notice it at 2am mid hyperfocus and smile. welcome to the garden. make yourself at home, the bench is always free." ] } ] },
    world: { name: "The World", img: "assets/globe.png", accent: "blue", tag: "who i am and the internet i want back.",
      intro: "the wide-angle shot. who i am, what i care about, and the glossy old web im trying to revive. to be filled.",
      posts: [
        { title: "to be filled", date: "soon", tags: [], body: [
          "this room is still empty. vang got distracted, shocking i know. real words landing here soon." ] } ] },
    travels: { name: "Departures", img: "assets/plane.png", accent: "blue", tag: "places ive been, places on the list.",
      intro: "the departures board. trips, airports, the places that stuck. to be filled.",
      posts: [
        { title: "to be filled", date: "soon", tags: [], body: [
          "no boarding pass yet. this one is coming." ] } ] },
    dreams: { name: "Up & Away", img: "assets/balloon.png", accent: "green", tag: "the slow, long goals.",
      intro: "the balloon never hurries. long-game goals and tiny adventures. to be filled.",
      posts: [
        { title: "to be filled", date: "soon", tags: [], body: [
          "still rising. words incoming." ] } ] },
    city: { name: "The City", img: "assets/city.png", accent: "blue", tag: "everything im building.",
      intro: "the workshop with the lights on. engram, blackwall, amalgam, nebula, all of it gets written up here. to be filled.",
      posts: [
        { title: "to be filled", date: "soon", tags: [], body: [
          "the build logs go here, engram, blackwall, amalgam, nebula, all of them. give vang a minute, hes mid-hyperfocus on something else." ] } ] },
    trinkets: { name: "Trinkets", img: "assets/ornament.png", accent: "green", tag: "games, music, the stuff that rewired me.",
      intro: "the curiosity cabinet. games that rewired me, albums on repeat, comfort media. to be filled.",
      posts: [
        { title: "nfs carbon: a love letter (to be filled)", date: "soon", tags: ["games"], body: [
          "the big one. canyon duels, autosculpt, that menu music. its getting its own full post, i promised myself. to be filled." ] },
        { title: "to be filled", date: "soon", tags: [], body: [
          "more trinkets soon, igi, assassins creed, the albums, the comfort stuff." ] } ],
      gallery: [
        { img: "assets/obj2.png", cap: "to be filled", note: "" },
        { img: "assets/obj1.png", cap: "to be filled", note: "" },
        { img: "assets/obj3.png", cap: "to be filled", note: "" },
        { img: "assets/obj4.png", cap: "to be filled", note: "" },
        { img: "assets/obj5.png", cap: "to be filled", note: "" },
        { img: "assets/obj7.png", cap: "to be filled", note: "" },
        { img: "assets/obj8.png", cap: "to be filled", note: "" },
        { img: "assets/obj9.png", cap: "to be filled", note: "" },
        { img: "assets/obj10.png", cap: "to be filled", note: "" },
        { img: "assets/obj6.png", cap: "to be filled", note: "" } ] }
  };
  var ORDER = ["bench", "world", "travels", "dreams", "city", "trinkets"];

  function esc(s) { return String(s).replace(/[&<>]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]; }); }
  function bodyHTML(b) { return b.map(function (x) { return typeof x === "string" ? "<p>" + esc(x) + "</p>" : (x && x.q ? "<blockquote>" + esc(x.q) + "</blockquote>" : ""); }).join(""); }
  function tagsHTML(t, a) { return (t || []).map(function (x) { return "<span class='pill" + (a === "blue" ? " sky" : "") + "'>" + esc(x) + "</span>"; }).join(""); }
  function excerpt(p) { var s = ""; for (var i = 0; i < p.body.length; i++) if (typeof p.body[i] === "string") { s = p.body[i]; break; } s = s.replace(/\s+/g, " ").trim(); return s.length > 132 ? s.slice(0, 130) + "…" : s; }
  var allPosts = [];
  ORDER.forEach(function (id) { ROOMS[id].posts.forEach(function (p, i) { allPosts.push({ roomId: id, room: ROOMS[id], i: i, title: p.title, date: p.date, d: new Date(p.date), tags: p.tags || [], excerpt: excerpt(p) }); }); });
  allPosts.sort(function (a, b) { return b.d - a.d; });
  var tagCounts = {}; allPosts.forEach(function (p) { p.tags.forEach(function (t) { tagCounts[t] = (tagCounts[t] || 0) + 1; }); });

  var current = null, query = "", pendingPost = null;

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
    // 15s cooldown so nobody turns the pond into a koi stampede
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
    // swim to a random spot, then do it again, forever. attention span of, well, me.
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

    // a few extra fish so the pond never looks lonely (deeply relatable)
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

    var bubs = document.createElement("div"); bubs.className = "lake-bubbles"; bubs.setAttribute("aria-hidden", "true");
    var nb = Math.max(6, Math.min(12, Math.round(W / 80))), bh = "";
    for (var b = 0; b < nb; b++) bh += "<span style='left:" + rand(3, 97).toFixed(1) + "%;width:" + rand(5, 16).toFixed(0) + "px;animation-duration:" + rand(4, 9).toFixed(1) + "s;animation-delay:" + (-rand(0, 8)).toFixed(1) + "s'></span>";
    bubs.innerHTML = bh; lake.appendChild(bubs);

    if (!reduced) swimmers.forEach(function (k) { setTimeout(function () { leg(k); }, rand(0, 1600)); });

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

  function setupSkyToggle() {
    var btn = document.getElementById("sky-toggle"); if (!btn || !root.Scene || !root.Scene.getPhase) return;
    function isNight() { return root.Scene.getPhase() === "night"; }
    function refresh() { var n = isNight(); btn.classList.toggle("night", n); btn.setAttribute("aria-pressed", String(n)); var l = btn.querySelector(".st-label"); if (l) l.textContent = n ? "Night" : "Daytime"; }
    btn.addEventListener("click", function () { root.Scene.setPhase(isNight() ? "day" : "night"); refresh(); tap(); });
    refresh();
  }

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

  function renderHome() {
    var tiles = ORDER.map(function (id) {
      var r = ROOMS[id];
      return "<button class='ex-tile' data-room='" + id + "'><div class='th'><img src='" + r.img + "' alt='' loading='lazy'></div><b>" + esc(r.name) + "</b><small>" + r.posts.length + " " + (r.posts.length === 1 ? "entry" : "entries") + "</small></button>";
    }).join("");
    return "<section class='view'>" +
      "<div class='panel'><div class='panel-h green'>Welcome</div><div class='panel-b'><div class='welcome'>" +
        "<div class='w-text'><h2>hey, im vang</h2><p>welcome to my garden. its part blog, part museum, part what-happens-when-i-cant-sit-still. im 19, i build too many things at once, and this is where they live. start at the bench for the whole story, wander the rooms, sign the koi pond, or just watch the fish for a bit.</p>" +
        "<div class='row'><button class='btn' data-room='bench'><span>start at the bench</span></button><button class='btn sky' data-room='world'><span>whos vang?</span></button></div></div></div></div></div>" +
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
      "<div class='panel'><div class='panel-h'>The Koi Pond<span class='right' id='pondCount'>…</span></div>" +
        "<div class='panel-b lake-wrap'><div class='lake' id='lake'>" +
          "<div class='lake-shimmer'></div><div class='lake-pads'><i></i><i></i><i></i><i></i></div>" +
          "<div class='lake-koi' id='lakeKoi'></div>" +
          "<div class='lake-cap'>hover a fish to read its message. tap the water to feed them.</div>" +
        "</div></div></div>" +
      "<div class='panel'><div class='panel-h green'>Sign the pond</div><div class='panel-b'>" +
        "<p class='pond-lead'>Write your name and a message, then press <b>Sign the pond</b>. A koi with your name starts swimming in the pond above and stays in the garden for good. One koi is already there for you: the keeper.</p>" +
        "<form class='gform' id='gform'>" +
          "<div class='gform-row'><input id='gName' maxlength='40' placeholder='your name' autocomplete='nickname' spellcheck='false'>" +
            "<input id='gMsg' maxlength='280' placeholder='your message' autocomplete='off'></div>" +
          "<div class='gform-foot'>" + mode + "<button class='btn sky' type='submit'><span>Sign the pond</span></button></div>" +
          "<div class='gform-note' id='gNote' hidden></div>" +
        "</form>" +
        "<div class='gshare' id='gShareRow'" + shareHidden + ">" +
          "<span>Your koi is swimming above. Want friends to find it? This button copies a link that makes your koi light up for them.</span>" +
          "<button class='btn' type='button' id='gShare'><span>Copy my koi link</span></button>" +
        "</div>" +
      "</div></div>" +
      "<div class='panel'><div class='panel-h green'>Every message<span class='right' id='pondNum'>…</span></div><div class='panel-b'><div class='pondlist' id='pondlist'><div class='gmsg muted'>loading the pond…</div></div></div></div>" +
    "</section>";
  }

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
      gad("Right now", "<div class='statline'><span>building</span><b>engram + 4 other tabs</b></div><div class='statline'><span>fuelled by</span><b>football &amp; dopamine</b></div><div class='statline'><span>mood</span><b>overwhelmed (lovingly)</b></div>") +
      gad("Visitors", "<div class='visitors'><div class='vglobe'><img src='assets/globe2.png' alt=''><span class='vpin' id='vpin' hidden></span></div><div class='vinfo'><div class='vcount'><b id='visitsNum'>-</b><small>visitors</small></div><div class='vloc' id='vloc'>locating you…</div></div></div>", true) +
      gad("Tags", "<div class='tagcloud'>" + tags + "</div>") +
      gad("This garden", "<div class='statline'><span>entries</span><b>" + allPosts.length + "</b></div><div class='statline'><span>rooms</span><b>" + ORDER.length + "</b></div><div class='statline'><span>koi in the pond</span><b id='koiCount'>-</b></div><div class='statline'><span>growing since</span><b>2024</b></div>", true) +
      gad("From the cabinet", "<div class='peek'>" + peek + "</div>") +
      gad("Guestbook", "<div class='gbook' id='gbookMini'><div class='gmsg muted'>opening the pond…</div></div><button class='gbtn' id='gbSign' type='button'><span>Sign the guestbook</span></button>");

    side.querySelectorAll(".navrow").forEach(function (el) { el.addEventListener("click", function () { go(el.dataset.pond ? "#/pond" : "#/" + el.dataset.room); }); });
    side.querySelectorAll(".tagcloud button").forEach(function (el) { el.addEventListener("click", function () { go("#/tag/" + encodeURIComponent(el.dataset.tag)); }); });
    side.querySelectorAll(".peek button").forEach(function (el) { el.addEventListener("click", function () { go("#/trinkets"); setTimeout(function () { openLB(ROOMS.trinkets.gallery, +el.dataset.relic); }, 420); }); });
    var gbSign = side.querySelector("#gbSign"); if (gbSign) gbSign.addEventListener("click", function () { go("#/pond"); });
  }
  function syncSideActive() {
    var onPond = location.hash.replace(/^#\/?/, "") === "pond";
    document.querySelectorAll(".navrow").forEach(function (el) { el.classList.toggle("active", el.dataset.pond ? onPond : el.dataset.room === current); });
  }

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

  function startClock() {
    var el = document.getElementById("clock"); if (!el) return;
    function tick() { var n = new Date(), h = n.getHours(), hh = (h % 12 || 12); el.innerHTML = "<b>" + hh + ":" + String(n.getMinutes()).padStart(2, "0") + " " + (h < 12 ? "AM" : "PM") + "</b><small>" + n.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" }) + "</small>"; }
    tick(); setInterval(tick, 1000);
  }

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
