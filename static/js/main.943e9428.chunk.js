(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{16:function(e,n,t){},19:function(e,n,t){},20:function(e,n,t){},21:function(e,n,t){"use strict";t.r(n);var c=t(1),i=t.n(c),r=t(9),o=t.n(r),a=(t(16),t(3)),l=t(2),s=t(8),u=t(10),d=t(0);function f(e){var n=e.tile,t=e.floodFill,c=e.boardState,i=e.setBoardState,r=e.loseGame,o=e.gameStatus,l=e.flaggingMode,f=e.chord,g=e.chordingEnabled,h=n.swept,j=n.isMine,b=n.minesAround,m=n.flagStatus,p=n.id,v=n.c,x=n.r,O=function(){if(!h&&"withoutMaybe"===l){var e=Object(a.a)(c);return e[p-1].flagStatus="flagged"===m?"unflagged":"flagged",i(e)}g&&h&&!j&&b&&f(n,c)},w=Object(u.useSwipeable)({onSwiped:function(){O()}}),S=Object(d.jsxs)(d.Fragment,{children:[(!h&&"inGame"===o||h&&j)&&"flagged"===m?Object(d.jsx)("p",{style:{fontWeight:"normal"},className:m,children:"\ud83d\udea9"}):null,"inGame"===o||j||"flagged"!==m?null:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{style:{fontWeight:"normal"},className:m,children:"\ud83d\udea9"}),Object(d.jsx)("span",{style:{position:"absolute",color:"white",fontSize:"2.2rem",paddingBottom:"2px"},children:"\ud83d\udec7"})]}),h||"maybe"!==m?null:Object(d.jsx)("p",{children:"\u2754"}),"inGame"===o?!j&&b&&h?Object(d.jsx)("p",{children:b}):null:j?"flagged"!==m?"wonGame"===o?Object(d.jsx)("p",{children:"\ud83c\udf3c"}):Object(d.jsx)("p",{children:"\ud83d\udca3"}):"wonGame"===o?Object(d.jsx)("p",{children:"\ud83c\udf3c"}):null:b&&h?Object(d.jsx)("p",{children:b}):null]}),y=function(e){if(("touchstart"===e.type||2===e.button)&&h&&b){var n=[c.find((function(e){return e.r===x&&e.c===v+1})),c.find((function(e){return e.r===x&&e.c===v-1})),c.find((function(e){return e.r===x+1&&e.c===v})),c.find((function(e){return e.r===x-1&&e.c===v})),c.find((function(e){return e.r===x+1&&e.c===v+1})),c.find((function(e){return e.r===x-1&&e.c===v-1})),c.find((function(e){return e.r===x+1&&e.c===v-1})),c.find((function(e){return e.r===x-1&&e.c===v+1}))].filter((function(e){return!(null===e||void 0===e?void 0:e.swept)&&"unflagged"===(null===e||void 0===e?void 0:e.flagStatus)})).map((function(e){return null===e||void 0===e?void 0:e.id}));n.forEach((function(e){var n;null===(n=document.querySelector(".id-".concat(e)))||void 0===n||n.classList.add("hover")}))}},M=function(){g&&h&&b&&document.querySelectorAll(".hover").forEach((function(e){return e.classList.remove("hover")}))};return Object(d.jsx)("div",Object(s.a)(Object(s.a)({onMouseDown:function(e){return y(e)},onTouchStart:function(e){return y(e)},onMouseUp:M,onTouchEnd:M,onMouseLeave:M},w),{},{className:"tile id-".concat(p," ").concat(j?"mine":""," ").concat(h?"swept":""," around-").concat(b),onContextMenu:function(e){e.preventDefault(),O()},onClick:function(){if("unflagged"===m&&j&&"inGame"===o)return r([p]);if("unflagged"===m&&!h&&"inGame"===o){var e=Object(a.a)(c);e[p-1].swept=!0,0!==b||j||t(e[p-1],e),i(e)}},children:S}))}function g(e){var n=e.gameStatus,t=e.currentFormat,i=e.setMessage,r=Object(c.useState)(0),o=Object(l.a)(r,2),a=o[0],s=o[1];return Object(c.useEffect)((function(){if("inGame"===n){var e=setInterval((function(){s(Number((a+.1).toFixed(1)))}),100);return function(){return clearInterval(e)}}}),[n,a]),Object(c.useEffect)((function(){if(console.log("The game status is ".concat(n)),"wonGame"===n){var e=localStorage.getItem(t);(!e||a<Number(e))&&(localStorage.setItem(t,a.toString()),i("\ud83c\udf89 New record!"),console.log("New record: ".concat(a,"s")))}"preGame"===n&&s(0)}),[n]),Object(d.jsxs)(d.Fragment,{children:[a.toString().includes(".")?a:a.toString()+".0","s"]})}var h=t(7),j=t.n(h),b=t(11);t(19);function m(e){var n=e.flaggingMode,t=e.setFlaggingMode,c=e.setSettingsPanelVisible,i=e.setNumOfMines,r=e.numOfMines,o=e.chordingEnabled,a=e.setChordingEnabled,l=!0;return Object(b.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.getInstalledRelatedApps();case 2:return n=e.sent,e.next=5,n.length;case 5:if(!e.sent){e.next=7;break}l=!1;case 7:case"end":return e.stop()}}),e)})))(),Object(d.jsx)("div",{style:{position:"absolute",height:"100vh",width:"100vw",backgroundColor:"#00000088",display:"grid",placeItems:"center"},onClick:function(){c(!1)},children:Object(d.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px",background:"white",maxWidth:"350px",width:"90%",borderRadius:"4px",padding:"24px"},className:"settings-panel",onClick:function(e){e.stopPropagation()},children:[Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",verticalAlign:"baseline"},children:[Object(d.jsx)("h2",{children:"Settings"}),Object(d.jsx)("h2",{style:{opacity:"0.4",cursor:"pointer"},onClick:function(){c(!1)},children:"\u2716\ufe0f"})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"difficulty-selector",children:[Object(d.jsxs)("div",{className:20===r?"selected":void 0,onClick:function(){i(20),localStorage.setItem("numOfMines","20")},children:[Object(d.jsx)("h3",{children:"Easy"}),Object(d.jsx)("p",{children:"20 mines"})]}),Object(d.jsxs)("div",{className:35===r?"selected":void 0,onClick:function(){i(35),localStorage.setItem("numOfMines","35")},children:[Object(d.jsx)("h3",{children:"Medium"}),Object(d.jsx)("p",{children:"35 mines"})]}),Object(d.jsxs)("div",{className:50===r?"selected":void 0,onClick:function(){i(50),localStorage.setItem("numOfMines","50")},children:[Object(d.jsx)("h3",{children:"Hard"}),Object(d.jsx)("p",{children:"50 mines"})]})]}),Object(d.jsxs)("p",{children:["Best time on ",50===r&&"hard",35===r&&"medium",20===r&&"easy",":"," ",localStorage.getItem("10x20x".concat(r,"m"))?"\ud83c\udfc6 "+localStorage.getItem("10x20x".concat(r,"m"))+"s":"none"]})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"checkbox",checked:"off"!==n,onChange:function(){var e="off"===n?"withoutMaybe":"off";t(e),localStorage.setItem("flaggingMode",e)}}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Flagging"}),Object(d.jsx)("p",{children:"Swipe or right-click a tile to flag it"})]})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"checkbox",checked:o,onChange:function(){o&&(a(!1),localStorage.setItem("chordingEnabled","false")),o||(a(!0),localStorage.setItem("chordingEnabled","true"))},disabled:"off"===n,title:"off"===n?"Requires flagging to be enabled":void 0}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Chording"}),Object(d.jsx)("p",{children:"Swipe or right-click a swept tile to sweep all adjacent tiles (if the right number of adjacent mines have been flagged)."})]})]}),Object(d.jsx)("hr",{}),l?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("p",{children:["This is a"," ",Object(d.jsx)("a",{href:"https://mobilesyrup.com/2020/05/24/how-install-progressive-web-app-pwa-android-ios-pc-mac/",target:"_blank",children:"progressive web app"}),". For the best minesweeping experience and offline play, install this app on your device."]}),Object(d.jsx)("hr",{})]}):null,Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:["Made with \u2764\ufe0f by"," ",Object(d.jsx)("a",{href:"https://www.linkedin.com/in/peter-ty-liu/",target:"_blank",children:"PL"})]}),Object(d.jsxs)("p",{style:{fontSize:"14px",marginTop:"14px"},children:["Enjoying the game?"," ",Object(d.jsx)("a",{href:"",onClick:function(e){e.preventDefault(),navigator.clipboard.writeText("3AncbaTiG8qT7Lq2XhoXYGzMB4mpsGUCJ6"),alert("Bitcoin address copied to clipboard")},children:"Buy me a cup of coffee"})," ",":)"]}),Object(d.jsx)("p",{style:{fontSize:"14px",opacity:"0.5",marginTop:"14px"},children:"v1.5 (28/11/2021)"})]})]})})}t(20);function p(e,n){var t=e.r,c=e.c,i=[n.find((function(e){return e.r===t&&e.c===c+1})),n.find((function(e){return e.r===t&&e.c===c-1})),n.find((function(e){return e.r===t+1&&e.c===c})),n.find((function(e){return e.r===t-1&&e.c===c})),n.find((function(e){return e.r===t+1&&e.c===c+1})),n.find((function(e){return e.r===t-1&&e.c===c-1})),n.find((function(e){return e.r===t+1&&e.c===c-1})),n.find((function(e){return e.r===t-1&&e.c===c+1}))].filter((function(e){return(null===e||void 0===e?void 0:e.id)&&!(null===e||void 0===e?void 0:e.swept)}));i.forEach((function(e){e&&"unflagged"===e.flagStatus&&(n[e.id-1].swept=!0),0===(null===e||void 0===e?void 0:e.minesAround)&&i.length>0&&p(e,n)}))}var v=function(){var e=20,n=10,t=Object(c.useState)(!1),i=Object(l.a)(t,2),r=i[0],o=i[1],s=Object(c.useState)(localStorage.getItem("numOfMines")?Number(localStorage.getItem("numOfMines")):35),u=Object(l.a)(s,2),h=u[0],j=u[1],b=Object(c.useState)(localStorage.getItem("flaggingMode")||"withoutMaybe"),v=Object(l.a)(b,2),x=v[0],O=v[1],w=Object(c.useState)(!localStorage.getItem("chordingEnabled")||JSON.parse(localStorage.getItem("chordingEnabled"))),S=Object(l.a)(w,2),y=S[0],M=S[1];function k(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:h,r=[],o=1;o<=c;o++)for(var a=1;a<=t;a++)r.push({c:a,r:o,isMine:!1,id:a+(o-1)*t,swept:!1,flagStatus:"unflagged",minesAround:0});for(var l=i;l>0;){var s=Math.floor(Math.random()*c*t);r[s].isMine||(r[s].isMine=!0,l--)}return r.forEach((function(e){var n=e.r,t=e.c;e.minesAround=[r.find((function(e){return e.r===n&&e.c===t+1})),r.find((function(e){return e.r===n&&e.c===t-1})),r.find((function(e){return e.r===n+1&&e.c===t})),r.find((function(e){return e.r===n-1&&e.c===t})),r.find((function(e){return e.r===n+1&&e.c===t+1})),r.find((function(e){return e.r===n-1&&e.c===t-1})),r.find((function(e){return e.r===n+1&&e.c===t-1})),r.find((function(e){return e.r===n-1&&e.c===t+1}))].filter((function(e){return null===e||void 0===e?void 0:e.isMine})).length})),r}Object(c.useEffect)((function(){"off"===x&&M(!1)}),[x]);var G=k(),E=Object(c.useState)("preGame"),I=Object(l.a)(E,2),N=I[0],C=I[1],A=Object(c.useState)(G),F=Object(l.a)(A,2),T=F[0],W=F[1],B=Object(c.useState)(localStorage.getItem("".concat(n,"x").concat(e,"x").concat(h,"m"))?"\ud83c\udfc6 ".concat(localStorage.getItem("".concat(n,"x").concat(e,"x").concat(h,"m"))+"s"):"\ud83c\udfc6 none"),L=Object(l.a)(B,2),q=L[0],P=L[1];Object(c.useEffect)((function(){P(localStorage.getItem("".concat(n,"x").concat(e,"x").concat(h,"m"))?"\ud83c\udfc6 ".concat(localStorage.getItem("".concat(n,"x").concat(e,"x").concat(h,"m"))+"s"):"\ud83c\udfc6 none")}),[h]),Object(c.useEffect)((function(){"inGame"===N&&T.filter((function(e){return e.swept})).length===200-h&&D()}),[T]);var D=function(){C("wonGame")};function U(e){C("lostGame"),e.forEach((function(e){var n;null===(n=document.querySelector(".id-".concat(e)))||void 0===n||n.setAttribute("style","background: red")}));for(var n=Object(a.a)(T),t=0;t<n.length;t++)n[t].isMine&&(n[t].swept=!0);W(n)}var z=function(){W(G),C("preGame"),P(localStorage.getItem("".concat(n,"x").concat(e,"x").concat(h,"m"))?"\ud83c\udfc6 ".concat(localStorage.getItem("".concat(n,"x").concat(e,"x").concat(h,"m"))+"s"):"\ud83c\udfc6 none")},J=function(e,n){var t=Object(a.a)(n),c=e.r,i=e.c;if(e.minesAround===[t.find((function(e){return e.r===c&&e.c===i+1})),t.find((function(e){return e.r===c&&e.c===i-1})),t.find((function(e){return e.r===c+1&&e.c===i})),t.find((function(e){return e.r===c-1&&e.c===i})),t.find((function(e){return e.r===c+1&&e.c===i+1})),t.find((function(e){return e.r===c-1&&e.c===i-1})),t.find((function(e){return e.r===c+1&&e.c===i-1})),t.find((function(e){return e.r===c-1&&e.c===i+1}))].filter((function(e){return"flagged"===(null===e||void 0===e?void 0:e.flagStatus)})).length){var r=[t.find((function(e){return e.r===c&&e.c===i+1})),t.find((function(e){return e.r===c&&e.c===i-1})),t.find((function(e){return e.r===c+1&&e.c===i})),t.find((function(e){return e.r===c-1&&e.c===i})),t.find((function(e){return e.r===c+1&&e.c===i+1})),t.find((function(e){return e.r===c-1&&e.c===i-1})),t.find((function(e){return e.r===c+1&&e.c===i-1})),t.find((function(e){return e.r===c-1&&e.c===i+1}))].filter((function(e){return!(null===e||void 0===e?void 0:e.swept)&&"unflagged"===(null===e||void 0===e?void 0:e.flagStatus)})),o=r.filter((function(e){return null===e||void 0===e?void 0:e.isMine})).map((function(e){return null===e||void 0===e?void 0:e.id}));if(o.length)return U(o);r.forEach((function(e){e&&(e.swept=!0),0===(null===e||void 0===e?void 0:e.minesAround)&&p(e,t)})),W(t)}},R=G.map((function(e,t){return 1===e.c?Object(d.jsx)("div",{onContextMenu:function(e){e.preventDefault()},children:T.map((function(e){return e.r===t/n+1?Object(d.jsx)("div",{className:"tile pre-game",onClick:function(){!function(e){for(var n=k();n[e-1].isMine||0!==n[e-1].minesAround;)n=k();n[e-1].swept=!0,p(n[e-1],n),W(n),C("inGame")}(e.id)}},"pg-r".concat(e.r,"c").concat(e.c)):null}))},"pg-".concat(t)):null})),V=T.map((function(e,t){return 1===e.c?Object(d.jsx)("div",{children:T.map((function(e){return e.r===t/n+1?Object(d.jsx)(f,{tile:e,chord:J,boardState:T,setBoardState:W,floodFill:p,loseGame:U,gameStatus:N,flaggingMode:x,chordingEnabled:y},"r".concat(e.r,"c").concat(e.c)):null}))},t):null}));return Object(d.jsxs)("div",{className:"App",children:[r&&Object(d.jsx)(m,{flaggingMode:x,setFlaggingMode:O,setSettingsPanelVisible:o,setNumOfMines:j,numOfMines:h,chordingEnabled:y,setChordingEnabled:M}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"controls",children:[Object(d.jsx)("span",{children:q}),"wonGame"===N&&Object(d.jsx)("div",{className:"ms-button",onClick:z,children:"\ud83d\ude0e"}),"lostGame"===N&&Object(d.jsx)("div",{className:"ms-button",onClick:z,children:"\ud83d\ude2c"}),"inGame"===N&&Object(d.jsxs)("span",{style:{width:"auto"},children:["\ud83d\udca3"," ",h-T.filter((function(e){return"flagged"==e.flagStatus})).length]}),"preGame"===N&&Object(d.jsx)("div",{className:"ms-button",onClick:function(){o(!0)},children:"\u2699\ufe0f"}),Object(d.jsx)("span",{style:{textAlign:"right"},children:Object(d.jsx)(g,{gameStatus:N,setMessage:P,currentFormat:"".concat(n,"x").concat(e,"x").concat(h,"m")})})]}),Object(d.jsx)("div",{className:"board ".concat(("lostGame"===N||"wonGame"===N)&&"postGame"),children:"preGame"===N?R:V})]})]})},x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/minesweeper",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/minesweeper","/service-worker.js");x?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var c=t.headers.get("content-type");404===t.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):O(n,e)}))}}()}},[[21,1,2]]]);
//# sourceMappingURL=main.943e9428.chunk.js.map