// Content and navigation work without JavaScript. Enhancements stay optional.
const consentKey = 'analytics-consent';
const analyticsId = 'G-S4WPTM8ZQ5';
let consent = null;
try {
    consent = localStorage.getItem(consentKey);
} catch {
    /* Storage may be unavailable. */
}
const isPublicSite = ['jaimechapinal.com', 'www.jaimechapinal.com'].includes(
    location.hostname
);

function loadAnalytics() {
    // Local previews never contribute to production analytics.
    if (!isPublicSite || window.analyticsLoaded) return;
    window.analyticsLoaded = true;
    window[`ga-disable-${analyticsId}`] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
        window.dataLayer.push(arguments);
    };
    window.gtag('consent', 'default', { analytics_storage: 'denied' });
    window.gtag('consent', 'update', { analytics_storage: 'granted' });
    window.gtag('js', new Date());
    window.gtag('config', analyticsId);
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsId}`;
    document.head.append(script);
}
function disableAnalytics() {
    window[`ga-disable-${analyticsId}`] = true;
    window.gtag?.('consent', 'update', { analytics_storage: 'denied' });
    document.cookie
        .split(';')
        .map((c) => c.trim().split('=')[0])
        .filter(
            (name) =>
                name === '_gid' ||
                name.startsWith('_ga') ||
                name.startsWith('_gat')
        )
        .forEach((name) => {
            for (const domain of ['', '; domain=.jaimechapinal.com']) {
                document.cookie = `${name}=; Max-Age=0; path=/${domain}`;
            }
        });
}
const banner = document.getElementById('cookie-banner');
const settings = document.getElementById('cookie-settings');
let openedFromSettings = false;
function setConsent(value) {
    consent = value;
    try {
        localStorage.setItem(consentKey, value);
    } catch {
        /* Keep this visit's choice in memory. */
    }
    banner?.classList.add('hidden');
    if (value === 'accepted') {
        if (window.analyticsLoaded) {
            window[`ga-disable-${analyticsId}`] = false;
            window.gtag?.('consent', 'update', {
                analytics_storage: 'granted',
            });
        } else loadAnalytics();
    } else disableAnalytics();
    if (openedFromSettings) settings?.focus();
    openedFromSettings = false;
}
if (consent === 'accepted') loadAnalytics();
if (!consent) banner?.classList.remove('hidden');
document
    .getElementById('cookie-accept')
    ?.addEventListener('click', () => setConsent('accepted'));
document
    .getElementById('cookie-reject')
    ?.addEventListener('click', () => setConsent('rejected'));
settings?.addEventListener('click', () => {
    openedFromSettings = true;
    banner?.classList.remove('hidden');
    document.getElementById('cookie-reject')?.focus();
});
// Explicit intent events only. Never send email addresses or article URLs.
document.addEventListener('click', (event) => {
    const link = event.target.closest('a[data-track]');
    if (link && consent === 'accepted' && isPublicSite) {
        window.gtag?.('event', `${link.dataset.track}_click`, {
            destination: link.dataset.label,
        });
    }
});
const portrait = document.querySelector('.portrait-button');
const note = document.getElementById('portrait-note');
const messages = [
    '¡Hola! Thanks for stopping by.',
    'Bears. Beets. Better software.',
    'A little curiosity goes a long way.',
];
let messageIndex = 0;
portrait?.addEventListener('click', () => {
    note.textContent = messages[messageIndex++ % messages.length];
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
        portrait.classList.remove('is-waving');
        void portrait.offsetWidth;
        portrait.classList.add('is-waving');
    }
});
portrait?.addEventListener('animationend', () =>
    portrait.classList.remove('is-waving')
);
// Keep old shared section links useful after the redesign.
const legacyAnchors = {
    sectionA: 'top',
    sectionB: 'about',
    sectionC: 'work',
    sectionD: 'career',
    sectionE: 'apps',
    sectionF: 'contact',
};
const destination = legacyAnchors[location.hash.slice(1)];
if (destination)
    document
        .getElementById(destination)
        ?.scrollIntoView({ behavior: 'instant' });
