import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

import { HttpBackend, HttpClient, HttpEvent, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, map } from 'rxjs';

import { AuthenRepository } from './authenRepository.service';
import { IGenericRepository } from '../Repositories/IGenericRepository';
import { CollectionResult } from '../Entities/Collections/CollectionResult';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': ''
  })
};

@Injectable({
  providedIn: 'root'
})
export class GenericRepositoryService<TRequest> implements IGenericRepository<TRequest> {

  private httpback: HttpClient;

  constructor(
    private http: HttpClient,
    private httpBackend: HttpBackend,
    private authenRepository: AuthenRepository,
  ) {
    this.httpback = new HttpClient(httpBackend);
  }

  Get<Type>(control: string, params?: HttpParams): Observable<CollectionResult<Type>> {
    return this.http.get<CollectionResult<Type>>
      (`${environment.apiUrl}${control}`, { params: params })
      .pipe(map(data => {
        return data;
      }));
  }

  Post<Type>(control: string, body: TRequest): Observable<CollectionResult<Type>> {
    return this.http.post<CollectionResult<Type>>
      (`${environment.apiUrl}${control}`, body)
      .pipe(map(data => {
        return data;
      }));
  }

  Put<Type>(control: string, body: TRequest): Observable<CollectionResult<Type>> {
    return this.http.put<CollectionResult<Type>>
      (`${environment.apiUrl}${control}`, body)
      .pipe(map(data => {
        return data;
      }));
  }

  Delete<Type>(control: string, params?: HttpParams): Observable<CollectionResult<Type>> {
    return this.http.delete<CollectionResult<Type>>
      (`${environment.apiUrl}${control}`, { params: params })
      .pipe(map(data => {
        return data;
      }));
  }



  public Upload(file: any, control: string): Observable<HttpEvent<CollectionResult<any>>> {
    let userToken = this.authenRepository.GetUserToken();

    let headers = new HttpHeaders({
      'Authorization': `Bearer ${userToken.tokenKey}`,
      'Unitkey': `${userToken.unit?.id}`,
    });

    let formData = new FormData();

    formData.append("File", file, file.name)

    return this.httpback.post<CollectionResult<any>>
      (`${environment.apiUrl}${control}`, formData, {
        headers: headers, reportProgress: true,
        observe: "events",
      }).pipe();

  }

}
