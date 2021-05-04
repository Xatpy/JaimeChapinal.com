
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

tippy('#myButton', {
    //content: '<img src=""></img>',
    content: "loading",
    animation:'scale',
    inertia: true,
    arrow: true,
    onShow(instance) {
        if (typeof(instance.props.content) !== "object") {
            fetch('https://media2.giphy.com/media/134DVXcD94sOWI/giphy.gif?cid=ecf05e478poqrhjdn7d2e697wj4eqgc0thpbd36d05nkgdlq&rid=giphy.gif')
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


window.onload = (event) => {
    const myInterval = setInterval(setTitleFavicon, 1000);

    document.getElementById("emojiHi").onmouseenter = () => {
        const emojiHi = document.getElementById("emojiHi");
        emojiHi.classList.remove("wave");
        void emojiHi.offsetWidth;
        emojiHi.classList.add("wave");
    }
};