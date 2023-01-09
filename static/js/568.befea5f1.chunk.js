"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[568],{2049:function(n,t,e){e.d(t,{e:function(){return d}});var a,r=e(168),o=e(2430).Z.ul(a||(a=(0,r.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    gap: 40px;\n    justify-content: center;\n    line-height: 1.5;\n    \n    li {\n        flex-basis: calc((100% - 120px)/4);\n        max-width: 500px;\n        position: relative;\n        display: flex;\n        gap: 5px 10px;\n        margin-bottom: 10px;\n        box-shadow: 0px 1px 2px #444;\n        overflow: hidden;\n\n        svg {\n            position: absolute;\n            z-index: 4;\n            bottom: 20px;\n            right: 10px;\n            stroke: currentColor;\n            color: #000;\n        }\n\n        .disabled-info-icon {\n            opacity: 0;\n        }\n        .show-info-icon {\n            transition: transform 100ms linear;\n        }\n\n        .show-info-icon:hover {\n            color: #fff;\n\n            &~div p {\n                transform: translateY(-100%);\n                z-index: 2;\n            }\n        }\n\n        .movie-item-wrap {\n           max-width: 600px;\n\n           .poster {\n            aspect-ratio: .67;\n            object-fit: contain;\n            filter: grayscale(.9);\n            transition: filter 350ms linear;\n           }\n\n            .title { \n                display: block;       \n                padding: 10px 40px 20px 20px;\n                transition: text-decoration 200ms linear;\n            }\n\n            p {\n                position: absolute;\n                top: 100%;\n                display: block;\n                padding: 20px;\n                padding-right: 40px;\n                font-size: 18px;\n                box-shadow: 1px 1px 2px #444;\n                background-color: #aaa;\n                \n                transform: translateY(100%);\n                transition: transform 350ms linear;\n            }\n\n            a:hover .title{\n                text-decoration: underline;\n            }\n            a:hover .poster{\n                filter: none;\n            }\n        }\n    }"]))),i=e(8820),c=e(1087),s=e(7689),p=e(5129),l=e(184),d=function(n){var t=n.movies,e=(0,s.TH)();return(0,l.jsx)(o,{children:t.map((function(n){var t=n.id,a=n.title,r=n.release_date,o=n.overview,s=n.poster_path,d=new Date(r).getFullYear(),u=p._p+s;return(0,l.jsxs)("li",{children:[(0,l.jsx)(i.zXS,{className:o?"show-info-icon":"disabled-info-icon",size:"30px"}),(0,l.jsxs)("div",{className:"movie-item-wrap",children:[(0,l.jsxs)(c.rU,{to:"/movies/".concat(t),state:{from:e},children:[(0,l.jsx)("img",{className:"poster",src:s?u:"https://mbfn.org/wp-content/uploads/2020/09/image-coming-soon-placeholder.png",alt:"poster for ".concat(a)}),(0,l.jsxs)("span",{className:"title",children:[a," ",r&&" - "+d]})]}),o&&(0,l.jsx)("p",{children:o})]})]},t)}))})}},5568:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var a=e(5861),r=e(9439),o=e(7757),i=e.n(o),c=e(5129),s=e(2049),p=e(2791),l=e(184);function d(){var n=(0,p.useState)([]),t=(0,r.Z)(n,2),e=t[0],o=t[1];return(0,p.useEffect)((function(){var n=function(){var n=(0,a.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=o,n.next=3,(0,c.XT)({requestType:"trending"});case 3:return n.next=5,n.sent.data.results;case 5:n.t1=n.sent,(0,n.t0)(n.t1);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{style:{marginBottom:"40px"},children:"Trending today:"}),(0,l.jsx)(s.e,{movies:e})]})}},5129:function(n,t,e){e.d(t,{Pg:function(){return s},TP:function(){return p},XT:function(){return c},_p:function(){return i}});var a=e(2388),r="https://api.themoviedb.org/3",o="8cb2067df7427c657a5f093d2a8e51ae",i="https://image.tmdb.org/t/p/w500/",c=function(n){var t=n.requestType,e=void 0===t?"trending":t,i=n.query,c=void 0===i?"":i,s=n.page,p=void 0===s?1:s,l="";switch(e){case"trending":return l="trending/movie/day",a.Z.get("".concat(r,"/").concat(l,"?api_key=").concat(o,"&page=").concat(p));case"search":return l="/search/movie",a.Z.get("".concat(r,"/").concat(l,"?api_key=").concat(o,"&query=").concat(c,"&page=").concat(p))}},s=function(n){var t="/movie/".concat(n);return a.Z.get("".concat(r,"/").concat(t,"?api_key=").concat(o))},p=function(n){var t=n.type,e=n.id,i="";switch(t){case"cast":i="/movie/".concat(e,"/credits");break;case"reviews":i="movie/".concat(e,"/reviews");break;default:throw new Error("Invalid details type meaning in get movie details")}return a.Z.get("".concat(r,"/").concat(i,"?api_key=").concat(o))}}}]);
//# sourceMappingURL=568.befea5f1.chunk.js.map