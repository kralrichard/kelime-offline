/* Kelime — çevrimdışı İngilizce kelime pratiği.
 *
 * Hiçbir ağ isteği yok: kelimeler data.js'ten gelir, ilerleme localStorage'da
 * tutulur, seslendirme tarayıcının kendi konuşma sentezleyicisiyle yapılır.
 * Bu yüzden kart geçişlerinde bekleme diye bir şey yoktur.
 */

(function () {
  "use strict";

  var XP_PER_LEVEL = 200;
  var QUIZ_EVERY = 5;      // kaç kartta bir hızlı soru
  var RETRY_GAP = 7;       // "anlamadım" denen kelime kaç kart sonra geri gelsin
  var SWIPE_MIN = 55;      // parmak hareketi kaç piksel olunca kaydırma sayılsın

  /* ---------------- veri ---------------- */

  // "kelime|okunuş|anlamlar|örnek|çeviri" satırlarını nesneye çevirir.
  function parseLevel(key) {
    return LEVELS[key].words
      .split("\n")
      .map(function (line) { return line.trim(); })
      .filter(Boolean)
      .map(function (line) {
        var p = line.split("|");
        return { w: p[0], ipa: p[1], tr: p[2], en: p[3], trEx: p[4], level: key };
      });
  }

  var BY_LEVEL = {};
  var ALL = [];
  Object.keys(LEVELS).forEach(function (k) {
    BY_LEVEL[k] = parseLevel(k);
    ALL = ALL.concat(BY_LEVEL[k]);
  });

  /* ---------------- kalıcı durum ---------------- */

  var KEY = "kelime:";

  function load(name, fallback) {
    try {
      var raw = localStorage.getItem(KEY + name);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  }

  function save(name, value) {
    try {
      localStorage.setItem(KEY + name, JSON.stringify(value));
    } catch (e) {
      /* depolama kapalı olabilir (gizli sekme) — uygulama yine de çalışsın */
    }
  }

  var S = {
    level: load("level", "all"),
    idx: 0,
    deck: [],
    xp: load("xp", 0),
    best: load("best", 0),
    streak: 0,
    known: new Set(load("known", [])),
    seen: [],          // quiz havuzu: {w, tr}
    sinceQuiz: 0,
    quiz: null,
    busy: false,
  };

  if (!LEVELS[S.level]) S.level = "all";

  /* ---------------- yardımcılar ---------------- */

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function pool() {
    return S.level === "all" ? ALL : BY_LEVEL[S.level];
  }

  var $ = function (id) { return document.getElementById(id); };

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  var toastTimer;
  function toast(msg) {
    var el = $("toast");
    el.textContent = msg;
    el.classList.remove("show");
    void el.offsetWidth;          // animasyonu yeniden tetikle
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove("show"); }, 1400);
  }

  /* ---------------- seslendirme ---------------- */

  var voice = null;

  function pickVoice() {
    if (!("speechSynthesis" in window)) return;
    var vs = speechSynthesis.getVoices() || [];
    voice =
      vs.filter(function (v) { return v.lang === "en-US" && v.localService; })[0] ||
      vs.filter(function (v) { return v.lang === "en-US"; })[0] ||
      vs.filter(function (v) { return v.lang && v.lang.indexOf("en") === 0; })[0] ||
      null;
  }

  if ("speechSynthesis" in window) {
    pickVoice();
    speechSynthesis.onvoiceschanged = pickVoice;
  }

  function speak(text, rate) {
    if (!("speechSynthesis" in window)) return;
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = "en-US";
      u.rate = rate || 0.95;
      if (voice) u.voice = voice;
      speechSynthesis.speak(u);
    } catch (e) {
      /* seslendirme yoksa sessizce geç — kart yine okunabilir */
    }
  }

  /* ---------------- deste ---------------- */

  function buildDeck() {
    S.deck = shuffle(pool());
    S.idx = 0;
    S.seen = [];
    S.sinceQuiz = 0;
    S.quiz = null;
  }

  function current() {
    return S.deck[S.idx];
  }

  /* ---------------- çizim ---------------- */

  function renderLevels() {
    var box = $("levels");
    var items = [{ id: "all", label: "Hepsi" }].concat(
      Object.keys(LEVELS).map(function (k) { return { id: k, label: LEVELS[k].label }; })
    );
    box.innerHTML = items
      .map(function (it) {
        var n = it.id === "all" ? ALL.length : BY_LEVEL[it.id].length;
        return (
          '<button class="chip" data-level="' + it.id + '" aria-pressed="' +
          (S.level === it.id) + '">' + esc(it.label) + " · " + n + "</button>"
        );
      })
      .join("");
  }

  function renderStats() {
    var lvl = Math.floor(S.xp / XP_PER_LEVEL) + 1;
    var pct = ((S.xp % XP_PER_LEVEL) / XP_PER_LEVEL) * 100;
    $("lvl").textContent = "Sv " + lvl;
    $("xpbar").style.width = pct + "%";
    $("xp").textContent = S.xp + " XP";
    $("streak").textContent = "🔥 " + S.streak + (S.best ? " / " + S.best : "");
  }

  function renderCard(dir) {
    var c = current();
    var card = $("card");
    var actions = $("actions");

    $("quiz").classList.remove("show");
    card.style.display = "";
    actions.style.display = "";

    if (!c) {
      card.innerHTML =
        '<p class="count">bitti</p>' +
        "<h1>Deste tamamlandı</h1>" +
        '<p class="meaning">' + S.deck.length + " kelimeyi gözden geçirdin.</p>";
      actions.innerHTML =
        '<button class="btn primary" data-act="restart">Yeniden karıştır</button>';
      return;
    }

    // Zemin tonunu kelimeye göre hafifçe kaydır — ilerleme hissi.
    $("scene").style.filter = "hue-rotate(" + ((S.idx * 23) % 60 - 30) + "deg)";

    var isKnown = S.known.has(c.w);

    card.innerHTML =
      '<p class="count">' + (S.idx + 1) + " / " + S.deck.length +
        " · " + esc(LEVELS[c.level].label) + "</p>" +
      '<div class="head">' +
        "<h1>" + esc(c.w) + "</h1>" +
        '<button class="speak" data-act="speak" aria-label="Kelimeyi dinle">🔊</button>' +
      "</div>" +
      '<p class="ipa">/' + esc(c.ipa) + "/" +
        '<button class="slow" data-act="slow">🐢 yavaş</button></p>' +
      '<p class="meaning">' + esc(c.tr) + "</p>" +
      '<div class="example">' +
        '<div class="en"><p>' + esc(c.en) + "</p>" +
          '<button class="mini" data-act="speak-ex" aria-label="Cümleyi dinle">🔊</button></div>' +
        '<p class="tr">' + esc(c.trEx) + "</p>" +
      "</div>" +
      '<p class="hint">yukarı kaydır · sonraki kelime</p>';

    actions.innerHTML =
      '<button class="btn" data-act="again">Anlamadım</button>' +
      '<button class="btn ' + (isKnown ? "on" : "") + '" data-act="known">' +
        (isKnown ? "✓ Biliyorum" : "Biliyorum +10") + "</button>" +
      '<button class="btn primary" data-act="next">Sonraki ↑</button>';

    card.classList.remove("anim-up", "anim-down");
    if (dir) {
      void card.offsetWidth;
      card.classList.add(dir > 0 ? "anim-up" : "anim-down");
    }
    card.scrollTop = 0;

    // Kelimeyi bir kez seslendir ve quiz havuzuna ekle.
    speak(c.w);
    if (!S.seen.some(function (s) { return s.w === c.w; })) {
      S.seen.push({ w: c.w, tr: c.tr });
    }
  }

  /* ---------------- quiz ---------------- */

  function startQuiz() {
    var picks = shuffle(S.seen).slice(0, 4);
    var answer = picks[Math.floor(Math.random() * picks.length)];
    S.quiz = { word: answer.w, answer: answer.tr, options: shuffle(picks.map(function (p) { return p.tr; })), done: false };

    $("card").style.display = "none";
    $("actions").style.display = "none";
    var q = $("quiz");
    q.classList.add("show");
    q.innerHTML =
      '<p class="qlabel">⚡ Hızlı soru</p>' +
      "<h2>" + esc(S.quiz.word) + "</h2>" +
      '<p class="sub">ne demek?</p>' +
      '<div class="opts">' +
        S.quiz.options.map(function (o, i) {
          return '<button class="opt" data-act="answer" data-i="' + i + '">' + esc(o) + "</button>";
        }).join("") +
      "</div>";
  }

  function answerQuiz(i) {
    if (!S.quiz || S.quiz.done) return;
    S.quiz.done = true;

    var chosen = S.quiz.options[i];
    var correct = chosen === S.quiz.answer;
    var btns = $("quiz").querySelectorAll(".opt");

    for (var k = 0; k < btns.length; k++) {
      if (S.quiz.options[k] === S.quiz.answer) btns[k].classList.add("right");
      else if (k === i) btns[k].classList.add("wrong");
    }

    if (correct) {
      S.streak += 1;
      if (S.streak > S.best) { S.best = S.streak; save("best", S.best); }
      var gain = 25 + S.streak * 5;
      S.xp += gain; save("xp", S.xp);
      toast("🔥 Doğru! +" + gain + " XP");
    } else {
      S.streak = 0;
      toast("😅 Seri sıfırlandı");
    }
    renderStats();

    setTimeout(function () {
      S.quiz = null;
      advance(1);
    }, 1300);
  }

  /* ---------------- gezinme ---------------- */

  var lastNav = 0;

  function advance(dir) {
    if (S.quiz && !S.quiz.done) return;      // soru bekliyorsa kaydırma
    var now = Date.now();
    if (now - lastNav < 260) return;          // aşırı hızlı tetiklenmeyi engelle
    lastNav = now;

    if (dir > 0) {
      if (S.idx >= S.deck.length) return;
      S.idx += 1;
      S.sinceQuiz += 1;
      if (S.sinceQuiz >= QUIZ_EVERY && S.seen.length >= 4 && S.idx < S.deck.length) {
        S.sinceQuiz = 0;
        startQuiz();
        return;
      }
    } else {
      if (S.idx === 0) return;
      S.idx -= 1;
    }
    renderCard(dir);
  }

  /* ---------------- eylemler ---------------- */

  function markKnown() {
    var c = current();
    if (!c) return;
    if (S.known.has(c.w)) {
      S.known.delete(c.w);
    } else {
      S.known.add(c.w);
      S.xp += 10; save("xp", S.xp);
      toast("✓ +10 XP");
    }
    save("known", Array.from(S.known));
    renderStats();
    renderCard(0);
  }

  // "Anlamadım": kelimeyi destede birkaç kart ileriye yeniden yerleştir,
  // böylece aynı oturumda tekrar karşına çıkar.
  function markAgain() {
    var c = current();
    if (!c) return;
    if (S.known.has(c.w)) {
      S.known.delete(c.w);
      save("known", Array.from(S.known));
    }
    var target = Math.min(S.idx + RETRY_GAP, S.deck.length);
    S.deck.splice(target, 0, c);
    toast("↻ Birazdan tekrar");
    advance(1);
  }

  function onAction(act, el) {
    var c = current();
    switch (act) {
      case "speak":    if (c) speak(c.w); break;
      case "slow":     if (c) speak(c.w, 0.55); break;
      case "speak-ex": if (c) speak(c.en); break;
      case "known":    markKnown(); break;
      case "again":    markAgain(); break;
      case "next":     advance(1); break;
      case "restart":  buildDeck(); renderCard(1); break;
      case "answer":   answerQuiz(Number(el.getAttribute("data-i"))); break;
    }
  }

  /* ---------------- olaylar ---------------- */

  document.addEventListener("click", function (e) {
    var chip = e.target.closest("[data-level]");
    if (chip) {
      S.level = chip.getAttribute("data-level");
      save("level", S.level);
      renderLevels();
      buildDeck();
      renderCard(1);
      return;
    }
    var btn = e.target.closest("[data-act]");
    if (btn) onAction(btn.getAttribute("data-act"), btn);
  });

  // Dikey kaydırma. Kart içeriği taşıyorsa önce onu kaydırmaya izin ver.
  var touchY = null;
  document.addEventListener("touchstart", function (e) {
    touchY = e.touches[0].clientY;
  }, { passive: true });

  document.addEventListener("touchend", function (e) {
    if (touchY === null) return;
    var dy = touchY - e.changedTouches[0].clientY;
    touchY = null;
    if (Math.abs(dy) < SWIPE_MIN) return;
    var card = $("card");
    var atTop = card.scrollTop <= 0;
    var atEnd = card.scrollTop + card.clientHeight >= card.scrollHeight - 1;
    if (dy > 0 && atEnd) advance(1);
    else if (dy < 0 && atTop) advance(-1);
  }, { passive: true });

  var wheelLock = 0;
  document.addEventListener("wheel", function (e) {
    if (Math.abs(e.deltaY) < 20) return;
    var now = Date.now();
    if (now - wheelLock < 320) return;
    var card = $("card");
    var atTop = card.scrollTop <= 0;
    var atEnd = card.scrollTop + card.clientHeight >= card.scrollHeight - 1;
    if (e.deltaY > 0 && atEnd) { wheelLock = now; advance(1); }
    else if (e.deltaY < 0 && atTop) { wheelLock = now; advance(-1); }
  }, { passive: true });

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown" || e.key === " " || e.key === "Enter") { e.preventDefault(); advance(1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); advance(-1); }
    else if (e.key.toLowerCase() === "s") { var c = current(); if (c) speak(c.w); }
  });

  window.addEventListener("pagehide", function () {
    try { speechSynthesis.cancel(); } catch (e) {}
  });

  /* ---------------- başlat ---------------- */

  renderLevels();
  renderStats();
  buildDeck();
  renderCard(0);
})();
