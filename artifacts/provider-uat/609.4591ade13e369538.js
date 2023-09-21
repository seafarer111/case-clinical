"use strict";(self.webpackChunkprovider=self.webpackChunkprovider||[]).push([[609],{95609:(C,v,i)=>{i.r(v),i.d(v,{AuthResetPasswordModule:()=>Q});var e=i(30144),_=i(4859),f=i(59549),w=i(97392),y=i(44144),x=i(51572),b=i(73141),A=i(18413),P=i(23387),p=i(24006),Z=i(28746),T=i(7394);class k{static isEmptyInputValue(c){return null==c||0===c.length}static mustMatch(c,n){return d=>{const u=d.get(c),l=d.get(n);if(!u||!l||(l.hasError("mustMatch")&&(delete l.errors.mustMatch,l.updateValueAndValidity()),this.isEmptyInputValue(l.value)||u.value===l.value))return null;const g={mustMatch:!0};return l.setErrors(g),g}}}var r=i(94650),o=i(35483),h=i(29086),s=i(36895);const a=["resetPasswordNgForm"];function m(t,c){if(1&t&&(r.TgZ(0,"fuse-alert",41),r._uU(1),r.qZA()),2&t){const n=r.oxw();r.Q6J("appearance","outline")("showIcon",!1)("type",n.alert.type)("@shake","error"===n.alert.type),r.xp6(1),r.hij(" ",n.alert.message," ")}}function M(t,c){1&t&&r._UZ(0,"mat-icon",42),2&t&&r.Q6J("svgIcon","heroicons_solid:eye")}function R(t,c){1&t&&r._UZ(0,"mat-icon",42),2&t&&r.Q6J("svgIcon","heroicons_solid:eye-off")}function I(t,c){1&t&&r._UZ(0,"mat-icon",42),2&t&&r.Q6J("svgIcon","heroicons_solid:eye")}function U(t,c){1&t&&r._UZ(0,"mat-icon",42),2&t&&r.Q6J("svgIcon","heroicons_solid:eye-off")}function S(t,c){1&t&&(r.TgZ(0,"mat-error"),r._uU(1," Password confirmation is required "),r.qZA())}function O(t,c){1&t&&(r.TgZ(0,"mat-error"),r._uU(1," Passwords must match "),r.qZA())}function F(t,c){1&t&&(r.TgZ(0,"span"),r._uU(1," Reset your password "),r.qZA())}function J(t,c){1&t&&r._UZ(0,"mat-progress-spinner",43),2&t&&r.Q6J("diameter",24)("mode","indeterminate")}const E=function(){return["/sign-in"]},N=[{path:"",component:(()=>{class t{constructor(n,d){this._authService=n,this._formBuilder=d,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.resetPasswordForm=this._formBuilder.group({password:["",p.kI.required],passwordConfirm:["",p.kI.required]},{validators:k.mustMatch("password","passwordConfirm")})}resetPassword(){this.resetPasswordForm.invalid||(this.resetPasswordForm.disable(),this.showAlert=!1,this._authService.resetPassword(this.resetPasswordForm.get("password").value).pipe((0,Z.x)(()=>{this.resetPasswordForm.enable(),this.resetPasswordNgForm.resetForm(),this.showAlert=!0})).subscribe(n=>{this.alert={type:"success",message:"Your password has been reset."}},n=>{this.alert={type:"error",message:"Something went wrong, please try again."}}))}}return t.\u0275fac=function(n){return new(n||t)(r.Y36(o.e),r.Y36(p.qu))},t.\u0275cmp=r.Xpm({type:t,selectors:[["auth-reset-password"]],viewQuery:function(n,d){if(1&n&&r.Gf(a,5),2&n){let u;r.iGM(u=r.CRH())&&(d.resetPasswordNgForm=u.first)}},decls:66,vars:16,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.png"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"mt-0.5","font-medium"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["resetPasswordNgForm","ngForm"],[1,"w-full"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["id","password-confirm","matInput","","type","password",3,"formControlName"],["passwordConfirmField",""],[4,"ngIf"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-3",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","items-center","mt-8"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/avatars/female-18.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/female-11.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-09.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-16.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(n,d){if(1&n){const u=r.EpF();r.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),r._UZ(4,"img",4),r.qZA(),r.TgZ(5,"div",5),r._uU(6,"Reset your password"),r.qZA(),r.TgZ(7,"div",6),r._uU(8,"Create a new password for your account"),r.qZA(),r.YNc(9,m,2,5,"fuse-alert",7),r.TgZ(10,"form",8,9)(12,"mat-form-field",10)(13,"mat-label"),r._uU(14,"Password"),r.qZA(),r._UZ(15,"input",11,12),r.TgZ(17,"button",13),r.NdJ("click",function(){r.CHM(u);const g=r.MAs(16);return r.KtG(g.type="password"===g.type?"text":"password")}),r.YNc(18,M,1,1,"mat-icon",14),r.YNc(19,R,1,1,"mat-icon",14),r.qZA(),r.TgZ(20,"mat-error"),r._uU(21," Password is required "),r.qZA()(),r.TgZ(22,"mat-form-field",10)(23,"mat-label"),r._uU(24,"Password (Confirm)"),r.qZA(),r._UZ(25,"input",15,16),r.TgZ(27,"button",13),r.NdJ("click",function(){r.CHM(u);const g=r.MAs(26);return r.KtG(g.type="password"===g.type?"text":"password")}),r.YNc(28,I,1,1,"mat-icon",14),r.YNc(29,U,1,1,"mat-icon",14),r.qZA(),r.YNc(30,S,2,0,"mat-error",17),r.YNc(31,O,2,0,"mat-error",17),r.qZA(),r.TgZ(32,"button",18),r.NdJ("click",function(){return d.resetPassword()}),r.YNc(33,F,2,0,"span",17),r.YNc(34,J,1,2,"mat-progress-spinner",19),r.qZA(),r.TgZ(35,"div",20)(36,"span"),r._uU(37,"Return to"),r.qZA(),r.TgZ(38,"a",21),r._uU(39,"sign in "),r.qZA()()()()(),r.TgZ(40,"div",22),r.O4$(),r.TgZ(41,"svg",23)(42,"g",24),r._UZ(43,"circle",25)(44,"circle",26),r.qZA()(),r.TgZ(45,"svg",27)(46,"defs")(47,"pattern",28),r._UZ(48,"rect",29),r.qZA()(),r._UZ(49,"rect",30),r.qZA(),r.kcU(),r.TgZ(50,"div",31)(51,"div",32)(52,"div"),r._uU(53,"Welcome to"),r.qZA(),r.TgZ(54,"div"),r._uU(55,"our community"),r.qZA()(),r.TgZ(56,"div",33),r._uU(57," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),r.qZA(),r.TgZ(58,"div",34)(59,"div",35),r._UZ(60,"img",36)(61,"img",37)(62,"img",38)(63,"img",39),r.qZA(),r.TgZ(64,"div",40),r._uU(65," More than 17k people joined us, it's your turn "),r.qZA()()()()()}if(2&n){const u=r.MAs(16),l=r.MAs(26);r.xp6(9),r.Q6J("ngIf",d.showAlert),r.xp6(1),r.Q6J("formGroup",d.resetPasswordForm),r.xp6(5),r.Q6J("formControlName","password"),r.xp6(3),r.Q6J("ngIf","password"===u.type),r.xp6(1),r.Q6J("ngIf","text"===u.type),r.xp6(6),r.Q6J("formControlName","passwordConfirm"),r.xp6(3),r.Q6J("ngIf","password"===l.type),r.xp6(1),r.Q6J("ngIf","text"===l.type),r.xp6(1),r.Q6J("ngIf",d.resetPasswordForm.get("passwordConfirm").hasError("required")),r.xp6(1),r.Q6J("ngIf",d.resetPasswordForm.get("passwordConfirm").hasError("mustMatch")),r.xp6(1),r.Q6J("color","primary")("disabled",d.resetPasswordForm.disabled),r.xp6(1),r.Q6J("ngIf",!d.resetPasswordForm.disabled),r.xp6(1),r.Q6J("ngIf",d.resetPasswordForm.disabled),r.xp6(4),r.Q6J("routerLink",r.DdM(15,E))}},dependencies:[e.rH,_.lW,_.RK,f.KE,f.hX,f.TO,f.R9,w.Hw,y.Nt,x.Ou,h.W,s.O5,p._Y,p.Fj,p.JJ,p.JL,p.sg,p.u],encapsulation:2,data:{animation:T.L}}),t})()}];let Q=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[e.Bz.forChild(N),_.ot,f.lN,w.Ps,y.c,x.Cq,b.J,A.f,P.m]}),t})()},51572:(C,v,i)=>{i.d(v,{Cq:()=>r,Ou:()=>T});var e=i(94650),_=i(3238),f=i(21281),w=i(36895);const y=["determinateSpinner"];function x(o,h){if(1&o&&(e.O4$(),e.TgZ(0,"svg",11),e._UZ(1,"circle",12),e.qZA()),2&o){const s=e.oxw();e.uIk("viewBox",s._viewBox()),e.xp6(1),e.Udp("stroke-dasharray",s._strokeCircumference(),"px")("stroke-dashoffset",s._strokeCircumference()/2,"px")("stroke-width",s._circleStrokeWidth(),"%"),e.uIk("r",s._circleRadius())}}const b=(0,_.pj)(class{constructor(o){this._elementRef=o}},"primary"),A=new e.OlP("mat-progress-spinner-default-options",{providedIn:"root",factory:function P(){return{diameter:p}}}),p=100;let T=(()=>{class o extends b{constructor(s,a,m){super(s),this.mode="mat-spinner"===this._elementRef.nativeElement.nodeName.toLowerCase()?"indeterminate":"determinate",this._value=0,this._diameter=p,this._noopAnimations="NoopAnimations"===a&&!!m&&!m._forceAnimations,m&&(m.color&&(this.color=this.defaultColor=m.color),m.diameter&&(this.diameter=m.diameter),m.strokeWidth&&(this.strokeWidth=m.strokeWidth))}get value(){return"determinate"===this.mode?this._value:0}set value(s){this._value=Math.max(0,Math.min(100,(0,f.su)(s)))}get diameter(){return this._diameter}set diameter(s){this._diameter=(0,f.su)(s)}get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(s){this._strokeWidth=(0,f.su)(s)}_circleRadius(){return(this.diameter-10)/2}_viewBox(){const s=2*this._circleRadius()+this.strokeWidth;return`0 0 ${s} ${s}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return"determinate"===this.mode?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}}return o.\u0275fac=function(s){return new(s||o)(e.Y36(e.SBq),e.Y36(e.QbO,8),e.Y36(A))},o.\u0275cmp=e.Xpm({type:o,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(s,a){if(1&s&&e.Gf(y,5),2&s){let m;e.iGM(m=e.CRH())&&(a._determinateCircle=m.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:12,hostBindings:function(s,a){2&s&&(e.uIk("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow","determinate"===a.mode?a.value:null)("mode",a.mode),e.Udp("width",a.diameter,"px")("height",a.diameter,"px"),e.ekj("_mat-animation-noopable",a._noopAnimations)("mdc-circular-progress--indeterminate","indeterminate"===a.mode))},inputs:{color:"color",mode:"mode",value:"value",diameter:"diameter",strokeWidth:"strokeWidth"},exportAs:["matProgressSpinner"],features:[e.qOj],decls:14,vars:11,consts:[["circle",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["determinateSpinner",""],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(s,a){if(1&s&&(e.YNc(0,x,2,8,"ng-template",null,0,e.W1O),e.TgZ(2,"div",1,2),e.O4$(),e.TgZ(4,"svg",3),e._UZ(5,"circle",4),e.qZA()(),e.kcU(),e.TgZ(6,"div",5)(7,"div",6)(8,"div",7),e.GkF(9,8),e.qZA(),e.TgZ(10,"div",9),e.GkF(11,8),e.qZA(),e.TgZ(12,"div",10),e.GkF(13,8),e.qZA()()()),2&s){const m=e.MAs(1);e.xp6(4),e.uIk("viewBox",a._viewBox()),e.xp6(1),e.Udp("stroke-dasharray",a._strokeCircumference(),"px")("stroke-dashoffset",a._strokeDashOffset(),"px")("stroke-width",a._circleStrokeWidth(),"%"),e.uIk("r",a._circleRadius()),e.xp6(4),e.Q6J("ngTemplateOutlet",m),e.xp6(2),e.Q6J("ngTemplateOutlet",m),e.xp6(2),e.Q6J("ngTemplateOutlet",m)}},dependencies:[w.tP],styles:["@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}.mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color, transparent)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-1 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-2 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-3 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-4 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}"],encapsulation:2,changeDetection:0}),o})(),r=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[w.ez,_.BQ]}),o})()}}]);