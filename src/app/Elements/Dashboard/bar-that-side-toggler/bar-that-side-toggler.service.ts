import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BarThatSideTogglerService {
  barSideStatus: EventEmitter<boolean> = new EventEmitter();
  barSideEnable: EventEmitter<boolean> = new EventEmitter();

  constructor(
  ) {
  }

  barSideEnableEvent(status: boolean) {
    this.barSideEnable.emit(status);
  }

  barSideStatusEvent(status: boolean) {
    this.barSideStatus.emit(status);
  }
}
