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

const initTimeline = () => {
    console.log('Init timeline');

    const desktopTimeline = document.getElementById('desktopTimeline');
    const mobileTimeline = document.getElementById('mobileTimeline');

    const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
    );
    // const vh = Math.max(
    //     document.documentElement.clientHeight || 0,
    //     window.innerHeight || 0
    // );

    desktopTimeline;
    const showDesktopTimeline = vw > 420;
    if (showDesktopTimeline) {
        desktopTimeline.classList.remove('hide');
        mobileTimeline.classList.add('hide');
    } else {
        desktopTimeline.classList.add('hide');
        mobileTimeline.classList.remove('hide');
    }
};

const initFirebase = () => {
    const firebaseConfig = {
        apiKey: 'AIzaSyDTpMSPHNLH1dXaYbqiBSrQoIIebGt0y08',
        authDomain: 'jaimechapinal-com.firebaseapp.com',
        projectId: 'jaimechapinal-com',
        storageBucket: 'jaimechapinal-com.appspot.com',
        messagingSenderId: '751701889580',
        appId: '1:751701889580:web:706a07b62751039d417789',
        measurementId: 'G-90MG26RGN0',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //firebase.analytics();
    db = firebase.firestore();
};

const resize = (e) => {
    initTimeline(e);
};

window.onload = () => {
    initFaviconTitle();
    initSaluteWave();
    initCookiesBanner();
    initTimeline();
    initFirebase();
    initTooltips();
};

window.onresize = (e) => {
    resize(e);
};
