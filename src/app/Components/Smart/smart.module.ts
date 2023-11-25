// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SmartRoutingModule } from './smart-routing.module';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { CustomElementsModule } from 'src/app/Elements/CustomElements/custom-elements.module';




@NgModule({
  imports: [
    CommonModule,
    SmartRoutingModule,
    CustomElementsModule,
  ],
  declarations: [
    FileUploaderComponent
  ]
})
export class SmartModule { }
