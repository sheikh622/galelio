(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[46],{1494:function(e,t,a){"use strict";a.r(t);var n=a(14),c=a(0),i=a(30),s=(a(93),a(59)),l=a(238),r=a(7),o=a(929),d=a(745),b=a(225),j=a(875),u=a(876),x=a(877),O=a(878),h=a(879),p=a(729),m=a(773),g=a(746),v=a(657),f=a(1264),y=a.n(f),B=a(10),N=a(722),k=a(770),S=a(853),w=a(872),I=a(874),C=a(771),T=a(751),D=a(740),F=a(769),P=a(763),z=a(736),A=a(1),L=Object(c.forwardRef)((function(e,t){return Object(A.jsx)(N.a,Object(B.a)({direction:"up",ref:t},e))}));function W(e){var t=e.open,a=e.setOpen,r=(e.page,e.limit,e.search,e.user),o=e.deliveryId,d=(e.setDeliveryId,Object(s.a)()),j=c.useState("Delivered"),u=Object(n.a)(j,2),x=u[0],O=u[1],h=Object(i.b)(),p=function(){a(!1)};return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)(k.a,{open:t,TransitionComponent:L,keepMounted:!0,"aria-labelledby":"alert-dialog-slide-title1","aria-describedby":"alert-dialog-slide-description1",children:[Object(A.jsx)(S.a,{id:"alert-dialog-slide-title1",children:"Change Status"}),Object(A.jsx)(v.a,{}),Object(A.jsx)(w.a,{children:Object(A.jsxs)(I.a,{id:"alert-dialog-slide-description1",children:[Object(A.jsx)(b.a,{variant:"body2",component:"span",children:"Are you sure you want to change the status?"}),Object(A.jsx)(T.a,{sx:{minWidth:120,margin:"20px"},children:Object(A.jsxs)(P.a,{fullWidth:!0,children:[Object(A.jsx)(D.a,{id:"demo-simple-select-label",children:"Status"}),Object(A.jsx)(z.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Status",onChange:function(e){O(e.target.value)},children:[{value:"Status",label:"Status"},{value:"Delivered",label:"Delivered"},{value:"Pending",label:"Pending"},{value:"In Process",label:"In Process"},{value:"In Transit",label:"In Transit"}].map((function(e){return Object(A.jsx)(F.a,{value:e.value,children:e.label},e.value)}))})]})})]})}),Object(A.jsx)(v.a,{}),Object(A.jsxs)(C.a,{sx:{pr:2.5},children:[Object(A.jsx)(g.a,{sx:{color:d.palette.error.dark,borderColor:d.palette.error.dark},onClick:p,color:"secondary",children:"No"}),Object(A.jsx)(g.a,{variant:"contained",size:"small",onClick:function(){h(Object(l.a)({brand:r.BrandId,delivery:o,status:x,handleClose:p}))},children:"Yes"})]})]})})}var R=a(788),G=(a(812),function(e){var t=e.deliveryList,a=e.user,i=Object(s.a)(),l=Object(c.useState)(!1),f=Object(n.a)(l,2),B=f[0],N=f[1],k=Object(c.useState)(0),S=Object(n.a)(k,2),w=S[0],I=S[1];return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(W,{setOpen:N,open:B,user:a,setDeliveryId:I,deliveryId:w}),Object(A.jsxs)(o.a,{children:[Object(A.jsx)(A.Fragment,{children:0==(null===t||void 0===t?void 0:t.length)?Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(d.a,{item:!0,children:Object(A.jsxs)(b.a,{variant:"h3",style:{padding:"20px",fontWeight:"800",color:"light"===i.palette.mode?" #000 ":"#98A2B2",justifyContent:"center"},children:[" ","No Deliveries found."]})})}):Object(A.jsxs)(j.a,{children:[Object(A.jsx)(u.a,{children:Object(A.jsxs)(x.a,{children:[Object(A.jsx)(O.a,{align:"center",sx:{borderBottom:"none"}}),Object(A.jsxs)(O.a,{align:"left ",className:"Tableheading",sx:{borderBottom:"none"},children:["Product name"," "]}),Object(A.jsx)(O.a,{className:"Tableheading",sx:{borderBottom:"none"},children:"Description"}),Object(A.jsx)(O.a,{className:"Tableheading",sx:{borderBottom:"none"},children:"Price"}),Object(A.jsx)(O.a,{className:"Tableheading",sx:{borderBottom:"none"},children:"Status"}),Object(A.jsx)(O.a,{className:"Tableheading",sx:{borderBottom:"none"},children:"Address"}),Object(A.jsx)(O.a,{className:"Tableheading",sx:{borderBottom:"none"},children:"Actions"})]})}),Object(A.jsx)(h.a,{children:void 0!=t&&(null===t||void 0===t?void 0:t.map((function(e,t){var a;return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)(x.a,{children:[Object(A.jsx)(O.a,{align:"right",sx:{borderBottom:"none"}}),Object(A.jsxs)(O.a,{sx:Object(r.a)({display:"flex",borderBottom:"none",textTransform:"capitalize"},"borderBottom","none"),children:[Object(A.jsx)(d.a,{item:!0,lg:6,children:Object(A.jsx)(R.a,{alt:"Brand Image",src:null===e||void 0===e?void 0:e.Nft.asset,sx:{}})}),Object(A.jsx)(d.a,{item:!0,lg:6,className:"tableName",children:null===e||void 0===e?void 0:e.Nft.name})]}),Object(A.jsx)(O.a,{className:"tablecell",sx:{borderBottom:"none"},children:null===e||void 0===e?void 0:e.Nft.description}),Object(A.jsxs)(O.a,{className:"tablecell",sx:{borderBottom:"none",color:"Delivered"==(null===e||void 0===e?void 0:e.status)?"Green":"pending"==(null===e||void 0===e?void 0:e.status)?"Blue":"Orange"},children:[null===e||void 0===e?void 0:e.Nft.price," ",null===e||void 0===e?void 0:e.Nft.currencyType]}),Object(A.jsx)(O.a,{className:"tablecell",sx:{borderBottom:"none",color:"Delivered"==(null===e||void 0===e?void 0:e.status)?"Green":"pending"==(null===e||void 0===e?void 0:e.status)?"Blue":"Orange"},children:null===e||void 0===e?void 0:e.status}),Object(A.jsx)(O.a,{className:"tablecell",sx:{borderBottom:"none"},children:null===e||void 0===e||null===(a=e.User)||void 0===a?void 0:a.address}),Object(A.jsx)(O.a,{align:"left",sx:{borderBottom:"none"},children:Object(A.jsx)(p.a,{direction:"row",justifyContent:"left",children:Object(A.jsx)(m.a,{placement:"top",title:"Status",children:Object(A.jsx)(g.a,{variant:"outlined",sx:{fontFamily:"Poppins",fontStyle:"normal"},endIcon:Object(A.jsx)(y.a,{}),onClick:function(){N(!0),I(null===e||void 0===e?void 0:e.id)},children:"Status"})})})})]})})})))})]})}),Object(A.jsx)(v.a,{})]})]})}),J=a(171),E=a(803);t.default=function(){Object(s.a)();var e=Object(i.b)(),t=Object(i.c)((function(e){return e.delivery.deliveryList})),a=Object(i.c)((function(e){return e.auth.user})),r=Object(c.useState)(""),o=Object(n.a)(r,2),d=o[0],b=(o[1],Object(c.useState)(1)),j=Object(n.a)(b,2),u=j[0],x=(j[1],Object(c.useState)(10)),O=Object(n.a)(x,2),h=O[0],p=(O[1],Object(c.useState)({id:null,name:"",description:"",image:null})),m=Object(n.a)(p,2),g=(m[0],m[1],Object(c.useState)(!1)),v=Object(n.a)(g,2),f=(v[0],v[1],Object(c.useState)(null)),y=Object(n.a)(f,2);y[0],y[1];return Object(c.useEffect)((function(){e(Object(l.d)({brand:a.BrandId}))}),[d,u,h]),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(E.a,{title:" Delivery Dashboard"}),Object(A.jsxs)(J.a,{className:" tableShadow",sx:{borderRadius:"5px !important",boxShadow:"none"},content:!1,children:[Object(A.jsx)(G,{deliveryList:t,user:a}),Object(A.jsx)(A.Fragment,{})]})]})}},788:function(e,t,a){"use strict";var n=a(10),c=a(123),i=a(59),s=a(748),l=a(1),r=["color","outline","size","sx"];t.a=function(e){var t=e.color,a=e.outline,o=e.size,d=e.sx,b=Object(c.a)(e,r),j=Object(i.a)(),u=t&&!a&&{color:j.palette.background.paper,bgcolor:"".concat(t,".main")},x=a&&{color:t?"".concat(t,".main"):"primary.main",bgcolor:j.palette.background.paper,border:"2px solid",borderColor:t?"".concat(t,".main"):"primary.main"},O={};switch(o){case"badge":O={width:j.spacing(3.5),height:j.spacing(3.5)};break;case"xs":O={width:j.spacing(4.25),height:j.spacing(4.25)};break;case"sm":O={width:j.spacing(5),height:j.spacing(5)};break;case"lg":O={width:j.spacing(9),height:j.spacing(9)};break;case"xl":O={width:j.spacing(10.25),height:j.spacing(10.25)};break;case"md":O={width:j.spacing(7.5),height:j.spacing(7.5)};break;default:O={}}return Object(l.jsx)(s.a,Object(n.a)({sx:Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)({},u),x),O),d)},b))}},803:function(e,t,a){"use strict";var n=a(7),c=a(751),i=a(745),s=a(225),l=a(760),r=a(769),o=a(59),d=a(0),b=a(93),j=a(1),u=Object(d.forwardRef)((function(e){var t=e.title,a=(e.role,e.value),d=e.setValue,u=e.options,x=Object(o.a)();return Object(j.jsx)(c.a,{sx:{padding:"13px 20px 22px 20px"},children:Object(j.jsxs)(i.a,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:b.b,children:[Object(j.jsx)(i.a,{item:!0,children:Object(j.jsx)(s.a,{variant:"h1",component:"h2",className:"headingcard",sx:Object(n.a)({marginTop:"10px",fontWeight:600,color:"#000",marginLeft:{lg:"-20px",md:"-20px"},background:"dark"===x.palette.mode?"black":"#f3f3f3"},"color","dark"===x.palette.mode?"white":"#404040"),children:t})}),void 0!==a&&Object(j.jsx)(i.a,{item:!0,children:Object(j.jsx)(l.a,{id:"standard-select-currency",select:!0,value:a,onChange:function(e){return d(e.target.value)},sx:{width:"110px",height:"40px"},children:u.map((function(e){return Object(j.jsx)(r.a,{value:e.value,children:e.label},e.value)}))})})]})})}));t.a=u}}]);
//# sourceMappingURL=46.0a5b5bb7.chunk.js.map