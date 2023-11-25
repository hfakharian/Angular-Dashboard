import { Directive, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[HfUploaderDirective]'
})
export class HfUploaderDirective {
  @Output() onFileDropped = new EventEmitter<any>();

  constructor() {
  }

  @HostBinding('style.background-color') private background = 'transparent'
  @HostBinding('style.opacity') private opacity = '1'


  //Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt:any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#E5E5E5';
    this.opacity = '0.6'
  }
  //Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt:any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = 'transparent'
    this.opacity = '1'
  }
  //Drop listener
  @HostListener('drop', ['$event']) public ondrop(evt:any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = 'transparent'
    this.opacity = '1'
    
    let files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.onFileDropped.emit(files)
    }

  }

}