import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = 'shivam';
    const authRequest = request.clone({
      setHeaders: { Authorization: `Bearer ${authToken}` }
    });
    console.log("auth",authRequest)
    return next.handle(authRequest);
  }
}
