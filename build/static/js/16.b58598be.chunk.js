(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[16],{455:function(e,t,a){"use strict";var n=a(361),i=a(435),c=a(426),r=a(157),s=a(445),l=a(689),d=a(39),j=a(0),o=a(72),b=a(1),u=Object(j.forwardRef)((function(e){var t=e.title,a=(e.role,e.value),j=e.setValue,u=e.options,x=Object(d.a)();return Object(b.jsx)(n.a,{sx:{marginBottom:x.spacing(o.b),borderColor:x.palette.primary[200]+75,background:x.palette.background.default},children:Object(b.jsx)(i.a,{sx:{padding:"13px 20px 22px 20px"},children:Object(b.jsxs)(c.a,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:o.b,children:[Object(b.jsx)(c.a,{item:!0,children:Object(b.jsx)(r.a,{variant:"h3",sx:{fontWeight:500,color:"#000"},children:t})}),void 0!==a&&Object(b.jsx)(c.a,{item:!0,children:Object(b.jsx)(s.a,{id:"standard-select-currency",select:!0,value:a,onChange:function(e){return j(e.target.value)},sx:{width:"110px",height:"40px"},children:u.map((function(e){return Object(b.jsx)(l.a,{value:e.value,children:e.label},e.value)}))})})]})})})}));t.a=u},669:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return re}));var n=a(18),i=a(0),c=a(32),r=(a(72),a(436)),s=a(426),l=(a(158),a(455)),d=a(243),j=a(31),o=a(361),b=a(450),u=a(362),x=a(643),m=a(157),O=a(1);function h(e){var t=e.asset,a=e.name,n=e.price,i=e.currencyType,c=e.description;return Object(O.jsxs)(o.a,{sx:{maxWidth:345},children:[Object(O.jsx)(x.a,{component:"img",height:"140",image:t}),Object(O.jsxs)(u.a,{children:[Object(O.jsx)(m.a,{gutterBottom:!0,variant:"h5",component:"div",children:a}),Object(O.jsxs)(m.a,{variant:"body2",color:"text.secondary",children:[Object(O.jsx)("b",{children:"Description: "})," ",c]}),Object(O.jsxs)(m.a,{variant:"body2",color:"text.secondary",children:[Object(O.jsx)("b",{children:"Price:"})," ",n," ",i]})]}),Object(O.jsx)(b.a,{children:Object(O.jsx)(r.a,{size:"small",children:"Details"})})]})}var g=a(6),p=a.n(g),f=a(159),v=a(25),y=a(5),C=a(459),T=a(460),F=a(39),N=a(404),k=a(678),A=a(679),S=a(680),D=a(445),w=a(448),z=a(424),R=a(421),I=a(689),V=a(435),B=a(644),M=a(439),q=a(442),P=a(412),_=a(410),E=a(443),W=a(454),Z=a(354),H=a(682),J=a.p+"static/media/image-upload.54137b05.svg",L=a(219),U=a(13),Q=a(642),$=a(676),G=a(187),K=a(637),X=a(638),Y=a(639),ee=(a(150),a(640)),te=a.n(ee);function ae(e){return te()(e).format("0.0 b")}var ne=function(e){var t=e.formik,a=e.fileArray,n=e.index;Object(c.b)();return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{style:{display:"flex",marginRight:"10px"},children:[Object(O.jsx)(m.a,{style:{marginTop:"12px",marginRight:"5px"},children:"Quantity : "}),Object(O.jsx)(D.a,{type:"number",className:"quantityField",id:"outlined-select-currency-native",value:a[n].quantity,onChange:function(e){var i;i=e.target.value,a[n].quantity=i,t.setFieldValue("images",a)}})]})})},ie=Object(i.forwardRef)((function(e,t){return Object(O.jsx)(N.a,Object(y.a)({direction:"up",ref:t},e))}));function ce(e){var t=e.addNftOpen,a=e.setAddNftOpen,l=Object(i.useState)("directMint"),d=Object(n.a)(l,2),j=d[0],o=d[1],b=Object(i.useState)([]),u=Object(n.a)(b,2),x=u[0],h=u[1],g=Object(i.useState)([]),N=Object(n.a)(g,2),ee=N[0],te=N[1],ce=Object(i.useState)([]),re=Object(n.a)(ce,2),se=re[0],le=re[1],de=Object(i.useState)([]),je=Object(n.a)(de,2),oe=je[0],be=je[1],ue=(Object(F.a)(),Object(c.b)(),T.a({name:T.c().required("Brand Name is required!").max(42,"Brand Name can not exceed 42 characters").matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/,"Invalid Brand name")}),Object(C.b)({enableReinitialize:!0,initialValues:{name:"",price:"",currency_type:"",description:"",images:[]},onSubmit:function(e){var t={mintType:j,name:e.name,price:e.price,currencyType:oe,description:e.description,image:e.images[0],fieldData:se};console.log("Formik onSubmit in addNft",t)}})),xe=ue.values.images.length>0,me=Object(i.useCallback)((function(e){var t=Object(v.a)(ee);e.map(function(){var e=Object(f.a)(p.a.mark((function e(a){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={image:a,quantity:1},t=[].concat(Object(v.a)(t),[n]);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),ue.setFieldValue("images",t),te(t)}),[ue.setFieldValue,ee]),Oe=Object(Q.a)({accept:".jpeg,.png,.jpg,.gif",onDrop:me}),he=Oe.getRootProps,ge=Oe.getInputProps,pe=Oe.isDragActive,fe=Oe.isDragReject,ve=Oe.isDragAccept;console.log("main fieldDataArray",se);return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(k.a,{style:{},open:t,TransitionComponent:ie,keepMounted:!0,"aria-labelledby":"alert-dialog-slide-title1","aria-describedby":"alert-dialog-slide-description1",children:[Object(O.jsx)(A.a,{id:"alert-dialog-slide-title1",children:"Add NFT"}),Object(O.jsxs)(S.a,{style:{width:"35rem"},children:[Object(O.jsxs)(s.a,{container:!0,spacing:2,sx:{ml:1,mb:2},children:[Object(O.jsx)(s.a,{item:!0,xs:4,children:Object(O.jsx)(r.a,{variant:"directMint"==j?"contained":"outlined",onClick:function(){o("directMint")},children:"Direct Mint"})}),Object(O.jsx)(s.a,{item:!0,xs:4,children:Object(O.jsx)(r.a,{variant:"lazyMint"==j?"contained":"outlined",onClick:function(){o("lazyMint")},children:"Lazy Minting"})})]}),Object(O.jsxs)("form",{autoComplete:"off",onSubmit:ue.handleSubmit,children:[Object(O.jsxs)(s.a,{container:!0,children:[Object(O.jsx)(s.a,{xs:5,children:Object(O.jsx)(D.a,{sx:{marginTop:"25px"},id:"name",name:"name",label:"NFT Name",value:ue.values.name,onChange:ue.handleChange,autoComplete:"given-name",variant:"standard"})}),Object(O.jsx)(s.a,{xs:3,children:Object(O.jsx)(D.a,{sx:{marginTop:"25px"},id:"price",name:"price",label:"NFT Price",onChange:ue.handleChange,variant:"standard"})}),Object(O.jsx)(s.a,{xs:4,children:Object(O.jsxs)(w.a,{fullWidth:!0,sx:{marginTop:"25px"},children:[Object(O.jsx)(z.a,{id:"demo-simple-select-label",children:"Currency Type"}),Object(O.jsxs)(R.a,{labelId:"demo-simple-select-label",id:"currencyType",name:"",onChange:function(e){var t=e.target.value;be(t)},children:[Object(O.jsx)(I.a,{value:"ETH",children:"ETH"}),Object(O.jsx)(I.a,{value:"USDT",children:"USDT"})]})]})})]}),Object(O.jsx)(D.a,{multiline:!0,rows:4,sx:{marginTop:"25px"},id:"description",name:"description",label:"Description",onChange:ue.handleChange,fullWidth:!0,variant:"standard"}),0!=x.length&&Object(O.jsx)(O.Fragment,{children:x.map((function(e,t){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(s.a,{container:!0,spacing:5,children:[Object(O.jsx)(s.a,{item:!0,xs:6,children:Object(O.jsx)(D.a,{sx:{marginTop:"25px",background:""},id:"field_name",name:"field_name",label:"Field Name",onChange:function(e){!function(e,t){var a=Object(v.a)(se);a[t].fieldName=e,le(a)}(e.target.value,t)},variant:"standard"})}),Object(O.jsx)(s.a,{item:!0,xs:6,children:Object(O.jsx)(D.a,{sx:{marginTop:"25px"},id:"field_value",name:"field_value",label:"Field Value",onChange:function(e){!function(e,t){var a=Object(v.a)(se);a[t].fieldValue=e,le(a)}(e.target.value,t)},variant:"standard"})})]})})}))}),Object(O.jsx)("div",{style:{height:"3rem"},children:Object(O.jsx)(r.a,{variant:"contained",sx:{float:"right",mt:3},onClick:function(){h([].concat(Object(v.a)(x),[1])),le([].concat(Object(v.a)(se),[{fieldName:"",fieldValue:""}]))},children:"Add Fields"})}),1!==ee.length&&Object(O.jsx)(s.a,{sx:{background:"#c5cbe9",borderRadius:"5px",paddingBottom:"2rem",paddingTop:"2rem"},item:!0,lg:12,mt:3,children:Object(O.jsx)("div",{className:Object(U.a)("dropZoneContainer","xyz"),children:Object(O.jsxs)("div",Object(y.a)(Object(y.a)({className:Object(U.a)("dropZone",{isDragActive:pe,isDragAccept:ve,isDragReject:fe})},he()),{},{children:[Object(O.jsx)("input",Object(y.a)({},ge())),Object(O.jsxs)(s.a,{container:!0,direction:"column",children:[Object(O.jsx)(V.a,{textAlign:"center",component:"img",alt:"Select File",src:J,sx:{height:60}}),Object(O.jsx)(V.a,{mt:4,textAlign:"center",sx:{ml:{md:0}},children:Object(O.jsxs)(m.a,{variant:"subtitle",sx:{color:"grey",textAlign:"center"},children:["Drop your image or\xa0",Object(O.jsx)(B.a,{underline:"always",children:"browse"}),".\xa0"]})})]})]}))})}),Object(O.jsx)(M.a,{disablePadding:!0,className:Object(U.a)({list:xe}),sx:{mt:3},children:Object(O.jsx)($.a,{children:ue.values.images&&ue.values.images.map((function(e,t){return Object(O.jsxs)(q.a,{component:G.a.div,className:"listItem",children:[Object(O.jsx)(P.a,{children:Object(O.jsx)(K.a,{icon:X.a,width:32,height:32})}),Object(O.jsx)(_.a,{primary:e.image.name?e.image.name:"",secondary:ae(e.image.size)?ae(e.image.size):"",primaryTypographyProps:{variant:"subtitle2"}}),Object(O.jsxs)(E.a,{style:{display:"flex"},children:[Object(O.jsx)(ne,{formik:ue,fileArray:ue.values.images,index:t}),Object(O.jsx)(W.a,{color:"error",edge:"end",size:"small",onClick:function(){return function(e,t){var a=Object(v.a)(ue.values.images);a.splice(t,1),te(a),ue.setFieldValue("images",a)}(e.image,t)},children:Object(O.jsx)(K.a,{icon:Y.a,width:28,height:28})})]})]},e.image.name)}))})})]})]}),Object(O.jsx)(Z.a,{}),Object(O.jsxs)(H.a,{sx:{pr:2.5},children:[Object(O.jsx)(L.a,{children:Object(O.jsx)(r.a,{type:"submit",variant:"contained",sx:{my:3,ml:1},onClick:function(){ue.handleSubmit()},size:"large",disableElevation:!0,children:"Add"})}),Object(O.jsx)(L.a,{children:Object(O.jsx)(r.a,{variant:"contained",sx:{my:3,ml:1,color:"#fff"},onClick:function(){a(!1),ue.resetForm()},color:"secondary",size:"large",children:"Cancel"})})]})]})})}function re(){var e=Object(i.useState)(1),t=Object(n.a)(e,2),a=t[0],o=(t[1],Object(i.useState)(10)),b=Object(n.a)(o,2),u=b[0],x=(b[1],Object(i.useState)([])),m=Object(n.a)(x,2),g=(m[0],m[1],Object(j.f)()),p=g.categoryName,f=g.categoryId,v=Object(i.useState)(!1),y=Object(n.a)(v,2),C=y[0],T=y[1],F=Object(c.b)(),N=Object(c.c)((function(e){return e.auth.user.brandId}));Object(i.useEffect)((function(){F(Object(d.a)({categoryId:f,brandId:N,page:a,size:u}))}),[a,u]);var k=Object(c.c)((function(e){return e.nftsByCategoryReducer.nftsByCategoryList}));return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(ce,{addNftOpen:C,setAddNftOpen:T}),Object(O.jsxs)("div",{children:[Object(O.jsx)(r.a,{variant:"contained",style:{float:"right"},onClick:function(){T(!0)},children:"Add NFT"}),Object(O.jsx)("h1",{children:"Categories"})]}),Object(O.jsx)(l.a,{title:p}),Object(O.jsx)(s.a,{container:!0,children:0==k.length?Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("h2",{children:"No NFTs yet."})}):Object(O.jsx)(O.Fragment,{children:k.map((function(e){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(h,{asset:e.asset,name:e.name,price:e.price,description:e.description,currencyType:e.currencyType})})}))})})]})}}}]);
//# sourceMappingURL=16.b58598be.chunk.js.map