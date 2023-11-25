import { Component, OnInit, Input, Inject, Output, EventEmitter, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BarThisSideTogglerService } from './bar-this-side-toggler.service';

@Component({
  selector: 'app-bar-this-side-toggler',
  templateUrl: './bar-this-side-toggler.component.html',
  styleUrls: ['./bar-this-side-toggler.component.scss']
})
export class BarThisSideTogglerComponent implements OnInit {
  @Input() barThisSideControl: string = "";
  @Input() barThisSideSize: string = "";
  @Input() barThisSideIcon: string = "";
  @Input() barThisSideOpen: boolean = true;
  @Input() barThisSideMinimizer: boolean = false;
  @Output() barThisSideStatus = new EventEmitter<boolean>();

  private disable: boolean = true;

  private hasClassShowWeb: boolean = false;
  private hasClassShowMob: boolean = false;

  private element : any;


  constructor(
    private barThisSideTogglerService: BarThisSideTogglerService,
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  ngOnInit(): void {
    this.subscribeToEvents();
    this.element = document.getElementById(this.barThisSideControl);

    switch (this.barThisSideSize) {
      case "sm":
        if (this.barThisSideOpen)
          this.document.body.classList.add('app-this-side-sm-show');
        else
          this.document.body.classList.add('app-this-side-sm-hide');

        this.document.body.classList.add('app-this-side-sm-hide-mob');
        break;
      case "md":
        if (this.barThisSideOpen)
          this.document.body.classList.add('app-this-side-md-show');
        else
          this.document.body.classList.add('app-this-side-md-hide');

        this.document.body.classList.add('app-this-side-md-hide-mob');
        break;
      case "lg":
        if (this.barThisSideOpen)
          this.document.body.classList.add('app-this-side-lg-show');
        else
          this.document.body.classList.add('app-this-side-lg-hide');

        this.document.body.classList.add('app-this-side-lg-hide-mob');
        break;
    }

    if(this.barThisSideMinimizer){
      this.element.classList.add('minimizer');
    }

  }

  private subscribeToEvents(): void {
    this.barThisSideTogglerService.barSideEnable.subscribe((status: boolean) => {
      this.disable = status;
    });

    this.barThisSideTogglerService.barSideStatus.subscribe((status: boolean) => {
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
      switch (this.barThisSideSize) {
        case "sm":
          this.hasClassShowMob = this.document.body.classList.contains("app-this-side-sm-show-mob");

          if (this.hasClassShowMob) {
            this.document.body.classList.remove('app-this-side-sm-show-mob');
            this.document.body.classList.add('app-this-side-sm-hide-mob');
            this.barThisSideStatus.emit(false);
          } else {
            this.document.body.classList.remove('app-this-side-sm-hide-mob');
            this.document.body.classList.add('app-this-side-sm-show-mob');
            this.barThisSideStatus.emit(true);
          }

          break;
        case "md":
          this.hasClassShowMob = this.document.body.classList.contains("app-this-side-md-show-mob");

          if (this.hasClassShowMob) {
            this.document.body.classList.remove('app-this-side-md-show-mob');
            this.document.body.classList.add('app-this-side-md-hide-mob');
            this.barThisSideStatus.emit(false);
          } else {
            this.document.body.classList.remove('app-this-side-md-hide-mob');
            this.document.body.classList.add('app-this-side-md-show-mob');
            this.barThisSideStatus.emit(true);
          }

          break;
        case "lg":
          this.hasClassShowMob = this.document.body.classList.contains("app-this-side-lg-show-mob");

          if (this.hasClassShowMob) {
            this.document.body.classList.remove('app-this-side-lg-show-mob');
            this.document.body.classList.add('app-this-side-lg-hide-mob');
            this.barThisSideStatus.emit(false);
          } else {
            this.document.body.classList.remove('app-this-side-lg-hide-mob');
            this.document.body.classList.add('app-this-side-lg-show-mob');
            this.barThisSideStatus.emit(true);
          }
          break;
      }
    } else if (window.innerWidth > 575) {
      switch (this.barThisSideSize) {
        case "sm":
          this.hasClassShowWeb = this.document.body.classList.contains("app-this-side-sm-show");

          if (this.hasClassShowWeb) {
            this.document.body.classList.remove('app-this-side-sm-show');
            this.document.body.classList.add('app-this-side-sm-hide');
            this.barThisSideStatus.emit(false);
          } else {
            this.document.body.classList.remove('app-this-side-sm-hide');
            this.document.body.classList.add('app-this-side-sm-show');
            this.barThisSideStatus.emit(true);
          }

          break;
        case "md":
          this.hasClassShowWeb = this.document.body.classList.contains("app-this-side-md-show");

          if (this.hasClassShowWeb) {
            this.document.body.classList.remove('app-this-side-md-show');
            this.document.body.classList.add('app-this-side-md-hide');
            this.barThisSideStatus.emit(false);
          } else {
            this.document.body.classList.remove('app-this-side-md-hide');
            this.document.body.classList.add('app-this-side-md-show');
            this.barThisSideStatus.emit(true);
          }

          break;
        case "lg":
          this.hasClassShowWeb = this.document.body.classList.contains("app-this-side-lg-show");

          if (this.hasClassShowWeb) {
            this.document.body.classList.remove('app-this-side-lg-show');
            this.document.body.classList.add('app-this-side-lg-hide');
            this.barThisSideStatus.emit(false);
          } else {
            this.document.body.classList.remove('app-this-side-lg-hide');
            this.document.body.classList.add('app-this-side-lg-show');
            this.barThisSideStatus.emit(true);
          }
          break;
      }
    }

  }

  openBodyClass() {
    if (window.innerWidth <= 575) {
      switch (this.barThisSideSize) {
        case "sm":
          this.hasClassShowMob = this.document.body.classList.contains("app-this-side-sm-show-mob");

          if (!this.hasClassShowMob) {
            this.document.body.classList.remove('app-this-side-sm-hide-mob');
            this.document.body.classList.add('app-this-side-sm-show-mob');
            this.barThisSideStatus.emit(true);
          }

          break;
        case "md":
          this.hasClassShowMob = this.document.body.classList.contains("app-this-side-md-show-mob");

          if (!this.hasClassShowMob) {
            this.document.body.classList.remove('app-this-side-md-hide-mob');
            this.document.body.classList.add('app-this-side-md-show-mob');
            this.barThisSideStatus.emit(true);
          }

          break;
        case "lg":
          this.hasClassShowMob = this.document.body.classList.contains("app-this-side-lg-show-mob");

          if (!this.hasClassShowMob) {
            this.document.body.classList.remove('app-this-side-lg-hide-mob');
            this.document.body.classList.add('app-this-side-lg-show-mob');
            this.barThisSideStatus.emit(true);
          }
          break;
      }
    } else if (window.innerWidth > 575) {
      switch (this.barThisSideSize) {
        case "sm":
          this.hasClassShowWeb = this.document.body.classList.contains("app-this-side-sm-show");

          if (!this.hasClassShowWeb) {
            this.document.body.classList.remove('app-this-side-sm-hide');
            this.document.body.classList.add('app-this-side-sm-show');
            this.barThisSideStatus.emit(true);
          }

          break;
        case "md":
          this.hasClassShowWeb = this.document.body.classList.contains("app-this-side-md-show");

          if (!this.hasClassShowWeb) {
            this.document.body.classList.remove('app-this-side-md-hide');
            this.document.body.classList.add('app-this-side-md-show');
            this.barThisSideStatus.emit(true);
          }

          break;
        case "lg":
          this.hasClassShowWeb = this.document.body.classList.contains("app-this-side-lg-show");

          if (!this.hasClassShowWeb) {
            this.document.body.classList.remove('app-this-side-lg-hide');
            this.document.body.classList.add('app-this-side-lg-show');
            this.barThisSideStatus.emit(true);
          }
          break;
      }
    }

  }

  closeBodyClass() {
    if (window.innerWidth <= 575) {
      switch (this.barThisSideSize) {
        case "sm":
          this.hasClassShowMob = this.document.body.classList.contains("app-this-side-sm-show-mob");

          if (this.hasClassShowMob) {
            this.document.body.classList.remove('app-this-side-sm-show-mob');
            this.document.body.classList.add('app-this-side-sm-hide-mob');
            this.barThisSideStatus.emit(false);
          } 

          break;
        case "md":
          this.hasClassShowMob = this.document.body.classList.contains("app-this-side-md-show-mob");

          if (this.hasClassShowMob) {
            this.document.body.classList.remove('app-this-side-md-show-mob');
            this.document.body.classList.add('app-this-side-md-hide-mob');
            this.barThisSideStatus.emit(false);
          } 

          break;
        case "lg":
          this.hasClassShowMob = this.document.body.classList.contains("app-this-side-lg-show-mob");

          if (this.hasClassShowMob) {
            this.document.body.classList.remove('app-this-side-lg-show-mob');
            this.document.body.classList.add('app-this-side-lg-hide-mob');
            this.barThisSideStatus.emit(false);
          }

          break;
      }
    } else if (window.innerWidth > 575) {
      switch (this.barThisSideSize) {
        case "sm":
          this.hasClassShowWeb = this.document.body.classList.contains("app-this-side-sm-show");

          if (this.hasClassShowWeb) {
            this.document.body.classList.remove('app-this-side-sm-show');
            this.document.body.classList.add('app-this-side-sm-hide');
            this.barThisSideStatus.emit(false);
          } 

          break;
        case "md":
          this.hasClassShowWeb = this.document.body.classList.contains("app-this-side-md-show");

          if (this.hasClassShowWeb) {
            this.document.body.classList.remove('app-this-side-md-show');
            this.document.body.classList.add('app-this-side-md-hide');
            this.barThisSideStatus.emit(false);
          } 

          break;
        case "lg":
          this.hasClassShowWeb = this.document.body.classList.contains("app-this-side-lg-show");

          if (this.hasClassShowWeb) {
            this.document.body.classList.remove('app-this-side-lg-show');
            this.document.body.classList.add('app-this-side-lg-hide');
            this.barThisSideStatus.emit(false);
          } 
          
          break;
      }
    }

  }

}
