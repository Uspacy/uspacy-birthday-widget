var UspacyBirthdayWidget;!function(){"use strict";var n,e,t,r,u,o,i,f,c,a,l,s,d,h,p,v,b,m,g,y,w,j,P,k,x,S={9232:function(n,e,t){var r={"./app":function(){return Promise.all([t.e(683),t.e(527),t.e(677),t.e(528),t.e(714)]).then((function(){return function(){return t(3714)}}))},"./settings":function(){return t.e(878).then((function(){return function(){return t(5878)}}))}},u=function(n,e){return t.R=e,e=t.o(r,n)?r[n]():Promise.resolve().then((function(){throw new Error('Module "'+n+'" does not exist in container.')})),t.R=void 0,e},o=function(n,e){if(t.S){var r="default",u=t.S[r];if(u&&u!==n)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[r]=n,t.I(r,e)}};t.d(e,{get:function(){return u},init:function(){return o}})}},O={};function E(n){var e=O[n];if(void 0!==e)return e.exports;var t=O[n]={id:n,loaded:!1,exports:{}};return S[n](t,t.exports,E),t.loaded=!0,t.exports}E.m=S,E.c=O,E.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return E.d(e,{a:e}),e},e=Object.getPrototypeOf?function(n){return Object.getPrototypeOf(n)}:function(n){return n.__proto__},E.t=function(t,r){if(1&r&&(t=this(t)),8&r)return t;if("object"==typeof t&&t){if(4&r&&t.__esModule)return t;if(16&r&&"function"==typeof t.then)return t}var u=Object.create(null);E.r(u);var o={};n=n||[null,e({}),e([]),e(e)];for(var i=2&r&&t;"object"==typeof i&&!~n.indexOf(i);i=e(i))Object.getOwnPropertyNames(i).forEach((function(n){o[n]=function(){return t[n]}}));return o.default=function(){return t},E.d(u,o),u},E.d=function(n,e){for(var t in e)E.o(e,t)&&!E.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},E.f={},E.e=function(n){return Promise.all(Object.keys(E.f).reduce((function(e,t){return E.f[t](n,e),e}),[]))},E.u=function(n){return"static/js/"+n+"."+{118:"c9a49400",140:"9794c20b",168:"c13deaab",235:"1c85eaf7",308:"0576fa4d",333:"3806fa24",380:"80727d72",394:"418a80d1",421:"65677e64",479:"994c7480",491:"508396df",527:"236ebec6",528:"e139967e",540:"ca1f1a50",561:"4e7db2c8",583:"f49068fd",635:"370fd742",648:"79746adf",677:"e57b6b8c",683:"b8947c1b",714:"b519d84b",769:"83cbcc0d",780:"f72d4540",800:"4fc78de0",802:"a9d87d53",804:"84c74c88",833:"a04b5bdf",844:"7120a3ad",848:"92698590",860:"287a1f6d",878:"7bb1975f",929:"a3e9ca53",961:"c7dfc6c9"}[n]+".chunk.js"},E.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),E.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t={},r="container:",E.l=function(n,e,u,o){if(t[n])t[n].push(e);else{var i,f;if(void 0!==u)for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var l=c[a];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==r+u){i=l;break}}i||(f=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,E.nc&&i.setAttribute("nonce",E.nc),i.setAttribute("data-webpack",r+u),i.src=n),t[n]=[e];var s=function(e,r){i.onerror=i.onload=null,clearTimeout(d);var u=t[n];if(delete t[n],i.parentNode&&i.parentNode.removeChild(i),u&&u.forEach((function(n){return n(r)})),e)return e(r)},d=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),f&&document.head.appendChild(i)}},E.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},E.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n},function(){E.S={};var n={},e={};E.I=function(t,r){r||(r=[]);var u=e[t];if(u||(u=e[t]={}),!(r.indexOf(u)>=0)){if(r.push(u),n[t])return n[t];E.o(E.S,t)||(E.S[t]={});var o=E.S[t],i="container",f=function(n,e,t,r){var u=o[n]=o[n]||{},f=u[e];(!f||!f.loaded&&(!r!=!f.eager?r:i>f.from))&&(u[e]={get:t,from:i,eager:!!r})},c=[];return"default"===t&&(f("@emotion/react","11.11.0",(function(){return Promise.all([E.e(800),E.e(527),E.e(168)]).then((function(){return function(){return E(6800)}}))})),f("@emotion/styled","11.11.0",(function(){return Promise.all([E.e(527),E.e(677),E.e(860)]).then((function(){return function(){return E(1479)}}))})),f("@reduxjs/toolkit","1.9.5",(function(){return E.e(118).then((function(){return function(){return E(3118)}}))})),f("@uspacy/sdk","0.0.18",(function(){return E.e(491).then((function(){return function(){return E(491)}}))})),f("@uspacy/store","0.0.22",(function(){return Promise.all([E.e(394),E.e(527),E.e(333),E.e(848)]).then((function(){return function(){return E(8394)}}))})),f("i18next-resources-to-backend","1.1.4",(function(){return E.e(235).then((function(){return function(){return E(1235)}}))})),f("i18next","23.4.6",(function(){return E.e(635).then((function(){return function(){return E(2635)}}))})),f("react-dom","18.2.0",(function(){return Promise.all([E.e(961),E.e(527)]).then((function(){return function(){return E(961)}}))})),f("react-i18next","11.16.7",(function(){return Promise.all([E.e(527),E.e(802)]).then((function(){return function(){return E(802)}}))})),f("react-redux","8.1.2",(function(){return Promise.all([E.e(780),E.e(527),E.e(929)]).then((function(){return function(){return E(8780)}}))})),f("react-router-dom","6.4.1",(function(){return Promise.all([E.e(648),E.e(527)]).then((function(){return function(){return E(2648)}}))})),f("react","18.2.0",(function(){return E.e(540).then((function(){return function(){return E(6540)}}))}))),n[t]=c.length?Promise.all(c).then((function(){return n[t]=1})):1}}}(),function(){var n;E.g.importScripts&&(n=E.g.location+"");var e=E.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=t[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),E.p=n}(),u=function(n){var e=function(n){return n.split(".").map((function(n){return+n==n?+n:n}))},t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(n),r=t[1]?e(t[1]):[];return t[2]&&(r.length++,r.push.apply(r,e(t[2]))),t[3]&&(r.push([]),r.push.apply(r,e(t[3]))),r},o=function(n,e){n=u(n),e=u(e);for(var t=0;;){if(t>=n.length)return t<e.length&&"u"!=(typeof e[t])[0];var r=n[t],o=(typeof r)[0];if(t>=e.length)return"u"==o;var i=e[t],f=(typeof i)[0];if(o!=f)return"o"==o&&"n"==f||"s"==f||"u"==o;if("o"!=o&&"u"!=o&&r!=i)return r<i;t++}},i=function(n){var e=n[0],t="";if(1===n.length)return"*";if(e+.5){t+=0==e?">=":-1==e?"<":1==e?"^":2==e?"~":e>0?"=":"!=";for(var r=1,u=1;u<n.length;u++)r--,t+="u"==(typeof(f=n[u]))[0]?"-":(r>0?".":"")+(r=2,f);return t}var o=[];for(u=1;u<n.length;u++){var f=n[u];o.push(0===f?"not("+c()+")":1===f?"("+c()+" || "+c()+")":2===f?o.pop()+" "+o.pop():i(f))}return c();function c(){return o.pop().replace(/^\((.+)\)$/,"$1")}},f=function(n,e){if(0 in n){e=u(e);var t=n[0],r=t<0;r&&(t=-t-1);for(var o=0,i=1,c=!0;;i++,o++){var a,l,s=i<n.length?(typeof n[i])[0]:"";if(o>=e.length||"o"==(l=(typeof(a=e[o]))[0]))return!c||("u"==s?i>t&&!r:""==s!=r);if("u"==l){if(!c||"u"!=s)return!1}else if(c)if(s==l)if(i<=t){if(a!=n[i])return!1}else{if(r?a>n[i]:a<n[i])return!1;a!=n[i]&&(c=!1)}else if("s"!=s&&"n"!=s){if(r||i<=t)return!1;c=!1,i--}else{if(i<=t||l<s!=r)return!1;c=!1}else"s"!=s&&"n"!=s&&(c=!1,i--)}}var d=[],h=d.pop.bind(d);for(o=1;o<n.length;o++){var p=n[o];d.push(1==p?h()|h():2==p?h()&h():p?f(p,e):!h())}return!!h()},c=function(n,e){return n&&E.o(n,e)},a=function(n){return n.loaded=1,n.get()},l=function(n){return Object.keys(n).reduce((function(e,t){return n[t].eager&&(e[t]=n[t]),e}),{})},s=function(n,e,t,r){var u=r?l(n[e]):n[e];return(e=Object.keys(u).reduce((function(n,e){return!f(t,e)||n&&!o(n,e)?n:e}),0))&&u[e]},d=function(n,e,t){var r=t?l(n[e]):n[e];return Object.keys(r).reduce((function(n,e){return!n||!r[n].loaded&&o(n,e)?e:n}),0)},h=function(n,e,t,r){return"Unsatisfied version "+t+" from "+(t&&n[e][t].from)+" of shared singleton module "+e+" (required "+i(r)+")"},p=function(n,e,t,r,u){var o=n[t];return"No satisfying version ("+i(r)+")"+(u?" for eager consumption":"")+" of shared module "+t+" found in shared scope "+e+".\nAvailable versions: "+Object.keys(o).map((function(n){return n+" from "+o[n].from})).join(", ")},v=function(n){throw new Error(n)},b=function(n){"undefined"!=typeof console&&console.warn&&console.warn(n)},g=function(n,e,t){return t?t():function(n,e){return v("Shared module "+e+" doesn't exist in shared scope "+n)}(n,e)},y=(m=function(n){return function(e,t,r,u,o){var i=E.I(e);return i&&i.then&&!r?i.then(n.bind(n,e,E.S[e],t,!1,u,o)):n(e,E.S[e],t,r,u,o)}})((function(n,e,t,r,u,o){if(!c(e,t))return g(n,t,o);var i=s(e,t,u,r);return i?a(i):o?o():void v(p(e,n,t,u,r))})),w=m((function(n,e,t,r,u,o){if(!c(e,t))return g(n,t,o);var i=d(e,t,r);return f(u,i)||b(h(e,t,i,u)),a(e[t][i])})),j={},P={1527:function(){return w("default","react",!1,[4,18,2,0],(function(){return E.e(540).then((function(){return function(){return E(6540)}}))}))},6677:function(){return w("default","@emotion/react",!1,[4,11,11,0],(function(){return E.e(800).then((function(){return function(){return E(6800)}}))}))},1927:function(){return w("default","react-redux",!1,[4,8,1,2],(function(){return Promise.all([E.e(780),E.e(929)]).then((function(){return function(){return E(8780)}}))}))},5377:function(){return w("default","@reduxjs/toolkit",!1,[4,1,9,5],(function(){return E.e(118).then((function(){return function(){return E(3118)}}))}))},6927:function(){return w("default","@uspacy/sdk",!1,[3,0,0,18],(function(){return E.e(491).then((function(){return function(){return E(491)}}))}))},5929:function(){return w("default","react-dom",!1,[4,18,2,0],(function(){return E.e(961).then((function(){return function(){return E(961)}}))}))},612:function(){return y("default","i18next-resources-to-backend",!1,[1,1,1,4],(function(){return E.e(235).then((function(){return function(){return E(1235)}}))}))},1757:function(){return w("default","@emotion/styled",!1,[4,11,11,0],(function(){return E.e(479).then((function(){return function(){return E(1479)}}))}))},2604:function(){return w("default","@uspacy/store",!1,[3,0,0,22],(function(){return Promise.all([E.e(394),E.e(333)]).then((function(){return function(){return E(8394)}}))}))},3062:function(){return y("default","i18next",!1,[1,23,4,6],(function(){return E.e(635).then((function(){return function(){return E(2635)}}))}))},8078:function(){return y("default","react-router-dom",!1,[4,6,4,1],(function(){return E.e(648).then((function(){return function(){return E(2648)}}))}))},8504:function(){return y("default","react-i18next",!1,[4,11,16,7],(function(){return E.e(421).then((function(){return function(){return E(802)}}))}))}},k={333:[1927,5377,6927],527:[1527],528:[612,1757,2604,3062,8078,8504],677:[6677],929:[5929]},x={},E.f.consumes=function(n,e){E.o(k,n)&&k[n].forEach((function(n){if(E.o(j,n))return e.push(j[n]);if(!x[n]){var t=function(e){j[n]=0,E.m[n]=function(t){delete E.c[n],t.exports=e()}};x[n]=!0;var r=function(e){delete j[n],E.m[n]=function(t){throw delete E.c[n],e}};try{var u=P[n]();u.then?e.push(j[n]=u.then(t).catch(r)):t(u)}catch(n){r(n)}}}))},function(){var n={17:0};E.f.j=function(e,t){var r=E.o(n,e)?n[e]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(333|527|677|929)$/.test(e))n[e]=0;else{var u=new Promise((function(t,u){r=n[e]=[t,u]}));t.push(r[2]=u);var o=E.p+E.u(e),i=new Error;E.l(o,(function(t){if(E.o(n,e)&&(0!==(r=n[e])&&(n[e]=void 0),r)){var u=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+u+": "+o+")",i.name="ChunkLoadError",i.type=u,i.request=o,r[1](i)}}),"chunk-"+e,e)}};var e=function(e,t){var r,u,o=t[0],i=t[1],f=t[2],c=0;if(o.some((function(e){return 0!==n[e]}))){for(r in i)E.o(i,r)&&(E.m[r]=i[r]);f&&f(E)}for(e&&e(t);c<o.length;c++)u=o[c],E.o(n,u)&&n[u]&&n[u][0](),n[u]=0},t=self.webpackChunkcontainer=self.webpackChunkcontainer||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var _=E(9232);UspacyBirthdayWidget=_}();
//# sourceMappingURL=remoteEntry.js.map