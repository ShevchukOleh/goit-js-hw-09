!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");e.disabled=!0,t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,bgr=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearInterval(bgr)}))}();
//# sourceMappingURL=01-color-switcher.d627dfa1.js.map
