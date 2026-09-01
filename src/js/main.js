import gifFootball from '../images/gifs/football.gif';
import gifVideogames from '../images/gifs/videogames.gif';
import gifProgramming from '../images/gifs/programming.gif';
import gifOffice from '../images/gifs/the-office.gif';
import gifGifs from '../images/gifs/gifs.gif';

import spotifyImage from '../images/logos/spotify.png';
import amazonImg from '../images/logos/amazon.png';
import imgKing from '../images/logos/king.png';
import imgFL from '../images/logos/futureLighthouse.png';
import imgGameloft from '../images/logos/gameloft.png';
import imgGranada from '../images/logos/granada.png';
import imgEA from '../images/logos/ea.png';
import imgCarto from '../images/logos/carto.png';
import imgSimfor from '../images/logos/simfor.png';
import imgComplutense from '../images/logos/complutense.png';
import imgMediapost from '../images/logos/mediapost.png';
import imgUC3M from '../images/logos/uc3m.png';

let g_indexTitle = -1;
let g_currentTimelineId = '';
let g_htmlTimelineIdsBall = [];
let g_htmlTimelineSpeechBubble = [];

const careers = [
    {
        id: 'spotify',
        company: 'Spotify',
        dates: 'Sep 2021 - Present',
        color: 'color-spotify',
        image: spotifyImage,
        title: 'Spotify',
        role: 'Senior Software Engineer',
        tasks: 'Web/Desktop app features development and Client Quality Platform tooling',
        projects: 'Spotify Desktop app. Internal developer tools.',
        width: 250,
        height: 75,
    },
    {
        id: 'amazon',
        company: 'Amazon',
        dates: 'Aug 2019 - Sep 2021',
        color: 'color-amazon',
        image: amazonImg,
        title: 'Amazon',
        role: 'Software Development Engineer II',
        tasks: 'European Customer Experience Engineer: API, backend, mobile, OPS (retail). Kindle Reader: Maintaining PC/Mac reader apps and developing new web reader',
        projects: 'Price drops in cart, Amazon Kids, Kindle Reader for PC/Mac/Web]',
        width: 250,
        height: 75,
    },
    { id: 'king', company: 'King', dates: 'Jan 2018 - Jul 2019', color: 'color-king', image: imgKing, title: 'King', role: 'C++ Game Programmer', tasks: 'Gameplay and tools programmer. New content team: New in-game features (blockers, map functionalities) and art/design production toolsets.', projects: 'Candy Crush Saga', width: 200, height: 200 },
    { id: 'gameloft', company: 'Gameloft', dates: 'Mar 2017 - Oct 2018', color: 'color-gameloft', image: imgGameloft, title: 'Gameloft', role: 'UI Engineer', tasks: 'Bug fixing (upd.6) and new Unity prototyping for an unannounced title.', projects: 'Asphalt Extreme, Unannounced title', width: 250, height: 50 },
    { id: 'fl', company: 'Future Lighthouse', dates: 'Oct 2017 - Jan 2018', color: 'color-future-lighthouse', image: imgFL, title: 'Future Lighthouse', role: 'VR Engineer', tasks: 'VR programming, QA certification bug fixing and publishing.', projects: 'Melita (Gear VR), In the Cloud: VR Afterlife (PS4)', width: 250, height: 176 },
    { id: 'ea', company: 'Electronic Arts', dates: 'Apr 2015 - Mar 2017', color: 'color-EA', image: imgEA, title: 'Electronic Arts', role: 'Software Engineer', tasks: 'Frostbite, Unity3D, Ignite and internal tools. PC,PS4,X1,PS3,X360. Internationalization, localization and bug fixing', projects: 'FIFA 17, Battlefield 1, Star Wars Battlefront, FIFA 16,Plants vs. Zombies: Heroes, Mirror’s Edge: Catalyst , Need for Speed', width: 250, height: 39 },
    { id: 'carto', company: 'Carto', dates: 'Oct 2014 - Apr 2015', color: 'color-carto', image: imgCarto, title: 'Carto', role: 'Developer', tasks: 'Front-End Engineer. QA. Technical Support', projects: '', width: 200, height: 98 },
    { id: 'simfor', company: 'Simfor', dates: 'Aug 2012 - Sep 2014', color: 'color-simfor', image: imgSimfor, title: 'Simfor', role: 'Programmer', tasks: 'Virtual simulators: cranes, cars, buses, trucks and military vehicles. C++,(OSG), DirectX and Qt. Gameplay, tools and shaders', projects: '', width: 200, height: 82 },
    { id: 'complutense', company: '🎓Univ. Complutense - Master Videogames', dates: 'Aug 2012 - Sep 2013', color: 'color-complutense', image: imgComplutense, title: 'University Complutense of Madrid', role: 'Student', tasks: 'Master in Video Games Development (Programming)', projects: '', width: 175, height: 198 },
    { id: 'granada', company: '🎓Universidad Granada - Master Interaction', dates: 'Oct 2011 - Jun 2012', color: 'color-granada', side: 'timeline__item--left', image: imgGranada, title: 'University of Granada', role: 'Student', tasks: 'Master in Software Development (Human – Computer Interaction)', projects: '', width: 250, height: 85 },
    { id: 'mediapost', company: 'Mediapost', dates: 'Jul 2010 - Oct 2011', color: 'color-mediapost', side: 'timeline__item--left', image: imgMediapost, title: 'Mediapost', role: 'Junior programmer', tasks: 'Marketing and logistic web apps. Technologies: ASP.NET, C#, Javascript, web services and thermal printers', projects: '', width: 250, height: 149 },
    { id: 'uc3m', company: '🎓UC3M - Computer Science Degree', dates: 'Sep 2007 - Jun 2011', color: 'color-UC3M', side: 'timeline__item--left', image: imgUC3M, title: 'University Carlos III of Madrid', role: 'Student', tasks: '2007-2010: Technical Engineering in Computer Management, 2010-2011: Computer Engineering Degree', projects: '', width: 175, height: 175 },
];

