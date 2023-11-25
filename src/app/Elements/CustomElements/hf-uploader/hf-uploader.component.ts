import { Component, Input } from '@angular/core';
import { HfUploaderModel } from './hf-uploader.model';
import { HfUploaderService } from './hf-uploader.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'hf-uploader',
  templateUrl: './hf-uploader.component.html',
  styleUrls: ['./hf-uploader.component.scss']
})
export class HfUploaderComponent {

  @Input() controller: string = "";
  queue?: Observable<HfUploaderModel[]>;

  constructor(
    public uploader: HfUploaderService
  ) {
   }

  ngOnInit(): void {
    this.queue = this.uploader.queue;
    this.uploader.setController(this.controller);
  }

  onUploadFile(files:any) {
    if(files){
      this.uploader.addToQueue(files);
    }
  }

}
