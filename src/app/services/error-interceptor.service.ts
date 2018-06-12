import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/throw"

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).catch((errorResponse: HttpErrorResponse) => {
        if (errorResponse.status === 404) {
          // TODO: Gérer l'erreur
        }
        return Observable.throw(errorResponse);
      });
  }
}
