"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[617],{81:function(t,e,n){n.d(e,{Hg:function(){return f},Pg:function(){return p},oy:function(){return l},t2:function(){return h}});var r=n(861),a=n(757),c=n.n(a),u=n(243),i=n(686),o=n.n(i),s={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmNkYTc5NGI1YzdhOWU5OTI1OThkNmQ1NTY1ODU5OCIsInN1YiI6IjY0NzExNzBmYmUyZDQ5MDEzM2EzOGE0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jfZ3RR84pJADZLl4dkLKAprXQjhw6uOCeb899-OWaGU"}},f=function(){var t=(0,r.Z)(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US",s).catch((function(t){o().Notify.failure("".concat(t.message))}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e,n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=").concat(n),s).catch((function(t){o().Notify.failure("".concat(t.message))}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?language=en-US"),s).catch((function(t){o().Notify.failure("".concat(t.message))}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e,n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/").concat(n,"?language=en-US"),s).catch((function(t){o().Notify.failure("".concat(t.message))}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},505:function(t,e,n){n.d(e,{Z:function(){return f}});n(791);var r=n(689),a=n(87),c="MoviesLink_linkItm__0r6wZ",u="MoviesLink_movieLink__OlmLl",i=n(184),o=function(t){var e=t.title,n=t.id,o=(0,r.TH)();return(0,i.jsx)("li",{className:c,children:(0,i.jsxs)(a.rU,{className:u,state:o,to:n,children:[" ",e]})})},s="MoviesList_homeList__kNovn",f=function(t){var e=t.movies,n=t.path;if(e)return(0,i.jsx)("ul",{className:s,children:e.length&&e.map((function(t){var e=t.title,r=t.id;return(0,i.jsx)(o,{title:e,id:"".concat(n).concat(r)},r)}))})}},617:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var r=n(433),a=n(861),c=n(439),u=n(757),i=n.n(u),o=n(791),s=n(87),f=n(81),l="Movies_movies__TE99a",p=n(505),h="SearchForm_searchForm__Rrjro",m="SearchForm_formInput__UkwG-",v="SearchForm_formSubmit__Yz6XF",d=n(184),g=function(t){var e=t.submitHandler;return(0,d.jsxs)("form",{className:h,onSubmit:function(t){t.preventDefault();var n=t.target[0].value;e(n)},children:[(0,d.jsx)("input",{type:"text",autoFocus:!0,placeholder:"Search movies",className:m}),(0,d.jsx)("button",{className:v,type:"submit",children:"Search"})]})},_=function(){var t=(0,s.lr)(),e=(0,c.Z)(t,2),n=e[0],u=e[1],h=(0,o.useState)(null),m=(0,c.Z)(h,2),v=m[0],_=m[1];return(0,o.useEffect)((function(){if(n.get("q")){var t=function(){var t=(0,a.Z)(i().mark((function t(){var e,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,f.oy)("".concat(n.get("q")),1);case 2:e=t.sent,a=e.data.results,_((0,r.Z)(a));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}}),[n]),(0,d.jsxs)("div",{className:l,children:[(0,d.jsx)(g,{submitHandler:function(t){u({q:t})}}),(0,d.jsx)(p.Z,{movies:v,path:""})]})}}}]);
//# sourceMappingURL=617.3ca89f51.chunk.js.map