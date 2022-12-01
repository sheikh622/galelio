(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[32],{1118:function(e,t,a){"use strict";a.r(t);var n=a(21),i=a(0),r=a(35),c=a(38),s=a(73),l=a(47),o=a(113),d=a(178),j=a(535),b=a(543),u=a(526),m=a(1121),h=a(318),x=a(583),p=a.n(x),O=a(179),g=a(3),f=a.n(g),v=a(181),y=a(29),N=a(9),T=a(8),C=a(565),D=a(566),F=a(492),k=a(629),S=a(630),w=a(631),A=a(544),z=a(525),I=a(1134),M=a(529),P=a(532),R=a(500),q=a(498),E=a(323),V=a(632),W=a(743),B=a(1132),Z=a(217),L=a(739),H=a(109),_=(a(172),a(1080)),U=a.n(_);function $(e){return U()(e).format("0.0 b")}var J=a(249),Q=(a(330),a(1)),X=function(e){var t=e.formik,a=e.fileArray,n=e.index;return Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsxs)("div",{style:{display:"flex",marginRight:"10px"},children:[Object(Q.jsx)(d.a,{style:{marginTop:"12px",marginRight:"5px"},children:"Quantity : "}),Object(Q.jsx)(j.a,{type:"number",className:"quantityField",id:"outlined-select-currency-native",value:a[n].quantity,onChange:function(e){var i;i=e.target.value,a[n].quantity=i,t.setFieldValue("images",a)}})]})})},Y=a(740),G=a(741),K=a.p+"static/media/image-upload.54137b05.svg",ee=a(248),te=a(13),ae=Object(i.forwardRef)((function(e,t){return Object(Q.jsx)(F.a,Object(T.a)({direction:"up",ref:t},e))})),ne=[{value:"ETH",label:"ETH"},{value:"USDT",label:"USDT"}];function ie(e){var t=e.open,a=e.setOpen,c=e.data,s=e.search,l=e.page,m=e.limit,h=e.nftType,x=Object(r.b)(),p=Object(i.useState)("directMint"),O=Object(n.a)(p,2),g=O[0],F=O[1],_=Object(i.useState)([]),U=Object(n.a)(_,2),ie=U[0],re=U[1],ce=Object(i.useState)([]),se=Object(n.a)(ce,2),le=se[0],oe=se[1],de=Object(i.useState)("ETH"),je=Object(n.a)(de,2),be=je[0],ue=je[1],me=D.d({nftName:D.f().required("NFT Name is required!").max(42,"NFT Name can not exceed 42 characters").matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/,"Invalid NFT name"),nftDescription:D.f().required("NFT Description is required!").max(500,"Invalid NFT description can not exceed 500 characters").matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/,"Invalid NFT description"),nftPrice:D.c().min(1e-6,"Price should not less than zero").required("NFT Price is required").typeError("Invalid Price"),images:D.b()}),he=Object(C.b)({enableReinitialize:!0,initialValues:{nftName:"",nftDescription:"",nftPrice:0,images:[]},validationSchema:me,onSubmit:function(e){var t,a=function(e,t){var a=!0;return parseInt(t.images[0].quantity)<1&&(J.b.error("NFT Quantity must be greater than zero"),a=!1),"jpg"==t.images[0].image.name.split(".").pop()||"png"==t.images[0].image.name.split(".").pop()||(J.b.error("Upload the files with these extensions: jpg, png, gif"),a=!1),e.forEach((function(e){""==e.fieldName&&(a=!1,J.b.error("Metadata name fields are mandatory")),""==e.fieldValue&&(a=!1,J.b.error("Metadata value fields are mandatory"))})),a}(le,e);a&&x(Object(H.a)((t={categoryId:c.CategoryId,mintType:g,metaDataArray:le,name:e.nftName,price:e.nftPrice,description:e.nftDescription,currencyType:be,quantity:e.images[0].quantity,asset:e.images[0].image,type:h,page:l,limit:m,search:s},Object(N.a)(t,"categoryId",c.CategoryId),Object(N.a)(t,"handleClose",pe),t)))}}),xe=he.values.images.length>0,pe=function(){a(!1),he.resetForm(),F("directMint"),ue("ETH"),re([]),oe([])},Oe=Object(i.useCallback)((function(e){var t=Object(y.a)(ie);e.map(function(){var e=Object(v.a)(f.a.mark((function e(a){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={image:a,quantity:1},t=[].concat(Object(y.a)(t),[n]);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),he.setFieldValue("images",t),re(t)}),[he.setFieldValue,ie]),ge=Object(W.a)({accept:".jpeg,.png,.jpg,.gif",onDrop:Oe}),fe=ge.getRootProps,ve=ge.getInputProps,ye=ge.isDragActive,Ne=ge.isDragReject,Te=ge.isDragAccept;return Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsxs)(k.a,{open:t,onClose:pe,"aria-labelledby":"form-dialog-title",className:"brandDialog",maxWidth:"md",TransitionComponent:ae,keepMounted:!0,"aria-describedby":"alert-dialog-slide-description1",children:[Object(Q.jsx)(S.a,{id:"alert-dialog-slide-title1",children:"Add NFT"}),Object(Q.jsxs)(w.a,{children:[Object(Q.jsx)(o.a,{container:!0,spacing:2,textAlign:"end",children:Object(Q.jsxs)(o.a,{item:!0,xs:12,children:[Object(Q.jsx)(u.a,{sx:{marginRight:"10px"},variant:"directMint"==g?"contained":"outlined",onClick:function(){F("directMint")},children:"Direct Mint"}),Object(Q.jsx)(u.a,{variant:"lazyMint"==g?"contained":"outlined",onClick:function(){F("lazyMint")},children:"Lazy Minting"})]})}),Object(Q.jsxs)("form",{autoComplete:"off",onSubmit:he.handleSubmit,children:[Object(Q.jsxs)(o.a,{container:!0,mt:2,children:[Object(Q.jsx)(o.a,{xs:4,mt:2,pr:3,children:Object(Q.jsx)(j.a,{id:"nftName",name:"nftName",label:"NFT Name",fullWidth:!0,value:he.values.nftName,onChange:he.handleChange,error:he.touched.nftName&&Boolean(he.errors.nftName),helperText:he.touched.nftName&&he.errors.nftName,autoComplete:"given-name",variant:"standard"})}),Object(Q.jsx)(o.a,{xs:4,mt:2,pr:3,children:Object(Q.jsx)(j.a,{id:"nftPrice",name:"nftPrice",label:"NFT Price",fullWidth:!0,value:he.values.nftPrice,onChange:he.handleChange,error:he.touched.nftPrice&&Boolean(he.errors.nftPrice),helperText:he.touched.nftPrice&&he.errors.nftPrice,autoComplete:"given-name",variant:"standard"})}),Object(Q.jsx)(o.a,{xs:4,mt:2,pr:3,children:Object(Q.jsx)(j.a,{id:"outlined-select-budget",select:!0,fullWidth:!0,label:"Select Token",value:be,onChange:function(e){ue(e.target.value)},children:ne.map((function(e,t){return Object(Q.jsx)(b.a,{value:e.value,children:e.label},t)}))})}),Object(Q.jsx)(o.a,{xs:12,mt:2,pr:3,children:Object(Q.jsx)(j.a,{multiline:!0,rows:2,id:"nftDescription",name:"nftDescription",label:"NFT Description",fullWidth:!0,value:he.values.nftDescription,onChange:he.handleChange,error:he.touched.nftDescription&&Boolean(he.errors.nftDescription),helperText:he.touched.nftDescription&&he.errors.nftDescription,autoComplete:"given-name",variant:"standard"})}),Object(Q.jsx)(o.a,{xs:12,mt:2,pr:3,children:Object(Q.jsx)(u.a,{variant:"contained",sx:{float:"right"},onClick:function(){oe([].concat(Object(y.a)(le),[{fieldName:"",fieldValue:""}]))},children:"Add Fields"})})]}),0!=le.length&&Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsx)(o.a,{container:!0,spacing:4,children:le.map((function(e,t){return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(o.a,{item:!0,xs:5,children:Object(Q.jsx)(j.a,{id:"field_name",name:"field_name",label:"Metadata Name",value:e.fieldName,onChange:function(e){!function(e,t){var a=Object(y.a)(le);a[t].fieldName=e,oe(a)}(e.target.value,t)},variant:"standard",fullWidth:!0})}),Object(Q.jsx)(o.a,{item:!0,xs:5,children:Object(Q.jsx)(j.a,{id:"field_value",name:"field_value",label:"Metadata Value",value:e.fieldValue,onChange:function(e){!function(e,t){var a=Object(y.a)(le);a[t].fieldValue=e,oe(a)}(e.target.value,t)},variant:"standard",fullWidth:!0})}),Object(Q.jsx)(o.a,{item:!0,xs:2,mt:2,children:Object(Q.jsx)(A.a,{color:"error",edge:"end",size:"small",onClick:function(){!function(e){var t=Object(y.a)(le);t.splice(e,1),oe(t)}(t)},children:Object(Q.jsx)(L.a,{icon:G.a,width:28,height:28})})})]})}))})}),1!==ie.length&&Object(Q.jsx)(o.a,{sx:{background:"#c5cbe9",borderRadius:"5px",paddingBottom:"2rem",paddingTop:"2rem"},item:!0,lg:12,mt:3,children:Object(Q.jsx)("div",{className:Object(te.a)("dropZoneContainer","xyz"),children:Object(Q.jsxs)("div",Object(T.a)(Object(T.a)({className:Object(te.a)("dropZone",{isDragActive:ye,isDragAccept:Te,isDragReject:Ne})},fe()),{},{children:[Object(Q.jsx)("input",Object(T.a)({},ve())),Object(Q.jsxs)(o.a,{container:!0,direction:"column",children:[Object(Q.jsx)(z.a,{textAlign:"center",component:"img",alt:"Select File",src:K,sx:{height:60}}),Object(Q.jsx)(z.a,{mt:4,textAlign:"center",sx:{ml:{md:0}},children:Object(Q.jsxs)(d.a,{variant:"subtitle",sx:{color:"grey",textAlign:"center"},children:["Drop your image or\xa0",Object(Q.jsx)(I.a,{underline:"always",children:"browse"}),".\xa0"]})})]})]}))})}),Object(Q.jsx)(o.a,{item:!0,lg:12,mt:3,children:Object(Q.jsx)(M.a,{disablePadding:!0,className:Object(te.a)({list:xe}),sx:{mt:3},children:Object(Q.jsx)(B.a,{children:he.values.images&&he.values.images.map((function(e,t){return Object(Q.jsxs)(P.a,{component:Z.a.div,className:"listItem",children:[Object(Q.jsx)(R.a,{children:Object(Q.jsx)(L.a,{icon:Y.a,width:32,height:32})}),Object(Q.jsx)(q.a,{primary:e.image.name?e.image.name:"",secondary:$(e.image.size)?$(e.image.size):"",primaryTypographyProps:{variant:"subtitle2"}}),Object(Q.jsx)(X,{formik:he,fileArray:he.values.images,index:t}),Object(Q.jsx)(A.a,{color:"error",edge:"end",size:"small",onClick:function(){return function(e,t){var a=Object(y.a)(he.values.images);a.splice(t,1),re(a),he.setFieldValue("images",a)}(e.image,t)},children:Object(Q.jsx)(L.a,{icon:G.a,width:28,height:28})})]},e.image.name)}))})})})]})]}),Object(Q.jsx)(E.a,{}),Object(Q.jsxs)(V.a,{sx:{pr:2.5},children:[Object(Q.jsx)(ee.a,{children:Object(Q.jsx)(u.a,{type:"submit",variant:"contained",sx:{my:3,ml:1},onClick:function(){he.handleSubmit()},size:"large",disableElevation:!0,children:"Add"})}),Object(Q.jsx)(ee.a,{children:Object(Q.jsx)(u.a,{variant:"contained",sx:{my:3,ml:1,color:"#fff"},onClick:pe,color:"secondary",size:"large",children:"Cancel"})})]})]})})}var re=a(424),ce=a(326),se=a(499),le=a(140),oe=a(324),de=a(325),je=["border","boxShadow","children","content","contentClass","contentSX","darkTitle","secondary","shadow","sx","title"],be={"& .MuiCardHeader-action":{mr:0}},ue=Object(i.forwardRef)((function(e,t){var a=e.border,n=void 0===a||a,i=e.boxShadow,r=e.children,c=e.content,s=void 0===c||c,o=e.contentClass,j=void 0===o?"":o,b=e.contentSX,u=void 0===b?{}:b,m=e.darkTitle,h=e.secondary,x=e.shadow,p=e.sx,O=void 0===p?{}:p,g=e.title,f=Object(le.a)(e,je),v=Object(l.a)();return Object(Q.jsxs)(oe.a,Object(T.a)(Object(T.a)({ref:t},f),{},{sx:Object(T.a)({border:n?"1px solid":"none",borderColor:"dark"===v.palette.mode?v.palette.background.default:v.palette.primary[200]+75,":hover":{boxShadow:i?x||("dark"===v.palette.mode?"0 2px 14px 0 rgb(33 150 243 / 10%)":"0 2px 14px 0 rgb(32 40 45 / 8%)"):"inherit"}},O),children:[!m&&g&&Object(Q.jsx)(de.a,{sx:be,title:g,action:h}),m&&g&&Object(Q.jsx)(de.a,{sx:be,title:Object(Q.jsx)(d.a,{variant:"h3",children:g}),action:h}),g&&Object(Q.jsx)(E.a,{}),s&&Object(Q.jsx)(ce.a,{sx:u,className:j,children:r}),!s&&r]}))})),me=Object(i.forwardRef)((function(e,t){return Object(Q.jsx)(F.a,Object(T.a)({direction:"up",ref:t},e))})),he=[{value:"ETH",label:"ETH"},{value:"USDT",label:"USDT"}];function xe(e){var t=e.nftInfo,a=e.categoryId,c=e.type,s=e.search,l=e.page,m=e.limit,h=(e.loader,e.setLoader,e.open),x=e.setOpen,p=Object(r.b)(),O=Object(i.useState)("directMint"),g=Object(n.a)(O,2),N=g[0],F=g[1],_=Object(i.useState)("ETH"),U=Object(n.a)(_,2),$=U[0],ae=U[1],ne=Object(i.useState)([]),ie=Object(n.a)(ne,2),re=ie[0],ce=ie[1],se=Object(i.useState)([]),le=Object(n.a)(se,2),oe=le[0],de=le[1],je=D.d({nftName:D.f().required("NFT Name is required!").max(42,"NFT Name can not exceed 42 characters").matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/,"Invalid NFT name"),nftDescription:D.f().required("NFT Description is required!").max(500,"Invalid NFT description can not exceed 500 characters").matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/,"Invalid NFT description"),nftPrice:D.c().min(1e-6,"Price should not less than zero").required("NFT Price is required").typeError("Invalid Price"),images:D.b()}),be=Object(C.b)({enableReinitialize:!0,initialValues:t,validationSchema:je,onSubmit:function(e){var n=e.images[0].image instanceof File,i=function(e,t,a){var n=!0;return a&&("jpg"==t.images[0].image.name.split(".").pop()||"png"==t.images[0].image.name.split(".").pop()||(J.b.error("Upload the files with these extensions: jpg, png, gif"),n=!1)),parseInt(t.images[0].quantity)<1&&(J.b.error("NFT Quantity must be greater than zero"),n=!1),e.forEach((function(e){""==e.fieldName&&(n=!1,J.b.error("Metadata name fields are mandatory")),""==e.fieldValue&&(n=!1,J.b.error("Metadata value fields are mandatory"))})),n}(re,e,n);i&&p(Object(H.c)({id:t.id,name:e.nftName,price:e.nftPrice,description:e.nftDescription,quantity:e.images[0].quantity,asset:n?e.images[0].image:null,currencyType:$,mintType:N,metaDataArray:re,type:c,page:l,limit:m,search:s,categoryId:a,handleClose:xe}))}}),ue=be.values.images.length>0,xe=function(){x(!1),be.resetForm()},pe=Object(i.useCallback)((function(e){var t=Object(y.a)(oe);e.map(function(){var e=Object(v.a)(f.a.mark((function e(a){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={image:a,quantity:1},t=[].concat(Object(y.a)(t),[n]);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),be.setFieldValue("images",t),de(t)}),[be.setFieldValue,oe]),Oe=Object(W.a)({accept:".jpeg,.png,.jpg,.gif",onDrop:pe}),ge=Oe.getRootProps,fe=Oe.getInputProps,ve=Oe.isDragActive,ye=Oe.isDragReject,Ne=Oe.isDragAccept;return Object(i.useEffect)((function(){ce(t.fieldDataArray),F(t.mintType),ae(t.currencyType),de(t.images)}),[t]),Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsxs)(k.a,{open:h,onClose:xe,"aria-labelledby":"form-dialog-title",className:"brandDialog",maxWidth:"md",TransitionComponent:me,keepMounted:!0,"aria-describedby":"alert-dialog-slide-description1",children:[Object(Q.jsx)(S.a,{id:"alert-dialog-slide-title1",children:"Add NFT"}),Object(Q.jsxs)(w.a,{children:[Object(Q.jsx)(o.a,{container:!0,spacing:2,textAlign:"end",children:Object(Q.jsxs)(o.a,{item:!0,xs:12,children:[Object(Q.jsx)(u.a,{sx:{marginRight:"10px"},variant:"directMint"==N?"contained":"outlined",onClick:function(){F("directMint")},children:"Direct Mint"}),Object(Q.jsx)(u.a,{variant:"lazyMint"==N?"contained":"outlined",onClick:function(){F("lazyMint")},children:"Lazy Minting"})]})}),Object(Q.jsxs)("form",{autoComplete:"off",onSubmit:be.handleSubmit,children:[Object(Q.jsxs)(o.a,{container:!0,mt:2,children:[Object(Q.jsx)(o.a,{xs:4,mt:2,pr:3,children:Object(Q.jsx)(j.a,{id:"nftName",name:"nftName",label:"NFT Name",fullWidth:!0,value:be.values.nftName,onChange:be.handleChange,error:be.touched.nftName&&Boolean(be.errors.nftName),helperText:be.touched.nftName&&be.errors.nftName,autoComplete:"given-name",variant:"standard"})}),Object(Q.jsx)(o.a,{xs:4,mt:2,pr:3,children:Object(Q.jsx)(j.a,{id:"nftPrice",name:"nftPrice",label:"NFT Price",fullWidth:!0,value:be.values.nftPrice,onChange:be.handleChange,error:be.touched.nftPrice&&Boolean(be.errors.nftPrice),helperText:be.touched.nftPrice&&be.errors.nftPrice,autoComplete:"given-name",variant:"standard"})}),Object(Q.jsx)(o.a,{xs:4,mt:2,pr:3,children:Object(Q.jsx)(j.a,{id:"outlined-select-budget",select:!0,fullWidth:!0,label:"Select Token",value:$,onChange:function(e){ae(e.target.value)},children:he.map((function(e,t){return Object(Q.jsx)(b.a,{value:e.value,children:e.label},t)}))})}),Object(Q.jsx)(o.a,{xs:12,mt:2,pr:3,children:Object(Q.jsx)(j.a,{multiline:!0,rows:2,id:"nftDescription",name:"nftDescription",label:"NFT Description",fullWidth:!0,value:be.values.nftDescription,onChange:be.handleChange,error:be.touched.nftDescription&&Boolean(be.errors.nftDescription),helperText:be.touched.nftDescription&&be.errors.nftDescription,autoComplete:"given-name",variant:"standard"})}),Object(Q.jsx)(o.a,{xs:12,mt:2,pr:3,children:Object(Q.jsx)(u.a,{variant:"contained",sx:{float:"right"},onClick:function(){ce([].concat(Object(y.a)(re),[{fieldName:"",fieldValue:""}]))},children:"Add Fields"})})]}),0!=re.length&&Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsx)(o.a,{container:!0,spacing:4,children:re.map((function(e,t){return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(o.a,{item:!0,xs:5,children:Object(Q.jsx)(j.a,{id:"field_name",name:"field_name",label:"Metadata Name",value:e.fieldName,onChange:function(e){!function(e,t){var a=structuredClone(re);a[t].fieldName=e,ce(a)}(e.target.value,t)},variant:"standard",fullWidth:!0})}),Object(Q.jsx)(o.a,{item:!0,xs:5,children:Object(Q.jsx)(j.a,{id:"field_value",name:"field_value",label:"Metadata Value",value:e.fieldValue,onChange:function(e){!function(e,t){var a=structuredClone(re);a[t].fieldValue=e,ce(a)}(e.target.value,t)},variant:"standard",fullWidth:!0})}),Object(Q.jsx)(o.a,{item:!0,xs:2,mt:2,children:Object(Q.jsx)(A.a,{color:"error",edge:"end",size:"small",onClick:function(){!function(e){var t=Object(y.a)(re);t.splice(e,1),ce(t)}(t)},children:Object(Q.jsx)(L.a,{icon:G.a,width:28,height:28})})})]})}))})}),1!==oe.length&&Object(Q.jsx)(o.a,{sx:{background:"#c5cbe9",borderRadius:"5px",paddingBottom:"2rem",paddingTop:"2rem"},item:!0,lg:12,mt:3,children:Object(Q.jsx)("div",{className:Object(te.a)("dropZoneContainer","xyz"),children:Object(Q.jsxs)("div",Object(T.a)(Object(T.a)({className:Object(te.a)("dropZone",{isDragActive:ve,isDragAccept:Ne,isDragReject:ye})},ge()),{},{children:[Object(Q.jsx)("input",Object(T.a)({},fe())),Object(Q.jsxs)(o.a,{container:!0,direction:"column",children:[Object(Q.jsx)(z.a,{textAlign:"center",component:"img",alt:"Select File",src:K,sx:{height:60}}),Object(Q.jsx)(z.a,{mt:4,textAlign:"center",sx:{ml:{md:0}},children:Object(Q.jsxs)(d.a,{variant:"subtitle",sx:{color:"grey",textAlign:"center"},children:["Drop your image or\xa0",Object(Q.jsx)(I.a,{underline:"always",children:"browse"}),".\xa0"]})})]})]}))})}),Object(Q.jsx)(M.a,{disablePadding:!0,className:Object(te.a)({list:ue}),sx:{mt:3},children:Object(Q.jsx)(B.a,{children:be.values.images&&be.values.images.map((function(e,t){return Object(Q.jsxs)(P.a,{component:Z.a.div,className:"listItem",children:[Object(Q.jsx)(R.a,{children:Object(Q.jsx)(L.a,{icon:Y.a,width:32,height:32})}),Object(Q.jsx)(q.a,{primary:e.image.name?e.image.name:""}),Object(Q.jsx)(X,{formik:be,fileArray:be.values.images,index:t}),Object(Q.jsx)(A.a,{color:"error",edge:"end",size:"small",onClick:function(){return function(e){var t=Object(y.a)(be.values.images);t.splice(e,1),de(t),be.setFieldValue("images",t)}(e.image)},children:Object(Q.jsx)(L.a,{icon:G.a,width:28,height:28})})]},e.image.name)}))})})]})]}),Object(Q.jsx)(E.a,{}),Object(Q.jsxs)(V.a,{sx:{pr:2.5},children:[Object(Q.jsx)(ee.a,{children:Object(Q.jsx)(u.a,{type:"submit",variant:"contained",sx:{my:3,ml:1},onClick:function(){be.handleSubmit()},size:"large",disableElevation:!0,children:"Edit NFT"})}),Object(Q.jsx)(ee.a,{children:Object(Q.jsx)(u.a,{variant:"contained",sx:{my:3,ml:1,color:"#fff"},onClick:xe,color:"secondary",size:"large",children:"Cancel"})})]})]})})}var pe=a(633),Oe=Object(i.forwardRef)((function(e,t){return Object(Q.jsx)(F.a,Object(T.a)({direction:"up",ref:t},e))}));function ge(e){var t=e.open,a=e.setOpen,n=e.page,i=e.limit,c=e.search,s=e.type,o=e.nftData,j=e.categoryId,b=Object(l.a)(),m=Object(r.b)(),h=function(){a(!1)};return Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsxs)(k.a,{open:t,TransitionComponent:Oe,keepMounted:!0,onClose:h,"aria-labelledby":"alert-dialog-slide-title1","aria-describedby":"alert-dialog-slide-description1",children:[Object(Q.jsx)(S.a,{id:"alert-dialog-slide-title1",children:"Request Admin for mint"}),Object(Q.jsx)(w.a,{children:Object(Q.jsx)(pe.a,{id:"alert-dialog-slide-description1",children:Object(Q.jsx)(d.a,{variant:"body2",component:"span",children:"Are you sure you want to request Admin to mint this NFT?"})})}),Object(Q.jsxs)(V.a,{sx:{pr:2.5},children:[Object(Q.jsx)(u.a,{sx:{color:b.palette.error.dark,borderColor:b.palette.error.dark},onClick:h,color:"secondary",children:"No"}),Object(Q.jsx)(u.a,{variant:"contained",size:"large",onClick:function(){m(Object(H.k)({id:o.id,categoryId:j,page:n,limit:i,search:c,type:s,handleClose:h}))},children:"Yes"})]})]})})}var fe=Object(i.forwardRef)((function(e,t){return Object(Q.jsx)(F.a,Object(T.a)({direction:"up",ref:t},e))}));function ve(e){var t=e.nftInfo,a=e.categoryId,n=e.type,i=e.search,c=e.page,s=e.limit,o=(e.loader,e.setLoader,e.open),j=e.setOpen,b=Object(l.a)(),m=Object(r.b)(),h=function(){j(!1)};return Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsxs)(k.a,{open:o,TransitionComponent:fe,keepMounted:!0,onClose:h,"aria-labelledby":"alert-dialog-slide-title1","aria-describedby":"alert-dialog-slide-description1",children:[Object(Q.jsx)(S.a,{id:"alert-dialog-slide-title1",children:"Delete Brand Admin"}),Object(Q.jsx)(w.a,{children:Object(Q.jsx)(pe.a,{id:"alert-dialog-slide-description1",children:Object(Q.jsx)(d.a,{variant:"body2",component:"span",children:"Are you sure you want to delete this Admin?"})})}),Object(Q.jsxs)(V.a,{sx:{pr:2.5},children:[Object(Q.jsx)(u.a,{sx:{color:b.palette.error.dark,borderColor:b.palette.error.dark},onClick:h,color:"secondary",children:"No"}),Object(Q.jsx)(u.a,{variant:"contained",size:"large",onClick:function(){m(Object(H.b)({id:t.id,categoryId:a,type:n,page:c,limit:s,search:i,handleClose:h}))},children:"Yes"})]})]})})}var ye=function(e){var t=e.nftData,a=e.categoryId,c=e.search,s=e.page,l=e.limit,j=e.type,b=(Object(r.b)(),Object(i.useState)(!1)),m=Object(n.a)(b,2),h=m[0],x=m[1],p=Object(i.useState)(!1),O=Object(n.a)(p,2),g=O[0],f=O[1],v=Object(i.useState)(!1),y=Object(n.a)(v,2),N=y[0],T=y[1],C=Object(i.useState)(!1),D=Object(n.a)(C,2),F=D[0],k=D[1],S=Object(i.useState)([]),w=Object(n.a)(S,2),A=w[0],z=w[1],I=Object(i.useState)({id:null,nftName:"",nftDescription:"",nftPrice:0,mintType:"directMint",currencyType:"ETH",fieldDataArray:[],images:[]}),M=Object(n.a)(I,2),P=M[0],R=M[1];return Object(i.useEffect)((function(){var e=t.asset.split("/").length;z([{image:{name:t.asset.split("/")[e-1]},quantity:t.NFTTokens.length}])}),[t]),Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(ve,{nftInfo:P,categoryId:a,type:j,search:c,page:s,limit:l,loader:h,setLoader:x,open:F,setOpen:k}),Object(Q.jsx)(xe,{nftInfo:P,categoryId:a,type:j,search:c,page:s,limit:l,loader:h,setLoader:x,open:N,setOpen:T}),Object(Q.jsx)(ge,{nftData:t,categoryId:a,type:j,search:c,page:s,limit:l,loader:h,setLoader:x,open:g,setOpen:f}),Object(Q.jsxs)(ue,{content:!1,boxShadow:!0,sx:{position:"relative","&:hover":{transform:"scale3d(1.02, 1.02, 1)",transition:"all .4s ease-in-out"}},children:[Object(Q.jsx)(re.a,{sx:{height:220},image:t.asset}),Object(Q.jsx)(ce.a,{sx:{p:2},children:Object(Q.jsxs)(o.a,{container:!0,spacing:2,children:[Object(Q.jsx)(o.a,{item:!0,xs:9,children:Object(Q.jsx)(d.a,{variant:"subtitle1",sx:{textDecoration:"none"},children:t.name})}),Object(Q.jsx)(o.a,{item:!0,xs:12,mt:-1.5,children:Object(Q.jsx)(d.a,{variant:"body1",sx:{overflow:"hidden",height:30},children:t.description})}),Object(Q.jsxs)(o.a,{item:!0,xs:6,children:[Object(Q.jsx)(o.a,{item:!0,xs:12,children:Object(Q.jsxs)(d.a,{variant:"h6",children:[t.price," ",t.currencyType]})}),Object(Q.jsx)(o.a,{item:!0,xs:12,children:Object(Q.jsxs)(d.a,{variant:"h6",children:[t.NFTTokens.length," Items"]})})]}),Object(Q.jsxs)(o.a,{item:!0,xs:12,children:[Object(Q.jsxs)(se.a,{direction:"row",justifyContent:"end",alignItems:"center",children:["MINTED"!==t.status&&Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(u.a,{variant:"text",color:"primary",sx:{marginRight:"5px"},onClick:function(){T(!0),R({id:t.id,nftName:t.name,nftDescription:t.description,nftPrice:t.price,mintType:t.mintType,currencyType:t.currencyType,fieldDataArray:t.NFTMetaData,images:A})},children:Object(Q.jsx)(d.a,{style:{textDecoration:"underline"},children:" Edit NFT"})}),Object(Q.jsx)(u.a,{variant:"text",color:"primary",sx:{marginRight:"5px"},onClick:function(){k(!0),R({id:t.id,nftName:t.name,nftDescription:t.description,nftPrice:t.price,mintType:t.mintType,currencyType:t.currencyType,fieldDataArray:t.NFTMetaData,images:A})},children:Object(Q.jsx)(d.a,{style:{textDecoration:"underline"},children:" Delete NFT"})})]}),("DRAFT"==t.status||"REJECTED"==t.status)&&Object(Q.jsx)(u.a,{variant:"text",color:"primary",sx:{marginRight:"5px"},onClick:function(){f(!0)},children:Object(Q.jsx)(d.a,{style:{textDecoration:"underline"},children:" Request"})})]}),Object(Q.jsx)(se.a,{direction:"row",justifyContent:"end",alignItems:"center"})]})]})})]})]})},Ne=[{value:"all",label:"All NFT'S"},{value:"directMint",label:"Minted NFTS"},{value:"lazyMint",label:"Lazy Minted NFT'S"},{value:"waiting",label:"Waiting For approval"},{value:"draft",label:"Draft NFTS"},{value:"rejected",label:"Rejected NFTS"}];t.default=function(){var e=Object(l.a)(),t=Object(c.e)(),a=Object(c.d)(),x=Object(r.b)(),g=Object(r.c)((function(e){return e.nftReducer.nftList}));console.log("nftList",g);var f=Object(i.useState)("all"),v=Object(n.a)(f,2),y=v[0],N=v[1],T=Object(i.useState)(""),C=Object(n.a)(T,2),D=C[0],F=C[1],k=Object(i.useState)(1),S=Object(n.a)(k,2),w=S[0],A=S[1],z=Object(i.useState)(12),I=Object(n.a)(z,2),M=I[0],P=I[1],R=Object(i.useState)(!1),q=Object(n.a)(R,2),E=q[0],V=q[1],W=Object(i.useState)(null),B=Object(n.a)(W,2),Z=B[0],L=B[1],_=function(){L(null)};return Object(i.useEffect)((function(){x(Object(H.d)({categoryId:a.state.data.CategoryId,search:D,page:w,limit:M,type:y}))}),[,D,w,M,y]),Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(ie,{open:E,setOpen:V,data:a.state.data,search:D,page:w,limit:M,nftType:y}),Object(Q.jsx)(O.a,{className:"yellow",style:{marginBottom:"15px"},title:Object(Q.jsxs)(o.a,{container:!0,spacing:s.b,children:[Object(Q.jsx)(o.a,{item:!0,xs:3,children:Object(Q.jsx)(d.a,{variant:"h3",sx:{fontWeight:500,color:"cadetblue"},children:"NFT Management"})}),Object(Q.jsx)(o.a,{item:!0,xs:3,children:Object(Q.jsx)(j.a,{className:"selectField",id:"outlined-select-budget",select:!0,fullWidth:!0,label:"Select Type",value:y,onChange:function(e){N(e.target.value),P(12),F(""),A(1)},children:Ne.map((function(e,t){return Object(Q.jsx)(b.a,{value:e.value,children:e.label},t)}))})}),Object(Q.jsxs)(o.a,{item:!0,xs:6,style:{textAlign:"end"},children:[Object(Q.jsx)(u.a,{size:"small",sx:{marginRight:"10px",":hover":{boxShadow:"none"}},variant:"contained",onClick:function(){V(!0)},children:"Add NFT"}),Object(Q.jsx)(u.a,{variant:"contained",size:"small",onClick:function(){t("/categories")},children:"back"})]})]}),content:!1}),Object(Q.jsx)(o.a,{container:!0,children:g&&g.nfts&&g.nfts.rows&&g.nfts.rows.length>0?Object(Q.jsxs)(Q.Fragment,{children:[" ",Object(Q.jsx)(o.a,{container:!0,spacing:s.b,mb:4,pl:2,children:g.nfts.rows&&g.nfts.rows.map((function(e,t){return Object(Q.jsx)(o.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(Q.jsx)(ye,{nftData:e,categoryId:a.state.data.CategoryId,search:D,page:w,limit:M,type:y})},t)}))}),Object(Q.jsx)(o.a,{item:!0,xs:12,sx:{p:3},children:Object(Q.jsxs)(o.a,{container:!0,justifyContent:"space-between",spacing:s.b,children:[Object(Q.jsx)(o.a,{item:!0,children:Object(Q.jsx)(m.a,{page:w,color:"primary",showFirstButton:!0,showLastButton:!0,count:g&&g.pages,onChange:function(e,t){A(t)}})}),Object(Q.jsxs)(o.a,{item:!0,children:[Object(Q.jsxs)(u.a,{size:"large",sx:{color:e.palette.grey[900]},color:"secondary",endIcon:Object(Q.jsx)(p.a,{}),onClick:function(e){L(e.currentTarget)},children:[M," Rows"]}),Object(Q.jsxs)(h.a,{id:"menu-user-list-style1",anchorEl:Z,keepMounted:!0,open:Boolean(Z),onClose:_,variant:"selectedMenu",anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:"right"},children:[Object(Q.jsxs)(b.a,{value:12,onClick:function(e){P(e.target.value),A(1),_()},children:[" ","12 Rows"]}),Object(Q.jsxs)(b.a,{value:24,onClick:function(e){P(e.target.value),A(1),_()},children:[" ","24 Rows"]}),Object(Q.jsxs)(b.a,{value:36,onClick:function(e){P(e.target.value),A(1),_()},children:[" ","36 Rows"," "]})]})]})]})})]}):Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsx)(o.a,{item:!0,children:Object(Q.jsx)(d.a,{style:{padding:"20px"},children:" No Data Available"})})})})]})}}}]);
//# sourceMappingURL=32.51e045f8.chunk.js.map