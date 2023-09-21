"use strict";(self.webpackChunkprovider=self.webpackChunkprovider||[]).push([[552],{31552:(y,v,s)=>{s.r(v),s.d(v,{FirmRegisterModule:()=>L});var n=s(36895),u=s(30144),b=s(34643),T=s(57267),F=s(70655),d=s(24280),S=s(54004),p=s(18505),c=s(63900),e=s(94650),C=s(73602);let D=(()=>{class o extends d.m1{constructor(t,r,m){super({loading:!1}),this.data=t,this.router=r,this.route=m,this.errors$=this.select(i=>i.errors),this.loading$=this.select(i=>i.loading),this.item$=this.select(i=>i.item),this.firmStatuses$=this.select(i=>i.firmStatuses||[]),this.documents$=this.select(i=>i.documents||[]),this.vm$=this.select(this.errors$,this.loading$,this.item$,this.firmStatuses$,this.documents$,(i,a,l,g,f)=>({errors:i,loading:a,item:l,firmStatuses:g,documents:f}),{debounce:!0}),this.filterFirmStatuses=i=>this.data.userFirmStatuses({input:{name:i}}).pipe((0,d._b)(a=>{let l=a.data.items;return this.patchState({firmStatuses:l}),l},a=>this.patchState({errors:a.graphQLErrors?a.graphQLErrors:a})),(0,S.U)(a=>a.data.items)),this.addFirmStatus=this.updater((i,a)=>Object.assign(Object.assign({},i),{firmStatuses:i.firmStatuses.concat(a)})),this.addDocument=this.updater((i,a)=>Object.assign(Object.assign({},i),{documents:i.documents.concat(a)})),this.createFirmEffect=this.effect(i=>i.pipe((0,p.b)(()=>this.patchState({loading:!0})),(0,c.w)(a=>this.data.userCreateFirm({input:a}).pipe((0,d._b)(l=>{var g,f;return this.patchState({item:l.data.created,errors:l.errors,loading:!1}),this.router.navigate(["..",null===(f=null===(g=l.data)||void 0===g?void 0:g.created)||void 0===f?void 0:f.id],{relativeTo:this.route})},l=>this.patchState({loading:!1,errors:l.graphQLErrors?l.graphQLErrors:l}))))))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(C.q),e.LFG(u.F0),e.LFG(u.gz))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac}),o})();var x=s(12138),E=s(61135),O=s(80529),W=s(71873),M=s(34077);function $(o,h){if(1&o){const t=e.EpF();e.TgZ(0,"div",8)(1,"ui-button",9),e.NdJ("click",function(m){e.CHM(t);const i=e.oxw(2);return e.KtG(i.handleDiscardClick(m))}),e.qZA()()}}function _(o,h){if(1&o&&e._UZ(0,"ui-card-header",10),2&o){e.oxw();const t=e.MAs(4);e.Q6J("title","Create New")("controlsTemplate",t)}}function P(o,h){1&o&&(e.TgZ(0,"div",11),e.GkF(1),e.qZA())}function A(o,h){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",1)(2,"div",2),e.YNc(3,$,2,0,"ng-template",null,3,e.W1O),e.YNc(5,_,1,2,"ng-template",null,4,e.W1O),e.YNc(7,P,2,0,"ng-template",null,5,e.W1O),e.TgZ(9,"ui-panel",6)(10,"ui-form",7),e.NdJ("submitForm",function(m){e.CHM(t);const i=e.oxw();return e.KtG(i.createIntake(m))}),e.qZA()()()(),e.BQk()}if(2&o){const t=e.MAs(6),r=e.MAs(8),m=e.oxw();e.xp6(9),e.Q6J("headerTemplate",t)("footerTemplate",r),e.xp6(1),e.Q6J("fields",m.steps)("model",m.model)("options",m.options)}}let U=(()=>{class o{constructor(t,r,m,i,a,l){this.store=t,this.data=r,this.router=m,this.route=i,this.http=a,this.toast=l,this.vm$=this.store.vm$,this.firmStatuses$=this.store.firmStatuses$,this.pageTitle="Register",this.signatureDoc="",this.signatureDoc$=new E.X(this.signatureDoc),this.errors=null,this.canProgress=!1,this.alert={type:"success",message:""},this.showAlert=!1,this.model={},this.options={formState:{mainModel:this.model}},this.fields=[{key:"registrantSignature",type:"file-viewer",templateOptions:{label:"Please Sign",document$:this.signatureDoc$,signatureBoxName:"txSign",ownerName:"PCH",signerName:"",signerInitials:"",documentSubmit:g=>{console.log("signature",g)}},hooks:{afterViewChecked:()=>{setTimeout(()=>{console.log("in the afterViewChecked",TXDocumentViewer),this.GetTemplate("EULA")},100)},onDestroy:()=>{null!==document.getElementById("txViewer")&&typeof TXDocumentViewer<"u"&&(console.log("in the destroy",TXDocumentViewer),TXDocumentViewer)}}}]}ngOnDestroy(){null!==document.getElementById("txViewer")&&typeof TXDocumentViewer<"u"&&(console.log("in the destroy",TXDocumentViewer),TXDocumentViewer)}handleDiscardClick(t){t?.preventDefault(),this.router.navigate([".."],{relativeTo:this.route})}createFirm(t){""!=this.parentFirmStatusId&&(t=Object.assign(Object.assign({},t),{firmStatusId:this.parentFirmStatusId})),this.store.createFirmEffect(t)}submit(){return(0,F.mG)(this,void 0,void 0,function*(){yield this.register(this.model)})}register(t){return(0,F.mG)(this,void 0,void 0,function*(){const{name:r}=t;this.model.eula.name=""===r||null==r?"Firm EULA":r+"Firm EULA",yield this.store.createFirmEffect(t)})}checkDocumentViewer(){null!==TXDocumentViewer&&(console.log("hit the check"),TXDocumentViewer.init({containerID:"txViewer",viewerSettings:{signatureSettings:this.GetSignatureSettingsForUser(),userNames:[],dock:1,documentData:this.signatureDoc,documentPath:"test.docx",toolbarDocked:!0,isSelectionActivated:!0,showThumbnailPane:!0,resources:null,basePath:"https://documentserver.caseclinical.com:443/MemberOnboarding"}}),TXDocumentViewer.setSubmitCallback(this.documentSubmit.bind(this)))}documentSubmit(t){console.log("hit the submit"),this.http.post("https://documentserver.caseclinical.com:443/MemberOnboarding/DownloadPdf",{document:t.document}).subscribe(m=>{let i={name:this.model.name,encoding:"PDF",attachment:m.document,extension:".pdf"};return this.toast.success("Signature received, move to next step"),this.toggleProgress(!0),this.model.eula=i})}GetSignatureSettingsForUser(){var t;return{ownerName:"PCH",signatureBoxName:"txSign",signerName:null===(t=this.model)||void 0===t?void 0:t.name,signerInitials:"",showSignatureBar:!0}}GetTemplate(t){return this.data.userTemplate({templateId:t}).pipe((0,d._b)(r=>{console.log(r.data),this.signatureDoc=r.data.item.attachment},r=>console.log(r)),(0,p.b)(r=>this.http.post("https://documentserver.caseclinical.com:443/MemberOnboarding/MergeRawStringDocument",{data:JSON.stringify(this.model),template:this.signatureDoc}).subscribe(i=>{let a=i.document;return this.signatureDoc=a,this.signatureDoc$.next(this.signatureDoc),this.checkDocumentViewer(),this.toggleProgress(!1),a}))).subscribe()}toggleProgress(t){this.canProgress=t}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(D),e.Y36(C.q),e.Y36(u.F0),e.Y36(u.gz),e.Y36(O.eN),e.Y36(W.F))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],features:[e._Bn([D,{provide:x.gx,useValue:{showError:!0}}])],decls:2,vars:3,consts:[[4,"ngIf"],[1,"inset-0","absolute","overflow-y-auto"],[1,"p-2","md:p-4"],["controlsTemplate",""],["headerTemplate",""],["footerTemplate",""],[1,"",3,"headerTemplate","footerTemplate"],[3,"fields","model","options","submitForm"],[1,"px-6","space-x-3"],["label","Discard","variant","white",3,"click"],[3,"title","controlsTemplate"],[1,"flex","items-center","justify-end","pt-3","pb-6","dark:bg-transparent"]],template:function(t,r){1&t&&(e.YNc(0,A,11,5,"ng-container",0),e.ALo(1,"async")),2&t&&e.Q6J("ngIf",e.lcZ(1,1,r.vm$))},dependencies:[n.O5,M.a,n.Ov],encapsulation:2}),o})();var V=s(10265),N=s(70383),w=s(24006);const I=[{path:"",component:U}];let L=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[n.ez,V.t,w.u5,w.UX,N.L,u.Bz.forChild(I),T.I,b.z]}),o})()},34077:(y,v,s)=>{s.d(v,{a:()=>F});var n=s(94650),u=s(24006),b=s(49821);const T=["*"];let F=(()=>{class d{constructor(p){this.builder=p,this.fields=[],this.form=new u.cw({}),this.model={},this.options={},this.submitForm=new n.vpe}ngOnInit(){this.builder.buildForm(this.form,this.fields,this.model,this.options)}submit(){this.submitForm.emit(this.model)}}return d.\u0275fac=function(p){return new(p||d)(n.Y36(b.J8))},d.\u0275cmp=n.Xpm({type:d,selectors:[["ui-form"]],inputs:{fields:"fields",form:"form",model:"model",options:"options"},outputs:{submitForm:"submitForm"},ngContentSelectors:T,decls:6,vars:6,consts:[["novalidate","",1,"w-full",3,"formGroup","ngSubmit"],[3,"fields","form","model","options"],["type","submit",2,"display","none",3,"disabled"]],template:function(p,c){1&p&&(n.F$t(),n.TgZ(0,"form",0),n.NdJ("ngSubmit",function(){return c.submitForm.emit(c.model)}),n.TgZ(1,"div"),n._UZ(2,"formly-form",1),n.TgZ(3,"button",2),n._uU(4,"submit"),n.qZA()(),n.Hsn(5),n.qZA()),2&p&&(n.Q6J("formGroup",c.form),n.xp6(2),n.Q6J("fields",c.fields)("form",c.form)("model",c.model)("options",c.options),n.xp6(1),n.Q6J("disabled",c.form.touched&&!c.form.valid))},dependencies:[b.T7,u._Y,u.JL,u.sg],encapsulation:2,changeDetection:0}),d})()}}]);