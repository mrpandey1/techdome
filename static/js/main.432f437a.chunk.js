(this.webpackJsonptechdome=this.webpackJsonptechdome||[]).push([[0],{56:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(11),a=n.n(s),r=(n(56),n(87)),i=n(1),l=function(){return Object(i.jsx)("header",{className:"header",children:Object(i.jsxs)(r.a,{variant:"dark",expand:"lg",children:[Object(i.jsx)("span",{style:{fontSize:"1rem",fontColor:"black",margin:"0 auto"},children:"SpaceX Launch Program"}),Object(i.jsx)("button",{class:"hireme",children:Object(i.jsx)("a",{style:{textDecoration:"none"},href:"https://www.linkedin.com/in/nishant-pandey-531211165/",children:"Hire me"})})]})})},d=n(8),j=n(51),o=n(84),u=n(85),h=n(86),p=n(28),x=n.n(p),b=n(44),m="PRODUCT_LIST_REQUEST",O="PRODUCT_LIST_SUCCESS",f="PRODUCT_LIST_FAIL",g=n(45),v=n.n(g),y=function(e){return function(){var t=Object(b.a)(x.a.mark((function t(n){var c,s;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:m}),t.next=4,v.a.get(e);case 4:c=t.sent,s=c.data,n({type:O,payload:s}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n({type:f,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},k=function(){var e=Object(d.b)();return Object(i.jsxs)("div",{children:[Object(i.jsx)(o.a,{children:Object(i.jsx)(u.a,{children:"Successful Landing"})}),Object(i.jsxs)(o.a,{children:[Object(i.jsx)(u.a,{sm:6,xl:6,lg:6,md:6,xs:6,children:Object(i.jsx)(h.a,{onClick:function(t){t.preventDefault(),e(y("https://api.spacexdata.com/v3/launches?limit=100&land_success=true"))},style:{margin:"10px",padding:"5px 12px"},variant:"success",children:"true"})}),Object(i.jsx)(u.a,{sm:6,xl:6,lg:6,md:6,xs:6,children:Object(i.jsx)(h.a,{onClick:function(t){t.preventDefault(),e(y("https://api.spacexdata.com/v3/launches?limit=100&land_success=false"))},style:{margin:"10px",padding:"5px 12px"},variant:"success",children:"false"})})]})]})},_=function(){var e=Object(d.b)();return Object(i.jsxs)("div",{children:[Object(i.jsx)(o.a,{children:Object(i.jsx)(u.a,{children:"Successful Launch"})}),Object(i.jsxs)(o.a,{children:[Object(i.jsx)(u.a,{sm:6,xl:6,lg:6,md:6,xs:6,children:Object(i.jsx)(h.a,{onClick:function(t){t.preventDefault(),e(y("https://api.spacexdata.com/v3/launches?limit=100&launch_success=true"))},style:{margin:"10px",padding:"5px 12px"},variant:"success",children:"true"})}),Object(i.jsx)(u.a,{sm:6,xl:6,lg:6,md:6,xs:6,children:Object(i.jsx)(h.a,{onClick:function(t){t.preventDefault(),e(y("https://api.spacexdata.com/v3/launches?limit=100&launch_success=false"))},style:{margin:"10px",padding:"5px 12px"},variant:"success",children:"false"})})]})]})},L=function(e){e.key;var t=e.children,n=Object(d.b)();return Object(i.jsx)(h.a,{onClick:function(e){e.preventDefault(),n(y("All.."===t?"https://api.spacexdata.com/v3/launches?limit=100":"https://api.spacexdata.com/v3/launches?limit=100&launch_year=".concat(t)))},style:{margin:"5px 10px",padding:"5px 15px"},variant:"success",children:t})},S=function(){return Object(i.jsxs)("div",{className:"filter",children:[Object(i.jsx)(o.a,{children:Object(i.jsxs)(u.a,{sm:12,style:{textAlign:"center"},children:[Object(i.jsx)("span",{style:{fontWeight:"bolder",color:"black"},children:"Filters"}),Object(i.jsx)("hr",{})]})}),Object(i.jsx)(o.a,{children:Object(i.jsx)(u.a,{children:"Launch Year"})}),Object(i.jsxs)(o.a,{children:[Object(j.a)(Array(15).keys()).map((function(e){return Object(i.jsx)(u.a,{sm:6,xl:6,lg:6,md:6,xs:6,children:Object(i.jsx)(L,{children:2006+e},2006+e)})})),Object(i.jsx)(u.a,{sm:6,xl:6,lg:6,md:6,xs:6,children:Object(i.jsx)(L,{children:"All.."})})]}),Object(i.jsx)(_,{}),Object(i.jsx)(k,{})]})},w=n(88),C=function(e){var t=e.productName,n=e.productImage,c=e.launchYear,s=e.successfulLaunch,a=e.landSuccess;return Object(i.jsxs)(w.a,{className:"mb-3 p-3 rounded",children:[Object(i.jsx)(w.a.Img,{variant:"top",src:n}),Object(i.jsxs)(w.a.Body,{children:[Object(i.jsx)("strong",{children:Object(i.jsx)("h3",{className:"programName",children:t})}),Object(i.jsx)("i",{children:"Mission Ids:"}),Object(i.jsx)("p",{children:"- list of mission ids"}),Object(i.jsxs)("p",{children:[Object(i.jsx)("i",{children:"Launch Year :"}),c]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("i",{children:"Successful Launch :"}),s?" true":" false"]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("i",{children:"Successful Landing :"}),a?" true":" false"]})]})]})},D=n(89),N=function(e){var t=e.variant,n=e.children;return Object(i.jsx)(D.a,{variant:t,children:n})};N.defaultProps={variant:"info"};var I,T,F=function(e){var t=e.products;return Object(i.jsx)("div",{children:Object(i.jsx)(o.a,{className:"program",children:t&&t.length>0?t.map((function(e){return Object(i.jsx)(u.a,{sm:12,md:6,lg:3,xl:3,children:Object(i.jsx)(C,{productName:e.rocket.rocket_name,productImage:e.links.mission_patch_small,launchYear:e.launch_year,successfulLaunch:e.launch_success,landSuccess:e.rocket.first_stage.cores[0].land_success})},e._id)})):"No programs in this year"})})},P=n(29),A=n(30),E=A.a.div(I||(I=Object(P.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),R=A.a.div(T||(T=Object(P.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]))),U=function(){return Object(i.jsx)(E,{children:Object(i.jsx)(R,{})})},Y=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.productList})),n=t.loading,s=(t.error,t.products);return Object(c.useEffect)((function(){e(y("https://api.spacexdata.com/v3/launches?limit=100"))}),[e]),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(o.a,{className:"homescreen",children:[Object(i.jsx)(u.a,{sm:12,lg:2,children:Object(i.jsx)(S,{})}),Object(i.jsx)(u.a,{sm:12,lg:10,children:n?Object(i.jsx)(U,{}):Object(i.jsx)(F,{products:s})})]})})};var B=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(l,{}),Object(i.jsx)(Y,{})]})},J=(n(81),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,90)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))}),M=n(13),W=n(49),z=n(50),H=Object(M.combineReducers)({productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return{loading:!0,products:[]};case O:return{loading:!1,products:t.payload};case f:return{loading:!1,error:t.payload};default:return e}}}),Q=[W.a],X=Object(M.createStore)(H,{},Object(z.composeWithDevTools)(M.applyMiddleware.apply(void 0,Q)));a.a.render(Object(i.jsx)(d.a,{store:X,children:Object(i.jsx)(B,{})}),document.getElementById("root")),J()}},[[82,1,2]]]);
//# sourceMappingURL=main.432f437a.chunk.js.map