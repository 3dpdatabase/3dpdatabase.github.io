(function () {
  "use strict";

  let lang = "en";
  try {
    const saved = localStorage.getItem("3dpdb.lang");
    if (saved === "en" || saved === "ja") lang = saved;
  } catch (e) {}

  const t = (key) => I18N[lang][key];

  const MAX_COMPARE = 4;
  let selectedIds = [];
  let searchQuery = "";

  const printerSearch = document.getElementById("printerSearch");
  const selectedPrinters = document.getElementById("selectedPrinters");
  const printerList = document.getElementById("printerList");
  const compareCount = document.getElementById("compareCount");
  const compareSection = document.getElementById("compareSection");
  const compareWrapper = document.getElementById("compareWrapper");
  const compareThead = document.getElementById("compareThead");
  const compareTbody = document.getElementById("compareTbody");
  const emptyCompare = document.getElementById("emptyCompare");
  const langEn = document.getElementById("langEn");
  const langJa = document.getElementById("langJa");

  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
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

  function countryLabel(country) {
    return lang === "ja" ? COUNTRY_JA[country] || country : country;
  }

  function isResin(p) {
    return /sla|resin/i.test(p.technology);
  }

  function getSelectedPrinters() {
    return selectedIds.map(id => PRINTERS.find(p => p.id === id)).filter(Boolean);
  }

  function getFilteredPrinters() {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return PRINTERS;
    return PRINTERS.filter(p => {
      const hay = [p.name, p.brand, p.description, p.technology].join(" ").toLowerCase();
      return hay.includes(q);
    });
  }

  function renderSelectedChips() {
    selectedPrinters.innerHTML = "";
    
    if (selectedIds.length === 0) {
      selectedPrinters.innerHTML = '<div class="empty-selection">' + t("noPrintersSelected") + '</div>';
      return;
    }

    const printers = getSelectedPrinters();
    printers.forEach(p => {
      const chip = document.createElement("div");
      chip.className = "selected-chip";
      
      const name = document.createElement("span");
      name.className = "chip-name";
      name.textContent = p.name;
      
      const remove = document.createElement("button");
      remove.className = "chip-remove";
      remove.innerHTML = "&times;";
      remove.title = t("remove");
      remove.addEventListener("click", (e) => {
        e.stopPropagation();
        removeFromCompare(p.id);
      });
      
      chip.appendChild(name);
      chip.appendChild(remove);
      selectedPrinters.appendChild(chip);
    });

    compareCount.textContent = t("selected")(selectedIds.length);
  }

  function renderPrinterList() {
    printerList.innerHTML = "";
    const filtered = getFilteredPrinters();
    
    filtered.forEach(p => {
      const isSelected = selectedIds.includes(p.id);
      const isFull = selectedIds.length >= MAX_COMPARE && !isSelected;
      
      const item = document.createElement("div");
      item.className = "printer-list-item" + (isSelected ? " selected" : "") + (isFull ? " disabled" : "");
      
      const info = document.createElement("div");
      info.className = "item-info";
      
      const name = document.createElement("div");
      name.className = "item-name";
      name.textContent = p.name;
      
      const meta = document.createElement("div");
      meta.className = "item-meta";
      meta.textContent = p.brand + " · " + p.year + " · " + techLabel(p.technology);
      
      info.appendChild(name);
      info.appendChild(meta);
      
      const price = document.createElement("div");
      price.className = "item-price";
      price.textContent = formatPrice(p.price);
      
      const action = document.createElement("button");
      action.className = "item-action";
      action.textContent = isSelected ? t("remove") : t("add");
      
      if (!isFull || isSelected) {
        action.addEventListener("click", () => {
          if (isSelected) {
            removeFromCompare(p.id);
          } else {
            addToCompare(p.id);
          }
        });
      }
      
      item.appendChild(info);
      item.appendChild(price);
      item.appendChild(action);
      printerList.appendChild(item);
    });
  }

  function addToCompare(id) {
    if (selectedIds.length >= MAX_COMPARE || selectedIds.includes(id)) return;
    selectedIds.push(id);
    renderSelectedChips();
    renderPrinterList();
    renderComparison();
  }

  function removeFromCompare(id) {
    selectedIds = selectedIds.filter(i => i !== id);
    renderSelectedChips();
    renderPrinterList();
    renderComparison();
  }

  function renderComparison() {
    const printers = getSelectedPrinters();
    
    if (printers.length < 2) {
      emptyCompare.style.display = "block";
      compareWrapper.style.display = "none";
      return;
    }
    
    emptyCompare.style.display = "none";
    compareWrapper.style.display = "block";
    
    compareThead.innerHTML = "";
    const headerRow = document.createElement("tr");
    const thSpec = document.createElement("th");
    thSpec.className = "spec-col";
    thSpec.textContent = t("specification");
    headerRow.appendChild(thSpec);
    
    printers.forEach(p => {
      const th = document.createElement("th");
      const nameDiv = document.createElement("div");
      nameDiv.className = "compare-printer-name";
      nameDiv.textContent = p.name;
      
      const brandDiv = document.createElement("div");
      brandDiv.className = "compare-printer-brand";
      brandDiv.textContent = p.brand;
      
      const techBadge = document.createElement("span");
      techBadge.className = "tech-badge" + (isResin(p) ? " resin" : "");
      techBadge.textContent = techLabel(p.technology);
      
      th.appendChild(nameDiv);
      th.appendChild(brandDiv);
      th.appendChild(techBadge);
      headerRow.appendChild(th);
    });
    compareThead.appendChild(headerRow);
    
    compareTbody.innerHTML = "";
    
    const specs = [
      [t("price"), p => formatPrice(p.price)],
      [t("modalBuildVolume"), p => p.buildVolume],
      [t("layerResolution"), p => p.layerResolution],
      [t("maxSpeed"), p => p.maxSpeed],
      [t("heatedBed"), p => p.heatedBed ? t("yes") : t("no")],
      [t("autoBedLeveling"), p => p.autoBedLeveling ? t("yes") : t("no")],
      [t("enclosure"), p => p.enclosure ? t("yes") : t("no")],
      [t("filamentDiameter"), p => p.filamentDiameter ? p.filamentDiameter + " mm" : t("na")],
      [t("connectivity"), p => (p.connectivity || []).join(", ")],
      [t("weight"), p => p.weight],
      [t("year"), p => p.year],
      [t("country"), p => countryLabel(p.country)],
      [t("description"), p => p.description],
      [t("features"), p => (p.features || []).join(", ")]
    ];
    
    specs.forEach(([label, getValue]) => {
      const tr = document.createElement("tr");
      
      const tdLabel = document.createElement("td");
      tdLabel.className = "spec-label-cell";
      tdLabel.textContent = label;
      tr.appendChild(tdLabel);
      
      printers.forEach(p => {
        const td = document.createElement("td");
        td.className = "spec-value-cell";
        
        const val = getValue(p);
        td.textContent = val;
        
        if (label === t("price")) {
          const price = p.price;
          const allPrices = printers.map(x => x.price);
          if (price === Math.min(...allPrices)) {
            td.classList.add("best-value");
          }
        }
        
        tr.appendChild(td);
      });
      
      compareTbody.appendChild(tr);
    });
  }

  function applyLanguage() {
    document.documentElement.lang = lang;
    document.title = t("compareTitle");
    
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.placeholder = t(el.dataset.i18nPlaceholder);
    });
    
    langEn.classList.toggle("active", lang === "en");
    langJa.classList.toggle("active", lang === "ja");
    
    renderSelectedChips();
    renderPrinterList();
    renderComparison();
  }

  function setLanguage(next) {
    if (next === lang) return;
    lang = next;
    try {
      localStorage.setItem("3dpdb.lang", lang);
    } catch (e) {}
    applyLanguage();
  }

  printerSearch.addEventListener("input", () => {
    searchQuery = printerSearch.value;
    renderPrinterList();
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
