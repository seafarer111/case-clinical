"use strict";(self.webpackChunkpatient=self.webpackChunkpatient||[]).push([[274],{51645:(J,V,c)=>{c.d(V,{oBD:()=>I,vhO:()=>k});var t=c(89177);function I(h,C,o=0){const w=Number.parseFloat(h),N=w.toFixed(o);return isNaN(w)?"":C+`${N.replace(/\B(?=(\d{3})+(?!\d))/g,",")}`}function k(h){if(console.log({dateFormatter:h}),!h)return"";if((0,t.HD)(h)&&0===h.trim().length)return;const C=new Date(h);console.log({date:C});const o=C.getUTCDate().toString().padStart(2,"0");return`${(C.getUTCMonth()+1).toString().padStart(2,"0")}/${o}/${C.getUTCFullYear().toString()}`}c(15439)},26244:(J,V,c)=>{c.d(V,{x:()=>X});var t=c(69575),s=c(94650),h=(()=>{return(r=h||(h={}))[r.VISIBLE=0]="VISIBLE",r[r.NAME=1]="NAME",r[r.ALL=2]="ALL",h;var r})(),C=(()=>{return(r=C||(C={}))[r.CSV=0]="CSV",r[r.EXCEL=1]="EXCEL",C;var r})(),o=(()=>{return(r=o||(o={}))[r.NORMAL=0]="NORMAL",r[r.ISO=1]="ISO",r[r.POSIX=2]="POSIX",o;var r})(),w=(()=>{return(r=w||(w={}))[r.DATE_ONLY=0]="DATE_ONLY",r[r.HH_MM=1]="HH_MM",r[r.HH_MM_SS=2]="HH_MM_SS",r[r.HH_MM_SS_SSSXXX=3]="HH_MM_SS_SSSXXX",w;var r})(),W=c(51645),U=c(77579);let G=(()=>{class r{agInit(i){this.params=i}}return r.\u0275fac=function(i){return new(i||r)},r.\u0275cmp=s.Xpm({type:r,selectors:[["app-checkbox-renderer"]],decls:1,vars:2,consts:[["type","checkbox",3,"checked","disabled"]],template:function(i,l){1&i&&s._UZ(0,"input",0),2&i&&s.Q6J("checked",l.params.value)("disabled",!0)},encapsulation:2}),r})();var R=c(12282),P=c(2611),L=c(36895);function K(r,_){if(1&r){const i=s.EpF();s.TgZ(0,"ag-grid-angular",3),s.NdJ("firstDataRendered",function(){s.CHM(i);const e=s.oxw(2);return s.KtG(e.onFirstDataRendered())})("selectionChanged",function(e){s.CHM(i);const n=s.oxw(2);return s.KtG(n.onSelectionChanged(e))})("gridReady",function(e){s.CHM(i);const n=s.oxw(2);return s.KtG(n.onGridReady(e))}),s.qZA()}if(2&r){const i=_.ngIf,l=s.oxw(2);s.Q6J("ngClass",i)("columnDefs",l.columnDefs)("defaultColDef",l.defaultColDef)("autoGroupColumnDef",l.autoGroupColumnDef)("rowData",l.data)("animateRows",!0)("groupDefaultExpanded",0)("pagination",l.pagination)("paginationAutoPageSize",l.pagination)("groupSelectsChildren",!0)("suppressRowClickSelection",!0)("domLayout",l.autoHeight?"autoHeight":"")("modules",l.modules)("gridOptions",l.gridOptions)("statusBar",l.statusBar)("enableRangeSelection",!0)}}function $(r,_){if(1&r&&(s.ynx(0),s.YNc(1,K,1,16,"ag-grid-angular",2),s.ALo(2,"async"),s.BQk()),2&r){const i=s.oxw();s.xp6(1),s.Q6J("ngIf",s.lcZ(2,1,i.agGridClassName))}}function j(r,_){if(1&r){const i=s.EpF();s.TgZ(0,"ag-grid-angular",5),s.NdJ("sortChanged",function(e){s.CHM(i);const n=s.oxw(2);return s.KtG(n.onSortChanged(e))})("filterChanged",function(e){s.CHM(i);const n=s.oxw(2);return s.KtG(n.onFilterChanged(e))})("firstDataRendered",function(){s.CHM(i);const e=s.oxw(2);return s.KtG(e.onFirstDataRendered())})("selectionChanged",function(e){s.CHM(i);const n=s.oxw(2);return s.KtG(n.onSelectionChanged(e))})("gridReady",function(e){s.CHM(i);const n=s.oxw(2);return s.KtG(n.onGridReady(e))}),s.qZA()}if(2&r){const i=_.ngIf,l=s.oxw(2);s.Tol(l.getClasses),s.Q6J("domLayout",l.autoHeight?"autoHeight":"")("ngClass",i)("rowData",l.data)("columnDefs",l.columnDefs)("modules",l.modules)("sideBar",l.showSidebar?l.sideBar:null)("excelStyles",l.excelStyles)("animateRows",!0)("pagination",l.pagination)("paginationAutoPageSize",l.pagination)("suppressRowClickSelection",l.suppressRowClickSelection)("frameworkComponents",l.frameworkComponents)("defaultColDef",l.defaultColDef)("gridOptions",l.gridOptions)("statusBar",l.statusBar)("enableRangeSelection",!0)}}function B(r,_){if(1&r&&(s.YNc(0,j,1,19,"ag-grid-angular",4),s.ALo(1,"async")),2&r){const i=s.oxw();s.Q6J("ngIf",s.lcZ(1,1,i.agGridClassName))}}let X=(()=>{class r{constructor(i){this.configService=i,this.autoHeight=!1,this.pagination=!1,this.treeMode=!1,this.autogroupField="name",this.suppressRowClickSelection=!1,this.floatingFilter=!0,this.customFrameworkComponents=null,this.showSidebar=!0,this.itemDidSelect=new s.vpe,this.selectionDidChange=new s.vpe,this.firstDataDidRender=new s.vpe,this.filteredData=new s.vpe,this.checkBoxSelection=!1,this.rowSelection="multiple",this.statusBar={statusPanels:[{statusPanel:"agAggregationComponent"}]},this._unsubscribeAll=new U.x,this.isExporting=!1,this.modules=t.pzT,this.autoGroupColumnDef={headerName:"Feature Permissions",minWidth:80,field:"permission",headerCheckboxSelection:!0,cellRenderer:"agGroupCellRenderer",cellRendererParams:{suppressCount:!0,checkbox:!0}},this.excelStyles=[{id:"dateTime",dataType:"DateTime",numberFormat:{format:"mm/dd/yy"}}],this.sideBar={toolPanels:[{id:"columns",labelDefault:"Columns",labelKey:"columns",iconKey:"columns",toolPanel:"agColumnsToolPanel",minWidth:225,width:225,maxWidth:225},{id:"filters",labelDefault:"Filters",labelKey:"filters",iconKey:"filter",toolPanel:"agFiltersToolPanel",minWidth:180,maxWidth:400,width:250}],position:"right",defaultToolPanel:"none"},this.frameworkComponents={checkboxRenderer:G},this.agGridClassName=this.configService.agGridClassName$,this.checkBoxSelected=!1}ngOnInit(){this.gridOptions={onCellClicked:this.onCellClicked.bind(this)},this.customFrameworkComponents&&(this.frameworkComponents=Object.assign(Object.assign({},this.frameworkComponents),this.customFrameworkComponents)),this.defaultColDef={flex:1,minWidth:200,floatingFilter:this.floatingFilter,hide:!1,resizable:!0,sortable:!0},null===this.showSidebar&&(this.showSidebar=!0),this.columnDefs.length>0&&(this.columnDefs=this.columnDefs.map((i,l)=>{let e=i;return"agDateColumnFilter"===i.filter&&(e=Object.assign(Object.assign({},i),{cellClass:"dateTime",valueFormatter:n=>(0,W.vhO)(n.data[i.field]),filterParams:{comparator:(n,u)=>{if(null==u)return-1;const T=u.split(/[/|-]/),y=new Date(Number(T[0]),Number(T[1])-1,Number(T[2]));return n.getTime()===y.getTime()?0:y<n?-1:y>n?1:0}}})),0==l&&this.checkBoxSelection&&(e=Object.assign(Object.assign({},e),{headerCheckboxSelection:!0,checkboxSelection:!0})),e}))}onCellClicked(i){console.log(i),this.checkBoxSelected=!0}get getClasses(){return 5==this.columnDefs.length?"w-full h-full hideHorizontalScrollbar":"w-full h-full"}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}onSelectionChanged(i){const l=this.gridApi.getSelectedRows();this.checkBoxSelected?(this.itemDidSelect.emit(l[0]),this.selectionDidChange.emit(l),i.api.deselectAll()):this.selectionDidChange.emit(l),this.checkBoxSelected=!1}onGridReady(i){this.gridApi=i.api,this.gridColumnApi=i.columnApi,this.defaultFilterStates=this.gridApi.getFilterModel()}onSortChanged({}){console.log("Table View: onSortChanged")}onFilterChanged({}){this.filteredData.emit(this.gridApi.getDisplayedRowCount())}onFirstDataRendered(){this.firstDataDidRender.emit()}setFilterState(i){this.gridApi.setFilterModel(i||this.defaultFilterStates)}setColumnState(i){this.gridApi.setColumnDefs(i||this.columnDefs)}getTableViewState(){return{columnDefs:this.gridApi.getColumnDefs(),filterState:this.gridApi.getFilterModel()}}getImportColumns(){const i={},l={agTextColumnFilter:"string",agNumberColumnFilter:"number",agDateColumnFilter:"date",agSetColumnFilter:"set"};let e=0,n=[...Array(26).keys()].map((y,b)=>String.fromCharCode(b+65));const u=[...Array(26).keys()].map((y,b)=>"A"+String.fromCharCode(b+65)),g=[...Array(26).keys()].map((y,b)=>"B"+String.fromCharCode(b+65)),T=[...Array(26).keys()].map((y,b)=>"C"+String.fromCharCode(b+65));return n=n.concat(u),n=n.concat(g),n=n.concat(T),this.columnDefs.map(y=>{if(e>=n.length)return;const b=String(y.filter);i[n[e]]={field:y.field,type:l[b],headerName:y.headerName||null},e++}),i}exportTableView(i){if(this.isExporting)return;this.isExporting=!0;const l={};switch(i.columnOption){case h.ALL:l.allColumns=!0;break;case h.NAME:l.columnKeys=["name","Name"]}let n,e="";switch(i.timeFormat){case w.DATE_ONLY:e="";break;case w.HH_MM:e="hh:mm";break;case w.HH_MM_SS:e="hh:mm:ss";break;case w.HH_MM_SS_SSSXXX:e="hh:mm:ss.sssxxx"}switch(i.dateFormat){case o.NORMAL:n=""===e?"mm/dd/yyy":`mm/dd/yyy ${e}`;break;case o.ISO:n="yyy-mm-ddThh:mm:ss";break;default:n=""}this.excelStyles=[{id:"dateTime",dataType:"DateTime",numberFormat:{format:n}}],setTimeout(()=>{i.fileFormat===C.EXCEL?this.gridApi.exportDataAsExcel(Object.assign(Object.assign({},l),{fileName:i.fileName})):this.gridApi.exportDataAsCsv(Object.assign(Object.assign({},l),{fileName:i.fileName})),this.isExporting=!1},500)}}return r.\u0275fac=function(i){return new(i||r)(s.Y36(R.m))},r.\u0275cmp=s.Xpm({type:r,selectors:[["table-view"]],inputs:{autoHeight:"autoHeight",pagination:"pagination",treeMode:"treeMode",autogroupField:"autogroupField",suppressRowClickSelection:"suppressRowClickSelection",floatingFilter:"floatingFilter",data:"data",customFrameworkComponents:"customFrameworkComponents",showSidebar:"showSidebar",columnDefs:"columnDefs",checkBoxSelection:"checkBoxSelection"},outputs:{itemDidSelect:"itemDidSelect",selectionDidChange:"selectionDidChange",firstDataDidRender:"firstDataDidRender",filteredData:"filteredData"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["defaultGrid",""],["class","w-full h-full","rowSelection","multiple",3,"ngClass","columnDefs","defaultColDef","autoGroupColumnDef","rowData","animateRows","groupDefaultExpanded","pagination","paginationAutoPageSize","groupSelectsChildren","suppressRowClickSelection","domLayout","modules","gridOptions","statusBar","enableRangeSelection","firstDataRendered","selectionChanged","gridReady",4,"ngIf"],["rowSelection","multiple",1,"w-full","h-full",3,"ngClass","columnDefs","defaultColDef","autoGroupColumnDef","rowData","animateRows","groupDefaultExpanded","pagination","paginationAutoPageSize","groupSelectsChildren","suppressRowClickSelection","domLayout","modules","gridOptions","statusBar","enableRangeSelection","firstDataRendered","selectionChanged","gridReady"],["rowSelection","multiple",3,"class","domLayout","ngClass","rowData","columnDefs","modules","sideBar","excelStyles","animateRows","pagination","paginationAutoPageSize","suppressRowClickSelection","frameworkComponents","defaultColDef","gridOptions","statusBar","enableRangeSelection","sortChanged","filterChanged","firstDataRendered","selectionChanged","gridReady",4,"ngIf"],["rowSelection","multiple",3,"domLayout","ngClass","rowData","columnDefs","modules","sideBar","excelStyles","animateRows","pagination","paginationAutoPageSize","suppressRowClickSelection","frameworkComponents","defaultColDef","gridOptions","statusBar","enableRangeSelection","sortChanged","filterChanged","firstDataRendered","selectionChanged","gridReady"]],template:function(i,l){if(1&i&&(s.YNc(0,$,3,3,"ng-container",0),s.YNc(1,B,2,3,"ng-template",null,1,s.W1O)),2&i){const e=s.MAs(2);s.Q6J("ngIf",l.treeMode)("ngIfElse",e)}},dependencies:[P.N8,L.mk,L.O5,L.Ov],styles:[".hideHorizontalScrollbar .ag-body-horizontal-scroll-viewport::-webkit-scrollbar{display:none}  .ag-cell{display:flex;align-items:center}  .ag-cell checkbox-renderer input[type=checkbox]{margin-top:0;margin-bottom:2px}  .ag-cell app-checkbox-renderer input[type=checkbox]{margin-top:0;margin-bottom:4px}"]}),r})()},55274:(J,V,c)=>{c.d(V,{u:()=>x});var t=c(2611),s=c(36895),E=c(49821),I=c(4859),k=c(44850),F=c(97392),h=c(28255),C=c(77437),o=c(94650),w=c(15909),N=c(26244);let W=(()=>{class d{constructor(){this.tableViewConfigs=[],this.itemDidSelect=new o.vpe,this.columnDefs=[{field:"id",filter:"agTextColumnFilter",hide:!0},{field:"name",filter:"agTextColumnFilter"}]}onSelected(p){console.log("table-view-config-table-view: onSelected, value = ",p),this.itemDidSelect.emit(p)}}return d.\u0275fac=function(p){return new(p||d)},d.\u0275cmp=o.Xpm({type:d,selectors:[["ui-table-view-config-table-view"]],inputs:{tableViewConfigs:"tableViewConfigs"},outputs:{itemDidSelect:"itemDidSelect"},decls:1,vars:2,consts:[[1,"w-full","h-full",3,"data","columnDefs","itemDidSelect"]],template:function(p,f){1&p&&(o.TgZ(0,"table-view",0),o.NdJ("itemDidSelect",function(m){return f.onSelected(m)}),o.qZA()),2&p&&o.Q6J("data",f.tableViewConfigs)("columnDefs",f.columnDefs)},dependencies:[N.x],encapsulation:2}),d})();var U=c(70655),G=c(24006),R=c(75886),P=c(24280),L=c(11365),K=c(63900),$=c(73602),j=c(71873);let B=(()=>{class d extends P.m1{constructor(p,f){super({tableName:""}),this.webApiService=p,this.toast=f,this.currentViewId$=this.select(a=>a.currentViewId),this.settingId$=this.select(a=>null!==a.currentViewId&&a.currentViewId>=0?a.views[a.currentViewId].settingId:null),this.settingName$=this.select(a=>null!==a.currentViewId&&a.currentViewId>=0?a.views[a.currentViewId].settingName:null),this.viewName$=this.select(a=>{var m;return null!==a.currentViewId&&a.currentViewId>=0?null===(m=a.views[a.currentViewId].viewSetting)||void 0===m?void 0:m.viewName:null}),this.tableName$=this.select(a=>a.tableName),this.views$=this.select(a=>a.views),this.filterSettings$=this.select(a=>{var m;return null!==a.currentViewId&&a.currentViewId>=0?null===(m=a.views[a.currentViewId].viewSetting)||void 0===m?void 0:m.filterSettings:null}),this.exportName$=this.select(this.viewName$,this.tableName$,(a,m)=>{try{return a??m.split("-")[0]}catch{return m}}),this.columnDefs$=this.select(this.currentViewId$,this.views$,(a,m)=>{var v;return null!==a&&a>=0?null===(v=m[a].viewSetting)||void 0===v?void 0:v.columnDefs:null}),this.viewNames$=this.select(a=>a.views?a.views.map((m,v)=>({id:v,name:m.viewSetting.viewName})):[]),this.vm$=this.select(this.viewNames$,this.filterSettings$,this.columnDefs$,(a,m,v)=>({viewNames:a,filterSettings:m,columnDefs:v})),this.addView=this.updater((a,m)=>{const v=a.views?Object.assign(a.views):[];return m.viewName.trim().length<2?a:""===m.viewName.trim()?(this.toast.error("View name is blank.",{duration:3e3}),a):v.find(O=>{var M;return(null===(M=O?.viewSetting)||void 0===M?void 0:M.viewName.toLowerCase())===m.viewName.trim().toLowerCase()})?(this.toast.error("View with the same name exists",{duration:3e3}),a):(v.push({settingId:"",settingName:a.tableName+"_view_"+m.viewName,viewSetting:{viewName:m.viewName,filterSettings:null,columnDefs:null}}),this.toast.success("Successfully created new view",{duration:3e3}),m.resultEmitter.emit({id:a.views.length-1,name:m.viewName}),Object.assign(Object.assign({},a),{views:v,currentViewId:a.views.length-1}))}),this.editView=this.updater((a,m)=>{const v=a.views?Object.assign(a.views):[],H=v.find(A=>{var O,M,Z,Y;return(null===(O=A?.viewSetting)||void 0===O?void 0:O.viewName.toLowerCase())===m.input.name.trim().toLowerCase()&&(null===(M=A?.viewSetting)||void 0===M?void 0:M.id)!==(null===(Y=null===(Z=v[m.input.id])||void 0===Z?void 0:Z.viewSetting)||void 0===Y?void 0:Y.id)});return m.input.name.trim().length<2?a:""===m.input.name.trim()?(this.toast.error("View name is blank.",{duration:3e3}),a):H?(this.toast.error("View with the same name exists",{duration:3e3}),a):(v[m.input.id].viewSetting.viewName=m.input.name,m.resultEmitter.emit(Object.assign({},m.input)),this.toast.success("Susccessfully renamed new view",{duration:3e3}),Object.assign(Object.assign({},a),{views:v}))}),this.changeView=this.updater((a,m)=>Object.assign(Object.assign({},a),{currentViewId:m})),this.saveViewEffect=this.effect(a=>a.pipe((0,L.M)(this.settingId$,this.settingName$,this.viewName$,this.views$,this.currentViewId$),(0,K.w)(([m,v,H,A,O,M])=>(console.log({name:H,viewName:A}),this.webApiService.userUpdateSetting({settingId:v,input:{name:H,value:JSON.stringify({viewName:A,filterSettings:m.filterState,columnDefs:m.columnDefs})}}).pipe((0,P._b)(Z=>{this.toast.success("Saved current view",{duration:3e3}),O[M].viewSetting.columnDefs=m.columnDefs,O[M].viewSetting.filterSettings=m.filterState,O[M].settingId=Z.data.updated.id,this.patchState({currentViewId:M,views:O})},Z=>{this.toast.error("Failed to save current view",{duration:3e3})}))))))}loadTableSettings({tableName:p}){this.webApiService.userSettings({input:{name:p,limit:1e3}}).pipe((0,K.w)(f=>(0,U.mG)(this,void 0,void 0,function*(){return f}))).subscribe({next:f=>{f.errors&&console.error(f.errors);const a=f.data.items.map(m=>({settingId:m.id,settingName:m.name,viewSetting:JSON.parse(m.value)}));console.log({views:a}),this.patchState({views:a,tableName:p})},error:f=>{console.log("error in error response",f)}})}}return d.\u0275fac=function(p){return new(p||d)(o.LFG($.q),o.LFG(j.F))},d.\u0275prov=o.Yz7({token:d,factory:d.\u0275fac}),d})();var X=c(97800),r=c(34077);const _=function(){return{}};let i=(()=>{class d{constructor(p){this.store=p,this.config={},this.titleLabel="edit",this.send=new o.vpe,this.close=new o.vpe,this.form=new G.cw({}),this.model={},this.options={formState:{mainModel:this.model}},this.fields=[R.F.fieldRow([R.F.input("id",{label:"Id"},{className:"w-full px-0.5",hide:!0}),R.F.input("name",{label:"Name",required:!0},{className:"w-full px-0.5"})])],this.titleLabel="edit"}submit({id:p,name:f}){return(0,U.mG)(this,void 0,void 0,function*(){f.length&&(void 0!==p?this.store.editView({input:{id:p,name:f},resultEmitter:this.send}):this.store.addView({viewName:f,resultEmitter:this.send}))})}ngOnInit(){var p;this.titleLabel=null!==(p=this.config)&&void 0!==p&&p.name?"Edit":"Create"}ngOnDestroy(){}handleDiscardClick(p){this.close.emit(p)}}return d.\u0275fac=function(p){return new(p||d)(o.Y36(B))},d.\u0275cmp=o.Xpm({type:d,selectors:[["ui-table-view-config-form"]],inputs:{config:"config",titleLabel:"titleLabel"},outputs:{send:"send",close:"close"},decls:12,vars:6,consts:[[1,"flex-grow","flex","flex-col","p-4","gap-2"],[1,"md:px-2","lg:px-0","lg:col-span-9","dark:bg-gray-800","bg-white","rounded-lg","shadow","p-4"],[1,"text-semibold","text-lg","px-6"],[1,"px-6","pt-6"],[1,"w-full",3,"model","fields","form","submitForm"],[1,"-mx-6","-mb-4","mt-4","px-4","py-3","bg-gray-50","dark:bg-gray-800","border-t","border-transparent","dark:border-gray-700","rounded-b-lg","space-x-3"],[1,"flex","justify-between","items-center","flex-wrap","sm:flex-nowrap"],[1,"ml-2","items-center","flex","ng-star-inserted"],["label","Save","type","submit",3,"disabled"],[1,"mr-2","items-center","flex","ng-star-inserted"],["label","Discard","type","button","variant","white",3,"click"]],template:function(p,f){if(1&p&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2),o._uU(3),o.qZA(),o.TgZ(4,"div",3)(5,"ui-form",4),o.NdJ("submitForm",function(){return f.submit(f.config)}),o.TgZ(6,"div",5)(7,"div",6)(8,"div",7),o._UZ(9,"ui-button",8),o.qZA(),o.TgZ(10,"div",9)(11,"ui-button",10),o.NdJ("click",function(m){return f.handleDiscardClick(m)}),o.qZA()()()()()()()()),2&p){let a;o.xp6(3),o.hij("",f.titleLabel," "),o.xp6(2),o.Q6J("model",null!==(a=f.config)&&void 0!==a?a:o.DdM(5,_))("fields",f.fields)("form",f.form),o.xp6(4),o.Q6J("disabled",!f.form.valid)}},dependencies:[X.W,r.a],encapsulation:2}),d})();const l=function(){return{}};function e(d,S){if(1&d){const p=o.EpF();o.TgZ(0,"ui-table-view-config-form",3),o.NdJ("send",function(a){const v=o.CHM(p).data;return v.onSave(a),o.KtG(v.ref.close())})("close",function(){const m=o.CHM(p).data;return o.KtG(m.ref.close())}),o.qZA()}2&d&&o.Q6J("config",S.data.value||o.DdM(1,l))}function n(d,S){if(1&d){const p=o.EpF();o.TgZ(0,"ui-table-view-config-table-view",4),o.NdJ("itemDidSelect",function(a){const v=o.CHM(p).data;return v.itemDidSelect(a),o.KtG(v.ref.close())}),o.qZA()}2&d&&o.Q6J("tableViewConfigs",S.data.items)}let u=(()=>{class d extends E.fS{}return d.\u0275fac=function(){let S;return function(f){return(S||(S=o.n5z(d)))(f||d)}}(),d.\u0275cmp=o.Xpm({type:d,selectors:[["ng-component"]],features:[o.qOj],decls:5,vars:7,consts:[[3,"to","control","upModel","listTemplate","editTemplate","createTemplate","key","selectionChanged"],["editTemplate",""],["listTemplate",""],[1,"flex-grow","flex","flex-col",3,"config","send","close"],[1,"w-full","h-full","bg-white",3,"tableViewConfigs","itemDidSelect"]],template:function(p,f){if(1&p&&(o.TgZ(0,"ui-select-form",0),o.NdJ("selectionChanged",function(m){return f.formState[m.key]=m.value}),o.qZA(),o.YNc(1,e,1,2,"ng-template",null,1,o.W1O),o.YNc(3,n,1,1,"ng-template",null,2,o.W1O)),2&p){const a=o.MAs(2),m=o.MAs(4);o.Q6J("to",f.to)("control",f.formControl)("upModel",f.model)("listTemplate",m)("editTemplate",a)("createTemplate",a)("key",f.field.key)}},dependencies:[w.$,W,i],encapsulation:2}),d})();var g=c(10948),T=c(10265),y=c(20558),b=c(927),D=c(31276);let x=(()=>{class d{}return d.\u0275fac=function(p){return new(p||d)},d.\u0275mod=o.oAB({type:d}),d.\u0275inj=o.cJS({providers:[B],imports:[t.sF.withComponents({}),s.ez,E.X0,I.ot,k.t,F.Ps,h.Tx,C.A0,g.P,g.P,T.t,y.g,b.W,D.h,E.X0.forChild({types:[{name:"table-view-config-select",component:u,wrappers:["form-field"]}]})]}),d})()},34077:(J,V,c)=>{c.d(V,{a:()=>k});var t=c(94650),s=c(24006),E=c(49821);const I=["*"];let k=(()=>{class F{constructor(C){this.builder=C,this.fields=[],this.form=new s.cw({}),this.model={},this.options={},this.submitForm=new t.vpe}ngOnInit(){this.builder.buildForm(this.form,this.fields,this.model,this.options)}submit(){this.submitForm.emit(this.model)}}return F.\u0275fac=function(C){return new(C||F)(t.Y36(E.J8))},F.\u0275cmp=t.Xpm({type:F,selectors:[["ui-form"]],inputs:{fields:"fields",form:"form",model:"model",options:"options"},outputs:{submitForm:"submitForm"},ngContentSelectors:I,decls:6,vars:6,consts:[["novalidate","",1,"w-full",3,"formGroup","ngSubmit"],[3,"fields","form","model","options"],["type","submit",2,"display","none",3,"disabled"]],template:function(C,o){1&C&&(t.F$t(),t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return o.submitForm.emit(o.model)}),t.TgZ(1,"div"),t._UZ(2,"formly-form",1),t.TgZ(3,"button",2),t._uU(4,"submit"),t.qZA()(),t.Hsn(5),t.qZA()),2&C&&(t.Q6J("formGroup",o.form),t.xp6(2),t.Q6J("fields",o.fields)("form",o.form)("model",o.model)("options",o.options),t.xp6(1),t.Q6J("disabled",o.form.touched&&!o.form.valid))},dependencies:[E.T7,s._Y,s.JL,s.sg],encapsulation:2,changeDetection:0}),F})()},15909:(J,V,c)=>{c.d(V,{$:()=>_});var t=c(94650),s=c(77437),E=c(77579),I=c(82722),k=c(16007),F=c(57148),h=c(36895),C=c(97800);function o(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"ui-button",10),t.NdJ("click",function(u){t.CHM(e);const g=t.oxw(2),T=t.MAs(7);return u.stopPropagation(),t.KtG(g.openDialog(T,{value:g.value,width:g.to.width}))}),t.qZA()}if(2&i){const e=t.oxw(2);t.Q6J("fill",!0)("disabled",!e.value)}}function w(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"div",7)(1,"ui-button",8),t.NdJ("click",function(u){t.CHM(e);const g=t.oxw(),T=t.MAs(9);return u.stopPropagation(),t.KtG(g.openListDialog(T,{height:"90%",width:"90%"}))}),t.qZA(),t.YNc(2,o,1,2,"ui-button",9),t.qZA()}if(2&i){const e=t.oxw();t.xp6(1),t.Q6J("fill",!0),t.xp6(1),t.Q6J("ngIf",!e.to.readonly)}}function N(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(u){t.CHM(e);const g=t.oxw(2),T=t.MAs(5);return u.stopPropagation(),t.KtG(g.openDialog(T,{value:{},width:g.to.width}))}),t.O4$(),t.TgZ(1,"svg",13),t._UZ(2,"path",14),t.qZA(),t._uU(3),t.qZA()}if(2&i){const e=t.oxw(2);t.xp6(3),t.hij(" Add New ",e.to.label," ")}}function W(i,l){if(1&i&&t.YNc(0,N,4,1,"button",11),2&i){const e=t.oxw();t.Q6J("ngIf",!e.to.readonly)}}function U(i,l){1&i&&t.GkF(0)}const G=function(){return{}},R=function(i,l,e){return{value:i,ref:l,onSave:e}},P=function(i){return{data:i}};function L(i,l){if(1&i&&(t.TgZ(0,"div",15),t.YNc(1,U,1,0,"ng-container",16),t.qZA()),2&i){const e=l.$implicit,n=t.oxw();t.xp6(1),t.Q6J("ngTemplateOutlet",n.createTemplate)("ngTemplateOutletContext",t.VKq(7,P,t.kEZ(3,R,t.DdM(2,G),e,n.onSave)))}}function K(i,l){1&i&&t.GkF(0)}function $(i,l){if(1&i&&(t.TgZ(0,"div",15),t.YNc(1,K,1,0,"ng-container",16),t.qZA()),2&i){const e=l.$implicit,n=t.oxw();t.xp6(1),t.Q6J("ngTemplateOutlet",n.editTemplate)("ngTemplateOutletContext",t.VKq(6,P,t.kEZ(2,R,null==e.data?null:e.data.value,e,n.onSave)))}}function j(i,l){1&i&&t.GkF(0)}const B=function(i,l,e){return{items:i,itemDidSelect:l,ref:e}},X=function(i){return{data:i}};function r(i,l){if(1&i&&(t.TgZ(0,"div",17)(1,"div",18),t._uU(2),t.qZA(),t.TgZ(3,"div",19),t.YNc(4,j,1,0,"ng-container",16),t.qZA()()),2&i){const e=l.$implicit,n=t.oxw();t.xp6(2),t.hij("",n.to.label," Lookup"),t.xp6(2),t.Q6J("ngTemplateOutlet",n.listTemplate)("ngTemplateOutletContext",t.VKq(7,X,t.kEZ(3,B,n.allItems,n.itemDidSelect,e)))}}let _=(()=>{class i{constructor(e,n,u,g){this.ngZone=e,this.ref=n,this.dialog=u,this.injector=g,this.routerKeys=[],this.selectionChanged=new t.vpe,this.formRouterKeyDidChange=new t.vpe,this.routerValues=[],this.ngUnsubscribe=new E.x,this.items=[],this.allItems=[],this.value=null,this.lastInput=null,this.loading=!1,this.formStateKey=void 0,this.formRouterKeyService=void 0}ngOnInit(){var e,n,u,g,T,y;try{this.formRouterKeyService=this.injector.get(k.l)}catch{}if(this.key&&(this.formStateKey=this.key.length>2&&(this.key.endsWith("Id")||this.key.endsWith("id"))?this.key.substring(0,this.key.length-2):`selected${this.key}`),this.to.disabled&&(null===(e=this.control)||void 0===e||e.disable()),!(null===(n=this.control)||void 0===n)&&n.value&&(this.initialValue=null===(u=this.control)||void 0===u?void 0:u.value),(this.routerKeys&&this.routerKeys.length||0)>0){for(let b=0;b<this.routerKeys.length;b++)this.routerValues.push(void 0);null===(g=this.formRouterKeyService)||void 0===g||g.routerKeys$.pipe((0,I.R)(this.ngUnsubscribe)).subscribe(b=>{let D=!1;const x={};for(let d=0;d<this.routerKeys.length;d++){const S=this.routerKeys[d],p=b[S];p!==this.routerValues[d]&&(D=!0,this.routerValues[d]=p),x[S]=this.routerValues[d]}D&&(console.log("Should reload selectForm"),this.formRouterKeyDidChange.emit(x))})}null===(y=null===(T=this.control)||void 0===T?void 0:T.valueChanges)||void 0===y||y.pipe((0,I.R)(this.ngUnsubscribe)).subscribe(b=>{var D,x;if(null===(D=this.formRouterKeyService)||void 0===D||D.setRouterKey(this.key,b),this.to.valueChanged&&this.to.valueChanged instanceof Function&&this.to.valueChanged(b,this.value),this.to.changed&&this.to.changed(b),b&&b!==(null===(x=this.value)||void 0===x?void 0:x.id)){this.initialValue=b;const d=this.allItems.find(S=>S.id===b);d&&this.itemDidSelect(d),this.ref.markForCheck(),this.ref.detectChanges()}}),this.changed(null),this.allItemsSubscribe=this.to.source("").subscribe(b=>{if(this.allItems=b,this.upModel&&this.formStateKey){const D=this.upModel[this.formStateKey];this.setValue(D),this.changed(D)}this.value?setTimeout(()=>{if(this.upModel&&this.formStateKey){const x=this.upModel[this.formStateKey];this.setValue(x),this.changed(x)}const D=this.allItems.find(x=>x[this.to.valueProp]===this.value.id);if(D){const x=this.ngSelect.itemsList.findItem(D);x&&this.ngSelect.select(x)}else this.ngSelect.clearModel()},100):this.initialValue&&setTimeout(()=>{const D=this.allItems.find(x=>x[this.to.valueProp]===this.initialValue);if(this.initialValue=null,D){const x=this.ngSelect.itemsList.findItem(D);x&&this.ngSelect.select(x)}},100)}),this.itemDidSelect=this.itemDidSelect.bind(this),this.onSave=this.onSave.bind(this)}ngOnDestroy(){var e,n,u;null===(e=this.ngUnsubscribe)||void 0===e||e.next(!0),null===(n=this.ngUnsubscribe)||void 0===n||n.unsubscribe(),null===(u=this.allItemsSubscribe)||void 0===u||u.unsubscribe()}compareWith(e,n){return e.id===n.id}refreshItems(){}setValue(e){var n,u;e?(this.value=e,null===(u=this.control)||void 0===u||u.setValue(e.id,{emitEvent:!0}),this.formStateKey&&this.selectionChanged.emit({key:this.formStateKey,value:e})):(this.value=null,null===(n=this.control)||void 0===n||n.setValue(null),this.formStateKey&&this.selectionChanged.emit({key:this.formStateKey,value:void 0}))}onSave(e){e&&setTimeout(()=>{console.log("onSave: ",e);const n=this.items.find(u=>u.id===e.id);n&&this.itemDidSelect(n)},200)}itemDidSelect(e){let n=this.ngSelect.itemsList.findItem(e);n?this.ngSelect.select(n):(this.ngSelect.itemsList.addItem(e),setTimeout(()=>{n=this.ngSelect.itemsList.findItem(e),this.ngSelect.select(n)},200))}onChange(e){this.setValue(e),this.to.onChange&&this.to.onChange(e)}changed(e){e&&!e.name?this.to.source&&(this.timeout&&clearTimeout(this.timeout),e.term!=this.lastInput&&(this.timeout=setTimeout(()=>{var n;this.loading=!0,this.to.source(e.term).subscribe(u=>{this.items=u,this.loading=!1,this.lastInput=e.term,this.ref.markForCheck(),this.ref.detectChanges()}),null===(n=this.control)||void 0===n||n.markAsDirty()},300))):e&&e.name?this.setValue(e):e||(this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.setValue(null),this.loading=!0,this.to.source("").subscribe(n=>{this.items=n,this.loading=!1,this.ref.markForCheck(),this.ref.detectChanges()})},this.to.debounceTime||0))}displayFn(e){return e?e.name:null}openDialog(e,{value:n,height:u,width:g}){this.ngSelect.close(),this.dialog.open(e,{data:{value:n},height:u||"auto",width:g||"auto"})}openListDialog(e,{value:n,height:u,width:g}){!n&&""!=this.ngSelect.searchTerm&&(n={name:this.ngSelect.searchTerm}),this.ngSelect.close(),this.dialog.open(e,{data:{value:n},height:u||"auto",width:g||"auto"})}get sortedItems(){var e;return(null===(e=this.items)||void 0===e?void 0:e.length)>1&&this.items.sort(function(n,u){var g,T;const y=null!==(g=n.name)&&void 0!==g?g:"",b=null!==(T=u.name)&&void 0!==T?T:"";return y.localeCompare(b)}),this.items}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.R0b),t.Y36(t.sBO),t.Y36(F.xA),t.Y36(t.zs3))},i.\u0275cmp=t.Xpm({type:i,selectors:[["ui-select-form"]],viewQuery:function(e,n){if(1&e&&t.Gf(s.w9,5),2&e){let u;t.iGM(u=t.CRH())&&(n.ngSelect=u.first)}},inputs:{to:"to",key:"key",upModel:"upModel",routerKeys:"routerKeys",control:"control",listTemplate:"listTemplate",editTemplate:"editTemplate",createTemplate:"createTemplate"},outputs:{selectionChanged:"selectionChanged",formRouterKeyDidChange:"formRouterKeyDidChange"},decls:10,vars:12,consts:[["appendTo","body",1,"mt-0",3,"items","placeholder","bindLabel","bindValue","multiple","virtualScroll","loading","groupBy","compareWith","readonly","change","search"],["ngSelect",""],["ng-header-tmp",""],["ng-footer-tmp","","class","footer"],["createEntityTpl",""],["editEntityTpl",""],["viewEntities",""],[1,"flex","flex-row","gap-2"],["label","Advanced Search","color","primary","icon","plus","type","button",1,"w-full",3,"fill","click"],["label","Edit","color","primary","class","h-full w-full","icon","plus","type","button",3,"fill","disabled","click",4,"ngIf"],["label","Edit","color","primary","icon","plus","type","button",1,"h-full","w-full",3,"fill","disabled","click"],["class","cursor-pointer text-gray-500 flex w-full gap-1 p-3 hover:bg-gray-100 hover:text-gray-700 transition duration-200 items-center text-semibold text-md","type","button",3,"click",4,"ngIf"],["type","button",1,"cursor-pointer","text-gray-500","flex","w-full","gap-1","p-3","hover:bg-gray-100","hover:text-gray-700","transition","duration-200","items-center","text-semibold","text-md",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor","stroke-width","2",1,"h-6","w-6"],["stroke-linecap","round","stroke-linejoin","round","d","M12 4v16m8-8H4"],[1,"flex-grow","flex","flex-col","p-4","gap-2","overflow-auto"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"flex","flex-col","p-4","gap-2","h-full","bg-grey-light"],[1,"text-semibold","text-lg"],[1,"w-full","h-full"]],template:function(e,n){if(1&e&&(t.TgZ(0,"ng-select",0,1),t.NdJ("change",function(g){return n.onChange(g)})("search",function(g){return n.changed(g)}),t.YNc(2,w,3,2,"ng-template",2),t.YNc(3,W,1,1,"ng-template",3),t.qZA(),t.YNc(4,L,2,9,"ng-template",null,4,t.W1O),t.YNc(6,$,2,8,"ng-template",null,5,t.W1O),t.YNc(8,r,5,9,"ng-template",null,6,t.W1O)),2&e){let u,g;t.Tol((null==n.to?null:n.to.className)||"custom"),t.Q6J("items",n.sortedItems)("placeholder",(null==n.to?null:n.to.placeholder)||"Select "+(n.to.label||""))("bindLabel",null!==(u=null==n.to?null:n.to.labelProp)&&void 0!==u?u:"label")("bindValue",null!==(g=null==n.to?null:n.to.valueProp)&&void 0!==g?g:"value")("multiple",n.to.multiple)("virtualScroll",!0)("loading",n.loading)("groupBy",n.to.groupBy)("compareWith",(null==n.to?null:n.to.compareWith)||n.compareWith)("readonly",n.to.readOnly)}},dependencies:[h.O5,h.tP,s.w9,s.A3,s.x0,C.W],styles:[".ng-select-container{margin-top:0!important}  .forSelectForm .ng-select-container{border:1px solid #ff0000a8}  ui-button button{height:100%!important;justify-content:center}  .ngneat-dialog-backdrop{z-index:998!important}"]}),i})()},31276:(J,V,c)=>{c.d(V,{h:()=>F});var t=c(36895),s=c(77437),E=c(24006),I=c(10948),k=c(94650);let F=(()=>{class h{}return h.\u0275fac=function(o){return new(o||h)},h.\u0275mod=k.oAB({type:h}),h.\u0275inj=k.cJS({imports:[t.ez,s.A0,E.UX,I.P]}),h})()}}]);