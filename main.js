
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

let indexTitle = -1;
const setTitleFavicon = () => {
    const title = "Jaime Chapinal";
    indexTitle++;
    if (indexTitle >= title.length) {
        indexTitle = 0;
    }
    setFavicon(title[indexTitle]);
}

window.onload = (event) => {
    const myInterval = setInterval(setTitleFavicon, 1000);

    document.getElementById("emojiHi").onmouseenter = () => {
        const emojiHi = document.getElementById("emojiHi");
        emojiHi.classList.remove("wave");
        void emojiHi.offsetWidth;
        emojiHi.classList.add("wave");
    }
};