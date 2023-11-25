import { Component } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { BaseComponent } from 'src/app/Components/BaseComponent/base-component';
import { BarLoadingService } from '../bar-loading/bar-loading.service';
import { BarMessageService } from '../bar-message/bar-message.service';

@Component({
  selector: 'app-bar-nav-profile',
  templateUrl: './bar-nav-profile.component.html',
  styleUrls: ['./bar-nav-profile.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class BarNavProfileComponent extends BaseComponent {

  constructor(
    barLoadingService:BarLoadingService,
    barMessageService:BarMessageService,
 ) {
   super(barLoadingService,barMessageService);
 }

 clickNavProfile(v:number){
  
 }

}
