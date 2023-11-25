import { Observable } from "rxjs";
import { CollectionResult } from "../Entities/Collections/CollectionResult";
import { HttpEvent, HttpParams } from "@angular/common/http";

export interface IGenericRepository<TReq> {
  Get<Type>(control: string, params?: HttpParams): Observable<CollectionResult<Type>>;
  Post<Type>(control: string, body: TReq): Observable<CollectionResult<Type>>;
  Put<Type>(control: string, body: TReq): Observable<CollectionResult<Type>>;
  Delete<Type>(control: string, params?: HttpParams): Observable<CollectionResult<Type>>;
  Upload(file: any, control: string): Observable<HttpEvent<CollectionResult<any>>>
}
