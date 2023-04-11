const initSaluteWave=()=>{document.getElementById("emojiHi").onmouseenter=()=>{const e=document.getElementById("emojiHi");e.classList.remove("wave"),e.offsetWidth,e.classList.add("wave")}};let gIndexTitle=-1;const setTitleFavicon=()=>{const e="Jaime Chapinal";gIndexTitle++,gIndexTitle>=e.length&&(gIndexTitle=0),(e=>{const t=document.querySelector("head > link[rel='icon']"),i=`<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${e}</text></svg>`;t.setAttribute("href",`data:image/svg+xml,${i}`)})(e[gIndexTitle])},initFaviconTitle=()=>{setInterval(setTitleFavicon,1e3)},initTooltips=()=>{[{id:"gif-football",gifUrl:"./images/gifs/football.gif"},{id:"gif-videogames",gifUrl:"./images/gifs/videogames.gif"},{id:"gif-programming",gifUrl:"./images/gifs/programming.gif"},{id:"gif-office",gifUrl:"./images/gifs/the-office.gif"},{id:"gif-gifs",gifUrl:"./images/gifs/gifs.gif"}].forEach((e=>{var t,i;t=e.id,i=e.gifUrl,tippy(`#${t}`,{content:"loading",animation:"scale",inertia:!0,arrow:!0,hideOnClick:!1,onShow(e){"object"!=typeof e.props.content&&fetch(i).then((e=>e.blob())).then((t=>{const i=URL.createObjectURL(t),o=new Image;o.width=200,o.height=200,o.style.display="block",o.src=i,e.setContent(o)})).catch((t=>{e.setContent(`Request failed. ${t}`)}))}})}))};function updateSelectedItemAfter(e){g_htmlTimelineIdsBall.forEach((t=>{t.id===`item-${e}`?t.classList.add("timeline__selected"):t.classList.remove("timeline__selected")})),g_htmlTimelineSpeechBubble.forEach((t=>{t.id===`timeline-${e}`?t.classList.add("timeline__active"):t.classList.remove("timeline__active")}))}let g_currentId="";function clickOnTimeline(e){if(e===g_currentId)return;g_currentId=e;const t="https://jaimechapinal.com/images/webp/",i={spotify:{imageUrl:t+"/logos/spotifyLogo.webp",title:"Spotfiy",role:"Software Engineer II",tasks:"Release squad",projects:"Spotify Desktop app. Internal developer tools."},amazon:{imageUrl:t+"/logos/amazon.webp",title:"Amazon",role:"Software Development Engineer II",tasks:"European Customer Experience Engineer: API, backend, mobile, OPS (retail). Kindle Reader: Maintaining PC/Mac reader apps and developing new web reader",projects:"Price drops in cart, Amazon Kids, Kindle Reader for PC/Mac/Web]"},king:{imageUrl:t+"/logos/king.webp",title:"King",role:"C++ Game Programmer",tasks:"Gameplay and tools programmer. New content team: New in-game features (blockers, map functionalities) and art/design production toolsets.",projects:"Candy Crush Saga"},fl:{imageUrl:t+"/logos/futureLighthouse.webp",title:"Future Lighthouse",role:"VR Engineer",tasks:"VR programming, QA certification bug fixing and publishing.",projects:"Melita (Gear VR), In the Cloud: VR Afterlife (PS4)"},gameloft:{imageUrl:t+"/logos/gameloft.webp",title:"Gameloft",role:"UI Engineer",tasks:"Bug fixing (upd.6) and new Unity prototyping for an unannounced title.",projects:"Asphalt Extreme, Unannounced title"},ea:{imageUrl:t+"/logos/ea.webp",title:"Electronic Arts",role:"Software Engineer",tasks:"Frostbite, Unity3D, Ignite and internal tools. PC,PS4,X1,PS3,X360. Internationalization, localization and bug fixing",projects:"FIFA 17, Battlefield 1, Star Wars Battlefront, FIFA 16,Plants vs Zombies: Heroes, Mirror’s Edge: Catalyst , Need for Speed"},carto:{imageUrl:t+"/logos/carto.webp",title:"Carto",role:"Developer",tasks:"Front-End Engineer. QA. Technical Support",projects:""},simfor:{imageUrl:t+"/logos/simfor.webp",title:"Simfor",role:"Programmer",tasks:"Virtual simulators: cranes, cars, buses, trucks and military vehicles. C++,(OSG), DirectX and Qt. Gameplay, tools and shaders",projects:""},complutense:{imageUrl:t+"/logos/complutense.webp",title:"University Complutense of Madrid",role:"Student",tasks:"Master in Video Games Development (Programming)",projects:""},granada:{imageUrl:t+"/logos/granada.webp",title:"University of Granada",role:"Student",tasks:"Master in Software Development (Human – Computer Interaction)",projects:""},mediapost:{imageUrl:t+"/logos/mediapost.webp",title:"Mediapost",role:"Junior programmer",tasks:"Marketing and logistic web apps. Technologies: ASP.NET, C#, Javascript, web services and thermal printers",projects:""},uc3m:{imageUrl:t+"/logos/uc3m.webp",title:"University Carlos III of Madrid",role:"Student",tasks:"2007-2010: Technical Engineering in Computer Managements, 2010-2011: Computer Engineering Degree",projects:""}}[e],o=document.getElementById("timelineLogo");o.src=i.imageUrl,o.alt="Alt text image url","spotify"===e?o.classList.add("logoBorderRadius"):o.classList.remove("logoBorderRadius");const n=document.getElementById("timelineStageSelectedRole"),a=document.getElementById("timelineStageSelectedTasks"),s=document.getElementById("timelineStageSelectedProjects");n.innerHTML=i.role??"",a.innerHTML=i.tasks??"",s.innerHTML=i.projects??"";const l=document.getElementById("divSelectedStageTextContainer");l.classList.remove("runAnimation"),l.offsetWidth,l.classList.add("runAnimation"),updateSelectedItemAfter(e)}let g_htmlTimelineIdsBall=[],g_htmlTimelineSpeechBubble=[];const initTimeline=()=>{clickOnTimeline("spotify");["spotify","amazon","king","fl","gameloft","ea","carto","simfor","complutense","granada","mediapost","uc3m"].forEach((e=>{g_htmlTimelineIdsBall.push(document.getElementById(`item-${e}`)),g_htmlTimelineSpeechBubble.push(document.getElementById(`timeline-${e}`))}))},playSound=e=>{new Audio(e).play()},sendPing=()=>{playSound("./sounds/a.mp3"),document.getElementById("bell").classList.remove("pulse-button"),document.getElementById("bell").offsetWidth,document.getElementById("bell").classList.remove("bell-animation"),document.getElementById("bell").offsetWidth,document.getElementById("bell").classList.add("bell-animation")},closeBanner=()=>{localStorage.setItem("cookies","closed"),document.getElementById("cookie-banner").classList.add("hidden"),playSound("./sounds/cookie.ogg")},initCookiesBanner=()=>{"closed"!=localStorage.getItem("cookies")&&(document.getElementById("cookie-close").onclick=closeBanner,document.getElementById("cookie-banner").classList.remove("hidden"))},initObserversFadeInAnimations=()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&e.target.classList.add("fadeIn")}))})),t=document.getElementsByClassName("transparent");for(let i of t)e.observe(i)};window.onload=()=>{setInterval(setTitleFavicon,1e3),document.getElementById("emojiHi").onmouseenter=()=>{const e=document.getElementById("emojiHi");e.classList.remove("wave"),e.offsetWidth,e.classList.add("wave")},"closed"!=localStorage.getItem("cookies")&&(document.getElementById("cookie-close").onclick=closeBanner,document.getElementById("cookie-banner").classList.remove("hidden")),initObserversFadeInAnimations(),initTooltips(),initTimeline()};
//# sourceMappingURL=index.5ff977cf.js.map
