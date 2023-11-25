import { Component } from '@angular/core';
import { BarLoadingService } from './bar-loading.service';

@Component({
  selector: 'app-bar-loading',
  templateUrl: './bar-loading.component.html',
  styleUrls: ['./bar-loading.component.scss']
})
export class BarLoadingComponent {
  public loading:boolean = false;

  constructor(
    private barLoadingService: BarLoadingService,
  ) {
    this.subscribeToEvents();
   }

  ngOnInit(): void {
  }

  private subscribeToEvents(): void {
    this.barLoadingService.loadingStatus.subscribe((isActive: boolean) => {
      if (isActive) {
        this.loading = true;
      } else {
        setTimeout( () => { 
          this.loading = false;
         }, 500 );
      }
    });
  }
}
