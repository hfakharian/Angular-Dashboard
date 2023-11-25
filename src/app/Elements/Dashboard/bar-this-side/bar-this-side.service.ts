import { Injectable, EventEmitter } from '@angular/core';
import { navbarData } from 'src/app/Models/navbarSide';


@Injectable({
  providedIn: 'root'
})
export class BarThisSideService {
  navbarLoading: EventEmitter<boolean> = new EventEmitter();
  navbarStatus: EventEmitter<navbarData[]> = new EventEmitter();

  constructor(
  ) {
  }

  navbarLoadingEvent(loading:boolean) {
    this.navbarLoading.emit(loading);
  }

  navbarStatusEvent(nav:navbarData[]) {
    this.navbarStatus.emit(nav);
  }
}
