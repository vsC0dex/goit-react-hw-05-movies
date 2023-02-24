"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[680],{3355:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(1087),a=t(7689),c="movie-list_list__U-qGD",i="movie-list_item__514PC",s="movie-list_link__klGvP",u="movie-list_text__2ZTj5",o=t(184),l=function(e){var n=e.results,t=(0,a.TH)(),l=n.map((function(e){var n=e.id,a=e.title;return(0,o.jsx)("li",{className:i,children:(0,o.jsx)(r.rU,{className:s,to:"/movies/".concat(n),state:{from:t},children:(0,o.jsx)("p",{className:u,children:a})})},n)}));return(0,o.jsx)("ul",{className:c,children:l})},p=l;l.defaultProps={results:[]}},680:function(e,n,t){t.r(n);var r=t(5861),a=t(9439),c=t(7757),i=t.n(c),s=t(2791),u=t(1087),o=t(5243),l=t(5898),p=t(3355),f=t(829),d=t(184);n.default=function(){var e=(0,s.useState)([]),n=(0,a.Z)(e,2),t=n[0],c=n[1],v=(0,s.useState)(1),m=(0,a.Z)(v,2),g=m[0],x=m[1],h=(0,u.lr)(),b=(0,a.Z)(h,2),w=b[0],_=b[1],k=(0,s.useState)(!1),Z=(0,a.Z)(k,2),y=Z[0],j=Z[1],P=Number(w.get("page"))?Number(w.get("page")):1;(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,(0,l.Tg)(n);case 4:t=e.sent,r=t.results,a=t.total_pages,c(r),x(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.message);case 14:return e.prev=14,j(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(n){return e.apply(this,arguments)}}();e(P)}),[P]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h1",{children:"Trending today"}),(0,d.jsx)(p.Z,{results:t}),y&&(0,d.jsx)(o.CJ,{height:"180",width:"180",color:"#4fa94d",ariaLabel:"triangle-loading",visible:!0}),g>1&&(0,d.jsx)(f.T,{breakLabel:"...",nextLabel:"Next",onPageChange:function(e){_({page:e.selected+1})},pageRangeDisplayed:3,pageCount:g,previousLabel:"Prev",renderOnZeroPageCount:null,disabledLinkClassName:"disabled",activeClassName:"activePage",forcePage:P-1})]})}},829:function(e,n,t){t.d(n,{T:function(){return u}});var r,a=t(168),c=t(6444),i=t(6048),s=t.n(i),u=(0,c.ZP)(s())(r||(r=(0,a.Z)(["\n  display: flex;\n  list-style: none;\n  justify-content: flex-start;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  font-size: 16px;\n  font-weight: 700;\n  @media (max-width: 500px) {\n    flex-wrap: wrap;\n  }\n  & li {\n    border: 1px solid black;\n    border-radius: 10px;\n    margin: 5px;\n    color: ",";\n    transition: color 300ms linear, border 300ms linear;\n    :hover:not(.disabled) {\n      color: ",";\n      border: 1px solid red;\n    }\n  }\n  & .activePage {\n    color: ",";\n    border: 1px solid red;\n  }\n  & a {\n    padding: 0 8px;\n    cursor: pointer;\n  }\n  & a.disabled {\n    cursor: default;\n  }\n"])),(function(e){return"black"}),(function(e){return"red"}),(function(e){return"red"}))},5898:function(e,n,t){t.d(n,{Bt:function(){return p},Mc:function(){return o},Tg:function(){return s},d5:function(){return l},vw:function(){return u}});var r=t(5861),a=t(7757),c=t.n(a),i=t(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"8c2d35d0c441850846a9f314ac71f075"}}),s=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"movie","week",e.next=4,i.get("/trending/".concat("movie","/").concat("week","?page=").concat(n));case 4:return t=e.sent,r=t.data,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/search/movie?page=".concat(n,"&query=").concat(t));case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(n));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(n,"/credits"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(n,"/reviews"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=680.0f99761d.chunk.js.map