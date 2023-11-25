import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Subscription } from "rxjs";

export enum HfUploaderStatus {
    Pending,
    Success,
    Error,
    Progress
  }

export class HfUploaderModel {
    public fileData: any;
    public fileName: string| null = null;
    public fileSize: string | null = null;
    public status: HfUploaderStatus = HfUploaderStatus.Pending;
    public progress: number = 0;
    public request?: Subscription;
    public response: HttpResponse<any> | HttpErrorResponse | null = null;
  
    constructor(fileData: any) {
      this.fileData = fileData;
    }
  
    // actions
    public upload = () => { /* set in service */ };
    public cancel = () => { /* set in service */ };
    public remove = () => { /* set in service */ };
  
    // statuses
    public isPending = () => this.status === HfUploaderStatus.Pending;
    public isSuccess = () => this.status === HfUploaderStatus.Success;
    public isError = () => this.status === HfUploaderStatus.Error;
    public inProgress = () => this.status === HfUploaderStatus.Progress;
    public isUploadable = () => this.status === HfUploaderStatus.Pending || this.status === HfUploaderStatus.Error;
}