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

  /* ---------------- kelime bankası ---------------- */

  // 20.000 kelime, konuşma dilindeki kullanım sıklığına göre sıralı. Dosya
  // ~800 KB olduğu için sayfa açılışında değil, kullanıcı bir banka bölümüne
  // geçtiğinde indirilir; sonrasında tarayıcı önbelleğinden gelir.
  var BANDS = [
    { id: "b1",  label: "İlk 1000",  from: 0,     to: 1000 },
    { id: "b3",  label: "1–3 bin",   from: 1000,  to: 3000 },
    { id: "b6",  label: "3–6 bin",   from: 3000,  to: 6000 },
    { id: "b10", label: "6–10 bin",  from: 6000,  to: 10000 },
    { id: "b20", label: "10–20 bin", from: 10000, to: 20000 },
  ];

  var bankRows = null;      // yüklendiğinde dolar
  var bankLoading = false;

  function isBand(id) {
    return BANDS.some(function (b) { return b.id === id; });
  }

  function parseBank() {
    bankRows = BANK.split("\n")
      .map(function (l) { return l.trim(); })
      .filter(Boolean)
      .map(function (l) {
        var p = l.split("|");
        return { w: p[0], type: p[1], tr: p[2], bank: true };
      });
  }

  // bank.js'i bir kez indirir. Hata olursa kullanıcıya söyler, uygulama
  // seçme kartlarla çalışmaya devam eder.
  function loadBank(done) {
    if (bankRows) { done(true); return; }
    if (bankLoading) return;
    bankLoading = true;

    var s = document.createElement("script");
    s.src = "bank.js?v=3";
    s.onload = function () {
      bankLoading = false;
      try { parseBank(); done(true); }
      catch (e) { done(false); }
    };
    s.onerror = function () { bankLoading = false; done(false); };
    document.head.appendChild(s);
  }

  function bandWords(id) {
    var b = BANDS.filter(function (x) { return x.id === id; })[0];
    return bankRows ? bankRows.slice(b.from, b.to) : [];
  }

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

  if (S.level !== "all" && !LEVELS[S.level] && !isBand(S.level)) S.level = "all";

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
    if (S.level === "all") return ALL;
    if (isBand(S.level)) return bandWords(S.level);
    return BY_LEVEL[S.level] || ALL;
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
    var items = [{ id: "all", label: "Seçme", n: ALL.length }].concat(
      Object.keys(LEVELS).map(function (k) {
        return { id: k, label: LEVELS[k].label, n: BY_LEVEL[k].length };
      }),
      BANDS.map(function (b) {
        return { id: b.id, label: b.label, n: b.to - b.from };
      })
    );
    box.innerHTML = items
      .map(function (it) {
        return (
          '<button class="chip" data-level="' + it.id + '" aria-pressed="' +
          (S.level === it.id) + '">' + esc(it.label) + " · " + it.n + "</button>"
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

  function bandLabel() {
    var b = BANDS.filter(function (x) { return x.id === S.level; })[0];
    return b ? b.label : "Kelime bankası";
  }

  // Kelimeyi gerçek insanlardan dinlemek için dış bağlantılar. Hepsi kelimeden
  // türetiliyor, yani 20.000 kelimenin tamamı için ek veri gerekmeden çalışır.
  function links(word) {
    var q = encodeURIComponent(word);
    return (
      '<div class="links">' +
        '<a href="https://youglish.com/pronounce/' + q + '/english" target="_blank" rel="noopener noreferrer">🎥 Videolarda duy</a>' +
        '<a href="https://forvo.com/word/' + q + '/#en" target="_blank" rel="noopener noreferrer">🗣️ Forvo</a>' +
        '<a href="https://playphrase.me/#/search?q=' + q + '" target="_blank" rel="noopener noreferrer">🎬 Film sahneleri</a>' +
      "</div>"
    );
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
        '<div class="inner">' +
          '<p class="count">bitti</p>' +
          "<h1>Deste tamamlandı</h1>" +
          '<p class="meaning">' + S.deck.length + " kelimeyi gözden geçirdin.</p>" +
        "</div>";
      actions.innerHTML =
        '<button class="btn primary" data-act="restart">Yeniden karıştır</button>';
      return;
    }

    // Zemin tonunu kelimeye göre hafifçe kaydır — ilerleme hissi.
    $("scene").style.filter = "hue-rotate(" + ((S.idx * 23) % 60 - 30) + "deg)";

    var isKnown = S.known.has(c.w);

    var label = c.bank ? bandLabel() : LEVELS[c.level].label;

    // Okunuş satırı yalnızca seçme kartlarda var; banka kelimelerinde yerine
    // aşağıdaki gerçek-telaffuz bağlantıları iş görüyor.
    var ipaRow = c.ipa
      ? '<p class="ipa">/' + esc(c.ipa) + "/" +
        '<button class="slow" data-act="slow">🐢 yavaş</button></p>'
      : '<p class="ipa"><button class="slow" data-act="slow">🐢 yavaş dinle</button>' +
        (c.type ? '<span class="type">' + esc(c.type) + "</span>" : "") + "</p>";

    var example = c.en
      ? '<div class="example">' +
          '<div class="en"><p>' + esc(c.en) + "</p>" +
            '<button class="mini" data-act="speak-ex" aria-label="Cümleyi dinle">🔊</button></div>' +
          '<p class="tr">' + esc(c.trEx) + "</p>" +
        "</div>"
      : "";

    card.innerHTML =
      '<div class="inner">' +
        '<p class="count">' + (S.idx + 1) + " / " + S.deck.length +
          " · " + esc(label) + "</p>" +
        '<div class="head">' +
          "<h1>" + esc(c.w) + "</h1>" +
          '<button class="speak" data-act="speak" aria-label="Kelimeyi dinle">🔊</button>' +
        "</div>" +
        ipaRow +
        '<p class="meaning">' + esc(c.tr) + "</p>" +
        example +
        links(c.w) +
        '<p class="hint">yukarı kaydır · sonraki kelime</p>' +
      "</div>";

    actions.innerHTML =
      '<button class="btn" data-act="again">Anlamadım</button>' +
      '<button class="btn ' + (isKnown ? "on" : "") + '" data-act="known">' +
        (isKnown ? "✓ Biliyorum" : "Biliyorum") + "</button>" +
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
      case "reload-bank": switchLevel(S.level); break;
      case "answer":   answerQuiz(Number(el.getAttribute("data-i"))); break;
    }
  }

  /* ---------------- olaylar ---------------- */

  function switchLevel(id) {
    S.level = id;
    save("level", id);
    renderLevels();

    if (!isBand(id) || bankRows) {
      buildDeck();
      renderCard(1);
      return;
    }

    // Banka ilk kez açılıyor: indirilirken kullanıcıyı bilgilendir.
    $("quiz").classList.remove("show");
    $("actions").innerHTML = "";
    $("card").innerHTML =
      '<div class="inner"><p class="loading">Kelime bankası yükleniyor…<br>' +
      "<span style=\"opacity:.7\">20.000 kelime, yalnızca ilk seferde</span></p></div>";

    loadBank(function (ok) {
      if (!ok) {
        $("card").innerHTML =
          '<div class="inner"><p class="loading">Kelime bankası yüklenemedi.<br>' +
          "<span style=\"opacity:.7\">Bağlantını kontrol edip tekrar dene.</span></p></div>";
        $("actions").innerHTML =
          '<button class="btn primary" data-act="reload-bank">Tekrar dene</button>';
        return;
      }
      buildDeck();
      renderCard(1);
    });
  }

  document.addEventListener("click", function (e) {
    var chip = e.target.closest("[data-level]");
    if (chip) { switchLevel(chip.getAttribute("data-level")); return; }
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

  if (isBand(S.level)) {
    // Son oturumda banka bölümündeydi: aynı yerden devam et.
    switchLevel(S.level);
  } else {
    buildDeck();
    renderCard(0);
  }
})();
