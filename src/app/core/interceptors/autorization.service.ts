import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { environment as Env} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AutorizationInterceptorService implements HttpInterceptor {

  constructor(
  	private router: Router,
	) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //const token:any = this.cookies.get('token');
    const token:string = Env.token;

    let request = req;

    if (token) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ token }`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {

      	//if response if unautorized!
        if (err.status === 401) {
          this.router.navigateByUrl('/auth/login');
        }

        return throwError( err );

      })
    );
	}

}