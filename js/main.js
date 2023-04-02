const USE_SW = false;
if (USE_SW && 'serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./sw.js')
        .then((reg) => {
            console.log('Service worker registed', reg);
        })
        .catch((err) => {
            console.log('Errors registering service worker', err);
        });
}

const initSaluteWave = () => {
    document.getElementById('emojiHi').onmouseenter = () => {
        const emojiHi = document.getElementById('emojiHi');
        emojiHi.classList.remove('wave');
        void emojiHi.offsetWidth;
        emojiHi.classList.add('wave');
    };
};

let gIndexTitle = -1;
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
    gIndexTitle++;
    if (gIndexTitle >= title.length) {
        gIndexTitle = 0;
    }
    setFavicon(title[gIndexTitle]);
};

const initFaviconTitle = () => {
    const myInterval = setInterval(setTitleFavicon, 1000);
};

// TODO: Fix error of Tippy if trying to set the tooltip but the image has
// not been loaded yet
const initTooltips = () => {
    const createTooltip = (id, url) => {
        tippy(`#${id}`, {
            content: 'loading',
            animation: 'scale',
            inertia: true,
            arrow: true,
            onShow(instance) {
                if (typeof instance.props.content !== 'object') {
                    fetch(url)
                        .then((response) => response.blob())
                        .then((blob) => {
                            // Convert the blob into a URL
                            const url = URL.createObjectURL(blob);
                            // Create an image
                            const image = new Image();
                            image.width = 200;
                            image.height = 200;
                            image.style.display = 'block';
                            image.src = url;
                            // Update the tippy content with the image
                            instance.setContent(image);
                        })
                        .catch((error) => {
                            // Fallback if the network request failed
                            instance.setContent(`Request failed. ${error}`);
                        });
                }
            },
        });
    };

    const arraryGifInterests = [
        {
            id: 'gif-football',
            gifUrl: './images/gifs/football.gif',
        },
        {
            id: 'gif-videogames',
            gifUrl: './images/gifs/videogames.gif',
        },
        {
            id: 'gif-programming',
            gifUrl: './images/gifs/programming.gif',
        },
        {
            id: 'gif-office',
            gifUrl: './images/gifs/the-office.gif',
        },
        {
            id: 'gif-gifs',
            gifUrl: './images/gifs/gifs.gif',
        },
    ];

    arraryGifInterests.forEach((n) => {
        createTooltip(n.id, n.gifUrl);
    });
};

