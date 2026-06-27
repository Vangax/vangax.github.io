(function (root) {
  "use strict";

  var THEME = "aero";
  try { THEME = localStorage.getItem("vx_theme") === "re" ? "re" : "aero"; } catch (e) {}
  function isRE() { return THEME === "re"; }
  function T(a, b) { return isRE() ? b : a; }
  function applyTheme() { try { document.documentElement.setAttribute("data-theme", THEME); } catch (e) {} }
  function switchTheme() {
    THEME = isRE() ? "aero" : "re";
    try { localStorage.setItem("vx_theme", THEME); } catch (e) {}
    location.reload();
  }

  var RE_ROSTER = ["leon", "rebecca", "chris", "jill", "ada", "claire", "krauser", "wesker", "sherry", "hunk", "carlos", "ashley", "barry"]
    .map(function (n) { return "assets/re/roster/" + n + ".png"; });

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
          "and total overdose. nobody ever brings up total overdose and i genuinely think thats a crime. a chaotic, ridiculous, slow-mo gunfight of a game i was obsessed with as a kid for reasons i still cant fully explain and have never needed to.",
          "i also basically lived on handhelds. the psp, and later the ps vita, more or less raised me. i carried whole worlds around in my pocket and it honestly felt like the future. i poured genuinely unreasonable hours into those little machines and id do it again tomorrow.",
          "and the wii. oh man, the wii. i still boot it up sometimes and im not even slightly embarrassed about it. wii sports tennis was a peak of human civilisation, i will not be taking questions, and the baseball one had me swinging at thin air in my living room like id completely lost it. pure, dumb, perfect joy.",
          "and heres a concerning one: i learned what torrents were when i was six. SIX. i should have been learning to tie my shoes and instead i was figuring out seeders and leechers because i wanted a game that badly. six-year-old vang, hunched over a desktop, committing mild crimes for a racing game. iconic. slightly alarming. mostly iconic.",
          "somewhere in there i got curious about how games were actually MADE. what is happening behind the screen. i went down that rabbit hole hard, learned a bunch about engines and how it all fit together, and then, classic vang, forgot all of it. i have no idea now. if you asked me today id just point at the screen and whisper, magic, probably.",
          "so thats chapter one: games, sports, a bit of studying, full chaos, right up until about thirteen.",
          "and look, games never actually left me. these days ive played most of the big aaa stuff, the polished cinematic giants, all of it. but my one forever series, the hill i will happily die on, is resident evil. i could yap about resident evil until the sun comes up and i probably will, in its own post, so dont let me start here. my favourite character is rebecca chambers, ahaha jk, its leon, its obviously leon, but rebecca is a very solid second.",
          "anyway. ANYWAY. back to the timeline before i lose you to a full resident evil monologue.",
          "at 13 i started a youtube channel. and i didnt just dabble, i got seriously into editing. proper, professional-level editing, the kind where you sit for six hours nudging one clip three frames left because it FEELS wrong. i did that for two, three years. it taught me more about pacing and attention and finishing things than i realised at the time.",
          { q: "editing is where i first learned the last 10 percent is where the magic lives. i then proceeded to ignore that lesson for the rest of my life." },
          "then college happened. i came to symbiosis. first year was gentle, programming from scratch, football whenever i could, enjoying the small stuff. but something was quietly shifting in how i thought. i could feel the gears changing.",
          "i got into programming properly. then data science. then the door blew off its hinges and everything behind it was interesting.",
          "around then i also found my people online. theres this little community called dokidoki and its honestly one of my favourite corners of the internet. thats where kaye is, leeza, the og VA youtuber and valo streamer, genuinely one of the good ones. and my little circle there, belani, hjd, lakshay, and yes, sussy baka (you know who you are). the kind of online friends that feel very real.",
          "and then i got serious. or more accurately, my chaos finally got a direction.",
          "i started building actual things, mostly around neuroscience and brain tech. this is where the projects that survive past 90 percent live, or at least the ones that got far enough to scare me.",
          "engram. okay, properly now. engram wasnt planned. it showed up in my head one night while i was just thinking, and it hit deep, not a normal idea, it felt heavy and real. i was thinking about everyone quietly getting left behind as the world speeds up, and how were all getting lonelier at the same time. i was reading the bhagavad gita around then and one idea lodged in me: that when you actually find your true self, you stop getting thrown around by your own suffering, you start watching it from a third seat, almost like youre supporting your own body instead of being dragged by it. and i thought, what if there was something that just gently reminds you who you actually are. not addictive. not replacing you. just bringing you back to yourself, again and again. thats engram.",
          "the build was humbling. the ui phase was pure suffering, things breaking, nothing feeling right, layouts betraying me daily. i had 19 features planned. NINETEEN. then i started building and realised about 17 of them were ego, so i cut it to 2 core things and finally it breathed. engram v0.2 is alive. it is living proof that vang can, in fact, finish a thing.",
          "after engram there was just a pile of other half-mad experiments. theres blackwall, which is basically me poking at what happens when ai agents start inventing their own secret language to talk to each other, and whether you can catch it before it gets weird. theres amalgam, which has, and im being completely serious, actual slime mold as a layer in a neural net, and no, im not explaining that one right now. theres nebula, a whole cyberpunk network you can walk around inside. i wont list them all like a resume, half of them already live in the 90-percent graveyard. the point is just that my brain does not stop.",
          "oh, physics. i have to mention physics, because physics has been with me the longest. ive been learning it deeply for about five years and i genuinely love it, theories, the why of things, sitting and thinking about the universe like its a personal problem. astrophysics especially. for a long time, thinking about it was enough. lately its not, my brain wants to BUILD with it now, not just admire it. thinking phase to building phase. thats honestly the whole arc of me right now.",
          "and its not only the building. im deep into biology, into environment and climate stuff, into where future tech is actually headed, and lately ive been poking at cybersecurity and slowly learning my way around it. (and yes, before you ask, mr robot is my favourite show, and yes, it is absolutely partly to blame for the cybersec thing. fsociety, etc.)",
          "now i have to back up and tell the part thats not all projects and jokes, because it shaped most of this.",
          "before all of it i was studying physics and prepping for medical, applied maths on the side, fully committed, that was THE path, the only one i could see for myself. and then i didnt get in. and it hit so much harder than i expected, not even because of the result, but because the entire direction in my head just vanished. and somewhere in that fog i quietly drifted away from physics too, without even noticing. like everything paused and i didnt know what to hold onto.",
          "the farewell got me though. 2024, school ending, everything ending at once. after the whole ceremony, when everyone had already started leaving, me and my best friend just didnt. we picked up a ball and played football on the ground in our formal clothes, full pants, shirts, shoes, for over an hour. talking, laughing, but also feeling that heavy thing, that this is the last time it looks like this. it was never about the game. it was about holding the moment a little longer. i did not think i would miss school that much. that day told me otherwise.",
          { q: "we played football in our formal clothes until it got dark. thats the most accurate self-portrait i have." },
          "college pulled me out of the fog slowly. i started building again on my own, no plan, no pressure, just chasing whatever felt interesting at 2am. and somewhere in there the spark came back, the actual fire to make things instead of only thinking about them. i walked into my second year a noticeably different person, less dreaming, more doing.",
          "(theres also the time i trained so hard for a national football tournament that i injured my own hip, and then went and played anyway, and it somehow turned into one of the best trips of my life, classrooms turned into bedrooms, new friends from schools all over, celebrating nitins birthday at the venue. but thats its own post. remind me.)",
          "which brings me to right now. and honestly? this whole site is just the latest thing my brain wandered into and then flat out refused to drop. i had the itch to build something that felt alive, a little nostalgic, a little too glossy, and a few sleepless nights later, here we are, a green frutiger-aero garden with a working koi pond. theres no grand reason for it. its just vang being vang.",
          { q: "some people journal to cope. i build a koi pond with a real-time day-night cycle. were not the same. (we are exactly the same.)" },
          "so thats me. devang. vang. 19, too many tabs, allergic to the last ten percent, hopelessly in love with football and steve smith and resident evil and the wii and physics and building things that probably shouldnt exist yet. starting things, finishing some, abandoning more, and every so often, rarely, gloriously, seeing one all the way through.",
          "if you sign the koi pond, your koi swims here next to mine. ill probably notice it at 2am mid hyperfocus and smile. welcome to the garden. make yourself at home, the bench is always free." ] } ] },
    world: { name: "The World", img: "assets/globe.png", accent: "blue", tag: "the serious stuff i cant stop thinking about.",
      intro: "the wide-angle shot. brain tech, cybersec , biology, biosecurity, climate, where tech is dragging us next, the things i actually lose sleep over. first up: a long investigation into a us biosecurity policy that was built over thirteen years and lived for exactly one day.",
      posts: [
        { title: "the policy that lived one day", date: "Jun 27, 2026", tags: ["biosecurity", "essay", "policy", "long read"], body: [
          { sec: "section 1: the rescinded policy" },
          { lead: "**this is not a story about policy change. this is a story about policy deletion without replacement.**" },
          { hr: true },
          "okay so. before anything else, look at this.",
          { img: "assets/blog1/images/rescinded-notice.png", alt: "the rescinded notice. NOT-OD-25-061, marked RESCINDED across the page.", cap: "the actual nih notice. the word stamped diagonally across it, over and over, is RESCINDED." },
          "thats where this whole thing starts. a document that exists only to tell you it no longer exists. a policy that got a number, got a date, got months of preparation behind it, and then got a watermark that says it was all called off.",
          "i want to walk you through how that happened. slowly. because the order of events is the entire point, and if you go too fast you miss the part that should make the back of your neck go cold.",
          { h: "the date that was supposed to mean something" },
          "start here: **may 6, 2025.**",
          "that was the day the united states was finally going to govern its most dangerous biological research under one roof. not four overlapping memos stacked across more than a decade. not a patchwork. one policy. one framework. one door that every funded lab in the country had to walk through before it could touch the scary stuff.",
          "the door never opened.",
          "but to understand why an unopened door matters this much, you have to understand what was behind it. what this policy actually was, how much weight it carried, and how long it took to build. so lets do that first, properly, because almost nobody actually read it.",
          { h: "what NOT-OD-25-061 actually said" },
          "on **january 10, 2025**, nih published a notice. catalog number **NOT-OD-25-061**. boring title, boring formatting, the kind of thing that scrolls past ten thousand inboxes and gets read by maybe forty people.",
          "it announced that nih would implement the **u.s. government policy for oversight of dual use research of concern and pathogens with enhanced pandemic potential.** everyone just calls it the **DURC/PEPP policy.** the effective date written into it was **may 6, 2025.**",
          "now strip out the acronyms and here is what that policy actually did.",
          { h3: "it covered everything" },
          "the applicability section is short and it is total. the policy applied to all nih funded research. and i mean all of it.",
          { img: "assets/blog1/images/applicability-highlight.png", alt: "applicability section, highlighted. the policy applies to all nih funded research, grants, cooperative agreements, R&D contracts, intramural research, and other transactions." },
          "read what got highlighted there:",
          { ul: ["grants", "cooperative agreements", "research and development contracts", "nih intramural research projects, meaning nihs own in house labs", "and other funding agreements, including other transactions"] },
          "that last one matters more than it looks. other transactions are the flexible, quieter funding instruments that dont always behave like normal grants and dont always show up where people are looking. the policy pulled those in too. nothing was meant to slip the net.",
          "for competing applications, nih would ask for the DURC/PEPP materials as part of just in time, or JIT, submissions on or after may 6, 2025. for research already funded and running, the materials came due with the non competing renewals and the research performance progress reports, the RPPRs. and every one of those submissions had to be signed off by the authorized organizational representative, the AOR. that detail is small but it is not nothing. the AOR is the institution itself putting its name on the paperwork. not a single lab tech. the university. the institute. the whole body, on the line.",
          { h3: "it sorted the danger into two categories" },
          "this is the spine of the entire policy. everything got sorted into two buckets, and the buckets are the part you actually need to remember.",
          { table: { head: ["category", "the official name", "what it really means"], rows: [
            ["**category 1**", "dual use research of concern, DURC", "real, legitimate science that could be turned around and used to cause harm. knowledge that cuts both ways."],
            ["**category 2**", "pathogens with enhanced pandemic potential, PEPP", "the genuinely frightening stuff. research that makes a pandemic class pathogen more transmissible or more lethal. gain of function, in the words people actually use out loud."] ] } },
          "and here is the line that historians of this should underline. for the **first time**, durc and gain of function research sat together under one unified policy, with real institutional machinery wired underneath it. before this they were governed separately, loosely, in pieces. this notice was the moment they finally became one regime.",
          { h3: "the scope got bigger, not smaller" },
          "the policy did not just unify the old rules. it widened them.",
          { img: "assets/blog1/images/expanded-scope.png", alt: "expanded scope. the policy expands oversight to all select agents and toxins, all risk group 4 and most risk group 3 agents, with new oversight roles for researchers, applicants, recipients, nih and hhs." },
          "it pulled in all select agents and toxins, all risk group 4 agents, and most risk group 3 agents from the nih guidelines, plus anything added in future updates. and it created **new oversight roles** for everyone in the chain: researchers, applicants, recipients, nih itself, and hhs above it. the stated goal, in the policys own words, was to identify and mitigate the biosafety, biosecurity, and information risks tied to handling pathogens that could cause significant harm to society, whether by accident or on purpose.",
          "accident or on purpose. they wrote both. they meant both.",
          { h3: "it built actual machinery to enforce all this" },
          "and this is where the policy stops being a statement of values and becomes a system with moving parts. this is the part i most want you to see, because it shows how much was actually being switched on.",
          { img: "assets/blog1/images/ire-icdur.png", alt: "institutions must have an institutional review entity, IRE, and an institutional contact for dual use research, ICDUR. researchers must work with their IRE to develop a risk benefit assessment and risk mitigation plan, approved by nih before work can begin or continue." },
          "every institution that wanted to do research inside the scope of this policy had to stand up two things:",
          { ol: ["an **institutional review entity**, the **IRE**. a body inside the institution whose job was to review the dangerous work.", "an **institutional contact for dual use research**, the **ICDUR**. a named human being, a single point of accountability, the person on the other end of the phone."] },
          "the composition and the responsibilities of both were spelled out in the policy itself. these were not suggestions. they were structural requirements.",
          "and then the workflow, which is the heart of it:",
          { ul: ["every principal investigator had to sit down with their IRE and build a **risk benefit assessment** and a **risk mitigation plan.**", "that plan had to be approved by **nih before the work could begin, or continue.** before. so funding did not flow into the dangerous research until the review had actually happened.", "nih reviewed the institutions determinations rather than just trusting them blind.", "and category 2 work, the gain of function tier, got escalated **up to hhs** for department level review. a second set of eyes at the top of the building. not a rubber stamp. a real referral, upward."] },
          "then it kept watching. the reporting was continuous, not one and done. **annual** reports for category 1. **semi annual** reports for category 2. the more dangerous the work, the more often you had to come back and account for it.",
          { h3: "it even drew a map" },
          "the policy also had a geography. under it, nih would **not fund** category 1 or category 2 research in nations the u.s. government had flagged as posing risk. the policy called them countries of concern.",
          { img: "assets/blog1/images/countries-of-concern.png", alt: "countries of concern. nih will not fund category 1 or category 2 research in DPRK, iran, the russian federation, china including hong kong and macau, cuba, syria, and venezuela." },
          "the list, as written:",
          { q: "**dprk** (north korea) · **iran** · **russian federation** · **china**, including hong kong and macau · **cuba** · **syria** · **venezuela**" },
          "and the policy said outright that this list was subject to change as the government saw fit.",
          "so put it all together. coverage over everything nih funds. two categories of danger. mandatory review bodies. a named accountable contact. risk plans approved before the work starts. an upward referral to hhs for the worst of it. continuous reporting. a funding blacklist by country.",
          "this was not a memo. this was a regime. and it was three months and twenty six days from going live.",
          { h: "thirteen years of fragments, finally fused" },
          "here is the other thing that made may 6 matter. it was not just what this policy did. it was what it ended.",
          "for over a decade, oversight of dangerous biology was scattered across separate, partial, sometimes contradicting documents. each one written in its own little moment of fear. none of them designed to work together as one system.",
          "the DURC/PEPP policy was built to merge, revise, and supersede all of them at once. here is the lineage it swallowed:",
          { table: { head: ["year", "the document", "what it did"], rows: [
            ["**2012**", "federal durc policy", "oversight of dual use research that the federal government itself funded"],
            ["**2014**", "institutional durc policy", "pushed the responsibility down onto the institutions doing the work"],
            ["**2017**", "ostp p3co policy", "the framework for research on potential pandemic pathogens"],
            ["**2017**", "hhs p3co framework", "the department level review mechanism that sat under it"] ] } },
          "four documents. two of them from the same year. none of them written as parts of a single machine. they overlapped. they left seams. and for all that time the most dangerous research in american science was governed through those seams.",
          "the DURC/PEPP policy collapsed all four into one chain of command with one effective date. that is genuinely hard to do. it took the federal government from 2024 to even get the implementation notice out, and the institutions then spent **months** getting ready. building their IREs. naming their ICDURs. reading the guidance. drafting mitigation templates. biosafety officers and university lawyers clearing their calendars for may. the countdown was real and everyone serious about biosecurity was counting down to it.",
          "and then the timeline did something nobody who wrote NOT-OD-25-061 had planned for.",
          { h: "the week it all came apart" },
          "watch the dates. dont let me rush you. just watch them.",
          { table: { head: ["date", "what happened", "what it meant"], rows: [
            ["**may 2024**", "the u.s. government releases the DURC/PEPP policy", "the blueprint. the merge of all four legacy policies finally exists."],
            ["**january 10, 2025**", "nih issues **NOT-OD-25-061**", "implementation locked in. the effective date is set in writing: **may 6, 2025.**"],
            ["**the months between**", "institutions prepare", "IREs stood up. ICDURs named. risk plans drafted. everyone braces for go live."],
            ["**may 5, 2025**", "**executive order 14292**", "the day before the door opens, the ground moves."],
            ["**may 6, 2025**", "the day that never happened", "this is the effective date. the day the policy was supposed to become real. it didnt."],
            ["**may 7, 2025**", "nih issues **NOT-OD-25-112**, the rescission", "NOT-OD-25-061 is pulled. the framework is gone."],
            ["**120 days**", "the promise", "a new approach, we were told, within 120 days."],
            ["**september 2025**", "the deadline passes", "the 120 days run out. no replacement policy arrives."],
            ["**june 2026**", "now", "still no policy. the roof came down and nothing went back up."] ] } },
          "the order that did the killing arrived the day before. on may 5, 2025, executive order 14292 defined the target with surgical precision. it defined dangerous gain of function research as research on an infectious agent or toxin with the potential to cause disease by enhancing its pathogenicity or increasing its transmissibility. the covered outcomes were spelled out one by one: enhancing harmful consequences, increasing transmissibility, evading immune responses or therapeutics, altering host specificity, and, chillingly, recreating eradicated or extinct biological agents.",
          "read that last one twice. recreating eradicated or extinct biological agents. the diseases we already beat. written into a federal definition the night before the policy that would have governed them was due to switch on.",
          "now look at just two rows of the table. put your finger on them.",
          "**may 6.** go live.",
          "**may 7.** rescinded.",
          "the policy did not get to live for a single day. one day. it was killed in the twenty four hour window between when it was supposed to start and the morning after.",
          "NOT-OD-25-061 was replaced by **NOT-OD-25-112**, dated may 7, 2025, titled, with no apparent sense of irony, *implementation update: improving the safety and security of biological research.* it implemented nothing. it rescinded.",
          "and it did not just rescind. it made a promise, in plain language:",
          { q: "a new policy, to be delivered within 120 days, will replace the proposed DURC/PEPP policy set to take effect may 6, 2025. until this new policy is in place, research meeting the definition of dangerous gain of function research is to be paused." },
          "the 120 days expired in september 2025. it is now june 2026. the pause became a vacuum.",
          { h3: "the people left holding the plans" },
          "and somewhere underneath the notice numbers, there were people.",
          "remember what the institutions had already done. they had spent months getting ready for may 6. they had stood up their institutional review entities. they had named their icdurs, actual human beings whose job titles now pointed at a policy that no longer existed. they had written risk benefit assessments and mitigation plans for work that was, as of may 7, simply paused with no end date attached. labs that had built their funding timelines, their hiring, their whole research calendars around a may 6 go live woke up on may 7 to a rescission and a soft promise of 120 days.",
          "then the 120 days passed too. and the institutions that had done everything right, that had taken the policy seriously enough to build the machinery it demanded, were left holding plans for a regime that was never coming, sitting on paused research with no signal for when, or whether, they could resume.",
          "the ones who prepared the most carefully were the ones left hanging the longest. that is the quiet cost nobody put a notice number on.",
          { h: "and then the link went dark" },
          "heres a small thing i want to leave you with before section 2.",
          "i went looking for the actual policy. not the notice about it, the document itself, the 2024 text everything here was built on. the government link to it returns this.",
          { img: "assets/blog1/images/policy-404.png", alt: "a 404 page. large text reads Page Not Found. This link might not be working. But its not a disaster. Discover what is happening now." },
          "page not found. *this link might not be working. but its not a disaster.*",
          "the rescission did not just pause the work. it pulled the document down. the primary government link to the 2024 policy is a 404 now, error page and all, reassuring you in soft friendly type that this is not a disaster.",
          "i am not going to oversell the screenshot. a dead url is just a dead url. but it points at the real thing, which is this: the most comprehensive biosecurity framework the country ever wrote was deleted thoroughly enough that you can no longer read it on the website that made it. the only reason the full text survives at all is that universities had copied it onto their own compliance pages before the link went dark.",
          "that is where section 2 lives. in the mirrors. lets go read the policy that the government no longer hosts.",
          { h: "the thing youre not supposed to notice" },
          "the official story is a story about reform. a pause. a rethink. a better, smarter framework, coming soon.",
          "but strip the language back and just lay the dates out flat, because the dates do not lie:",
          { ul: ["a unified oversight regime, more than a decade in the making, was scheduled.", "it was rescinded the day after it was meant to begin.", "a replacement was promised in 120 days.", "those 120 days expired with nothing behind them.", "more than a year later, the gap is still open.", "and the original document is a 404."] },
          "that is not the shape of a policy being improved. a policy being improved gets a successor. a draft. a comment period. something standing in the space where the old thing stood.",
          "this space is empty.",
          "the most dangerous research the u.s. government funds, the gain of function work, the pandemic pathogen enhancement, the category 2 science that was supposed to need a second signature from the top of hhs, currently runs under no unified federal framework at all. the old fragments were superseded on paper. the new framework never came. what is left is the gap between them, and the gap is where we are living right now.",
          "so let me just say it plainly, the way the dates force me to:",
          { lead: "**this is not a story about policy change. this is a story about policy deletion without replacement.**" },
          "the sections after this one are about that empty room. about how a single day, and a single executive order signed the night before, managed to erase thirteen years of work. and about what has been quietly growing in there, unwatched, ever since.",

          { sec: "section 2: what the 2024 policy actually was" },
          { lead: "**this was the most comprehensive biosecurity oversight framework the united states had ever built. it took thirteen years of incremental failures to get here.**" },
          { hr: true },
          "okay. so in section 1 i told you the policy got deleted. the government link to the text is a 404. that is true and it is strange, but a dead link is not an argument. you cant mourn something you never saw.",
          "so this section is the something. this is me actually opening the document and reading it to you, line by line, so you know exactly what was switched off on may 7.",
          "and heres the first odd thing. i could read it at all.",
          "because the policy text is gone from the government servers, but it is not gone from the internet. universities had to comply with this thing. so before may 2025, compliance offices at harvard, michigan, florida, northwestern, hopkins, and a dozen others copied the full policy text onto their own websites. and those copies are still up. the government deleted the original. the mirrors survived.",
          "so what you are about to read is a policy reconstructed from its own fossils. that detail matters, so hold onto it. we will come back to it at the end.",
          { img: "assets/blog1/images/implementation-guidance-cover.png", alt: "the implementation guidance cover. executive office of the president of the united states seal, national science and technology council, titled IMPLEMENTATION GUIDANCE for the United States Government Policy for Oversight of Dual Use Research of Concern and Pathogens with Enhanced Pandemic Potential.", cap: "the implementation guidance, the companion document, still lives on a white house archive subdomain. archived. the policy it was written to guide does not." },
          { h: "the four policies it was built to replace" },
          "before 2024, oversight of dangerous biology in america was not one thing. it was four things, written in four different moods, none of them designed to work together.",
          { table: { head: ["year", "document", "what it governed"], rows: [
            ["**2012**", "federal durc policy", "dual use research that the federal government itself funded"],
            ["**2014**", "institutional durc policy", "pushed the duty of oversight down onto the universities and institutes doing the work"],
            ["**2017**", "ostp p3co policy", "the framework for reviewing research on potential pandemic pathogens"],
            ["**2017**", "hhs p3co framework", "the department level review mechanism that sat underneath it"] ] } },
          "four documents. two from the same year. each one patched a hole the last one left, and each one left a new hole of its own. for over a decade this is how the most dangerous experiments in the country were governed: through the seams between four overlapping memos.",
          "the 2024 policy did the thing nobody had managed in thirteen years. it merged all four into a single framework, with a single chain of command and a single effective date. that is the whole reason it matters. not because it was new rules, but because it was finally one set of rules.",
          { h: "the spine: two categories" },
          "everything in the policy hangs off one structural decision. all covered research gets sorted into one of two categories. the implementation guidance puts it plainly:",
          { q: "\"Research under the Policy is grouped into Category 1 (DURC) or Category 2 (PEPP) based on the characteristics of the agents used and the potential research outcomes. Each experimental category has specific review and mitigation processes.\"" },
          "so. two buckets.",
          { h3: "category 1: dual use research of concern" },
          "category 1 is the dual use bucket. legitimate science whose knowledge, products, or techniques could be turned around and misused to cause harm. the federal definition covers research that \"provides knowledge, information, products or technologies that could be misapplied to do harm.\"",
          "what makes work fall into category 1 is partly the agent it uses. and this is where the scope gets real. category 1 covered:",
          { ul: ["**all biological select agents and toxins** on the federal select agents program list", "**all risk group 4 pathogens** listed in the nih guidelines", "**most risk group 3 pathogens** (with a handful of named carve outs like hiv, m. tuberculosis, and a few others)", "**all human agents handled at biosafety level 3 or 4**"] },
          "if you want to know what that list actually contains, it is the worst shelf in the building. anthrax. the reconstructed 1918 influenza virus. ebola. marburg. smallpox. yersinia pestis, the plague. these are not hypotheticals. these are the named organisms the policy was built to keep a paper trail around.",
          { h3: "category 2: pathogens with enhanced pandemic potential" },
          "category 2 is the one people actually mean when they say gain of function. it is research on pathogens with enhanced pandemic potential, and what defines it is not just the agent but the outcome of the experiment. the policy lists the specific experimental outcomes that pull work into category 2:",
          { ul: ["enhancement of **transmissibility** in humans", "enhancement of **virulence** in humans", "enhancement of **immune evasion**, disrupting the protection people already have", "the **generation, use, reconstitution, or transfer of an eradicated or extinct** potential pandemic pathogen"] },
          "read that last one again, because it is the same line the executive order would later echo. reconstituting an eradicated pathogen. bringing back something the world already killed. that was a named, governed category. that was the tier that required the heaviest review in the entire framework.",
          { h: "the machinery: what every institution had to build" },
          "a category system is just vocabulary until something enforces it. this is the part that made the 2024 policy a regime instead of a statement. every institution doing covered work had to build real, named infrastructure.",
          "straight from the policy text as nih described it:",
          { q: "\"Composition and responsibilities of the IRE and ICDUR are outlined in the DURC/PEPP Policy. Researchers must work with their IRE to develop a risk-benefit assessment and risk mitigation plan, as needed, that must be approved by NIH before this work can begin or continue.\"" },
          "unpack that, because there is a lot loaded into two sentences.",
          { ol: ["every institution had to stand up an **institutional review entity**, the **IRE**. an internal body whose job was to review the dangerous research before it ran.", "every institution had to name an **institutional contact for dual use research**, the **ICDUR**. one accountable human being. a name, not a department.", "every researcher had to work with that IRE to write a **risk benefit assessment** and a **risk mitigation plan**.", "and the killer clause: that plan had to be approved by nih **before this work can begin or continue.** before. not reviewed after the fact. not audited next year. approved up front, or the work does not happen."] },
          "then it escalated. category 2 work, the gain of function tier, got referred **upward to hhs** for department level review. a second authority, above the funding agency, signing off on the most dangerous experiments. and the watching never stopped: annual reporting for category 1, semi annual for category 2.",
          "that is the teeth. pre funding review, named accountability, mandatory bodies, and an upward referral for the worst of it.",
          { h: "the scope, and the map" },
          "two more pieces, because the policy reached further than most people realize.",
          "**it expanded who was covered.** in nihs own words, the policy \"expands oversight of DURC to a wider scope of agents,\" and \"There will be new oversight roles for researchers, applicants, recipients, NIH, and HHS.\" it applied, again verbatim, to \"all NIH-funded research, including grants and cooperative agreements, Research and Development (R&D) contracts, NIH intramural research projects, and other funding agreements (e.g., Other Transactions).\" everything. including the quiet funding instruments that usually slip oversight.",
          "**it drew a geographic line.** the policy carried a funding blacklist by country. it would not fund category 1 or category 2 research in nations the government flagged as countries of concern:",
          { q: "dprk (north korea), iran, the russian federation, china (including hong kong and macau), cuba, syria, and venezuela." },
          "a biosecurity policy that was also, quietly, a foreign policy. when it was rescinded, that geographic restriction went with it.",
          { h: "why this actually mattered" },
          "let me say the thesis again, now that you have seen the parts.",
          "for the first time in american history, dual use research and gain of function research sat under one roof, with one set of definitions, one review pathway, and one agency holding the pen, backed by a second agency above it. thirteen years of fragments, fused. and crucially, it had teeth, the pre funding approval clause, that made it more than advice.",
          "this was the most comprehensive biosecurity oversight framework the country had ever assembled. it was not perfect. people argued about it. but it existed, it was specific, and it was about to be real.",
          "and then we are back to the strange part.",
          { h: "the digital fossils" },
          "the government deleted it. but the universities had already copied it down. so the full text of the most comprehensive biosecurity framework america ever wrote now survives mainly as mirrors on compliance websites, like fossils pressed into institutional pages after the original organism was gone.",
          "heres where you can still read it:",
          { table: { head: ["mirror", "what it preserves"], rows: [
            ["[harvard medical school](https://coms.hms.harvard.edu/dual-use-research-concern-durc-and-pathogens-enhanced-pandemic-potential-pepp)", "full policy text, category 1/2 definitions, the IRE workflow, and the \"IMPORTANT NOTE\" about the EO superseding it"],
            ["[university of florida](https://ibc.research.ufl.edu/durc-pepp/uf-durc-pepp-policy/)", "complete text including the category 1 agent scope and category 2 outcomes"],
            ["[university of michigan](https://research-compliance.umich.edu/research-safety/durc-pepp-policy)", "policy overview with the may 5, 2025 EO note"],
            ["[northwestern university](https://researchsafety.northwestern.edu/safety-information/biological/u.s-government-policy-for-oversight-of-dual-use-research-of-concern-durc-and-pathogens-with-enhanced-pandemic-potential-pepp.html)", "clean summary of what changed, effective date, scope"],
            ["[johns hopkins (slide deck)](https://www.hopkinsmedicine.org/-/media/hse/documents/durc-pepp-policy-powerpoint.pdf)", "overview slides, category 1/2 definitions, who is affected"],
            ["[new york medical college](https://www.nymc.edu/policies/administrative-policies/oversight-of-durc-and-pepp/)", "full institutional policy with the 2024 usg text embedded"] ] } },
          "the irony writes itself, so i will only write it once. the hhs link to the policy is dead. the nih link to the policy is dead. but harvard, michigan, florida, and northwestern still have the whole thing, because they had homework to do and they did it before the deadline that never came.",
          { h: "the note that froze in time" },
          "and this is the last thing i want to show you, because it is the hinge between this section and the next one.",
          "go to the harvard page right now, or look at the implementation guidance itself, and you find this box still sitting there:",
          { img: "assets/blog1/images/implementation-important-note.png", alt: "the implementation guidance important note. it reads that policies, actions, and definitions in the Executive Order supersede implementation of the DURC/PEPP Policy, which will be replaced or revised by September 2025, that research meeting the definition of dangerous gain-of-function research is paused, and updates will be made upon publication of the new policy." },
          { q: "\"IMPORTANT NOTE: Policies, actions, and definitions in this Executive Order supersede implementation of the DURC/PEPP Policy, which will be replaced or revised by September 2025. Research meeting the definition of 'dangerous gain-of-function research' is paused. Updates will be made upon publication of the new policy.\"" },
          "read it as a date stamp. a major university compliance office, still displaying a promise that the policy would be \"replaced or revised by September 2025.\" that september came and went. the replacement never published. so the note just sits there, frozen, a countdown to a thing that never arrived, still telling researchers their work is paused and updates are coming.",
          "that is the whole tragedy in one box. the framework was real enough that harvard built around it. the promise to replace it was official enough that harvard still displays it. and the replacement is so absent that the note has quietly become a fossil too.",
          "section 1 was what happened. this section was what was lost. section 3 is about the empty room all of this left behind, and what no one is watching in it now.",
          { h3: "sources for this section" },
          { ul: ["nih implementation notice, **NOT-OD-25-061** (rescinded), and the rescission, **NOT-OD-25-112**", "the **implementation guidance** for the 2024 usg DURC/PEPP policy (executive office of the president, national science and technology council, may 2024), still hosted on the white house archive subdomain", "university mirrors of the full policy text: harvard medical school, university of florida, university of michigan, northwestern, johns hopkins, new york medical college", "gerald l. epstein, [\"the evolution of united states governance policies for research using pathogens with enhanced pandemic potential,\"](https://journals.sagepub.com/doi/abs/10.1089/apb.2024.0049) *applied biosafety*, vol. 30, issue 2 (april 24, 2025), doi:10.1089/apb.2024.0049", "[nih osp announcement](https://osp.od.nih.gov/us-government-releases-policy-for-oversight-of-dual-use-research-of-concern-and-pathogens-with-enhanced-pandemic-potential/), \"u.s. government releases policy for oversight of DURC and PEPP\" (may 7, 2024)", "[hhs aspr s3 framework page](https://aspr.hhs.gov/S3/Pages/Dual-Use-Research-of-Concern-Oversight-Policy-Framework.aspx)"] },

          { sec: "section 3: the rescission" },
          { lead: "**EO 14292 did not replace the 2024 framework. it deleted it, and promised a replacement that never arrived.**" },
          { hr: true },
          "so far i have told you the policy got rescinded without showing you the thing that did it. this is that thing. this is the hand on the lever.",
          { img: "assets/blog1/images/eo14292-header.png", alt: "the white house page for executive order 14292, titled improving the safety and security of biological research, dated may 5, 2025, with the opening line of the order visible.", cap: "executive order 14292, signed may 5, 2025, the day before the durc/pepp policy was scheduled to take effect. the title says \"improving the safety and security.\" the text did the opposite." },
          "start with what the image proves. this was not a memo. not a guidance document. not an internal nih notice that forty people read. this was an **executive order**, signed by the president, the day before the 2024 policy was due to go live at midnight.",
          "and it opened the way executive orders open:",
          { q: "\"By the authority vested in me as President by the Constitution and the laws of the United States of America, it is hereby ordered.\"" },
          "that line matters. it tells you this was not a suggestion and not a proposal. it was a command, carrying the full weight of the office. when a document opens like that, things change the moment the pen lifts.",
          { h: "the definition: the knife blade" },
          "the first thing the order did was redraw the target. section 1 defined **dangerous gain of function research** with a precision the older policies never quite reached:",
          { q: "research on an infectious agent or toxin with the potential to cause disease by enhancing its pathogenicity or increasing its transmissibility." },
          "and it named the covered outcomes, plainly:",
          { ul: ["enhancing harmful consequences", "increasing transmissibility", "evading immune responses or therapeutics", "altering host specificity", "recreating eradicated or extinct biological agents"] },
          "this is the blade, so look at it closely. the executive order did not just cancel a policy. it **redefined what it was talking about**, and the new definition was broad enough to cover the exact research the 2024 framework had been built to oversee. it claimed the territory. then, as you will see, it walked off it.",
          { h: "the scope expansion: reaching past the funded world" },
          "then it reached further than the 2024 policy ever could.",
          { img: "assets/blog1/images/eo14292-govern-limit-track.png", alt: "executive order text directing agency heads to develop and implement a strategy to govern, limit, and track dangerous gain-of-function research across the united states that occurs without federal funding." },
          { q: "\"...shall develop and implement a strategy to govern, limit, and track dangerous gain-of-function research across the United States that occurs without Federal funding and other life-science research that could cause significant societal consequences.\"" },
          "read what that asks for. the 2024 policy was carefully scoped. it governed nih funded work, the research the government paid for and therefore had a clear handle on. the executive order demanded something bigger: oversight of dangerous gain of function research **across the united states**, including the privately funded work the old policy could never touch.",
          "that is, on paper, a more ambitious goal. it is also the deletion thesis in its purest form. the order rescinded the framework that actually worked, the one with the IREs and the pre funding review, and in its place ordered a *strategy*, to be invented later, for an even larger problem. it claimed more ground and held less. it described a bigger house while tearing down the one that was standing.",
          "and it did carry teeth of its own, to be fair to it. recipients would have to certify they do not fund dangerous gain of function research abroad, and violators faced \"immediate revocation of ongoing Federal funding, and up to a 5-year period of ineligibility.\" so it could punish. what it could not do, on the day it was signed, was review a single experiment. punishment is not oversight. a tripwire is not a guard.",
          { h: "the 90 day promise" },
          "the order also reached for the other chokepoint in biology: the companies that synthesize dna to order. it told them to tighten their screening, on a clock.",
          { img: "assets/blog1/images/eo14292-nucleic-acid.png", alt: "executive order text directing the director of ostp to revise or replace the 2024 framework for nucleic acid synthesis screening within 90 days, and to review it at least every four years." },
          { q: "\"Within 90 days of the date of this order, the Director of OSTP, in coordination with the APNSA and the heads of relevant agencies, shall revise or replace the 2024 'Framework for Nucleic Acid Synthesis Screening'... The Framework shall be reviewed and revised at least every 4 years, or as appropriate.\"" },
          "ninety days from may 5, 2025 lands in **early august 2025**. no revised framework was published in august. the four year review cycle, written so confidently into the order, is a schedule for a document that does not exist. it is a promise made into a vacuum, and the vacuum kept it.",
          { h: "the federal register record" },
          "here is a small asymmetry that says more than it should.",
          { img: "assets/blog1/images/eo14292-federal-register.png", alt: "the federal register entry for executive order 14292, improving the safety and security of biological research, presidential documents, may 8, 2025.", cap: "the federal register entry for EO 14292, published may 8, 2025. the official, permanent record of the rescission. the policy it killed was never published in the register at all." },
          "the 2024 policy was an hhs and ostp policy. it lived as guidance and as an nih notice. it never got a federal register rule of its own. the executive order that superseded it did. so the thing that did the killing got the formal, archival, permanent record. the thing it killed was born as a notice and died as a notice. the destruction is better documented than the creation. that tells you which one the system took more seriously.",
          { h: "the machinery of the halt: NOT-OD-25-112" },
          "an executive order sets direction. somebody still has to pull the specific lever. that was nih, the next day.",
          "**NOT-OD-25-112**, may 7, 2025, rescinded NOT-OD-25-061 and stood the whole implementation down. and it carried the promise in its own words:",
          { q: "\"A new policy, to be delivered within 120 days, will replace the proposed DURC/PEPP Policy set to take effect May 6, 2025. Until this new policy is in place, research meeting the definition of dangerous gain-of-function research is to be paused.\"" },
          "read the mechanics. no IRE submissions. no just in time durc materials. no review pathway. the dangerous work, **paused**. the replacement, **120 days out**. nih implementing the executive order by quietly pulling its own notice off the board.",
          "120 days from may 7, 2025 lands in **early september 2025**.",
          { h: "the promises that broke" },
          "so the rescission did not make one promise. it made three, each with a clock attached. here is where the clocks stand now, in june 2026.",
          { table: { head: ["promise", "deadline", "status"], rows: [
            ["90 day revision of the nucleic acid synthesis screening framework", "august 2025", "missed"],
            ["120 day replacement of the DURC/PEPP policy", "september 2025", "missed"],
            ["ongoing oversight of dangerous gain of function research", "may 2025 to present", "paused, never replaced"] ] } },
          "three deadlines. three misses. a pause with no end date is not a pause. it is a vacuum wearing the word pause.",
          { h: "the silence underneath" },
          "the most damning evidence is not loud. it is the absence of noise.",
          "a congressional research service report, surveying the landscape after the rescission, made the quiet observation that no other federal agency stepped in to fill the gap. nih paused, and that was the end of it. and underneath the framework, the report noted, there was never any floor to begin with:",
          { q: "\"There currently is no overarching federal law that provides oversight of laboratory biosafety and biosecurity with enforceable legal penalties.\"" },
          "sit with that. the executive order superseded the policy. the policy was the framework. and beneath the framework there was no law. so when the framework went, nothing caught it.",
          "congress noticed, sort of. bills were floated, like the risky research review act, which would have stood up an independent board to vet the most dangerous experiments. they were introduced. they stalled. they did not become law. the branch that could have built the missing floor did not build it.",
          "and the institutions, the ones from section 2 who took this seriously enough to stand up IREs and name icdurs and train their committees, were left holding a fully built compliance apparatus for a policy that no longer existed, governing paused work with no word on when, or whether, it could resume. the ones who prepared the most carefully were left standing in the emptiest room.",
          "so let me say it one more time, the way the documents force me to:",
          { lead: "**EO 14292 did not replace the 2024 framework. it deleted it, and promised a replacement that never arrived.**" },
          "the order had a definition, an ambition, a deadline, and a punishment. what it did not have, what it still does not have more than a year later, was a successor to the thing it switched off.",
          "and that raises the question section 4 is going to answer with a map. if the united states deleted its framework, where does that leave it next to everyone else? because the rest of the world did not stand still.",
          { h3: "sources for this section" },
          { ul: ["**executive order 14292**, \"improving the safety and security of biological research,\" [federal register, may 8, 2025](https://www.federalregister.gov/documents/2025/05/08/2025-08436/improving-the-safety-and-security-of-biological-research)", "nih notice **NOT-OD-25-061** (rescinded) and the rescission, **NOT-OD-25-112** (may 7, 2025)", "congressional research service, report **IN12554**, [\"What's next for federal oversight of dual use research of concern and pathogens with enhanced pandemic potential?\"](https://crsreports.congress.gov/product/pdf/IN/IN12554)"] },

          { sec: "section 4: the comparative governance map" },
          { lead: "**the united states went from \"attempted comprehensive framework\" to \"weakest oversight among major jurisdictions\" in under 48 hours.**" },
          { hr: true },
          "sections 1 through 3 were a story told from inside one country. a policy got built, a policy got deleted, a promise got broken. but a country does not govern dangerous biology in a vacuum. it governs it next to other countries, all of them making their own choices about the same handful of chokepoints. so the only way to understand what the rescission actually cost is to put the united states on a map with everyone else and look.",
          "so i built the map. here it is.",
          { img: "assets/blog1/images/compare-governance-heatmap.png", alt: "a color coded comparison grid of biosecurity oversight across seven dimensions and five jurisdictions, with the united states post-may 2025 column showing mostly red none or weak cells.", cap: "the governance map. each cell is one jurisdiction on one dimension of oversight. the second column, the united states after may 2025, is where the red lives." },
          "and the same data, collapsed into a single shape, because sometimes you need to see the total:",
          { img: "assets/blog1/images/compare-oversight-ranking.png", alt: "a horizontal bar chart of an illustrative oversight index, with china at 13, the eu at 12, the pre-may 2025 united states at 9, the voluntary igsc at 4, and the post-may 2025 united states at 3, the lowest.", cap: "an illustrative index, not a precise metric. but the shape is the point. the united states fell below a voluntary industry consortium." },
          "let me put the full grid in text too, so the exact claims are on the record and quotable.",
          { table: { head: ["dimension", "US pre-May 2025", "US post-May 2025", "EU 2026", "China", "IGSC voluntary"], rows: [
            ["sequence screening", "required (2010 framework)", "required (2010 framework)", "required + AI Act oversight", "centralized state control", "required (members only)"],
            ["customer verification", "institutional (2024 policy)", "none (vacuum)", "enhanced + licensing", "state-approved", "basic"],
            ["pre-funding review", "required (2024 policy)", "none (vacuum)", "partial (Horizon)", "extensive", "n/a"],
            ["AI design oversight", "not explicitly addressed (future-updates clause)", "none", "required (AI Act)", "emerging", "none"],
            ["benchtop devices", "unregulated", "unregulated", "partially regulated", "state-controlled", "unregulated"],
            ["enforcement", "federal (planned)", "none", "EU-wide", "state", "self-regulated"],
            ["coverage scope", "federally funded", "federally funded only", "EU market + funding", "all research", "commercial members only"] ] } },
          "now lets read it row by row, because each row hides a different part of the story.",
          { h: "where the united states went backward" },
          "look at the two US columns side by side. that is the whole tragedy in two columns.",
          "**sequence screening survived.** both US columns are green, because dna synthesis screening runs on the older 2010 framework, the guidance that asks commercial providers to screen orders. that floor did not move on may 7. the 2024 framework would have upgraded it, and the executive order promised a revision in 90 days that never came, but the basic screening guidance is still standing. so this is not where the collapse happened.",
          "the collapse is in the next three rows. **customer verification** went from institutional, handled by the IRE under the 2024 policy, to none. **pre-funding review**, the single most important clause in the entire 2024 framework, the requirement that nih approve a risk plan before dangerous work could begin, went to none. **AI design oversight** is the one cell where i want to be precise rather than dramatic: the 2024 policy never explicitly named ai protein design or biological design tools, the way the eu ai act does. it had a future-updates clause that *could* have reached them, but it did not actually do so. so the honest reading is that us oversight of ai design tools went from latent-but-unaddressed to flatly none, while the eu wrote it in on purpose. and **enforcement** went from federal-planned to none.",
          "four dimensions. four reds. the country did not weaken its oversight. on the dimensions that mattered most, it deleted it. and notice the bottom row: even before the rescission, US coverage only ever reached federally funded research. after the rescission it reaches federally funded research and nothing else, with no machinery even inside that shrunken scope. the united states did not just go backward. it went backward on the axes where it had been trying hardest.",
          { h: "where the european union got ahead" },
          "the EU column is the quietest story here and maybe the most important, because while the united states was deleting, the EU was building.",
          "the difference is structural, and it lives in two cells. first, **coverage scope**: the EU regulates by *market*, not by *funding*. the united states only ever had a handle on research it paid for. the EU reaches anyone who wants to sell into or operate within the european market, which means privately funded work is not automatically out of reach the way it is in the american model. that is a fundamentally wider net.",
          "second, **AI design oversight**. the EU AI Act is the first major regime anywhere to begin pulling AI systems, including the biological design tools that can propose novel sequences, under a real regulatory umbrella with obligations and enforcement attached. it is early and it is contested and the biology-specific edges are still being worked out. but \"early and contested\" beats \"none,\" and none is what the united states now has. the EU did not solve biosecurity. it just kept moving while the largest research funder on earth sat down.",
          { h: "where china's model is actually stronger, and the asterisk" },
          "this is the uncomfortable row, so let me be honest about it.",
          "on paper, china has the most complete coverage on the entire map. its column is almost solid dark green. centralized state control over sequence synthesis. state-approved customers. extensive review. coverage that reaches **all research**, not just the funded slice, because the state sits over the whole enterprise. even benchtop devices, the gap that nobody else has closed, fall under state control. if you score this map purely on \"how much of the field is covered by some oversight authority,\" china wins, and it is not close.",
          "but there is a heavy asterisk, and it has to be said plainly. this is strength as *control*, not strength as *safety*. centralized state oversight is opaque by design. there is no external audit, no transparency, no independent review, no public accountability, and the same machinery that can stop dangerous research can also direct it. a column that is strong because one authority controls everything is not the model a democracy wants to copy. it is just a reminder that the united states is now being out-covered, on paper, by a system whose strengths nobody here actually admires. that should sting more than losing to the EU.",
          { h: "where the consortium fills the gap, and where it falls through" },
          "the last column, IGSC, is the voluntary one, and it is doing more than its size suggests. the international gene synthesis consortium runs a harmonized screening protocol, and its members screen the sequences they are asked to synthesize. crucially, those members represent the majority of global commercial gene synthesis capacity. so at the one chokepoint that matters most, the moment someone orders synthetic dna from a commercial provider, the consortium is quietly holding a real line. that is why its bar on the chart sits above the post-rescission united states. a voluntary industry pact is currently doing more verifiable oversight work than us federal policy.",
          "but read the failures, because they are the entire setup for section 5. it is **voluntary**. it is **members only**. it does nothing about **benchtop devices**, the synthesizers that let you skip the commercial provider altogether. it has no **AI** oversight and no **pre-funding review**, because it is a screening pact, not a research regulator. and it is **self-regulated**, which means the only enforcement is membership itself. the consortium is a strong floor with a wide-open trapdoor in the middle of it: anyone who is not a member, or who never touches a member, simply is not covered.",
          { h: "the thesis, on the record" },
          "so put the map back together and say what it shows.",
          "before may 2025, the united states had an imperfect but genuinely comprehensive framework taking shape, the most complete one it had ever built. after may 2025, on the dimensions that decide whether dangerous research gets a second look before it runs, the united states has less oversight than the european union, less than china, and less than a voluntary club of dna manufacturers.",
          { lead: "**the united states went from \"attempted comprehensive framework\" to \"weakest oversight among major jurisdictions\" in under 48 hours.**" },
          "that is not a ranking i enjoyed building. but the map is the map.",
          "and a map like this does not just describe a problem. it draws one. because the moment oversight is uneven across jurisdictions, the gaps stop being accidents and start being *addresses*. a careful or careless actor does not need to defeat the strongest system on this chart. they only need to find the weakest cell and walk through it. section 5 is about those cells, and the routes between them.",
          { h3: "sources and a caveat for this section" },
          "the map synthesizes the 2024 DURC/PEPP policy (section 2), executive order 14292 (section 3), the **eu artificial intelligence act**, **china's biosecurity law (2021)**, and the **igsc harmonized screening protocol**. the eu, china, and igsc cells are characterizations of public regimes, not quotes from a single primary document, and the oversight index is explicitly illustrative, a shape, not a score.",
          { ul: ["international bar association, [\"blurred lines: law, science, and the regulation of dual-use biological research\"](https://www.ibanet.org/dual-use-biological-research-law) (2026), which concluded that \"no jurisdiction has developed a comprehensive regulatory framework that adequately addresses all DURC challenges.\""] },

          { sec: "section 5: the arbitrage map" },
          { lead: "**governance arbitrage is not a theoretical risk. it is the default state of global synthetic biology in 2026.**" },
          { hr: true },
          "section 4 ended on an uncomfortable idea, so let me make it explicit before we go further. when oversight is uneven across jurisdictions, the gaps stop being accidents. they become addresses. a system with one weak cell does not just have a weakness. it has a *route*.",
          "this section maps those routes. and i want to be careful about what kind of map this is, because it matters. this is not a how to. there is nothing operational here, no products, no methods, no agents, no procedures. this is the same thing a flood map is: a description of where the water goes when the wall is missing, written so the people who build walls know where to build. every gap described here was documented first by the people whose job is to close it, the nuclear threat initiative, the institute for progress, the international gene synthesis consortium, and the congressional research service. i am reporting their findings and reading them against the map from section 4. that is all.",
          "the term for what this map shows is **governance arbitrage**: exploiting the difference between two jurisdictions, not by breaking either one's rules, but by standing in the seam between them where neither rule reaches. and the unnerving thing, the whole point of this section, is that in 2026 the seam is not an edge case. it is the normal condition.",
          "let me show you the four shapes it takes.",
          { h: "scenario 1: the provider hop" },
          "the first route is the simplest, and it lives entirely inside the difference between a screened provider and an unscreened one.",
          "a commercial dna provider that belongs to the international gene synthesis consortium screens what it is asked to synthesize. a provider that belongs to no such consortium, operating in a jurisdiction with no screening requirement, does not. both are selling the same service. only one is holding a line.",
          "so the arbitrage writes itself: the oversight you are subject to depends on *which provider you choose*, and choosing is free. the screened provider carries obligations. the unscreened one carries none. this is not a flaw in any single country's policy. it is the predictable result of a world where screening is required in some places, voluntary in others, and absent in the rest. the IGSC covers the majority of global commercial synthesis capacity, which is genuinely a lot. but \"majority\" is not \"all,\" and the gap between them is a door that opens by default.",
          { h: "scenario 2: the funding arbitrage" },
          "the second route is the one the rescission opened directly, and it is the cleanest illustration of what section 3 cost.",
          "after may 2025, us federally funded research meeting the definition of dangerous gain of function is paused. but the pause rides on the funding. privately funded research in the united states sits under no equivalent federal framework, only the older select agent rules that cover specific listed agents and nothing of the broader category. so the same experiment can carry two completely different oversight burdens depending on **where the money comes from**.",
          "under the 2024 policy this gap was smaller, because institutional review attached to the *institution* and its review entity, not only to the grant. the IRE would have looked at the project. with that machinery rescinded, the simplest way to move research out from under federal oversight is to move it out from under federal funding. the policy that was supposed to govern the danger now, in effect, governs the funding source. change the funding source and you change the rules that apply. that is arbitrage built into the structure of the vacuum itself.",
          { h: "scenario 3: the jurisdictional shell game" },
          "the third route is corporate, and it is the one lawyers, not scientists, would find.",
          "consider an entity that exists in more than one jurisdiction at once: a european company with a united states subsidiary, or any structure that straddles a strong regime and a weak one. the european parent operates under european rules, which after 2026 are among the strongest on the map. the american subsidiary operates under american rules, which after may 2025 are among the weakest. so which rules govern a cross border order, a shared design, a transferred sequence? the honest answer is that it is contested, and \"contested\" is exactly the condition arbitrage feeds on.",
          "you do not need to break a rule here. you need only to choose which of your own arms signs the paperwork. the gaps between national regimes are not sealed at the corporate border, and a multinational structure can hold a foot in each, applying whichever floor is lower to whichever activity it prefers. nobody has to smuggle anything. the seam is internal.",
          { h: "scenario 4: the benchtop bypass" },
          "the first three routes move *between* the layers of oversight. the fourth one removes the layers entirely, and it is the gap the experts have flagged most urgently, so it gets the most space.",
          { h3: "the governance gap" },
          "the entire screening architecture rests on a single assumption: that dangerous sequences get caught at the order point, the moment a researcher submits a sequence to a commercial provider. that assumption is the chokepoint. it is where the IGSC operates, where the 2010 and 2024 frameworks operate, where almost all real screening happens.",
          "benchtop synthesizers collapse that chokepoint. when synthesis happens on a device in the room rather than through a commercial order, the provider, the screener, and the manufacturer fold into the same point or disappear from the chain altogether. the nuclear threat initiative has documented this directly: benchtop devices bypass the centralized screening chokepoint entirely, leaving the purchase of the device as essentially the only screening moment in the whole sequence. there is no order to screen. there is no eight year commercial audit trail. the layer simply is not there.",
          "the institute for progress went a step further and built a formal threat model for these devices using the standard STRIDE framework, the same six category model used for any security system: spoofing, tampering, repudiation, information disclosure, denial of service, and elevation of privilege. the headline of that work is not any single technique. it is the fact that a benchtop synthesizer is a security surface at all, and that it has been analyzed as one, which tells you the screening layer that is supposed to sit above it does not currently exist in any enforceable form.",
          { h3: "reading it against the map" },
          "now lay that over section 4. under the rescinded 2024 policy, this gap would have been *partially* covered, not through device regulation, which nobody has, but through institutional review. the IRE would have reviewed the researcher's project regardless of where the synthesis physically occurred, because the review attached to the work and the institution, not to the supply chain. that is the layer the rescission removed.",
          "so the current picture, read straight off the map, is this. a researcher operating without federal funding faces no institutional review requirement. the commercial screening chokepoint does not apply to synthesis that never touches a commercial provider. the IGSC covers its members, and a device is not a member. the EU's AI Act may reach the design tools, but a device operated outside the EU falls under no synthesis screening regime at all. and the united states, post rescission, has no federal framework to fill any of it.",
          "the gap is not a vulnerability in a screening algorithm that somebody could patch. it is the absence of a screening layer entirely. every jurisdiction on the section 4 map leaves this same cell unregulated or, in exactly one case, handles it only through total state control. that is not four different policies disagreeing. that is four different policies all looking away from the same place.",
          { img: "assets/blog1/images/compare-arbitrage-routes.png", alt: "a grid comparing the four arbitrage routes against three screening layers, sequence screening, customer verification, and institutional review, with most cells red indicating no layer holds, the benchtop bypass row entirely red, and the shell game row amber for contested.", cap: "the four routes against the three screening layers. green means a layer still holds. red means it does not. the benchtop row is the one that should worry you most." },
          { h: "the citation shield, said out loud" },
          "i want to name my sources in the body, not bury them, because the whole point of this section is that none of it is speculation:",
          { ul: ["the **nuclear threat initiative** documented that benchtop devices bypass the centralized screening chokepoint.", "the **institute for progress** published the STRIDE threat model that treats these devices as a security surface in the first place.", "the **international gene synthesis consortium** states that its members represent the majority of global commercial synthesis capacity, which is precisely how we know that non members and benchtop devices are the unscreened remainder.", "the **congressional research service** confirmed that underneath all of it, there is no overarching federal law with enforceable penalties to fall back on."] },
          "i am not pointing at a door and saying walk through it. i am pointing at four published reports that already mapped the doors, and laying them on top of a governance map that just lost its strongest wall.",
          { h: "the thesis, on the record" },
          "put the four routes together and the conclusion is not dramatic. it is just structural.",
          "the provider hop exploits the gap between screened and unscreened suppliers. the funding arbitrage exploits the gap between public and private money. the shell game exploits the gap between national regimes. the benchtop bypass exploits the absence of any layer at all. none of them requires defeating a strong system. each of them requires only finding the weakest cell on the map and standing in it. and after may 2025, the united states added a column of weak cells to a map that already had plenty.",
          { lead: "**governance arbitrage is not a theoretical risk. it is the default state of global synthetic biology in 2026.**" },
          "a unified framework, the kind the united states spent thirteen years building and then deleted in forty eight hours, is not valuable because it is perfect. it is valuable because it closes seams. it makes the rules the same on both sides of a border, both sides of a funding line, both sides of a provider's front door. the 2024 policy was the country's one real attempt to do that. its rescission did not just lower american oversight. it widened every seam that runs through american research, and left the routes between them open, documented, and waiting for the replacement that was promised in 120 days and has still not come.",
          { h3: "sources for this section" },
          { ul: ["nuclear threat initiative, [\"benchtop dna synthesis devices: capabilities, biosecurity implications, and governance\"](https://www.nti.org/analysis/articles/benchtop-dna-synthesis-devices-capabilities-biosecurity-implications-and-governance/) ([full report pdf](https://www.nti.org/wp-content/uploads/2023/05/NTIBIO_Benchtop-DNA-Report_FINAL.pdf))", "institute for progress, [\"securing benchtop dna synthesizers\"](https://ifp.org/securing-benchtop-dna-synthesizers/) — the STRIDE threat model referenced here", "international gene synthesis consortium, **harmonized screening protocol v3.0**", "congressional research service, report **IN12554**, on the absence of an overarching federal biosafety and biosecurity law — [link](https://crsreports.congress.gov/product/pdf/IN/IN12554)"] },

          { sec: "section 6: the implications" },
          { lead: "**the vacuum is not empty. three groups are already standing in it, and each one is paying a different price.**" },
          { hr: true },
          "it is easy to talk about a missing policy in the abstract. a framework, a notice, a deadline that slid. but a vacuum is not abstract to the people living inside it. so let me stop talking about the gap as a shape on a map and talk about who is standing in it. three groups. three specific harms.",
          { h: "6.1 — for researchers: the fog" },
          "**the people this hurts first are not the villains. they are the scientists.**",
          "the 2024 policy, for all its paperwork, gave one thing that mattered more than people realized: clarity. category 1 or category 2. work with your IRE. write the risk plan. get it approved, then go. it was bureaucratic and slow and people complained about it, but it was *legible*. you could read it and know where you stood.",
          "now there is no unified framework to read. the congressional research service said it plainly:",
          { q: "\"There currently is no overarching federal law that provides oversight of laboratory biosafety and biosecurity with enforceable legal penalties.\"" },
          "so here is what fills the fog. federally funded dangerous gain of function research is **paused**, not banned. paused. which means labs with live, ongoing projects had to stop partway through, holding work they cannot finish and cannot formally abandon. meanwhile privately funded research stays largely unregulated, with only the select agent rules reaching it, and those only cover specific listed agents, not the broad category the 2024 policy was built around.",
          "and there sits the arbitrage, right in front of the researcher: the same project can answer to less oversight simply by changing where its money comes from. public to private, and the rules thin out.",
          "we did not get safer science. we got frozen public science and unregulated private science. that is not a win. that is a migration.",
          { h: "6.2 — for providers: the race to the bottom" },
          "**the companies that screen are now competing with companies that do not.**",
          "screening is not free. checking a sequence against a database costs money. verifying a customer costs money. maintaining the database, training the staff, keeping the records, all of it costs money. the providers who belong to the international gene synthesis consortium pay that cost voluntarily, because they decided the line was worth holding. the providers who belong to nothing pay nothing, because nothing requires them to.",
          "the consortium says its members represent the majority of global commercial synthesis capacity. read that the other way around, because the other way is the problem: a minority of that capacity is screened by no one. and if provider a screens and provider b does not, provider b is cheaper and faster on every single order. the eu's ai act may force european providers to screen. us providers face no federal requirement to do anything. and the benchtop devices from section 5 sit outside the consortium entirely, with no screening, no verification, and no institutional review for privately funded work.",
          "a vp at twist bioscience put the incentive cleanly:",
          { q: "\"When only some companies screen, the playing field is uneven, risking the creation of an incentive to cut corners.\"" },
          "that is the whole danger in one sentence. the market rewards the gap. the gap is where the money is.",
          { h: "6.3 — for global security: the norm vacuum" },
          "**the united states did not just deregulate itself. it withdrew from a global standard it helped build.**",
          "the 2024 policy was the american attempt at comprehensive oversight, and it took thirteen years to assemble. while it was being deleted, the rest of the world kept walking. the eu is moving forward on multiple tracks at once: the ai act, a biotech act in development, national rules like france tightening control of sensitive agents. china runs centralized state control through its biosecurity law. everyone with a serious research base is building a floor.",
          "and the united states went from attempted leader to weakest oversight, on the dimensions that matter, in forty eight hours.",
          "this is the part that reaches past any one country. global norms need at least one major power willing to set the floor and stand on it. when the largest funder of life sciences research on earth pulls its floor out, every other country feels the pressure to lower theirs to stay competitive, because oversight is a cost and nobody wants to carry a cost their rivals have dropped. an international bar association review of the landscape called for global alignment and then admitted the bleak in the hull:",
          { q: "\"no jurisdiction has developed a comprehensive regulatory framework that adequately addresses all DURC challenges.\"" },
          "go back to the map in section 4 and read one row. enforcement. the united states says none. the eu says eu-wide. china says state. we are not a step behind on that row. we are absent from it.",
          "oversight is a global public good. when the largest funder of life sciences research stops providing it, the good does not pass to someone else. it just disappears.",
          "so this is where we are. a policy built over thirteen years, deleted in a day, replaced by a promise that expired unfulfilled. researchers frozen or unregulated. providers screening or cutting corners depending on which market they happen to serve. a global norm coming loose because the country that anchored it let go. and the original document, the one that started all of this, is still a 404 on a government server that reassures you, in soft friendly type, that it is not a disaster.",
          "it is a disaster. and disasters need endings. here is what should happen next.",
          { h3: "sources for this section" },
          { ul: ["congressional research service, report **IN12554** — [link](https://crsreports.congress.gov/product/pdf/IN/IN12554)", "twist bioscience, quoted in *science|business*, on uneven screening creating an incentive to cut corners", "international bar association, [\"blurred lines: law, science, and the regulation of dual-use biological research\"](https://www.ibanet.org/dual-use-biological-research-law)"] },

          { sec: "section 7: conclusion" },
          { lead: "**the policy got a number, a date, and a watermark. the gap got nothing.**" },
          { hr: true },
          "okay so. i have been living in this story for a while now, and i want to land it honestly, without a table or a screenshot in sight. just the thing itself, said straight.",
          { h3: "what was lost" },
          "the 2024 us government policy for oversight of durc and pepp was the most comprehensive biosecurity framework the united states had ever built. it pulled thirteen years of scattered, half talking rules into one. it required institutional review bodies, named accountable people, risk assessments approved before any money moved, and a referral up to hhs for the most dangerous work. it covered all nih funded research, all select agents, all risk group 4 agents, and most of risk group 3. it even carried a list of countries where this research could not be funded at all. it was not perfect and people argued about it. but it was real, and it was scheduled to take effect on may 6, 2025.",
          { h3: "what exists instead" },
          "on may 5, the executive order superseded it. on may 7, nih rescinded the notice that would have made it real. a replacement was promised in 120 days. it is now june 2026. nothing has come. the united states currently has no unified federal framework for oversight of dual use research or pathogens with enhanced pandemic potential, none, full stop. the eu is rolling out its ai act. china runs everything through state approval. the consortium keeps a voluntary standard for the companies that choose to join it. and the rest of the market follows nothing at all.",
          { h3: "the gaps" },
          "and the gaps are not theory anymore. they are operational, and every one of them was mapped first by the people whose actual job is to close them. a researcher can move from federal funding to private funding and answer to less. a provider can simply not join the consortium and owe no federal screening to anyone. a benchtop device sits outside the commercial chokepoint where nearly all real screening happens. and the screening that does exist still has documented blind spots, especially around the ai design tools, that the 2024 policy had only just started to reach. four gaps. each one published in plain sight. each one still open. the rescission did not create all of them, but it widened every one it touched and then walked away.",
          { h3: "the call" },
          "so here is the part where i stop describing and start asking, because somebody reading this can actually move on it.",
          "what should happen next is not complicated. it is just unpopular.",
          "first, the united states needs a real replacement framework, written down, not just more deletion. do not resurrect the 2024 policy blindly, it had flaws. but the hole it left is worse than the policy ever was, and a serious replacement has to finally cover the three things the old one barely did: the benchtop gap, the private funding gap, and the ai design tool gap.",
          "second, the world needs a floor under dna synthesis, not full harmonization, that is a fantasy, just a floor. screen the sequence. verify the customer. keep the records. enforce it. the consortium already built the template for free. governments just have to make it mandatory instead of optional.",
          "third, and this one does not need permission from anybody: researchers and institutions should stop waiting for federal clarity and keep their own review bodies, their own risk assessments, their own mitigation plans alive. the 2024 policy asked for those for a reason. the reason did not vanish when the policy did.",
          "oversight is not the enemy of science. uncertainty is. and right now we are standing in the most uncertain biosecurity moment this country has faced in a generation.",
          { hr: true },
          "i opened all of this with a 404. a government error page, for the policy itself, that shrugs at you in gentle type and says *this link might not be working, but its not a disaster,* and then, almost kindly, *discover what is happening now.*",
          "so. you asked. this is what is happening now.",
          "the policy got a number, a date, and a watermark that says RESCINDED. the gap it left got nothing. that is what we are standing in." ] } ] },
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

  var RE_ROOMS = {
    bench:    { name: "Save Room",       img: "assets/re/typewriter.png",      tag: "ink ribbon loaded. the long save file on me.",
      intro: "the save room. that one calm track, the typewriter, the green light under the door. nothing can reach you in here. this is where the long file on who i am gets written down. take a green herb, sit a while." },
    world:    { name: "Classified Files", img: "assets/re/tvirus.png",          tag: "recovered documents nobody was meant to read.",
      intro: "recovered case files. the serious things i could not stop digging into, biology, biosecurity, the places it all quietly goes wrong. first document pulled from the wreckage: the policy that lived for exactly one day." },
    travels:  { name: "Extraction",       img: "assets/re/umbrella.png",        tag: "evac routes and the places that stuck.",
      intro: "the extraction point. the trips, the airports, the places that made it out of the city with me. no chopper yet. to be filled." },
    dreams:   { name: "Objectives",       img: "assets/re/herb-green.png",      tag: "primary objectives. the long game.",
      intro: "mission objectives. the slow, long goals i have not reached yet, the ones still flashing on the map. to be filled." },
    city:     { name: "Raccoon City",     img: "assets/re/zombie.png",          tag: "everything im building before it all goes wrong.",
      intro: "downtown raccoon city. the labs with the lights still on, engram and blackwall and the rest, all of it built while the sirens go somewhere across town. to be filled." },
    trinkets: { name: "Item Box",         img: "assets/re/inventory.png",       tag: "games, music, the relics in my case.",
      intro: "the item box. the games, the albums, the comfort relics that rewired me, all stored in the same magic crate. combine at will." }
  };
  function applyReSkin() { ORDER.forEach(function (id) { var o = RE_ROOMS[id], r = ROOMS[id]; if (o && r) { r.name = o.name; r.img = o.img; r.tag = o.tag; r.intro = o.intro; } }); }
  if (isRE()) applyReSkin();

  function esc(s) { return String(s).replace(/[&<>]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]; }); }
  function inline(s) {
    s = esc(s);
    s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (m, t, u) { return "<a href='" + u + "' target='_blank' rel='noopener'>" + t + "</a>"; });
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/\*([^*]+)\*/g, "<em>$1</em>");
    return s;
  }
  function tableHTML(t) {
    var head = "<tr>" + t.head.map(function (h) { return "<th>" + inline(h) + "</th>"; }).join("") + "</tr>";
    var rows = t.rows.map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + inline(c) + "</td>"; }).join("") + "</tr>"; }).join("");
    return "<div class='tbl-wrap'><table class='tbl'><thead>" + head + "</thead><tbody>" + rows + "</tbody></table></div>";
  }
  function bodyHTML(b) {
    return b.map(function (x) {
      if (typeof x === "string") return "<p>" + inline(x) + "</p>";
      if (!x) return "";
      if (x.q) return "<blockquote>" + inline(x.q) + "</blockquote>";
      if (x.sec) return "<div class='secnum'>" + inline(x.sec) + "</div>";
      if (x.lead) return "<blockquote class='lead'>" + inline(x.lead) + "</blockquote>";
      if (x.h) return "<h4 class='sec'>" + inline(x.h) + "</h4>";
      if (x.h3) return "<h5 class='sub'>" + inline(x.h3) + "</h5>";
      if (x.hr) return "<hr class='sec-rule'>";
      if (x.ul) return "<ul class='blist'>" + x.ul.map(function (li) { return "<li>" + inline(li) + "</li>"; }).join("") + "</ul>";
      if (x.ol) return "<ol class='blist'>" + x.ol.map(function (li) { return "<li>" + inline(li) + "</li>"; }).join("") + "</ol>";
      if (x.img) return "<figure class='fig'><img src='" + x.img + "' alt='" + esc(x.alt || "") + "' loading='lazy'>" + (x.cap ? "<figcaption>" + inline(x.cap) + "</figcaption>" : "") + "</figure>";
      if (x.table) return tableHTML(x.table);
      return "";
    }).join("");
  }
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
  function koiImg(m) { if (isRE() && m && m.host) return "assets/re/rebecca-portrait.png"; var arr = isRE() ? RE_ROSTER : KOI_IMGS; return arr[hueFor((m && (m.id || m.name) || "k") + "f") % arr.length]; }
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
    if (pc) pc.textContent = messages.length + T(" koi", " specimens");
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

  function reSaveToast(name) {
    var t = document.getElementById("re-save-toast");
    if (!t) { t = document.createElement("div"); t.id = "re-save-toast"; t.setAttribute("aria-hidden", "true"); document.body.appendChild(t); }
    t.innerHTML = "<span class='rst-ico'></span><span class='rst-txt'><b>SPECIMEN LOGGED</b>" + esc(name || "survivor") + " joined the pool</span>";
    t.classList.remove("show"); void t.offsetWidth; t.classList.add("show");
    clearTimeout(reSaveToast._t); reSaveToast._t = setTimeout(function () { t.classList.remove("show"); }, 2800);
  }
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
      msgEl.value = ""; showNote(note, T("your koi is now swimming above, labelled (you). copy its link below to share it.", "specimen logged. its drifting in the tank above, tagged (you). copy its link below to share it."), false);
      if (isRE()) reSaveToast(saved.name);
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
      var keeper = T("keeper", "handler");
      var who = m.host ? esc(m.name) + " (" + keeper + ")" : (mine[m.id] ? esc(m.name) + " (you)" : esc(m.name || "anonymous"));
      el.innerHTML =
        "<div class='lk-bubble'><b>" + who + "</b>" + esc(m.message) + "</div>" +
        "<img class='lk-fish' src='" + koiImg(m) + "' alt='' style='width:" + sz + "px;filter:hue-rotate(" + hue + "deg) saturate(1.2) drop-shadow(0 6px 9px rgba(8,40,60,.34))'>" +
        "<span class='lk-tag'>" + esc(m.name || "anon") + (m.host ? " (" + keeper + ")" : (mine[m.id] ? " (you)" : "")) + "</span>";
      layer.appendChild(el);
      var k = { el: el, fish: el.querySelector(".lk-fish"), size: sz, cx: rand(sz, W - sz), cy: rand(sz, H - sz), anim: null };
      place(k);
      el.addEventListener("pointerenter", function () { el.classList.add("show"); });
      el.addEventListener("pointerleave", function () { el.classList.remove("show"); });
      el.addEventListener("click", function (e) { e.stopPropagation(); var open = el.classList.contains("show"); layer.querySelectorAll(".lkoi.show").forEach(function (o) { o.classList.remove("show"); }); if (!open) el.classList.add("show"); tap(); });
      swimmers.push(k);
    });

    var FISH = isRE() ? RE_ROSTER : ["assets/fish1.png", "assets/fish2.png", "assets/fish3.png", "assets/fish4.png", "assets/fish6.png"];
    var deco = isRE() ? Math.max(3, Math.min(6, Math.round(W / 170))) : Math.max(6, Math.min(11, Math.round(W / 95)));
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
    if (viaLink) { var b = document.getElementById("pondBanner"); if (b) { var nm = ((el.querySelector(".lk-bubble b") || {}).textContent || "this").replace(/ \(.*\)$/, ""); b.innerHTML = T("You followed <b>" + esc(nm) + "</b>'s koi here. Sign below and yours will swim next to it.", "You tracked <b>" + esc(nm) + "</b>'s specimen here. Enter the pool and yours joins the tank."); b.hidden = false; } }
    setTimeout(function () { el.classList.remove("spotlight"); }, 5200);
    return true;
  }

  function koiLink(id) { return location.origin + location.pathname + "#/pond/" + encodeURIComponent(id); }
  function shareKoi(id, name) {
    if (!id) { go("#/pond"); return; }
    var url = koiLink(id), note = document.getElementById("gNote");
    var text = T((name ? name + "'s koi" : "my koi") + " is swimming in the koi pond. come find it and leave your own.", (name ? name + "'s specimen" : "my specimen") + " is in the character pool. track it down and add your own.");
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
      "<div class='panel'><div class='panel-h green'>" + T("Welcome", "Mission briefing") + "</div><div class='panel-b'><div class='welcome" + (isRE() ? " re-welcome" : "") + "'>" +
        (isRE() ? "<div class='w-becca'><img src='assets/re/rebecca-full.png' alt='Rebecca Chambers'><span class='wb-tag'>Rebecca Chambers</span></div>" : "") +
        "<div class='w-text'><h2>" + T("hey, im vang", "this is vang. stay close.") + "</h2><p>" + T("welcome to my garden. its part blog, part museum, part what-happens-when-i-cant-sit-still. im 19, i build too many things at once, and this is where they live. start at the bench for the whole story, wander the rooms, sign the koi pond, or just watch the fish for a bit.", "welcome to the garden, raccoon city cut. same me, part blog, part case file, part what-happens-when-i-cant-sit-still. im 19 and i build too many things at once. duck into the save room for the whole story, sweep the locations, or step up to the character pool. rebeccas got your six.") + "</p>" +
        "<div class='row'><button class='btn' data-room='bench'><span>" + T("start at the bench", "open the save room") + "</span></button><button class='btn sky' data-room='world'><span>" + T("whos vang?", "the case files") + "</span></button></div></div></div></div></div>" +
      "<div class='panel'><div class='panel-h'>" + T("Latest entries", "Recovered files") + "<span class='right'>" + allPosts.length + T(" posts", " files") + "</span></div><div class='panel-b'>" + feedHTML(allPosts) + "</div></div>" +
      "<div class='panel'><div class='panel-h green'>" + T("The exhibits", "Locations") + "<span class='right'>" + ORDER.length + T(" rooms", " locations") + "</span></div><div class='panel-b'><div class='ex-strip'>" + tiles + "</div></div></div>" +
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
      ? "<span class='gform-mode live'>" + T("shared and live. everyone sees your fish.", "online. every survivor in the pool is real.") + "</span>"
      : "<span class='gform-mode'>" + T("saving on this device only. add Firebase to share with everyone.", "saving on this terminal only. connect Firebase to sync the pool.") + "</span>";
    var shareHidden = lastSigned ? "" : " hidden";
    return "<section class='view pond-view'>" +
      "<div><a class='back' href='#/'><img src='assets/leaf_swoosh.png' alt=''><span>" + T("Back to the garden", "Back to the garden") + "</span></a></div>" +
      "<div class='pond-banner' id='pondBanner' hidden></div>" +
      "<div class='panel'><div class='panel-h'>" + T("The Koi Pond", "The Character Pool") + "<span class='right' id='pondCount'>…</span></div>" +
        "<div class='panel-b lake-wrap'><div class='lake' id='lake'>" +
          "<div class='lake-shimmer'></div><div class='lake-pads'><i></i><i></i><i></i><i></i></div>" +
          "<div class='lake-koi' id='lakeKoi'></div>" +
          "<div class='lake-cap'>" + T("hover a fish to read its message. tap the water to feed them.", "hover a specimen to read its file. tap the glass to disturb the tank.") + "</div>" +
        "</div></div></div>" +
      "<div class='panel'><div class='panel-h green'>" + T("Sign the pond", "Enter the pool") + "</div><div class='panel-b'>" +
        "<p class='pond-lead'>" + T("Write your name and a message, then press <b>Sign the pond</b>. A koi with your name starts swimming in the pond above and stays in the garden for good. One koi is already there for you: the keeper.", "Write your name and a message, then press <b>Enter the pool</b>. A face from raccoon city is assigned to you and starts drifting in the tank above, logged in the garden for good. One specimen is already in there: the handler.") + "</p>" +
        "<form class='gform' id='gform'>" +
          "<div class='gform-row'><input id='gName' maxlength='40' placeholder='" + T("your name", "your codename") + "' autocomplete='nickname' spellcheck='false'>" +
            "<input id='gMsg' maxlength='280' placeholder='" + T("your message", "your last transmission") + "' autocomplete='off'></div>" +
          "<div class='gform-foot'>" + mode + "<button class='btn sky' type='submit'><span>" + T("Sign the pond", "Enter the pool") + "</span></button></div>" +
          "<div class='gform-note' id='gNote' hidden></div>" +
        "</form>" +
        "<div class='gshare' id='gShareRow'" + shareHidden + ">" +
          "<span>" + T("Your koi is swimming above. Want friends to find it? This button copies a link that makes your koi light up for them.", "Your specimen is drifting above. Want friends to find it? This copies a link that flags your specimen for them.") + "</span>" +
          "<button class='btn' type='button' id='gShare'><span>" + T("Copy my koi link", "Copy my specimen link") + "</span></button>" +
        "</div>" +
      "</div></div>" +
      "<div class='panel'><div class='panel-h green'>" + T("Every message", "Every file") + "<span class='right' id='pondNum'>…</span></div><div class='panel-b'><div class='pondlist' id='pondlist'><div class='gmsg muted'>" + T("loading the pond…", "loading the pool…") + "</div></div></div></div>" +
    "</section>";
  }

  function gad(title, body, blue) { return "<div class='gad" + (blue ? " blue" : "") + "'><div class='gad-h'><span class='dot'></span>" + title + "</div><div class='gad-b'>" + body + "</div></div>"; }
  function buildSide() {
    var side = document.getElementById("side");
    var nav = ORDER.map(function (id) { var r = ROOMS[id]; return "<div class='navrow' data-room='" + id + "'><span class='ico'><img src='" + r.img + "' alt=''></span><b>" + esc(r.name) + "</b><small>" + r.posts.length + "</small></div>"; }).join("");
    nav += "<div class='navrow pond-nav' data-pond='1'><span class='ico'><img src='" + T("assets/fish2.png", "assets/re/rebecca-portrait.png") + "' alt=''></span><b>" + T("The Koi Pond", "The Character Pool") + "</b><small>live</small></div>";
    var tags = Object.keys(tagCounts).sort(function (a, b) { return tagCounts[b] - tagCounts[a]; }).slice(0, 12)
      .map(function (t) { return "<button data-tag='" + esc(t) + "'>" + esc(t) + "</button>"; }).join("");
    var peek = (ROOMS.trinkets.gallery || []).slice(0, 4).map(function (g, i) { return "<button data-relic='" + i + "'><img src='" + g.img + "' alt=''></button>"; }).join("");
    var partner = isRE() ? gad("Partner", "<div class='partner'><div class='pt-face'><img src='assets/re/rebecca-portrait.png' alt='Rebecca Chambers'></div><div class='pt-info'><b>Rebecca Chambers</b><small>field medic &middot; S.T.A.R.S. Bravo</small><span class='pt-quote'>\"ill patch you up. just dont die on me.\"</span></div></div>") : "";
    var weatherGad = isRE()
      ? gad("Condition", "<div class='vitals'><div class='ecg'><svg viewBox='0 0 200 40' preserveAspectRatio='none'><polyline points='0,20 40,20 52,20 58,8 64,32 70,20 96,20 104,20 110,4 118,36 124,20 160,20 200,20'/></svg></div><div class='vit-state'>FINE</div></div>", true)
      : gad("Weather", "<div class='wx'><div class='wx-orb sunny'><span class='wx-sun'></span></div><div><div class='wx-temp'>25°</div><div class='wx-meta'>Always sunny in my garden</div></div></div>", true);
    var nowGad = isRE()
      ? gad("Status", "<div class='statline'><span>condition</span><b>infected (mildly)</b></div><div class='statline'><span>armed with</span><b>a knife &amp; bad ideas</b></div><div class='statline'><span>objective</span><b>finish one project</b></div>")
      : gad("Right now", "<div class='statline'><span>building</span><b>engram + 4 other tabs</b></div><div class='statline'><span>fuelled by</span><b>football &amp; dopamine</b></div><div class='statline'><span>mood</span><b>overwhelmed (lovingly)</b></div>");
    side.innerHTML =
      gad(T("Navigate", "Locations"), nav) +
      partner +
      weatherGad +
      nowGad +
      gad(T("Visitors", "Survivors"), "<div class='visitors'><div class='vglobe'><img src='" + T("assets/globe2.png", "assets/re/umbrella.png") + "' alt=''><span class='vpin' id='vpin' hidden></span></div><div class='vinfo'><div class='vcount'><b id='visitsNum'>-</b><small>" + T("visitors", "online") + "</small></div><div class='vloc' id='vloc'>" + T("locating you…", "tracing signal…") + "</div></div></div>", true) +
      gad(T("Tags", "Evidence"), "<div class='tagcloud'>" + tags + "</div>") +
      gad(T("This garden", "Case file"), "<div class='statline'><span>" + T("entries", "files") + "</span><b>" + allPosts.length + "</b></div><div class='statline'><span>" + T("rooms", "locations") + "</span><b>" + ORDER.length + "</b></div><div class='statline'><span>" + T("koi in the pond", "in the pool") + "</span><b id='koiCount'>-</b></div><div class='statline'><span>" + T("growing since", "outbreak") + "</span><b>2024</b></div>", true) +
      gad(T("From the cabinet", "Item box"), "<div class='peek'>" + peek + "</div>") +
      gad(T("Guestbook", "Radio"), "<div class='gbook' id='gbookMini'><div class='gmsg muted'>" + T("opening the pond…", "opening a channel…") + "</div></div><button class='gbtn' id='gbSign' type='button'><span>" + T("Sign the guestbook", "Send a transmission") + "</span></button>");

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
    else if (h === "pond" || h.indexOf("pond/") === 0) { current = null; pondTarget = h.indexOf("pond/") === 0 ? decodeURIComponent(h.slice(5)) : null; html = renderPond(); title = T("The Koi Pond", "The Character Pool"); }
    else if (ROOMS[h]) { current = h; html = renderRoom(h); title = ROOMS[h].name; }
    else { current = null; html = renderHome(); title = "The Garden"; }
    app.innerHTML = html; document.title = "vang · " + title;
    syncSideActive(); enhance(app);
    if (current && pendingPost && pendingPost.roomId === current) { var ps = app.querySelectorAll(".post"); var el = ps[pendingPost.i]; if (el) setTimeout(function () { var y = el.getBoundingClientRect().top + (root.pageYOffset || 0) - 70; root.scrollTo({ top: Math.max(0, y), behavior: "smooth" }); el.style.transition = "background .3s"; el.style.background = isRE() ? "rgba(190,30,24,.2)" : "rgba(116,198,157,.22)"; setTimeout(function () { el.style.background = ""; }, 1300); }, 360); pendingPost = null; }
    else root.scrollTo({ top: 0, behavior: "auto" });
  }
  var doorBusy = false;
  function playDoor(done) {
    var d = document.getElementById("re-door");
    if (!d || matchMedia("(prefers-reduced-motion: reduce)").matches) { done(); return; }
    doorBusy = true;
    d.hidden = false; d.classList.remove("opening"); void d.offsetWidth; d.classList.add("closing");
    setTimeout(function () { done(); }, 380);
    setTimeout(function () { d.classList.add("opening"); }, 430);
    setTimeout(function () { d.hidden = true; d.classList.remove("closing", "opening"); doorBusy = false; }, 1180);
  }
  function route() {
    if (isRE()) { playDoor(paint); return; }
    if (document.startViewTransition && !matchMedia("(prefers-reduced-motion: reduce)").matches) document.startViewTransition(paint); else paint();
  }

  function runGate() {
    var gate = document.getElementById("gate"); if (!gate) return;
    var entered = false; try { entered = sessionStorage.getItem("vx_entered") === "1"; } catch (e) {}
    if (entered) { gate.classList.add("gone"); gate.setAttribute("aria-hidden", "true"); return; }
    requestAnimationFrame(function () { var b = gate.querySelector(".gate-bar i"); if (b) b.style.width = "100%"; });
    var done = false;
    function open() { if (done) return; done = true; try { sessionStorage.setItem("vx_entered", "1"); } catch (e) {} gate.classList.add("open"); setTimeout(function () { gate.classList.add("gone"); gate.setAttribute("aria-hidden", "true"); }, 1000); }
    function pick(theme) {
      try { sessionStorage.setItem("vx_entered", "1"); } catch (e) {}
      if (theme === "re") {
        try { localStorage.setItem("vx_theme", "re"); } catch (e) {}
        document.documentElement.setAttribute("data-theme", "re");
        var d = document.getElementById("re-door");
        if (d && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
          gate.classList.add("open");
          d.hidden = false; void d.offsetWidth; d.classList.add("closing");
          setTimeout(function () { d.classList.add("opening"); }, 520);
          setTimeout(function () { location.reload(); }, 1150);
          return;
        }
        location.reload(); return;
      }
      if (theme === THEME) { open(); return; }
      try { localStorage.setItem("vx_theme", theme); } catch (e) {}
      gate.classList.add("open"); location.reload();
    }
    var choices = gate.querySelectorAll(".gate-choice");
    for (var i = 0; i < choices.length; i++) {
      (function (btn) { btn.addEventListener("click", function () { pick(btn.getAttribute("data-pick")); }); })(choices[i]);
      if (choices[i].getAttribute("data-pick") === THEME) choices[i].classList.add("current");
    }
    document.getElementById("gate-skip").addEventListener("click", open);
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
    applyTheme();
    var tsw = document.getElementById("theme-switch");
    if (tsw) { tsw.querySelector(".ts-label").textContent = T("Resident Evil", "Frutiger Aero"); tsw.addEventListener("click", switchTheme); }
    var plink = document.getElementById("pond-link"); if (plink) plink.lastChild.textContent = T("Koi Pond", "The Pool");
    if (isRE()) {
      var plogo = document.querySelector(".ph-logo"); if (plogo) plogo.src = "assets/re/umbrella-gold.png";
      var gleaf = document.querySelector(".gate-leaf"); if (gleaf) gleaf.src = "assets/re/umbrella-gold.png";
      if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
        var rootEl = document.documentElement;
        root.addEventListener("pointermove", function (e) { rootEl.style.setProperty("--mx", e.clientX + "px"); rootEl.style.setProperty("--my", e.clientY + "px"); }, { passive: true });
      }
      var foot = document.querySelector(".portal-foot");
      if (foot) {
        var fb = foot.querySelectorAll(".badge");
        if (fb[0]) fb[0].textContent = "best played in the dark";
        if (fb[1]) fb[1].textContent = "Property of Umbrella Corp.";
        var byB = foot.querySelector("span b");
        if (byB && byB.parentNode) byB.parentNode.innerHTML = "made in raccoon city by <b>vang</b>";
      }
    }
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
