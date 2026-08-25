(function () {
  "use strict";

  let lang = "en";
  try {
    const saved = localStorage.getItem("3dpdb.lang");
    if (saved === "en" || saved === "ja") lang = saved;
  } catch (e) {}

  const t = (key) => I18N[lang][key];
  const langEn = document.getElementById("langEn");
  const langJa = document.getElementById("langJa");

  function applyLanguage() {
    document.documentElement.lang = lang;
    document.title = t("aboutTitle");
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    langEn.classList.toggle("active", lang === "en");
    langJa.classList.toggle("active", lang === "ja");
  }

  function setLanguage(next) {
    if (next === lang) return;
    lang = next;
    try {
      localStorage.setItem("3dpdb.lang", lang);
    } catch (e) {}
    applyLanguage();
  }

  langEn.addEventListener("click", () => setLanguage("en"));
  langJa.addEventListener("click", () => setLanguage("ja"));
  applyLanguage();
})();
