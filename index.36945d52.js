!function(){function e(e,t,i,n){Object.defineProperty(e,t,{get:i,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=i.parcelRequire48d6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},i.parcelRequire48d6=r),r.register("iE7OH",(function(t,i){var n,o;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var r={};n=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)r[t[i]]=e[t[i]]},o=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r.register("aNJCr",(function(t,i){var n;e(t.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var o={};function r(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return r(e[2])}return"/"}(),o[e]=t),t}})),r.register("gmsDx",(function(e,t){e.exports=r("aNJCr").getBundleURL("itQ15")+r("iE7OH").resolve("hQNJY")})),r.register("7nZk9",(function(e,t){e.exports=r("aNJCr").getBundleURL("itQ15")+r("iE7OH").resolve("2LXlC")})),r("iE7OH").register(JSON.parse('{"itQ15":"index.36945d52.js","k9onC":"football.c65e92de.gif","fwUVu":"videogames.4f50cca4.gif","83qCm":"programming.06173f5e.gif","dq8K3":"the-office.d88d06b8.gif","dRnUc":"gifs.368f629a.gif","50ggS":"spotify.14de731a.png","kaBNe":"amazon.d291f351.png","4EeoT":"king.ed0c9f08.png","4yc9P":"futureLighthouse.c87ecce5.png","d6pwT":"gameloft.4332110a.png","heeZ8":"granada.ade6f720.png","iL3G9":"ea.9a9a0d0c.png","5vRE3":"carto.cae674aa.png","2bmOF":"simfor.d18837c4.png","ewEDx":"complutense.cdfc289e.png","7cqnH":"mediapost.32c3e1c3.png","cXDYd":"uc3m.c39dff1b.png","hQNJY":"a.883816aa.mp3","2LXlC":"cookie.9f1e1a34.ogg"}'));var a;a=r("aNJCr").getBundleURL("itQ15")+r("iE7OH").resolve("k9onC");var s;s=r("aNJCr").getBundleURL("itQ15")+r("iE7OH").resolve("fwUVu");var l;l=r("aNJCr").getBundleURL("itQ15")+r("iE7OH").resolve("83qCm");var d;d=r("aNJCr").getBundleURL("itQ15")+r("iE7OH").resolve("dq8K3");var c;c=r("aNJCr").getBundleURL("itQ15")+r("iE7OH").resolve("dRnUc");var g;g=r("aNJCr").getBundleURL("itQ15")+r("iE7OH").resolve("50ggS");var m;m=r("aNJCr").getBundleURL("itQ15")+r("iE7OH").resolve("kaBNe");var f;f=r("aNJCr").getBundleURL("itQ15")+r("iE7OH").resolve("4EeoT");var u;u=r("aNJCr").getBundleURL("itQ15")+r("iE7OH").resolve("4yc9P");var h;h=r("aNJCr").getBundleURL("itQ15")+r("iE7OH").resolve("d6pwT");var p;p=r("aNJCr").getBundleURL("itQ15")+r("iE7OH").resolve("heeZ8");var v;v=r("aNJCr").getBundleURL("itQ15")+r("iE7OH").resolve("iL3G9");var E;E=r("aNJCr").getBundleURL("itQ15")+r("iE7OH").resolve("5vRE3");var H;H=r("aNJCr").getBundleURL("itQ15")+r("iE7OH").resolve("2bmOF");var b;b=r("aNJCr").getBundleURL("itQ15")+r("iE7OH").resolve("ewEDx");var w;w=r("aNJCr").getBundleURL("itQ15")+r("iE7OH").resolve("7cqnH");var y;y=r("aNJCr").getBundleURL("itQ15")+r("iE7OH").resolve("cXDYd");let R=-1,S="",C=[],L=[];const _=()=>{const e="Jaime Chapinal";R++,R>=e.length&&(R=0),(e=>{const t=document.querySelector("head > link[rel='icon']"),i=`<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${e}</text></svg>`;t.setAttribute("href",`data:image/svg+xml,${i}`)})(e[R])},B=()=>{[{id:"gif-football",gifUrl:t(a)},{id:"gif-videogames",gifUrl:t(s)},{id:"gif-programming",gifUrl:t(l)},{id:"gif-office",gifUrl:t(d)},{id:"gif-gifs",gifUrl:t(c)}].forEach((e=>{var t,i;t=e.id,i=e.gifUrl,tippy(`#${t}`,{content:"loading",animation:"scale",inertia:!0,arrow:!0,hideOnClick:!1,onShow(e){"object"!=typeof e.props.content&&fetch(i).then((e=>e.blob())).then((t=>{const i=URL.createObjectURL(t),n=new Image;n.width=200,n.height=200,n.style.display="block",n.src=i,e.setContent(n)})).catch((t=>{e.setContent(`Request failed. ${t}`)}))}})}))},k=e=>{I(e.currentTarget.id.replace("item-",""))},I=e=>{if(e===S)return;S=e;const i={spotify:{image:t(g),title:"Spotfiy",role:"Senior Software Engineer",tasks:"Web/Desktop app features development and Client Quality Platform tooling",projects:"Spotify Desktop app. Internal developer tools.",width:250,height:75},amazon:{image:t(m),title:"Amazon",role:"Software Development Engineer II",tasks:"European Customer Experience Engineer: API, backend, mobile, OPS (retail). Kindle Reader: Maintaining PC/Mac reader apps and developing new web reader",projects:"Price drops in cart, Amazon Kids, Kindle Reader for PC/Mac/Web]",width:250,height:75},king:{image:t(f),title:"King",role:"C++ Game Programmer",tasks:"Gameplay and tools programmer. New content team: New in-game features (blockers, map functionalities) and art/design production toolsets.",projects:"Candy Crush Saga",width:200,height:200},fl:{image:t(u),title:"Future Lighthouse",role:"VR Engineer",tasks:"VR programming, QA certification bug fixing and publishing.",projects:"Melita (Gear VR), In the Cloud: VR Afterlife (PS4)",width:250,height:176},gameloft:{image:t(h),title:"Gameloft",role:"UI Engineer",tasks:"Bug fixing (upd.6) and new Unity prototyping for an unannounced title.",projects:"Asphalt Extreme, Unannounced title",width:250,height:50},ea:{image:t(v),title:"Electronic Arts",role:"Software Engineer",tasks:"Frostbite, Unity3D, Ignite and internal tools. PC,PS4,X1,PS3,X360. Internationalization, localization and bug fixing",projects:"FIFA 17, Battlefield 1, Star Wars Battlefront, FIFA 16,Plants vs. Zombies: Heroes, Mirror’s Edge: Catalyst , Need for Speed",width:250,height:39},carto:{image:t(E),title:"Carto",role:"Developer",tasks:"Front-End Engineer. QA. Technical Support",projects:"",width:200,height:98},simfor:{image:t(H),title:"Simfor",role:"Programmer",tasks:"Virtual simulators: cranes, cars, buses, trucks and military vehicles. C++,(OSG), DirectX and Qt. Gameplay, tools and shaders",projects:"",width:200,height:82},complutense:{image:t(b),title:"University Complutense of Madrid",role:"Student",tasks:"Master in Video Games Development (Programming)",projects:"",width:175,height:198},granada:{image:t(p),title:"University of Granada",role:"Student",tasks:"Master in Software Development (Human – Computer Interaction)",projects:"",width:250,height:85},mediapost:{image:t(w),title:"Mediapost",role:"Junior programmer",tasks:"Marketing and logistic web apps. Technologies: ASP.NET, C#, Javascript, web services and thermal printers",projects:"",width:250,height:149},uc3m:{image:t(y),title:"University Carlos III of Madrid",role:"Student",tasks:"2007-2010: Technical Engineering in Computer Management, 2010-2011: Computer Engineering Degree",projects:"",width:175,height:175}}[e],n=document.getElementById("timelineLogo");n.src=i.image,n.alt="Alt text image url",n.width=i.width??100,n.height=i.height??100,n.offsetWidth;const o=document.getElementById("timelineStageSelectedRole"),r=document.getElementById("timelineStageSelectedTasks"),a=document.getElementById("timelineStageSelectedProjects");o.innerHTML=i.role??"",r.innerHTML=i.tasks??"",a.innerHTML=i.projects??"";const s=document.getElementById("divSelectedStageTextContainer");var l;s.classList.remove("runAnimation"),s.offsetWidth,s.classList.add("runAnimation"),l=e,C.forEach((e=>{e.id===`item-${l}`?e.classList.add("timeline__selected"):e.classList.remove("timeline__selected")})),L.forEach((e=>{e.id===`timeline-${l}`?e.classList.add("timeline__active"):e.classList.remove("timeline__active")}))},U=e=>{new Audio(e).play()},x=()=>{U(r("gmsDx")),document.getElementById("bell").classList.remove("pulse-button"),document.getElementById("bell").offsetWidth,document.getElementById("bell").classList.remove("bell-animation"),document.getElementById("bell").offsetWidth,document.getElementById("bell").classList.add("bell-animation")},A=()=>{localStorage.setItem("cookies","closed"),document.getElementById("cookie-banner").classList.add("hidden"),U(r("7nZk9"))};class O{constructor(e){this.el=e,this.hover=!1,this.calculatePosition(),this.attachEventsListener()}attachEventsListener(){window.addEventListener("mousemove",(e=>this.onMouseMove(e))),window.addEventListener("resize",(e=>this.calculatePosition(e)))}calculatePosition(){gsap.set(this.el,{x:0,y:0,scale:1});const e=this.el.getBoundingClientRect();this.x=e.left+.5*e.width,this.y=e.top+.5*e.height,this.width=e.width,this.height=e.height}onMouseMove(e){let t=!1,i=this.hover?.7:.5,n=e.clientX-this.x,o=e.clientY-this.y;Math.sqrt(n*n+o*o)<this.width*i&&(t=!0,this.hover||(this.hover=!0),this.onHover(e.clientX,e.clientY)),!t&&this.hover&&(this.onLeave(),this.hover=!1)}onHover(e,t){gsap.to(this.el,{x:.4*(e-this.x),y:.4*(t-this.y),scale:1.15,ease:"power2.out",duration:.4}),this.el.style.zIndex=10}onLeave(){gsap.to(this.el,{x:0,y:0,scale:1,ease:"elastic.out(1.2, 0.4)",duration:.7}),this.el.style.zIndex=1}}window.onload=()=>{setInterval(_,1e3),document.getElementById("emojiHi").onmouseenter=()=>{const e=document.getElementById("emojiHi");e.classList.remove("wave"),e.offsetWidth,e.classList.add("wave")},"closed"!=localStorage.getItem("cookies")&&(document.getElementById("cookie-close").onclick=A,document.getElementById("cookie-banner").classList.remove("hidden")),(()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&e.target.classList.add("fadeInSection")}))})),t=document.getElementsByClassName("transparent");for(let i of t)e.observe(i)})(),B(),["spotify","amazon","king","fl","gameloft","ea","carto","simfor","complutense","granada","mediapost","uc3m"].forEach((e=>{const t=document.getElementById(`item-${e}`);t.onclick=k,C.push(t),L.push(document.getElementById(`timeline-${e}`))})),I("spotify"),document.getElementById("bell").onclick=x,new O(document.getElementById("home-image-id"))}}();
//# sourceMappingURL=index.36945d52.js.map
