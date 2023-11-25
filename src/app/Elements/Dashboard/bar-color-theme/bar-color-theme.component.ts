import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-bar-color-theme',
  templateUrl: './bar-color-theme.component.html',
  styleUrls: ['./bar-color-theme.component.scss']
})
export class BarColorThemeComponent {

  public strTheme:string = "theme-1";
  public navTheme:boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
    
  }

  ngOnInit(): void {
    
  }

  btnToggler() {
    this.navTheme = !this.navTheme;
  }

  onChangeTheme(t:string){
    this.document.body.id = t;
    localStorage.setItem(environment.appTheme, t);
  }

}
