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
    'Always tinkering. Powered by curiosity (and coffee).',
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
// Highlight the nav link for the section being read (home page only).
const navLinks = [...document.querySelectorAll('nav a[href^="#"]')];
if (navLinks.length && 'IntersectionObserver' in window) {
    const sections = navLinks
        .map((link) => document.getElementById(link.hash.slice(1)))
        .filter(Boolean);
    const observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;
                navLinks.forEach((link) =>
                    link.hash === `#${entry.target.id}`
                        ? link.setAttribute('aria-current', 'true')
                        : link.removeAttribute('aria-current')
                );
            }
        },
        { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
}
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
// Juicy extras. Everything below is decoration and respects reduced motion.
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
// Interest words play their clip only while open, so nothing loads up front.
// Mouse opens on hover, touch toggles on tap, keyboard opens on focus.
document.querySelectorAll('.gif-word').forEach((word) => {
    const pop = word.querySelector('.gif-pop');
    const video = word.querySelector('video');
    let lastPointer = null;
    const open = () => {
        // Keep the bubble on screen. Measure untransformed sizes, not the
        // mid-animation box.
        const gutter = 12;
        const rect = word.getBoundingClientRect();
        const center = rect.left + rect.width / 2;
        const half = pop.offsetWidth / 2;
        const shift =
            Math.max(0, gutter - (center - half)) -
            Math.max(0, center + half - (innerWidth - gutter));
        pop.style.setProperty('--pop-shift', `${shift}px`);
        word.classList.add('is-open');
        video.play().catch(() => {});
    };
    const close = () => {
        word.classList.remove('is-open');
        video.pause();
    };
    word.addEventListener('pointerenter', (event) => {
        if (event.pointerType === 'mouse') open();
    });
    word.addEventListener('pointerleave', (event) => {
        if (event.pointerType === 'mouse') close();
    });
    word.addEventListener('pointerdown', (event) => {
        lastPointer = event.pointerType;
    });
    word.addEventListener('focus', () => {
        if (!lastPointer) open();
    });
    word.addEventListener('blur', () => {
        lastPointer = null;
        close();
    });
    word.addEventListener('click', () => {
        if (lastPointer === 'mouse') return;
        if (lastPointer) word.classList.contains('is-open') ? close() : open();
    });
});
if (!reducedMotion) {
    // Confetti burst from the portrait.
    portrait?.addEventListener('click', () => {
        const rect = portrait.getBoundingClientRect();
        const colors = ['#eeff63', '#f5f4ec', '#b8f0c0', '#ff8a5c'];
        for (let i = 0; i < 22; i++) {
            const spark = document.createElement('span');
            spark.className = 'spark';
            spark.style.left = `${rect.left + rect.width / 2}px`;
            spark.style.top = `${rect.top + rect.height / 2}px`;
            spark.style.background = colors[i % colors.length];
            document.body.append(spark);
            const angle = (Math.PI * 2 * i) / 22 + Math.random() * 0.4;
            const distance = rect.width * (0.55 + Math.random() * 0.45);
            spark.animate(
                [
                    {
                        transform: 'translate(0, 0) rotate(0) scale(1)',
                        opacity: 1,
                    },
                    {
                        transform: `translate(${Math.cos(angle) * distance}px, ${
                            Math.sin(angle) * distance + 40
                        }px) rotate(${Math.random() * 540}deg) scale(0.4)`,
                        opacity: 0,
                    },
                ],
                {
                    duration: 700 + Math.random() * 400,
                    easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)',
                }
            ).onfinish = () => spark.remove();
        }
    });
    // Reading progress along the top edge.
    if (document.getElementById('top')) {
        const progress = document.createElement('div');
        progress.className = 'scroll-progress';
        progress.setAttribute('aria-hidden', 'true');
        document.body.append(progress);
        let ticking = false;
        addEventListener(
            'scroll',
            () => {
                if (ticking) return;
                ticking = true;
                requestAnimationFrame(() => {
                    const max =
                        document.documentElement.scrollHeight - innerHeight;
                    progress.style.setProperty(
                        '--progress',
                        max > 0 ? scrollY / max : 0
                    );
                    ticking = false;
                });
            },
            { passive: true }
        );
    }
    // Content rises in as it scrolls into view, staggered within each group.
    if ('IntersectionObserver' in window) {
        const groups = [
            '.experience-strip',
            '.section-heading',
            '.work-card',
            '.about-copy > *',
            '.career-stats > div',
            '.career-entry',
            '.app-feature',
            '.small-app',
            '.app-more li',
            '.article',
            '.contact-heading',
            '.contact-bottom',
        ];
        // The observer's first report says what starts off screen, so nothing
        // is measured by hand. Forced layouts here used to delay first paint.
        const seen = new WeakSet();
        const revealer = new IntersectionObserver((entries) => {
            for (const { target, isIntersecting } of entries) {
                if (!seen.has(target)) {
                    seen.add(target);
                    if (isIntersecting) revealer.unobserve(target);
                    else target.classList.add('reveal');
                } else if (isIntersecting) {
                    target.classList.add('is-visible');
                    revealer.unobserve(target);
                }
            }
        });
        for (const selector of groups) {
            document.querySelectorAll(selector).forEach((element, index) => {
                element.style.setProperty(
                    '--reveal-delay',
                    `${(index % 4) * 0.08}s`
                );
                revealer.observe(element);
            });
        }
        // Stats count up the first time they appear.
        const counter = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;
                counter.unobserve(entry.target);
                const [, number, suffix] =
                    entry.target.textContent.match(/^(\d+)(.*)$/);
                const target = Number(number);
                const start = performance.now();
                const step = (now) => {
                    const t = Math.min(1, (now - start) / 1200);
                    const eased = 1 - Math.pow(1 - t, 3);
                    entry.target.textContent = `${Math.round(target * eased)}${suffix}`;
                    if (t < 1) requestAnimationFrame(step);
                };
                requestAnimationFrame(step);
            }
        });
        document
            .querySelectorAll('.career-stats dt, .ayer-stats dt')
            .forEach(
                (stat) => /^\d+/.test(stat.textContent) && counter.observe(stat)
            );
    }
    if (finePointer) {
        // Work cards tilt towards the cursor with a moving shine.
        document.querySelectorAll('.work-visual').forEach((visual) => {
            visual.addEventListener('pointermove', (event) => {
                const rect = visual.getBoundingClientRect();
                const x = (event.clientX - rect.left) / rect.width;
                const y = (event.clientY - rect.top) / rect.height;
                visual.classList.add('is-tilting');
                visual.style.setProperty('--tilt-x', `${(0.5 - y) * 10}deg`);
                visual.style.setProperty('--tilt-y', `${(x - 0.5) * 12}deg`);
                visual.style.setProperty('--shine-x', `${x * 100}%`);
                visual.style.setProperty('--shine-y', `${y * 100}%`);
            });
            visual.addEventListener('pointerleave', () => {
                visual.classList.remove('is-tilting');
                visual.style.setProperty('--tilt-x', '0deg');
                visual.style.setProperty('--tilt-y', '0deg');
            });
        });
        // The contact button leans towards the cursor.
        const contactArrow = document.querySelector('.contact-arrow');
        contactArrow?.addEventListener('pointermove', (event) => {
            const rect = contactArrow.getBoundingClientRect();
            contactArrow.style.setProperty(
                '--pull-x',
                `${(event.clientX - rect.left - rect.width / 2) * 0.25}px`
            );
            contactArrow.style.setProperty(
                '--pull-y',
                `${(event.clientY - rect.top - rect.height / 2) * 0.25}px`
            );
        });
    }
}
