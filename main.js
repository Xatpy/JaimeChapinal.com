const initSaluteWave = () => {
    document.getElementById("emojiHi").onmouseenter = () => {
        const emojiHi = document.getElementById("emojiHi");
        emojiHi.classList.remove("wave");
        void emojiHi.offsetWidth;
        emojiHi.classList.add("wave");
    }
}

let gIndexTitle = -1;
const setTitleFavicon = () => {

    const setFavicon = (char) => {
        const linkForFavicon = document.querySelector(
            `head > link[rel='icon']`
        );

        const getSvgFavicon = (param) => {
            return `<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${param}</text></svg>`;
        }

        const svg = getSvgFavicon(char);
        linkForFavicon.setAttribute(`href`, `data:image/svg+xml,${svg}`);
    }

    const title = "Jaime Chapinal";
    gIndexTitle++;
    if (gIndexTitle >= title.length) {
        gIndexTitle = 0;
    }
    setFavicon(title[gIndexTitle]);
}

const initFaviconTitle = () => {
    const myInterval = setInterval(setTitleFavicon, 1000);
}

const initTooltips = () => {

    const createTooltip = (id, url) => {
        tippy(`#${id}`, {
            content: "loading",
            animation:'scale',
            inertia: true,
            arrow: true,
            onShow(instance) {
                if (typeof(instance.props.content) !== "object") {
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
                }
          });
    }

    const arraryGifInterests = [
        {
            id: "gif-football",
            gifUrl: "https://i.gifer.com/AV3b.gif"
        },
        {
            id: "gif-videogames",
            gifUrl: "https://media0.giphy.com/media/H4nUqdNomOWzJfoIa6/giphy.gif"
        },
        {
            id: "gif-programming",
            gifUrl: "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif"
        },
        {
            id: "gif-office",
            gifUrl: "https://media2.giphy.com/media/134DVXcD94sOWI/giphy.gif?cid=ecf05e478poqrhjdn7d2e697wj4eqgc0thpbd36d05nkgdlq&rid=giphy.gif"
        },
        {
            id: "gif-gifs",
            gifUrl: "https://media.giphy.com/media/3o6gbbuLW76jkt8vIc/giphy.gif"
        },
    ];

    arraryGifInterests.forEach(n => {
        createTooltip(n.id, n.gifUrl);
    });
}

window.onload = (event) => {
    initFaviconTitle();
    initSaluteWave();
    initTooltips();
};