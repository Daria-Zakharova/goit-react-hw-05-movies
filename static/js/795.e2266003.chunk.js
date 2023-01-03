"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[795],{2049:function(n,e,t){t.d(e,{e:function(){return d}});var r,a=t(168),i=t(2430).Z.ul(r||(r=(0,a.Z)(["\n    padding: 40px 100px;\n    line-height: 1.5;\n    width: fit-content;\n    \n    li {\n        position: relative;\n        display: flex;\n        gap: 5px 10px;\n        margin-bottom: 10px;\n\n        svg {\n            position: absolute;\n            top: 2px;\n        }\n\n        .disabled-info-icon {\n            opacity: .2;\n        }\n        .show-info-icon {\n            transition: transform 100ms linear;\n        }\n\n        .show-info-icon:hover {\n            transform: rotate(90deg);\n\n            &~div p {\n                display: block;\n                padding: 20px;\n                font-size: 16px;\n                background-color: #ddd;\n            }\n        }\n\n        .movie-item-wrap {\n           padding-left: 40px;\n           max-width: 600px;\n\n            a {                \n                transition: text-decoration 200ms linear;\n                \n                &:hover {\n                    text-decoration: underline;\n                } \n            }\n\n            p {\n                display: none;\n            }\n        }\n    }"]))),o=t(4373),c=t(1087),s=t(7689),u=t(184),d=function(n){var e=n.movies,t=(0,s.TH)();return(0,u.jsx)(i,{children:e.map((function(n){var e=n.id,r=n.title,a=n.release_date,i=n.overview,s=new Date(a).getFullYear();return(0,u.jsxs)("li",{children:[(0,u.jsx)(o.mEM,{className:i?"show-info-icon":"disabled-info-icon",size:"30px"}),(0,u.jsxs)("div",{className:"movie-item-wrap",children:[(0,u.jsxs)(c.rU,{to:"/movies/".concat(e),state:{from:t},children:[" ",r," ",a&&"- "+s]}),i&&(0,u.jsx)("p",{children:i})]})]},e)}))})}},3724:function(n,e,t){t.d(e,{V:function(){return c}});var r,a=t(168),i=t(2430).Z.div(r||(r=(0,a.Z)(["\n    padding: 40px 100px;\n    font-size: 20px;\n"]))),o=t(184),c=function(n){var e=n.message;return(0,o.jsx)(i,{children:e})}},7795:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,a=t(3433),i=t(5861),o=t(9439),c=t(7757),s=t.n(c),u=t(2791),d=t(1087),l=t(7689),p=t(5129),f=t(2049),v=t(168),x=t(2430).Z.form(r||(r=(0,v.Z)(["\n    display: flex;\n    padding: 40px 0 0 100px;\n\n    input{\n        padding: 5px;\n        font-size: inherit;\n        border: solid 2px black;\n    }\n\n    button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-radius: 0px;\n        border-left: none;\n        background-color: #d2d2d2;\n\n    &:hover, &:focus {\n        background-color: #f0f0f0;\n    }\n    }\n"]))),m=t(5880),g=t(184),h=function(n){var e,t=n.onSubmit,r=(0,d.lr)(),a=null!==(e=(0,o.Z)(r,1)[0].get("title"))&&void 0!==e?e:"",i=(0,u.useState)(a),c=(0,o.Z)(i,2),s=c[0],l=c[1];return(0,g.jsxs)(x,{onSubmit:t,children:[(0,g.jsx)("input",{name:"search",type:"text",value:s,onChange:function(n){return l(n.target.value)}}),(0,g.jsx)("button",{children:(0,g.jsx)(m.lnn,{size:"20"})})]})},b=t(3724);function w(){var n=(0,u.useState)([]),e=(0,o.Z)(n,2),t=e[0],r=e[1],c=(0,u.useState)(""),v=(0,o.Z)(c,2),x=v[0],m=v[1],w=(0,u.useState)(1),y=(0,o.Z)(w,2),Z=y[0],k=y[1],j=(0,u.useState)(1),_=(0,o.Z)(j,2),S=_[0],T=_[1],q=(0,d.lr)(""),E=(0,o.Z)(q,2),z=E[0],C=E[1];(0,u.useEffect)((function(){var n,e=null!==(n=z.get("title"))&&void 0!==n?n:"";e&&m(e)}),[z]),(0,u.useEffect)((function(){var n=new IntersectionObserver((function(){k((function(n){return n+1}))}),{root:null,rootMargin:"40%",treshhold:0}),e=document.querySelector(".guard");e&&n.observe(e)}),[S]),(0,u.useEffect)((function(){var n=function(){var n=(0,i.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,p.XT)("search",x);case 2:return n.next=4,n.sent.data.total_pages;case 4:e=n.sent,T(e);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();x&&n()}),[x]),(0,u.useEffect)((function(){var n=function(){var n=(0,i.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!Z){n.next=7;break}return n.next=3,(0,p.XT)({requestType:"search",query:x,page:Z});case 3:return n.next=5,n.sent.data.results;case 5:e=n.sent,r((function(n){return[].concat((0,a.Z)(n),(0,a.Z)(e))}));case 7:return n.abrupt("return");case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();x&&n()}),[x,Z]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(h,{onSubmit:function(n){n.preventDefault();var e=n.target.elements.search.value.toLowerCase().trim();k(1),r([]),m(e),e&&C({title:e})}}),x&&!t.length&&(0,g.jsx)(b.V,{message:"Sorry, there is no movies titled ".concat(x)}),0!==t.length&&(0,g.jsx)(f.e,{movies:t}),(0,g.jsx)(l.j3,{}),Z<S&&(0,g.jsx)("div",{className:"guard"})]})}},5129:function(n,e,t){t.d(e,{Pg:function(){return s},TP:function(){return u},XT:function(){return c},_p:function(){return o}});var r=t(2388),a="https://api.themoviedb.org/3",i="8cb2067df7427c657a5f093d2a8e51ae",o="https://image.tmdb.org/t/p/w500/",c=function(n){var e=n.requestType,t=void 0===e?"trending":e,o=n.query,c=void 0===o?"":o,s=n.page,u=void 0===s?1:s,d="";switch(t){case"trending":return d="trending/movie/day",r.Z.get("".concat(a,"/").concat(d,"?api_key=").concat(i,"&page=").concat(u));case"search":return d="/search/movie",r.Z.get("".concat(a,"/").concat(d,"?api_key=").concat(i,"&query=").concat(c,"&page=").concat(u))}},s=function(n){var e="/movie/".concat(n);return r.Z.get("".concat(a,"/").concat(e,"?api_key=").concat(i))},u=function(n){var e=n.type,t=n.id,o="";switch(e){case"cast":o="/movie/".concat(t,"/credits");break;case"reviews":o="movie/".concat(t,"/reviews");break;default:throw new Error("Invalid details type meaning in get movie details")}return r.Z.get("".concat(a,"/").concat(o,"?api_key=").concat(i))}}}]);
//# sourceMappingURL=795.e2266003.chunk.js.map