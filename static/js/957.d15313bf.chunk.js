"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[957],{81:function(e,n,t){t.d(n,{Hg:function(){return l},Pg:function(){return d},oy:function(){return f},t2:function(){return m}});var r=t(861),a=t(757),i=t.n(a),o=t(243),c=t(686),s=t.n(c),u={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmNkYTc5NGI1YzdhOWU5OTI1OThkNmQ1NTY1ODU5OCIsInN1YiI6IjY0NzExNzBmYmUyZDQ5MDEzM2EzOGE0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jfZ3RR84pJADZLl4dkLKAprXQjhw6uOCeb899-OWaGU"}},l=function(){var e=(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US",u).catch((function(e){s().Notify.failure("".concat(e.message))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(n,t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&include_adult=true&language=en-US&page=").concat(t),u).catch((function(e){s().Notify.failure("".concat(e.message))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US"),u).catch((function(e){s().Notify.failure("".concat(e.message))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(i().mark((function e(n,t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/").concat(t,"?language=en-US"),u).catch((function(e){s().Notify.failure("".concat(e.message))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},957:function(e,n,t){function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}t.r(n),t.d(n,{default:function(){return h}});var o=t(861),c=t(439),s=t(757),u=t.n(s),l=t(791),f=t(689),d=t(87),m=t(81),v={movieContainer:"MovieDetails_movieContainer__Z+O+G",backBtn:"MovieDetails_backBtn__GWfHe",movieInfo:"MovieDetails_movieInfo__kyDrT",movieInfoImgWrap:"MovieDetails_movieInfoImgWrap__RraEK",movieInfoImg:"MovieDetails_movieInfoImg__9c833",movieInfoWrap:"MovieDetails_movieInfoWrap__W2Btn",movieTitle:"MovieDetails_movieTitle__o3anW",movieInfoText:"MovieDetails_movieInfoText__7REHO",movieInfoOv:"MovieDetails_movieInfoOv__U2zgC",movieInfoGen:"MovieDetails_movieInfoGen__RMhTo",addInfo:"MovieDetails_addInfo__3dA5X",addInfoTitle:"MovieDetails_addInfoTitle__w+jYQ",addInfoOptionsList:"MovieDetails_addInfoOptionsList__koNDw",addInfoItm:"MovieDetails_addInfoItm__ItYPV",addInfoOutlet:"MovieDetails_addInfoOutlet__ATmIQ"},p=t(184),h=function(){var e,n=(0,f.UO)().movieId,t=(0,l.useState)({}),r=(0,c.Z)(t,2),a=r[0],s=r[1],h=a.title,I=a.overview,_=a.genres,g=a.poster_path,j=a.vote_average,O=a.release_date,x=g?"https://image.tmdb.org/t/p/w500".concat(g):"",b="User Score: ".concat(Math.round(10*j),"%"),N="(".concat(null===O||void 0===O?void 0:O.slice(0,4),")"),y=(0,f.TH)(),w=(0,l.useRef)(null!==(e=y.state)&&void 0!==e?e:"/Movies"),k=(0,f.s0)();return(0,l.useEffect)((function(){if(!a.title){var e=function(){var e=(0,o.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.Pg)("".concat(n));case 2:t=e.sent,r=t.data,s(i({},r));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[a,n]),(0,p.jsxs)("div",{className:v.movieContainer,children:[(0,p.jsx)("button",{onClick:function(){k(w.current)},className:v.backBtn,children:"Back"}),(0,p.jsxs)("div",{className:v.movieInfo,children:[(0,p.jsx)("div",{className:v.movieInfoImgWrap,children:(0,p.jsx)("img",{src:x,alt:"",width:250,height:350,className:v.movieInfoIm})}),(0,p.jsxs)("div",{className:v.movieInfoWrap,children:[(0,p.jsxs)("h2",{className:v.movieTitle,children:[h," ",N]}),(0,p.jsx)("p",{className:v.movieInfoText,children:b}),(0,p.jsx)("h3",{className:v.movieInfoOv,children:"Overview"}),(0,p.jsx)("p",{className:v.movieInfoText,children:I}),(0,p.jsx)("h4",{className:v.movieInfoGen,children:" Genres"}),(0,p.jsx)("p",{className:v.movieInfoText,children:null===_||void 0===_?void 0:_.map((function(e){var n=e.name;return"".concat(n," ")}))})]})]}),(0,p.jsxs)("div",{className:v.addInfo,children:[(0,p.jsx)("h3",{className:v.addInfoTitle,children:" Additional information"}),(0,p.jsxs)("ul",{className:v.addInfoOptionsList,children:[(0,p.jsx)("li",{className:v.addInfoItm,children:(0,p.jsx)(d.rU,{className:v.addInfoItmLink,to:"cast",children:"Cast"})}),(0,p.jsx)("li",{className:v.addInfoItm,children:(0,p.jsx)(d.rU,{className:v.addInfoItmLink,to:"reviews",children:"Reviews"})})]}),(0,p.jsx)("div",{className:v.addInfoOutlet,children:(0,p.jsx)(l.Suspense,{fallback:(0,p.jsx)("div",{children:"Loading..."}),children:(0,p.jsx)(f.j3,{})})})]})]})}}}]);
//# sourceMappingURL=957.d15313bf.chunk.js.map