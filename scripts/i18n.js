(function () {
  const STORAGE_KEY = "site_language";

  const dictionary = {
    en: {
      Home: "Home",
      About: "About",
      Contact: "Contact",
      Careers: "Careers",
      Learning: "Learning",
      Legal: "Legal",
      Services: "Services",
      Terms: "Terms",
      Cookies: "Cookies",
      Privacy: "Privacy",
      "Legal Terms": "Legal Terms",
      "Privacy & GDPR": "Privacy & GDPR",
      IT: "IT",
      Admin: "Admin",
      Customer: "Customer",
      Logistics: "Logistics",
      "Service inquiry": "Service inquiry",
      "Candidate intake": "Candidate intake",
      "Service lane": "Service lane",
      "Learning track": "Learning track",
      "Tell us what support you need.": "Tell us what support you need.",
      "Share service needs and preferred contact window.":
        "Share service needs and preferred contact window.",
      "Submit request": "Submit request",
      "Submit application": "Submit application",
      Light: "Light",
      Dark: "Dark",
      "About Gabriel Services": "About Gabriel Services",
      "We provide process-driven support across logistics, administrative back office, customer relations, and IT support.":
        "We provide process-driven support across logistics, administrative back office, customer relations, and IT support.",
      "Explore detailed service lanes in the Services section below.":
        "Explore detailed service lanes in the Services section below.",
      "Outstanding Operational Support": "Outstanding Operational Support",
    },
    es: {
      Home: "Inicio",
      About: "Nosotros",
      Contact: "Contacto",
      Careers: "Carreras",
      Learning: "Aprendizaje",
      Legal: "Legal",
      Services: "Servicios",
      Terms: "Términos",
      Cookies: "Cookies",
      Privacy: "Privacidad",
      "Legal Terms": "Términos legales",
      "Privacy & GDPR": "Privacidad y RGPD",
      IT: "TI",
      Admin: "Administración",
      Customer: "Clientes",
      Logistics: "Logística",
      "Service inquiry": "Consulta de servicio",
      "Candidate intake": "Registro de candidatos",
      "Service lane": "Línea de servicio",
      "Learning track": "Ruta de aprendizaje",
      "Tell us what support you need.":
        "Cuéntanos qué tipo de soporte necesitas.",
      "Build your candidate profile.": "Crea tu perfil de candidatura.",
      "Share service needs and preferred contact window.":
        "Comparte tus necesidades de servicio y tu horario preferido de contacto.",
      "Share availability, service area, and experience.":
        "Comparte tu disponibilidad, área de servicio y experiencia.",
      "Submit request": "Enviar solicitud",
      "Submit application": "Enviar candidatura",
      Light: "Claro",
      Dark: "Oscuro",
      "About Gabriel Services": "Sobre Gabriel Services",
      "We provide process-driven support across logistics, administrative back office, customer relations, and IT support.":
        "Brindamos soporte basado en procesos en logística, back office administrativo, atención al cliente y soporte de TI.",
      "Explore detailed service lanes in the Services section below.":
        "Explora las líneas de servicio detalladas en la sección de Servicios a continuación.",
      "Outstanding Operational Support": "Soporte operativo excepcional",
    },
  };

  const placeholderDictionary = {
    en: {
      "Full Name*": "Full Name*",
      "Email*": "Email*",
      "Message*": "Message*",
      "Career Summary*": "Career Summary*",
    },
    es: {
      "Full Name*": "Nombre completo*",
      "Email*": "Correo electrónico*",
      "Message*": "Mensaje*",
      "Career Summary*": "Resumen profesional*",
    },
  };

  function ensureLangToggles() {
    const host =
      document.querySelector(".site-nav") ||
      document.querySelector(".site-header") ||
      document.body;
    if (!host) return;

    let wrap = document.getElementById("lang-switch");
    if (!wrap) {
      wrap = document.createElement("div");
      wrap.id = "lang-switch";
      wrap.className = "tools";
      wrap.style.display = "inline-flex";
      wrap.style.gap = "8px";
      wrap.innerHTML =
        '<button id="langEN" type="button" class="ui-toggle">EN</button><button id="langES" type="button" class="ui-toggle">ES</button>';
      host.appendChild(wrap);
    }
  }

  function syncNavWithFooter() {
    const nav = document.querySelector(".site-nav");
    const footerLinks = Array.from(
      document.querySelectorAll("footer a, .site-footer a, .footer-links a"),
    );
    if (!nav || footerLinks.length === 0) return;

    const existing = new Set(
      Array.from(nav.querySelectorAll("a")).map((a) => a.getAttribute("href")),
    );
    footerLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (!href || existing.has(href)) return;

      const a = document.createElement("a");
      a.href = href;
      a.className = link.className || "nav-btn";
      a.textContent = link.textContent.trim();
      nav.appendChild(a);
      existing.add(href);
    });

    const homeLink = nav.querySelector('a[href="/index.html"], a[href="/"]');
    if (!homeLink) {
      const a = document.createElement("a");
      a.href = "/index.html";
      a.className = "nav-btn";
      a.textContent = "Home";
      nav.prepend(a);
    }
  }

  function translateTextNodes(lang) {
    const map = dictionary[lang] || dictionary.en;

    document
      .querySelectorAll("a, button, h1, h2, h3, p, label")
      .forEach((el) => {
        const source = (el.dataset.i18nBase || el.textContent || "").trim();
        if (!source) return;
        if (!el.dataset.i18nBase) el.dataset.i18nBase = source;
        if (map[source]) el.textContent = map[source];
      });

    const enBtn = document.getElementById("langEN");
    const esBtn = document.getElementById("langES");
    enBtn?.classList.toggle("is-active", lang === "en");
    esBtn?.classList.toggle("is-active", lang === "es");

    localStorage.setItem(STORAGE_KEY, lang);
  }

  function setupLanguage() {
    ensureLangToggles();
    const current = localStorage.getItem(STORAGE_KEY) || "en";
    translatePage(current);

    document
      .getElementById("langEN")
      ?.addEventListener("click", () => translatePage("en"));
    document
      .getElementById("langES")
      ?.addEventListener("click", () => translatePage("es"));
  }

  function init() {
    syncNavWithFooter();
    setupLanguage();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
