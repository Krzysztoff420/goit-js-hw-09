!function(){var e=document.body,t=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]"),d=document.querySelector("[data-reset");a.disabled=!0,d.disabled=!0;var l=null;e.addEventListener("click",(function(r){r.target===t?(l=setInterval((function(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),a.disabled=!1,t.disabled=!0,d.disabled=!1):r.target===a?(clearInterval(l),a.disabled=!0,t.disabled=!1):r.target===d&&(e.style.backgroundColor="#FFFFFF",clearInterval(l),a.disabled=!0,t.disabled=!1,d.disabled=!0)}))}();
//# sourceMappingURL=01-color-switcher.2bc1ccf4.js.map
