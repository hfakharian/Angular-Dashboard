import { Component, OnInit, Input, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

import { navbarData } from 'src/app/Models/navbarSide';
import { BarThisSideService } from './bar-this-side.service';


@Component({
  selector: 'app-bar-this-side',
  templateUrl: './bar-this-side.component.html',
  styleUrls: ['./bar-this-side.component.scss'],
})
export class BarThisSideComponent implements OnInit {
  @Input() navbarItems: navbarData[] = [];

  public loading:boolean = false;
  private currentUrl: string = "";
  private currentIndex: number = 0;

  private hasClassShowMobSM: boolean = false;
  private hasClassShowMobMD: boolean = false;
  private hasClassShowMobLG: boolean = false;

  constructor(
    private barThisSideService: BarThisSideService,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private router: Router
  ) {
    this.subscribeToEvents();

    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.currentUrl = this.router.url.split('?')[0];

        this.hasClassShowMobSM = this.document.body.classList.contains("app-this-side-sm-show-mob");
        this.hasClassShowMobMD = this.document.body.classList.contains("app-this-side-md-show-mob");
        this.hasClassShowMobLG = this.document.body.classList.contains("app-this-side-lg-show-mob");

        if (this.hasClassShowMobSM) {
          this.document.body.classList.remove('app-this-side-sm-show-mob');
          this.document.body.classList.add('app-this-side-sm-hide-mob');
        }
        if (this.hasClassShowMobMD) {
          this.document.body.classList.remove('app-this-side-md-show-mob');
          this.document.body.classList.add('app-this-side-md-hide-mob');
        }
        if (this.hasClassShowMobLG) {
          this.document.body.classList.remove('app-this-side-lg-show-mob');
          this.document.body.classList.add('app-this-side-lg-hide-mob');
        }


      }
      if (event instanceof NavigationEnd) {
        this.currentUrl = this.router.url.split('?')[0];
        
        this.currentIndex = 0;
        this.activateItems(this.navbarItems, null);
      }
    });

  }


  ngOnInit(): void {
    this.currentIndex = 0;
    this.activateItems(this.navbarItems, null);
  }

  private subscribeToEvents(): void {
    this.barThisSideService.navbarLoading.subscribe((load: boolean) => {
      this.loading = load;
    });
    
    this.barThisSideService.navbarStatus.subscribe((nav: navbarData[]) => {
      this.navbarItems = nav;
      this.currentIndex = 0;
      this.activateItems(this.navbarItems, null);
      this.loading = false;
    });
  }

  dropdownToggle(event:any) {

    const hasClass = event.target.parentElement.classList.contains("open");

    if (hasClass) {
      this.renderer.removeClass(event.target.parentElement, "open");
    } else {
      this.renderer.addClass(event.target.parentElement, "open");
    }

  }

  btnTogglerMinimizer(){
    
  }

  activateItems(objects: navbarData[], parent?: navbarData | null) {
    this.currentIndex++;
    for (let key in objects) {
      let object: navbarData = objects[key];
      if (object.children !== undefined && object.children !== null) {
        object.active = false;
        this.activateItems(object.children, object);
      } else {
        if (object.url !== undefined && object.url !== null && object.url === this.currentUrl) {
          if (this.currentIndex > 1) {
            if(parent)
              parent.active = true;
          }
          object.active = true;
        } else {
          object.active = false;
        }

      }

    }
  }

}
