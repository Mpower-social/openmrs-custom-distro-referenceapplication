"use strict";(self.webpackChunkintelehealth_ui=self.webpackChunkintelehealth_ui||[]).push([[261],{8908:(O,b,o)=>{o.d(b,{NW:()=>R,TU:()=>F,ye:()=>d});var u=o(6895),t=o(4650),c=o(6201),P=o(1377),g=o(9722),m=o(9824),r=o(4865),h=o(8929),p=o(1223);function l(a,s){if(1&a&&(t.TgZ(0,"mat-option",19),t._uU(1),t.qZA()),2&a){const e=s.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function f(a,s){if(1&a){const e=t.EpF();t.TgZ(0,"mat-form-field",16)(1,"mat-select",17),t.NdJ("selectionChange",function(n){t.CHM(e);const _=t.oxw(2);return t.KtG(_._changePageSize(n.value))}),t.YNc(2,l,2,2,"mat-option",18),t.qZA()()}if(2&a){const e=t.oxw(2);t.Q6J("appearance",e._formFieldAppearance)("color",e.color),t.xp6(1),t.Q6J("value",e.pageSize)("disabled",e.disabled)("aria-label",e._intl.itemsPerPageLabel),t.xp6(1),t.Q6J("ngForOf",e._displayedPageSizeOptions)}}function v(a,s){if(1&a&&(t.TgZ(0,"div",20),t._uU(1),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Oqu(e.pageSize)}}function T(a,s){if(1&a&&(t.TgZ(0,"div",12)(1,"div",13),t._uU(2),t.qZA(),t.YNc(3,f,3,6,"mat-form-field",14),t.YNc(4,v,2,1,"div",15),t.qZA()),2&a){const e=t.oxw();t.xp6(2),t.hij(" ",e._intl.itemsPerPageLabel," "),t.xp6(1),t.Q6J("ngIf",e._displayedPageSizeOptions.length>1),t.xp6(1),t.Q6J("ngIf",e._displayedPageSizeOptions.length<=1)}}function D(a,s){if(1&a){const e=t.EpF();t.TgZ(0,"button",21),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.firstPage())}),t.O4$(),t.TgZ(1,"svg",7),t._UZ(2,"path",22),t.qZA()()}if(2&a){const e=t.oxw();t.Q6J("matTooltip",e._intl.firstPageLabel)("matTooltipDisabled",e._previousButtonsDisabled())("matTooltipPosition","above")("disabled",e._previousButtonsDisabled()),t.uIk("aria-label",e._intl.firstPageLabel)}}function E(a,s){if(1&a){const e=t.EpF();t.O4$(),t.kcU(),t.TgZ(0,"button",23),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.lastPage())}),t.O4$(),t.TgZ(1,"svg",7),t._UZ(2,"path",24),t.qZA()()}if(2&a){const e=t.oxw();t.Q6J("matTooltip",e._intl.lastPageLabel)("matTooltipDisabled",e._nextButtonsDisabled())("matTooltipPosition","above")("disabled",e._nextButtonsDisabled()),t.uIk("aria-label",e._intl.lastPageLabel)}}let d=(()=>{class a{constructor(){this.changes=new h.xQ,this.itemsPerPageLabel="Items per page:",this.nextPageLabel="Next page",this.previousPageLabel="Previous page",this.firstPageLabel="First page",this.lastPageLabel="Last page",this.getRangeLabel=(e,i,n)=>{if(0==n||0==i)return`0 of ${n}`;const _=e*i;return`${_+1} \u2013 ${_<(n=Math.max(n,0))?Math.min(_+i,n):_+i} of ${n}`}}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275prov=t.Yz7({factory:function(){return new a},token:a,providedIn:"root"}),a})();const z={provide:d,deps:[[new t.FiY,new t.tp0,d]],useFactory:function A(a){return a||new d}},S=new t.OlP("MAT_PAGINATOR_DEFAULT_OPTIONS"),B=(0,c.Id)((0,c.dB)(class{}));let y=(()=>{class a extends B{constructor(e,i,n){if(super(),this._intl=e,this._changeDetectorRef=i,this._pageIndex=0,this._length=0,this._pageSizeOptions=[],this._hidePageSize=!1,this._showFirstLastButtons=!1,this.page=new t.vpe,this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),n){const{pageSize:_,pageSizeOptions:M,hidePageSize:x,showFirstLastButtons:I}=n;null!=_&&(this._pageSize=_),null!=M&&(this._pageSizeOptions=M),null!=x&&(this._hidePageSize=x),null!=I&&(this._showFirstLastButtons=I)}}get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max((0,r.su)(e),0),this._changeDetectorRef.markForCheck()}get length(){return this._length}set length(e){this._length=(0,r.su)(e),this._changeDetectorRef.markForCheck()}get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max((0,r.su)(e),0),this._updateDisplayedPageSizeOptions()}get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(i=>(0,r.su)(i)),this._updateDisplayedPageSizeOptions()}get hidePageSize(){return this._hidePageSize}set hidePageSize(e){this._hidePageSize=(0,r.Ig)(e)}get showFirstLastButtons(){return this._showFirstLastButtons}set showFirstLastButtons(e){this._showFirstLastButtons=(0,r.Ig)(e)}ngOnInit(){this._initialized=!0,this._updateDisplayedPageSizeOptions(),this._markInitialized()}ngOnDestroy(){this._intlChanges.unsubscribe()}nextPage(){if(!this.hasNextPage())return;const e=this.pageIndex;this.pageIndex++,this._emitPageEvent(e)}previousPage(){if(!this.hasPreviousPage())return;const e=this.pageIndex;this.pageIndex--,this._emitPageEvent(e)}firstPage(){if(!this.hasPreviousPage())return;const e=this.pageIndex;this.pageIndex=0,this._emitPageEvent(e)}lastPage(){if(!this.hasNextPage())return;const e=this.pageIndex;this.pageIndex=this.getNumberOfPages()-1,this._emitPageEvent(e)}hasPreviousPage(){return this.pageIndex>=1&&0!=this.pageSize}hasNextPage(){const e=this.getNumberOfPages()-1;return this.pageIndex<e&&0!=this.pageSize}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){const n=this.pageIndex;this.pageIndex=Math.floor(this.pageIndex*this.pageSize/e)||0,this.pageSize=e,this._emitPageEvent(n)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){!this._initialized||(this.pageSize||(this._pageSize=0!=this.pageSizeOptions.length?this.pageSizeOptions[0]:50),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),-1===this._displayedPageSizeOptions.indexOf(this.pageSize)&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,i)=>e-i),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(d),t.Y36(t.sBO),t.Y36(void 0))},a.\u0275dir=t.lG2({type:a,inputs:{pageIndex:"pageIndex",length:"length",pageSize:"pageSize",pageSizeOptions:"pageSizeOptions",hidePageSize:"hidePageSize",showFirstLastButtons:"showFirstLastButtons",color:"color"},outputs:{page:"page"},features:[t.qOj]}),a})(),R=(()=>{class a extends y{constructor(e,i,n){super(e,i,n),n&&null!=n.formFieldAppearance&&(this._formFieldAppearance=n.formFieldAppearance)}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(d),t.Y36(t.sBO),t.Y36(S,8))},a.\u0275cmp=t.Xpm({type:a,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-paginator"],inputs:{disabled:"disabled"},exportAs:["matPaginator"],features:[t.qOj],decls:14,vars:14,consts:[[1,"mat-paginator-outer-container"],[1,"mat-paginator-container"],["class","mat-paginator-page-size",4,"ngIf"],[1,"mat-paginator-range-actions"],[1,"mat-paginator-range-label"],["mat-icon-button","","type","button","class","mat-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click",4,"ngIf"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-previous",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["viewBox","0 0 24 24","focusable","false",1,"mat-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-next",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["mat-icon-button","","type","button","class","mat-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click",4,"ngIf"],[1,"mat-paginator-page-size"],[1,"mat-paginator-page-size-label"],["class","mat-paginator-page-size-select",3,"appearance","color",4,"ngIf"],["class","mat-paginator-page-size-value",4,"ngIf"],[1,"mat-paginator-page-size-select",3,"appearance","color"],[3,"value","disabled","aria-label","selectionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"mat-paginator-page-size-value"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["mat-icon-button","","type","button",1,"mat-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled","click"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,T,5,3,"div",2),t.TgZ(3,"div",3)(4,"div",4),t._uU(5),t.qZA(),t.YNc(6,D,3,5,"button",5),t.TgZ(7,"button",6),t.NdJ("click",function(){return i.previousPage()}),t.O4$(),t.TgZ(8,"svg",7),t._UZ(9,"path",8),t.qZA()(),t.kcU(),t.TgZ(10,"button",9),t.NdJ("click",function(){return i.nextPage()}),t.O4$(),t.TgZ(11,"svg",7),t._UZ(12,"path",10),t.qZA()(),t.YNc(13,E,3,5,"button",11),t.qZA()()()),2&e&&(t.xp6(2),t.Q6J("ngIf",!i.hidePageSize),t.xp6(3),t.hij(" ",i._intl.getRangeLabel(i.pageIndex,i.pageSize,i.length)," "),t.xp6(1),t.Q6J("ngIf",i.showFirstLastButtons),t.xp6(1),t.Q6J("matTooltip",i._intl.previousPageLabel)("matTooltipDisabled",i._previousButtonsDisabled())("matTooltipPosition","above")("disabled",i._previousButtonsDisabled()),t.uIk("aria-label",i._intl.previousPageLabel),t.xp6(3),t.Q6J("matTooltip",i._intl.nextPageLabel)("matTooltipDisabled",i._nextButtonsDisabled())("matTooltipPosition","above")("disabled",i._nextButtonsDisabled()),t.uIk("aria-label",i._intl.nextPageLabel),t.xp6(3),t.Q6J("ngIf",i.showFirstLastButtons))},dependencies:[u.sg,u.O5,P.lW,p.KE,g.gD,c.ey,m.gM],styles:[".mat-paginator{display:block}.mat-paginator-outer-container{display:flex}.mat-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap-reverse;width:100%}.mat-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-paginator-page-size{margin-right:0;margin-left:8px}.mat-paginator-page-size-label{margin:0 4px}.mat-paginator-page-size-select{margin:6px 4px 0 4px;width:56px}.mat-paginator-page-size-select.mat-form-field-appearance-outline{width:64px}.mat-paginator-page-size-select.mat-form-field-appearance-fill{width:64px}.mat-paginator-range-label{margin:0 32px 0 24px}.mat-paginator-range-actions{display:flex;align-items:center}.mat-paginator-icon{width:28px;fill:currentColor}[dir=rtl] .mat-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-paginator-icon{fill:CanvasText}\n"],encapsulation:2,changeDetection:0}),a})(),F=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({providers:[z],imports:[u.ez,P.ot,g.LD,m.AV,c.BQ]}),a})()},6261:(O,b,o)=>{o.d(b,{e:()=>P});var u=o(8908),t=o(4650),c=o(9383);let P=(()=>{class g extends u.ye{constructor(r){super(),this.translateService=r,this.getRangeLabel=(h,p,l)=>{const f=this.translateService?this.translateService.instant("I18N.MAT_PAGINATOR.OF"):"of";if(0===l||0===p)return"0 "+f+" "+l;const v=h*p>(l=Math.max(l,0))?(Math.ceil(l/p)-1)*p:h*p;return v+1+" - "+Math.min(v+p,l)+" "+f+" "+l},this.translateService.onLangChange.subscribe(h=>{this.translateLabels()}),this.translateLabels()}translateLabels(){this.firstPageLabel=this.translateService.instant("I18N.MAT_PAGINATOR.FIRST_PAGE"),this.itemsPerPageLabel=this.translateService.instant("I18N.MAT_PAGINATOR.ITEMS_PER_PAGE"),this.lastPageLabel=this.translateService.instant("I18N.MAT_PAGINATOR.LAST_PAGE"),this.nextPageLabel=this.translateService.instant("I18N.MAT_PAGINATOR.NEXT_PAGE"),this.previousPageLabel=this.translateService.instant("I18N.MAT_PAGINATOR.PREVIOUS_PAGE"),this.changes.next()}}return g.\u0275fac=function(r){return new(r||g)(t.LFG(c.sK))},g.\u0275prov=t.Yz7({token:g,factory:g.\u0275fac}),g})()}}]);