function clickOnTimeline(id) {
    const mapCareer = {
        spotify: {
            imageUrl: '../images/logos/spotify.png',
            title: 'Spotfiy',
            role: 'Software Engineer II',
            tasks: 'Release squad',
            projects: 'Spotify Desktop app. Internal developer tools.',
        },
        amazon: {
            imageUrl: '../images/logos/amazon.png',
            title: 'Amazon',
            role: 'Software Development Engineer II',
            tasks: 'European Customer Experience Engineer: API, backend, mobile, OPS (retail). Kindle Reader: Maintaining PC/Mac reader apps and developing new web reader',
            projects:
                'Price drops in cart, Amazon Kids, Kindle Reader for PC/Mac/Web]',
        },
        king: {
            imageUrl: '../images/logos/king.png',
            title: 'King',
            role: 'C++ Game Programmer',
            tasks: 'Gameplay and tools programmer. New content team: New in-game features (blockers, map functionalities) and art/design production toolsets.',
            projects: 'Candy Crush Saga',
        },
        fl: {
            imageUrl: '../images/logos/futureLighthouse.png',
            title: 'Future Lighthouse',
            role: 'VR Engineer',
            tasks: 'VR programming, QA certification bug fixing and publishing.',
            projects: 'Melita (Gear VR), In the Cloud: VR Afterlife (PS4)',
        },
        gameloft: {
            imageUrl: '../images/logos/gameloft.png',
            title: 'Gameloft',
            role: 'UI Engineer',
            tasks: 'Bug fixing (upd.6) and new Unity prototyping for an unannounced title.',
            projects: 'Asphalt Extreme, Unannounced title',
        },
        ea: {
            imageUrl: '../images/logos/ea.png',
            title: 'Electronic Arts',
            role: 'Software Engineer',
            tasks: 'Frostbite, Unity3D, Ignite and internal tools. PC,PS4,X1,PS3,X360. Internationalization, localization and bug fixing',
            projects:
                'FIFA 17, Battlefield 1, Star Wars Battlefront, FIFA 16,Plants vs Zombies: Heroes, Mirror’s Edge: Catalyst , Need for Speed',
        },
        carto: {
            imageUrl: '../images/logos/carto.png',
            title: 'Carto',
            role: 'Developer',
            tasks: 'Front-End Engineer. QA. Technical Support',
            projects: '',
        },
        simfor: {
            imageUrl: '../images/logos/simfor.png',
            title: 'Simfor',
            role: 'Programmer',
            tasks: 'Virtual simulators: cranes, cars, buses, trucks and military vehicles. C++,(OSG), DirectX and Qt. Gameplay, tools and shaders',
            projects: '',
        },
        complutense: {
            imageUrl: '../images/logos/complutense.png',
            title: 'University Complutense of Madrid',
            role: 'Student',
            tasks: 'Master in Video Games Development (Programming)',
            projects: '',
        },
        granada: {
            imageUrl: '../images/logos/granada.png',
            title: 'University of Granada',
            role: 'Student',
            tasks: 'Master in Software Development (Human – Computer Interaction)',
            projects: '',
        },
        mediapost: {
            imageUrl: '../images/logos/mediapost.png',
            title: 'Mediapost',
            role: 'Junior programmer',
            tasks: 'Marketing and logistic web apps. Technologies: ASP.NET, C#, Javascript, web services and thermal printers',
            projects: '',
        },
        uc3m: {
            imageUrl: '../images/logos/uc3m.png',
            title: 'University Carlos III of Madrid',
            role: 'Student',
            tasks: '2007-2010: Technical Engineering in Computer Managements, 2010-2011: Computer Engineering Degree',
            projects: '',
        },
    };

    const foundCareer = mapCareer[id];

    const timelineLogo = document.getElementById('timelineLogo');
    // const timelineStageSelectedTitle = document.getElementById(
    //     'timelineStageSelectedTitle'
    // );
    const timelineStageSelectedRole = document.getElementById(
        'timelineStageSelectedRole'
    );
    const timelineStageSelectedTasks = document.getElementById(
        'timelineStageSelectedTasks'
    );
    const timelineStageSelectedProjects = document.getElementById(
        'timelineStageSelectedProjects'
    );
    timelineLogo.src = foundCareer.imageUrl;
    // timelineStageSelectedTitle.innerHTML = foundCareer.title ?? '';
    timelineStageSelectedRole.innerHTML = foundCareer.role ?? '';
    timelineStageSelectedTasks.innerHTML = foundCareer.tasks ?? '';
    timelineStageSelectedProjects.innerHTML = foundCareer.projects ?? '';

    const divSelectedStageTextContainer = document.getElementById(
        'divSelectedStageTextContainer'
    );
    divSelectedStageTextContainer.classList.remove('runAnimation');
    void divSelectedStageTextContainer.offsetWidth;
    divSelectedStageTextContainer.classList.add('runAnimation');
}

const initTimeline = () => {
    clickOnTimeline('spotify');
};

const sendPing = () => {
    document.getElementById('bell').classList.remove('pulse-button');
    void document.getElementById('bell').offsetWidth;
    document.getElementById('bell').classList.remove('bell-animation');
    void document.getElementById('bell').offsetWidth;
    document.getElementById('bell').classList.add('bell-animation');
    db.collection('pings')
        .add({
            userAgent: navigator.userAgent,
            time: new Date(),
        })
        .then(() => {
            console.log('Ping sent');
        })
        .catch((error) => {
            console.error('Error writing document: ', error);
        });
};

const initCookiesBanner = () => {
    if (localStorage.getItem('cookies') != 'closed') {
        document.getElementById('cookie-close').onclick = closeBanner;
        document.getElementById('cookie-banner').classList.remove('hidden');
        document.getElementById('cookie-banner').classList.add('fade-in');
    } else {
        document.getElementById('cookie-banner').classList.remove('fade-in');
    }
};

const closeBanner = () => {
    localStorage.setItem('cookies', 'closed');
    document.getElementById('cookie-banner').classList.remove('fade-in');
    document.getElementById('cookie-banner').classList.add('hidden');
    const audio = new Audio('./images/cookie.ogg');
    audio.play();
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
