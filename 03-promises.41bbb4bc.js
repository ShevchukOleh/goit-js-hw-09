!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("6JpON"),u=document.querySelector(".form"),a=u.querySelector('input[name="delay"]'),l=u.querySelector('input[name="step"]'),c=u.querySelector('input[name="amount"]');function d(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}u.addEventListener("submit",(function(n){n.preventDefault();for(var t=parseInt(a.value),o=parseInt(l.value),i=parseInt(c.value),u=1;u<=i;u++){d(u,t+(u-1)*o).then((function(n){var t=n.position,o=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"),{timeout:5e3})})).catch((function(n){var t=n.position,o=n.delay;e(r).Notify.warning("❌ Rejected promise ".concat(t," in ").concat(o,"ms"),{timeout:5e3})}))}}))}();
//# sourceMappingURL=03-promises.41bbb4bc.js.map
