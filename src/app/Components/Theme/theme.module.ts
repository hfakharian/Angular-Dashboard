// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ThemeRoutingModule } from './theme-routing.module';

import { ColorComponent } from './color/color.component';



@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
  ],
  declarations: [
    ColorComponent,
  ]
})
export class ThemeModule { }
