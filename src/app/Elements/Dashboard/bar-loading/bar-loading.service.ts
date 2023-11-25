import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BarLoadingService  {
  loadingStatus: EventEmitter<boolean> = new EventEmitter();

  constructor(
  ) {
  }

  loadingStatusEvent(isActive:boolean) {
    this.loadingStatus.emit(isActive);
  }

}
