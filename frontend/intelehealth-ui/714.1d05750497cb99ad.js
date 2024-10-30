"use strict";(self.webpackChunkintelehealth_ui=self.webpackChunkintelehealth_ui||[]).push([[714],{5714:(lt,b,s)=>{s.r(b),s.d(b,{AppointmentsModule:()=>ct,HttpLoaderFactory:()=>P});var _=s(6895),m=s(7761),v=s(4476),g=s(8908),c=s(1149),y=s(2340),p=s(5439),f=s(4465),d=s(7266),t=s(4650),w=s(349),Y=s(6270),k=s(7154),D=s(9080),L=s(7185),C=s(9383),T=s(9824),S=s(1279),O=s(1377),U=s(3274);const I=["searchInput"];function N(e,i){1&e&&(t.TgZ(0,"span",32),t._UZ(1,"img",33),t.qZA())}function E(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"button",34),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.clearFilter())}),t.TgZ(1,"mat-icon",35),t._uU(2,"close"),t.qZA()()}}function R(e,i){1&e&&(t.TgZ(0,"th",36),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Patient")," "))}const u=function(e){return["/dashboard/visit-summary",e]};function j(e,i){if(1&e&&(t.TgZ(0,"td",37)(1,"div",38),t._UZ(2,"img",39),t.TgZ(3,"span",40),t._uU(4),t.ALo(5,"translate"),t.qZA()()()),2&e){const n=i.$implicit,o=i.index,a=t.oxw();t.Q6J("routerLink",t.VKq(7,u,null==n?null:n.visitUuid)),t.uIk("data-test-id","apPatient"+o),t.xp6(2),t.s9C("src",a.baseUrl+"/personimage/"+n.patientId,t.LSH),t.xp6(2),t.AsE("",n.patientName," (",t.lcZ(5,5,n.patientGender),")")}}function Q(e,i){1&e&&(t.TgZ(0,"th",36),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Age")," "))}function J(e,i){if(1&e&&(t.TgZ(0,"td",37),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e){const n=i.$implicit,o=i.index;t.Q6J("routerLink",t.VKq(6,u,null==n?null:n.visitUuid)),t.uIk("data-test-id","apAge"+o),t.xp6(1),t.AsE(" ",n.patientAge,"",t.lcZ(2,4,"y")," ")}}function F(e,i){1&e&&(t.TgZ(0,"th",36),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Starts in")," "))}const H=function(e,i){return{"alert-danger":e,"alert-success":i}};function z(e,i){if(1&e&&(t.TgZ(0,"td",37)(1,"span",41),t._uU(2),t.qZA()()),2&e){const n=i.$implicit,o=i.index;t.Q6J("routerLink",t.VKq(4,u,null==n?null:n.visitUuid)),t.uIk("data-test-id","apStart"+o),t.xp6(1),t.Q6J("ngClass",t.WLB(6,H,n.starts_in.includes("Due"),n.starts_in.includes("Hour")||n.starts_in.includes("Minute"))),t.xp6(1),t.Oqu(n.starts_in)}}function V(e,i){1&e&&(t.TgZ(0,"th",36),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Location")," "))}function B(e,i){if(1&e&&(t.TgZ(0,"td",37),t._uU(1),t.qZA()),2&e){const n=i.$implicit,o=i.index;t.Q6J("routerLink",t.VKq(3,u,null==n?null:n.visitUuid)),t.uIk("data-test-id","apLocation"+o),t.xp6(1),t.hij(" ",null==n||null==n.visit?null:n.visit.location.name," ")}}function G(e,i){1&e&&(t.TgZ(0,"th",36),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Chief Complaint")," "))}function $(e,i){if(1&e&&(t.TgZ(0,"td",37),t._uU(1),t.qZA()),2&e){const n=i.$implicit,o=i.index;t.Q6J("routerLink",t.VKq(3,u,null==n?null:n.visitUuid)),t.uIk("data-test-id","apComplaint"+o),t.xp6(1),t.hij(" ",null==n?null:n.cheif_complaint," ")}}function K(e,i){1&e&&(t.TgZ(0,"th",36),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"Actions")," "))}function W(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"td",42)(1,"div",43)(2,"button",44),t.NdJ("click",function(){const r=t.CHM(n).$implicit,l=t.oxw();return t.KtG(l.reschedule(r))}),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"button",45),t.NdJ("click",function(){const r=t.CHM(n).$implicit,l=t.oxw();return t.KtG(l.cancel(r))}),t._uU(6),t.ALo(7,"translate"),t.qZA()()()}if(2&e){const n=i.index;t.uIk("data-test-id","apAction"+n),t.xp6(2),t.uIk("data-test-id","btnReschedule"+n),t.xp6(1),t.Oqu(t.lcZ(4,5,"Reschedule")),t.xp6(2),t.uIk("data-test-id","btnCancel"+n),t.xp6(1),t.Oqu(t.lcZ(7,7,"Cancel"))}}function q(e,i){if(1&e&&(t.TgZ(0,"tr",46)(1,"td",47),t._uU(2),t.ALo(3,"translate"),t.qZA()()),2&e){const n=t.oxw();t.xp6(1),t.uIk("colspan",n.displayedColumns.length),t.xp6(1),t.hij(" ",t.lcZ(3,2,"No any appointments scheduled.")," ")}}function X(e,i){1&e&&t._UZ(0,"tr",48)}function tt(e,i){if(1&e&&t._UZ(0,"tr",49),2&e){const n=i.$implicit,o=i.index;t.ekj("upcoming",n.starts_in.includes("hours")||n.starts_in.includes("minutes")),t.uIk("data-test-id","ap"+o)}}const nt=function(){return[5,10,20]},et=[{path:"",component:(()=>{class e{constructor(n,o,a,r,l,x){this.appointmentService=n,this.visitService=o,this.pageTitleService=a,this.coreService=r,this.toastr=l,this.translateService=x,this.items=["Appointments"],this.expandedIndex=0,this.displayedColumns=["name","age","starts_in","location","cheif_complaint","actions"],this.dataSource=new c.by,this.baseUrl=y.N.baseURL,this.isLoaded=!1,this.appointments=[]}ngAfterViewInit(){this.dataSource.paginator=this.paginator}ngOnInit(){this.translateService.use((0,f.TL)(!1,d.Mj.SELECTED_LANGUAGE)),this.pageTitleService.setTitle({title:"Appointments",imgUrl:"assets/svgs/menu-video-circle.svg"}),this.getAppointments()}getAppointments(){this.appointments=[],this.appointmentService.getUserSlots((0,f.TL)(!0,d.On.USER).uuid,p().startOf("year").format("DD/MM/YYYY"),p().endOf("year").format("DD/MM/YYYY")).subscribe(n=>{n.data.forEach(a=>{"booked"==a.status&&("Awaiting Consult"==a.visitStatus||"Visit In Progress"==a.visitStatus)&&a.visit&&(a.cheif_complaint=this.getCheifComplaint(a.visit),a.starts_in=(0,f.eg)(a.slotJsDate),this.appointments.push(a))}),this.dataSource.data=[...this.appointments],this.dataSource.paginator=this.paginator,this.dataSource.filterPredicate=(a,r)=>-1!=a?.openMrsId.toLowerCase().indexOf(r)||-1!=a?.patientName.toLowerCase().indexOf(r)})}getCheifComplaint(n){let o=[];return n.encounters.forEach(r=>{null!==r.type?.name.match(d.fj.ADULTINITIAL)&&r.obs.forEach(h=>{if(163212==h.concept_id){const A=this.visitService.getData2(h)?.value_text.replace(new RegExp("\u25ba","g"),"").split("<b>");for(let M=1;M<A.length;M++){const Z=A[M].split("<");Z[0].match(d.fj.ASSOCIATED_SYMPTOMS)||o.push(Z[0])}}})}),o}checkIfDateOldThanOneDay(n){let o=p(n).diff(p(),"hours"),a=p(n).diff(p(),"minutes");return o>24?p(n).format("DD MMM, YYYY hh:mm A"):o<1?a<0?`Due : ${p(n).format("DD MMM, YYYY hh:mm A")}`:`${a} minutes`:`${o} hrs`}reschedule(n){const o=n.visit.encounters.filter(r=>r.type.name==d.fj.PATIENT_EXIT_SURVEY||r.type.name==d.fj.VISIT_COMPLETE).length;Boolean(o)?this.toastr.error(this.translateService.instant("Visit is already completed, it can't be rescheduled."),this.translateService.instant("Rescheduling failed!")):"Visit In Progress"==n.visitStatus?this.toastr.error(this.translateService.instant("Visit is in progress, it can't be rescheduled."),this.translateService.instant("Rescheduling failed!")):this.coreService.openRescheduleAppointmentModal(n).subscribe(r=>{if(r){let l=r;this.coreService.openRescheduleAppointmentConfirmModal({appointment:n,newSlot:l}).subscribe(x=>{x&&(n.appointmentId=n.id,n.slotDate=p(l.date,"YYYY-MM-DD").format("DD/MM/YYYY"),n.slotTime=l.slot,this.appointmentService.rescheduleAppointment(n).subscribe(h=>{const A=h.message;h.status?(this.getAppointments(),this.toastr.success(this.translateService.instant("The appointment has been rescheduled successfully!"),this.translateService.instant("Rescheduling successful!"))):this.toastr.success(A,this.translateService.instant("Rescheduling failed!"))}))})}})}cancel(n){"Visit In Progress"!=n.visitStatus?this.coreService.openConfirmCancelAppointmentModal(n).subscribe(o=>{o&&(this.toastr.success(this.translateService.instant("The Appointment has been successfully canceled."),this.translateService.instant("Canceling successful")),this.getAppointments())}):this.toastr.error(this.translateService.instant("Visit is in progress, it can't be cancelled."),this.translateService.instant("Canceling failed!"))}get userId(){return(0,f.TL)(!0,d.On.USER).uuid}applyFilter1(n){this.dataSource.filter=n.target.value.trim().toLowerCase()}clearFilter(){this.dataSource.filter=null,this.searchElement.nativeElement.value=""}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(w.H),t.Y36(Y.W),t.Y36(k.Z),t.Y36(D.p),t.Y36(L._W),t.Y36(C.sK))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-appointments"]],viewQuery:function(n,o){if(1&n&&(t.Gf(g.NW,5),t.Gf(I,7)),2&n){let a;t.iGM(a=t.CRH())&&(o.paginator=a.first),t.iGM(a=t.CRH())&&(o.searchElement=a.first)}},decls:46,vars:15,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-12","p-0"],["multi","","data-test-id","matAccAppointment",1,"intel-accordion-con"],["data-test-id","matExpAppointment",3,"expanded"],["data-test-id","matExpHeaderAppointment"],[1,"intel-accordion-title"],["src","assets/svgs/cam-icon.svg","alt","","width","44px"],[1,"mb-0","ml-2"],["aria-hidden","false","aria-label","help icon","matTooltipPosition","right","data-test-id","matIcoHelpAppointment",3,"matTooltip"],[1,"input-group","search-bar","ml-auto",3,"click"],["type","text","placeholder","Search appointments","aria-label","search1","aria-describedby","basic-addon1","data-test-id","etSearchAppointment",1,"form-control",3,"keyup","keydown.Space","keydown.Enter"],["searchInput",""],[1,"input-group-append"],["class","input-group-text","id","basic-addon1",4,"ngIf"],["data-test-id","btnResetApSerach","mat-icon-button","","aria-label","Reset appointment search",3,"click",4,"ngIf"],[1,"mat-elevation-z8"],["mat-table","",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",3,"routerLink",4,"matCellDef"],["matColumnDef","age"],["matColumnDef","starts_in"],["matColumnDef","location"],["matColumnDef","cheif_complaint"],["matColumnDef","actions"],["mat-cell","",4,"matCellDef"],["class","mat-row",4,"matNoDataRow"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"upcoming",4,"matRowDef","matRowDefColumns"],["hidePageSize","","showFirstLastButtons","","aria-label","Select page of periodic elements","data-test-id","matPaginatorAppointment",3,"pageSizeOptions"],["appointmentPaginator",""],["id","basic-addon1",1,"input-group-text"],["src","assets/svgs/search-icon.svg","alt","","width","20px","height","20px"],["data-test-id","btnResetApSerach","mat-icon-button","","aria-label","Reset appointment search",3,"click"],[1,"ml-0",2,"line-height","normal"],["mat-header-cell",""],["mat-cell","",3,"routerLink"],[1,"d-flex","align-items-center"],["alt","","width","32px","height","32px",2,"border-radius","50%",3,"src"],[1,"font-bold","ml-2"],[3,"ngClass"],["mat-cell",""],[1,"actions-btn-wrap","d-flex","align-items-center"],["type","button","data-test-id","btnRescheduleAppointment",1,"action-btn","blue-btn","mr-2",3,"click"],["type","button","data-test-id","btnCancelAppointment",1,"action-btn","pink-btn",3,"click"],[1,"mat-row"],[1,"mat-cell","text-center"],["mat-header-row",""],["mat-row",""]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-accordion",3)(4,"mat-expansion-panel",4)(5,"mat-expansion-panel-header",5)(6,"mat-panel-title")(7,"div",6),t._UZ(8,"img",7),t.TgZ(9,"h6",8),t._uU(10),t.ALo(11,"translate"),t.qZA(),t.TgZ(12,"mat-icon",9),t.ALo(13,"translate"),t._uU(14,"help_outline"),t.qZA(),t.TgZ(15,"div",10),t.NdJ("click",function(r){return r.stopPropagation()}),t.TgZ(16,"input",11,12),t.NdJ("keyup",function(r){return o.applyFilter1(r)})("keydown.Space",function(r){return r.stopPropagation()})("keydown.Enter",function(r){return r.stopPropagation()}),t.qZA(),t.TgZ(18,"div",13),t.YNc(19,N,2,0,"span",14),t.YNc(20,E,3,0,"button",15),t.qZA()()()()(),t.TgZ(21,"div",16)(22,"table",17),t.ynx(23,18),t.YNc(24,R,3,3,"th",19),t.YNc(25,j,6,9,"td",20),t.BQk(),t.ynx(26,21),t.YNc(27,Q,3,3,"th",19),t.YNc(28,J,3,8,"td",20),t.BQk(),t.ynx(29,22),t.YNc(30,F,3,3,"th",19),t.YNc(31,z,3,9,"td",20),t.BQk(),t.ynx(32,23),t.YNc(33,V,3,3,"th",19),t.YNc(34,B,2,5,"td",20),t.BQk(),t.ynx(35,24),t.YNc(36,G,3,3,"th",19),t.YNc(37,$,2,5,"td",20),t.BQk(),t.ynx(38,25),t.YNc(39,K,3,3,"th",19),t.YNc(40,W,8,9,"td",26),t.BQk(),t.YNc(41,q,4,4,"tr",27),t.YNc(42,X,1,0,"tr",28),t.YNc(43,tt,1,3,"tr",29),t.qZA(),t._UZ(44,"mat-paginator",30,31),t.qZA()()()()()()),2&n&&(t.xp6(4),t.Q6J("expanded",!0),t.xp6(6),t.AsE("",t.lcZ(11,10,"Appointments")," (",o.appointments.length?o.appointments.length:0,")"),t.xp6(2),t.s9C("matTooltip",t.lcZ(13,12,"Scheduled appointments")),t.xp6(7),t.Q6J("ngIf",!o.dataSource.filter),t.xp6(1),t.Q6J("ngIf",o.dataSource.filter),t.xp6(2),t.Q6J("dataSource",o.dataSource),t.xp6(20),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(14,nt)))},dependencies:[_.mk,_.O5,v.rH,m.pp,m.ib,m.yz,m.yK,g.NW,c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.ge,c.ev,c.XQ,c.Gk,c.Ee,T.gM,S.Hw,O.lW,U.z,C.X$],styles:[".mat-elevation-z8[_ngcontent-%COMP%]{box-shadow:none;width:100%;overflow-x:auto}table[_ngcontent-%COMP%]{width:100%;font-family:DM Sans}th.mat-header-cell[_ngcontent-%COMP%]{border:none;font-size:14px!important;font-weight:700;color:var(--color-gray);height:21px}th.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%]{border:none;min-width:60px;white-space:nowrap;padding-right:24px}th.mat-header-cell[_ngcontent-%COMP%]   span.alert-danger[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%]   span.alert-danger[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%]   span.alert-danger[_ngcontent-%COMP%]{color:var(--color-red);font-weight:700;background:transparent;border:none}th.mat-header-cell[_ngcontent-%COMP%]   span.alert-success[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%]   span.alert-success[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%]   span.alert-success[_ngcontent-%COMP%]{color:var(--color-green);font-weight:700;background:transparent;border:none}td.mat-cell[_ngcontent-%COMP%]{font-size:16px}tr.mat-row[_ngcontent-%COMP%], tr.mat-footer-row[_ngcontent-%COMP%]{height:88px;border-radius:8px;cursor:pointer}tr.mat-row.upcoming[_ngcontent-%COMP%]{background:#E6FFF3!important}tr.mat-row[_ngcontent-%COMP%]:nth-child(odd){background:#F7F7FA}td[_ngcontent-%COMP%]:first-child, th[_ngcontent-%COMP%]:first-child{border-radius:8px 0 0 8px}td[_ngcontent-%COMP%]:last-child, th[_ngcontent-%COMP%]:last-child{border-radius:0 8px 8px 0}.actions-btn-wrap[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]{outline:none;border:none;height:36px;min-width:102px;padding:6px 8px;background:white;border-radius:4px;color:var(--color-black);font-family:DM Sans;font-size:16px}.actions-btn-wrap[_ngcontent-%COMP%]   .blue-btn[_ngcontent-%COMP%]{background:var(--color-lightGray);color:var(--color-darkBlue)}.actions-btn-wrap[_ngcontent-%COMP%]   .pink-btn[_ngcontent-%COMP%]{background:var(--color-lightPink);color:var(--color-red)}.intel-accordion-con[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.mat-expanded[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{display:flex}.input-group[_ngcontent-%COMP%]{background:var(--color-white);border:1px solid rgba(127,123,146,.5);border-radius:6px;height:46px;align-items:center;max-width:60vw;width:300px;display:none}.input-group[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{background:none;border:none;cursor:default}.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{border:none;outline:none;background:transparent;font-size:16px;line-height:150%;padding-left:16px}.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus{box-shadow:none}@media (max-width: 768px){.input-group[_ngcontent-%COMP%]{width:100%;max-width:100%;margin:10px 0}.intel-accordion-con[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%], .intel-accordion-con[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.mat-expanded[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content}}"]}),e})()}];let ot=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[v.Bz.forChild(et),v.Bz]}),e})();var it=s(529),at=s(9832),st=s(6261),rt=s(1075);function P(e){return new at.w(e,"./assets/i18n/",".json")}let ct=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[{provide:g.ye,useClass:st.e}],imports:[_.ez,ot,m.To,g.TU,c.p0,T.AV,S.Ps,O.ot,C.aw.forRoot({loader:{provide:C.Zw,useFactory:P,deps:[it.eN]}}),rt.m]}),e})()}}]);