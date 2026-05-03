(function () {
  const STORAGE_KEY = 'site_language';
  const dict = {
    en: {
      Home: 'Home', Contact: 'Contact', Careers: 'Careers', Learning: 'Learning', Legal: 'Legal',
      Terms: 'Terms', Cookies: 'Cookies', Privacy: 'Privacy',
      'Submit request': 'Submit request', 'Submit application': 'Submit application'
    },
    es: {
      Home: 'Inicio', Contact: 'Contacto', Careers: 'Carreras', Learning: 'Aprendizaje', Legal: 'Legal',
      Terms: 'Términos', Cookies: 'Cookies', Privacy: 'Privacidad',
      'Submit request': 'Enviar solicitud', 'Submit application': 'Enviar solicitud'
    }
  };

  function ensureToggles() {
    if (document.getElementById('langEN') && document.getElementById('langES')) return;
    const host = document.querySelector('.site-nav') || document.querySelector('.site-header') || document.body;
    const wrap = document.createElement('div');
    wrap.style.display = 'inline-flex';
    wrap.style.gap = '8px';
    wrap.innerHTML = '<button id="langEN" type="button" class="ui-toggle">EN</button><button id="langES" type="button" class="ui-toggle">ES</button>';
    host.appendChild(wrap);
  }

  function translatePage(lang) {
    const map = dict[lang] || dict.en;
    document.documentElement.lang = lang;
    document.querySelectorAll('a, button, h1, h2, h3, p, label').forEach((el) => {
      const txt = el.textContent.trim();
      if (map[txt]) el.textContent = map[txt];
    });
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function setup() {
    ensureToggles();
    const current = localStorage.getItem(STORAGE_KEY) || 'en';
    translatePage(current);
    document.getElementById('langEN')?.addEventListener('click', () => translatePage('en'));
    document.getElementById('langES')?.addEventListener('click', () => translatePage('es'));
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setup);
  else setup();
})();
