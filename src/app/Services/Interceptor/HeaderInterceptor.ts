import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenRepository} from '../authenRepository.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor(private authenRepository: AuthenRepository) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.addAuthToken(request));
  }

  addAuthToken(request: HttpRequest<any>) {
    const token = this.authenRepository.GetUserToken();

    let tokenKey = token.tokenKey;
    let unitKey = (token.unit != null ? token.unit.id : null)

    return request.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': `Bearer ${tokenKey}`,
        'Unitkey': `${unitKey}`,
      }
    })
  }
}