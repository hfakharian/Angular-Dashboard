import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../BaseComponent/base-component';
import { BarLoadingService } from 'src/app/Elements/Dashboard/bar-loading/bar-loading.service';
import { BarMessageService } from 'src/app/Elements/Dashboard/bar-message/bar-message.service';
import { MasterLayoutPanelService } from 'src/app/Containers/master-layout-panel/master-layout-panel.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent extends BaseComponent implements OnInit {
  
  constructor(
    barLoadingService:BarLoadingService,
    barMessageService:BarMessageService,
    private masterLayoutPanelService:MasterLayoutPanelService,
 ) {
   super(barLoadingService,barMessageService);
 }

 ngOnInit(): void {
   
   //this.barLoadingService.loadingStatusEvent(true);
 }

}

