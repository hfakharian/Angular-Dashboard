import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HfUploaderModel, HfUploaderStatus } from "./hf-uploader.model";
import { HttpErrorResponse, HttpEventType, HttpResponse } from "@angular/common/http";
import { GenericRepositoryService } from "src/app/Services/genericRepository.service";

@Injectable({
  providedIn: 'root'
})
export class HfUploaderService {

    private controller: string = "";
    private _queue: BehaviorSubject<HfUploaderModel[]>;
    private _files: HfUploaderModel[] = [];
  
    constructor(
      private uploadService: GenericRepositoryService<any>) {
      
      this._queue = <BehaviorSubject<HfUploaderModel[]>>new BehaviorSubject(this._files);
    }
  
    // the queue
    public get queue() {
      return this._queue.asObservable();
    }
  
    public setController(controller: string) {
      this.controller = controller;
    }

    // public events
    public onCompleteItem(queueObj: HfUploaderModel, response: any): any {
      return { queueObj, response };
    }
  
    // public functions
    public addToQueue(data: any) {
      // add file to the queue
      for (let x = 0; x < data.length; x++) {
        this._addToQueue(data[x])
      }
    }
  
    public clearQueue() {
      // clear the queue
      this._files = [];
      this._queue.next(this._files);
    }
  
    public uploadAll() {
      // upload all except already successfull or in progress
      this._files.forEach((queueObj: HfUploaderModel) => {
        if (queueObj.isUploadable()) {
          this._upload(queueObj);
        }
      });
    }
  
    // private functions
    private _addToQueue(file: any) {
      const queueObj = new HfUploaderModel(file);
  
      queueObj.fileName = file.name;
      queueObj.fileSize = this._formatBytes(file.size,2);
      // set the individual object events
      queueObj.upload = () => this._upload(queueObj);
      queueObj.remove = () => this._removeFromQueue(queueObj);
      queueObj.cancel = () => this._cancel(queueObj);
  
      // push to the queue
      this._files.push(queueObj);
      this._queue.next(this._files);

      if (queueObj.isUploadable()) {
        this._upload(queueObj);
      }
    }
  
    private _removeFromQueue(queueObj: HfUploaderModel) {
      this._files.splice(this._files.indexOf(queueObj), 1);
    }
  
    private _upload(queueObj: HfUploaderModel) {
      // create form data for file
      //const form = new FormData();
      //form.append('file', queueObj.fileData, queueObj.fileData.name);

      queueObj.request = this.uploadService.Upload(queueObj.fileData,this.controller).subscribe({
        next: (event) =>{
          if (event.type === HttpEventType.Response) {
            this._uploadComplete(queueObj, event);
          }
          if (event.type === HttpEventType.UploadProgress) {
            this._uploadProgress(queueObj, event);
          }
        },
        error: (err) =>{
          if (err.error instanceof Error) {
            this._uploadFailed(queueObj, err);
          } else {
            this._uploadFailed(queueObj, err);
          }
        }
      });

      return queueObj;
    }
  
    private _cancel(queueObj: HfUploaderModel) {
      // update the HfUploaderModel as cancelled
      if(queueObj.request){
      queueObj.request.unsubscribe();
      queueObj.progress = 0;
      queueObj.status = HfUploaderStatus.Pending;
      this._queue.next(this._files);
      }
    }
  
    private _uploadProgress(queueObj: HfUploaderModel, event: any) {
      // update the HfUploaderModel with the current progress
      const progress = Math.round(100 * event.loaded / event.total);
      queueObj.progress = progress;
      queueObj.status = HfUploaderStatus.Progress;
      this._queue.next(this._files);
    }
  
    private _uploadComplete(queueObj: HfUploaderModel, response: HttpResponse<any>) {
      // update the HfUploaderModel as completed
      queueObj.progress = 100;
      queueObj.status = HfUploaderStatus.Success;
      queueObj.response = response;
      this._queue.next(this._files);
      this.onCompleteItem(queueObj, response.body);
    }
  
    private _uploadFailed(queueObj: HfUploaderModel, response: HttpErrorResponse) {
      // update the HfUploaderModel as errored
      queueObj.progress = 0;
      queueObj.status = HfUploaderStatus.Error;
      queueObj.response = response;
      this._queue.next(this._files);
    }

    private _formatBytes(bytes:number, decimals = 2) {
      if (!+bytes) return '0 Bytes'
  
      const k = 1024
      const dm = decimals < 0 ? 0 : decimals
      const sizes = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  
      const i = Math.floor(Math.log(bytes) / Math.log(k))
  
      return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
    }
}