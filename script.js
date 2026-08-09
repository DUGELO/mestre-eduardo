const CONSENT_KEY = 'mestre_eduardo_cookie_consent';
const GA_ID = document.body.dataset.gaId?.trim();
let analyticsLoaded = false;

const video = document.querySelector('.hero-video');
const videoToggle = document.querySelector('#video-toggle');
const cookieBanner = document.querySelector('.cookie-banner');

function loadAnalytics() {
  if (!GA_ID || analyticsLoaded) return;
  analyticsLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
  document.head.appendChild(script);
}

function trackEvent(name, parameters) {
  if (localStorage.getItem(CONSENT_KEY) !== 'accepted') return;
  loadAnalytics();
  window.gtag?.('event', name, parameters);
}

function setConsent(value) {
  localStorage.setItem(CONSENT_KEY, value);
  if (cookieBanner) cookieBanner.hidden = true;
  if (value === 'accepted') loadAnalytics();
}

function openConsentSettings() {
  if (!cookieBanner) return;
  cookieBanner.hidden = false;
  cookieBanner.querySelector('.cookie-accept')?.focus();
}

const savedConsent = localStorage.getItem(CONSENT_KEY);
if (savedConsent === 'accepted') loadAnalytics();
if (!savedConsent && cookieBanner) cookieBanner.hidden = false;

document.querySelector('.cookie-accept')?.addEventListener('click', () => setConsent('accepted'));
document.querySelector('.cookie-reject')?.addEventListener('click', () => setConsent('rejected'));
document.querySelector('.privacy-settings')?.addEventListener('click', openConsentSettings);

videoToggle?.addEventListener('click', async () => {
  const iconUse = videoToggle.querySelector('use');
  if (video.paused) {
    await video.play();
    iconUse?.setAttribute('href', '#icon-pause');
    videoToggle.setAttribute('aria-label', 'Pausar animação');
  } else {
    video.pause();
    iconUse?.setAttribute('href', '#icon-play');
    videoToggle.setAttribute('aria-label', 'Reproduzir animação');
  }
});

document.querySelectorAll('.accordion details').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('.accordion details').forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});

document.querySelectorAll('[data-whatsapp]').forEach((link) => {
  link.addEventListener('click', () => {
    trackEvent('click_whatsapp', {
      cta_location: link.dataset.ctaLocation || 'unknown',
      coverage_group: 'ride_df'
    });
  });
});

document.querySelector('#lead-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const service = String(data.get('servico') || 'nao_informado');
  const message = [
    `Olá, Eduardo! Meu nome é ${data.get('nome')}.`,
    `Tenho interesse em: ${service}.`,
    `A obra fica em: ${data.get('regiao')}.`,
    data.get('mensagem') ? `Detalhes: ${data.get('mensagem')}` : '',
    'Vim pelo seu site e gostaria de solicitar uma avaliação.'
  ].filter(Boolean).join('\n');

  trackEvent('generate_lead', {
    cta_location: 'form',
    service_category: service.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '_'),
    coverage_group: 'ride_df'
  });

  window.open(`https://wa.me/5561981033458?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

document.querySelector('#year').textContent = new Date().getFullYear();
