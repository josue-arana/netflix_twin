(this["webpackJsonpnetflix-twin-beta"]=this["webpackJsonpnetflix-twin-beta"]||[]).push([[0],{18:function(e,t,n){},41:function(e,t,n){},60:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(30),s=n.n(i),r=(n(41),n(18),n(11)),o=n.n(r),l=n(13),A=n(8),d=n(31),h=n.n(d).a.create({baseURL:"https://api.themoviedb.org/3"}),b=(n(60),n(32)),j=n(35),u=n.n(j),g=n(0);var v=function(e){var t=e.title,n=e.fetchUrl,a=e.isLargeRow,i=Object(c.useState)([]),s=Object(A.a)(i,2),r=s[0],d=s[1],j=Object(c.useState)(""),v=Object(A.a)(j,2),m=v[0],f=v[1],x=Object(c.useState)(!1),E=Object(A.a)(x,2),w=E[0],O=E[1],p=Object(c.useState)(""),C=Object(A.a)(p,2),_=C[0],I=C[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(n);case 2:return t=e.sent,d(t.data.results.sort((function(e,t){return.5-Math.random()}))),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("h2",{children:t}),Object(g.jsx)("div",{className:"row__posters",children:r.map((function(e){return Object(g.jsx)("img",{onClick:function(){return function(e){w&&O(!1),m?f(""):u()((null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.original_name)||(null===e||void 0===e?void 0:e.original_title)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);f(encodeURIComponent(t.get("v")))})).catch((function(t){w?O(!1):(O(!0),I(encodeURIComponent((null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.original_name)||(null===e||void 0===e?void 0:e.original_title)||""))),console.log(t)}))}(e)},className:"row__poster ".concat(a&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(a?e.poster_path:e.backdrop_path),alt:e.title},e.id)}))}),m&&Object(g.jsx)(b.a,{videoId:m,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}),w&&Object(g.jsxs)("div",{className:"noTrailer",children:[Object(g.jsxs)("h4",{children:["Sorry! We couldn't find this trailer. You may click ",Object(g.jsx)("a",{className:"link__redirect",target:"blank",href:"https://www.youtube.com/results?search_query=".concat(_),children:"here to find it on YouTube."})]}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{})]})]})},m="cfbe39a6506eba5d6df81da47f103500",f={fetchTrending:"/trending/all/week?api_key=".concat(m,"&langugage=en-US"),fetchTopRated:"/movie/top_rated?api_key=".concat(m,"&langugage=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(m,"&with_network=213"),fetchActionMovies:"/discover/movie?api_key=".concat(m,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(m,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(m,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(m,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(m,"&with_genres=99")};n(83);var x=function(){var e,t,n=Object(c.useState)([]),a=Object(A.a)(n,2),i=a[0],s=a[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(f.fetchNetflixOriginals);case 2:return t=e.sent,s(t.data.results[Math.floor(Math.random()*t.data.results.length)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(g.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===i||void 0===i?void 0:i.backdrop_path,'")'),backgroundPosition:"center center"},children:[Object(g.jsxs)("div",{className:"banner__contents",children:[Object(g.jsx)("h1",{className:"banner__title",children:(null===i||void 0===i?void 0:i.title)||(null===i||void 0===i?void 0:i.name)||(null===i||void 0===i?void 0:i.original_name)}),Object(g.jsx)("h1",{className:"banner__description",children:(e=null===i||void 0===i?void 0:i.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)}),Object(g.jsxs)("div",{className:"banner__buttons",children:[Object(g.jsxs)("button",{className:"banner__button_play",children:[Object(g.jsx)("div",{children:Object(g.jsx)("svg",{className:"banner__button_icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(g.jsx)("path",{d:"M6 4l15 8-15 8z",fill:"currentColor"})})}),Object(g.jsx)("div",{className:"banner__button_text",children:"Assistir"})]}),Object(g.jsxs)("button",{className:"banner__button",children:[Object(g.jsx)("div",{children:Object(g.jsx)("svg",{className:"banner__button_icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(g.jsx)("path",{d:"M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 0 0-8-8 8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8zm-9 6v-7h2v7h-2zm1-8.75a1.21 1.21 0 0 1-.877-.364A1.188 1.188 0 0 1 10.75 8c0-.348.123-.644.372-.886.247-.242.54-.364.878-.364.337 0 .63.122.877.364.248.242.373.538.373.886s-.124.644-.373.886A1.21 1.21 0 0 1 12 9.25z",fill:"currentColor"})})}),Object(g.jsx)("div",{className:"banner__button_text",children:"Mais informa\xe7\xf5es"})]})]}),Object(g.jsx)("h1",{className:"banner__disclaimer",children:"DISCLAIMER: This app was created by Josue Arana for educational purposes only."})]}),Object(g.jsx)("div",{className:"banner__fadeBottom"})]})},E=n(10),w=n(2),O=n.p+"static/media/netflix_logo.aba9a470.png";n(84);var p=function(){var e=Object(c.useState)(!1),t=Object(A.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?a(!0):a(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(g.jsxs)("div",{className:"nav ".concat(n&&"nav__black"),children:[Object(g.jsx)("img",{src:O,alt:"Netflix Logo",className:"nav__logo"}),Object(g.jsxs)("div",{className:"nav__tabs",children:[Object(g.jsx)("button",{className:"nav__tab",children:Object(g.jsx)("b",{children:"In\xedcio"})}),Object(g.jsx)("button",{className:"nav__tab",children:"S\xe9ries"}),Object(g.jsx)("button",{className:"nav__tab",children:"Filmes"}),Object(g.jsx)("button",{className:"nav__tab",children:"Bombando"}),Object(g.jsx)("button",{className:"nav__tab",children:"Minha lista"})]}),Object(g.jsx)("div",{className:"nav__icons_right"}),Object(g.jsx)("img",{src:"data:image/png;base64,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",alt:"Netflix Avatar",className:"nav__avatar"})]})};n(85),n(86);var C=function(){return Object(g.jsxs)("div",{className:"app",children:[Object(g.jsx)(x,{}),Object(g.jsx)(v,{className:"margin_up",title:"Originais Netflix",fetchUrl:f.fetchNetflixOriginals,isLargeRow:!0}),Object(g.jsx)(v,{title:"Tend\xeancias Agora",fetchUrl:f.fetchTrending}),Object(g.jsx)(v,{title:"Mais Votado",fetchUrl:f.fetchTopRated}),Object(g.jsx)(v,{title:"Filmes de A\xe7\xe3o",fetchUrl:f.fetchActionMovies}),Object(g.jsx)(v,{title:"Filmes de Com\xe9dia",fetchUrl:f.fetchComedyMovies}),Object(g.jsx)(v,{title:"Filmes de Terror",fetchUrl:f.fetchHorrorMovies}),Object(g.jsx)(v,{title:"Filmes de Romance",fetchUrl:f.fetchRomanceMovies}),Object(g.jsx)(v,{title:"Document\xe1rios",fetchUrl:f.fetchDocumentaries})]})};var _=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(E.a,{children:[Object(g.jsx)(p,{}),Object(g.jsx)(w.c,{children:Object(g.jsx)(w.a,{path:"/",exact:!0,component:C})})]})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,91)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(_,{})}),document.getElementById("root")),I()}},[[90,1,2]]]);
//# sourceMappingURL=main.858082b6.chunk.js.map