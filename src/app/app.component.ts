import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {

  public strTheme:string | null = "theme-1";

  title = 'hf-dashboard';
  constructor(
    @Inject(DOCUMENT) private document: Document
  ){
    
  }

  ngOnInit(): void {
    this.setTheme();
  }

  setTheme(){
    this.strTheme = localStorage.getItem(environment.appTheme);

    if(this.strTheme != null)
      this.document.body.id = this.strTheme;
    else
      this.document.body.id = this.strTheme ?? "theme-1";
  }

}
