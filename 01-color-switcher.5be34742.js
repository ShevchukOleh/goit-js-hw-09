const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");t.disabled=!0,e.addEventListener("click",(()=>{e.disabled=!0,t.disabled=!1;try{return changeBgrColor=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=e}),1e3)}catch(e){e.message}})),t.addEventListener("click",(()=>{e.disabled=!1,t.disabled=!0;try{clearInterval(changeBgrColor)}catch(e){e.message}}));
//# sourceMappingURL=01-color-switcher.5be34742.js.map