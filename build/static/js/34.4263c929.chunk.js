(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[34],{1462:function(e,t,a){"use strict";var n=a(348),i=a(13),c=a(7),r=a(11),s=a(3),o=a(0),d=(a(236),a(16)),l=a(280),j=a(12),b=a(21),x=a(773),p=a(766),u=a(868),m=a(159),f=a(230),h=a(197);function O(e){return Object(h.a)("MuiAccordion",e)}var g=Object(f.a)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),v=a(1),k=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],y=Object(j.a)(p.a,{name:"MuiAccordion",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[Object(c.a)({},"& .".concat(g.region),t.region),t.root,!a.square&&t.rounded,!a.disableGutters&&t.gutters]}})((function(e){var t,a=e.theme,n={duration:a.transitions.duration.shortest};return t={position:"relative",transition:a.transitions.create(["margin"],n),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(a.vars||a).palette.divider,transition:a.transitions.create(["opacity","background-color"],n)},"&:first-of-type":{"&:before":{display:"none"}}},Object(c.a)(t,"&.".concat(g.expanded),{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}}),Object(c.a)(t,"&.".concat(g.disabled),{backgroundColor:(a.vars||a).palette.action.disabledBackground}),t}),(function(e){var t=e.theme,a=e.ownerState;return Object(s.a)({},!a.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(t.vars||t).shape.borderRadius,borderTopRightRadius:(t.vars||t).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(t.vars||t).shape.borderRadius,borderBottomRightRadius:(t.vars||t).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!a.disableGutters&&Object(c.a)({},"&.".concat(g.expanded),{margin:"16px 0"}))})),C=o.forwardRef((function(e,t){var a=Object(b.a)({props:e,name:"MuiAccordion"}),c=a.children,j=a.className,p=a.defaultExpanded,f=void 0!==p&&p,h=a.disabled,g=void 0!==h&&h,C=a.disableGutters,N=void 0!==C&&C,A=a.expanded,w=a.onChange,F=a.square,M=void 0!==F&&F,H=a.TransitionComponent,T=void 0===H?x.a:H,R=a.TransitionProps,V=Object(r.a)(a,k),S=Object(m.a)({controlled:A,default:f,name:"Accordion",state:"expanded"}),D=Object(i.a)(S,2),E=D[0],I=D[1],q=o.useCallback((function(e){I(!E),w&&w(e,!E)}),[E,w,I]),B=o.Children.toArray(c),Z=Object(n.a)(B),Q=Z[0],G=Z.slice(1),z=o.useMemo((function(){return{expanded:E,disabled:g,disableGutters:N,toggle:q}}),[E,g,N,q]),U=Object(s.a)({},a,{square:M,disabled:g,disableGutters:N,expanded:E}),W=function(e){var t=e.classes,a={root:["root",!e.square&&"rounded",e.expanded&&"expanded",e.disabled&&"disabled",!e.disableGutters&&"gutters"],region:["region"]};return Object(l.a)(a,O,t)}(U);return Object(v.jsxs)(y,Object(s.a)({className:Object(d.a)(W.root,j),ref:t,ownerState:U,square:M},V,{children:[Object(v.jsx)(u.a.Provider,{value:z,children:Q}),Object(v.jsx)(T,Object(s.a)({in:E,timeout:"auto"},R,{children:Object(v.jsx)("div",{"aria-labelledby":Q.props.id,id:Q.props["aria-controls"],role:"region",className:W.region,children:G})}))]}))}));t.a=C},1463:function(e,t,a){"use strict";var n=a(7),i=a(11),c=a(3),r=a(0),s=a(16),o=a(280),d=a(12),l=a(21),j=a(680),b=a(868),x=a(230),p=a(197);function u(e){return Object(p.a)("MuiAccordionSummary",e)}var m=Object(x.a)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),f=a(1),h=["children","className","expandIcon","focusVisibleClassName","onClick"],O=Object(d.a)(j.a,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,a=e.theme,i=e.ownerState,r={duration:a.transitions.duration.shortest};return Object(c.a)((t={display:"flex",minHeight:48,padding:a.spacing(0,2),transition:a.transitions.create(["min-height","background-color"],r)},Object(n.a)(t,"&.".concat(m.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),Object(n.a)(t,"&.".concat(m.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),Object(n.a)(t,"&:hover:not(.".concat(m.disabled,")"),{cursor:"pointer"}),t),!i.disableGutters&&Object(n.a)({},"&.".concat(m.expanded),{minHeight:64}))})),g=Object(d.a)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:function(e,t){return t.content}})((function(e){var t=e.theme,a=e.ownerState;return Object(c.a)({display:"flex",flexGrow:1,margin:"12px 0"},!a.disableGutters&&Object(n.a)({transition:t.transitions.create(["margin"],{duration:t.transitions.duration.shortest})},"&.".concat(m.expanded),{margin:"20px 0"}))})),v=Object(d.a)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:function(e,t){return t.expandIconWrapper}})((function(e){var t=e.theme;return Object(n.a)({display:"flex",color:(t.vars||t).palette.action.active,transform:"rotate(0deg)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})},"&.".concat(m.expanded),{transform:"rotate(180deg)"})})),k=r.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiAccordionSummary"}),n=a.children,d=a.className,j=a.expandIcon,x=a.focusVisibleClassName,p=a.onClick,m=Object(i.a)(a,h),k=r.useContext(b.a),y=k.disabled,C=void 0!==y&&y,N=k.disableGutters,A=k.expanded,w=k.toggle,F=Object(c.a)({},a,{expanded:A,disabled:C,disableGutters:N}),M=function(e){var t=e.classes,a=e.expanded,n=e.disabled,i=e.disableGutters,c={root:["root",a&&"expanded",n&&"disabled",!i&&"gutters"],focusVisible:["focusVisible"],content:["content",a&&"expanded",!i&&"contentGutters"],expandIconWrapper:["expandIconWrapper",a&&"expanded"]};return Object(o.a)(c,u,t)}(F);return Object(f.jsxs)(O,Object(c.a)({focusRipple:!1,disableRipple:!0,disabled:C,component:"div","aria-expanded":A,className:Object(s.a)(M.root,d),focusVisibleClassName:Object(s.a)(M.focusVisible,x),onClick:function(e){w&&w(e),p&&p(e)},ref:t,ownerState:F},m,{children:[Object(f.jsx)(g,{className:M.content,ownerState:F,children:n}),j&&Object(f.jsx)(v,{className:M.expandIconWrapper,ownerState:F,children:j})]}))}));t.a=k},1464:function(e,t,a){"use strict";var n=a(3),i=a(11),c=a(0),r=a(16),s=a(280),o=a(12),d=a(21),l=a(230),j=a(197);function b(e){return Object(j.a)("MuiAccordionDetails",e)}Object(l.a)("MuiAccordionDetails",["root"]);var x=a(1),p=["className"],u=Object(o.a)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){return{padding:e.theme.spacing(1,2,2)}})),m=c.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiAccordionDetails"}),c=a.className,o=Object(i.a)(a,p),l=a,j=function(e){var t=e.classes;return Object(s.a)({root:["root"]},b,t)}(l);return Object(x.jsx)(u,Object(n.a)({className:Object(r.a)(j.root,c),ref:t,ownerState:l},o))}));t.a=m},1518:function(e,t,a){"use strict";a.r(t);var n=a(13),i=a(27),c=a(83),r=a(0),s=a(29),o=a(85),d=a(126),l=a(339),j=a(96),b=a(58),x=(a(827),a(802),a(825),a(785)),p=a(759),u=a(791),m=a(1460),f=a(1538),h=a(1539),O=a(1540),g=a(1541),v=a(1542),k=a(141),y=a(1),C=function(e){var t,a=e.tracking,i={PaperProps:{style:{maxHeight:224,width:250}}};function c(e,t){return{fontWeight:-1===t.indexOf(e)?s.typography.fontWeightRegular:s.typography.fontWeightMedium}}var s=Object(b.a)(),C=r.useState([]),N=Object(n.a)(C,2),A=N[0],w=N[1],F=Object(r.useState)(""),M=Object(n.a)(F,2),H=(M[0],M[1],Object(r.useState)(1)),T=Object(n.a)(H,2),R=T[0],V=(T[1],3*R);[{title:"List",price:"0.006 ETH",from:"Vlad556 ",to:"Vlad556 ",days:"9 Days ago "},{title:"List",price:"0.006 ETH",from:"Alex 67 ",to:"Alex 67 ",days:"6 Days ago "},{title:"List",price:"0.006 ETH",from:"cynthia321 ",to:"cynthia321 ",days:"60 Days ago "},{title:"List",price:"0.006 ETH",from:"Vlad556 ",to:"Vlad556 ",days:"79 Days ago "}].slice(V-3,V);return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(o.a,{"container-fluid":!0,spacing:j.b,sx:{margin:"15px"},children:[Object(y.jsx)(o.a,{item:!0,xs:12,lg:12,md:12,children:Object(y.jsx)(o.a,{container:!0,spacing:2,sx:{mb:2},children:Object(y.jsx)(o.a,{item:!0,xs:12,children:Object(y.jsx)(d.a,{color:"dark"===s.palette.mode?"#FFFFFF":"black",className:"productfigmastyl",variant:"h2",mt:4,component:"div",sx:{textAlign:{xs:"center",md:"center",sm:"center"},textTransform:"capitalize"},children:"Metadatas and ownership Activity"})})})}),Object(y.jsx)(o.a,{item:!0,xs:12,children:Object(y.jsx)(o.a,{item:!0,md:12,sm:12,children:Object(y.jsxs)(k.a,{className:"tableShadow",sx:{background:"dark"===s.palette.mode?"#181C1F":"#fff"},title:Object(y.jsx)(o.a,{container:!0,spacing:j.b,children:Object(y.jsx)(o.a,{item:!0,xs:12,children:Object(y.jsx)("div",{children:Object(y.jsx)(x.a,{sx:{background:"dark"===s.palette.mode?"#181C1F":"#d9d9d9",color:"dark"===s.palette.mode?"#ffff":"black",padding:"10px 10px 10px 10px",border:"2px solid #CDCDCD",borderRadius:"4px"},fullWidth:!0,children:Object(y.jsx)(p.a,{variant:"standard",fullWidth:!0,displayEmpty:!0,value:A,onChange:function(e){var t=e.target.value;w("string"===typeof t?t.split(","):t)},renderValue:function(e){return 0===e.length?Object(y.jsx)("em",{className:"fontfamily",children:"filter"}):e.join(", ")},MenuProps:i,inputProps:{"aria-label":"Without label"},children:["Sales","Listings","Offers","Transfers"].map((function(e){return Object(y.jsx)(u.a,{value:e,style:c(e,A),children:e},e)}))})})})})}),content:!1,children:[Object(y.jsx)(l.a,{}),Object(y.jsx)(m.a,{children:Object(y.jsxs)(f.a,{children:[Object(y.jsx)(h.a,{children:Object(y.jsxs)(O.a,{children:[Object(y.jsxs)(g.a,{className:"activityTable",sx:{fontSize:"18px !important"},align:"center",children:["Event"," "]}),Object(y.jsxs)(g.a,{className:"activityTable",sx:{fontSize:"18px !important"},align:"center",children:["Price"," "]}),Object(y.jsx)(g.a,{className:"activityTable",sx:{fontSize:"18px !important"},align:"center",children:"From"}),Object(y.jsxs)(g.a,{className:"activityTable",sx:{fontSize:"18px !important"},align:"center",children:["To"," "]}),Object(y.jsx)(g.a,{className:"activityTable",sx:{fontSize:"18px !important"},align:"center",children:"Date"})]})}),null===a||void 0===a||null===(t=a.activity)||void 0===t?void 0:t.map((function(e){return Object(y.jsx)(v.a,{children:Object(y.jsxs)(O.a,{children:[Object(y.jsx)(g.a,{className:"activityTable",sx:{fontSize:"15px"},align:"center",children:e.event}),Object(y.jsx)(g.a,{className:"activityTable",sx:{fontSize:"15px"},align:"center",children:(e.event,e.price)}),Object(y.jsx)(g.a,{className:"activityTable",sx:{fontSize:"15px",color:"#2194FF"},align:"center",children:"Mint"!==e.event?e.from.slice(0,5)+"..."+e.from.slice(38,42):" "}),Object(y.jsx)(g.a,{className:"activityTable",sx:{fontSize:"15px",color:"#2194FF"},align:"center",children:"Mint"!==e.event?e.to.slice(0,5)+"..."+e.to.slice(38,42):" "}),Object(y.jsx)(g.a,{className:"activityTable",sx:{fontSize:"15px"},align:"center",children:Date(e.blockTimestamp).slice(0,15)})]})})}))]})})]})})})]})})},N=a(909),A=a(470),w=a(805),F=(a.p,a(142),a(285),function(e){var t,a,c,l,m,f,h,O,g,v,k,C,F=e.tracking,M=(Object(s.b)(),Object(i.l)(),Object(s.c)((function(e){return e.auth.user})),Object(r.useState)("")),H=Object(n.a)(M,2),T=H[0],R=H[1],V=Object(b.a)();return Object(y.jsx)(o.a,{"container-fluid":!0,spacing:j.b,sx:{margin:"15px"},children:Object(y.jsx)(o.a,{item:!0,xs:12,children:Object(y.jsxs)(o.a,{container:!0,justifyContent:"center",spacing:j.b,sx:{textAlign:"center"},children:[Object(y.jsx)(o.a,{item:!0,md:6,sm:12,children:Object(y.jsx)(N.a,{component:"img",image:null!==(t=F.nft)&&void 0!==t&&t.asset?null===(a=F.nft)||void 0===a?void 0:a.asset:"loading..!",sx:{minheight:"auto",maxHeight:"570px",background:"transparent",overflow:"hidden",cursor:"Pointer"}})}),Object(y.jsx)(o.a,{item:!0,md:6,sm:12,children:Object(y.jsx)(o.a,{item:!0,xs:12,children:Object(y.jsx)(o.a,{container:!0,children:Object(y.jsx)(o.a,{item:!0,md:12,sm:12,children:Object(y.jsxs)(o.a,{container:!0,spacing:2,children:[Object(y.jsx)(o.a,{ml:2,item:!0,xs:12,children:Object(y.jsxs)(o.a,{container:!0,spacing:2,alignItems:"center",children:[Object(y.jsx)(o.a,{item:!0,children:Object(y.jsx)(w.a,{alt:"User 1",src:null===F||void 0===F||null===(c=F.nft)||void 0===c||null===(l=c.Brand)||void 0===l?void 0:l.image,sx:{width:56,height:56,objectFit:"fill"}})}),Object(y.jsxs)(o.a,{item:!0,xs:!0,zeroMinWidth:!0,sx:{textDecoration:"none"},children:[Object(y.jsx)(d.a,{align:"left",fontWeight:600,variant:"h2",className:"brand",children:null!==F&&void 0!==F&&null!==(m=F.nft)&&void 0!==m&&null!==(f=m.Brand)&&void 0!==f&&f.name?null===F||void 0===F||null===(h=F.nft)||void 0===h||null===(O=h.Brand)||void 0===O?void 0:O.name:"Brand Name"}),Object(y.jsx)(d.a,{align:"left",variant:"h3",className:"creator",children:"Brand"})]})]})}),Object(y.jsx)(o.a,{item:!0,mt:2,xs:12,children:Object(y.jsx)(d.a,{className:"Lux",color:"dark"===V.palette.mode?"white":"black",variant:"h3",children:null===F||void 0===F||null===(g=F.nft)||void 0===g?void 0:g.name})}),Object(y.jsx)(o.a,{item:!0,xs:12,children:Object(y.jsx)(d.a,{className:"productdescription",variant:"body2",children:null!==F&&void 0!==F&&null!==(v=F.nft)&&void 0!==v&&v.description?null===F||void 0===F||null===(k=F.nft)||void 0===k?void 0:k.description:"NFT"})}),Object(y.jsx)(o.a,{item:!0,xs:12,children:Object(y.jsx)(A.a,{sx:{borderRadius:"4px",width:"95%",margin:"0 auto",textAlign:"left"},children:Object(y.jsx)(x.a,{sx:{background:"dark"===V.palette.mode?"#181C1F":"#d9d9d9",color:"dark"===V.palette.mode?"#ffff":"black",padding:"10px 10px 10px 10px",borderRadius:"4px"},fullWidth:!0,children:Object(y.jsx)(p.a,{variant:"standard",labelId:"demo-simple-select-label",id:"demo-simple-select",value:T,onChange:function(e){R(e.target.value)},fullWidth:!0,displayEmpty:!0,renderValue:function(e){return 0===e.length?Object(y.jsx)("em",{className:"fontfamily",children:"PROOF OF AUTHENTICITY"}):e.join(", ")},children:null===F||void 0===F||null===(C=F.nft)||void 0===C?void 0:C.NFTMetaFiles.map((function(e){return Object(y.jsx)(u.a,{onClick:function(){window.open(e.fieldValue,"_blank")},children:e.fieldName})}))})})})})]})})})})}),Object(y.jsx)(o.a,{item:!0,md:1,sm:12})]})})})}),M=a(414),H=a(416),T=a(415),R=a.p+"static/media/map.53acd566.png",V=a(682),S=a(683),D=a(1462),E=a(1464),I=a(1463),q=a(287),B=a.n(q),Z=(a(857),a(855)),Q=a(856),G=a(1520),z=a(10),U=a(676),W=a(684),P=a(763),L=(a(143),a(883),a(26),a(288),Object(r.forwardRef)((function(e,t){return Object(y.jsx)(U.a,Object(z.a)({direction:"up",ref:t},e))})));function J(e){var t=e.open,a=e.setOpen,c=e.Proof,d=Object(r.useState)(!1),l=Object(n.a)(d,2);l[0],l[1],Object(b.a)(),Object(i.l)(),Object(s.b)();return Object(y.jsx)("div",{children:Object(y.jsx)(W.a,{open:t,onClose:function(){a(!1)},TransitionComponent:L,sx:{width:"80%",margin:"0 auto",maxHeight:"500px"},children:Object(y.jsx)(o.a,{container:!0,sx:{pr:2.5,pl:2.5},children:Object(y.jsx)(o.a,{item:!0,xs:12,md:12,lg:12,sx:{p:2.5},children:Object(y.jsx)(o.a,{container:!0,children:c&&c.map((function(e){return Object(y.jsx)(o.a,{item:!0,xs:12,md:10,lg:10,children:Object(y.jsx)(P.a,{sx:{cursor:"pointer"},onClick:function(){window.open(null===e||void 0===e?void 0:e.fieldValue,"_blank")},htmlFor:"outlined-adornment-password-login",className:"textfieldStyle",children:e.fieldName})})}))})})})})})}a(897);var X=function(e){var t=e.data,a=e.defaultExpandedId,i=void 0===a?null:a,c=e.expandIcon,l=e.square,j=e.toggle,x=e.tracking,p=e.blockTimestamp,u=e.history,m=e.updater,f=e.Proof,h=Object(b.a)(),O=Object(r.useState)(!1),g=Object(n.a)(O,2),v=g[0],k=g[1],C=(Object(s.c)((function(e){return e.auth.user})),Object(r.useState)(null)),N=Object(n.a)(C,2),w=N[0],F=N[1];Object(r.useEffect)((function(){F(i)}),[i]);var M=Object(r.useState)(1),H=Object(n.a)(M,2),T=H[0],R=H[1],q=3*T,z=q-3,U=x.slice(z,q);return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(J,{setOpen:k,open:v,Proof:f}),Object(y.jsx)(A.a,{sx:{width:"100%"},children:t&&t.map((function(e){return Object(y.jsxs)(D.a,{m:3,defaultExpanded:!e.disabled&&e.defaultExpand,expanded:!j&&!e.disabled&&e.expanded||j&&w===e.id,disabled:e.disabled,square:l,onChange:(t=e.id,function(e,a){j&&F(!!a&&t)}),children:[Object(y.jsxs)(I.a,{expandIcon:c||!1===c?c:Object(y.jsx)(B.a,{sx:{color:"#2F53FF"}}),className:"atributes",sx:{color:"dark"===h.palette.mode?"#FFFFFF":"grey.800"},children:["History ",u]}),Object(y.jsxs)(E.a,{children:[Object(y.jsxs)(o.a,{item:!0,container:!0,className:"",sx:{pl:1.5,pb:{xs:3,md:1},background:"dark"===h.palette.mode?"#181C1F":"#fff"},children:[Object(y.jsx)(o.a,{item:!0,xs:4,children:Object(y.jsxs)(d.a,{variant:"body",className:"property-date",sx:{color:"dark"===h.palette.mode?"#CDCDCD":"#000"},children:["Date: ",Date(p).slice(0,15)]})}),Object(y.jsxs)(o.a,{item:!0,xs:6,children:[Object(y.jsx)(d.a,{variant:"body",className:"property-update",sx:{color:"dark"===h.palette.mode?"#CDCDCD":"#000"},children:"Updated by:"}),Object(y.jsxs)(d.a,{variant:"body",className:"property-update",sx:{color:"#2F92FF !important"},children:[" ",m?m.slice(0,5)+"..."+m.slice(38,42):"0"]})]}),Object(y.jsx)(o.a,{item:!0,xs:2,className:"doc-property",sx:{},children:"dark"===h.palette.mode?Object(y.jsx)(A.a,{className:"doc-heading",onClick:function(){k(!0)},children:Object(y.jsx)(Z.a,{})}):Object(y.jsx)(A.a,{className:"doc-heading",onClick:function(){k(!0)},children:Object(y.jsx)(Q.a,{})})})]}),Object(y.jsx)(o.a,{item:!0,xs:12,md:12,sx:{pl:1.5,pb:{xs:3,md:0},background:"dark"===h.palette.mode?"#181C1F":"#fff",display:{md:"flex"},height:{md:"160px"}},children:null===U||void 0===U?void 0:U.map((function(e){return Object(y.jsx)(o.a,{item:!0,xs:12,md:4,children:Object(y.jsx)(V.a,{className:"card-style",sx:{border:"2px solid #2F53FF"},children:Object(y.jsxs)(S.a,{sx:{padding:"18px 12px"},children:[Object(y.jsxs)("p",{className:"Engine",children:[" ",e.trait_type]}),Object(y.jsx)(d.a,{variant:"h6",className:"V8",sx:{color:"dark"===h.palette.mode?"#ffff":"black"},children:e.value}),Object(y.jsx)("p",{className:"y2023",sx:{color:"dark"===h.palette.mode?"#CDCDCD":"black"},children:"2023"}),Object(y.jsx)(o.a,{item:!0,xs:12,className:"document",sx:{m:1},children:"dark"===h.palette.mode?Object(y.jsx)(A.a,{onClick:function(){window.open(null!==e&&void 0!==e&&e.proof?null===e||void 0===e?void 0:e.proof:"https://galileoprotocol.infura-ipfs.io/ipfs/QmZVFGoTeZqNMRZjQQpHegDpJ8xqgE8fMv138ULMbfkkhf","_blank")},children:Object(y.jsx)(Z.a,{})}):Object(y.jsx)(A.a,{onClick:function(){window.open(null!==e&&void 0!==e&&e.proof?null===e||void 0===e?void 0:e.proof:"https://galileoprotocol.infura-ipfs.io/ipfs/QmZVFGoTeZqNMRZjQQpHegDpJ8xqgE8fMv138ULMbfkkhf","_blank")},children:Object(y.jsx)(Q.a,{})})})]})})})}))}),Object(y.jsx)(G.a,{count:Math.ceil(x.length/3),onChange:function(e,t){return R(t)},page:T})]})]},e.id);var t}))})]})},Y=a(931),_=function(e){var t,a,i=e.tracking,c=(Object(b.a)(),[{id:"basic1",title:"History 1"}]),s=Object(r.useState)(null),d=Object(n.a)(s,2),l=(d[0],d[1],Object(r.useState)(null)),x=Object(n.a)(l,2),p=(x[0],x[1],Object(r.useState)(1)),u=Object(n.a)(p,2),m=u[0],f=u[1],h=5*m,O=h-5,g=null===i||void 0===i||null===(t=i.historyArray)||void 0===t?void 0:t.slice(O,h);return Object(y.jsx)(o.a,{"container-fluid":!0,spacing:j.b,sx:{margin:"0 15px"},children:Object(y.jsxs)(o.a,{container:!0,children:[Object(y.jsxs)(o.a,{item:!0,xs:12,sm:6,md:6,sx:{padding:"0 15px 0 02px"},children:[Object(y.jsx)(o.a,{item:!0,xs:12,md:12,children:Object(y.jsx)(Y.a,{tracking:i,data:[{id:"basic1",title:"Attribute"}]})}),void 0!=i&&(null===i||void 0===i?void 0:i.historyArray)&&g.map((function(e){return Object(y.jsx)(o.a,{mt:2,mb:2,item:!0,xs:12,md:12,children:Object(y.jsx)(X,{tracking:null===e||void 0===e?void 0:e.historyArray,updater:e.updator,blockTimestamp:e.blockTimestamp,Proof:null===e||void 0===e?void 0:e.proofOfAuthenticityArray,data:c,history:e.historyNo})})})),Object(y.jsx)(G.a,{count:Math.ceil((null===i||void 0===i||null===(a=i.historyArray)||void 0===a?void 0:a.length)/5),onChange:function(e,t){return f(t)},page:m})]}),Object(y.jsx)(o.a,{item:!0,xs:12,sm:6,md:6,children:Object(y.jsx)("img",{className:"map",src:R})})]})})},K=a(182),$=(a(181),a(46)),ee=a(778),te=a(790);t.default=function(){var e,t,a,j,b,x,p,u,m=Object(c.f)(),f=Object(i.j)(),h=Object(i.l)(),O=Object(r.useState)(0),g=Object(n.a)(O,2),v=g[0],k=g[1];Object(r.useEffect)((function(){var e=setInterval((function(){k((function(e){if(100===e)return 0;var t=10*Math.random();return Math.min(e+t,100)}))}),500);return function(){clearInterval(e)}}),[]);var N=Object(s.b)(),A=Object(i.n)().token,w=null===(e=f.state)||void 0===e?void 0:e.tokenId,R=null===(t=f.state)||void 0===t?void 0:t.address;console.log("serialId",A),console.log(" tokenId",null===(a=f.state)||void 0===a?void 0:a.tokenId),console.log(" address",null===(j=f.state)||void 0===j?void 0:j.address);var V=Object(s.c)((function(e){return e.marketplaceReducer.trackNft}));return console.log(" marketplaceNfts>>>>",null===V||void 0===V||null===(b=V.nft)||void 0===b||null===(x=b.Brand)||void 0===x?void 0:x.image),Object(r.useEffect)((function(){console.log("run"),N(Object($.l)(!0)),N(Object(K.g)({serialId:A,tokenId:"".concat(w),address:R,navigate:h}))}),[]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(o.a,{container:!0,sx:{background:"dark"===m.palette.mode?"radial-gradient(to top right, 50% 50% at 50% 50%, #2B8CFF 0%, rgba(43, 140, 255, 0.27))":"#f3f3f3",backgroundImage:"dark"===m.palette.mode?"linear-gradient(to top right, black,rgba(255,0,0,0), rgba(43 140 255 / 27%) )":""},children:[Object(y.jsx)(o.a,{item:!0,md:12,sm:12,xs:12,sx:{mt:2,ml:2,mr:2,background:"dark"===m.palette.mode?"black":"#f3f3f3",color:"dark"===m.palette.mode?"white":"#404040",borderRadius:"4px"},children:Object(y.jsx)(M.a,{})}),Object(y.jsx)(o.a,{item:!0,md:1,xs:12,sx:{mt:2,marginBottom:"28px",position:"sticky",height:"100%",top:"0",display:{xs:"none",sm:"none",md:"flex",lg:"flex",xl:"flex"}},children:Object(y.jsx)(H.a,{})}),Object(y.jsx)(o.a,{"container-fluid":!0,md:11,lg:11,sx:{ml:{md:-2},display:{xs:"block",sm:"block",md:"flex",lg:"flex"},background:"tranparent",color:"dark"===m.palette.mode?"white":"#404040"},children:null!==V&&void 0!==V&&null!==(p=V.nft)&&void 0!==p&&null!==(u=p.Brand)&&void 0!==u&&u.image?Object(y.jsxs)(o.a,{item:!0,md:12,xs:12,lg:12,children:[Object(y.jsx)(o.a,{item:!0,xs:12,lg:12,md:12,children:Object(y.jsx)(o.a,{container:!0,spacing:2,sx:{mb:2},children:Object(y.jsx)(o.a,{item:!0,xs:12,children:Object(y.jsx)(d.a,{color:"dark"===m.palette.mode?"#FFFFFF":"black",className:"productfigmastyl",variant:"h2",mt:4,component:"div",sx:{textAlign:{xs:"center",md:"center",sm:"center"},textTransform:"capitalize"},children:"The product is authentic"})})})}),Object(y.jsx)(o.a,{"container-fluid":!0,children:Object(y.jsx)(o.a,{item:!0,md:12,xs:12,children:Object(y.jsxs)(o.a,{container:!0,children:[Object(y.jsx)(o.a,{item:!0,md:12,xs:12,children:Object(y.jsx)(F,{tracking:V})}),Object(y.jsx)(o.a,{item:!0,md:12,xs:12,children:Object(y.jsx)(_,{tracking:V})}),Object(y.jsx)(o.a,{item:!0,md:12,xs:12,children:Object(y.jsx)(C,{tracking:V})})]})})})]}):Object(y.jsx)(ee.a,{m:5,sx:{width:"100%",color:"grey.500"},spacing:2,children:Object(y.jsx)(te.a,{color:"secondary",variant:"determinate",value:v})})})]}),Object(y.jsx)(l.a,{sx:{borderBottomWidth:1,border:"1px solid #ccc"}}),Object(y.jsx)(o.a,{item:!0,md:10,sm:10,xs:12,sx:{pl:{},background:"dark"===m.palette.mode?"black":"#f3f3f3",color:"dark"===m.palette.mode?"white":"#404040"},children:Object(y.jsx)(T.a,{})})]})}},802:function(e,t,a){},805:function(e,t,a){"use strict";var n=a(10),i=a(127),c=a(58),r=a(681),s=a(1),o=["color","outline","size","sx"];t.a=function(e){var t=e.color,a=e.outline,d=e.size,l=e.sx,j=Object(i.a)(e,o),b=Object(c.a)(),x=t&&!a&&{color:b.palette.background.paper,bgcolor:"".concat(t,".main")},p=a&&{color:t?"".concat(t,".main"):"primary.main",bgcolor:b.palette.background.paper,border:"2px solid",borderColor:t?"".concat(t,".main"):"primary.main"},u={};switch(d){case"badge":u={width:b.spacing(3.5),height:b.spacing(3.5)};break;case"xs":u={width:b.spacing(4.25),height:b.spacing(4.25)};break;case"sm":u={width:b.spacing(5),height:b.spacing(5)};break;case"lg":u={width:b.spacing(9),height:b.spacing(9)};break;case"xl":u={width:b.spacing(10.25),height:b.spacing(10.25)};break;case"md":u={width:b.spacing(7.5),height:b.spacing(7.5)};break;default:u={}}return Object(s.jsx)(r.a,Object(n.a)({sx:Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)({},x),p),u),l)},j))}},825:function(e,t,a){"use strict";var n=a(10),i=a(127),c=a(0),r=a(58),s=a(682),o=a(471),d=a(126),l=a(339),j=a(683),b=a(1),x=["children","content","contentClass","darkTitle","secondary","sx","contentSX","title"],p=Object(c.forwardRef)((function(e,t){var a=e.children,c=e.content,p=e.contentClass,u=e.darkTitle,m=e.secondary,f=e.sx,h=void 0===f?{}:f,O=e.contentSX,g=void 0===O?{}:O,v=e.title,k=Object(i.a)(e,x),y=Object(r.a)();return Object(b.jsxs)(s.a,Object(n.a)(Object(n.a)({ref:t,sx:Object(n.a)({border:"1px solid",borderColor:"dark"===y.palette.mode?y.palette.dark.light+15:y.palette.primary.light,":hover":{boxShadow:"dark"===y.palette.mode?"0 2px 14px 0 rgb(33 150 243 / 10%)":"0 2px 14px 0 rgb(32 40 45 / 8%)"}},h)},k),{},{children:[!u&&v&&Object(b.jsx)(o.a,{sx:{p:2.5},title:Object(b.jsx)(d.a,{variant:"h5",children:v}),action:m}),u&&v&&Object(b.jsx)(o.a,{sx:{p:2.5},title:Object(b.jsx)(d.a,{variant:"h4",children:v}),action:m}),v&&Object(b.jsx)(l.a,{sx:{opacity:1,borderColor:"dark"===y.palette.mode?y.palette.dark.light+15:y.palette.primary.light}}),c&&Object(b.jsx)(j.a,{sx:Object(n.a)({p:2.5},g),className:p||"",children:a}),!c&&a]}))}));p.defaultProps={content:!0},t.a=p},855:function(e,t,a){"use strict";a(0);var n=a(1);t.a=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("svg",{width:"18",height:"16",viewBox:"0 0 18 16",fill:"",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{d:"M12 10.4556H6.75V9.07908H12M14.25 7.70254H6.75V6.326H14.25M14.25 4.94945H6.75V3.57291H14.25M15.75 0.819824H5.25C4.4175 0.819824 3.75 1.43239 3.75 2.19637V11.8322C3.75 12.1973 3.90804 12.5474 4.18934 12.8055C4.47064 13.0637 4.85218 13.2087 5.25 13.2087H15.75C16.5825 13.2087 17.25 12.5962 17.25 11.8322V2.19637C17.25 1.83129 17.092 1.48116 16.8107 1.223C16.5294 0.964852 16.1478 0.819824 15.75 0.819824ZM2.25 3.57291V14.5853H14.25V15.9618H2.25C1.85218 15.9618 1.47064 15.8168 1.18934 15.5586C0.908035 15.3005 0.75 14.9503 0.75 14.5853V3.57291H2.25Z",fill:"white"})})})}},856:function(e,t,a){"use strict";a(0);var n=a(1);t.a=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("svg",{width:"18",height:"16",stroke:"#2196F3",viewBox:"0 0 18 16",fill:"",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{d:"M12 10.4556H6.75V9.07908H12M14.25 7.70254H6.75V6.326H14.25M14.25 4.94945H6.75V3.57291H14.25M15.75 0.819824H5.25C4.4175 0.819824 3.75 1.43239 3.75 2.19637V11.8322C3.75 12.1973 3.90804 12.5474 4.18934 12.8055C4.47064 13.0637 4.85218 13.2087 5.25 13.2087H15.75C16.5825 13.2087 17.25 12.5962 17.25 11.8322V2.19637C17.25 1.83129 17.092 1.48116 16.8107 1.223C16.5294 0.964852 16.1478 0.819824 15.75 0.819824ZM2.25 3.57291V14.5853H14.25V15.9618H2.25C1.85218 15.9618 1.47064 15.8168 1.18934 15.5586C0.908035 15.3005 0.75 14.9503 0.75 14.5853V3.57291H2.25Z",fill:"white"})})})}},857:function(e,t,a){"use strict";t.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAYAAADQWvz5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHxSURBVHgBlVNtUhpBEO3unSKViMl6gyEXCJwg6w3kBMGfCZVCTxByAmMlmJ9sTmA8gXgDPMHODcCPskqEaXt2QHZW8OP92J2vfvO6+w3CE9AHI41volM35tvZttnfMuvOYnmhdnSZybJmgAECazf2O2wY0CBzXaLGQtwQ4vEiTgUK/o4SYB8oNyThPahlpgHztRiUqst/ECiSFOpQoRYifZZpHV4EUch8AhP7y6WcK5I6HC9TKJ4Fkc5n/kr6BHmqBYWIHRHwRSZbPjVEI0EBETIc2nfVrtnFhzp87F11GeFH6bZz9/VEli/mufstxDT7Vt0rHnfp28k0pYqKhayzFA2Z13d0dSAUQRAzNmByZ2QYu/z171GCUdTnGe6CmkrnVBaqx5QkhRaUQXdjqEQ7zkO6d91BUsfM1DTfNwewAqIwIfHGtnCaYGeqtGm/T5nhJ6JtMqmGaVeHvgxRErKIpxiaeWFqfy5SoLz6i12zyslLp6NelsEemvaHPU80d3NJsHGKAGZDILHBjHaQpN3lc6Ioa2/69kuxToqd8HA+gX7eWHZ1g5UQJf/m/7nsPsd0c919TLiGwOK+3dhIFz4LHq28NV1u7Towqpr5+tYUlIXQvcuWVDCGiIZkIVk4OXc6wX+wNnFddl2F18AR5+TP4B65cM5ApFi0ngAAAABJRU5ErkJggg=="},868:function(e,t,a){"use strict";var n=a(0),i=n.createContext({});t.a=i},897:function(e,t,a){"use strict"},926:function(e,t){},931:function(e,t,a){"use strict";var n=a(13),i=a(0),c=(a(802),a(58)),r=a(29),s=a(470),o=a(85),d=a(126),l=a(682),j=a(683),b=a(1462),x=a(1464),p=a(1463),u=a(855),m=a(856),f=a(1520),h=a(287),O=a.n(h),g=(a(857),a(897),a(1));t.a=function(e){var t,a=e.tracking,h=e.data,v=e.defaultExpandedId,k=void 0===v?null:v,y=e.expandIcon,C=e.square,N=e.toggle,A=Object(c.a)(),w=(Object(r.c)((function(e){return e.auth.user})),Object(i.useState)(null)),F=Object(n.a)(w,2),M=F[0],H=F[1];Object(i.useEffect)((function(){H(k)}),[k]);var T=Object(i.useState)(1),R=Object(n.a)(T,2),V=R[0],S=R[1],D=3*V,E=D-3,I=null===(t=a.nft)||void 0===t?void 0:t.NFTMetaData.slice(E,D);return Object(g.jsx)(s.a,{sx:{width:"100%"},children:h&&h.map((function(e){var t,n,i,c;return Object(g.jsxs)(b.a,{m:3,defaultExpanded:!e.disabled&&e.defaultExpand,expanded:!N&&!e.disabled&&e.expanded||N&&M===e.id,disabled:e.disabled,square:C,onChange:(c=e.id,function(e,t){N&&H(!!t&&c)}),children:[Object(g.jsx)(p.a,{expandIcon:y||!1===y?y:Object(g.jsx)(O.a,{sx:{color:"#2F53FF"}}),className:"atributes",sx:{color:"dark"===A.palette.mode?"#FFFFFF":"grey.800"},children:e.title}),Object(g.jsxs)(x.a,{children:[Object(g.jsxs)(o.a,{item:!0,container:!0,className:"",sx:{pl:1.5,pb:{xs:3,md:1},background:"dark"===A.palette.mode?"#181C1F":"#fff"},children:[Object(g.jsx)(o.a,{item:!0,xs:4,children:Object(g.jsxs)(d.a,{variant:"body",className:"property-date",sx:{color:"dark"===A.palette.mode?"#CDCDCD":"#000"},children:["Date: ",Date(null===a||void 0===a||null===(t=a.nft)||void 0===t?void 0:t.createdAt).slice(0,15)]})}),Object(g.jsxs)(o.a,{item:!0,xs:6,children:[Object(g.jsx)(d.a,{variant:"body",className:"property-update",sx:{color:"dark"===A.palette.mode?"#CDCDCD":"#000"},children:"Updated by:"}),Object(g.jsxs)(d.a,{variant:"body",className:"property-update",sx:{color:"#2F92FF !important"},children:[" ",Date(null===a||void 0===a||null===(n=a.nft)||void 0===n?void 0:n.updatedAt).slice(0,15)]})]}),Object(g.jsx)(o.a,{item:!0,xs:2,className:"doc-property",sx:{},children:"dark"===A.palette.mode?Object(g.jsx)(s.a,{className:"doc-heading",onClick:function(){window.open("https://galileoprotocol.infura-ipfs.io/ipfs/QmZVFGoTeZqNMRZjQQpHegDpJ8xqgE8fMv138ULMbfkkhf","_blank")},children:Object(g.jsx)(u.a,{})}):Object(g.jsx)(s.a,{className:"doc-heading",onClick:function(){window.open("https://galileoprotocol.infura-ipfs.io/ipfs/QmZVFGoTeZqNMRZjQQpHegDpJ8xqgE8fMv138ULMbfkkhf","_blank")},children:Object(g.jsx)(m.a,{})})})]}),Object(g.jsx)(o.a,{item:!0,xs:12,md:12,sx:{pl:1.5,pb:{xs:3,md:0},background:"dark"===A.palette.mode?"#181C1F":"#fff",display:{md:"flex"},height:{md:"160px"}},children:null===I||void 0===I?void 0:I.map((function(e){return Object(g.jsx)(o.a,{item:!0,xs:12,md:4,children:Object(g.jsx)(l.a,{className:"card-style",sx:{border:"2px solid #2F53FF"},children:Object(g.jsxs)(j.a,{sx:{padding:"18px 12px"},children:[Object(g.jsxs)("p",{className:"Engine",children:[" ",null===e||void 0===e?void 0:e.fieldName]}),Object(g.jsx)(d.a,{variant:"h6",className:"V8",sx:{color:"dark"===A.palette.mode?"#ffff":"black"},children:null===e||void 0===e?void 0:e.fieldValue}),Object(g.jsx)("p",{className:"y2023",sx:{color:"dark"===A.palette.mode?"#CDCDCD":"black"},children:"2023"}),Object(g.jsx)(o.a,{item:!0,xs:12,className:"document",sx:{m:1},children:"dark"===A.palette.mode?Object(g.jsx)(s.a,{onClick:function(){window.open("https://galileoprotocol.infura-ipfs.io/ipfs/QmZVFGoTeZqNMRZjQQpHegDpJ8xqgE8fMv138ULMbfkkhf","_blank")},children:Object(g.jsx)(u.a,{onClick:function(){window.open("https://galileoprotocol.infura-ipfs.io/ipfs/QmZVFGoTeZqNMRZjQQpHegDpJ8xqgE8fMv138ULMbfkkhf","_blank")}})}):Object(g.jsx)(s.a,{onClick:function(){window.open("https://galileoprotocol.infura-ipfs.io/ipfs/QmZVFGoTeZqNMRZjQQpHegDpJ8xqgE8fMv138ULMbfkkhf","_blank")},children:Object(g.jsx)(m.a,{})})})]})})})}))}),Object(g.jsx)(f.a,{count:Math.ceil((null===(i=a.nft)||void 0===i?void 0:i.NFTMetaData.length)/3),onChange:function(e,t){return S(t)},page:V})]})]},e.id)}))})}}}]);
//# sourceMappingURL=34.4263c929.chunk.js.map