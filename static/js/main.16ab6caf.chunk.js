(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{12:function(n,e,t){},14:function(n,e,t){},15:function(n,e,t){"use strict";t.r(e);var i=t(1),r=t.n(i),c=t(7),o=t.n(c),a=(t(12),t(5)),s=t(2),u=t(0);function l(n){var e=n.isMine,t=n.minesAround,i=n.swept,r=n.setTilesRemaining,c=n.tilesRemaining,o=n.floodFill,s=n.boardState,l=n.setBoardState,f=n.id,d=n.loseGame;return Object(u.jsx)("div",{className:"tile ".concat(e?"mine":""," ").concat(i?"swept":""," around-").concat(t),onClick:function(){if(e&&c>0)return d(f);if(!i&&c>0){var n=Object(a.a)(s);n[f-1].swept=!0,r(c-1),0!=t||e||o(n[f-1],n),l(n),r(n.filter((function(n){return!n.swept&&!n.isMine})).length)}},children:!i&&c>0?null:Object(u.jsx)("p",{children:e?"\ud83d\udca3":t})})}t(14);var f=function(){var n=10,e="".concat(n,"x").concat(20,"x").concat(35,"m");function t(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:35,r=[],c=1;c<=t;c++)for(var o=1;o<=e;o++)r.push({c:o,r:c,isMine:!1,id:o+(c-1)*e,swept:!1});for(var a=i;a>0;){var s=Math.floor(Math.random()*t*e);r[s].isMine||(r[s].isMine=!0,a--)}return r.forEach((function(n){var e=n.r,t=n.c;n.minesAround=[r.find((function(n){return n.r==e&&n.c==t+1})),r.find((function(n){return n.r==e&&n.c==t-1})),r.find((function(n){return n.r==e+1&&n.c==t})),r.find((function(n){return n.r==e-1&&n.c==t})),r.find((function(n){return n.r==e+1&&n.c==t+1})),r.find((function(n){return n.r==e-1&&n.c==t-1})),r.find((function(n){return n.r==e+1&&n.c==t-1})),r.find((function(n){return n.r==e-1&&n.c==t+1}))].filter((function(n){return null===n||void 0===n?void 0:n.isMine})).length})),r}function r(n,e){var t=n.r,i=n.c,c=[e.find((function(n){return n.r==t&&n.c==i+1})),e.find((function(n){return n.r==t&&n.c==i-1})),e.find((function(n){return n.r==t+1&&n.c==i})),e.find((function(n){return n.r==t-1&&n.c==i})),e.find((function(n){return n.r==t+1&&n.c==i+1})),e.find((function(n){return n.r==t-1&&n.c==i-1})),e.find((function(n){return n.r==t+1&&n.c==i-1})),e.find((function(n){return n.r==t-1&&n.c==i+1}))].filter((function(n){return(null===n||void 0===n?void 0:n.id)&&!(null===n||void 0===n?void 0:n.swept)}));c.forEach((function(n){e[n.id-1].swept=!0,0==n.minesAround&&c.length>0&&r(n,e)}))}var c=t(),o=Object(i.useState)(165),f=Object(s.a)(o,2),d=f[0],v=f[1],m=Object(i.useState)("preGame"),p=Object(s.a)(m,2),h=p[0],g=p[1],j=Object(i.useState)(0),b=Object(s.a)(j,2),w=b[0],O=b[1],S=Object(i.useState)(c),x=Object(s.a)(S,2),k=x[0],M=x[1],G=Object(i.useState)(localStorage.getItem(e)?"\ud83c\udfc6 ".concat(localStorage.getItem(e)+"s"):"\ud83c\udfc6 none"),A=Object(s.a)(G,2),N=A[0],I=A[1];Object(i.useEffect)((function(){if("inGame"==h){var n=setInterval((function(){O(Number((w+.1).toFixed(1)))}),100);return function(){return clearInterval(n)}}}),[h,w]),Object(i.useEffect)((function(){0==d&&W()}),[d]);var W=function(){g("postGame");var n=localStorage.getItem(e);(!n||w<n)&&(localStorage.setItem(e,w),I("\ud83c\udf89 New record!"))},E=function(n){for(var e=Object(a.a)(k),t=0;t<e.length;t++)e[t].swept=!0;M(e),g("postGame")},y=c.map((function(e,i){if(1==e.c)return Object(u.jsx)("div",{children:k.map((function(e){if(e.r==i/n+1)return Object(u.jsx)("div",{className:"tile pre-game",onClick:function(){!function(n){for(var e=t();e[n-1].isMine||0!=e[n-1].minesAround;)e=t();e[n-1].swept=!0,r(e[n-1],e),v(e.filter((function(n){return!n.swept&&!n.isMine})).length),M(e),O(0),g("inGame")}(e.id)}},"pg-r".concat(e.r,"c").concat(e.c))}))},"pg-".concat(i))})),R=k.map((function(e,t){if(1==e.c)return Object(u.jsx)("div",{children:k.map((function(e){if(e.r==t/n+1)return Object(u.jsx)(l,{minesAround:e.minesAround,isMine:e.isMine,setTilesRemaining:v,tilesRemaining:d,swept:e.swept,c:e.c,r:e.r,boardState:k,setBoardState:M,floodFill:r,id:e.id,loseGame:E},"r".concat(e.r,"c").concat(e.c))}))},t)}));return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"controls",children:[Object(u.jsx)("span",{children:N}),"postGame"==h&&Object(u.jsx)("div",{onClick:function(){M(c),v(165),O(0),g("preGame"),I(localStorage.getItem(e)?"\ud83c\udfc6 ".concat(localStorage.getItem(e)+"s"):"\ud83c\udfc6 none")},children:0==d?"\ud83d\ude0e":"\ud83d\ude2c"}),Object(u.jsxs)("span",{style:{textAlign:"right"},children:[w.toString().includes(".")?w:w.toString()+".0","s"]})]}),Object(u.jsx)("div",{className:"board ".concat("postGame"==h&&"postGame"),children:"preGame"==h?y:R})]})})},d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/minesweeper",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/minesweeper","/service-worker.js");d?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var i=t.headers.get("content-type");404===t.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):v(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):v(e,n)}))}}()}},[[15,1,2]]]);
//# sourceMappingURL=main.16ab6caf.chunk.js.map