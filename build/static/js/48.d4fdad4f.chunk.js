(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[48],{1309:function(e,t,a){"use strict";var c=a(39);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(45)),r=a(1),s=(0,n.default)((0,r.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");t.default=s},1498:function(e,t,a){"use strict";a.r(t);var c=a(14),n=a(0),r=a(30),s=a(29),i=a(745),l=a(653),d=a(10),o=(a(123),a(59)),j=(a(751),a(225),a(1480)),b=a(1499),x=a(1);function m(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function u(e){var t,a=e.marketplaceCategories,c=e.categoryId,n=e.setCategoryId,r=Object(o.a)();return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(j.a,{value:c,variant:"scrollable",onChange:function(e,t){n(t)},sx:{mb:1,ml:1,"& a":{minHeight:"1rem",minWidth:10,py:1.5,px:0,mr:4.7,color:r.palette.grey[600],display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},"& a.Mui-selected":{color:r.palette.primary.main}},children:[Object(x.jsx)(b.a,Object(d.a)({sx:{},to:"#",label:"All",value:0},m(0))),(null===a||void 0===a||null===(t=a.categories)||void 0===t?void 0:t.length)>0&&(null===a||void 0===a?void 0:a.categories.map((function(e){return Object(x.jsx)(b.a,Object(d.a)({label:e.name,value:e.id},m(e.id)))})))]})})}var O=a(930),p=a(1309),h=a.n(p),f=a(211);t.default=function(){var e=Object(l.a)(),t=Object(s.k)(),a=Object(r.b)(),d=Object(s.i)(),o=Object(r.c)((function(e){return e.marketplaceReducer.marketplaceCategories})),j=Object(r.c)((function(e){return e.marketplaceReducer.marketplaceNfts})),b=Object(n.useState)(""),m=Object(c.a)(b,2),p=m[0],g=(m[1],Object(n.useState)(1)),v=Object(c.a)(g,2),k=v[0],y=(v[1],Object(n.useState)(10)),C=Object(c.a)(y,2),w=C[0],N=(C[1],Object(n.useState)(0)),A=Object(c.a)(N,2),F=A[0],I=A[1];return Object(n.useEffect)((function(){a(Object(f.a)())}),[]),Object(n.useEffect)((function(){d.state&&I(d.state.category.id)}),[]),Object(n.useEffect)((function(){a(Object(f.c)({search:p,page:k,limit:w,categoryId:F}))}),[p,k,w,F]),Object(x.jsx)(i.a,{item:!0,md:12,lg:11,xs:12,style:{background:"tranparent",color:"dark"===e.palette.mode?"white":"#404040"},children:Object(x.jsx)(i.a,{container:!0,sx:{display:{xs:"block",sm:"block",md:"flex"},marginBottom:"40px"},children:Object(x.jsxs)(i.a,{item:!0,md:12,xs:12,sx:{mt:2,paddingLeft:1,paddingRight:2},children:[Object(x.jsx)(i.a,{container:!0,children:Object(x.jsx)("h1",{style:{paddingLeft:"0.5%"},children:Object(x.jsx)(h.a,{onClick:function(){t("/home")},sx:{color:"#2F53FF"}})})}),Object(x.jsxs)(i.a,{container:!0,children:[Object(x.jsx)("h1",{className:"MarketplaceHead",style:{paddingLeft:"0.5%"},children:"Marketplace"}),Object(x.jsx)(i.a,{item:!0,md:12,xs:12,children:Object(x.jsx)(u,{marketplaceCategories:o,categoryId:F,setCategoryId:I})}),Object(x.jsx)(i.a,{item:!0,md:12,xs:12,children:Object(x.jsx)(O.a,{marketplaceNfts:j})})]})]})})})}},930:function(e,t,a){"use strict";var c=a(745),n=a(225),r=a(93),s=a(59),i=a(663),l=a(880),d=a(664),o=a(657),j=a(881),b=a(29),x=a(1),m=function(e){var t=e.data,a=Object(s.a)(),n=Object(b.k)();return Object(x.jsx)(c.a,{item:!0,md:2,lg:2,sm:6,xs:12,onClick:function(){n("/productDetails/"+t.id,{state:{nft:t}})},sx:{color:"dark"===a.palette.mode?"white":"black",textDecoration:"none"},children:Object(x.jsx)(i.a,{sx:{color:"dark"===a.palette.mode?"white":"#404040",background:"dark"===a.palette.mode?"#181C1F":"white",maxWidth:365,width:"105%",borderRadius:"3px"},children:Object(x.jsxs)(l.a,{children:[Object(x.jsx)(j.a,{component:"img",height:"200",sx:{objectFit:"scale-down"},image:t.asset}),Object(x.jsxs)(d.a,{sx:{padding:"6%"},children:[Object(x.jsxs)(c.a,{container:!0,children:[Object(x.jsxs)(c.a,{item:!0,xs:8,className:"encap",sx:{textAlign:"left"},children:[Object(x.jsxs)("span",{className:"cardHeading encap",style:{fontSize:"100%"},children:["  ",t.name," "]}),Object(x.jsx)("div",{className:"overflow brandName",style:{marginTop:"5%",color:"#656565"},children:t.Brand.name})]}),Object(x.jsx)(c.a,{item:!0,xs:4,sx:{background:""},children:Object(x.jsx)("span",{className:"newCreator",sx:{fontSize:"110%",float:"right",color:"dark"===a.palette.mode?"#CDCDCD":"#404040"},children:"Brand"})})]}),Object(x.jsx)(o.a,{sx:{mt:2,mb:2}}),Object(x.jsx)(c.a,{children:Object(x.jsxs)(c.a,{item:!0,md:12,xs:12,className:"overflow",sx:{marginTop:{xs:"10px",md:"0"}},children:[Object(x.jsx)("span",{sx:{float:"left"},children:"Current Price :"}),Object(x.jsx)("span",{sx:{marginLeft:"2%"},children:Object(x.jsx)("b",{children:t.currencyType+" "+t.price})})]})})]})]})})})};t.a=function(e){var t,a,s=e.marketplaceNfts;return Object(x.jsx)(c.a,{"container-fluid":!0,spacing:r.b,sx:{paddingRight:"0%"},children:Object(x.jsx)(c.a,{item:!0,xs:12,children:(null===s||void 0===s||null===(t=s.nfts)||void 0===t?void 0:t.rows.length)>0?Object(x.jsx)(c.a,{container:!0,justifyContent:"left",spacing:r.b,sx:{mt:2,textAlign:"center",paddingRight:"1%"},children:null===s||void 0===s||null===(a=s.nfts)||void 0===a?void 0:a.rows.map((function(e){return Object(x.jsx)(m,{data:e})}))}):Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(c.a,{item:!0,xs:12,children:Object(x.jsx)(n.a,{className:"fontfamily",variant:"h3",component:"div",sx:{mt:{md:8,lg:8},textAlign:{xs:"center",md:"center",sm:"center",color:" #9498AA"}},children:"There are currently no products in this category."})})})})})}}}]);
//# sourceMappingURL=48.d4fdad4f.chunk.js.map