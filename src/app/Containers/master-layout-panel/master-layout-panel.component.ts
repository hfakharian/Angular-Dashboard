import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

import { navbarItem } from '../navbarData/_navbarItem';
import { BarThatSideTogglerComponent, BarThisSideTogglerComponent } from 'src/app/Elements/Dashboard';
import { BarThisSideService } from 'src/app/Elements/Dashboard/bar-this-side/bar-this-side.service';
import { MasterLayoutPanelService } from './master-layout-panel.service';
import { BarThisSideTogglerService } from 'src/app/Elements/Dashboard/bar-this-side-toggler/bar-this-side-toggler.service';
import { BarThatSideTogglerService } from 'src/app/Elements/Dashboard/bar-that-side-toggler/bar-that-side-toggler.service';

@Component({
  selector: 'app-master-layout-panel',
  templateUrl: './master-layout-panel.component.html'
})
export class MasterLayoutPanelComponent implements OnInit {
  @ViewChild('barThisSideTogglerComponent') barThisSideToggler?: BarThisSideTogglerComponent;
  @ViewChild('barThatSideTogglerComponent') barThatSideToggler?: BarThatSideTogglerComponent;
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if ((document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) {
      this.showScroll = true;
    }
    else if (this.showScroll && (document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) {
      this.showScroll = false;
    }
  }
  
  public navbarItem: any;
  

  public showScroll: boolean = false;
  public showScrollHeight = 500;
  public hideScrollHeight = 400;

  constructor(
    private barThisSideTogglerService: BarThisSideTogglerService,
    private barThatSideTogglerService: BarThatSideTogglerService,
    private masterLayoutPanelService: MasterLayoutPanelService,
    private barThisSideService: BarThisSideService,
  ) { 
    this.subscribeToEvents();
  }
  
  ngOnInit(): void {
    this.barThisSideService.navbarLoadingEvent(true);
    setTimeout( () => { 
      this.navbarItem = navbarItem;
      this.barThisSideService.navbarStatusEvent(this.navbarItem);
     }, 1000 );
  }

  private subscribeToEvents(): void {
    this.masterLayoutPanelService.profileStatus.subscribe((isActive: boolean) => {
      
    });
    this.masterLayoutPanelService.menuStatus.subscribe((isActive: boolean) => {
      
    });

    this.masterLayoutPanelService.barThisSideEnable.subscribe((isActive: boolean) => {
      this.barThisSideTogglerService.barSideEnableEvent(isActive);
    });
    this.masterLayoutPanelService.barThisSideStatus.subscribe((isActive: boolean) => {
      this.barThisSideTogglerService.barSideStatusEvent(isActive);
    });
    this.masterLayoutPanelService.barThatSideEnable.subscribe((isActive: boolean) => {
      this.barThatSideTogglerService.barSideEnableEvent(isActive);
    });
    this.masterLayoutPanelService.barThatSideStatus.subscribe((isActive: boolean) => {
      this.barThatSideTogglerService.barSideStatusEvent(isActive);
    });
  }

  dataStatus(event:any){
    console.log(event);
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

}
