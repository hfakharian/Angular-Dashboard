import { Component } from '@angular/core';
import { BaseComponent } from '../../BaseComponent/base-component';
import { BarLoadingService } from 'src/app/Elements/Dashboard/bar-loading/bar-loading.service';
import { BarMessageService } from 'src/app/Elements/Dashboard/bar-message/bar-message.service';
import { MasterLayoutPanelService } from 'src/app/Containers/master-layout-panel/master-layout-panel.service';
import { ResultMessageType } from 'src/app/Entities/Collections/Enum/ResultMessageType';

@Component({
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent extends BaseComponent {

  constructor(
    barLoadingService:BarLoadingService,
    barMessageService:BarMessageService,
    private masterLayoutPanelService:MasterLayoutPanelService,
 ) {
   super(barLoadingService,barMessageService);
 }

 ngOnInit(): void {
   this.loading = true;
   this.message = [];
   //this.barLoadingService.loadingStatusEvent(true);
 }

 barThisEnable(t:boolean){
   this.masterLayoutPanelService.barThisSideEnableEvent(t);
 }

 barThisStatus(t:boolean){
   this.masterLayoutPanelService.barThisSideStatusEvent(t);
 }

 barThatEnable(t:boolean){
   this.masterLayoutPanelService.barThatSideEnableEvent(t);
 }

 barThatStatus(t:boolean){
   this.masterLayoutPanelService.barThatSideStatusEvent(t);
 }

 addLoading(t:boolean){
   this.barLoadingService.loadingStatusEvent(t);
 }

 private index :number = 1;
 addMessage(t:number){
   switch(t){
     case 1:
       this.barMessageService.messageStatusEvent(
         [
           {type : ResultMessageType.Success,comment:"Helloworld" + this.index},
         ]
       );
       break;
     case 2:
       this.barMessageService.messageStatusEvent(
         [
           {type : ResultMessageType.Warning,comment:"Helloworld" + this.index},
         ]
       );
       break;
     case 3:
       this.barMessageService.messageStatusEvent(
         [
           {type : ResultMessageType.Danger,comment:"Helloworld" + this.index},
         ]
       );
       break;
     case 4:
         this.barMessageService.messageStatusEvent(
           [
             {type : ResultMessageType.Info,comment:"Helloworld" + this.index},
           ]
         );
         break;
     case 5:
       this.barMessageService.messageStatusEvent(
         [
           {type : ResultMessageType.Success,comment:"Helloworld" + this.index},
           {type : ResultMessageType.Warning,comment:"Helloworld" + this.index},
           {type : ResultMessageType.Danger,comment:"Helloworld" + this.index},
           {type : ResultMessageType.Info,comment:"Helloworld" + this.index},
         ]
       );
       break;
   }

   this.index++;
 }

}
