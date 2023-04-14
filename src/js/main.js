import gifFootball from '../images/gifs/football.gif';
import gifVideogames from '../images/gifs/videogames.gif';
import gifProgramming from '../images/gifs/programming.gif';
import gifOffice from '../images/gifs/the-office.gif';
import gifGifs from '../images/gifs/gifs.gif';

import spotifyImage from '../images/webp/logos/spotifyLogo.webp';
import amazonImg from '../images/webp/logos/amazon.webp';
import imgKing from '../images/webp/logos/king.webp';
import imgFL from '../images/webp/logos/futureLighthouse.webp';
import imgGameloft from '../images/webp/logos/gameloft.webp';
import imgGranada from '../images/webp/logos/granada.webp';
import imgEA from '../images/webp/logos/ea.webp';
import imgCarto from '../images/webp/logos/carto.webp';
import imgSimfor from '../images/webp/logos/simfor.webp';
import imgComplutense from '../images/webp/logos/complutense.webp';
import imgMediapost from '../images/webp/logos/mediapost.webp';
import imgUC3M from '../images/webp/logos/uc3m.webp';

let g_indexTitle = -1;
let g_currentTimelineId = '';
let g_htmlTimelineIdsBall = [];
let g_htmlTimelineSpeechBubble = [];

const initSaluteWave = () => {
    document.getElementById('emojiHi').onmouseenter = () => {
        const emojiHi = document.getElementById('emojiHi');
        emojiHi.classList.remove('wave');
        void emojiHi.offsetWidth;
        emojiHi.classList.add('wave');
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

function updateSelectedItemAfter(selectedId) {
    g_htmlTimelineIdsBall.forEach((htmlElement) => {
        if (htmlElement.id === `item-${selectedId}`) {
            htmlElement.classList.add('timeline__selected');
        } else {
            htmlElement.classList.remove('timeline__selected');
        }
    });

    g_htmlTimelineSpeechBubble.forEach((htmlElement) => {
        if (htmlElement.id === `timeline-${selectedId}`) {
            htmlElement.classList.add('timeline__active');
        } else {
            htmlElement.classList.remove('timeline__active');
        }
    });
}

function clickOnTimeline(event) {
    updateTimeline(event.currentTarget.id.replace('item-', ''));
}
function updateTimeline(id) {
    if (id === g_currentTimelineId) {
        return;
    }

    g_currentTimelineId = id;
    const baseUrl = '../images/webp'; // Local
    // const baseUrl =
    //     'https://raw.githubusercontent.com/Xatpy/JaimeChapinal.com_v2/main/images/webp';
    // const baseUrl = 'https://jaimechapinal.com/images/webp/';
    const mapCareer = {
        spotify: {
            image: spotifyImage,
            title: 'Spotfiy',
            role: 'Software Engineer II',
            tasks: 'Release squad',
            projects: 'Spotify Desktop app. Internal developer tools.',
        },
        amazon: {
            image: amazonImg,
            title: 'Amazon',
            role: 'Software Development Engineer II',
            tasks: 'European Customer Experience Engineer: API, backend, mobile, OPS (retail). Kindle Reader: Maintaining PC/Mac reader apps and developing new web reader',
            projects:
                'Price drops in cart, Amazon Kids, Kindle Reader for PC/Mac/Web]',
        },
        king: {
            image: imgKing,
            title: 'King',
            role: 'C++ Game Programmer',
            tasks: 'Gameplay and tools programmer. New content team: New in-game features (blockers, map functionalities) and art/design production toolsets.',
            projects: 'Candy Crush Saga',
        },
        fl: {
            image: imgFL,
            title: 'Future Lighthouse',
            role: 'VR Engineer',
            tasks: 'VR programming, QA certification bug fixing and publishing.',
            projects: 'Melita (Gear VR), In the Cloud: VR Afterlife (PS4)',
        },
        gameloft: {
            image: imgGameloft,
            title: 'Gameloft',
            role: 'UI Engineer',
            tasks: 'Bug fixing (upd.6) and new Unity prototyping for an unannounced title.',
            projects: 'Asphalt Extreme, Unannounced title',
        },
        ea: {
            image: imgEA,
            title: 'Electronic Arts',
            role: 'Software Engineer',
            tasks: 'Frostbite, Unity3D, Ignite and internal tools. PC,PS4,X1,PS3,X360. Internationalization, localization and bug fixing',
            projects:
                'FIFA 17, Battlefield 1, Star Wars Battlefront, FIFA 16,Plants vs Zombies: Heroes, Mirror’s Edge: Catalyst , Need for Speed',
        },
        carto: {
            image: imgCarto,
            title: 'Carto',
            role: 'Developer',
            tasks: 'Front-End Engineer. QA. Technical Support',
            projects: '',
        },
        simfor: {
            image: imgSimfor,
            title: 'Simfor',
            role: 'Programmer',
            tasks: 'Virtual simulators: cranes, cars, buses, trucks and military vehicles. C++,(OSG), DirectX and Qt. Gameplay, tools and shaders',
            projects: '',
        },
        complutense: {
            image: imgComplutense,
            title: 'University Complutense of Madrid',
            role: 'Student',
            tasks: 'Master in Video Games Development (Programming)',
            projects: '',
        },
        granada: {
            image: imgGranada,
            title: 'University of Granada',
            role: 'Student',
            tasks: 'Master in Software Development (Human – Computer Interaction)',
            projects: '',
        },
        mediapost: {
            image: imgMediapost,
            title: 'Mediapost',
            role: 'Junior programmer',
            tasks: 'Marketing and logistic web apps. Technologies: ASP.NET, C#, Javascript, web services and thermal printers',
            projects: '',
        },
        uc3m: {
            image: imgUC3M,
            title: 'University Carlos III of Madrid',
            role: 'Student',
            tasks: '2007-2010: Technical Engineering in Computer Managements, 2010-2011: Computer Engineering Degree',
            projects: '',
        },
    };

    const foundCareer = mapCareer[id];

    const timelineLogo = document.getElementById('timelineLogo');
    timelineLogo.src = foundCareer.image;
    timelineLogo.alt = 'Alt text image url';
    if (id === 'spotify') {
        timelineLogo.classList.add('logoBorderRadius');
    } else {
        timelineLogo.classList.remove('logoBorderRadius');
    }
    const timelineStageSelectedRole = document.getElementById(
        'timelineStageSelectedRole'
    );
    const timelineStageSelectedTasks = document.getElementById(
        'timelineStageSelectedTasks'
    );
    const timelineStageSelectedProjects = document.getElementById(
        'timelineStageSelectedProjects'
    );
    timelineStageSelectedRole.innerHTML = foundCareer.role ?? '';
    timelineStageSelectedTasks.innerHTML = foundCareer.tasks ?? '';
    timelineStageSelectedProjects.innerHTML = foundCareer.projects ?? '';

    const divSelectedStageTextContainer = document.getElementById(
        'divSelectedStageTextContainer'
    );
    divSelectedStageTextContainer.classList.remove('runAnimation');
    void divSelectedStageTextContainer.offsetWidth;
    divSelectedStageTextContainer.classList.add('runAnimation');

    updateSelectedItemAfter(id);
}

const initTimeline = () => {
    const companiesId = [
        'spotify',
        'amazon',
        'king',
        'fl',
        'gameloft',
        'ea',
        'carto',
        'simfor',
        'complutense',
        'granada',
        'mediapost',
        'uc3m',
    ];
    companiesId.forEach((id) => {
        const timelineItem = document.getElementById(`item-${id}`);
        timelineItem.onclick = clickOnTimeline;
        g_htmlTimelineIdsBall.push(timelineItem);
        g_htmlTimelineSpeechBubble.push(
            document.getElementById(`timeline-${id}`)
        );
    });

    updateTimeline('spotify');
};

const playSound = (soundUrl) => {
    const audio = new Audio(soundUrl);
    audio.play();
};

const sendPing = () => {
    playSound('./sounds/a.mp3');
    document.getElementById('bell').classList.remove('pulse-button');
    void document.getElementById('bell').offsetWidth;
    document.getElementById('bell').classList.remove('bell-animation');
    void document.getElementById('bell').offsetWidth;
    document.getElementById('bell').classList.add('bell-animation');
};

const closeBanner = () => {
    localStorage.setItem('cookies', 'closed');
    document.getElementById('cookie-banner').classList.add('hidden');
    playSound('./sounds/cookie.ogg');
};

const initCookiesBanner = () => {
    if (localStorage.getItem('cookies') != 'closed') {
        document.getElementById('cookie-close').onclick = closeBanner;
        document.getElementById('cookie-banner').classList.remove('hidden');
    }
};

const initObserversFadeInAnimations = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((elem) => {
            if (elem.isIntersecting) {
                elem.target.classList.add('fadeIn');
            }
        });
    });

    const transparentNodes = document.getElementsByClassName('transparent');
    for (let elem of transparentNodes) {
        observer.observe(elem);
    }
};

window.onload = () => {
    initFaviconTitle();
    initSaluteWave();
    initCookiesBanner();
    initObserversFadeInAnimations();
    initTooltips();
    initTimeline();
};
