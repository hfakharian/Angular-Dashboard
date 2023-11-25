import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';

import { HttpClient, HttpBackend } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

import * as token from '../../assets/mock/token.json'
import { IAuthenRepository } from '../Repositories/IAuthenRepository';
import { Observable } from 'rxjs';
import { CollectionResult } from '../Entities/Collections/CollectionResult';
import { Unit } from '../Entities/User/Unit';
import { User } from '../Entities/User/User ';
import { UserToken } from '../Entities/User/UserToken';

@Injectable({
  providedIn: 'root'
})
export class AuthenRepository implements IAuthenRepository {

  private headers = new HttpHeaders({
    'Content-Type':'application/json; charset=utf-8'
  });

  private deviceInfo = null;
  private http: HttpClient;

  constructor(private httpBackend: HttpBackend) {
    this.http = new HttpClient(httpBackend);
    // this.currentHeadModel = <EntUserToken>(JSON.parse(localStorage.getItem(this.memoryName)));
  }

  GetUserToken(): UserToken {
    if (localStorage && localStorage.hasOwnProperty(environment.appAuthe)) {
      return <UserToken>(JSON.parse(localStorage.getItem(environment.appAuthe) ?? "{}"));
    } else {
      return new UserToken;
    }
  }

  IsTokenExpired(tokenExpire: number): boolean {
    if (tokenExpire === undefined) return false;
    if (parseInt((Date.now() / 1000).toString()) < tokenExpire) return true;
    return false;
  }
  IsAuthenticated(): boolean {
    return true;
    let userToken = this.GetUserToken();

    if (userToken != null) {
      if (this.IsTokenExpired(userToken.tokenExpireUnix))
        return true;
      else
        return false;
    } else
      return false;
  }
  GetUnit(): boolean {
    let userToken = this.GetUserToken();
    if (userToken != null) {
      if (userToken.unit !== undefined && userToken.unit !== null)
        return true;
      else
        return false;
    } else
      return false;
  }
  SetUnit(unit: Unit): void {
    let userToken = this.GetUserToken();

    if (userToken != null) {
      userToken.unit = unit;
      localStorage.setItem(environment.appAuthe, JSON.stringify(userToken));
    }
  }
  Signin(user: User): Observable<CollectionResult<User>> {
    throw new Error('Method not implemented.');
  }
  Signup(user: User): Observable<CollectionResult<User>> {
    throw new Error('Method not implemented.');
  }
  Signout(user: User): Observable<CollectionResult<User>> {
    throw new Error('Method not implemented.');
  }

  


}
