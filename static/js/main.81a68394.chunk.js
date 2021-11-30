(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{16:function(e,n,t){},19:function(e,n,t){},20:function(e,n,t){},21:function(e,n,t){"use strict";t.r(n);var c=t(1),i=t.n(c),o=t(9),r=t.n(o),a=(t(16),t(3)),s=t(2),l=t(8),d=t(10),u=t(0);function f(e){var n=e.tile,t=e.floodFill,c=e.boardState,i=e.setBoardState,o=e.loseGame,r=e.gameStatus,s=e.flaggingMode,f=e.chord,g=e.chordingEnabled,m=n.swept,j=n.isMine,h=n.minesAround,b=n.flagStatus,p=n.id,v=n.c,O=n.r,x=function(){if(!m&&"withoutMaybe"===s){var e=Object(a.a)(c);return e[p-1].flagStatus="flagged"===b?"unflagged":"flagged",i(e)}g&&m&&!j&&h&&f(n,c)},w=Object(d.useSwipeable)({onSwiped:function(){x()}}),S=Object(u.jsxs)(u.Fragment,{children:[(!m&&"inGame"===r||m&&j)&&"flagged"===b?Object(u.jsx)("p",{style:{fontWeight:"normal"},className:b,children:"\ud83d\udea9"}):null,"inGame"===r||j||"flagged"!==b?null:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{style:{fontWeight:"normal"},className:b,children:"\ud83d\udea9"}),Object(u.jsx)("span",{style:{position:"absolute",color:"white",fontSize:"2.2rem",paddingBottom:"2px"},children:"\ud83d\udec7"})]}),m||"maybe"!==b?null:Object(u.jsx)("p",{children:"\u2754"}),"inGame"===r?!j&&h&&m?Object(u.jsx)("p",{children:h}):null:j?"flagged"!==b?"wonGame"===r?Object(u.jsx)("p",{children:"\ud83c\udf3c"}):Object(u.jsx)("p",{children:"\ud83d\udca3"}):"wonGame"===r?Object(u.jsx)("p",{children:"\ud83c\udf3c"}):null:h&&m?Object(u.jsx)("p",{children:h}):null]}),y=function(e){if(("touchstart"===e.type||2===e.button)&&m&&h&&g){var n=[c.find((function(e){return e.r===O&&e.c===v+1})),c.find((function(e){return e.r===O&&e.c===v-1})),c.find((function(e){return e.r===O+1&&e.c===v})),c.find((function(e){return e.r===O-1&&e.c===v})),c.find((function(e){return e.r===O+1&&e.c===v+1})),c.find((function(e){return e.r===O-1&&e.c===v-1})),c.find((function(e){return e.r===O+1&&e.c===v-1})),c.find((function(e){return e.r===O-1&&e.c===v+1}))].filter((function(e){return!(null===e||void 0===e?void 0:e.swept)&&"unflagged"===(null===e||void 0===e?void 0:e.flagStatus)})).map((function(e){return null===e||void 0===e?void 0:e.id}));n.forEach((function(e){var n;null===(n=document.querySelector(".id-".concat(e)))||void 0===n||n.classList.add("hover")}))}},k=function(){g&&m&&h&&document.querySelectorAll(".hover").forEach((function(e){return e.classList.remove("hover")}))};return Object(u.jsx)("div",Object(l.a)(Object(l.a)({onMouseDown:function(e){return y(e)},onTouchStart:function(e){return y(e)},onMouseUp:k,onTouchEnd:k,onMouseLeave:k},w),{},{className:"tile id-".concat(p," ").concat(j?"mine":""," ").concat(m?"swept":""," around-").concat(h),onContextMenu:function(e){e.preventDefault(),x()},onClick:function(){if("unflagged"===b&&j&&"inGame"===r)return o([p]);if("unflagged"===b&&!m&&"inGame"===r){var e=Object(a.a)(c);e[p-1].swept=!0,0!==h||j||t(e[p-1],e),i(e)}},children:S}))}function g(e){var n=e.gameStatus,t=e.currentFormat,i=e.setMessage,o=Object(c.useState)(0),r=Object(s.a)(o,2),a=r[0],l=r[1];return Object(c.useEffect)((function(){if("inGame"===n){var e=setInterval((function(){l(Number((a+.1).toFixed(1)))}),100);return function(){return clearInterval(e)}}}),[n,a]),Object(c.useEffect)((function(){if(console.log("The game status is ".concat(n)),"wonGame"===n){var e=localStorage.getItem(t);(!e||a<Number(e))&&(localStorage.setItem(t,a.toString()),i("\ud83c\udf89 New record!"),console.log("New record: ".concat(a,"s")))}"preGame"===n&&l(0)}),[n]),Object(u.jsxs)(u.Fragment,{children:[a.toString().includes(".")?a:a.toString()+".0","s"]})}var m=t(7),j=t.n(m),h=t(11),b=(t(19),{easy:{name:"easy",mineRatio:.1},medium:{name:"medium",mineRatio:.175},hard:{name:"hard",mineRatio:.25}});function p(e){var n=e.flaggingMode,t=e.setFlaggingMode,c=e.setSettingsPanelVisible,i=e.setMineRatio,o=e.mineRatio,r=e.chordingEnabled,a=e.setChordingEnabled,s=e.numOfRows,l=e.setNumOfRows,d=!0;return Object(h.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.getInstalledRelatedApps();case 2:return n=e.sent,e.next=5,n.length;case 5:if(!e.sent){e.next=7;break}d=!1;case 7:case"end":return e.stop()}}),e)})))(),Object(u.jsx)("div",{style:{position:"absolute",height:"100vh",width:"100vw",backgroundColor:"#00000088",display:"grid",placeItems:"center"},onClick:function(){c(!1)},children:Object(u.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px",background:"white",maxWidth:"370px",width:"92%",borderRadius:"4px",padding:"24px"},className:"settings-panel",onClick:function(e){e.stopPropagation()},children:[Object(u.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",verticalAlign:"baseline"},children:[Object(u.jsx)("h2",{children:"Settings"}),Object(u.jsx)("h2",{style:{opacity:"0.4",cursor:"pointer"},onClick:function(){c(!1)},children:"\u2716\ufe0f"})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"selector",children:[Object(u.jsx)("div",{className:17===s?"selected":void 0,onClick:function(){l(17),localStorage.setItem("numOfRows","17")},children:Object(u.jsxs)("h3",{children:["17",17===s&&" rows"]})}),Object(u.jsx)("div",{className:18===s?"selected":void 0,onClick:function(){l(18),localStorage.setItem("numOfRows","18")},children:Object(u.jsxs)("h3",{children:["18",18===s&&" rows"]})}),Object(u.jsx)("div",{className:19===s?"selected":void 0,onClick:function(){l(19),localStorage.setItem("numOfRows","19")},children:Object(u.jsxs)("h3",{children:["19",19===s&&" rows"]})}),Object(u.jsx)("div",{className:20===s?"selected":void 0,onClick:function(){l(20),localStorage.setItem("numOfRows","20")},children:Object(u.jsxs)("h3",{children:["20",20===s&&" rows"]})})]}),Object(u.jsxs)("div",{className:"selector",children:[Object(u.jsxs)("div",{className:o===b.easy.mineRatio?"selected":void 0,onClick:function(){i(b.easy.mineRatio),localStorage.setItem("mineRatio",b.easy.mineRatio.toString())},children:[Object(u.jsx)("h3",{children:"Easy"}),Object(u.jsx)("p",{children:"10% mines"})]}),Object(u.jsxs)("div",{className:o===b.medium.mineRatio?"selected":void 0,onClick:function(){i(b.medium.mineRatio),localStorage.setItem("mineRatio",b.medium.mineRatio.toString())},children:[Object(u.jsx)("h3",{children:"Medium"}),Object(u.jsx)("p",{children:"17% mines"})]}),Object(u.jsxs)("div",{className:o===b.hard.mineRatio?"selected":void 0,onClick:function(){i(b.hard.mineRatio),localStorage.setItem("mineRatio",b.hard.mineRatio.toString())},children:[Object(u.jsx)("h3",{children:"Hard"}),Object(u.jsx)("p",{children:"25% mines"})]})]}),Object(u.jsxs)("p",{children:["Best time on ",s," rows &"," ",o===b.hard.mineRatio&&"hard",o===b.medium.mineRatio&&"medium",o===b.easy.mineRatio&&"easy",":"," ",localStorage.getItem("10x".concat(s,"x").concat(o,"m"))?Object(u.jsx)("strong",{children:localStorage.getItem("10x".concat(s,"x").concat(o,"m"))+"s"}):"none"]})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"checkbox",checked:"off"!==n,onChange:function(){var e="off"===n?"withoutMaybe":"off";t(e),localStorage.setItem("flaggingMode",e)}}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Flagging"}),Object(u.jsx)("p",{children:"Swipe or right-click a tile to flag it"})]})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"checkbox",checked:r,onChange:function(){r&&(a(!1),localStorage.setItem("chordingEnabled","false")),r||(a(!0),localStorage.setItem("chordingEnabled","true"))},disabled:"off"===n,title:"off"===n?"Requires flagging to be enabled":void 0}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Chording"}),Object(u.jsx)("p",{children:"Swipe or right-click a swept tile to sweep all adjacent tiles (if the right number of adjacent mines have been flagged)."})]})]}),Object(u.jsx)("hr",{}),d?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("p",{children:["This is a"," ",Object(u.jsx)("a",{href:"https://mobilesyrup.com/2020/05/24/how-install-progressive-web-app-pwa-android-ios-pc-mac/",target:"_blank",children:"progressive web app"}),". For the best minesweeping experience and offline play, install this app on your device."]}),Object(u.jsx)("hr",{})]}):null,Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{children:["Made with \u2764\ufe0f by"," ",Object(u.jsx)("a",{href:"https://www.linkedin.com/in/peter-ty-liu/",target:"_blank",children:"PL"})]}),Object(u.jsxs)("p",{style:{fontSize:"14px",marginTop:"14px"},children:["Enjoying the game?"," ",Object(u.jsx)("a",{href:"",onClick:function(e){e.preventDefault(),navigator.clipboard.writeText("3AncbaTiG8qT7Lq2XhoXYGzMB4mpsGUCJ6"),alert("Bitcoin address copied to clipboard")},children:"Buy me a cup of coffee"})," ",":)"]}),Object(u.jsx)("p",{style:{fontSize:"14px",opacity:"0.5",marginTop:"14px"},children:"v1.6 (30/11/2021)"})]})]})})}t(20);function v(e,n){var t=e.r,c=e.c,i=[n.find((function(e){return e.r===t&&e.c===c+1})),n.find((function(e){return e.r===t&&e.c===c-1})),n.find((function(e){return e.r===t+1&&e.c===c})),n.find((function(e){return e.r===t-1&&e.c===c})),n.find((function(e){return e.r===t+1&&e.c===c+1})),n.find((function(e){return e.r===t-1&&e.c===c-1})),n.find((function(e){return e.r===t+1&&e.c===c-1})),n.find((function(e){return e.r===t-1&&e.c===c+1}))].filter((function(e){return(null===e||void 0===e?void 0:e.id)&&!(null===e||void 0===e?void 0:e.swept)}));i.forEach((function(e){e&&"unflagged"===e.flagStatus&&(n[e.id-1].swept=!0),0===(null===e||void 0===e?void 0:e.minesAround)&&i.length>0&&v(e,n)}))}var O=function(){var e=10,n=Object(c.useState)(localStorage.getItem("numOfRows")?Number(localStorage.getItem("numOfRows")):17),t=Object(s.a)(n,2),i=t[0],o=t[1],r=Object(c.useState)(!1),l=Object(s.a)(r,2),d=l[0],m=l[1],j=Object(c.useState)(localStorage.getItem("mineRatio")?Number(localStorage.getItem("mineRatio")):.175),h=Object(s.a)(j,2),b=h[0],O=h[1],x=Object(c.useState)(localStorage.getItem("flaggingMode")||"off"),w=Object(s.a)(x,2),S=w[0],y=w[1],k=Object(c.useState)(!!localStorage.getItem("chordingEnabled")&&JSON.parse(localStorage.getItem("chordingEnabled"))),R=Object(s.a)(k,2),M=R[0],I=R[1];function N(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:b,o=[],r=1;r<=t;r++)for(var a=1;a<=n;a++)o.push({c:a,r:r,isMine:!1,id:a+(r-1)*n,swept:!1,flagStatus:"unflagged",minesAround:0});for(var s=Math.round(n*t*c);s>0;){var l=Math.floor(Math.random()*t*n);o[l].isMine||(o[l].isMine=!0,s--)}return o.forEach((function(e){var n=e.r,t=e.c;e.minesAround=[o.find((function(e){return e.r===n&&e.c===t+1})),o.find((function(e){return e.r===n&&e.c===t-1})),o.find((function(e){return e.r===n+1&&e.c===t})),o.find((function(e){return e.r===n-1&&e.c===t})),o.find((function(e){return e.r===n+1&&e.c===t+1})),o.find((function(e){return e.r===n-1&&e.c===t-1})),o.find((function(e){return e.r===n+1&&e.c===t-1})),o.find((function(e){return e.r===n-1&&e.c===t+1}))].filter((function(e){return null===e||void 0===e?void 0:e.isMine})).length})),o}Object(c.useEffect)((function(){"off"===S&&I(!1)}),[S]);var G=Object(c.useState)(N()),E=Object(s.a)(G,2),C=E[0],A=E[1],F=Object(c.useState)("preGame"),T=Object(s.a)(F,2),W=T[0],B=T[1],L=Object(c.useState)(C),q=Object(s.a)(L,2),P=q[0],D=q[1],U=Object(c.useState)(localStorage.getItem("".concat(e,"x").concat(i,"x").concat(b,"m"))?"\ud83c\udfc6 ".concat(localStorage.getItem("".concat(e,"x").concat(i,"x").concat(b,"m"))+"s"):"\ud83c\udfc6 none"),z=Object(s.a)(U,2),J=z[0],V=z[1];Object(c.useEffect)((function(){V(localStorage.getItem("".concat(e,"x").concat(i,"x").concat(b,"m"))?"\ud83c\udfc6 ".concat(localStorage.getItem("".concat(e,"x").concat(i,"x").concat(b,"m"))+"s"):"\ud83c\udfc6 none")}),[b,i]),Object(c.useEffect)((function(){A(N())}),[i]),Object(c.useEffect)((function(){"inGame"===W&&P.filter((function(e){return e.swept})).length===i*e-Math.round(e*i*b)&&X()}),[P]);var X=function(){B("wonGame")};function _(e){B("lostGame"),e.forEach((function(e){var n;null===(n=document.querySelector(".id-".concat(e)))||void 0===n||n.setAttribute("style","background: red")}));for(var n=Object(a.a)(P),t=0;t<n.length;t++)n[t].isMine&&(n[t].swept=!0);D(n)}var H=function(){D(C),B("preGame"),V(localStorage.getItem("".concat(e,"x").concat(i,"x").concat(b,"m"))?"\ud83c\udfc6 ".concat(localStorage.getItem("".concat(e,"x").concat(i,"x").concat(b,"m"))+"s"):"\ud83c\udfc6 none")},Y=function(e,n){var t=Object(a.a)(n),c=e.r,i=e.c;if(e.minesAround===[t.find((function(e){return e.r===c&&e.c===i+1})),t.find((function(e){return e.r===c&&e.c===i-1})),t.find((function(e){return e.r===c+1&&e.c===i})),t.find((function(e){return e.r===c-1&&e.c===i})),t.find((function(e){return e.r===c+1&&e.c===i+1})),t.find((function(e){return e.r===c-1&&e.c===i-1})),t.find((function(e){return e.r===c+1&&e.c===i-1})),t.find((function(e){return e.r===c-1&&e.c===i+1}))].filter((function(e){return"flagged"===(null===e||void 0===e?void 0:e.flagStatus)})).length){var o=[t.find((function(e){return e.r===c&&e.c===i+1})),t.find((function(e){return e.r===c&&e.c===i-1})),t.find((function(e){return e.r===c+1&&e.c===i})),t.find((function(e){return e.r===c-1&&e.c===i})),t.find((function(e){return e.r===c+1&&e.c===i+1})),t.find((function(e){return e.r===c-1&&e.c===i-1})),t.find((function(e){return e.r===c+1&&e.c===i-1})),t.find((function(e){return e.r===c-1&&e.c===i+1}))].filter((function(e){return!(null===e||void 0===e?void 0:e.swept)&&"unflagged"===(null===e||void 0===e?void 0:e.flagStatus)})),r=o.filter((function(e){return null===e||void 0===e?void 0:e.isMine})).map((function(e){return null===e||void 0===e?void 0:e.id}));if(r.length)return _(r);o.forEach((function(e){e&&(e.swept=!0),0===(null===e||void 0===e?void 0:e.minesAround)&&v(e,t)})),D(t)}},$=C.map((function(n,t){return 1===n.c?Object(u.jsx)("div",{onContextMenu:function(e){e.preventDefault()},children:P.map((function(n){return n.r===t/e+1?Object(u.jsx)("div",{className:"tile pre-game",onClick:function(){!function(e){for(var n=N();n[e-1].isMine||0!==n[e-1].minesAround;)n=N();n[e-1].swept=!0,v(n[e-1],n),D(n),B("inGame")}(n.id)}},"pg-r".concat(n.r,"c").concat(n.c)):null}))},"pg-".concat(t)):null})),K=P.map((function(n,t){return 1===n.c?Object(u.jsx)("div",{children:P.map((function(n){return n.r===t/e+1?Object(u.jsx)(f,{tile:n,chord:Y,boardState:P,setBoardState:D,floodFill:v,loseGame:_,gameStatus:W,flaggingMode:S,chordingEnabled:M},"r".concat(n.r,"c").concat(n.c)):null}))},t):null}));return Object(u.jsxs)("div",{className:"App",children:[d&&Object(u.jsx)(p,{flaggingMode:S,setFlaggingMode:y,setSettingsPanelVisible:m,setMineRatio:O,mineRatio:b,chordingEnabled:M,setChordingEnabled:I,numOfRows:i,setNumOfRows:o}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"controls",children:[Object(u.jsx)("span",{children:J}),"wonGame"===W&&Object(u.jsx)("div",{className:"ms-button",onClick:H,children:"\ud83d\ude0e"}),"lostGame"===W&&Object(u.jsx)("div",{className:"ms-button",onClick:H,children:"\ud83d\ude2c"}),"inGame"===W&&Object(u.jsxs)("span",{style:{width:"auto"},children:["\ud83d\udca3"," ",Math.round(e*i*b)-P.filter((function(e){return"flagged"===e.flagStatus})).length]}),"preGame"===W&&Object(u.jsx)("div",{className:"ms-button",onClick:function(){m(!0)},children:"\u2699\ufe0f"}),Object(u.jsx)("span",{style:{textAlign:"right"},children:Object(u.jsx)(g,{gameStatus:W,setMessage:V,currentFormat:"".concat(e,"x").concat(i,"x").concat(b,"m")})})]}),Object(u.jsx)("div",{className:"board ".concat(("lostGame"===W||"wonGame"===W)&&"postGame"),children:"preGame"===W?$:K})]})]})},x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");x?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var c=t.headers.get("content-type");404===t.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):w(n,e)}))}}()}},[[21,1,2]]]);
//# sourceMappingURL=main.81a68394.chunk.js.map