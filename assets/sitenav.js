/* Site navigation for Sezen's study website.
   One small "Study hub" button (bottom right) on every study page, opening a panel
   with Home, the study hub, each course and the tools. Isolated in a shadow root so it
   never changes the look of the page it sits on. Add to a page with:
   <script src="https://sezsaracoglu-lab.github.io/dashshboard-/assets/sitenav.js" defer></script> */
(function () {
  if (window.__sezNav) return; window.__sezNav = true;
  var B = "https://sezsaracoglu-lab.github.io/";
  var D = B + "dashshboard-/";
  var MENU = [
    { title: "Start", links: [["Home", D], ["Study hub · course map", D + "study/"], ["Grade calculator ↗", "https://lindemann.shinyapps.io/essb_grading/", 1]] },
    { title: "Year 2 · Block 1 · Cognitive Psychology", links: [["All study links", D + "study/#cognitive"], ["Course story", D + "cognitive-course/"], ["Practice papers", D + "cognitive-exams/"], ["Memory sheets", D + "cognitive-memory/"], ["In-depth", D + "cognitive-indepth/"], ["Lectures", D + "cognitive-lectures/"]],
      themes: [["1", B + "cognitive_theme_1/"], ["2", B + "cognitive_theme2_version_5/"], ["3", B + "cognitive_theme2_version2/"], ["4", B + "cognitive_theme4_version2/"], ["5", B + "theme5_cognitive_version2/"], ["6", B + "cognitive_theme6_version2/"], ["7", B + "theme-7_teaching/"], ["8", D + "cognitive-theme8/"]] },
    { title: "Year 2 · Block 1 · Methods and Statistics 2", links: [["All study links", D + "study/#stats2"], ["Course story", D + "stat2-course/"], ["Exam prep", D + "stat2-exam2026/"], ["SPSS practice", D + "spss-exams/"]] },
    { title: "Year 3", links: [["Year 3 plan", D + "study/#year3"]] }
  ];
  function el(t, a, kids) { var e = document.createElement(t); if (a) for (var k in a) { if (k === "text") e.textContent = a[k]; else e.setAttribute(k, a[k]); } (kids || []).forEach(function (c) { e.appendChild(c); }); return e; }
  function start() {
    var host = el("div", { id: "sez-sitenav" });
    host.style.cssText = "position:fixed;right:16px;bottom:16px;z-index:2147483000;";
    var root = host.attachShadow ? host.attachShadow({ mode: "open" }) : host;
    var css = el("style", { text:
      ":host{all:initial}*{box-sizing:border-box;font-family:'Instrument Sans','Segoe UI',system-ui,sans-serif}" +
      ".fab{display:flex;align-items:center;gap:8px;border:0;cursor:pointer;background:#2b3a5c;color:#fff;font-size:14px;font-weight:600;padding:10px 16px 10px 12px;border-radius:999px;box-shadow:0 8px 24px rgba(29,36,51,.22)}" +
      ".fab:hover{background:#1d2433}.fab svg{width:18px;height:18px}" +
      ".bar{display:flex;gap:8px;align-items:center}" +
      ".home{display:grid;place-items:center;width:42px;height:42px;padding:0;border-radius:50%;background:#fff;color:#2b3a5c;border:1px solid #e4e0d6;box-shadow:0 8px 24px rgba(29,36,51,.16)}.home:hover{background:#f7f5f0}.home svg{width:20px;height:20px}" +
      ".panel{position:absolute;right:0;bottom:54px;width:min(330px,calc(100vw - 32px));max-height:min(70vh,560px);overflow:auto;background:#fff;border:1px solid #e4e0d6;border-radius:18px;box-shadow:0 18px 50px rgba(29,36,51,.22);padding:14px;color:#1d2433;line-height:1.4}" +
      ".panel[hidden]{display:none}" +
      ".brand{font-family:Fraunces,Georgia,serif;font-size:17px;font-weight:600;padding:2px 4px 10px;border-bottom:1px solid #e4e0d6;margin-bottom:8px;display:flex;justify-content:space-between;align-items:center}" +
      ".x{border:0;background:#f7f5f0;border-radius:999px;width:28px;height:28px;cursor:pointer;font-size:16px;color:#5d6472}" +
      "h4{margin:10px 4px 6px;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#b8923a;font-weight:700}" +
      "a{display:block;text-decoration:none;color:#1d2433;font-size:14px;padding:7px 10px;border-radius:10px}a:hover{background:#f7f5f0}" +
      "a.cur{background:#e7ebf3;color:#2b3a5c;font-weight:600}" +
      ".th{display:flex;flex-wrap:wrap;gap:6px;padding:4px 10px 4px}.th span{font-size:12px;color:#5d6472;align-self:center;margin-right:2px}" +
      ".th a{display:inline-grid;place-items:center;width:30px;height:30px;padding:0;border:1px solid #e4e0d6;border-radius:9px;font-size:13px;font-weight:600}" +
      "@media print{.fab,.panel{display:none}}"
    });
    var icon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h10"/></svg>';
    var fab = el("button", { class: "fab", type: "button", "aria-expanded": "false", "aria-controls": "p", "aria-label": "Open site navigation" });
    fab.innerHTML = icon + "<span>Study hub</span>";
    var panel = el("nav", { class: "panel", id: "p", "aria-label": "Site navigation" }); panel.hidden = true;
    var close = el("button", { class: "x", type: "button", "aria-label": "Close", text: "×" });
    panel.appendChild(el("div", { class: "brand" }, [el("span", { text: "Sezen Saracoglu" }), close]));
    var here = location.href.split("#")[0].replace(/index\.html$/, "");
    MENU.forEach(function (sec) {
      panel.appendChild(el("h4", { text: sec.title }));
      sec.links.forEach(function (l) {
        var a = el("a", { href: l[1], text: l[0] });
        if (l[2]) { a.target = "_blank"; a.rel = "noopener"; }
        if (here === l[1]) a.className = "cur";
        panel.appendChild(a);
      });
      if (sec.themes) {
        var row = el("div", { class: "th" }, [el("span", { text: "Themes" })]);
        sec.themes.forEach(function (t) { var a = el("a", { href: t[1], text: t[0], "aria-label": "Theme " + t[0] }); if (here === t[1]) a.className = "cur"; row.appendChild(a); });
        panel.appendChild(row);
      }
    });
    function set(open) { panel.hidden = !open; fab.setAttribute("aria-expanded", String(open)); if (open) { var f = panel.querySelector("a"); if (f) f.focus(); } }
    fab.addEventListener("click", function () { set(panel.hidden); });
    close.addEventListener("click", function () { set(false); fab.focus(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !panel.hidden) { set(false); fab.focus(); } });
    document.addEventListener("click", function (e) { if (!panel.hidden && !host.contains(e.target)) set(false); });
    var home = el("a", { class: "home", href: D, "aria-label": "Home", title: "Home" });
    home.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11.5 12 5l8 6.5"/><path d="M6.5 10v9h11v-9"/></svg>';
    var bar = el("div", { class: "bar" }, [home, fab]);
    root.appendChild(css); root.appendChild(panel); root.appendChild(bar);
    document.body.appendChild(host);
  }
  if (document.body) start(); else document.addEventListener("DOMContentLoaded", start);
})();
