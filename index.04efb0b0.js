function e(e,t,i,o){Object.defineProperty(e,t,{get:i,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=i.parcelRequire6264;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},i.parcelRequire6264=r),r.register("kyEFX",(function(t,i){var o,n;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return n}),(function(e){return n=e}));var r={};o=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)r[t[i]]=e[t[i]]},n=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r.register("J6iSG",(function(e,t){e.exports=new URL(r("kyEFX").resolve("8x8r3"),import.meta.url).toString()})),r.register("l3LCH",(function(e,t){e.exports=new URL(r("kyEFX").resolve("eQOo8"),import.meta.url).toString()})),r("kyEFX").register(JSON.parse('{"44K16":"index.04efb0b0.js","9OLtT":"football.c65e92de.gif","gdeZx":"videogames.4f50cca4.gif","ke4wf":"programming.06173f5e.gif","iYoko":"the-office.d88d06b8.gif","81agp":"gifs.368f629a.gif","fLRKz":"spotifyLogo.14e41c59.png","8E5iI":"amazon.d291f351.png","hrcXv":"king.ed0c9f08.png","elZDD":"futureLighthouse.c87ecce5.png","9jAXl":"gameloft.4332110a.png","kkBIy":"granada.ade6f720.png","f3tyI":"ea.9a9a0d0c.png","f4zoT":"carto.cae674aa.png","2B14n":"simfor.d18837c4.png","4eWCd":"complutense.cdfc289e.png","kABSu":"mediapost.32c3e1c3.png","lIraT":"uc3m.c39dff1b.png","8x8r3":"a.883816aa.mp3","eQOo8":"cookie.9f1e1a34.ogg"}'));var a;a=new URL(r("kyEFX").resolve("9OLtT"),import.meta.url).toString();var s;s=new URL(r("kyEFX").resolve("gdeZx"),import.meta.url).toString();var l;l=new URL(r("kyEFX").resolve("ke4wf"),import.meta.url).toString();var d;d=new URL(r("kyEFX").resolve("iYoko"),import.meta.url).toString();var c;c=new URL(r("kyEFX").resolve("81agp"),import.meta.url).toString();var g;g=new URL(r("kyEFX").resolve("fLRKz"),import.meta.url).toString();var m;m=new URL(r("kyEFX").resolve("8E5iI"),import.meta.url).toString();var f;f=new URL(r("kyEFX").resolve("hrcXv"),import.meta.url).toString();var u;u=new URL(r("kyEFX").resolve("elZDD"),import.meta.url).toString();var h;h=new URL(r("kyEFX").resolve("9jAXl"),import.meta.url).toString();var p;p=new URL(r("kyEFX").resolve("kkBIy"),import.meta.url).toString();var v;v=new URL(r("kyEFX").resolve("f3tyI"),import.meta.url).toString();var E;E=new URL(r("kyEFX").resolve("f4zoT"),import.meta.url).toString();var y;y=new URL(r("kyEFX").resolve("2B14n"),import.meta.url).toString();var w;w=new URL(r("kyEFX").resolve("4eWCd"),import.meta.url).toString();var S;S=new URL(r("kyEFX").resolve("kABSu"),import.meta.url).toString();var b;b=new URL(r("kyEFX").resolve("lIraT"),import.meta.url).toString();let k=-1,L="",R=[],_=[];const H=()=>{const e="Jaime Chapinal";k++,k>=e.length&&(k=0),(e=>{const t=document.querySelector("head > link[rel='icon']"),i=`<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${e}</text></svg>`;t.setAttribute("href",`data:image/svg+xml,${i}`)})(e[k])},I=()=>{[{id:"gif-football",gifUrl:t(a)},{id:"gif-videogames",gifUrl:t(s)},{id:"gif-programming",gifUrl:t(l)},{id:"gif-office",gifUrl:t(d)},{id:"gif-gifs",gifUrl:t(c)}].forEach((e=>{var t,i;t=e.id,i=e.gifUrl,tippy(`#${t}`,{content:"loading",animation:"scale",inertia:!0,arrow:!0,hideOnClick:!1,onShow(e){"object"!=typeof e.props.content&&fetch(i).then((e=>e.blob())).then((t=>{const i=URL.createObjectURL(t),o=new Image;o.width=200,o.height=200,o.style.display="block",o.src=i,e.setContent(o)})).catch((t=>{e.setContent(`Request failed. ${t}`)}))}})}))},F=e=>{A(e.currentTarget.id.replace("item-",""))},A=e=>{if(e===L)return;L=e;const i={spotify:{image:t(g),title:"Spotfiy",role:"Senior Software Engineer",tasks:"Web/Desktop app features development and Client Quality Platform tooling",projects:"Spotify Desktop app. Internal developer tools.",width:250,height:75},amazon:{image:t(m),title:"Amazon",role:"Software Development Engineer II",tasks:"European Customer Experience Engineer: API, backend, mobile, OPS (retail). Kindle Reader: Maintaining PC/Mac reader apps and developing new web reader",projects:"Price drops in cart, Amazon Kids, Kindle Reader for PC/Mac/Web]",width:250,height:75},king:{image:t(f),title:"King",role:"C++ Game Programmer",tasks:"Gameplay and tools programmer. New content team: New in-game features (blockers, map functionalities) and art/design production toolsets.",projects:"Candy Crush Saga",width:200,height:200},fl:{image:t(u),title:"Future Lighthouse",role:"VR Engineer",tasks:"VR programming, QA certification bug fixing and publishing.",projects:"Melita (Gear VR), In the Cloud: VR Afterlife (PS4)",width:250,height:176},gameloft:{image:t(h),title:"Gameloft",role:"UI Engineer",tasks:"Bug fixing (upd.6) and new Unity prototyping for an unannounced title.",projects:"Asphalt Extreme, Unannounced title",width:250,height:50},ea:{image:t(v),title:"Electronic Arts",role:"Software Engineer",tasks:"Frostbite, Unity3D, Ignite and internal tools. PC,PS4,X1,PS3,X360. Internationalization, localization and bug fixing",projects:"FIFA 17, Battlefield 1, Star Wars Battlefront, FIFA 16,Plants vs. Zombies: Heroes, Mirror’s Edge: Catalyst , Need for Speed",width:250,height:39},carto:{image:t(E),title:"Carto",role:"Developer",tasks:"Front-End Engineer. QA. Technical Support",projects:"",width:200,height:98},simfor:{image:t(y),title:"Simfor",role:"Programmer",tasks:"Virtual simulators: cranes, cars, buses, trucks and military vehicles. C++,(OSG), DirectX and Qt. Gameplay, tools and shaders",projects:"",width:200,height:82},complutense:{image:t(w),title:"University Complutense of Madrid",role:"Student",tasks:"Master in Video Games Development (Programming)",projects:"",width:175,height:198},granada:{image:t(p),title:"University of Granada",role:"Student",tasks:"Master in Software Development (Human – Computer Interaction)",projects:"",width:250,height:85},mediapost:{image:t(S),title:"Mediapost",role:"Junior programmer",tasks:"Marketing and logistic web apps. Technologies: ASP.NET, C#, Javascript, web services and thermal printers",projects:"",width:250,height:149},uc3m:{image:t(b),title:"University Carlos III of Madrid",role:"Student",tasks:"2007-2010: Technical Engineering in Computer Management, 2010-2011: Computer Engineering Degree",projects:"",width:175,height:175}}[e],o=document.getElementById("timelineLogo");o.src=i.image,o.alt="Alt text image url",o.width=i.width??100,o.height=i.height??100,"spotify"===e?o.classList.add("logoBorderRadius"):o.classList.remove("logoBorderRadius");const n=document.getElementById("timelineStageSelectedRole"),r=document.getElementById("timelineStageSelectedTasks"),a=document.getElementById("timelineStageSelectedProjects");n.innerHTML=i.role??"",r.innerHTML=i.tasks??"",a.innerHTML=i.projects??"";const s=document.getElementById("divSelectedStageTextContainer");var l;s.classList.remove("runAnimation"),s.offsetWidth,s.classList.add("runAnimation"),l=e,R.forEach((e=>{e.id===`item-${l}`?e.classList.add("timeline__selected"):e.classList.remove("timeline__selected")})),_.forEach((e=>{e.id===`timeline-${l}`?e.classList.add("timeline__active"):e.classList.remove("timeline__active")}))},U=e=>{new Audio(e).play()},x=()=>{U(r("J6iSG")),document.getElementById("bell").classList.remove("pulse-button"),document.getElementById("bell").offsetWidth,document.getElementById("bell").classList.remove("bell-animation"),document.getElementById("bell").offsetWidth,document.getElementById("bell").classList.add("bell-animation")},B=()=>{localStorage.setItem("cookies","closed"),document.getElementById("cookie-banner").classList.add("hidden"),U(r("l3LCH"))};class C{constructor(e){this.el=e,this.hover=!1,this.calculatePosition(),this.attachEventsListener()}attachEventsListener(){window.addEventListener("mousemove",(e=>this.onMouseMove(e))),window.addEventListener("resize",(e=>this.calculatePosition(e)))}calculatePosition(){gsap.set(this.el,{x:0,y:0,scale:1});const e=this.el.getBoundingClientRect();this.x=e.left+.5*e.width,this.y=e.top+.5*e.height,this.width=e.width,this.height=e.height}onMouseMove(e){let t=!1,i=this.hover?.7:.5,o=e.clientX-this.x,n=e.clientY-this.y;Math.sqrt(o*o+n*n)<this.width*i&&(t=!0,this.hover||(this.hover=!0),this.onHover(e.clientX,e.clientY)),!t&&this.hover&&(this.onLeave(),this.hover=!1)}onHover(e,t){gsap.to(this.el,{x:.4*(e-this.x),y:.4*(t-this.y),scale:1.15,ease:"power2.out",duration:.4}),this.el.style.zIndex=10}onLeave(){gsap.to(this.el,{x:0,y:0,scale:1,ease:"elastic.out(1.2, 0.4)",duration:.7}),this.el.style.zIndex=1}}window.onload=()=>{setInterval(H,1e3),document.getElementById("emojiHi").onmouseenter=()=>{const e=document.getElementById("emojiHi");e.classList.remove("wave"),e.offsetWidth,e.classList.add("wave")},"closed"!=localStorage.getItem("cookies")&&(document.getElementById("cookie-close").onclick=B,document.getElementById("cookie-banner").classList.remove("hidden")),(()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&e.target.classList.add("fadeIn")}))})),t=document.getElementsByClassName("transparent");for(let i of t)e.observe(i)})(),I(),["spotify","amazon","king","fl","gameloft","ea","carto","simfor","complutense","granada","mediapost","uc3m"].forEach((e=>{const t=document.getElementById(`item-${e}`);t.onclick=F,R.push(t),_.push(document.getElementById(`timeline-${e}`))})),A("spotify"),document.getElementById("bell").onclick=x,new C(document.getElementById("home-image-id"))};
//# sourceMappingURL=index.04efb0b0.js.map
