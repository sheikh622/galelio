(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[48],{1556:function(e,t,a){"use strict";a.r(t);var n=a(52),r=a(58),i=a(85),s=a(470),l=a(126),c=a(339),o=a(235),d=a(178),m=a(177),u=a(811),j=a(812),h=a(10),b=a(2),x=a(49),p=a(13),O=a(127),f=(a(826),a(802),a(0)),g=a(29),v=a(65),N=a(763),y=a(785),w=a(786),k=a(778),S=a(1555),C=a(1527),F=a(283),q=a(27),I=a(1516),W=a(341),B=a(340),P=a(342),E=a(46),A=a(28),L=a(1),D=["loginProp"],z=function(e){e.loginProp;var t,a,n,i,l,c,o,d,m,u,j,z,G=Object(O.a)(e,D),H=Object(r.a)(),R=Object(g.b)(),J=Object(q.l)(),M=Object(f.useState)(!0),T=Object(p.a)(M,2),V=T[0],_=T[1],K=Object(f.useState)(!1),Q=Object(p.a)(K,2),U=(Q[0],Q[1],Object(f.useState)("")),X=Object(p.a)(U,2),Y=X[0],Z=X[1],$=Object(f.useState)(""),ee=Object(p.a)($,2),te=(ee[0],ee[1],Object(q.j)()),ae=function(){var e=Object(x.a)(Object(b.a)().mark((function e(){var t,a,n,r;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=window)||void 0===t||null===(a=t.ethereum)||void 0===a?void 0:a.request({method:"eth_requestAccounts"});case 2:(n=e.sent)?window.ethereum?(r=null===v.utils||void 0===v.utils?void 0:v.utils.getAddress(n[0]),Z(r),R({type:A.E,open:!0,message:"Success",variant:"alert",alertSeverity:"success"})):(R({type:A.E,open:!0,message:"No crypto wallet found. Please install it.",variant:"alert",alertSeverity:"info"}),console.log("No crypto wallet found. Please install it.")):console.log("No crypto wallet found. Please install it.");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.useEffect)((function(){R(Object(E.m)(Y))}),[Y]),Object(L.jsx)(L.Fragment,{children:Object(L.jsx)(B.a,{enableReinitialize:!0,initialValues:{firstName:null===(t=te.state)||void 0===t||null===(a=t.socal)||void 0===a||null===(n=a.user)||void 0===n?void 0:n.firstName,lastName:null!==(i=te.state)&&void 0!==i&&null!==(l=i.socal)&&void 0!==l&&null!==(c=l.user)&&void 0!==c&&c.lastName?null===(o=te.state)||void 0===o||null===(d=o.socal)||void 0===d||null===(m=d.user)||void 0===m?void 0:m.lastName:" ",email:null===(u=te.state)||void 0===u||null===(j=u.socal)||void 0===j||null===(z=j.user)||void 0===z?void 0:z.email,walletAddress:"",address:""},validationSchema:W.d().shape({firstName:W.f().required("First Name is required!").max(42,"First Name can not exceed 42 characters"),lastName:W.f().required("Last Name is required!").max(42,"Last Name can not exceed 42 characters"),email:W.f().email("Enter valid email").max(255).required("Email is required!"),address:W.f().max(255).required("Address is required!")}),onSubmit:function(){var e=Object(x.a)(Object(b.a)().mark((function e(t){return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return""==Y&&R({type:A.E,open:!0,message:"Please connect to your wallet",variant:"alert",alertSeverity:"info"}),e.next=3,R(Object(E.l)(!0));case 3:R(Object(E.p)({firstName:t.firstName,lastName:t.lastName,email:t.email,walletAddress:Y,address:t.address,navigate:J}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:function(e){var t=e.errors,a=e.handleBlur,n=e.handleChange,r=e.handleSubmit,i=e.isSubmitting,l=e.touched,c=e.values;return Object(L.jsxs)("form",Object(h.a)(Object(h.a)({noValidate:!0,onSubmit:r},G),{},{children:[Object(L.jsxs)(N.a,{sx:{color:"dark"===H.palette.mode?"white":"#404040"},className:"authFont",htmlFor:"outlined-adornment-email-login",children:["First Name"," "]}),Object(L.jsxs)(y.a,{sx:Object(h.a)({},H.typography.customInput),className:"auth-formcontrol",fullWidth:!0,error:Boolean(l.firstName&&t.firstName),children:[Object(L.jsx)(I.a,{placeholder:"First Name",className:"textForm",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,type:"name",value:c.firstName,name:"firstName",onBlur:a,onChange:n,inputProps:{}}),l.firstName&&t.firstName&&Object(L.jsx)(w.a,{error:!0,id:"standard-weight-helper-text-name-login",children:t.firstName})]}),Object(L.jsxs)(N.a,{sx:{color:"dark"===H.palette.mode?"white":"#404040"},className:"authFont",htmlFor:"outlined-adornment-email-login",children:["Last Name"," "]}),Object(L.jsxs)(y.a,{sx:Object(h.a)({},H.typography.customInput),className:"auth-formcontrol",fullWidth:!0,error:Boolean(l.lastName&&t.lastName),children:[Object(L.jsx)(I.a,{placeholder:"Last Name",className:"textForm",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,type:"lastName",value:c.lastName,name:"lastName",onBlur:a,onChange:n,inputProps:{}}),l.lastName&&t.lastName&&Object(L.jsx)(w.a,{error:!0,id:"standard-weight-helper-text-name-login",children:t.lastName})]}),Object(L.jsx)(N.a,{sx:{color:"dark"===H.palette.mode?"white":"#404040"},className:"authFont",htmlFor:"outlined-adornment-email-login",children:"Email"}),Object(L.jsxs)(y.a,{sx:Object(h.a)({},H.typography.customInput),className:"auth-formcontrol",fullWidth:!0,error:Boolean(l.email&&t.email),children:[Object(L.jsx)(I.a,{placeholder:"Email",className:"textForm",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,type:"email",value:c.email,name:"email",onBlur:a,onChange:n,inputProps:{}}),l.email&&t.email&&Object(L.jsx)(w.a,{error:!0,id:"standard-weight-helper-text-email-login",children:t.email})]}),Object(L.jsx)(N.a,{sx:{color:"dark"===H.palette.mode?"white":"#404040"},className:"authFont",htmlFor:"outlined-adornment-email-login",children:"Delivery Address"}),Object(L.jsxs)(y.a,{sx:Object(h.a)({},H.typography.customInput),className:"auth-formcontrol",fullWidth:!0,error:Boolean(l.address&&t.address),children:[Object(L.jsx)(I.a,{placeholder:"Delivery Address",className:"textForm",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,type:"address",value:c.address,name:"address",onBlur:a,onChange:n,inputProps:{}}),l.address&&t.address&&Object(L.jsx)(w.a,{error:!0,id:"standard-weight-helper-text-name-login",children:t.address})]}),Object(L.jsx)(k.a,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:Object(L.jsx)(S.a,{control:Object(L.jsx)(C.a,{checked:V,onChange:function(e){return _(e.target.checked)},name:"checked",color:"primary"}),label:"By checking you agree to our Terms and Conditions"})}),Object(L.jsx)(F.a,{variant:"contained",onClick:function(){ae()},children:Y?Y.slice(0,5)+"..."+Y.slice(38,42):"Connect with wallet"}),t.submit&&Object(L.jsx)(s.a,{sx:{mt:3},children:Object(L.jsx)(w.a,{error:!0,children:t.submit})}),Object(L.jsx)(s.a,{sx:{mt:2},children:Object(L.jsx)(P.a,{children:Object(L.jsx)(F.a,{className:"signbuttonMarket",disableElevation:!0,disabled:i,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign up"})})})]}))}})})},G=a(813);t.default=function(){var e=Object(r.a)();return Object(L.jsx)(u.a,{children:Object(L.jsxs)(i.a,{container:!0,justifyContent:"space-between",alignItems:"center",sx:{minHeight:"100vh",background:"dark"===e.palette.mode?"#000":"#fff"},children:[Object(L.jsxs)(o.a,{children:[Object(L.jsx)("meta",{charSet:"utf-8"}),Object(L.jsx)("title",{children:"  Social Login"})]}),Object(L.jsx)(i.a,{item:!0,md:6,lg:5,sx:{position:"relative",alignSelf:"stretch",display:{xs:"none",md:"block"}},children:Object(L.jsx)(G.a,{children:Object(L.jsx)(i.a,{item:!0,container:!0,alignItems:"flex-end",justifyContent:"center",spacing:3,children:Object(L.jsx)(i.a,{item:!0,xs:12,children:Object(L.jsx)("span",{})})})})}),Object(L.jsx)(i.a,{item:!0,container:!0,justifyContent:"center",md:6,lg:7,children:Object(L.jsxs)(j.a,{children:[Object(L.jsxs)(i.a,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[Object(L.jsx)(i.a,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:Object(L.jsx)(s.a,{sx:{display:{xs:"block",sm:"block",md:"none",lg:"none"}},children:Object(L.jsx)(l.a,{variant:"h6",noWrap:!0,component:"div",sx:{marginTop:"5px"},children:"dark"===e.palette.mode?Object(L.jsx)("img",{src:m.a,alt:"Galileo White Logo",width:"100"}):Object(L.jsx)("img",{src:d.a,alt:"Galileo Dark Logo",width:"100"})})})}),Object(L.jsx)(i.a,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:Object(L.jsx)(s.a,{sx:{mb:2},children:Object(L.jsx)(l.a,{className:"signInMarket",variant:"subtitle1",children:"Social Signup"})})})]}),Object(L.jsxs)(i.a,{container:!0,spacing:2,justifyContent:"center",children:[Object(L.jsx)(i.a,{item:!0,xs:12,children:Object(L.jsx)(z,{})}),Object(L.jsx)(i.a,{item:!0,xs:12,children:Object(L.jsx)(c.a,{})}),Object(L.jsx)(i.a,{item:!0,xs:12,children:Object(L.jsx)(i.a,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:Object(L.jsx)(l.a,{component:n.b,to:"/login",variant:"subtitle1",sx:{textDecoration:"none"},children:"Already have an account?"})})})]})]})})]})})}},811:function(e,t,a){"use strict";var n=a(12),r=Object(n.a)("div")((function(e){return{backgroundColor:(e.theme.palette.mode,"#fff"),minHeight:"100vh"}}));t.a=r},812:function(e,t,a){"use strict";var n=a(10),r=a(127),i=a(470),s=a(141),l=a(1),c=["children"];t.a=function(e){var t=e.children,a=Object(r.a)(e,c);return Object(l.jsx)(s.a,Object(n.a)(Object(n.a)({sx:{borderRadius:"4px",maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},a),{},{children:Object(l.jsx)(i.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},813:function(e,t,a){"use strict";var n=a(58),r=a(470),i=a.p+"static/media/auth-pattern.46739974.png",s=a(1);t.a=function(e){var t=e.children,a=Object(n.a)();return Object(s.jsx)(r.a,{component:"span",sx:{display:"flex",minHeight:"97%",bgcolor:(a.palette.mode,"#fff"),backgroundImage:(a.palette.mode,"url(".concat(i,")")),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",overflow:"hidden",margin:"10px",opacity:"dark"===a.palette.mode?.85:.9},children:t})}}}]);
//# sourceMappingURL=48.0d10d2b2.chunk.js.map