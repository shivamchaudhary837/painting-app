import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class LogInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const startTime=(new Date()).getTime();

    return next.handle(request).pipe(
      map(event => {
        if(event instanceof HttpResponse){
        const endtime=(new Date()).getTime();
        const diff=endtime-startTime;
        console.log(event.url +' succeed in '+diff+ ' miliseconds')
        }
        return event;
        
      })
    );
  }
}