const careerById = new Map(careers.map((career) => [career.id, career]));

const initSaluteWave = () => {
    document.getElementById('emojiHi').onmouseenter = () => {
        const emojiHi = document.getElementById('emojiHi');
        emojiHi.classList.remove('wave');
        void emojiHi.offsetWidth;
        emojiHi.classList.add('wave');
    };
};

const initScrollCue = () => {
    document.getElementById('scroll-cue').onclick = (event) => {
        event.preventDefault();
        document.getElementById('sectionB').scrollIntoView({ behavior: 'smooth' });
    };
};

const setTitleFavicon = () => {
    const setFavicon = (char) => {
        const linkForFavicon = document.querySelector(
            `head > link[rel='icon']`
        );

        const getSvgFavicon = (param) => {
            return `<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${param}</text></svg>`;
        };

        const svg = getSvgFavicon(char);
        linkForFavicon.setAttribute(`href`, `data:image/svg+xml,${svg}`);
    };

    const title = 'Jaime Chapinal';
    g_indexTitle++;
    if (g_indexTitle >= title.length) {
        g_indexTitle = 0;
    }
    setFavicon(title[g_indexTitle]);
};

const initFaviconTitle = () => {
    const myInterval = setInterval(setTitleFavicon, 1000);
};

const initTooltips = () => {
    const createTooltip = (id, url) => {
        tippy(`#${id}`, {
            content: 'loading',
            animation: 'scale',
            inertia: true,
            arrow: true,
            hideOnClick: false,
            trigger: 'mouseenter focus',
            onShow(instance) {
                if (typeof instance.props.content !== 'object') {
                    fetch(url)
                        .then((response) => response.blob())
                        .then((blob) => {
                            const url = URL.createObjectURL(blob);
                            const image = new Image();
                            image.width = 200;
                            image.height = 200;
                            image.style.display = 'block';
                            image.src = url;
                            instance.setContent(image);
                        })
                        .catch((error) => {
                            instance.setContent(`Request failed. ${error}`);
                        });
                }
            },
        });
    };

    const arraryGifInterests = [
        {
            id: 'gif-football',
            gifUrl: gifFootball,
        },
        {
            id: 'gif-videogames',
            gifUrl: gifVideogames,
        },
        {
            id: 'gif-programming',
            gifUrl: gifProgramming,
        },
        {
            id: 'gif-office',
            gifUrl: gifOffice,
        },
        {
            id: 'gif-gifs',
            gifUrl: gifGifs,
        },
    ];

    arraryGifInterests.forEach((n) => {
        createTooltip(n.id, n.gifUrl);
    });
};

const updateSelectedItemAfter = (selectedId) => {
    g_htmlTimelineIdsBall.forEach((htmlElement) => {
        if (htmlElement.id === `item-${selectedId}`) {
            htmlElement.classList.add('timeline__selected');
            htmlElement.setAttribute('aria-pressed', 'true');
        } else {
            htmlElement.classList.remove('timeline__selected');
            htmlElement.setAttribute('aria-pressed', 'false');
        }
    });

    g_htmlTimelineSpeechBubble.forEach((htmlElement) => {
        if (htmlElement.id === `timeline-${selectedId}`) {
            htmlElement.classList.add('timeline__active');
        } else {
            htmlElement.classList.remove('timeline__active');
        }
    });
};

