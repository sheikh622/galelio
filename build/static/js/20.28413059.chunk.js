(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[20],{1251:function(e,t){},1253:function(e,t){},1264:function(e,t){},1266:function(e,t){},1294:function(e,t){},1296:function(e,t){},1297:function(e,t){},1303:function(e,t){},1316:function(e,t){},1328:function(e,t){},1331:function(e,t){},1348:function(e,t,a){},1401:function(e,t,a){"use strict";a.r(t);var n=a(52),i=a(56),c=a(542),s=a(549),r=a(192),o=a(442),l=a(604),d=a(605),j=a(10),b=a(2),u=a(55),m=a(14),x=a(117),h=a(0),f=a(36),p=a(561),O=a(537),g=a(544),v=a(563),w=a(551),k=a(568),y=a(524),C=a(543),I=a(589),P=a(588),S=a(263),F=a(594),_=a.n(F),B=a(595),D=a.n(B),E=a(54),W=a(27),z=a(299),L=a(247),N=a.n(L),q=a(265),G=(a(358),a(1347)),M=a.n(G),H=(a(1348),a(26)),R=a(1349),A=a.n(R),J=a(1),T=["loginProp"],V=a(1249),U=function(e){e.loginProp;var t=Object(x.a)(e,T),a=Object(f.b)(),o=Object(W.k)(),l=Object(i.a)(),d=(Object(f.c)((function(e){return e.auth.loader})),Object(h.useState)(!1)),F=Object(m.a)(d,2),B=F[0],L=F[1],G=function(){L(!B)},R=function(e){e.preventDefault()};Object(h.useEffect)((function(){a(Object(E.k)(!1))}),[]);var U=function(e){var t=e.email,n=e.first_name,i=e.last_name;N.a.post(H.a+"auth/facebook/callback/success",{data:{email:t,first_name:n,last_name:i}}).then((function(e){a(Object(E.h)(e.data.data)),e.data.data.profileCompleted?o("/landingPage",{state:{socal:e.data.data}}):o("/socialLogin",{state:{socal:e.data.data}})})).catch((function(e){q.b.error(e.message)}))},K=function(){q.b.error("Facebook login failed")};return Object(J.jsx)(J.Fragment,{children:Object(J.jsx)(P.a,{enableReinitialize:!0,initialValues:{email:"",password:""},validationSchema:I.d().shape({email:I.f().email("Enter valid email").max(255).required("Email is required!"),password:I.f().max(255).required("Password is required!")}),onSubmit:function(){var e=Object(u.a)(Object(b.a)().mark((function e(t){return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(Object(E.k)(!0));case 2:a(Object(E.g)({email:t.email,password:t.password,navigate:o}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:function(e){var i=e.errors,d=e.handleBlur,b=e.handleChange,u=e.handleSubmit,m=e.isSubmitting,x=e.touched,h=e.values;return Object(J.jsxs)("form",Object(j.a)(Object(j.a)({noValidate:!0,onSubmit:u},t),{},{children:[Object(J.jsxs)(p.a,{fullWidth:!0,error:Boolean(x.email&&i.email),sx:Object(j.a)({},l.typography.customInput),children:[Object(J.jsx)(O.a,{htmlFor:"outlined-adornment-email-login",children:"Email "}),Object(J.jsx)(g.a,{type:"email",name:"email",onBlur:d,onChange:b,label:"Email",inputProps:{}}),x.email&&i.email&&Object(J.jsx)(v.a,{error:!0,id:"standard-weight-helper-text-email-login",children:i.email})]}),Object(J.jsxs)(p.a,{fullWidth:!0,error:Boolean(x.password&&i.password),sx:Object(j.a)({},l.typography.customInput),children:[Object(J.jsx)(O.a,{htmlFor:"outlined-adornment-password-login",children:"Password"}),Object(J.jsx)(g.a,{type:B?"text":"password",value:h.password,name:"password",onBlur:d,onChange:b,endAdornment:Object(J.jsx)(w.a,{position:"end",children:Object(J.jsx)(k.a,{"aria-label":"toggle password visibility",onClick:G,onMouseDown:R,edge:"end",size:"large",children:B?Object(J.jsx)(_.a,{}):Object(J.jsx)(D.a,{})})}),label:"Password",inputProps:{}}),x.password&&i.password&&Object(J.jsx)(v.a,{error:!0,id:"standard-weight-helper-text-password-login",children:i.password})]}),Object(J.jsx)(y.a,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:Object(J.jsx)(r.a,{variant:"subtitle1",component:n.b,to:"/forgetPassword",sx:{textDecoration:"none",color:"dark"===l.palette.mode?"#fff":"#000"},children:"Forgot Password?"})}),i.submit&&Object(J.jsx)(s.a,{sx:{mt:3},children:Object(J.jsx)(v.a,{error:!0,children:i.submit})}),Object(J.jsx)(s.a,{sx:{mt:2},children:Object(J.jsx)(S.a,{children:Object(J.jsx)(C.a,{className:"signbuttonMarket",disableElevation:!0,disabled:m,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign in"})})}),Object(J.jsx)(c.a,{item:!0,xs:12,children:Object(J.jsx)(c.a,{mt:2,item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:Object(J.jsx)(r.a,{variant:"subtitle1",sx:{textDecoration:"none"},children:"or continue with"})})}),Object(J.jsx)(c.a,{item:!0,mt:1,xs:12,sm:12,md:12,lg:12,className:"facebook",children:Object(J.jsx)(C.a,{variant:"contained",color:"secondary",fullWidth:!0,size:"large",className:"signbuttonMarket",startIcon:Object(J.jsx)(A.a,{}),children:Object(J.jsx)(M.a,{appId:"851727442768362",fields:"first_name, last_name,email",callback:U,onFailure:K,cssClass:"my-facebook-button-class",textButton:" Login with Facebook"})})}),Object(J.jsx)(c.a,{item:!0,xs:12,sm:12,md:12,lg:12,className:"google",sx:{justifyContent:"center",marginTop:"10px"},children:Object(J.jsx)(z.a,{select_account:!1,auto_select:!1,onSuccess:function(e){!function(e){var t=V.decode(e.credential);N.a.post(H.a+"auth/google/callback/success",{data:t}).then((function(e){a(Object(E.h)(e.data.data)),e.data.data.profileCompleted?o("/landingPage",{state:{socal:e.data.data}}):o("/socialLogin",{state:{socal:e.data.data}})})).catch((function(e){q.b.error(e.message)}))}(e)},onError:function(){q.b.error("Google Auth Failed")}})})]}))}})})},K=a(151),Q=a(152),X=a(607);t.default=function(){var e=Object(i.a)();return Object(J.jsx)(l.a,{children:Object(J.jsxs)(c.a,{container:!0,justifyContent:"space-between",alignItems:"center",sx:{minHeight:"100vh",background:"dark"===e.palette.mode?"#000":"#fff"},children:[Object(J.jsx)(c.a,{item:!0,md:6,lg:5,sx:{position:"relative",alignSelf:"stretch",display:{xs:"none",md:"block"}},children:Object(J.jsx)(X.a,{children:Object(J.jsx)(c.a,{item:!0,container:!0,alignItems:"flex-end",justifyContent:"center",spacing:3,children:Object(J.jsx)(c.a,{item:!0,xs:12,children:Object(J.jsx)("span",{})})})})}),Object(J.jsx)(c.a,{item:!0,container:!0,justifyContent:"center",md:6,lg:7,children:Object(J.jsxs)(d.a,{children:[Object(J.jsxs)(c.a,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[Object(J.jsx)(c.a,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:Object(J.jsx)(s.a,{sx:{display:{xs:"block",sm:"block",md:"none",lg:"none"}},children:Object(J.jsx)(r.a,{variant:"h6",noWrap:!0,component:"div",sx:{marginTop:"5px"},children:"dark"===e.palette.mode?Object(J.jsx)("img",{src:Q.a,alt:"Galileo White Logo",width:"100"}):Object(J.jsx)("img",{src:K.a,alt:"Galileo Dark Logo",width:"100"})})})}),Object(J.jsx)(c.a,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:Object(J.jsx)(s.a,{sx:{mb:2},children:Object(J.jsx)(r.a,{className:"signInMarket",variant:"subtitle1",children:"Sign In"})})})]}),Object(J.jsxs)(c.a,{container:!0,spacing:2,justifyContent:"center",children:[Object(J.jsx)(c.a,{item:!0,xs:12,children:Object(J.jsx)(U,{})}),Object(J.jsx)(c.a,{item:!0,xs:12,children:Object(J.jsx)(o.a,{})}),Object(J.jsx)(c.a,{item:!0,xs:12,children:Object(J.jsx)(c.a,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:Object(J.jsx)(r.a,{component:n.b,to:"/signUp",variant:"subtitle1",sx:{textDecoration:"none"},children:"Don't have an account?"})})})]})]})})]})})}},604:function(e,t,a){"use strict";var n=a(12),i=Object(n.a)("div")((function(e){return{backgroundColor:(e.theme.palette.mode,"#fff"),minHeight:"100vh"}}));t.a=i},605:function(e,t,a){"use strict";var n=a(10),i=a(117),c=a(549),s=a(193),r=a(1),o=["children"];t.a=function(e){var t=e.children,a=Object(i.a)(e,o);return Object(r.jsx)(s.a,Object(n.a)(Object(n.a)({sx:{borderRadius:"4px",maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},a),{},{children:Object(r.jsx)(c.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},607:function(e,t,a){"use strict";var n=a(56),i=a(549),c=a.p+"static/media/auth-pattern.46739974.png",s=a(1);t.a=function(e){var t=e.children,a=Object(n.a)();return Object(s.jsx)(i.a,{component:"span",sx:{display:"flex",minHeight:"97%",bgcolor:(a.palette.mode,"#fff"),backgroundImage:(a.palette.mode,"url(".concat(c,")")),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",overflow:"hidden",margin:"10px",opacity:"dark"===a.palette.mode?.85:.9},children:t})}}}]);
//# sourceMappingURL=20.28413059.chunk.js.map