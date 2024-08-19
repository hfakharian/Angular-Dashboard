// Angular
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { 
  BarThisSideComponent,
  BarThisSideTogglerComponent,
  BarThatSideComponent,
  BarThatSideTogglerComponent,
  BarMapPathComponent
 } from '.';
import { BarColorThemeComponent } from './bar-color-theme/bar-color-theme.component';
import { BarNavProfileComponent } from './bar-nav-profile/bar-nav-profile.component';
import { BarMessageComponent } from './bar-message/bar-message.component';
import { BarLoadingComponent } from './bar-loading/bar-loading.component';
import { BarTabStickyComponent } from './bar-tab-sticky/bar-tab-sticky.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  exports: [
    BarThisSideComponent,
    BarThisSideTogglerComponent,
    BarThatSideComponent,
    BarThatSideTogglerComponent,
    BarNavProfileComponent,
    BarMapPathComponent,
    BarColorThemeComponent,
    BarMessageComponent,
    BarLoadingComponent,
    BarTabStickyComponent,
  ],
  declarations: [
    BarThisSideComponent,
    BarThisSideTogglerComponent,
    BarThatSideComponent,
    BarThatSideTogglerComponent,
    BarNavProfileComponent,
    BarMapPathComponent,
    BarColorThemeComponent,
    BarMessageComponent,
    BarLoadingComponent,
    BarTabStickyComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ElementsModule {

}
