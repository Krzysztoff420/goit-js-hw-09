!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("iU1Pc"),u=document.querySelector("form"),a=document.querySelector("button[type = submit]");function l(e,n){return new Promise((function(t,o){var i=Math.random()>.3;setTimeout((function(){i?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}a.disabled=!1,u.addEventListener("submit",(function(n){n.preventDefault(),a.disabled=!0;for(var t=u.elements,o=t.delay,i=t.step,d=t.amount,c=0;c<d.value;c++)l(c+1,Number(o.value)+c*Number(i.value)).then((function(n){var t=n.position,o=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}));var s=Number(o.value)+(Number(d.value)-1)*Number(i.value);setTimeout((function(){return a.disabled=!1}),s)}))}();
//# sourceMappingURL=03-promises.966bef7e.js.map