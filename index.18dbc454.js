// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9tRox":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1SICI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _footballGif = require("../images/gifs/football.gif");
var _footballGifDefault = parcelHelpers.interopDefault(_footballGif);
var _videogamesGif = require("../images/gifs/videogames.gif");
var _videogamesGifDefault = parcelHelpers.interopDefault(_videogamesGif);
var _programmingGif = require("../images/gifs/programming.gif");
var _programmingGifDefault = parcelHelpers.interopDefault(_programmingGif);
var _theOfficeGif = require("../images/gifs/the-office.gif");
var _theOfficeGifDefault = parcelHelpers.interopDefault(_theOfficeGif);
var _gifsGif = require("../images/gifs/gifs.gif");
var _gifsGifDefault = parcelHelpers.interopDefault(_gifsGif);
var _spotifyLogoWebp = require("../images/webp/logos/spotifyLogo.webp");
var _spotifyLogoWebpDefault = parcelHelpers.interopDefault(_spotifyLogoWebp);
var _amazonWebp = require("../images/webp/logos/amazon.webp");
var _amazonWebpDefault = parcelHelpers.interopDefault(_amazonWebp);
var _kingWebp = require("../images/webp/logos/king.webp");
var _kingWebpDefault = parcelHelpers.interopDefault(_kingWebp);
var _futureLighthouseWebp = require("../images/webp/logos/futureLighthouse.webp");
var _futureLighthouseWebpDefault = parcelHelpers.interopDefault(_futureLighthouseWebp);
var _gameloftWebp = require("../images/webp/logos/gameloft.webp");
var _gameloftWebpDefault = parcelHelpers.interopDefault(_gameloftWebp);
var _granadaWebp = require("../images/webp/logos/granada.webp");
var _granadaWebpDefault = parcelHelpers.interopDefault(_granadaWebp);
var _eaWebp = require("../images/webp/logos/ea.webp");
var _eaWebpDefault = parcelHelpers.interopDefault(_eaWebp);
var _cartoWebp = require("../images/webp/logos/carto.webp");
var _cartoWebpDefault = parcelHelpers.interopDefault(_cartoWebp);
var _simforWebp = require("../images/webp/logos/simfor.webp");
var _simforWebpDefault = parcelHelpers.interopDefault(_simforWebp);
var _complutenseWebp = require("../images/webp/logos/complutense.webp");
var _complutenseWebpDefault = parcelHelpers.interopDefault(_complutenseWebp);
var _mediapostWebp = require("../images/webp/logos/mediapost.webp");
var _mediapostWebpDefault = parcelHelpers.interopDefault(_mediapostWebp);
var _uc3MWebp = require("../images/webp/logos/uc3m.webp");
var _uc3MWebpDefault = parcelHelpers.interopDefault(_uc3MWebp);
let g_indexTitle = -1;
let g_currentTimelineId = "";
let g_htmlTimelineIdsBall = [];
let g_htmlTimelineSpeechBubble = [];
const initSaluteWave = ()=>{
    document.getElementById("emojiHi").onmouseenter = ()=>{
        const emojiHi = document.getElementById("emojiHi");
        emojiHi.classList.remove("wave");
        emojiHi.offsetWidth;
        emojiHi.classList.add("wave");
    };
};
const setTitleFavicon = ()=>{
    const setFavicon = (char)=>{
        const linkForFavicon = document.querySelector(`head > link[rel='icon']`);
        const getSvgFavicon = (param)=>{
            return `<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${param}</text></svg>`;
        };
        const svg = getSvgFavicon(char);
        linkForFavicon.setAttribute(`href`, `data:image/svg+xml,${svg}`);
    };
    const title = "Jaime Chapinal";
    g_indexTitle++;
    if (g_indexTitle >= title.length) g_indexTitle = 0;
    setFavicon(title[g_indexTitle]);
};
const initFaviconTitle = ()=>{
    const myInterval = setInterval(setTitleFavicon, 1000);
};
const initTooltips = ()=>{
    const createTooltip = (id, url)=>{
        tippy(`#${id}`, {
            content: "loading",
            animation: "scale",
            inertia: true,
            arrow: true,
            hideOnClick: false,
            onShow (instance) {
                if (typeof instance.props.content !== "object") fetch(url).then((response)=>response.blob()).then((blob)=>{
                    const url = URL.createObjectURL(blob);
                    const image = new Image();
                    image.width = 200;
                    image.height = 200;
                    image.style.display = "block";
                    image.src = url;
                    instance.setContent(image);
                }).catch((error)=>{
                    instance.setContent(`Request failed. ${error}`);
                });
            }
        });
    };
    const arraryGifInterests = [
        {
            id: "gif-football",
            gifUrl: (0, _footballGifDefault.default)
        },
        {
            id: "gif-videogames",
            gifUrl: (0, _videogamesGifDefault.default)
        },
        {
            id: "gif-programming",
            gifUrl: (0, _programmingGifDefault.default)
        },
        {
            id: "gif-office",
            gifUrl: (0, _theOfficeGifDefault.default)
        },
        {
            id: "gif-gifs",
            gifUrl: (0, _gifsGifDefault.default)
        }
    ];
    arraryGifInterests.forEach((n)=>{
        createTooltip(n.id, n.gifUrl);
    });
};
function updateSelectedItemAfter(selectedId) {
    g_htmlTimelineIdsBall.forEach((htmlElement)=>{
        if (htmlElement.id === `item-${selectedId}`) htmlElement.classList.add("timeline__selected");
        else htmlElement.classList.remove("timeline__selected");
    });
    g_htmlTimelineSpeechBubble.forEach((htmlElement)=>{
        if (htmlElement.id === `timeline-${selectedId}`) htmlElement.classList.add("timeline__active");
        else htmlElement.classList.remove("timeline__active");
    });
}
function clickOnTimeline(event) {
    updateTimeline(event.currentTarget.id.replace("item-", ""));
}
function updateTimeline(id) {
    if (id === g_currentTimelineId) return;
    g_currentTimelineId = id;
    const baseUrl = "../images/webp"; // Local
    // const baseUrl =
    //     'https://raw.githubusercontent.com/Xatpy/JaimeChapinal.com_v2/main/images/webp';
    // const baseUrl = 'https://jaimechapinal.com/images/webp/';
    const mapCareer = {
        spotify: {
            image: (0, _spotifyLogoWebpDefault.default),
            title: "Spotfiy",
            role: "Software Engineer II",
            tasks: "Release squad",
            projects: "Spotify Desktop app. Internal developer tools."
        },
        amazon: {
            image: (0, _amazonWebpDefault.default),
            title: "Amazon",
            role: "Software Development Engineer II",
            tasks: "European Customer Experience Engineer: API, backend, mobile, OPS (retail). Kindle Reader: Maintaining PC/Mac reader apps and developing new web reader",
            projects: "Price drops in cart, Amazon Kids, Kindle Reader for PC/Mac/Web]"
        },
        king: {
            image: (0, _kingWebpDefault.default),
            title: "King",
            role: "C++ Game Programmer",
            tasks: "Gameplay and tools programmer. New content team: New in-game features (blockers, map functionalities) and art/design production toolsets.",
            projects: "Candy Crush Saga"
        },
        fl: {
            image: (0, _futureLighthouseWebpDefault.default),
            title: "Future Lighthouse",
            role: "VR Engineer",
            tasks: "VR programming, QA certification bug fixing and publishing.",
            projects: "Melita (Gear VR), In the Cloud: VR Afterlife (PS4)"
        },
        gameloft: {
            image: (0, _gameloftWebpDefault.default),
            title: "Gameloft",
            role: "UI Engineer",
            tasks: "Bug fixing (upd.6) and new Unity prototyping for an unannounced title.",
            projects: "Asphalt Extreme, Unannounced title"
        },
        ea: {
            image: (0, _eaWebpDefault.default),
            title: "Electronic Arts",
            role: "Software Engineer",
            tasks: "Frostbite, Unity3D, Ignite and internal tools. PC,PS4,X1,PS3,X360. Internationalization, localization and bug fixing",
            projects: "FIFA 17, Battlefield 1, Star Wars Battlefront, FIFA 16,Plants vs Zombies: Heroes, Mirror’s Edge: Catalyst , Need for Speed"
        },
        carto: {
            image: (0, _cartoWebpDefault.default),
            title: "Carto",
            role: "Developer",
            tasks: "Front-End Engineer. QA. Technical Support",
            projects: ""
        },
        simfor: {
            image: (0, _simforWebpDefault.default),
            title: "Simfor",
            role: "Programmer",
            tasks: "Virtual simulators: cranes, cars, buses, trucks and military vehicles. C++,(OSG), DirectX and Qt. Gameplay, tools and shaders",
            projects: ""
        },
        complutense: {
            image: (0, _complutenseWebpDefault.default),
            title: "University Complutense of Madrid",
            role: "Student",
            tasks: "Master in Video Games Development (Programming)",
            projects: ""
        },
        granada: {
            image: (0, _granadaWebpDefault.default),
            title: "University of Granada",
            role: "Student",
            tasks: "Master in Software Development (Human – Computer Interaction)",
            projects: ""
        },
        mediapost: {
            image: (0, _mediapostWebpDefault.default),
            title: "Mediapost",
            role: "Junior programmer",
            tasks: "Marketing and logistic web apps. Technologies: ASP.NET, C#, Javascript, web services and thermal printers",
            projects: ""
        },
        uc3m: {
            image: (0, _uc3MWebpDefault.default),
            title: "University Carlos III of Madrid",
            role: "Student",
            tasks: "2007-2010: Technical Engineering in Computer Managements, 2010-2011: Computer Engineering Degree",
            projects: ""
        }
    };
    const foundCareer = mapCareer[id];
    const timelineLogo = document.getElementById("timelineLogo");
    timelineLogo.src = foundCareer.image;
    timelineLogo.alt = "Alt text image url";
    if (id === "spotify") timelineLogo.classList.add("logoBorderRadius");
    else timelineLogo.classList.remove("logoBorderRadius");
    const timelineStageSelectedRole = document.getElementById("timelineStageSelectedRole");
    const timelineStageSelectedTasks = document.getElementById("timelineStageSelectedTasks");
    const timelineStageSelectedProjects = document.getElementById("timelineStageSelectedProjects");
    timelineStageSelectedRole.innerHTML = foundCareer.role ?? "";
    timelineStageSelectedTasks.innerHTML = foundCareer.tasks ?? "";
    timelineStageSelectedProjects.innerHTML = foundCareer.projects ?? "";
    const divSelectedStageTextContainer = document.getElementById("divSelectedStageTextContainer");
    divSelectedStageTextContainer.classList.remove("runAnimation");
    divSelectedStageTextContainer.offsetWidth;
    divSelectedStageTextContainer.classList.add("runAnimation");
    updateSelectedItemAfter(id);
}
const initTimeline = ()=>{
    const companiesId = [
        "spotify",
        "amazon",
        "king",
        "fl",
        "gameloft",
        "ea",
        "carto",
        "simfor",
        "complutense",
        "granada",
        "mediapost",
        "uc3m"
    ];
    companiesId.forEach((id)=>{
        const timelineItem = document.getElementById(`item-${id}`);
        timelineItem.onclick = clickOnTimeline;
        g_htmlTimelineIdsBall.push(timelineItem);
        g_htmlTimelineSpeechBubble.push(document.getElementById(`timeline-${id}`));
    });
    updateTimeline("spotify");
};
const playSound = (soundUrl)=>{
    const audio = new Audio(soundUrl);
    audio.play();
};
const sendPing = ()=>{
    playSound("./sounds/a.mp3");
    document.getElementById("bell").classList.remove("pulse-button");
    document.getElementById("bell").offsetWidth;
    document.getElementById("bell").classList.remove("bell-animation");
    document.getElementById("bell").offsetWidth;
    document.getElementById("bell").classList.add("bell-animation");
};
const closeBanner = ()=>{
    localStorage.setItem("cookies", "closed");
    document.getElementById("cookie-banner").classList.add("hidden");
    playSound("./sounds/cookie.ogg");
};
const initCookiesBanner = ()=>{
    if (localStorage.getItem("cookies") != "closed") {
        document.getElementById("cookie-close").onclick = closeBanner;
        document.getElementById("cookie-banner").classList.remove("hidden");
    }
};
const initObserversFadeInAnimations = ()=>{
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((elem)=>{
            if (elem.isIntersecting) elem.target.classList.add("fadeIn");
        });
    });
    const transparentNodes = document.getElementsByClassName("transparent");
    for (let elem of transparentNodes)observer.observe(elem);
};
window.onload = ()=>{
    initFaviconTitle();
    initSaluteWave();
    initCookiesBanner();
    initObserversFadeInAnimations();
    initTooltips();
    initTimeline();
};

},{"../images/gifs/football.gif":"auJs1","../images/gifs/videogames.gif":"cPE6M","../images/gifs/programming.gif":"963wF","../images/gifs/the-office.gif":"9FuMP","../images/gifs/gifs.gif":"lkYzy","../images/webp/logos/spotifyLogo.webp":"aKXhT","../images/webp/logos/amazon.webp":"kQIRZ","../images/webp/logos/king.webp":"exlSM","../images/webp/logos/futureLighthouse.webp":"4uy4p","../images/webp/logos/gameloft.webp":"6XMjk","../images/webp/logos/granada.webp":"edsr1","../images/webp/logos/ea.webp":"h8eAe","../images/webp/logos/carto.webp":"kc3cO","../images/webp/logos/simfor.webp":"1FtKN","../images/webp/logos/complutense.webp":"3GlXI","../images/webp/logos/mediapost.webp":"DZEqS","../images/webp/logos/uc3m.webp":"879aJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"auJs1":[function(require,module,exports) {
module.exports = require("f3445c26d7c6b5b3").getBundleURL("10Mjw") + "football.45b2fe6c.gif" + "?" + Date.now();

},{"f3445c26d7c6b5b3":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"cPE6M":[function(require,module,exports) {
module.exports = require("51c2dc6642097401").getBundleURL("10Mjw") + "videogames.74fc4654.gif" + "?" + Date.now();

},{"51c2dc6642097401":"lgJ39"}],"963wF":[function(require,module,exports) {
module.exports = require("5a021e4074c36cc").getBundleURL("10Mjw") + "programming.176e6d99.gif" + "?" + Date.now();

},{"5a021e4074c36cc":"lgJ39"}],"9FuMP":[function(require,module,exports) {
module.exports = require("c17710e2d5b04437").getBundleURL("10Mjw") + "the-office.c29c4afd.gif" + "?" + Date.now();

},{"c17710e2d5b04437":"lgJ39"}],"lkYzy":[function(require,module,exports) {
module.exports = require("2dc5335922ece777").getBundleURL("10Mjw") + "gifs.16a13044.gif" + "?" + Date.now();

},{"2dc5335922ece777":"lgJ39"}],"aKXhT":[function(require,module,exports) {
module.exports = require("22c28086e0c8aa1").getBundleURL("10Mjw") + "spotifyLogo.467c7eb2.webp" + "?" + Date.now();

},{"22c28086e0c8aa1":"lgJ39"}],"kQIRZ":[function(require,module,exports) {
module.exports = require("61906941d345d2fe").getBundleURL("10Mjw") + "amazon.c0c9a912.webp" + "?" + Date.now();

},{"61906941d345d2fe":"lgJ39"}],"exlSM":[function(require,module,exports) {
module.exports = require("a56053f70c5f4c4c").getBundleURL("10Mjw") + "king.4ed6bab5.webp" + "?" + Date.now();

},{"a56053f70c5f4c4c":"lgJ39"}],"4uy4p":[function(require,module,exports) {
module.exports = require("b7a8d5f7c026db29").getBundleURL("10Mjw") + "futureLighthouse.2e352099.webp" + "?" + Date.now();

},{"b7a8d5f7c026db29":"lgJ39"}],"6XMjk":[function(require,module,exports) {
module.exports = require("37b9b8fb1f11fd24").getBundleURL("10Mjw") + "gameloft.b848c809.webp" + "?" + Date.now();

},{"37b9b8fb1f11fd24":"lgJ39"}],"edsr1":[function(require,module,exports) {
module.exports = require("c98b252da33d3f10").getBundleURL("10Mjw") + "granada.6131884e.webp" + "?" + Date.now();

},{"c98b252da33d3f10":"lgJ39"}],"h8eAe":[function(require,module,exports) {
module.exports = require("f5beaeb8ac23535c").getBundleURL("10Mjw") + "ea.4343c2f9.webp" + "?" + Date.now();

},{"f5beaeb8ac23535c":"lgJ39"}],"kc3cO":[function(require,module,exports) {
module.exports = require("f6fac25cd0264af2").getBundleURL("10Mjw") + "carto.9be7d92b.webp" + "?" + Date.now();

},{"f6fac25cd0264af2":"lgJ39"}],"1FtKN":[function(require,module,exports) {
module.exports = require("73142005b8f189e7").getBundleURL("10Mjw") + "simfor.c6d164e5.webp" + "?" + Date.now();

},{"73142005b8f189e7":"lgJ39"}],"3GlXI":[function(require,module,exports) {
module.exports = require("d1a849eb1511a0d0").getBundleURL("10Mjw") + "complutense.9a15eca9.webp" + "?" + Date.now();

},{"d1a849eb1511a0d0":"lgJ39"}],"DZEqS":[function(require,module,exports) {
module.exports = require("5fc59a5508217db2").getBundleURL("10Mjw") + "mediapost.2c665eb0.webp" + "?" + Date.now();

},{"5fc59a5508217db2":"lgJ39"}],"879aJ":[function(require,module,exports) {
module.exports = require("ebffd45dfb27dea").getBundleURL("10Mjw") + "uc3m.84e1ce35.webp" + "?" + Date.now();

},{"ebffd45dfb27dea":"lgJ39"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["9tRox","1SICI"], "1SICI", "parcelRequire6264")

//# sourceMappingURL=index.18dbc454.js.map
