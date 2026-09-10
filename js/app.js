document.addEventListener("DOMContentLoaded", function () {
  var STORAGE_LANG = "site-lang";
  var STORAGE_THEME = "site-theme";

  function getInitialLang() {
    try {
      var saved = localStorage.getItem(STORAGE_LANG);
      if (saved === "fr" || saved === "en") return saved;
    } catch (e) {}
    return "fr";
  }

  function getInitialTheme() {
    try {
      var saved = localStorage.getItem(STORAGE_THEME);
      if (saved === "light" || saved === "dark") return saved;
    } catch (e) {}
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  var currentLang = getInitialLang();
  var currentTheme = getInitialTheme();

  var langToggle = document.getElementById("lang-toggle");
  var themeToggle = document.getElementById("theme-toggle");

  // ---- Rendering (data-driven sections + static UI text) ----
  function render() {
    var t = UI_TEXT[currentLang];

    document.documentElement.lang = currentLang;

    renderCodeWindow(currentLang, document.getElementById("code-window-code"));
    renderStats(SITE_DATA.stats, currentLang, document.getElementById("stats-strip"));
    renderRoles(SITE_DATA.roles, currentLang, document.getElementById("roles"));
    renderToolkit(SITE_DATA.toolkit, currentLang, document.getElementById("toolkit-grid"));
    renderProjects(SITE_DATA.projects, currentLang, document.getElementById("projects"));
    renderTimeline(SITE_DATA.experience, currentLang, document.getElementById("timeline"));
    renderFormation(SITE_DATA.formation, currentLang, document.getElementById("formation-list"));
    renderExtras(SITE_DATA.extras, currentLang, document.getElementById("extras-grid"));
    renderProfilParagraphs(t.profilParagraphs, document.getElementById("profil-paragraphs"));

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var path = el.getAttribute("data-i18n").split(".");
      var value = t;
      for (var i = 0; i < path.length; i++) value = value && value[path[i]];
      if (typeof value === "string") el.textContent = value;
    });

    // Contact links / email
    document.querySelectorAll("[data-contact-email]").forEach(function (el) {
      el.href = "mailto:" + SITE_DATA.contact.email;
      if (el.dataset.contactEmail === "text") el.textContent = SITE_DATA.contact.email;
    });
    document.querySelectorAll("[data-contact-linkedin]").forEach(function (el) {
      el.href = SITE_DATA.contact.linkedin;
    });
    document.querySelectorAll("[data-contact-github]").forEach(function (el) {
      el.href = SITE_DATA.contact.github;
    });

    if (langToggle) {
      langToggle.textContent = currentLang === "fr" ? "EN" : "FR";
      langToggle.setAttribute("aria-label", t.langToggleLabel);
    }
    if (themeToggle) {
      themeToggle.setAttribute("aria-label", t.themeToggleLabel);
    }
  }

  function applyTheme() {
    if (currentTheme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    if (themeToggle) themeToggle.classList.toggle("is-dark", currentTheme === "dark");
  }

  render();
  applyTheme();

  if (langToggle) {
    langToggle.addEventListener("click", function () {
      currentLang = currentLang === "fr" ? "en" : "fr";
      try { localStorage.setItem(STORAGE_LANG, currentLang); } catch (e) {}
      render();
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      currentTheme = currentTheme === "light" ? "dark" : "light";
      try { localStorage.setItem(STORAGE_THEME, currentTheme); } catch (e) {}
      applyTheme();
    });
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Role rotator
  var roles = document.querySelectorAll("#roles [data-role]");
  if (roles.length && !reduceMotion) {
    var idx = 0;
    setInterval(function () {
      roles = document.querySelectorAll("#roles [data-role]");
      if (!roles.length) return;
      roles[idx].classList.remove("role--active");
      idx = (idx + 1) % roles.length;
      roles[idx].classList.add("role--active");
    }, 2600);
  }

  // Scroll reveal
  if (!reduceMotion && "IntersectionObserver" in window) {
    var sections = document.querySelectorAll(".section");
    sections.forEach(function (s) { s.classList.add("reveal-init"); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("revealed"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    sections.forEach(function (s) { io.observe(s); });
  }
});