const clickOnTimeline = (event) => {
    updateTimeline(event.currentTarget.id.replace('item-', ''));
};

const updateTimeline = (id) => {
    if (id === g_currentTimelineId) return;

    const foundCareer = careerById.get(id);
    if (!foundCareer) return;
    g_currentTimelineId = id;

    const timelineLogo = document.getElementById('timelineLogo');
    timelineLogo.src = foundCareer.image;
    timelineLogo.alt = `${foundCareer.title} logo`;
    timelineLogo.width = foundCareer.width ?? 100;
    timelineLogo.height = foundCareer.height ?? 100;
    void timelineLogo.offsetWidth;

    const timelineStageSelectedRole = document.getElementById(
        'timelineStageSelectedRole'
    );
    const timelineStageSelectedTasks = document.getElementById(
        'timelineStageSelectedTasks'
    );
    const timelineStageSelectedProjects = document.getElementById(
        'timelineStageSelectedProjects'
    );
    timelineStageSelectedRole.textContent = foundCareer.role ?? '';
    timelineStageSelectedTasks.textContent = foundCareer.tasks ?? '';
    timelineStageSelectedProjects.textContent = foundCareer.projects ?? '';

    const divSelectedStageTextContainer = document.getElementById(
        'divSelectedStageTextContainer'
    );
    divSelectedStageTextContainer.classList.remove('runAnimation');
    void divSelectedStageTextContainer.offsetWidth;
    divSelectedStageTextContainer.classList.add('runAnimation');

    updateSelectedItemAfter(id);
};

const renderTimeline = () => {
    const items = document.getElementById('timeline-items');
    const fragment = document.createDocumentFragment();

    careers.forEach((career) => {
        const item = document.createElement('button');
        item.type = 'button';
        item.id = `item-${career.id}`;
        item.className = `timeline__item ${career.side ?? ''}`;
        item.setAttribute('aria-pressed', 'false');
        item.setAttribute('aria-label', `${career.company}, ${career.dates}`);
        item.addEventListener('click', clickOnTimeline);

        const inner = document.createElement('span');
        inner.className = 'timeline__item__inner';
        const wrap = document.createElement('span');
        wrap.className = 'timeline__content__wrap';
        const content = document.createElement('span');
        content.id = `timeline-${career.id}`;
        content.className = `timeline__content ${career.color}`;
        const company = document.createElement('span');
        company.className = 'companyName';
        company.textContent = career.company;
        const dates = document.createElement('span');
        dates.className = 'date';
        dates.textContent = career.dates;

        content.append(dates, company);
        wrap.append(content);
        inner.append(wrap);
        item.append(inner);
        fragment.append(item);
    });

    items.replaceChildren(fragment);
};

const initTimeline = () => {
    renderTimeline();
    g_htmlTimelineIdsBall = careers.map((career) => document.getElementById(`item-${career.id}`));
    g_htmlTimelineSpeechBubble = careers.map((career) => document.getElementById(`timeline-${career.id}`));
    updateTimeline(careers[0].id);
};

const consentKey = 'analytics-consent';

const loadAnalytics = () => {
    if (window.analyticsLoaded) return;
    window.analyticsLoaded = true;
    window['ga-disable-G-S4WPTM8ZQ5'] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
        window.dataLayer.push(arguments);
    };
    window.gtag('consent', 'default', { analytics_storage: 'denied' });
    window.gtag('consent', 'update', { analytics_storage: 'granted' });
    window.gtag('js', new Date());
    window.gtag('config', 'G-S4WPTM8ZQ5');

    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-S4WPTM8ZQ5';
    document.head.append(gtagScript);

};

const disableAnalytics = () => {
    window['ga-disable-G-S4WPTM8ZQ5'] = true;
    if (window.gtag) {
        window.gtag('consent', 'update', { analytics_storage: 'denied' });
    }
    document.cookie
        .split(';')
        .map((cookie) => cookie.trim().split('=')[0])
        .filter((name) => name === '_gid' || name.startsWith('_ga') || name.startsWith('_gat'))
        .forEach((name) => {
        document.cookie = `${name}=; Max-Age=0; path=/`;
        document.cookie = `${name}=; Max-Age=0; path=/; domain=.jaimechapinal.com`;
        });
};

const setAnalyticsConsent = (consent) => {
    localStorage.setItem(consentKey, consent);
    document.getElementById('cookie-banner').classList.add('hidden');
    if (consent === 'accepted') {
        loadAnalytics();
    } else {
        disableAnalytics();
    }
};

