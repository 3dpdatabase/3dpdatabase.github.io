(function () {
  "use strict";

  let lang = "en";
  try {
    const saved = localStorage.getItem("3dpdb.lang");
    if (saved === "en" || saved === "ja") lang = saved;
  } catch (e) {
    /* storage unavailable */
  }

  const t = (key) => I18N[lang][key];

  const state = {
    search: "",
    technologies: new Set(),
    features: new Set(),
    maxPrice: 7000,
    sort: "name"
  };

  const grid = document.getElementById("grid");
  const emptyState = document.getElementById("emptyState");
  const recordCount = document.getElementById("recordCount");
  const searchInput = document.getElementById("searchInput");
  const techFilters = document.getElementById("techFilters");
  const featureFilters = document.getElementById("featureFilters");
  const priceRange = document.getElementById("priceRange");
  const priceLabel = document.getElementById("priceLabel");
  const priceMin = document.getElementById("priceMin");
  const sortSelect = document.getElementById("sortSelect");
  const resetBtn = document.getElementById("resetFilters");
  const langEn = document.getElementById("langEn");
  const langJa = document.getElementById("langJa");

  const modal = document.getElementById("modal");
  const modalOverlay = document.getElementById("modalOverlay");
  const modalContent = document.getElementById("modalContent");

  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  });

  const featureMapJa = {};
  PRINTERS.forEach((p) => {
    const entry = PRINTERS_JA[p.id];
    if (entry) {
      (p.features || []).forEach((f, i) => {
        featureMapJa[f] = entry.features[i];
      });
    }
  });

  function formatPrice(value) {
    if (lang === "ja") {
      return "US$" + new Intl.NumberFormat("ja-JP", { maximumFractionDigits: 0 }).format(value);
    }
    return currency.format(value);
  }

  function techLabel(tech) {
    return lang === "ja" ? TECH_JA[tech] || tech : tech;
  }

  function featureLabel(feat) {
    return lang === "ja" ? featureMapJa[feat] || feat : feat;
  }

  function countryLabel(country) {
    return lang === "ja" ? COUNTRY_JA[country] || country : country;
  }

  function pDesc(p) {
    if (lang === "ja" && PRINTERS_JA[p.id]) return PRINTERS_JA[p.id].description;
    return p.description;
  }

  function pFeatures(p) {
    if (lang === "ja" && PRINTERS_JA[p.id]) return PRINTERS_JA[p.id].features;
    return p.features;
  }

  function getTechnologies() {
    const set = new Set();
    PRINTERS.forEach((p) => {
      if (p.technology !== "SLS (Powder)") set.add(p.technology);
    });
    return Array.from(set).sort();
  }

  function getFeatures() {
    const set = new Set();
    PRINTERS.forEach((p) => (p.features || []).forEach((f) => set.add(f)));
    return Array.from(set).sort();
  }

  function buildFilters() {
    techFilters.innerHTML = "";
    getTechnologies().forEach((tech) => {
      const label = document.createElement("label");
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.value = tech;
      cb.addEventListener("change", () => {
        if (cb.checked) state.technologies.add(tech);
        else state.technologies.delete(tech);
        render();
      });
      label.appendChild(cb);
      label.appendChild(document.createTextNode(techLabel(tech)));
      techFilters.appendChild(label);
    });

    featureFilters.innerHTML = "";
    getFeatures().forEach((feat) => {
      const label = document.createElement("label");
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.value = feat;
      cb.addEventListener("change", () => {
        if (cb.checked) state.features.add(feat);
        else state.features.delete(feat);
        render();
      });
      label.appendChild(cb);
      label.appendChild(document.createTextNode(featureLabel(feat)));
      featureFilters.appendChild(label);
    });
  }

  function syncFilterChecks() {
    techFilters.querySelectorAll("input").forEach((cb) => {
      cb.checked = state.technologies.has(cb.value);
    });
    featureFilters.querySelectorAll("input").forEach((cb) => {
      cb.checked = state.features.has(cb.value);
    });
  }

  function filterPrinters() {
    const q = state.search.trim().toLowerCase();
    return PRINTERS.filter((p) => {
      if (q) {
        const hay = [
          p.name,
          p.brand,
          p.description,
          p.technology,
          pDesc(p),
          techLabel(p.technology)
        ]
          .join(" ")
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (state.technologies.size && !state.technologies.has(p.technology)) {
        return false;
      }
      if (state.features.size) {
        const pfeats = p.features || [];
        for (const f of state.features) {
          if (!pfeats.includes(f)) return false;
        }
      }
      if (p.price > state.maxPrice) return false;
      return true;
    });
  }

  function sortPrinters(list) {
    const sorted = list.slice();
    switch (state.sort) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "year":
        sorted.sort((a, b) => b.year - a.year);
        break;
      default:
        sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    return sorted;
  }

  function isResin(p) {
    return /sla|resin/i.test(p.technology);
  }

  function buildCard(p) {
    const card = document.createElement("article");
    card.className = "card";
    card.addEventListener("click", () => openModal(p.id));

    const badge = document.createElement("span");
    badge.className = "tech-badge" + (isResin(p) ? " resin" : "");
    badge.textContent = techLabel(p.technology);

    const top = document.createElement("div");
    top.className = "card-top";
    top.appendChild(badge);

    const h3 = document.createElement("h3");
    h3.textContent = p.name;

    const brand = document.createElement("p");
    brand.className = "brand";
    brand.textContent = p.brand + " · " + p.year;

    const specs = document.createElement("div");
    specs.className = "card-specs";
    specs.appendChild(specCell(t("buildVolume"), p.buildVolume));
    specs.appendChild(specCell(t("layer"), p.layerResolution));
    specs.appendChild(specCell(t("speed"), p.maxSpeed));
    specs.appendChild(specCell(t("weight"), p.weight));

    const footer = document.createElement("div");
    footer.className = "card-footer";

    const price = document.createElement("span");
    price.className = "price";
    price.textContent = formatPrice(p.price);

    const view = document.createElement("span");
    view.className = "spec-label";
    view.textContent = t("viewDetails");

    footer.appendChild(price);
    footer.appendChild(view);

    card.appendChild(top);
    card.appendChild(h3);
    card.appendChild(brand);
    card.appendChild(specs);
    card.appendChild(footer);
    return card;
  }

  function specCell(label, value) {
    const div = document.createElement("div");
    const l = document.createElement("span");
    l.className = "spec-label";
    l.textContent = label;
    const v = document.createElement("span");
    v.className = "spec-value";
    v.textContent = value != null ? value : t("na");
    div.appendChild(l);
    div.appendChild(v);
    return div;
  }

  function render() {
    const filtered = sortPrinters(filterPrinters());
    grid.innerHTML = "";
    filtered.forEach((p) => grid.appendChild(buildCard(p)));

    const empty = filtered.length === 0;
    emptyState.classList.toggle("hidden", !empty);
    recordCount.textContent = t("records")(filtered.length);
  }

  function openModal(id) {
    const p = PRINTERS.find((x) => x.id === id);
    if (!p) return;

    const specRows = [
      [t("brand"), p.brand],
      [t("technology"), techLabel(p.technology)],
      [t("modalBuildVolume"), p.buildVolume],
      [t("layerResolution"), p.layerResolution],
      [t("maxSpeed"), p.maxSpeed],
      [t("heatedBed"), p.heatedBed ? t("yes") : t("no")],
      [t("autoBedLeveling"), p.autoBedLeveling ? t("yes") : t("no")],
      [t("enclosure"), p.enclosure ? t("yes") : t("no")],
      [t("filamentDiameter"), p.filamentDiameter ? p.filamentDiameter + " mm" : t("na")],
      [t("connectivity"), (p.connectivity || []).join(", ")],
      [t("weight"), p.weight],
      [t("year"), p.year],
      [t("country"), countryLabel(p.country)]
    ];

    const h2 = document.createElement("h2");
    h2.textContent = p.name;

    const brand = document.createElement("p");
    brand.className = "brand";
    brand.textContent = p.brand + " · " + p.year;

    const tags = document.createElement("div");
    tags.className = "detail-tags";
    const techBadge = document.createElement("span");
    techBadge.className = "tech-badge" + (isResin(p) ? " resin" : "");
    techBadge.textContent = techLabel(p.technology);
    tags.appendChild(techBadge);
    const desc = document.createElement("p");
    desc.className = "detail-desc";
    desc.textContent = pDesc(p);

    const table = document.createElement("table");
    table.className = "spec-table";
    const tbody = document.createElement("tbody");
    specRows.forEach(([k, v]) => {
      const tr = document.createElement("tr");
      const td1 = document.createElement("td");
      td1.textContent = k;
      const td2 = document.createElement("td");
      td2.textContent = v;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    const featTitle = document.createElement("p");
    featTitle.className = "features-title";
    featTitle.textContent = t("keyFeatures");

    const featList = document.createElement("ul");
    featList.className = "feature-list";
    (pFeatures(p) || []).forEach((f) => {
      const li = document.createElement("li");
      li.textContent = f;
      featList.appendChild(li);
    });

    const footer = document.createElement("div");
    footer.className = "detail-footer";
    const price = document.createElement("span");
    price.className = "price";
    price.textContent = formatPrice(p.price);
    const idLabel = document.createElement("span");
    idLabel.className = "spec-label";
    idLabel.textContent = t("recordId")(p.id);
    footer.appendChild(price);
    footer.appendChild(idLabel);

    const close = document.createElement("button");
    close.className = "modal-close";
    close.textContent = "×";
    close.setAttribute("aria-label", t("close"));
    close.addEventListener("click", closeModal);

    modalContent.innerHTML = "";
    modalContent.appendChild(close);
    modalContent.appendChild(h2);
    modalContent.appendChild(brand);
    modalContent.appendChild(tags);
    modalContent.appendChild(desc);
    modalContent.appendChild(table);
    modalContent.appendChild(featTitle);
    modalContent.appendChild(featList);
    modalContent.appendChild(footer);

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }

  function applyLanguage() {
    document.documentElement.lang = lang;
    document.title = t("docTitle");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.placeholder = t(el.dataset.i18nPlaceholder);
    });

    sortSelect.innerHTML = "";
    [
      ["name", "sortName"],
      ["price-asc", "sortPriceAsc"],
      ["price-desc", "sortPriceDesc"],
      ["year", "sortYear"]
    ].forEach(([value, key]) => {
      const opt = document.createElement("option");
      opt.value = value;
      opt.textContent = t(key);
      sortSelect.appendChild(opt);
    });
    sortSelect.value = state.sort;

    priceLabel.textContent = formatPrice(state.maxPrice);
    priceMin.textContent = formatPrice(0);

    langEn.classList.toggle("active", lang === "en");
    langJa.classList.toggle("active", lang === "ja");

    if (!modal.classList.contains("hidden")) closeModal();

    buildFilters();
    syncFilterChecks();
    render();
  }

  function setLanguage(next) {
    if (next === lang) return;
    lang = next;
    try {
      localStorage.setItem("3dpdb.lang", lang);
    } catch (e) {
      /* storage unavailable */
    }
    applyLanguage();
  }

  searchInput.addEventListener("input", () => {
    state.search = searchInput.value;
    render();
  });

  sortSelect.addEventListener("change", () => {
    state.sort = sortSelect.value;
    render();
  });

  priceRange.addEventListener("input", () => {
    state.maxPrice = Number(priceRange.value);
    priceLabel.textContent = formatPrice(state.maxPrice);
    render();
  });

  resetBtn.addEventListener("click", () => {
    state.search = "";
    state.technologies.clear();
    state.features.clear();
    state.maxPrice = 7000;
    state.sort = "name";
    searchInput.value = "";
    priceRange.value = "7000";
    priceLabel.textContent = formatPrice(7000);
    sortSelect.value = "name";
    techFilters.querySelectorAll("input").forEach((cb) => (cb.checked = false));
    featureFilters.querySelectorAll("input").forEach((cb) => (cb.checked = false));
    render();
  });

  modalOverlay.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  langEn.addEventListener("click", () => setLanguage("en"));
  langJa.addEventListener("click", () => setLanguage("ja"));

  const reportLink = document.getElementById("reportLink");
  const reportEmail = document.getElementById("reportEmail");
  if (reportLink && reportEmail) {
    reportLink.addEventListener("click", () => {
      reportEmail.classList.toggle("hidden");
    });
  }

  applyLanguage();
})();
