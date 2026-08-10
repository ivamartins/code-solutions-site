(function () {
  'use strict';

  let currentLang = 'pt';

  function applyLang(lang) {
    currentLang = lang === 'en' ? 'en' : 'pt';
    document.documentElement.lang = currentLang;
    const ptBtn = document.getElementById('lang-pt-btn');
    const enBtn = document.getElementById('lang-en-btn');
    if (ptBtn && enBtn) {
      const active = 'bg-yellow-400 text-slate-900';
      const idle = 'text-slate-300 hover:text-white';
      ptBtn.className = 'px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ' + (currentLang === 'pt' ? active : idle);
      enBtn.className = 'px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ' + (currentLang === 'en' ? active : idle);
    }
  }

  function switchLang(lang) {
    applyLang(lang);
    try { localStorage.setItem('cs_lang', lang); } catch (e) {}
    setupContactLinks();
  }

  function initLang() {
    try {
      const saved = localStorage.getItem('cs_lang');
      if (saved === 'en' || saved === 'pt') {
        applyLang(saved);
        return;
      }
    } catch (e) {}
    const navLang = ((navigator.languages && navigator.languages[0]) || navigator.language || 'pt').toLowerCase();
    applyLang(navLang.startsWith('pt') ? 'pt' : 'en');
  }

  function setupMobileNav() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;
    btn.addEventListener('click', function () {
      menu.classList.toggle('hidden');
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.add('hidden');
      });
    });
  }

  function setupForm() {
    const form = document.querySelector('form[action*="formspree"]');
    if (!form) return;
    const successEl = document.getElementById('form-success');

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="lang-pt">Enviando...</span><span class="lang-en">Sending...</span> <i class="fa-solid fa-spinner fa-spin ml-1"></i>';
        applyLang(currentLang);
      }
      try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' }
        });
        if (response.ok) {
          form.classList.add('hidden');
          if (successEl) successEl.classList.remove('hidden');
          form.reset();
        } else {
          const data = await response.json().catch(function () { return {}; });
          alert(data.error || (currentLang === 'pt'
            ? 'Erro ao enviar. Tente pelo WhatsApp ou email.'
            : 'Could not send. Please use WhatsApp or email.'));
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
          }
        }
      } catch (err) {
        console.error(err);
        alert(currentLang === 'pt'
          ? 'Não foi possível enviar agora. Use o WhatsApp ou email.'
          : 'Could not send right now. Please use WhatsApp or email.');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }
      }
    });
  }

  function resetContactForm() {
    const form = document.querySelector('form[action*="formspree"]');
    const successEl = document.getElementById('form-success');
    if (form) form.classList.remove('hidden');
    if (successEl) successEl.classList.add('hidden');
    const submitBtn = form ? form.querySelector('button[type="submit"]') : null;
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span class="lang-pt">Enviar mensagem</span><span class="lang-en">Send message</span> <i class="fa-solid fa-paper-plane"></i>';
      applyLang(currentLang);
    }
  }

  function setupContactLinks() {
    const waPrefix = '55';
    const waDdd = '51';
    const waNumber = '981151474';
    const fullWa = waPrefix + waDdd + waNumber;
    const waMessage = encodeURIComponent(
      currentLang === 'en'
        ? 'Hi, I found the Code Solutions website and would like to talk about a project.'
        : 'Olá, vi o site da Code Solutions e gostaria de conversar sobre um projeto.'
    );
    const emailUser = 'ivamartins';
    const emailDomain = 'gmail.com';
    const fullEmail = emailUser + '@' + emailDomain;
    const href = 'https://wa.me/' + fullWa + '?text=' + waMessage;

    document.querySelectorAll('[data-wa]').forEach(function (el) {
      if (el.tagName === 'A') {
        el.href = href;
        el.target = '_blank';
        el.rel = 'noopener';
      } else {
        el.onclick = function () { window.open(href, '_blank'); };
      }
    });

    document.querySelectorAll('[data-email]').forEach(function (el) {
      if (el.tagName === 'A') el.href = 'mailto:' + fullEmail;
    });
  }

  function markActiveNav() {
    const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const page = path === '' || path === '/' ? 'index.html' : path;
    document.querySelectorAll('[data-nav]').forEach(function (el) {
      const target = (el.getAttribute('data-nav') || '').toLowerCase();
      if (target === page || (page === 'index.html' && target === 'home')) {
        el.classList.add('is-active', 'text-yellow-400');
      }
    });
  }

  window.switchLang = switchLang;
  window.resetContactForm = resetContactForm;

  document.addEventListener('DOMContentLoaded', function () {
    initLang();
    setupMobileNav();
    setupForm();
    setupContactLinks();
    markActiveNav();
    document.addEventListener('keydown', function (e) {
      if (e.metaKey && e.key.toLowerCase() === 'l') {
        e.preventDefault();
        switchLang(currentLang === 'pt' ? 'en' : 'pt');
      }
    });
  });
})();
