(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[40],{1298:function(e,t,a){"use strict";var n=a(39);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(45)),i=a(1),c=(0,r.default)((0,i.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");t.default=c},1536:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(0),i=a(29),c=(a(96),a(58)),o=a(245),s=a(7),l=a(1460),d=a(85),b=a(126),j=a(1538),u=a(1539),O=a(1540),x=a(1541),v=a(1542),h=a(778),p=a(792),m=a(283),g=a(339),f=a(1298),y=a.n(f),N=a(10),w=a(676),S=a(684),D=a(834),B=a(838),C=a(839),T=a(685),k=a(470),I=a(763),M=a(791),R=a(785),F=a(759),P=a(1),z=Object(r.forwardRef)((function(e,t){return Object(P.jsx)(w.a,Object(N.a)({direction:"up",ref:t},e))}));function W(e){var t=e.open,a=e.setOpen,s=(e.page,e.limit,e.search,e.user),l=e.deliveryId,d=(e.setDeliveryId,Object(c.a)()),j=r.useState("Delivered"),u=Object(n.a)(j,2),O=u[0],x=u[1],v=Object(i.b)(),h=function(){a(!1)};return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)(S.a,{open:t,TransitionComponent:z,keepMounted:!0,"aria-labelledby":"alert-dialog-slide-title1","aria-describedby":"alert-dialog-slide-description1",children:[Object(P.jsx)(D.a,{id:"alert-dialog-slide-title1",children:"Change Status"}),Object(P.jsx)(g.a,{}),Object(P.jsx)(B.a,{children:Object(P.jsxs)(C.a,{id:"alert-dialog-slide-description1",children:[Object(P.jsx)(b.a,{variant:"body2",component:"span",children:"Are you sure you want to change the status?"}),Object(P.jsx)(k.a,{sx:{minWidth:120,margin:"20px"},children:Object(P.jsxs)(R.a,{fullWidth:!0,children:[Object(P.jsx)(I.a,{id:"demo-simple-select-label",children:"Status"}),Object(P.jsx)(F.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Status",onChange:function(e){x(e.target.value)},children:[{value:"Status",label:"Status"},{value:"Delivered",label:"Delivered"},{value:"Pending",label:"Pending"},{value:"In Process",label:"In Process"},{value:"In Transit",label:"In Transit"}].map((function(e){return Object(P.jsx)(M.a,{value:e.value,children:e.label},e.value)}))})]})})]})}),Object(P.jsx)(g.a,{}),Object(P.jsxs)(T.a,{sx:{pr:2.5},children:[Object(P.jsx)(m.a,{sx:{color:d.palette.error.dark,borderColor:d.palette.error.dark},onClick:h,color:"secondary",children:"No"}),Object(P.jsx)(m.a,{variant:"contained",size:"small",onClick:function(){v(Object(o.a)({brand:s.BrandId,delivery:l,status:O,handleClose:h}))},children:"Yes"})]})]})})}var A=a(805),L=(a(827),function(e){var t=e.deliveryList,a=e.user,i=Object(c.a)(),o=Object(r.useState)(!1),f=Object(n.a)(o,2),N=f[0],w=f[1],S=Object(r.useState)(0),D=Object(n.a)(S,2),B=D[0],C=D[1];return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(W,{setOpen:w,open:N,user:a,setDeliveryId:C,deliveryId:B}),Object(P.jsxs)(l.a,{children:[Object(P.jsx)(P.Fragment,{children:0==(null===t||void 0===t?void 0:t.length)?Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(d.a,{item:!0,children:Object(P.jsxs)(b.a,{variant:"h3",style:{padding:"20px",fontWeight:"800",color:"light"===i.palette.mode?" #000 ":"#98A2B2",justifyContent:"center"},children:[" ","No Deliveries found."]})})}):Object(P.jsxs)(j.a,{children:[Object(P.jsx)(u.a,{children:Object(P.jsxs)(O.a,{children:[Object(P.jsx)(x.a,{align:"center",sx:{borderBottom:"none"}}),Object(P.jsxs)(x.a,{align:"left ",className:"Tableheading",sx:{borderBottom:"none"},children:["Product name"," "]}),Object(P.jsx)(x.a,{className:"Tableheading",sx:{borderBottom:"none"},children:"Description"}),Object(P.jsx)(x.a,{className:"Tableheading",sx:{borderBottom:"none"},children:"Price"}),Object(P.jsx)(x.a,{className:"Tableheading",sx:{borderBottom:"none"},children:"Status"}),Object(P.jsx)(x.a,{className:"Tableheading",sx:{borderBottom:"none"},children:"Address"}),Object(P.jsx)(x.a,{className:"Tableheading",sx:{borderBottom:"none"},children:"Actions"})]})}),Object(P.jsx)(v.a,{children:void 0!=t&&(null===t||void 0===t?void 0:t.map((function(e,t){var a;return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)(O.a,{children:[Object(P.jsx)(x.a,{align:"right",sx:{borderBottom:"none"}}),Object(P.jsxs)(x.a,{sx:Object(s.a)({display:"flex",borderBottom:"none",textTransform:"capitalize"},"borderBottom","none"),children:[Object(P.jsx)(d.a,{item:!0,lg:6,children:Object(P.jsx)(A.a,{alt:"Brand Image",src:null===e||void 0===e?void 0:e.Nft.asset,sx:{}})}),Object(P.jsx)(d.a,{item:!0,lg:6,className:"tableName",children:null===e||void 0===e?void 0:e.Nft.name})]}),Object(P.jsx)(x.a,{className:"tablecell",sx:{borderBottom:"none"},children:null===e||void 0===e?void 0:e.Nft.description}),Object(P.jsxs)(x.a,{className:"tablecell",sx:{borderBottom:"none",color:"Delivered"==(null===e||void 0===e?void 0:e.status)?"Green":"pending"==(null===e||void 0===e?void 0:e.status)?"Blue":"Orange"},children:[null===e||void 0===e?void 0:e.Nft.price," ",null===e||void 0===e?void 0:e.Nft.currencyType]}),Object(P.jsx)(x.a,{className:"tablecell",sx:{borderBottom:"none",color:"Delivered"==(null===e||void 0===e?void 0:e.status)?"Green":"pending"==(null===e||void 0===e?void 0:e.status)?"Blue":"Orange"},children:null===e||void 0===e?void 0:e.status}),Object(P.jsx)(x.a,{className:"tablecell",sx:{borderBottom:"none"},children:null===e||void 0===e||null===(a=e.User)||void 0===a?void 0:a.address}),Object(P.jsx)(x.a,{align:"left",sx:{borderBottom:"none"},children:Object(P.jsx)(h.a,{direction:"row",justifyContent:"left",children:Object(P.jsx)(p.a,{placement:"top",title:"Status",children:Object(P.jsx)(m.a,{variant:"outlined",sx:{fontFamily:"Poppins",fontStyle:"normal"},endIcon:Object(P.jsx)(y.a,{}),onClick:function(){w(!0),C(null===e||void 0===e?void 0:e.id)},children:"Status"})})})})]})})})))})]})}),Object(P.jsx)(g.a,{})]})]})}),G=a(141),J=a(820);t.default=function(){Object(c.a)();var e=Object(i.b)(),t=Object(i.c)((function(e){return e.delivery.deliveryList})),a=Object(i.c)((function(e){return e.auth.user})),s=Object(r.useState)(""),l=Object(n.a)(s,2),d=l[0],b=(l[1],Object(r.useState)(1)),j=Object(n.a)(b,2),u=j[0],O=(j[1],Object(r.useState)(10)),x=Object(n.a)(O,2),v=x[0],h=(x[1],Object(r.useState)({id:null,name:"",description:"",image:null})),p=Object(n.a)(h,2),m=(p[0],p[1],Object(r.useState)(!1)),g=Object(n.a)(m,2),f=(g[0],g[1],Object(r.useState)(null)),y=Object(n.a)(f,2);y[0],y[1];return Object(r.useEffect)((function(){e(Object(o.d)({brand:a.BrandId}))}),[d,u,v]),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(J.a,{title:" Delivery Dashboard"}),Object(P.jsxs)(G.a,{className:" tableShadow",sx:{borderRadius:"5px !important",boxShadow:"none"},content:!1,children:[Object(P.jsx)(L,{deliveryList:t,user:a}),Object(P.jsx)(P.Fragment,{})]})]})}},804:function(e,t,a){"use strict";a.d(t,"b",(function(){return i}));var n=a(230),r=a(197);function i(e){return Object(r.a)("MuiDialogTitle",e)}var c=Object(n.a)("MuiDialogTitle",["root"]);t.a=c},805:function(e,t,a){"use strict";var n=a(10),r=a(127),i=a(58),c=a(681),o=a(1),s=["color","outline","size","sx"];t.a=function(e){var t=e.color,a=e.outline,l=e.size,d=e.sx,b=Object(r.a)(e,s),j=Object(i.a)(),u=t&&!a&&{color:j.palette.background.paper,bgcolor:"".concat(t,".main")},O=a&&{color:t?"".concat(t,".main"):"primary.main",bgcolor:j.palette.background.paper,border:"2px solid",borderColor:t?"".concat(t,".main"):"primary.main"},x={};switch(l){case"badge":x={width:j.spacing(3.5),height:j.spacing(3.5)};break;case"xs":x={width:j.spacing(4.25),height:j.spacing(4.25)};break;case"sm":x={width:j.spacing(5),height:j.spacing(5)};break;case"lg":x={width:j.spacing(9),height:j.spacing(9)};break;case"xl":x={width:j.spacing(10.25),height:j.spacing(10.25)};break;case"md":x={width:j.spacing(7.5),height:j.spacing(7.5)};break;default:x={}}return Object(o.jsx)(c.a,Object(n.a)({sx:Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)({},u),O),x),d)},b))}},820:function(e,t,a){"use strict";var n=a(7),r=a(470),i=a(85),c=a(126),o=a(782),s=a(791),l=a(58),d=a(0),b=a(96),j=a(1),u=Object(d.forwardRef)((function(e){var t=e.title,a=(e.role,e.value),d=e.setValue,u=e.options,O=Object(l.a)();return Object(j.jsx)(r.a,{sx:{padding:"13px 20px 22px 20px"},children:Object(j.jsxs)(i.a,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:b.b,children:[Object(j.jsx)(i.a,{item:!0,children:Object(j.jsx)(c.a,{variant:"h1",component:"h2",className:"headingcard",sx:Object(n.a)({marginTop:"10px",fontWeight:600,color:"#000",marginLeft:{lg:"-20px",md:"-20px"},background:"dark"===O.palette.mode?"black":"#f3f3f3"},"color","dark"===O.palette.mode?"white":"#404040"),children:t})}),void 0!==a&&Object(j.jsx)(i.a,{item:!0,children:Object(j.jsx)(o.a,{id:"standard-select-currency",select:!0,value:a,onChange:function(e){return d(e.target.value)},sx:{width:"110px",height:"40px"},children:u.map((function(e){return Object(j.jsx)(s.a,{value:e.value,children:e.label},e.value)}))})})]})})}));t.a=u},834:function(e,t,a){"use strict";var n=a(3),r=a(11),i=a(0),c=a(16),o=a(280),s=a(126),l=a(12),d=a(21),b=a(804),j=a(343),u=a(1),O=["className","id"],x=Object(l.a)(s.a,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})({padding:"16px 24px",flex:"0 0 auto"}),v=i.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiDialogTitle"}),s=a.className,l=a.id,v=Object(r.a)(a,O),h=a,p=function(e){var t=e.classes;return Object(o.a)({root:["root"]},b.b,t)}(h),m=i.useContext(j.a).titleId,g=void 0===m?l:m;return Object(u.jsx)(x,Object(n.a)({component:"h2",className:Object(c.a)(p.root,s),ownerState:h,ref:t,variant:"h6",id:null!=l?l:g},v))}));t.a=v},838:function(e,t,a){"use strict";var n=a(7),r=a(11),i=a(3),c=a(0),o=a(16),s=a(280),l=a(12),d=a(21),b=a(230),j=a(197);function u(e){return Object(j.a)("MuiDialogContent",e)}Object(b.a)("MuiDialogContent",["root","dividers"]);var O=a(804),x=a(1),v=["className","dividers"],h=Object(l.a)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dividers&&t.dividers]}})((function(e){var t=e.theme,a=e.ownerState;return Object(i.a)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},a.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat((t.vars||t).palette.divider),borderBottom:"1px solid ".concat((t.vars||t).palette.divider)}:Object(n.a)({},".".concat(O.a.root," + &"),{paddingTop:0}))})),p=c.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiDialogContent"}),n=a.className,c=a.dividers,l=void 0!==c&&c,b=Object(r.a)(a,v),j=Object(i.a)({},a,{dividers:l}),O=function(e){var t=e.classes,a={root:["root",e.dividers&&"dividers"]};return Object(s.a)(a,u,t)}(j);return Object(x.jsx)(h,Object(i.a)({className:Object(o.a)(O.root,n),ownerState:j,ref:t},b))}));t.a=p},839:function(e,t,a){"use strict";var n=a(11),r=a(3),i=a(0),c=a(16),o=a(280),s=a(12),l=a(21),d=a(126),b=a(230),j=a(197);function u(e){return Object(j.a)("MuiDialogContentText",e)}Object(b.a)("MuiDialogContentText",["root"]);var O=a(1),x=["children","className"],v=Object(s.a)(d.a,{shouldForwardProp:function(e){return Object(s.b)(e)||"classes"===e},name:"MuiDialogContentText",slot:"Root",overridesResolver:function(e,t){return t.root}})({}),h=i.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiDialogContentText"}),i=a.className,s=Object(n.a)(a,x),d=function(e){var t=e.classes,a=Object(o.a)({root:["root"]},u,t);return Object(r.a)({},t,a)}(s);return Object(O.jsx)(v,Object(r.a)({component:"p",variant:"body1",color:"text.secondary",ref:t,ownerState:s,className:Object(c.a)(d.root,i)},a,{classes:d}))}));t.a=h}}]);
//# sourceMappingURL=40.b491dd0a.chunk.js.map