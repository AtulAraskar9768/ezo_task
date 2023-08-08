import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class ezoHttpInterceptor implements HttpInterceptor {

  constructor(private spinner: NgxSpinnerService) { }
  private requestCount = 0
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.requestCount++;
    this.spinner.show();

    return next.handle(request).pipe(

      finalize(() => {
        this.requestCount--;
        if (this.requestCount === 0) {
          this.spinner.hide();
        }
      }),

      // API error handling...
      catchError((error: HttpErrorResponse) => {
        if (error.error) {
          // this.commonService.errorToaster(error.error.message)
        }
        return throwError(error)

      })

    );
  }
}


