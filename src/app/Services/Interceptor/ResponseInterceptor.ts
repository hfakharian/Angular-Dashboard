import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

    constructor(private router: Router,) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(tap({
            next: (event) => {
                if (event instanceof HttpResponse) {
                }
            },
            error: (error: HttpErrorResponse) => {
                switch (error.status) {
                    case 401:
                        localStorage.removeItem(environment.appAuthe);
                        this.router.navigate(['/signin']);
                        break;
                    default:
                        return;
                }
            }
        }));

    }

}