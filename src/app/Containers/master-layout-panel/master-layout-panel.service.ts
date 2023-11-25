import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterLayoutPanelService {
  profileStatus: EventEmitter<boolean> = new EventEmitter();
  menuStatus: EventEmitter<boolean> = new EventEmitter();

    
  barThisSideEnable: EventEmitter<boolean> = new EventEmitter();
  barThisSideStatus: EventEmitter<boolean> = new EventEmitter();
  barThatSideEnable: EventEmitter<boolean> = new EventEmitter();
  barThatSideStatus: EventEmitter<boolean> = new EventEmitter();

  constructor(
  ) {
  }
  
  profileStatusEvent(isActive:boolean) {
    this.profileStatus.emit(isActive);
  }

  menuStatusEvent(isActive:boolean) {
    this.menuStatus.emit(isActive);
  }

  barThisSideEnableEvent(isActive:boolean) {
    this.barThisSideEnable.emit(isActive);
  }
  barThisSideStatusEvent(isActive:boolean) {
    this.barThisSideStatus.emit(isActive);
  }

  barThatSideEnableEvent(isActive:boolean) {
    this.barThatSideEnable.emit(isActive);
  }
  barThatSideStatusEvent(isActive:boolean) {
    this.barThatSideStatus.emit(isActive);
  }
}
