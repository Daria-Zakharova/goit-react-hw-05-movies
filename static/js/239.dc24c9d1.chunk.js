"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[239],{4239:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var r,i,a,c=t(5861),s=t(9439),o=t(7757),d=t.n(o),l=t(2791),u=t(7689),p=t(168),x=t(2430),h=t(1087),f=(0,x.Z)(h.rU)(r||(r=(0,p.Z)(["\n    display: block;\n    width: fit-content;\n    margin: 40px 100px 0;\n    padding: 10px;\n    border: 2px solid #000;\n    border-radius: 5px;\n    background-color: #d2d2d2;\n\n    &:hover, &:focus {\n        background-color: #f0f0f0;\n    }\n"]))),v=t(184),g=function(e){var n=e.location;return(0,v.jsx)(f,{to:n,children:" \ud83e\udc14 Back "})},m=x.Z.section(i||(i=(0,p.Z)(["\n    display: flex;\n    padding: 40px 100px;\n    gap: 40px;\n    border-bottom: solid 2px #000; \n\n    div:first-of-type {\n        width: 510px;\n    }\n    \n    img {\n        min-width: 500px;\n    }    \n    "]))),j=t(5129),w=function(e){var n=e.imgUrl,t=e.movieTitle,r=e.rating,i=e.overview,a=e.genres;e.id;return(0,v.jsxs)(m,{children:[(0,v.jsx)("div",{children:(0,v.jsx)("img",{src:n?j._p+n:"https://mbfn.org/wp-content/uploads/2020/09/image-coming-soon-placeholder.png",alt:t})}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{children:t}),(0,v.jsxs)("p",{className:"rating",children:[(0,v.jsx)("b",{children:"User score:"})," ",r]}),(0,v.jsx)("h2",{children:"Overview"}),(0,v.jsx)("p",{className:"overview",children:i}),a&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h2",{children:"Genres"}),(0,v.jsx)("p",{className:"genres",children:a})]})]})]})},b=t(8016),k=x.Z.div(a||(a=(0,p.Z)(["\n    padding: 40px 0 0;\n\n    .details-title {\n        margin: 0 0 40px 100px;\n        font-weight: 700;\n    }\n\n    .details-list {\n        list-style: disc;\n        list-style-position: inside;\n        padding: 0 100px 40px;\n        border-bottom: 2px solid #000;\n\n        a:hover {\n            text-decoration: underline;\n        }\n    }\n"]))),y=(0,l.lazy)((function(){return t.e(715).then(t.bind(t,4219))})),Z=(0,l.lazy)((function(){return t.e(540).then(t.bind(t,1806))})),_=function(){return(0,v.jsxs)(k,{children:[(0,v.jsx)("p",{className:"details-title",children:"Additional information:"}),(0,v.jsxs)("ul",{className:"details-list",children:[(0,v.jsx)("li",{children:(0,v.jsx)(h.rU,{to:"cast",element:(0,v.jsx)(y,{}),children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(h.rU,{to:"reviews",element:(0,v.jsx)(Z,{}),children:"Reviews"})})]}),(0,v.jsx)(l.Suspense,{fallback:(0,v.jsxs)("div",{children:["Loading...",(0,v.jsx)(b.Z,{color:"#b4b4b4",margin:10,size:10,speedMultiplier:.7})]}),children:(0,v.jsx)(u.j3,{})})]})};function S(){var e=(0,u.TH)(),n=(0,l.useState)(""),t=(0,s.Z)(n,2),r=t[0],i=t[1],a=(0,l.useState)(""),o=(0,s.Z)(a,2),p=o[0],x=o[1],h=(0,l.useState)(0),f=(0,s.Z)(h,2),m=f[0],b=f[1],k=(0,l.useState)([]),y=(0,s.Z)(k,2),Z=y[0],S=y[1],U=(0,l.useState)(""),T=(0,s.Z)(U,2),N=T[0],C=T[1],q=(0,l.useState)(""),z=(0,s.Z)(q,2),E=z[0],F=z[1],P=(0,u.UO)().id;return(0,l.useEffect)((function(){e.state&&F((function(){return e.state.from}))}),[e]),(0,l.useEffect)((function(){var e=function(){var e=(0,c.Z)(d().mark((function e(){var n,t,r,a,c,s;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,j.Pg)(P);case 2:return e.next=4,e.sent.data;case 4:n=e.sent,t=n.poster_path,r=n.title,a=n.vote_average,c=n.genres,s=n.overview,i(t),x(r),b((10*a).toFixed()+"%"),C(s),S((function(){return c.map((function(e,n){return 0===n?e.name:e.name.toLowerCase()})).join(", ")}));case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[P]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(g,{location:E||"/movies"}),(0,v.jsx)(w,{imgUrl:r,movieTitle:p,rating:m,overview:N,genres:Z}),(0,v.jsx)(_,{})]})}},5129:function(e,n,t){t.d(n,{Pg:function(){return o},TP:function(){return d},XT:function(){return s},_p:function(){return c}});var r=t(2388),i="https://api.themoviedb.org/3",a="8cb2067df7427c657a5f093d2a8e51ae",c="https://image.tmdb.org/t/p/w500/",s=function(e){var n=e.requestType,t=void 0===n?"trending":n,c=e.query,s=void 0===c?"":c,o=e.page,d=void 0===o?1:o,l="";switch(t){case"trending":return l="trending/movie/day",r.Z.get("".concat(i,"/").concat(l,"?api_key=").concat(a,"&page=").concat(d));case"search":return l="/search/movie",r.Z.get("".concat(i,"/").concat(l,"?api_key=").concat(a,"&query=").concat(s,"&page=").concat(d))}},o=function(e){var n="/movie/".concat(e);return r.Z.get("".concat(i,"/").concat(n,"?api_key=").concat(a))},d=function(e){var n=e.type,t=e.id,c="";switch(n){case"cast":c="/movie/".concat(t,"/credits");break;case"reviews":c="movie/".concat(t,"/reviews");break;default:throw new Error("Invalid details type meaning in get movie details")}return r.Z.get("".concat(i,"/").concat(c,"?api_key=").concat(a))}}}]);
//# sourceMappingURL=239.dc24c9d1.chunk.js.map