const initCookiesBanner = () => {
    const consent = localStorage.getItem(consentKey);
    if (consent === 'accepted') loadAnalytics();
    if (!consent) {
        document.getElementById('cookie-banner').classList.remove('hidden');
    }
    document.getElementById('cookie-accept').onclick = () => setAnalyticsConsent('accepted');
    document.getElementById('cookie-reject').onclick = () => setAnalyticsConsent('rejected');
    document.getElementById('cookie-settings').onclick = () => {
        document.getElementById('cookie-banner').classList.remove('hidden');
        document.getElementById('cookie-accept').focus();
    };
};

const initObserversFadeInAnimations = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((elem) => {
            if (elem.isIntersecting) {
                elem.target.classList.add('fadeInSection');
            }
        });
    });

    const transparentNodes = document.getElementsByClassName('transparent');
    for (let elem of transparentNodes) {
        observer.observe(elem);
    }
};

class HoverButton {
    constructor(el) {
        this.el = el;
        this.hover = false;
        this.isDragging = false;
        this.lastPointerPosition = null;
        this.calculatePosition();
        this.attachEventsListener();
    }

    attachEventsListener() {
        window.addEventListener('mousemove', (e) => this.onMouseMove(e));
        window.addEventListener('resize', (e) => this.calculatePosition(e));
        this.el.addEventListener('pointerdown', (e) => this.onPointerDown(e));
        this.el.addEventListener('pointermove', (e) => this.onPointerMove(e));
        this.el.addEventListener('pointerup', (e) => this.onPointerUp(e));
        this.el.addEventListener('pointercancel', (e) => this.onPointerUp(e));
    }

    calculatePosition() {
        gsap.set(this.el, {
            x: 0,
            y: 0,
            scale: 1,
        });
        const box = this.el.getBoundingClientRect();
        this.x = box.left + box.width * 0.5;
        this.y = box.top + box.height * 0.5;
        this.width = box.width;
        this.height = box.height;
    }

    onMouseMove(e) {
        let hover = false;
        let hoverArea = this.hover ? 0.7 : 0.5;
        let x = e.clientX - this.x;
        let y = e.clientY - this.y;
        let distance = Math.sqrt(x * x + y * y);
        if (distance < this.width * hoverArea) {
            hover = true;
            if (!this.hover) {
                this.hover = true;
            }
            this.onHover(e.clientX, e.clientY);
        }

        if (!hover && this.hover) {
            this.onLeave();
            this.hover = false;
        }
    }

    onHover(x, y) {
        gsap.to(this.el, {
            x: (x - this.x) * 0.4,
            y: (y - this.y) * 0.4,
            scale: this.isDragging ? 1.2 : 1.15,
            ease: 'power2.out',
            duration: this.isDragging ? 0.2 : 0.4,
        });
        this.el.style.zIndex = 10;
    }

    onPointerDown(e) {
        if (e.button !== 0) return;

        e.preventDefault();
        this.isDragging = true;
        this.lastPointerPosition = { x: e.clientX, y: e.clientY };
        this.el.classList.add('is-dragging');
        this.el.setPointerCapture(e.pointerId);

        gsap.to(this.el, {
            scale: 1.2,
            rotation: 2,
            ease: 'power2.out',
            duration: 0.18,
        });
    }

    onPointerMove(e) {
        if (!this.isDragging) return;

        const deltaX = e.clientX - this.lastPointerPosition.x;
        this.lastPointerPosition = { x: e.clientX, y: e.clientY };
        this.onHover(e.clientX, e.clientY);

        // A small directional tilt makes the portrait feel responsive while
        // it is being dragged without changing its circular mask.
        gsap.to(this.el, {
            rotation: Math.max(-5, Math.min(5, deltaX * 0.35)),
            ease: 'power2.out',
            duration: 0.16,
            overwrite: 'auto',
        });
    }

    onPointerUp(e) {
        if (!this.isDragging) return;

        this.isDragging = false;
        this.lastPointerPosition = null;
        this.el.classList.remove('is-dragging');
        if (this.el.hasPointerCapture(e.pointerId)) {
            this.el.releasePointerCapture(e.pointerId);
        }

        gsap.to(this.el, {
            rotation: 0,
            scale: this.hover ? 1.15 : 1,
            ease: 'elastic.out(1.2, 0.4)',
            duration: 0.5,
        });
    }

    onLeave() {
        gsap.to(this.el, {
            x: 0,
            y: 0,
            scale: 1,
            rotation: 0,
            ease: 'elastic.out(1.2, 0.4)',
            duration: 0.7,
        });
        this.el.style.zIndex = 1;
    }
}

const initHoverButton = () => {
    new HoverButton(document.getElementById('home-image-id'));
};

window.onload = () => {
    initFaviconTitle();
    initSaluteWave();
    initScrollCue();
    initCookiesBanner();
    initObserversFadeInAnimations();
    initTooltips();
    initTimeline();
    initHoverButton();
};
