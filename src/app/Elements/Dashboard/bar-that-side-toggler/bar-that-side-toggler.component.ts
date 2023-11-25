import { Component, OnInit, Input, Inject, Output, EventEmitter, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BarThatSideTogglerService } from './bar-that-side-toggler.service';

@Component({
  selector: 'app-bar-that-side-toggler',
  templateUrl: './bar-that-side-toggler.component.html',
  styleUrls: ['./bar-that-side-toggler.component.scss']
})
export class BarThatSideTogglerComponent implements OnInit {
  @Input() barThatSideControl: string = "";
  @Input() barThatSideSize: string = "";
  @Input() barThatSideIcon: string = "";
  @Input() barThatSideOpen: boolean = true;
  @Output() barThatSideStatus = new EventEmitter<boolean>();

  private disable: boolean = true;

  private hasClassShowWeb: boolean = false;
  private hasClassShowMob: boolean = false;


  constructor(
    private barThatSideTogglerService: BarThatSideTogglerService,
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  ngOnInit(): void {
    this.subscribeToEvents();
    switch (this.barThatSideSize) {
      case "sm":
        if (this.barThatSideOpen)
          this.document.body.classList.add('app-that-side-sm-show');
        else
          this.document.body.classList.add('app-that-side-sm-hide');

        this.document.body.classList.add('app-that-side-sm-hide-mob');
        break;
      case "md":
        if (this.barThatSideOpen)
          this.document.body.classList.add('app-that-side-md-show');
        else
          this.document.body.classList.add('app-that-side-md-hide');

        this.document.body.classList.add('app-that-side-md-hide-mob');
        break;
      case "lg":
        if (this.barThatSideOpen)
          this.document.body.classList.add('app-that-side-lg-show');
        else
          this.document.body.classList.add('app-that-side-lg-hide');

        this.document.body.classList.add('app-that-side-lg-hide-mob');
        break;
    }
  }

  private subscribeToEvents(): void {
    this.barThatSideTogglerService.barSideEnable.subscribe((status: boolean) => {
      this.disable = status;
    });

    this.barThatSideTogglerService.barSideStatus.subscribe((status: boolean) => {
      if(status)
        this.openBodyClass();
      else
        this.closeBodyClass();
    });
  }

  public btnToggler() {
    if(!this.disable)
      return;

    if (window.innerWidth <= 575) {
      this.changeBodyClass();
    } else if (window.innerWidth > 575) {
      this.changeBodyClass();
    }
  }

  changeBodyClass() {
    if (window.innerWidth <= 575) {
      switch (this.barThatSideSize) {
        case "sm":
          this.hasClassShowMob = this.document.body.classList.contains("app-that-side-sm-show-mob");

          if (this.hasClassShowMob) {
            this.document.body.classList.remove('app-that-side-sm-show-mob');
            this.document.body.classList.add('app-that-side-sm-hide-mob');
            this.barThatSideStatus.emit(false);
          } else {
            this.document.body.classList.remove('app-that-side-sm-hide-mob');
            this.document.body.classList.add('app-that-side-sm-show-mob');
            this.barThatSideStatus.emit(true);
          }

          break;
        case "md":
          this.hasClassShowMob = this.document.body.classList.contains("app-that-side-md-show-mob");

          if (this.hasClassShowMob) {
            this.document.body.classList.remove('app-that-side-md-show-mob');
            this.document.body.classList.add('app-that-side-md-hide-mob');
            this.barThatSideStatus.emit(false);
          } else {
            this.document.body.classList.remove('app-that-side-md-hide-mob');
            this.document.body.classList.add('app-that-side-md-show-mob');
            this.barThatSideStatus.emit(true);
          }

          break;
        case "lg":
          this.hasClassShowMob = this.document.body.classList.contains("app-that-side-lg-show-mob");

          if (this.hasClassShowMob) {
            this.document.body.classList.remove('app-that-side-lg-show-mob');
            this.document.body.classList.add('app-that-side-lg-hide-mob');
            this.barThatSideStatus.emit(false);
          } else {
            this.document.body.classList.remove('app-that-side-lg-hide-mob');
            this.document.body.classList.add('app-that-side-lg-show-mob');
            this.barThatSideStatus.emit(true);
          }
          break;
      }
    } else if (window.innerWidth > 575) {
      switch (this.barThatSideSize) {
        case "sm":
          this.hasClassShowWeb = this.document.body.classList.contains("app-that-side-sm-show");

          if (this.hasClassShowWeb) {
            this.document.body.classList.remove('app-that-side-sm-show');
            this.document.body.classList.add('app-that-side-sm-hide');
            this.barThatSideStatus.emit(false);
          } else {
            this.document.body.classList.remove('app-that-side-sm-hide');
            this.document.body.classList.add('app-that-side-sm-show');
            this.barThatSideStatus.emit(true);
          }

          break;
        case "md":
          this.hasClassShowWeb = this.document.body.classList.contains("app-that-side-md-show");

          if (this.hasClassShowWeb) {
            this.document.body.classList.remove('app-that-side-md-show');
            this.document.body.classList.add('app-that-side-md-hide');
            this.barThatSideStatus.emit(false);
          } else {
            this.document.body.classList.remove('app-that-side-md-hide');
            this.document.body.classList.add('app-that-side-md-show');
            this.barThatSideStatus.emit(true);
          }

          break;
        case "lg":
          this.hasClassShowWeb = this.document.body.classList.contains("app-that-side-lg-show");

          if (this.hasClassShowWeb) {
            this.document.body.classList.remove('app-that-side-lg-show');
            this.document.body.classList.add('app-that-side-lg-hide');
            this.barThatSideStatus.emit(false);
          } else {
            this.document.body.classList.remove('app-that-side-lg-hide');
            this.document.body.classList.add('app-that-side-lg-show');
            this.barThatSideStatus.emit(true);
          }
          break;
      }
    }
  }

  openBodyClass() {
    if (window.innerWidth <= 575) {
      switch (this.barThatSideSize) {
        case "sm":
          this.hasClassShowMob = this.document.body.classList.contains("app-that-side-sm-show-mob");

          if (!this.hasClassShowMob) {
            this.document.body.classList.remove('app-that-side-sm-hide-mob');
            this.document.body.classList.add('app-that-side-sm-show-mob');
            this.barThatSideStatus.emit(true);
          }

          break;
        case "md":
          this.hasClassShowMob = this.document.body.classList.contains("app-that-side-md-show-mob");

          if (!this.hasClassShowMob) {
            this.document.body.classList.remove('app-that-side-md-hide-mob');
            this.document.body.classList.add('app-that-side-md-show-mob');
            this.barThatSideStatus.emit(true);
          }

          break;
        case "lg":
          this.hasClassShowMob = this.document.body.classList.contains("app-that-side-lg-show-mob");

          if (!this.hasClassShowMob) {
            this.document.body.classList.remove('app-that-side-lg-hide-mob');
            this.document.body.classList.add('app-that-side-lg-show-mob');
            this.barThatSideStatus.emit(true);
          }
          break;
      }
    } else if (window.innerWidth > 575) {
      switch (this.barThatSideSize) {
        case "sm":
          this.hasClassShowWeb = this.document.body.classList.contains("app-that-side-sm-show");

          if (!this.hasClassShowWeb) {
            this.document.body.classList.remove('app-that-side-sm-hide');
            this.document.body.classList.add('app-that-side-sm-show');
            this.barThatSideStatus.emit(true);
          }

          break;
        case "md":
          this.hasClassShowWeb = this.document.body.classList.contains("app-that-side-md-show");

          if (!this.hasClassShowWeb) {
            this.document.body.classList.remove('app-that-side-md-hide');
            this.document.body.classList.add('app-that-side-md-show');
            this.barThatSideStatus.emit(true);
          }

          break;
        case "lg":
          this.hasClassShowWeb = this.document.body.classList.contains("app-that-side-lg-show");

          if (!this.hasClassShowWeb) {
            this.document.body.classList.remove('app-that-side-lg-hide');
            this.document.body.classList.add('app-that-side-lg-show');
            this.barThatSideStatus.emit(true);
          }
          break;
      }
    }
  }

  closeBodyClass() {
    if (window.innerWidth <= 575) {
      switch (this.barThatSideSize) {
        case "sm":
          this.hasClassShowMob = this.document.body.classList.contains("app-that-side-sm-show-mob");

          if (this.hasClassShowMob) {
            this.document.body.classList.remove('app-that-side-sm-show-mob');
            this.document.body.classList.add('app-that-side-sm-hide-mob');
            this.barThatSideStatus.emit(false);
          } 

          break;
        case "md":
          this.hasClassShowMob = this.document.body.classList.contains("app-that-side-md-show-mob");

          if (this.hasClassShowMob) {
            this.document.body.classList.remove('app-that-side-md-show-mob');
            this.document.body.classList.add('app-that-side-md-hide-mob');
            this.barThatSideStatus.emit(false);
          } 

          break;
        case "lg":
          this.hasClassShowMob = this.document.body.classList.contains("app-that-side-lg-show-mob");

          if (this.hasClassShowMob) {
            this.document.body.classList.remove('app-that-side-lg-show-mob');
            this.document.body.classList.add('app-that-side-lg-hide-mob');
            this.barThatSideStatus.emit(false);
          } 
          
          break;
      }
    } else if (window.innerWidth > 575) {
      switch (this.barThatSideSize) {
        case "sm":
          this.hasClassShowWeb = this.document.body.classList.contains("app-that-side-sm-show");

          if (this.hasClassShowWeb) {
            this.document.body.classList.remove('app-that-side-sm-show');
            this.document.body.classList.add('app-that-side-sm-hide');
            this.barThatSideStatus.emit(false);
          } 

          break;
        case "md":
          this.hasClassShowWeb = this.document.body.classList.contains("app-that-side-md-show");

          if (this.hasClassShowWeb) {
            this.document.body.classList.remove('app-that-side-md-show');
            this.document.body.classList.add('app-that-side-md-hide');
            this.barThatSideStatus.emit(false);
          } 

          break;
        case "lg":
          this.hasClassShowWeb = this.document.body.classList.contains("app-that-side-lg-show");

          if (this.hasClassShowWeb) {
            this.document.body.classList.remove('app-that-side-lg-show');
            this.document.body.classList.add('app-that-side-lg-hide');
            this.barThatSideStatus.emit(false);
          } 
          
          break;
      }
    }
  }

}
