"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[806,540],{3724:function(n,e,t){t.d(e,{V:function(){return o}});var r,c=t(168),a=t(2430).Z.div(r||(r=(0,c.Z)(["\n    margin-top: ",";\n    font-size: 20px;\n"])),(function(n){return n.margin?"40px":0})),i=t(184),o=function(n){var e=n.message,t=n.margin,r=void 0!==t&&t;return(0,i.jsx)(a,{margin:r,children:e})}},1806:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var r,c=t(5861),a=t(9439),i=t(7757),o=t.n(i),u=t(3724),s=t(2791),d=t(7689),p=t(5129),f=t(5475),v=t(168),l=t(2430).Z.ul(r||(r=(0,v.Z)(["\n    list-style: disc;\n    padding: 40px 100px 40px 120px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    line-height: 1.5;\n"]))),h=t(184),g=function(n){var e=n.author,t=n.content;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("p",{children:(0,h.jsxs)("b",{children:["Author: ",e]})}),(0,h.jsx)("p",{children:t})]})};function m(){var n=(0,d.UO)().id,e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],i=t[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,c.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.TP)({type:"reviews",id:n});case 2:return e.next=4,e.sent.data.results;case 4:t=e.sent,i(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,s.useLayoutEffect)((function(){(0,f.W)(r)}),[r]),(0,h.jsx)(h.Fragment,{children:r.length?(0,h.jsx)(l,{id:"reviews",children:r.map((function(n){var e=n.author,t=n.content,r=n.id;return(0,h.jsx)("li",{children:(0,h.jsx)(g,{author:e,content:t})},r)}))}):(0,h.jsx)(u.V,{message:"We don't have any reviews for this movie",margin:!0})})}},5129:function(n,e,t){t.d(e,{Pg:function(){return u},TP:function(){return s},XT:function(){return o},_p:function(){return i}});var r=t(2388),c="https://api.themoviedb.org/3",a="8cb2067df7427c657a5f093d2a8e51ae",i="https://image.tmdb.org/t/p/w500/",o=function(n){var e=n.requestType,t=void 0===e?"trending":e,i=n.query,o=void 0===i?"":i,u=n.page,s=void 0===u?1:u,d="";switch(t){case"trending":return d="trending/movie/day",r.Z.get("".concat(c,"/").concat(d,"?api_key=").concat(a,"&page=").concat(s));case"search":return d="/search/movie",r.Z.get("".concat(c,"/").concat(d,"?api_key=").concat(a,"&query=").concat(o,"&page=").concat(s))}},u=function(n){var e="/movie/".concat(n);return r.Z.get("".concat(c,"/").concat(e,"?api_key=").concat(a))},s=function(n){var e=n.type,t=n.id,i="";switch(e){case"cast":i="/movie/".concat(t,"/credits");break;case"reviews":i="movie/".concat(t,"/reviews");break;default:throw new Error("Invalid details type meaning in get movie details")}return r.Z.get("".concat(c,"/").concat(i,"?api_key=").concat(a))}},5475:function(n,e,t){t.d(e,{W:function(){return r}});var r=function(n){var e=document.querySelector(".details-title").getBoundingClientRect().top;n&&window.scrollBy({top:e,behavior:"smooth"})}}}]);
//# sourceMappingURL=806.7c38cb1e.chunk.js.map