// Angular
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HfUploaderComponent } from './hf-uploader/hf-uploader.component';
import { HfUploaderDirective } from './hf-uploader/hf-uploader.directive';



@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    HfUploaderComponent,
    HfUploaderDirective,
  ],
  declarations: [
    HfUploaderComponent,
    HfUploaderDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomElementsModule {

}
