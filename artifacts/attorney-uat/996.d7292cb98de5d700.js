"use strict";(self.webpackChunkattorney=self.webpackChunkattorney||[]).push([[996],{73141:(h,a,n)=>{n.d(a,{J:()=>l});var s=n(36895),c=n(94650);let l=(()=>{class e{}return e.\u0275fac=function(m){return new(m||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[s.ez]}),e})()},50996:(h,a,n)=>{n.r(a),n.d(a,{AuthSignOutModule:()=>M});var s=n(30144),c=n(4859),l=n(73141),e=n(23387),d=n(77579),m=n(82805),f=n(28746),x=n(22529),v=n(82722),p=n(18505),t=n(94650),A=n(35483),g=n(36895);function O(o,i){if(1&o&&(t.ynx(0),t._uU(1),t.ALo(2,"i18nPlural"),t.BQk()),2&o){const u=t.oxw();t.xp6(1),t.hij(" Redirecting in ",t.xi3(2,1,u.countdown,u.countdownMapping)," ")}}function S(o,i){1&o&&(t.ynx(0),t._uU(1," You are now being redirected! "),t.BQk())}const y=function(){return["/sign-in"]},C=[{path:"",component:(()=>{class o{constructor(u,r){this._authService=u,this._router=r,this.countdown=5,this.countdownMapping={"=1":"# second",other:"# seconds"},this._unsubscribeAll=new d.x}ngOnInit(){this._authService.signOut().subscribe(),(0,m.H)(1e3,1e3).pipe((0,f.x)(()=>{this._router.navigate(["sign-in"])}),(0,x.o)(()=>this.countdown>0),(0,v.R)(this._unsubscribeAll),(0,p.b)(()=>this.countdown--)).subscribe()}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}}return o.\u0275fac=function(u){return new(u||o)(t.Y36(A.e),t.Y36(s.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["auth-sign-out"]],decls:15,vars:4,consts:[[1,"flex","flex-col","flex-auto","items-center","sm:justify-center","min-w-0"],[1,"w-full","sm:w-auto","py-8","px-4","sm:p-12","sm:rounded-2xl","sm:shadow","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-full","px-2"],["src","assets/images/logo/auth_logo.png"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight","text-center"],[1,"flex","justify-center","mt-0.5","font-medium"],[4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary","text-center"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"]],template:function(u,r){1&u&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5),t._uU(6," You have signed out! "),t.qZA(),t.TgZ(7,"div",6),t.YNc(8,O,3,4,"ng-container",7),t.YNc(9,S,2,0,"ng-container",7),t.qZA(),t.TgZ(10,"div",8)(11,"span"),t._uU(12,"Go to"),t.qZA(),t.TgZ(13,"a",9),t._uU(14,"sign in "),t.qZA()()()()()),2&u&&(t.xp6(8),t.Q6J("ngIf",r.countdown>0),t.xp6(1),t.Q6J("ngIf",0===r.countdown),t.xp6(4),t.Q6J("routerLink",t.DdM(3,y)))},dependencies:[s.rH,g.O5,g.Gx],encapsulation:2}),o})()}];let M=(()=>{class o{}return o.\u0275fac=function(u){return new(u||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.Bz.forChild(C),c.ot,l.J,e.m]}),o})()}}]);