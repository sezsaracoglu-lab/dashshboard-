/* My notebook: a private word and explanation notebook for every study page.
   Everything is stored only in the visitor's own browser (localStorage, key "sez_mywords").
   Nothing is uploaded; every visitor starts with an empty notebook.
   Loaded automatically by sitenav.js. Pages may define:
     window.SezNotebookHere() -> {label, hash, course}   (where am I now?)
     window.SezNotebookGo(hash)                          (jump to a section on this page)  */
(function () {
  if (window.SezNotebook) return;
  var KEY = "sez_mywords";
  function load() { try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch (e) { return []; } }
  function save(v) { try { localStorage.setItem(KEY, JSON.stringify(v)); return true; } catch (e) { toast("Your browser blocked saving (private window?)"); return false; } }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function pageUrl() { return location.origin + location.pathname.replace(/index\.html$/, ""); }

  /* ---------- which course and section am I in? ---------- */
  function course() {
    var p = location.pathname.toLowerCase();
    if (/wow-/.test(p)) return "World of Work";
    if (/edpsy/.test(p)) return "Educational Psychology";
    if (/cognitive|theme-7_teaching|theme5_cognitive/.test(p)) return "Cognitive Psychology";
    if (/stat|spss|anova|regression/.test(p)) return "Methods and Statistics 2";
    var t = document.title.split("·").map(function (x) { return x.trim(); });
    return t.length > 1 ? t[t.length - 1] : (t[0] || "My study");
  }
  function pageName() { return document.title.replace(/\s*·\s*Sezen Saracoglu\s*$/, "").trim(); }
  function visible(el) { var r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; }
  function headingFor(node) {
    var hs = Array.prototype.slice.call(document.querySelectorAll("h1,h2,h3,h4")).filter(function (h) { return visible(h) && !h.closest("#sez-notebook,#sez-sitenav"); });
    var best = null;
    hs.forEach(function (h) { if (!node) return; if (h.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_FOLLOWING || h.contains(node)) best = h; });
    if (!best) { var mid = innerHeight / 2; hs.forEach(function (h) { if (h.getBoundingClientRect().top < mid) best = h; }); }
    return best ? best.textContent.replace(/\s+/g, " ").trim().slice(0, 90) : "";
  }
  function idFor(node) {
    var n = node; while (n && n !== document.body) { if (n.id && !/^(p|main|app|content)$/.test(n.id)) return n.id; n = n.parentElement; }
    return location.hash.slice(1);
  }
  function here(node) {
    var c = course(), base = { course: c, url: pageUrl(), page: location.pathname };
    if (typeof window.SezNotebookHere === "function") {
      try { var h = window.SezNotebookHere(node); if (h) return Object.assign(base, h, { course: h.course || c }); } catch (e) {}
    }
    var hd = headingFor(node), pn = pageName();
    return Object.assign(base, { label: pn + (hd && hd !== pn ? " · " + hd : ""), hash: idFor(node) });
  }

  /* ---------- UI in a shadow root, so it never changes the page's own look ---------- */
  var host, root, sb, dlg, drawer, filt = { t: "all", s: "all", c: "all", q: "" };
  var CSS =
    ":host{all:initial}*{box-sizing:border-box;font-family:'Instrument Sans','DM Sans','Segoe UI',system-ui,sans-serif}" +
    ".sel{position:fixed;z-index:2147483001;border:0;background:#34466b;color:#fff;border-radius:999px;padding:7px 14px;font-size:14px;font-weight:600;box-shadow:0 8px 20px rgba(52,70,107,.28);cursor:pointer}.sel[hidden]{display:none}" +
    ".ov{position:fixed;inset:0;z-index:2147483002;background:rgba(43,47,58,.35);display:flex;align-items:center;justify-content:center;padding:16px}.ov[hidden]{display:none}" +
    ".box{background:#fff;border-radius:18px;max-width:540px;width:100%;padding:20px 22px;box-shadow:0 20px 50px rgba(0,0,0,.2);max-height:90vh;overflow:auto;color:#2b2f3a}" +
    "h2{margin:0 0 6px;font-family:'Cormorant Garamond',Fraunces,Georgia,serif;font-size:27px;font-weight:600;color:#34466b}" +
    "label{display:block;font-size:12px;font-weight:700;color:#6b7280;margin:12px 0 4px;text-transform:uppercase;letter-spacing:.06em}" +
    "input,textarea,select{width:100%;border:1px solid #e8e1d3;border-radius:10px;padding:9px 11px;font-size:15px;background:#fffdf9;color:#2b2f3a}textarea{min-height:64px;resize:vertical;line-height:1.45}" +
    ".where{font-size:14px;color:#a8854a;background:#f6eedd;border-radius:10px;padding:7px 11px;margin-top:6px}" +
    ".row{display:flex;gap:8px;justify-content:flex-end;margin-top:16px}" +
    ".btn{border:0;background:#34466b;color:#fff;border-radius:12px;padding:9px 16px;font-size:15px;font-weight:600;cursor:pointer}.btn.g{background:#fff;color:#34466b;border:1px solid #e8e1d3}.btn.sm{padding:7px 12px;font-size:14px}" +
    ".pill{border:1px solid #e8e1d3;background:#fff;border-radius:999px;padding:6px 12px;font-size:14px;cursor:pointer;color:#34466b}.pill.on{background:#34466b;color:#fff;border-color:#34466b}" +
    ".pills{display:flex;gap:6px;flex-wrap:wrap}" +
    ".dr{position:fixed;inset:0;z-index:2147483000;background:rgba(43,47,58,.3);display:flex;justify-content:flex-end}.dr[hidden]{display:none}" +
    ".pane{background:#faf7f1;width:min(620px,100vw);height:100%;overflow:auto;padding:22px 22px 90px;box-shadow:-10px 0 40px rgba(0,0,0,.15);color:#2b2f3a}" +
    ".top{display:flex;justify-content:space-between;align-items:flex-start;gap:10px}.x{border:0;background:#fff;border:1px solid #e8e1d3;border-radius:999px;width:34px;height:34px;cursor:pointer;font-size:18px;color:#6b7280;flex:0 0 auto}" +
    ".eye{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#a8854a;font-weight:700}" +
    ".priv{background:#e2f1e6;border-radius:12px;padding:10px 14px;font-size:14.5px;line-height:1.5;margin:10px 0}" +
    ".how{font-size:14.5px;color:#4b5160;line-height:1.55;margin:0 0 10px}" +
    ".tools{display:flex;flex-direction:column;gap:8px;margin:12px 0}.tools .r{display:flex;gap:8px;flex-wrap:wrap;align-items:center}" +
    ".cnt{font-size:13.5px;color:#6b7280;margin:6px 0}" +
    ".card{background:#fff;border:1px solid #e8e1d3;border-left:4px solid #c9a96e;border-radius:14px;padding:12px 16px;margin:10px 0}.card.n{border-left-color:#6d8fc7}.card.k{border-left-color:#2f8a57;opacity:.88}" +
    ".card .ty{font-size:11.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#a8854a}.card .co{font-size:11.5px;color:#6b7280;margin-left:6px;letter-spacing:.04em}" +
    ".card h3{margin:2px 0;font-family:'Cormorant Garamond',Fraunces,Georgia,serif;font-size:23px;font-weight:600;color:#34466b}" +
    ".card p{margin:4px 0;font-size:15px;line-height:1.55;white-space:pre-line}.card .tr{color:#9a5b2a;font-style:italic}.card .ex{color:#6b7280;font-size:14px}" +
    ".acts{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}.acts button{border:1px solid #e8e1d3;background:#fff;border-radius:999px;padding:5px 11px;font-size:13px;cursor:pointer;color:#34466b}" +
    ".acts .wh{border-color:#c9a96e;background:#f6eedd;color:#a8854a;font-weight:600;text-align:left}.acts .kn.on{background:#2f8a57;color:#fff;border-color:#2f8a57}" +
    ".toast{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:#34466b;color:#fff;padding:9px 16px;border-radius:999px;z-index:2147483003;font-weight:600;font-size:14px;box-shadow:0 8px 20px rgba(0,0,0,.2)}" +
    "@media print{.sel,.dr,.ov{display:none}}";

  function build() {
    host = document.createElement("div"); host.id = "sez-notebook";
    root = host.attachShadow ? host.attachShadow({ mode: "open" }) : host;
    root.innerHTML = "<style>" + CSS + "</style>" +
      '<button class="sel" type="button" hidden></button>' +
      '<div class="ov" hidden><div class="box" role="dialog" aria-modal="true" aria-label="Save to my notebook"><h2 id="dT">Save a word</h2>' +
      '<div class="pills" id="dTy"><button type="button" class="pill" data-t="w">🔤 Word</button><button type="button" class="pill" data-t="n">💡 Explanation</button></div>' +
      '<div class="where" id="dW"></div><label for="dA" id="lA">Word</label><input id="dA"><label for="dB" id="lB">Simple meaning</label><textarea id="dB" placeholder="In your own plain words"></textarea>' +
      '<label for="dC">Turkish</label><input id="dC" placeholder="Türkçesi"><label for="dD">Example (optional)</label><textarea id="dD" placeholder="A sentence or situation that helps you remember"></textarea>' +
      '<div class="row"><button class="btn g" type="button" id="dX">Cancel</button><button class="btn" type="button" id="dS">⭐ Save</button></div></div></div>' +
      '<div class="dr" hidden><div class="pane" role="dialog" aria-label="My notebook"><div class="top"><div><div class="eye">Your own notebook · all courses</div><h2>📒 My notebook</h2></div><button class="x" type="button" id="nX" aria-label="Close">×</button></div>' +
      '<p class="priv">🔒 <b>Private to you.</b> Everything here is saved only in this browser on this device. Nothing is uploaded or added to the website, so nobody else can see it. Use <b>Export</b> now and then to keep a backup or move your notebook to another device.</p>' +
      '<p class="how"><b>Words:</b> click an underlined term and choose ⭐ <i>Save to my notebook</i>, or select a word and tap <b>＋ Save word</b>. <b>Explanations:</b> select a sentence or paragraph and tap <b>＋ Save explanation</b>, or use <b>＋ Add</b>. Each entry remembers where you met it.</p>' +
      '<div class="tools"><input id="nQ" type="search" placeholder="Search your notebook"><div class="r"><select id="nC" aria-label="Course" style="width:auto;flex:1 1 200px"></select>' +
      '<button class="btn sm" type="button" id="nA">＋ Add</button><button class="btn sm g" type="button" id="nE">⤓ Export</button><button class="btn sm g" type="button" id="nI">⤒ Import</button><input type="file" id="nF" accept=".json,application/json" hidden></div>' +
      '<div class="pills" id="nT"><button type="button" class="pill on" data-t="all">All</button><button type="button" class="pill" data-t="w">Words</button><button type="button" class="pill" data-t="n">Explanations</button><span style="width:8px"></span><button type="button" class="pill" data-s="l">Still learning</button><button type="button" class="pill" data-s="k">I know it</button></div></div>' +
      '<div class="cnt" id="nN"></div><div id="nL"></div></div></div>';
    document.body.appendChild(host);
    sb = q(".sel"); dlg = q(".ov"); drawer = q(".dr");
    wireDialog(); wireDrawer(); wireSelection(); wireGlossary();
  }
  function q(s) { return root.querySelector(s); }
  function qa(s) { return Array.prototype.slice.call(root.querySelectorAll(s)); }
  function toast(t) { if (!root) return; var d = document.createElement("div"); d.className = "toast"; d.textContent = t; root.appendChild(d); setTimeout(function () { d.remove(); }, 1700); }

  /* ---------- save dialog ---------- */
  var editId = null, ctx = null, ty = "w";
  function setTy(t) { ty = t; qa("#dTy .pill").forEach(function (b) { b.classList.toggle("on", b.dataset.t === t); });
    q("#lA").textContent = t === "n" ? "Topic or question" : "Word"; q("#lB").textContent = t === "n" ? "My simple explanation" : "Simple meaning";
    q("#dB").style.minHeight = t === "n" ? "150px" : "64px"; if (!editId) q("#dT").textContent = t === "n" ? "Save an explanation" : "Save a word"; }
  function openDlg(word, mean, src, id, t) {
    editId = id || null; ctx = src; var W = load(), e = id ? W.filter(function (x) { return x.id === id; })[0] : null;
    q("#dT").textContent = e ? "Edit" : "Save a word";
    q("#dA").value = e ? e.w : (word || ""); q("#dB").value = e ? (e.en || "") : (mean || ""); q("#dC").value = e ? (e.tr || "") : ""; q("#dD").value = e ? (e.ex || "") : "";
    var sr = e ? e.src : src; q("#dW").textContent = "📍 " + ((sr && sr.label) ? sr.label : course());
    setTy(e ? (e.t || "w") : (t || "w")); dlg.hidden = false;
    setTimeout(function () { (q("#dA").value ? q("#dB") : q("#dA")).focus(); }, 30);
  }
  function wireDialog() {
    qa("#dTy .pill").forEach(function (b) { b.onclick = function () { setTy(b.dataset.t); }; });
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.hidden = true; });
    q("#dX").onclick = function () { dlg.hidden = true; };
    q("#dS").onclick = function () {
      var w = q("#dA").value.trim(); if (!w) { q("#dA").focus(); return; }
      var W = load(), f = { t: ty, w: w, en: q("#dB").value.trim(), tr: q("#dC").value.trim(), ex: q("#dD").value.trim() };
      if (editId) { W.forEach(function (x) { if (x.id === editId) Object.assign(x, f); }); }
      else {
        var dup = ty === "w" ? W.filter(function (x) { return (x.t || "w") === "w" && x.w.toLowerCase() === w.toLowerCase(); })[0] : null;
        var rec = Object.assign(f, { src: ctx || here(), known: false, added: Date.now() });
        if (dup) Object.assign(dup, rec); else W.push(Object.assign({ id: "w" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6) }, rec));
      }
      if (save(W)) { dlg.hidden = true; render(); toast("⭐ Saved to My notebook"); }
    };
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { if (!dlg.hidden) dlg.hidden = true; else if (!drawer.hidden) drawer.hidden = true; } });
  }

  /* ---------- save from a selection ---------- */
  var selTxt = "", selSrc = null, selLong = false, tmr;
  function wireSelection() {
    function check() {
      clearTimeout(tmr); tmr = setTimeout(function () {
        var sel = window.getSelection(), t = sel ? sel.toString().trim() : "";
        if (!t || t.length > 1500 || !sel.rangeCount || !dlg.hidden || !drawer.hidden) { sb.hidden = true; return; }
        var n = sel.anchorNode && (sel.anchorNode.nodeType === 1 ? sel.anchorNode : sel.anchorNode.parentElement);
        if (!n || n.closest("input,textarea,select,[contenteditable],#sez-sitenav,.side,nav")) { sb.hidden = true; return; }
        var r = sel.getRangeAt(0).getBoundingClientRect(); if (!r.width && !r.height) { sb.hidden = true; return; }
        selLong = t.split(/\s+/).length > 6;
        selTxt = selLong ? t : t.replace(/[.,;:!?)"”’]+$/, "").replace(/^["“‘(]+/, "");
        selSrc = here(n);
        sb.textContent = selLong ? "＋ Save explanation" : "＋ Save word";
        var top = r.bottom + 8; if (top > innerHeight - 50) top = Math.max(8, r.top - 44);
        sb.style.left = Math.max(8, Math.min(r.left, innerWidth - 190)) + "px"; sb.style.top = top + "px"; sb.hidden = false;
      }, 250);
    }
    document.addEventListener("selectionchange", check);
    document.addEventListener("mouseup", function (e) { if (e.target !== host) check(); });
    window.addEventListener("scroll", function () { sb.hidden = true; }, { passive: true });
    sb.addEventListener("mousedown", function (e) { e.preventDefault(); });
    sb.onclick = function () {
      sb.hidden = true;
      if (selLong) openDlg("", selTxt, selSrc, null, "n");
      else openDlg(selTxt, glossDef(selTxt), selSrc, null, "w");
      try { window.getSelection().removeAllRanges(); } catch (e) {}
    };
  }
  function glossDef(term) {
    try { var G = window.GLOSS; if (!G) return ""; var k = term.toLowerCase();
      for (var i in G) { var v = G[i]; if (Array.isArray(v) && String(v[0]).toLowerCase() === k) return v[1]; } } catch (e) {}
    return "";
  }

  /* ---------- save from a glossary pop-up (#gpop on theme pages) ---------- */
  function wireGlossary() {
    function attach(gp) {
      new MutationObserver(function () {
        if (gp.hidden || gp.querySelector(".sez-gsave")) return; var b = gp.querySelector("b"); if (!b) return;
        var term = b.textContent, def = gp.textContent.slice(term.length).trim();
        var btn = document.createElement("button"); btn.type = "button"; btn.className = "sez-gsave"; btn.textContent = "⭐ Save to my notebook";
        btn.style.cssText = "display:block;margin-top:8px;border:1px solid #c9a96e;background:#f6eedd;color:#a8854a;border-radius:999px;padding:4px 12px;font:inherit;font-size:.82rem;font-weight:700;cursor:pointer";
        btn.onclick = function (ev) { ev.stopPropagation(); gp.hidden = true; openDlg(term, def, here(gp._sezFrom || null)); };
        gp.appendChild(btn);
      }).observe(gp, { childList: true, attributes: true, attributeFilter: ["hidden"] });
    }
    document.addEventListener("click", function (e) { var t = e.target.closest && e.target.closest(".tm,[data-g]"); var gp = document.getElementById("gpop"); if (t && gp) gp._sezFrom = t; }, true);
    var gp = document.getElementById("gpop"); if (gp) attach(gp);
    else { var mo = new MutationObserver(function () { var g = document.getElementById("gpop"); if (g) { mo.disconnect(); attach(g); } }); mo.observe(document.body, { childList: true }); }
  }

  /* ---------- the notebook drawer ---------- */
  function wireDrawer() {
    q("#nX").onclick = function () { drawer.hidden = true; };
    drawer.addEventListener("click", function (e) { if (e.target === drawer) drawer.hidden = true; });
    q("#nQ").oninput = function () { filt.q = this.value.toLowerCase(); render(); };
    q("#nC").onchange = function () { filt.c = this.value; render(); };
    qa("#nT .pill").forEach(function (b) { b.onclick = function () {
      if (b.dataset.t) { filt.t = b.dataset.t; qa("#nT [data-t]").forEach(function (x) { x.classList.toggle("on", x === b); }); }
      else { filt.s = filt.s === b.dataset.s ? "all" : b.dataset.s; qa("#nT [data-s]").forEach(function (x) { x.classList.toggle("on", x.dataset.s === filt.s); }); }
      render(); }; });
    q("#nA").onclick = function () { openDlg("", "", here(), null, "w"); };
    q("#nE").onclick = function () {
      var blob = new Blob([JSON.stringify(load(), null, 1)], { type: "application/json" }), a = document.createElement("a");
      a.href = URL.createObjectURL(blob); a.download = "my-notebook-" + new Date().toISOString().slice(0, 10) + ".json"; document.body.appendChild(a); a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
    };
    q("#nI").onclick = function () { q("#nF").click(); };
    q("#nF").onchange = function (e) {
      var f = e.target.files[0]; if (!f) return; var rd = new FileReader();
      rd.onload = function () {
        try {
          var inc = JSON.parse(rd.result); if (!Array.isArray(inc)) throw 0; var W = load(), n = 0;
          inc.forEach(function (x) {
            if (!x || !x.w) return; var t = x.t === "n" ? "n" : "w";
            var d = W.filter(function (y) { return (y.t || "w") === t && y.w.toLowerCase() === String(x.w).toLowerCase(); })[0];
            var rec = { t: t, w: String(x.w), en: x.en || "", tr: x.tr || "", ex: x.ex || "", src: x.src || {}, known: !!x.known, added: x.added || Date.now() };
            if (d) Object.assign(d, rec); else W.push(Object.assign({ id: x.id || ("w" + Math.random().toString(36).slice(2, 10)) }, rec)); n++;
          });
          if (save(W)) { render(); toast("⤒ Imported " + n + " items"); }
        } catch (err) { toast("That file is not a notebook file"); }
        e.target.value = "";
      };
      rd.readAsText(f);
    };
    q("#nL").addEventListener("click", function (e) {
      var b = e.target.closest("button[data-a]"); if (!b) return; var id = b.closest(".card").dataset.id, W = load(), x = W.filter(function (y) { return y.id === id; })[0]; if (!x) return;
      var a = b.dataset.a;
      if (a === "k") { x.known = !x.known; save(W); render(); }
      else if (a === "e") openDlg(null, null, null, id);
      else if (a === "d") { if (b.dataset.sure) { save(W.filter(function (y) { return y.id !== id; })); render(); } else { b.dataset.sure = 1; b.textContent = "Tap again to delete"; } }
      else if (a === "go") go(x.src || {});
    });
  }
  function srcUrl(s) { return s.url || (s.page ? location.origin + s.page : ""); }
  function go(s) {
    var u = srcUrl(s), h = s.hash || "";
    if (u && u.replace(/index\.html$/, "") !== pageUrl()) { location.href = u + (h ? "#" + h : ""); return; }
    drawer.hidden = true;
    if (typeof window.SezNotebookGo === "function") { try { window.SezNotebookGo(h); return; } catch (e) {} }
    if (h) { var el = document.getElementById(h); if (location.hash !== "#" + h) location.hash = h; if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); }
  }
  function courseOf(x) { return ((x.src && x.src.course) || "My study").replace(/\s*·\s*Theme.*$/i, ""); }
  function render() {
    if (!root) return;
    var W = load().sort(function (a, b) { return a.w.localeCompare(b.w, "en", { sensitivity: "base" }); });
    var cs = {}; W.forEach(function (x) { cs[courseOf(x)] = (cs[courseOf(x)] || 0) + 1; });
    var sel = q("#nC"), names = Object.keys(cs).sort();
    if (filt.c !== "all" && !cs[filt.c]) filt.c = "all";
    sel.innerHTML = '<option value="all">All courses (' + W.length + ")</option>" + names.map(function (c) { return '<option value="' + esc(c) + '"' + (filt.c === c ? " selected" : "") + ">" + esc(c) + " (" + cs[c] + ")</option>"; }).join("");
    var V = W.filter(function (x) {
      var t = x.t || "w";
      return (filt.t === "all" || filt.t === t) && (filt.s === "all" || (filt.s === "k") === !!x.known) && (filt.c === "all" || courseOf(x) === filt.c) &&
        (!filt.q || [x.w, x.en, x.tr, x.ex, courseOf(x)].join(" ").toLowerCase().indexOf(filt.q) > -1);
    });
    var nn = W.filter(function (x) { return x.t === "n"; }).length, nw = W.length - nn, k = W.filter(function (x) { return x.known; }).length;
    q("#nN").textContent = W.length ? nw + (nw === 1 ? " word" : " words") + " · " + nn + (nn === 1 ? " explanation" : " explanations") + " · " + k + " known · " + (W.length - k) + " still learning" : "";
    q("#nL").innerHTML = V.length ? V.map(function (x) {
      var n = x.t === "n", s = x.src || {};
      return '<div class="card' + (n ? " n" : "") + (x.known ? " k" : "") + '" data-id="' + esc(x.id) + '"><span class="ty">' + (n ? "💡 Explanation" : "🔤 Word") + '</span><span class="co">' + esc(courseOf(x)) + "</span>" +
        "<h3>" + esc(x.w || "(untitled)") + "</h3>" + (x.en ? "<p>" + esc(x.en) + "</p>" : "") + (x.tr ? '<p class="tr">🇹🇷 ' + esc(x.tr) + "</p>" : "") + (x.ex ? '<p class="ex">✎ ' + esc(x.ex) + "</p>" : "") +
        '<div class="acts">' + (srcUrl(s) || s.hash ? '<button type="button" class="wh" data-a="go">📍 ' + esc(s.label || "Go to section") + " →</button>" : "") +
        '<button type="button" class="kn' + (x.known ? " on" : "") + '" data-a="k">' + (x.known ? "✓ I know it" : "Mark: I know it") + '</button><button type="button" data-a="e">✏️ Edit</button><button type="button" data-a="d">🗑 Delete</button></div></div>';
    }).join("") : '<p class="how">' + (W.length ? "Nothing matches." : "Your notebook is empty. While you study, click an underlined term or select a word or sentence, and save it here.") + "</p>";
  }
  function open() { if (!root) build(); render(); drawer.hidden = false; if (innerWidth > 700) setTimeout(function () { q("#nQ").focus(); }, 30); }

  window.SezNotebook = { open: open, add: function (t) { if (!root) build(); openDlg("", "", here(), null, t || "w"); } };
  window.addEventListener("storage", function (e) { if (e.key === KEY && root && !drawer.hidden) render(); });
  if (document.body) build(); else document.addEventListener("DOMContentLoaded", build);
})();
