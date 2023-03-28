(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[40],{1505:function(e,t,a){"use strict";a.r(t);var r=a(52),n=(a(786),a(59)),s=a(745),i=a(751),o=a(225),c=a(657),l=a(173),d=a(174),m=a(795),u=a(796),j=a(10),h=a(7),b=a(2),p=a(55),x=a(14),f=a(123),O=a(0),g=(a(831),a(30)),w=a(138),v=a(740),N=a(763),y=a(765),k=a(772),C=a(729),P=a(1506),F=a(1486),q=a(746),S=a(459),B=a(458),W=a(330),z=a(798),I=a.n(z),M=a(799),A=a.n(M),D=a(53),E=a(29),L=a(27),_=a(1475),V=a(1),G=["loginProp"],H=function(e){e.loginProp;var t,a=Object(f.a)(e,G),r=Object(n.a)(),s=Object(g.b)(),o=Object(E.k)(),c=Object(O.useState)(!0),l=Object(x.a)(c,2),d=l[0],m=l[1],u=Object(O.useState)(!1),z=Object(x.a)(u,2),M=z[0],H=z[1],R=Object(O.useState)(!1),U=Object(x.a)(R,2),$=U[0],J=U[1],T=Object(O.useState)(""),Z=Object(x.a)(T,2),K=Z[0],Q=Z[1],X=Object(O.useState)(""),Y=Object(x.a)(X,2),ee=(Y[0],Y[1],function(){var e=Object(p.a)(Object(b.a)().mark((function e(){var t,a,r,n;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=window)||void 0===t||null===(a=t.ethereum)||void 0===a?void 0:a.request({method:"eth_requestAccounts"});case 2:(r=e.sent)?window.ethereum?(n=null===w.utils||void 0===w.utils?void 0:w.utils.getAddress(r[0]),Q(n),s({type:L.E,open:!0,message:"Success",variant:"alert",alertSeverity:"success"})):(s({type:L.E,open:!0,message:"No crypto wallet found. Please install it.",variant:"alert",alertSeverity:"info"}),console.log("No crypto wallet found. Please install it.")):console.log("No crypto wallet found. Please install it.");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),te=function(){H(!M)},ae=function(e){e.preventDefault()},re=function(e){e.preventDefault()},ne=function(){J(!$)};return Object(O.useEffect)((function(){s(Object(D.m)(K)),ee()}),[K]),window.ethereum&&window.ethereum.on("accountsChanged",(function(e){ee()})),Object(V.jsx)(V.Fragment,{children:Object(V.jsx)(B.a,{enableReinitialize:!0,initialValues:{firstName:"",lastName:"",email:"",password:"",confirmPassword:"",walletAddress:"",address:""},validationSchema:S.d().shape((t={firstName:S.f().required("First Name is required!").max(42,"First Name can not exceed 42 characters"),lastName:S.f().required("Last Name is required!").max(42,"Last Name can not exceed 42 characters"),email:S.f().email("Enter valid email").max(255).required("Email is required!"),password:S.f().max(255).required("Password is required!").matches(/^(?=(?:.*[A-Z].*){1})(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Must Contain 8 Characters,  One Uppercase, One Lowercase, One Number and one special case Character"),confirmPassword:S.f().max(255).required("Confirm Password is required!")},Object(h.a)(t,"confirmPassword",S.f().oneOf([S.e("password")],"Both password need to be the same")),Object(h.a)(t,"address",S.f().max(255).required("Delivery address is required!")),t)),onSubmit:function(){var e=Object(p.a)(Object(b.a)().mark((function e(t){return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return""==K&&s({type:L.E,open:!0,message:"Please connect to your wallet",variant:"alert",alertSeverity:"info"}),e.next=3,s(Object(D.l)(!0));case 3:s(Object(D.n)({firstName:t.firstName,lastName:t.lastName,email:t.email,password:t.password,walletAddress:K,address:t.address,navigate:o}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:function(e){var t=e.errors,n=e.handleBlur,s=e.handleChange,o=e.handleSubmit,c=e.isSubmitting,l=e.touched,u=e.values;return Object(V.jsxs)("form",Object(j.a)(Object(j.a)({noValidate:!0,onSubmit:o},a),{},{children:[Object(V.jsxs)(v.a,{sx:{color:"dark"===r.palette.mode?"white":"#404040"},className:"authFont",htmlFor:"outlined-adornment-email-login",children:["First Name"," "]}),Object(V.jsxs)(N.a,{sx:Object(j.a)({},r.typography.customInput),className:"auth-formcontrol",fullWidth:!0,error:Boolean(l.firstName&&t.firstName),children:[Object(V.jsx)(_.a,{placeholder:"First Name",className:"textForm",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,type:"name",value:u.firstName,name:"firstName",onBlur:n,onChange:s,inputProps:{}}),l.firstName&&t.firstName&&Object(V.jsx)(y.a,{error:!0,id:"standard-weight-helper-text-name-login",children:t.firstName})]}),Object(V.jsxs)(v.a,{sx:{color:"dark"===r.palette.mode?"white":"#404040"},className:"authFont",htmlFor:"outlined-adornment-email-login",children:["Last Name"," "]}),Object(V.jsxs)(N.a,{sx:Object(j.a)({},r.typography.customInput),className:"auth-formcontrol",fullWidth:!0,error:Boolean(l.lastName&&t.lastName),children:[Object(V.jsx)(_.a,{placeholder:"Last Name",className:"textForm",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,type:"lastName",value:u.lastName,name:"lastName",onBlur:n,onChange:s,inputProps:{}}),l.lastName&&t.lastName&&Object(V.jsx)(y.a,{error:!0,id:"standard-weight-helper-text-name-login",children:t.lastName})]}),Object(V.jsx)(v.a,{sx:{color:"dark"===r.palette.mode?"white":"#404040"},className:"authFont",htmlFor:"outlined-adornment-email-login",children:"Email"}),Object(V.jsxs)(N.a,{sx:Object(j.a)({},r.typography.customInput),className:"auth-formcontrol",fullWidth:!0,error:Boolean(l.email&&t.email),children:[Object(V.jsx)(_.a,{placeholder:"Email",className:"textForm",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,type:"email",value:u.email,name:"email",onBlur:n,onChange:s,inputProps:{}}),l.email&&t.email&&Object(V.jsx)(y.a,{error:!0,id:"standard-weight-helper-text-email-login",children:t.email})]}),Object(V.jsxs)(v.a,{sx:{color:"dark"===r.palette.mode?"white":"#404040"},className:"authFont",htmlFor:"outlined-adornment-password-login",children:[" ","Password"]}),Object(V.jsxs)(N.a,{className:"auth-formcontrol",fullWidth:!0,error:Boolean(l.password&&t.password),children:[Object(V.jsx)(_.a,{placeholder:" Password",className:"textForm",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",type:M?"text":"password",id:"password",autoComplete:"current-password",onBlur:n,onChange:s,inputProps:{}}),l.password&&t.password&&Object(V.jsx)(y.a,{error:!0,id:"standard-weight-helper-text-password-login",children:t.password}),Object(V.jsx)(k.a,{className:"iconvisible",onClick:te,onMouseDown:ae,"aria-label":"toggle password visibility",edge:"end",size:"large",children:M?Object(V.jsx)(I.a,{}):Object(V.jsx)(A.a,{})})]}),Object(V.jsx)(v.a,{sx:{color:"dark"===r.palette.mode?"white":"#404040"},className:"authFont",htmlFor:"outlined-adornment-password-login",children:"Confirm Password"}),Object(V.jsxs)(N.a,{className:"auth-formcontrol",fullWidth:!0,error:Boolean(l.confirmPassword&&t.confirmPassword),children:[Object(V.jsx)(_.a,{placeholder:"Confirm Password",className:"textForm",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,value:u.confirmPassword,name:"confirmPassword",type:$?"text":"password",id:"password",autoComplete:"current-password",onBlur:n,onChange:s,inputProps:{}}),Object(V.jsx)(k.a,{className:"iconvisible",onClick:ne,onMouseDown:re,"aria-label":"toggle password visibility",edge:"end",size:"large",children:$?Object(V.jsx)(I.a,{}):Object(V.jsx)(A.a,{})}),l.confirmPassword&&t.confirmPassword&&Object(V.jsx)(y.a,{error:!0,id:"standard-weight-helper-text-password-login",children:t.confirmPassword})]}),Object(V.jsx)(v.a,{sx:{color:"dark"===r.palette.mode?"white":"#404040"},className:"authFont",htmlFor:"outlined-adornment-email-login",children:"Delivery Address"}),Object(V.jsxs)(N.a,{sx:Object(j.a)({},r.typography.customInput),className:"auth-formcontrol",fullWidth:!0,error:Boolean(l.address&&t.address),children:[Object(V.jsx)(_.a,{placeholder:"Delivery Address",className:"textForm",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,type:"address",value:u.address,name:"address",onBlur:n,onChange:s,inputProps:{}}),l.address&&t.address&&Object(V.jsx)(y.a,{error:!0,id:"standard-weight-helper-text-name-login",children:t.address})]}),Object(V.jsx)(C.a,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:Object(V.jsx)(P.a,{control:Object(V.jsx)(F.a,{checked:d,onChange:function(e){return m(e.target.checked)},name:"checked",color:"primary"}),label:"By checking you agree to our Terms and Conditions"})}),Object(V.jsx)(q.a,{variant:"contained",onClick:function(){ee()},children:K?K.slice(0,5)+"..."+K.slice(38,42):"Connect with wallet"}),t.submit&&Object(V.jsx)(i.a,{sx:{mt:3},children:Object(V.jsx)(y.a,{error:!0,children:t.submit})}),Object(V.jsx)(i.a,{sx:{mt:2},children:Object(V.jsx)(W.a,{children:Object(V.jsx)(q.a,{className:"signbuttonMarket",disableElevation:!0,disabled:c,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign up"})})})]}))}})})},R=a(230),U=a(797);t.default=function(){var e=Object(n.a)();return Object(V.jsx)(m.a,{children:Object(V.jsxs)(s.a,{container:!0,justifyContent:"space-between",alignItems:"center",sx:{minHeight:"100vh",background:"dark"===e.palette.mode?"#000":"#fff"},children:[Object(V.jsxs)(R.a,{children:[Object(V.jsx)("meta",{charSet:"utf-8"}),Object(V.jsx)("title",{children:" Sign Up"}),Object(V.jsx)("link",{rel:"canonical"})]}),Object(V.jsx)(s.a,{item:!0,md:6,lg:5,sx:{position:"relative",alignSelf:"stretch",display:{xs:"none",md:"block"}},children:Object(V.jsx)(U.a,{children:Object(V.jsx)(s.a,{item:!0,container:!0,alignItems:"flex-end",justifyContent:"center",spacing:3,children:Object(V.jsx)(s.a,{item:!0,xs:12,children:Object(V.jsx)("span",{})})})})}),Object(V.jsx)(s.a,{item:!0,container:!0,justifyContent:"center",md:6,lg:7,children:Object(V.jsxs)(u.a,{children:[Object(V.jsxs)(s.a,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[Object(V.jsx)(s.a,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:Object(V.jsx)(i.a,{sx:{display:{xs:"block",sm:"block",md:"none",lg:"none"}},children:Object(V.jsx)(o.a,{variant:"h6",noWrap:!0,component:"div",sx:{marginTop:"5px"},children:"dark"===e.palette.mode?Object(V.jsx)("img",{src:d.a,alt:"Galileo White Logo",width:"100"}):Object(V.jsx)("img",{src:l.a,alt:"Galileo Dark Logo",width:"100"})})})}),Object(V.jsx)(s.a,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:Object(V.jsx)(i.a,{sx:{mb:2},children:Object(V.jsx)(o.a,{className:"signInMarket",variant:"subtitle1",children:"Sign Up"})})})]}),Object(V.jsxs)(s.a,{container:!0,spacing:2,justifyContent:"center",children:[Object(V.jsx)(s.a,{item:!0,xs:12,children:Object(V.jsx)(H,{})}),Object(V.jsx)(s.a,{item:!0,xs:12,children:Object(V.jsx)(c.a,{})}),Object(V.jsx)(s.a,{item:!0,xs:12,children:Object(V.jsx)(s.a,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:Object(V.jsx)(o.a,{component:r.b,to:"/login",variant:"subtitle1",sx:{textDecoration:"none"},children:"Already have an account?"})})})]})]})})]})})}},795:function(e,t,a){"use strict";var r=a(12),n=Object(r.a)("div")((function(e){return{backgroundColor:(e.theme.palette.mode,"#fff"),minHeight:"100vh"}}));t.a=n},796:function(e,t,a){"use strict";var r=a(10),n=a(123),s=a(751),i=a(171),o=a(1),c=["children"];t.a=function(e){var t=e.children,a=Object(n.a)(e,c);return Object(o.jsx)(i.a,Object(r.a)(Object(r.a)({sx:{borderRadius:"4px",maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},a),{},{children:Object(o.jsx)(s.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},797:function(e,t,a){"use strict";var r=a(59),n=a(751),s=a.p+"static/media/auth-pattern.46739974.png",i=a(1);t.a=function(e){var t=e.children,a=Object(r.a)();return Object(i.jsx)(n.a,{component:"span",sx:{display:"flex",minHeight:"97%",bgcolor:(a.palette.mode,"#fff"),backgroundImage:(a.palette.mode,"url(".concat(s,")")),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",overflow:"hidden",margin:"10px",opacity:"dark"===a.palette.mode?.85:.9},children:t})}},798:function(e,t,a){"use strict";var r=a(39);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(45)),s=a(1),i=(0,n.default)((0,s.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=i},799:function(e,t,a){"use strict";var r=a(39);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(45)),s=a(1),i=(0,n.default)((0,s.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");t.default=i}}]);
//# sourceMappingURL=40.fb94f1ba.chunk.js.map