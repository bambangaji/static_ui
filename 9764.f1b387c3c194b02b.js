"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9764],{9764:(y,g,r)=>{r.r(g),r.d(g,{SchedulePageModule:()=>C});var p=r(6814),b=r(95),u=r(7852),f=r(594),m=r(8464),e=r(9468),D=r(7530),v=r(1842);function T(t,i){if(1&t){const a=e.EpF();e.TgZ(0,"div",5),e.NdJ("click",function(){const s=e.CHM(a).$implicit,n=e.oxw();return e.KtG(n.changeTab(s))}),e.TgZ(1,"p",6),e._uU(2),e.qZA()()}if(2&t){const a=i.$implicit,o=e.oxw();e.Tol(o.currentTab===a?"bg-white":"text-grey"),e.xp6(1),e.Tol(o.currentTab===a?"color-red":"text-grey"),e.xp6(1),e.hij(" ",a," ")}}const S=[{path:"",component:(()=>{class t{constructor(){this.listTab=["Daftar Jadwal","Dalam Proses","Berangkat","Sampai","Dibatalkan"],this.currentTab="Daftar Jadwal",this.dataheader=[{css:"",label:"Destinasi",sort:!0,sortASC:!0},{css:"",label:"MAWB",sort:!0,sortASC:!0},{css:"",label:"AIRLINES",sort:!0,sortASC:!0},{css:"",label:"No.Flight",sort:!0,sortASC:!0},{css:"",label:"AGENT",sort:!0,sortASC:!0},{css:"",label:"SCHEDULE",sort:!0,width:300,sortASC:!0},{css:"",label:"EST.BAG",sort:!0,sortASC:!0},{css:"",label:"EST.WEIGHT",sort:!0,sortASC:!0},{css:"",label:"DIBUAT",sort:!0,sortASC:!0},{css:"right-header-table",label:"AKSI",sort:!1,sortASC:!0}],this.dataTable=[{agent:"BSL",airlines:"Interlink Airplane",checked:!1,mawb:"819-00000004",image_from:"assets/icon/profileDummy.svg",image_to:"assets/icon/profileDummy.svg",date_departed:"20-09-2023 13:45",date_arival:"20-09-2023 13:45",collie:10,weight:100,country:"Singapore",created_at:"20-09-2022 13:45",vendor:"HD",uuid:"2",status:"Terbang",isStatus:!1,no_flight:"222",bag:20,est_bag:100,est_weight:1e3},{agent:"KSL",airlines:"Knterlink Airplane",checked:!1,mawb:"819-00000004",image_from:"assets/icon/profileDummy.svg",image_to:"assets/icon/profileDummy.svg",date_departed:"24-09-2023 13:45",date_arival:"26-09-2023 13:45",collie:12,weight:120,country:"Indonesia",created_at:"26-09-2022 13:45",vendor:"SD",uuid:"1",status:"Terbang",isStatus:!1,no_flight:"223",bag:10,est_bag:100,est_weight:1e3},{agent:"DSL",airlines:"Airplane",checked:!1,mawb:"819-00000004",image_from:"assets/icon/profileDummy.svg",image_to:"assets/icon/profileDummy.svg",date_departed:"25-09-2022 13:45",date_arival:"24-09-2022 13:45",collie:1,weight:140,country:"Taiwan",created_at:"25-09-2022 13:45",vendor:"ED",uuid:"3",status:"Terbang",isStatus:!1,no_flight:"225",bag:120,est_bag:150,est_weight:1e3},{agent:"zSL",airlines:"KLSKDLAKL Airplane",checked:!1,mawb:"219-00000004",image_from:"assets/icon/profileDummy.svg",image_to:"assets/icon/profileDummy.svg",date_departed:"22-09-2022 13:45",date_arival:"24-09-2022 13:45",collie:29,weight:150,country:"China",created_at:"23-09-2022 13:45",vendor:"MD",uuid:"5",status:"Terbang",isStatus:!1,no_flight:"2220",bag:50,est_bag:200,est_weight:1e3}]}ngOnInit(){this.setTable()}ionViewDidEnter(){this.setTable()}changeTab(a){this.currentTab=a,this.setTable()}setTable(){var a,o,l,s,n,c,d,h;return"Daftar Jadwal"===this.currentTab?null===(o=this.tableComponent)||void 0===o?void 0:o.setData(this.dataheader,this.dataTable,{exportData:!0,import:!0,bag:!0,collie:!1,noFlight:!0,checkbox:!0,importData:!0,confirm:!1,option:!0,optionChangeVendor:!0,optionDetail:!0,optionChange:!0,optionDelete:!0,checkboxAll:!0}):"Dalam Proses"===this.currentTab?null===(l=this.tableComponent)||void 0===l?void 0:l.setData(this.dataheader,this.dataTable,{exportData:!0,export:!0,ready:!0,estBag:!0,estWeight:!0,bag:!0,collie:!1,noFlight:!0,checkbox:!0,importData:!1,confirm:!1,option:!0,optionChangeVendor:!1,optionDetail:!0,optionChange:!1,optionDelete:!1,checkboxAll:!0}):"Menuju Bandara"===this.currentTab?null===(s=this.tableComponent)||void 0===s?void 0:s.setData(this.dataheader,this.dataTable,{exportData:!0,export:!0,bag:!0,collie:!1,noFlight:!0,checkbox:!0,importData:!1,confirm:!1,option:!0,optionChangeVendor:!1,optionDetail:!0,optionChange:!1,optionDelete:!1,checkboxAll:!0}):"Dibandara"===this.currentTab?null===(n=this.tableComponent)||void 0===n?void 0:n.setData(this.dataheader,this.dataTable,{exportData:!0,export:!0,bag:!0,collie:!1,noFlight:!0,checkbox:!0,importData:!1,confirm:!1,option:!0,optionChangeVendor:!0,optionDetail:!0,optionChange:!0,optionDelete:!0,checkboxAll:!0}):"Berangkat"===this.currentTab?null===(c=this.tableComponent)||void 0===c?void 0:c.setData(this.dataheader,this.dataTable,{export:!0,estBag:!0,estWeight:!0,bag:!0,collie:!1,noFlight:!0,complete:!0,checkbox:!0,importData:!1,confirm:!1,option:!0,optionChangeVendor:!1,optionDetail:!0,optionChange:!1,optionDelete:!1,checkboxAll:!0}):"Sampai"===this.currentTab?null===(d=this.tableComponent)||void 0===d?void 0:d.setData(this.dataheader,this.dataTable,{export:!0,estBag:!0,estWeight:!0,bag:!0,collie:!1,noFlight:!0,checkbox:!0,importData:!1,confirm:!1,option:!0,optionChangeVendor:!1,optionDetail:!0,optionChange:!1,optionDelete:!1,checkboxAll:!0}):"Dibatalkan"===this.currentTab?null===(h=this.tableComponent)||void 0===h?void 0:h.setData(this.dataheader,this.dataTable,{export:!0,estBag:!0,estWeight:!0,bag:!0,collie:!1,noFlight:!0,checkbox:!0,exportData:!1,importData:!1,confirm:!1,option:!0,optionChangeVendor:!1,optionDetail:!0,optionChange:!1,optionDelete:!1,checkboxAll:!1}):null===(a=this.tableComponent)||void 0===a?void 0:a.setData(this.dataheader,this.dataTable,{bag:!0,collie:!1,estBag:!0,estWeight:!0,noFlight:!0,confirm:!0,importData:!1,option:!0,optionDetail:!0,optionChange:!0,optionDelete:!0,checkboxAll:!0})}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-schedule"]],viewQuery:function(a,o){if(1&a&&e.Gf(m.R,5),2&a){let l;e.iGM(l=e.CRH())&&(o.tableComponent=l.first)}},decls:7,vars:2,consts:[[3,"fullscreen"],["title","Schedule"],[1,"z102","position-relative","mr-4","ml-4"],[1,"row","bg-grey-blue2","pl-3"],["class","pointer","style","border-top-right-radius: 10px; border-top-left-radius: 10px;",3,"class","click",4,"ngFor","ngForOf"],[1,"pointer",2,"border-top-right-radius","10px","border-top-left-radius","10px",3,"click"],[1,"mb-0","px-3","py-2","bold-text"]],template:function(a,o){1&a&&(e.TgZ(0,"ion-content",0)(1,"app-dashboard-background"),e._UZ(2,"app-label-page",1),e.TgZ(3,"ion-card",2)(4,"div",3),e.YNc(5,T,3,5,"div",4),e.qZA(),e._UZ(6,"app-table-custom"),e.qZA()()()),2&a&&(e.Q6J("fullscreen",!0),e.xp6(5),e.Q6J("ngForOf",o.listTab))},dependencies:[p.sg,u.PM,u.W2,D.U,v.u,m.R],styles:[".chart-container[_ngcontent-%COMP%]{position:relative;height:400px!important;width:800px!important}canvas[_ngcontent-%COMP%]{width:100%!important;height:100%!important}"]}),t})()},{path:"log",loadChildren:()=>r.e(6533).then(r.bind(r,6533)).then(t=>t.LogPageModule)},{path:"import",loadChildren:()=>r.e(8897).then(r.bind(r,8897)).then(t=>t.ImportPageModule)}];let x=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[f.Bz.forChild(S),f.Bz]}),t})();var A=r(4636);let C=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.ez,b.u5,u.Pc,x,A.K]}),t})()}}]);