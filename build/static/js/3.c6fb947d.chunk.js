(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[3],{416:function(e,t,a){"use strict";var n=a(315),r=a(389),c=a(380),i=a(124),l=a(373),s=a(610),o=a(36),d=a(0),j=a(67),b=a(1),u=Object(d.forwardRef)((function(e){var t=e.title,a=(e.role,e.value),d=e.setValue,u=e.options,h=Object(o.a)();return Object(b.jsx)(n.a,{sx:{marginBottom:h.spacing(j.b),borderColor:h.palette.primary[200]+75,background:h.palette.background.default},children:Object(b.jsx)(r.a,{sx:{padding:"13px 20px 22px 20px"},children:Object(b.jsxs)(c.a,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:j.b,children:[Object(b.jsx)(c.a,{item:!0,children:Object(b.jsx)(i.a,{variant:"h3",sx:{fontWeight:500,color:"#000"},children:t})}),void 0!==a&&Object(b.jsx)(c.a,{item:!0,children:Object(b.jsx)(l.a,{id:"standard-select-currency",select:!0,value:a,onChange:function(e){return d(e.target.value)},sx:{width:"110px",height:"40px"},children:u.map((function(e){return Object(b.jsx)(s.a,{value:e.value,children:e.label},e.value)}))})})]})})})}));t.a=u},422:function(e,t,a){"use strict";var n=a(84);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(97)),c=a(1),i=(0,r.default)((0,c.jsx)("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined");t.default=i},423:function(e,t,a){"use strict";var n=a(84);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(97)),c=a(1),i=(0,r.default)((0,c.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z"}),"DeleteOutlineOutlined");t.default=i},596:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a(0),c=a(31),i=a(67),l=a(36),s=a(604),o=a(605),d=a(606),j=a(607),b=a(608),u=a(609),h=a(365),O=a(598),g=a(405),x=a(380),p=a(308),m=a(124),f=a(422),v=a.n(f),C=a(423),y=a.n(C),I=(a(431),a(1)),P=function(e){var t,a=e.setOpen,n=(e.open,e.categories,e.setCategories),r=e.categoryList,c=e.setDeleteOpen,i=Object(l.a)();return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(s.a,{children:[Object(I.jsxs)(o.a,{children:[Object(I.jsx)(d.a,{children:Object(I.jsxs)(j.a,{children:[Object(I.jsx)(b.a,{align:"center",children:"Name"}),Object(I.jsx)(b.a,{align:"center",children:"Profit"}),Object(I.jsx)(b.a,{align:"center",children:"Actions"})]})}),(null===(t=r.categories)||void 0===t?void 0:t.length)>0?Object(I.jsx)(u.a,{children:void 0!=r.categories&&r.categories.map((function(e,t){return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(j.a,{onClick:function(){},children:[Object(I.jsx)(b.a,{align:"center",sx:{padding:"0px"},children:e.name}),Object(I.jsxs)(b.a,{align:"center",sx:{padding:"0px"},children:[e.profitPercentage,"%"]}),Object(I.jsx)(b.a,{align:"center",sx:{padding:"0px"},children:Object(I.jsxs)(h.a,{direction:"row",justifyContent:"center",alignItems:"center",children:[Object(I.jsx)(O.a,{placement:"top",title:"Edit",children:Object(I.jsx)(g.a,{color:"primary","aria-label":"Edit",size:"large",onClick:function(){a(!0),n({name:e.name,profitPercentage:e.profitPercentage,brandId:e.BrandId,categoryId:e.id})},children:Object(I.jsx)(v.a,{sx:{fontSize:"1.5rem"}})})}),Object(I.jsx)(O.a,{placement:"top",title:"Delete",children:Object(I.jsx)(g.a,{color:"primary",sx:{color:i.palette.orange.dark,borderColor:i.palette.orange.main,"&:hover ":{background:i.palette.orange.light}},size:"large",onClick:function(){n({brandId:e.BrandId,categoryId:e.id}),c(!0)},children:Object(I.jsx)(y.a,{sx:{fontSize:"1.5rem"}})})})]})})]})})}))}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(x.a,{item:!0,md:12,children:Object(I.jsx)(p.a,{})}),Object(I.jsx)(x.a,{item:!0,children:Object(I.jsx)(m.a,{style:{padding:"20px",fontWeight:"800"},children:" No Data Available"})})]})]}),Object(I.jsx)(p.a,{})]})})},k=a(381),z=a(392),S=a(373),w=a(610),B=a(390),A=a(593),F=a(220),L=a(23),M=a(110),D=a(101),V=a(5),E=a(358),N=a(599),R=a(600),W=a(601),T=a(602),q=a(603),H=Object(r.forwardRef)((function(e,t){return Object(I.jsx)(E.a,Object(V.a)({direction:"up",ref:t},e))}));function Z(e){var t=e.categories,a=e.setCategories,n=e.deleteOpen,r=e.setDeleteOpen,i=e.page,s=e.limit,o=e.search,d=Object(l.a)(),j=Object(c.b)(),b=function(){r(!1),a({brandId:0})};return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(N.a,{open:n,TransitionComponent:H,keepMounted:!0,onClose:b,"aria-labelledby":"alert-dialog-slide-title1","aria-describedby":"alert-dialog-slide-description1",children:[Object(I.jsx)(R.a,{id:"alert-dialog-slide-title1",children:"Delete Category"}),Object(I.jsx)(W.a,{children:Object(I.jsx)(T.a,{id:"alert-dialog-slide-description1",children:Object(I.jsx)(m.a,{variant:"body2",component:"span",children:"Are you sure you want to delete this Category?"})})}),Object(I.jsxs)(q.a,{sx:{pr:2.5},children:[Object(I.jsx)(B.a,{sx:{color:d.palette.error.dark,borderColor:d.palette.error.dark},onClick:b,color:"secondary",children:"No"}),Object(I.jsx)(B.a,{variant:"contained",size:"small",onClick:function(){j(Object(D.b)({categoryId:t.categoryId,brandId:t.brandId,handleClose:b,page:i,limit:s,search:o}))},children:"Yes"})]})]})})}var _=a(442),J=a.n(_),U=a(9),$=a.n(U),Y=a(126),G=a(316),K=a(399),Q=a(410),X=a(411),ee=a(32),te=a(176);function ae(e){var t,a=e.setOpen,i=e.open,s=e.categories,o=e.setCategories,d=e.limit,j=e.page,b=e.search,u=(Object(l.a)(),Object(r.useState)(0)),O=Object(n.a)(u,2),g=O[0],m=O[1],f=Object(c.b)(),v=(Object(ee.e)(),Object(c.c)((function(e){return e.brand.brandsList}))),C=function(e){m(e.target.value)},y=X.a({name:X.c().required("Category Name is required!").max(42,"Category Name can not exceed 42 characters").matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/,"Invalid Category name"),profitPercentage:X.c().required("profit Percentage required!").max(42,"profit Percentage can not exceed 42 characters").matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/,"Invalid profit Percentage")}),P=Object(Q.b)({enableReinitialize:!0,initialValues:s,validationSchema:y,onSubmit:function(){var e=Object(Y.a)($.a.mark((function e(t){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=s.name){e.next=5;break}return e.next=3,f(Object(D.a)({name:t.name,profitPercentage:t.profitPercentage,brandId:g,page:j,limit:d,search:b,handleClose:k}));case 3:e.next=6;break;case 5:f(Object(D.f)({name:t.name,profitPercentage:s.profitPercentage,brandId:s.brandId,categoryId:s.categoryId,limit:d,page:j,search:b,handleClose:k}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),k=function(){a(!1),o({name:"",profitPercentage:"",brandId:0,categoryId:0}),P.resetForm()};return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(N.a,{open:i,onClose:k,handleBrandChange:C,"aria-labelledby":"form-dialog-title",children:[Object(I.jsx)(R.a,{id:"form-dialog-title",children:""!==s.name?"Update Category ":" Add Category "}),Object(I.jsx)(p.a,{}),Object(I.jsx)(W.a,{children:Object(I.jsx)("form",{noValidate:!0,onSubmit:P.handleSubmit,id:"validation-forms",children:Object(I.jsx)(G.a,{children:Object(I.jsxs)(x.a,{container:!0,spacing:3,children:[Object(I.jsx)(x.a,{item:!0,xs:12,children:Object(I.jsx)(S.a,{id:"name",name:"name",label:"Name",value:P.values.name,onChange:P.handleChange,error:P.touched.name&&Boolean(P.errors.name),helperText:P.touched.name&&P.errors.name,fullWidth:!0,autoComplete:"given-name"})}),Object(I.jsx)(x.a,{item:!0,xs:12,children:Object(I.jsx)(S.a,{id:"profitPercentage",name:"profitPercentage",label:"Profit Percentage",value:P.values.profitPercentage,onChange:P.handleChange,error:P.touched.profitPercentage&&Boolean(P.errors.profitPercentage),helperText:P.touched.profitPercentage&&P.errors.profitPercentage,fullWidth:!0,autoComplete:"given-name"})}),""==s.name&&Object(I.jsx)(x.a,{item:!0,xs:12,children:Object(I.jsx)(K.a,{fullWidth:!0,children:Object(I.jsxs)(S.a,{id:"outlined-select-currency",select:!0,fullWidth:!0,InputLabelProps:{shrink:!0},label:"Select Brand",value:g,defaultValue:P.values.brand,onChange:C,error:P.touched.brand&&Boolean(P.errors.brand),helperText:P.touched.brand&&P.errors.brand,autoComplete:"given-name",children:[Object(I.jsx)(w.a,{value:0,children:"Choose Brand"}),void 0!=v&&(null===v||void 0===v||null===(t=v.brands)||void 0===t?void 0:t.map((function(e,t){return Object(I.jsx)(w.a,{value:e.id,children:e.name},t)})))]})})}),Object(I.jsx)(x.a,{item:!0,xs:12,children:Object(I.jsxs)(h.a,{direction:"row",justifyContent:"flex-end",children:[Object(I.jsx)(te.a,{children:Object(I.jsx)(B.a,{variant:"contained",sx:{my:3,ml:1},type:"submit",size:"large",disableElevation:!0,children:""!==s.name?"Update ":"Add "})}),Object(I.jsx)(te.a,{children:Object(I.jsx)(B.a,{variant:"contained",sx:{my:3,ml:1,color:"#fff"},onClick:k,color:"secondary",size:"large",children:"Cancel"})})]})})]})})})})]})})}var ne=a(125),re=a(416);t.default=function(){var e,t=Object(l.a)(),a=Object(c.b)(),s=Object(c.c)((function(e){return e.category.categoryList})),o=Object(r.useState)(0),d=Object(n.a)(o,2),j=d[0],b=d[1],u=Object(r.useState)(""),h=Object(n.a)(u,2),O=h[0],g=(h[1],Object(r.useState)(1)),p=Object(n.a)(g,2),m=p[0],f=(p[1],Object(r.useState)(10)),v=Object(n.a)(f,2),C=v[0],y=(v[1],Object(r.useState)(!1)),V=Object(n.a)(y,2),E=V[0],N=V[1],R=Object(r.useState)(""),W=Object(n.a)(R,2),T=W[0],q=W[1],H=Object(r.useState)(1),_=Object(n.a)(H,2),U=_[0],$=_[1],Y=Object(r.useState)(10),G=Object(n.a)(Y,2),K=G[0],Q=G[1],X=Object(r.useState)(!1),ee=Object(n.a)(X,2),te=ee[0],ce=ee[1],ie=Object(r.useState)({name:"",profitPercentage:"",brandId:0,categoryId:0}),le=Object(n.a)(ie,2),se=le[0],oe=le[1],de=Object(r.useState)(null),je=Object(n.a)(de,2),be=je[0],ue=je[1],he=function(){ue(null)};Object(r.useEffect)((function(){console.log("cate brand"),a(Object(M.c)({search:O,page:m,limit:C}))}),[O,m,C]);var Oe=Object(c.c)((function(e){return e.brand.brandsList}));return Object(r.useEffect)((function(){a(Object(D.c)({brandId:0==j?0:j,search:T,page:U,limit:K}))}),[T,U,K,j]),Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(ae,{open:te,categories:se,setCategories:oe,setOpen:ce,page:m,limit:C,search:O}),Object(I.jsx)(Z,{categories:se,setCategories:oe,deleteOpen:E,setDeleteOpen:N,page:m,limit:C,search:O}),Object(I.jsx)(re.a,{title:"Category Management"}),Object(I.jsxs)(ne.a,{title:Object(I.jsxs)(x.a,{container:!0,spacing:i.b,children:[Object(I.jsx)(x.a,{item:!0,xs:3,children:Object(I.jsx)(k.a,{id:"input-search-list-style1",placeholder:"Search",startAdornment:Object(I.jsx)(z.a,{position:"start",children:Object(I.jsx)(L.s,{stroke:1.5,size:"1rem"})}),size:"small",onChange:function(e){q(e.target.value)}})}),Object(I.jsx)(x.a,{item:!0,xs:3,children:Object(I.jsxs)(S.a,{className:"selectField",id:"outlined-select-budget",select:!0,fullWidth:!0,label:"Select Brand",value:j,onChange:function(e){b(e.target.value)},children:[Object(I.jsx)(w.a,{value:"0",children:"Select"}),void 0!=Oe&&(null===Oe||void 0===Oe||null===(e=Oe.brands)||void 0===e?void 0:e.map((function(e,t){return Object(I.jsx)(w.a,{value:e.id,children:e.name},t)})))]})}),Object(I.jsx)(x.a,{item:!0,xs:6,textAlign:"end",children:Object(I.jsx)(B.a,{variant:"contained",size:"large",onClick:function(){ce(!0),oe({name:"",profitPercentage:"",brandId:0,categoryId:0})},children:"Add Category"})})]}),content:!1,children:[Object(I.jsx)(P,{open:te,categories:se,setCategories:oe,setOpen:ce,setDeleteOpen:N,mainBrandId:j,categoryList:s,page:U,limit:K,search:T}),Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(x.a,{item:!0,xs:12,sx:{p:3},children:Object(I.jsxs)(x.a,{container:!0,justifyContent:"space-between",spacing:i.b,children:[Object(I.jsx)(x.a,{item:!0,children:Object(I.jsx)(A.a,{color:"primary",showFirstButton:!0,showLastButton:!0,page:U,count:s.totalPages,onChange:function(e,t){$(t)}})}),Object(I.jsxs)(x.a,{item:!0,children:[Object(I.jsxs)(B.a,{size:"large",sx:{color:t.palette.grey[900]},color:"secondary",endIcon:Object(I.jsx)(J.a,{}),onClick:function(e){ue(e.currentTarget)},children:[K," Rows"]}),Object(I.jsxs)(F.a,{id:"menu-user-list-style1",anchorEl:be,keepMounted:!0,open:Boolean(be),onClose:he,variant:"selectedMenu",anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:"right"},children:[Object(I.jsxs)(w.a,{value:10,onClick:function(e){Q(e.target.value),$(1),he()},children:[" ","10 Rows"]}),Object(I.jsxs)(w.a,{value:25,onClick:function(e){Q(e.target.value),$(1),he()},children:[" ","25 Rows"]}),Object(I.jsxs)(w.a,{value:50,onClick:function(e){Q(e.target.value),$(1),he()},children:[" ","50 Rows"," "]})]})]})]})})})]})]})}}}]);
//# sourceMappingURL=3.c6fb947d.chunk.js.map