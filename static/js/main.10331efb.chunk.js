(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),i=n(11),r=n.n(i),a=(n(21),n(5)),s=n(2),l=(n(22),n(3)),d=n(14),u=n(1);function f(e){var t=e.tile,n=e.floodFill,c=e.boardState,o=e.setBoardState,i=e.loseGame,r=e.gameStatus,s=e.swipeToChord,f=e.chord,j=e.swipeToFlag,m=t.swept,h=t.isMine,g=t.minesAround,b=t.flagStatus,O=t.id,x=t.c,p=t.r,v=function(){if(m&&g){var e=[c.find((function(e){return e.r===p&&e.c===x+1})),c.find((function(e){return e.r===p&&e.c===x-1})),c.find((function(e){return e.r===p+1&&e.c===x})),c.find((function(e){return e.r===p-1&&e.c===x})),c.find((function(e){return e.r===p+1&&e.c===x+1})),c.find((function(e){return e.r===p-1&&e.c===x-1})),c.find((function(e){return e.r===p+1&&e.c===x-1})),c.find((function(e){return e.r===p-1&&e.c===x+1}))].filter((function(e){return!(null===e||void 0===e?void 0:e.swept)&&"unflagged"===(null===e||void 0===e?void 0:e.flagStatus)})).map((function(e){return null===e||void 0===e?void 0:e.id}));e.forEach((function(e){var t;null===(t=document.querySelector(".id-".concat(e)))||void 0===t||t.classList.add("hover")}))}},w=function(){m&&g&&!h&&document.querySelectorAll(".hover").forEach((function(e){return e.classList.remove("hover")}))},S=Object(d.useSwipeable)({onSwiped:function(){if("on"===s&&m&&!h&&g)f(t,c);else if("on"===j&&!m){var e=Object(a.a)(c);return e[O-1].flagStatus="flagged"===b?"unflagged":"flagged",o(e)}}}),N=Object(u.jsxs)(u.Fragment,{children:[(!m&&"inGame"===r||m&&h)&&"flagged"===b?Object(u.jsx)("p",{style:{fontWeight:"normal"},className:b,children:"\ud83d\udea9"}):null,"inGame"===r||h||"flagged"!==b?null:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{style:{fontWeight:"normal"},className:b,children:"\ud83d\udea9"}),Object(u.jsx)("span",{style:{position:"absolute",color:"white",fontSize:"2.2rem",paddingBottom:"2px"},children:"\ud83d\udec7"})]}),m||"maybe"!==b?null:Object(u.jsx)("p",{children:"\u2754"}),"inGame"===r?!h&&g&&m?Object(u.jsx)("p",{children:g}):null:h?"flagged"!==b?"wonGame"===r?Object(u.jsx)("p",{children:"\ud83c\udf3c"}):Object(u.jsx)("p",{children:"\ud83d\udca3"}):"wonGame"===r?Object(u.jsx)("p",{children:"\ud83c\udf3c"}):null:g&&m?Object(u.jsx)("p",{children:g}):null]});return Object(u.jsx)("div",Object(l.a)(Object(l.a)({onMouseDown:v,onTouchStart:v,onMouseUp:w,onTouchEnd:w,onMouseLeave:w,onDoubleClick:function(){m&&!h&&g&&f(t,c)}},S),{},{className:"tile id-".concat(O," ").concat(h?"mine":""," ").concat(m?"swept":""," around-").concat(g),onContextMenu:function(e){e.preventDefault(),function(){if(!m){var e=Object(a.a)(c);return e[O-1].flagStatus="flagged"===b?"unflagged":"flagged",o(e)}m&&!h&&g&&f(t,c)}()},onClick:function(){if("unflagged"===b&&h&&"inGame"===r)return i([O]);if("unflagged"===b&&!m&&"inGame"===r){var e=Object(a.a)(c);e[O-1].swept=!0,0!==g||h||n(e[O-1],e),o(e)}},children:N}))}function j(e){var t=e.gameStatus,n=e.currentFormat,o=(e.setMessage,e.setNewRecordOpen),i=e.setOldAndNewRecords,r=Object(c.useState)(0),a=Object(s.a)(r,2),l=a[0],d=a[1];return Object(c.useEffect)((function(){if("inGame"===t){var e=setInterval((function(){d(Number((l+.1).toFixed(1)))}),100);return function(){return clearInterval(e)}}}),[t,l]),Object(c.useEffect)((function(){if(console.log("The game status is ".concat(t)),"wonGame"===t){var e=localStorage.getItem(n);(!e||l<Number(e))&&(localStorage.setItem(n,l.toString()),i({old:e?Number(e):void 0,new:l}),o(!0))}"preGame"===t&&d(0)}),[t]),Object(u.jsxs)(u.Fragment,{children:["\ud83d\udd52"," ",l.toString().includes(".")?l:l.toString()+".0","s"]})}var m=n(10),h=n.n(m),g=n(13),b=(n(25),{easy:{name:"easy",mineRatio:.1},medium:{name:"medium",mineRatio:.175},hard:{name:"hard",mineRatio:.25}}),O=n(4),x=n(8);function p(e){var t=e.swipeToFlag,n=e.setSwipeToFlag,c=e.setMineRatio,o=e.mineRatio,i=e.swipeToChord,r=e.setSwipeToChord,a=e.numOfRows,s=e.setNumOfRows,l=!0;return Object(g.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.getInstalledRelatedApps();case 2:return t=e.sent,e.next=5,t.length;case 5:if(!e.sent){e.next=7;break}l=!1;case 7:case"end":return e.stop()}}),e)})))(),Object(u.jsxs)(O.d,{children:[Object(u.jsx)(O.f,{children:Object(u.jsx)(x.b,{})}),Object(u.jsx)(O.c,{className:"modal-overlay"}),Object(u.jsxs)(O.b,{className:"modal-body settings-panel",children:[Object(u.jsxs)("div",{className:"modal-header",children:[Object(u.jsx)(O.e,{className:"modal-title",children:"Settings"}),Object(u.jsx)(O.a,{className:"modal-close",children:Object(u.jsx)(x.a,{})})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:"selector",children:[Object(u.jsx)("div",{className:17===a?"selected":void 0,onClick:function(){s(17),localStorage.setItem("numOfRows","17")},children:Object(u.jsxs)("h3",{children:["17",17===a&&" rows"]})}),Object(u.jsx)("div",{className:18===a?"selected":void 0,onClick:function(){s(18),localStorage.setItem("numOfRows","18")},children:Object(u.jsxs)("h3",{children:["18",18===a&&" rows"]})}),Object(u.jsx)("div",{className:19===a?"selected":void 0,onClick:function(){s(19),localStorage.setItem("numOfRows","19")},children:Object(u.jsxs)("h3",{children:["19",19===a&&" rows"]})}),Object(u.jsx)("div",{className:20===a?"selected":void 0,onClick:function(){s(20),localStorage.setItem("numOfRows","20")},children:Object(u.jsxs)("h3",{children:["20",20===a&&" rows"]})})]}),Object(u.jsxs)("div",{className:"selector",children:[Object(u.jsxs)("div",{className:o===b.easy.mineRatio?"selected":void 0,onClick:function(){c(b.easy.mineRatio),localStorage.setItem("mineRatio",b.easy.mineRatio.toString())},children:[Object(u.jsx)("h3",{children:"Easy"}),Object(u.jsx)("p",{children:"10% mines"})]}),Object(u.jsxs)("div",{className:o===b.medium.mineRatio?"selected":void 0,onClick:function(){c(b.medium.mineRatio),localStorage.setItem("mineRatio",b.medium.mineRatio.toString())},children:[Object(u.jsx)("h3",{children:"Medium"}),Object(u.jsx)("p",{children:"17% mines"})]}),Object(u.jsxs)("div",{className:o===b.hard.mineRatio?"selected":void 0,onClick:function(){c(b.hard.mineRatio),localStorage.setItem("mineRatio",b.hard.mineRatio.toString())},children:[Object(u.jsx)("h3",{children:"Hard"}),Object(u.jsx)("p",{children:"25% mines"})]})]}),Object(u.jsxs)("p",{children:["Best time on ",a," rows &"," ",o===b.hard.mineRatio&&"hard",o===b.medium.mineRatio&&"medium",o===b.easy.mineRatio&&"easy",":"," ",localStorage.getItem("10x".concat(a,"x").concat(o,"m"))?Object(u.jsx)("strong",{children:localStorage.getItem("10x".concat(a,"x").concat(o,"m"))+"s"}):"none"]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"checkbox",checked:"off"!==t,onChange:function(){"off"===t?(n("on"),localStorage.setItem("swipeToFlag","on")):(n("off"),localStorage.setItem("swipeToFlag","off"))}}),Object(u.jsx)("div",{children:Object(u.jsx)("h3",{children:"Swipe to Flag"})})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"checkbox",checked:"off"!==i,onChange:function(){"off"===i?(r("on"),localStorage.setItem("swipeToChord","on")):(r("off"),localStorage.setItem("swipeToChord","off"))}}),Object(u.jsx)("div",{children:Object(u.jsx)("h3",{children:"Swipe to Chord"})})]}),l?Object(u.jsxs)("p",{children:["Swipe to flag & chord works best when you have installed this"," ","web app on your device. This will also allow you to play offline."]}):null,Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{children:["Made with \u2764\ufe0f by"," ",Object(u.jsx)("a",{href:"https://www.linkedin.com/in/peter-ty-liu/",target:"_blank",rel:"noreferrer",children:"PL"})]}),Object(u.jsxs)("p",{style:{fontSize:"14px",marginTop:"14px"},children:["Enjoying the game?"," ",Object(u.jsx)("a",{href:"",onClick:function(){var e=Object(g.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),navigator.clipboard.writeText("3AncbaTiG8qT7Lq2XhoXYGzMB4mpsGUCJ6").then((function(){alert("Bitcoin address copied to clipboard")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:"Buy me a cup of coffee"})," ",":)"]}),Object(u.jsx)("p",{style:{fontSize:"14px",opacity:"0.5",marginTop:"14px"},children:"v2.0.3 (5/12/2021)"})]})]})]})}n(26);function v(){return Object(u.jsxs)(O.d,{defaultOpen:!localStorage.getItem("hasSeenInstructions"),children:[Object(u.jsx)(O.f,{children:Object(u.jsx)(x.c,{})}),Object(u.jsx)(O.c,{className:"modal-overlay"}),Object(u.jsxs)(O.b,{className:"modal-body",children:[Object(u.jsxs)("div",{className:"modal-header",children:[Object(u.jsx)(O.e,{className:"modal-title",children:"How to Play"}),Object(u.jsx)(O.a,{className:"modal-close",children:Object(u.jsx)(x.a,{})})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("section",{className:"instructions-section",children:[Object(u.jsx)("img",{src:"images/click.gif",alt:"Sweeping a tile"}),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Click or tap"})," a tile to ",Object(u.jsx)("strong",{children:"sweep"})," it"]})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("section",{className:"instructions-section",children:[Object(u.jsx)("img",{src:"images/flag.gif",alt:"Flagging a tile"}),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Right-click or long-press"})," an unswept tile to"," ",Object(u.jsx)("strong",{children:"flag"})," it"]})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("section",{className:"instructions-section",children:[Object(u.jsx)("img",{onLoad:function(){localStorage.setItem("hasSeenInstructions","true")},src:"images/chord.gif",alt:"Chording a tile"}),Object(u.jsxs)("p",{children:[Object(u.jsx)("strong",{children:"Right-click, double-click, or long-press"})," a swept tile to ",Object(u.jsx)("strong",{children:"chord"})," it"]})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("p",{children:"Controls and difficulty can be customized in the settings menu"}),Object(u.jsx)(O.a,{className:"got-it",children:"Got it!"})]})]})}n(27);var w=n(15),S=n.n(w),N=["Wow!","Amazing!","Incredible!","Incroyable!","Superb!","Unbelievable!","Tally-ho!","Bully!","Excellent!","Great!","Huzzah!","Hooray!","Yahoo!"];function R(e){var t,n=e.newRecordOpen,c=e.setNewRecordOpen,o=e.numOfRows,i=e.mineRatio,r=e.oldAndNewRecords;return Object(u.jsxs)(O.d,{open:n,children:[Object(u.jsx)(O.c,{className:"modal-overlay"}),Object(u.jsxs)(O.b,{className:"modal-body",children:[Object(u.jsx)(S.a,{recycle:!1,style:{width:"100%"}}),Object(u.jsx)(O.e,{className:"modal-title",style:{textAlign:"center"},children:"New record!"}),Object(u.jsxs)("h1",{style:{fontWeight:"normal",textAlign:"center"},children:["\ud83c\udfc6 ",Object(u.jsxs)("strong",{children:[r.new,"s"]})]}),Object(u.jsxs)("p",{style:{textAlign:"center"},children:["Previous record for ",o," rows &"," ",null===(t=Object.values(b).find((function(e){return e.mineRatio===i})))||void 0===t?void 0:t.name,": ",r.old?r.old+"s":"none"]}),Object(u.jsx)(O.a,{className:"close-new-record",onClick:function(){return c(!1)},children:N[Math.floor(Math.random()*N.length)]})]})]})}function y(e,t){var n=e.r,c=e.c,o=[t.find((function(e){return e.r===n&&e.c===c+1})),t.find((function(e){return e.r===n&&e.c===c-1})),t.find((function(e){return e.r===n+1&&e.c===c})),t.find((function(e){return e.r===n-1&&e.c===c})),t.find((function(e){return e.r===n+1&&e.c===c+1})),t.find((function(e){return e.r===n-1&&e.c===c-1})),t.find((function(e){return e.r===n+1&&e.c===c-1})),t.find((function(e){return e.r===n-1&&e.c===c+1}))].filter((function(e){return(null===e||void 0===e?void 0:e.id)&&!(null===e||void 0===e?void 0:e.swept)}));o.forEach((function(e){e&&"unflagged"===e.flagStatus&&(t[e.id-1].swept=!0),0===(null===e||void 0===e?void 0:e.minesAround)&&o.length>0&&y(e,t)}))}var k=function(){var e=10,t=Object(c.useState)(localStorage.getItem("numOfRows")?Number(localStorage.getItem("numOfRows")):17),n=Object(s.a)(t,2),o=n[0],i=n[1],r=Object(c.useState)(localStorage.getItem("mineRatio")?Number(localStorage.getItem("mineRatio")):.175),l=Object(s.a)(r,2),d=l[0],m=l[1],h=Object(c.useState)(localStorage.getItem("swipeToFlag")?localStorage.getItem("swipeToFlag"):"off"),g=Object(s.a)(h,2),b=g[0],O=g[1],x=Object(c.useState)(localStorage.getItem("swipeToChord")?localStorage.getItem("swipeToChord"):"off"),w=Object(s.a)(x,2),S=w[0],N=w[1];function k(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:d,i=[],r=1;r<=n;r++)for(var a=1;a<=t;a++)i.push({c:a,r:r,isMine:!1,id:a+(r-1)*t,swept:!1,flagStatus:"unflagged",minesAround:0});for(var s=Math.round(t*n*c);s>0;){var l=Math.floor(Math.random()*n*t);i[l].isMine||(i[l].isMine=!0,s--)}return i.forEach((function(e){var t=e.r,n=e.c;e.minesAround=[i.find((function(e){return e.r===t&&e.c===n+1})),i.find((function(e){return e.r===t&&e.c===n-1})),i.find((function(e){return e.r===t+1&&e.c===n})),i.find((function(e){return e.r===t-1&&e.c===n})),i.find((function(e){return e.r===t+1&&e.c===n+1})),i.find((function(e){return e.r===t-1&&e.c===n-1})),i.find((function(e){return e.r===t+1&&e.c===n-1})),i.find((function(e){return e.r===t-1&&e.c===n+1}))].filter((function(e){return null===e||void 0===e?void 0:e.isMine})).length})),i}var I=Object(c.useState)(!1),C=Object(s.a)(I,2),T=C[0],G=C[1],M=Object(c.useState)({old:0,new:0}),A=Object(s.a)(M,2),F=A[0],E=A[1],W=Object(c.useState)(k(e,o,d)),B=Object(s.a)(W,2),z=B[0],L=B[1],D=Object(c.useState)("preGame"),U=Object(s.a)(D,2),q=U[0],P=U[1],H=Object(c.useState)(z),J=Object(s.a)(H,2),X=J[0],Y=J[1],$=Object(c.useState)(localStorage.getItem("".concat(e,"x").concat(o,"x").concat(d,"m"))?"\ud83c\udfc6 ".concat(localStorage.getItem("".concat(e,"x").concat(o,"x").concat(d,"m"))+"s"):"\ud83c\udfc6 none"),_=Object(s.a)($,2),K=_[0],Q=_[1];Object(c.useEffect)((function(){Q(localStorage.getItem("".concat(e,"x").concat(o,"x").concat(d,"m"))?"\ud83c\udfc6 ".concat(localStorage.getItem("".concat(e,"x").concat(o,"x").concat(d,"m"))+"s"):"\ud83c\udfc6 none")}),[d,o]),Object(c.useEffect)((function(){L(k())}),[o]),Object(c.useEffect)((function(){"inGame"===q&&X.filter((function(e){return e.swept})).length===o*e-Math.round(e*o*d)&&V()}),[X]);var V=function(){P("wonGame")};function Z(e){P("lostGame"),e.forEach((function(e){var t;null===(t=document.querySelector(".id-".concat(e)))||void 0===t||t.setAttribute("style","background: #d00")}));for(var t=Object(a.a)(X),n=0;n<t.length;n++)t[n].isMine&&(t[n].swept=!0);Y(t)}var ee=function(){Y(z),P("preGame"),Q(localStorage.getItem("".concat(e,"x").concat(o,"x").concat(d,"m"))?"\ud83c\udfc6 ".concat(localStorage.getItem("".concat(e,"x").concat(o,"x").concat(d,"m"))+"s"):"\ud83c\udfc6 none")},te=function(e,t){var n=Object(a.a)(t),c=e.r,o=e.c;if(e.minesAround===[n.find((function(e){return e.r===c&&e.c===o+1})),n.find((function(e){return e.r===c&&e.c===o-1})),n.find((function(e){return e.r===c+1&&e.c===o})),n.find((function(e){return e.r===c-1&&e.c===o})),n.find((function(e){return e.r===c+1&&e.c===o+1})),n.find((function(e){return e.r===c-1&&e.c===o-1})),n.find((function(e){return e.r===c+1&&e.c===o-1})),n.find((function(e){return e.r===c-1&&e.c===o+1}))].filter((function(e){return"flagged"===(null===e||void 0===e?void 0:e.flagStatus)})).length){var i=[n.find((function(e){return e.r===c&&e.c===o+1})),n.find((function(e){return e.r===c&&e.c===o-1})),n.find((function(e){return e.r===c+1&&e.c===o})),n.find((function(e){return e.r===c-1&&e.c===o})),n.find((function(e){return e.r===c+1&&e.c===o+1})),n.find((function(e){return e.r===c-1&&e.c===o-1})),n.find((function(e){return e.r===c+1&&e.c===o-1})),n.find((function(e){return e.r===c-1&&e.c===o+1}))].filter((function(e){return!(null===e||void 0===e?void 0:e.swept)&&"unflagged"===(null===e||void 0===e?void 0:e.flagStatus)})),r=i.filter((function(e){return null===e||void 0===e?void 0:e.isMine})).map((function(e){return null===e||void 0===e?void 0:e.id}));if(r.length)return Z(r);i.forEach((function(e){e&&(e.swept=!0),0===(null===e||void 0===e?void 0:e.minesAround)&&y(e,n)})),Y(n)}};Object(c.useEffect)((function(){ee()}),[o]);var ne=z.map((function(t,n){return 1===t.c?Object(u.jsx)("div",{onContextMenu:function(e){e.preventDefault()},children:z.map((function(t){return t.r===n/e+1?Object(u.jsx)("div",{className:"tile pre-game",onClick:function(){!function(e){for(var t=k();t[e-1].isMine||0!==t[e-1].minesAround;)t=k();t[e-1].swept=!0,y(t[e-1],t),Y(t),P("inGame")}(t.id)}},"pg-r".concat(t.r,"c").concat(t.c)):null}))},"pg-".concat(n)):null})),ce=X.map((function(t,n){return 1===t.c?Object(u.jsx)("div",{children:X.map((function(t){return t.r===n/e+1?Object(u.jsx)(f,{tile:t,chord:te,boardState:X,setBoardState:Y,floodFill:y,loseGame:Z,gameStatus:q,swipeToChord:S,swipeToFlag:b},"r".concat(t.r,"c").concat(t.c)):null}))},n):null}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(R,{oldAndNewRecords:F,numOfRows:o,mineRatio:d,newRecordOpen:T,setNewRecordOpen:G}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"controls",children:[Object(u.jsx)("div",{className:"dark-bg",children:"preGame"===q?K:Object(u.jsx)(j,{gameStatus:q,setMessage:Q,currentFormat:"".concat(e,"x").concat(o,"x").concat(d,"m"),setNewRecordOpen:G,setOldAndNewRecords:E})}),"wonGame"===q&&Object(u.jsx)("div",{className:"ms-button",onClick:ee,children:"\ud83d\ude0e"}),"lostGame"===q&&Object(u.jsx)("div",{className:"ms-button",onClick:ee,children:"\ud83d\ude2c"}),Object(u.jsx)("div",{children:"inGame"===q?Object(u.jsx)("div",{className:"dark-bg",children:"\ud83d\udca3 \n              ".concat(Math.round(e*o*d)-X.filter((function(e){return"flagged"===e.flagStatus})).length)}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v,{}),Object(u.jsx)(p,{swipeToFlag:b,setSwipeToFlag:O,swipeToChord:S,setSwipeToChord:N,setMineRatio:m,mineRatio:d,numOfRows:o,setNumOfRows:i})]})})]}),Object(u.jsx)("div",{onContextMenu:function(e){return e.preventDefault()},className:"board ".concat(("lostGame"===q||"wonGame"===q)&&"postGame"),children:"preGame"===q?ne:ce})]})]})},I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");I?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):C(t,e)}))}}()}},[[28,1,2]]]);
//# sourceMappingURL=main.10331efb.chunk.js.map