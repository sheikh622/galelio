<<<<<<<< HEAD:build/static/js/33.84bce1d7.chunk.js
(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[33],{1450:function(e,t,a){"use strict";a.r(t);var n=a(56),s=a(531),r=a(553),c=a(559),i=a(194),o=(a(600),a(152)),d=a(153),l=a(621),j=a(622),u=a(199),b=a(624),h=a(10),m=(a(690),a(1)),p=a(2),x=a(55),f=a(14),O=a(118),w=a(0),g=a(28),v=(a(646),a(548)),k=a(571),P=a(573),C=a(578),y=a(554),z=a(33),M=a(1430),N=a(598),S=a(597),W=a(266),B=a(54),F=a(607),I=a.n(F),R=a(608),D=a.n(R),L=["token"],q=function(e){var t=e.token,a=Object(O.a)(e,L),s=Object(n.a)(),r=Object(z.b)(),i=Object(g.k)(),o=Object(w.useState)(!1),d=Object(f.a)(o,2),l=d[0],j=d[1],u=Object(w.useState)(!1),b=Object(f.a)(u,2),F=b[0],R=b[1],q=function(){j(!l)},V=function(){R(!F)},_=function(e){e.preventDefault()},G=function(e){e.preventDefault()};return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(S.a,{initialValues:{password:"",confirmPassword:""},validationSchema:N.d().shape({password:N.f().max(255).required("Password is required!").matches(/^(?=(?:.*[A-Z].*){1})(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Must Contain 8 Characters,  One Uppercase, One Lowercase, One Number and one special case Character"),confirmPassword:N.f().when("password",{is:function(e){return!!(e&&e.length>0)},then:N.f().oneOf([N.e("password")],"Both Password must be match!")})}),onSubmit:function(){var e=Object(x.a)(Object(p.a)().mark((function e(a){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("reset",a),e.next=3,r(Object(B.j)({newPassword:a.password,token:t,navigate:i}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:function(e){var t=e.errors,n=e.handleBlur,r=e.handleChange,i=e.handleSubmit,o=e.isSubmitting,d=e.touched,j=e.values;return Object(m.jsxs)("form",Object(h.a)(Object(h.a)({noValidate:!0,onSubmit:i},a),{},{children:[Object(m.jsx)(v.a,{sx:{color:"dark"===s.palette.mode?"white":"#404040"},className:"authFont",htmlFor:"outlined-adornment-password-login",children:" Password"}),Object(m.jsxs)(k.a,{className:"auth-formcontrol",fullWidth:!0,error:Boolean(d.password&&t.password),children:[Object(m.jsx)(M.a,{placeholder:" Password",className:"textForm",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",type:l?"text":"password",id:"password",autoComplete:"current-password",onBlur:n,onChange:r,inputProps:{}}),d.password&&t.password&&Object(m.jsx)(P.a,{error:!0,id:"standard-weight-helper-text-password-login",children:t.password}),Object(m.jsx)(C.a,{className:"iconvisible",onClick:q,onMouseDown:_,"aria-label":"toggle password visibility",edge:"end",size:"large",children:l?Object(m.jsx)(I.a,{}):Object(m.jsx)(D.a,{})})]}),Object(m.jsx)(v.a,{sx:{color:"dark"===s.palette.mode?"white":"#404040"},className:"authFont",htmlFor:"outlined-adornment-password-login",children:"Confirm Password"}),Object(m.jsxs)(k.a,{className:"auth-formcontrol",fullWidth:!0,error:Boolean(d.password&&t.password),children:[Object(m.jsx)(M.a,{placeholder:"Confirm Password",className:"textForm",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,value:j.confirmPassword,name:"confirmPassword",type:F?"text":"password",id:"password",autoComplete:"current-password",onBlur:n,onChange:r,inputProps:{}}),Object(m.jsx)(C.a,{className:"iconvisible",onClick:V,onMouseDown:G,"aria-label":"toggle password visibility",edge:"end",size:"large",children:F?Object(m.jsx)(I.a,{}):Object(m.jsx)(D.a,{})}),d.confirmPassword&&t.confirmPassword&&Object(m.jsx)(P.a,{error:!0,id:"standard-weight-helper-text-password-login",children:t.confirmPassword})]}),t.submit&&Object(m.jsx)(c.a,{sx:{mt:3},children:Object(m.jsx)(P.a,{error:!0,children:t.submit})}),Object(m.jsx)("div",{children:"* Password should be 8 characters long containing 1 Uppercase, 1 Numeric and 1 special character"}),Object(m.jsx)(c.a,{sx:{mt:5},children:Object(m.jsx)(W.a,{children:Object(m.jsx)(y.a,{className:"signbuttonMarket",disableElevation:!0,disabled:o,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Reset Password"})})})]}))}})})};t.default=function(){var e=Object(n.a)(),t=(Object(s.a)(e.breakpoints.down("md")),new URLSearchParams(window.location.search)),a=Object.fromEntries(t.entries());return Object(m.jsx)(l.a,{children:Object(m.jsxs)(r.a,{container:!0,justifyContent:"space-between",alignItems:"center",sx:{minHeight:"100vh",background:"dark"===e.palette.mode?"#000":"#fff"},children:[Object(m.jsxs)(u.a,{children:[Object(m.jsx)("meta",{charSet:"utf-8"}),Object(m.jsx)("title",{children:"  Reset Password"})]}),Object(m.jsx)(r.a,{item:!0,md:6,lg:5,sx:{position:"relative",alignSelf:"stretch",display:{xs:"none",md:"block"}},children:Object(m.jsx)(b.a,{children:Object(m.jsx)(r.a,{item:!0,container:!0,alignItems:"flex-end",justifyContent:"center",spacing:3,children:Object(m.jsx)(r.a,{item:!0,xs:12,children:Object(m.jsx)("span",{})})})})}),Object(m.jsx)(r.a,{item:!0,container:!0,justifyContent:"center",md:6,lg:7,children:Object(m.jsxs)(j.a,{children:[Object(m.jsxs)(r.a,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[Object(m.jsx)(r.a,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:Object(m.jsx)(c.a,{sx:{display:{xs:"block",sm:"block",md:"none",lg:"none"}},children:Object(m.jsx)(i.a,{variant:"h6",noWrap:!0,component:"div",sx:{marginTop:"5px"},children:"dark"===e.palette.mode?Object(m.jsx)("img",{src:d.a,alt:"Galileo White Logo",width:"100"}):Object(m.jsx)("img",{src:o.a,alt:"Galileo Dark Logo",width:"100"})})})}),Object(m.jsx)(r.a,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:Object(m.jsx)(c.a,{sx:{mb:4},children:Object(m.jsx)(i.a,{className:"signInMarket",variant:"subtitle1",children:"Reset Password"})})})]}),Object(m.jsx)(r.a,{container:!0,spacing:2,justifyContent:"center",children:Object(m.jsx)(r.a,{item:!0,xs:12,children:Object(m.jsx)(q,{token:a.token})})})]})})]})})}},607:function(e,t,a){"use strict";var n=a(43);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a(47)),r=a(1),c=(0,s.default)((0,r.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=c},608:function(e,t,a){"use strict";var n=a(43);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a(47)),r=a(1),c=(0,s.default)((0,r.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");t.default=c},621:function(e,t,a){"use strict";var n=a(12),s=Object(n.a)("div")((function(e){return{backgroundColor:(e.theme.palette.mode,"#fff"),minHeight:"100vh"}}));t.a=s},622:function(e,t,a){"use strict";var n=a(10),s=a(118),r=a(559),c=a(195),i=a(1),o=["children"];t.a=function(e){var t=e.children,a=Object(s.a)(e,o);return Object(i.jsx)(c.a,Object(n.a)(Object(n.a)({sx:{borderRadius:"4px",maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},a),{},{children:Object(i.jsx)(r.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},624:function(e,t,a){"use strict";var n=a(56),s=a(559),r=a.p+"static/media/auth-pattern.46739974.png",c=a(1);t.a=function(e){var t=e.children,a=Object(n.a)();return Object(c.jsx)(s.a,{component:"span",sx:{display:"flex",minHeight:"97%",bgcolor:(a.palette.mode,"#fff"),backgroundImage:(a.palette.mode,"url(".concat(r,")")),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",overflow:"hidden",margin:"10px",opacity:"dark"===a.palette.mode?.85:.9},children:t})}},646:function(e,t,a){}}]);
//# sourceMappingURL=33.84bce1d7.chunk.js.map
========
(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[33],{1450:function(e,t,a){"use strict";a.r(t);var n=a(56),s=a(531),r=a(553),c=a(559),i=a(199),o=(a(600),a(153)),d=a(154),l=a(621),j=a(622),u=a(204),b=a(624),h=a(10),m=(a(690),a(1)),p=a(2),x=a(55),f=a(14),O=a(118),w=a(0),g=a(28),v=(a(646),a(548)),k=a(571),P=a(573),C=a(578),y=a(554),z=a(33),M=a(1430),N=a(598),S=a(597),W=a(268),B=a(54),F=a(607),I=a.n(F),R=a(608),D=a.n(R),L=["token"],q=function(e){var t=e.token,a=Object(O.a)(e,L),s=Object(n.a)(),r=Object(z.b)(),i=Object(g.k)(),o=Object(w.useState)(!1),d=Object(f.a)(o,2),l=d[0],j=d[1],u=Object(w.useState)(!1),b=Object(f.a)(u,2),F=b[0],R=b[1],q=function(){j(!l)},V=function(){R(!F)},_=function(e){e.preventDefault()},G=function(e){e.preventDefault()};return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(S.a,{initialValues:{password:"",confirmPassword:""},validationSchema:N.d().shape({password:N.f().max(255).required("Password is required!").matches(/^(?=(?:.*[A-Z].*){1})(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Must Contain 8 Characters,  One Uppercase, One Lowercase, One Number and one special case Character"),confirmPassword:N.f().when("password",{is:function(e){return!!(e&&e.length>0)},then:N.f().oneOf([N.e("password")],"Both Password must be match!")})}),onSubmit:function(){var e=Object(x.a)(Object(p.a)().mark((function e(a){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("reset",a),e.next=3,r(Object(B.j)({newPassword:a.password,token:t,navigate:i}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:function(e){var t=e.errors,n=e.handleBlur,r=e.handleChange,i=e.handleSubmit,o=e.isSubmitting,d=e.touched,j=e.values;return Object(m.jsxs)("form",Object(h.a)(Object(h.a)({noValidate:!0,onSubmit:i},a),{},{children:[Object(m.jsx)(v.a,{sx:{color:"dark"===s.palette.mode?"white":"#404040"},className:"authFont",htmlFor:"outlined-adornment-password-login",children:" Password"}),Object(m.jsxs)(k.a,{className:"auth-formcontrol",fullWidth:!0,error:Boolean(d.password&&t.password),children:[Object(m.jsx)(M.a,{placeholder:" Password",className:"textForm",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",type:l?"text":"password",id:"password",autoComplete:"current-password",onBlur:n,onChange:r,inputProps:{}}),d.password&&t.password&&Object(m.jsx)(P.a,{error:!0,id:"standard-weight-helper-text-password-login",children:t.password}),Object(m.jsx)(C.a,{className:"iconvisible",onClick:q,onMouseDown:_,"aria-label":"toggle password visibility",edge:"end",size:"large",children:l?Object(m.jsx)(I.a,{}):Object(m.jsx)(D.a,{})})]}),Object(m.jsx)(v.a,{sx:{color:"dark"===s.palette.mode?"white":"#404040"},className:"authFont",htmlFor:"outlined-adornment-password-login",children:"Confirm Password"}),Object(m.jsxs)(k.a,{className:"auth-formcontrol",fullWidth:!0,error:Boolean(d.password&&t.password),children:[Object(m.jsx)(M.a,{placeholder:"Confirm Password",className:"textForm",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,value:j.confirmPassword,name:"confirmPassword",type:F?"text":"password",id:"password",autoComplete:"current-password",onBlur:n,onChange:r,inputProps:{}}),Object(m.jsx)(C.a,{className:"iconvisible",onClick:V,onMouseDown:G,"aria-label":"toggle password visibility",edge:"end",size:"large",children:F?Object(m.jsx)(I.a,{}):Object(m.jsx)(D.a,{})}),d.confirmPassword&&t.confirmPassword&&Object(m.jsx)(P.a,{error:!0,id:"standard-weight-helper-text-password-login",children:t.confirmPassword})]}),t.submit&&Object(m.jsx)(c.a,{sx:{mt:3},children:Object(m.jsx)(P.a,{error:!0,children:t.submit})}),Object(m.jsx)("div",{children:"* Password should be 8 characters long containing 1 Uppercase, 1 Numeric and 1 special character"}),Object(m.jsx)(c.a,{sx:{mt:5},children:Object(m.jsx)(W.a,{children:Object(m.jsx)(y.a,{className:"signbuttonMarket",disableElevation:!0,disabled:o,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Reset Password"})})})]}))}})})};t.default=function(){var e=Object(n.a)(),t=(Object(s.a)(e.breakpoints.down("md")),new URLSearchParams(window.location.search)),a=Object.fromEntries(t.entries());return Object(m.jsx)(l.a,{children:Object(m.jsxs)(r.a,{container:!0,justifyContent:"space-between",alignItems:"center",sx:{minHeight:"100vh",background:"dark"===e.palette.mode?"#000":"#fff"},children:[Object(m.jsxs)(u.a,{children:[Object(m.jsx)("meta",{charSet:"utf-8"}),Object(m.jsx)("title",{children:"  Reset Password"})]}),Object(m.jsx)(r.a,{item:!0,md:6,lg:5,sx:{position:"relative",alignSelf:"stretch",display:{xs:"none",md:"block"}},children:Object(m.jsx)(b.a,{children:Object(m.jsx)(r.a,{item:!0,container:!0,alignItems:"flex-end",justifyContent:"center",spacing:3,children:Object(m.jsx)(r.a,{item:!0,xs:12,children:Object(m.jsx)("span",{})})})})}),Object(m.jsx)(r.a,{item:!0,container:!0,justifyContent:"center",md:6,lg:7,children:Object(m.jsxs)(j.a,{children:[Object(m.jsxs)(r.a,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[Object(m.jsx)(r.a,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:Object(m.jsx)(c.a,{sx:{display:{xs:"block",sm:"block",md:"none",lg:"none"}},children:Object(m.jsx)(i.a,{variant:"h6",noWrap:!0,component:"div",sx:{marginTop:"5px"},children:"dark"===e.palette.mode?Object(m.jsx)("img",{src:d.a,alt:"Galileo White Logo",width:"100"}):Object(m.jsx)("img",{src:o.a,alt:"Galileo Dark Logo",width:"100"})})})}),Object(m.jsx)(r.a,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:Object(m.jsx)(c.a,{sx:{mb:4},children:Object(m.jsx)(i.a,{className:"signInMarket",variant:"subtitle1",children:"Reset Password"})})})]}),Object(m.jsx)(r.a,{container:!0,spacing:2,justifyContent:"center",children:Object(m.jsx)(r.a,{item:!0,xs:12,children:Object(m.jsx)(q,{token:a.token})})})]})})]})})}},607:function(e,t,a){"use strict";var n=a(43);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a(47)),r=a(1),c=(0,s.default)((0,r.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.default=c},608:function(e,t,a){"use strict";var n=a(43);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(a(47)),r=a(1),c=(0,s.default)((0,r.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");t.default=c},621:function(e,t,a){"use strict";var n=a(12),s=Object(n.a)("div")((function(e){return{backgroundColor:(e.theme.palette.mode,"#fff"),minHeight:"100vh"}}));t.a=s},622:function(e,t,a){"use strict";var n=a(10),s=a(118),r=a(559),c=a(200),i=a(1),o=["children"];t.a=function(e){var t=e.children,a=Object(s.a)(e,o);return Object(i.jsx)(c.a,Object(n.a)(Object(n.a)({sx:{borderRadius:"4px",maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},a),{},{children:Object(i.jsx)(r.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},624:function(e,t,a){"use strict";var n=a(56),s=a(559),r=a.p+"static/media/auth-pattern.46739974.png",c=a(1);t.a=function(e){var t=e.children,a=Object(n.a)();return Object(c.jsx)(s.a,{component:"span",sx:{display:"flex",minHeight:"97%",bgcolor:(a.palette.mode,"#fff"),backgroundImage:(a.palette.mode,"url(".concat(r,")")),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",overflow:"hidden",margin:"10px",opacity:"dark"===a.palette.mode?.85:.9},children:t})}},646:function(e,t,a){}}]);
//# sourceMappingURL=33.a5122a6a.chunk.js.map
>>>>>>>> be3c9f00c17450268a6a885fc38614491773568d:build/static/js/33.a5122a6a.chunk.js
