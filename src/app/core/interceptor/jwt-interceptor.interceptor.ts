import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';
//  import { Observable } from 'rxjs';
 import { JwtService } from '../services/jwt.service';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { LogoutService } from '../services/logout.service';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  refreshed: boolean = false;
  refreshRequest: boolean = false;

  constructor(
    private http: HttpClient,
    private jwtService: JwtService,
    private logoutService: LogoutService
  ) { }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let reqAuth;
    if (this.refreshRequest) {
      reqAuth = request.clone({
        setHeaders: {
          Authorization: "Bearer " + this.jwtService.getRefreshToken()
        }
      })
      this.refreshRequest = false;
    }
    else {
      reqAuth = request.clone({
        setHeaders: {
          Authorization: "Bearer " + this.jwtService.getJwtToken()
        }
      })
    }
    return next.handle(reqAuth).pipe(catchError((err: HttpErrorResponse) => {
      if (err && err.status == 401 && !this.refreshed) {
        this.refreshed = true;
        this.refreshRequest = true;
        return this.http.post("http://localhost:9000/token", "").pipe(
          switchMap((res: any) => {
            this.jwtService.saveJwtToken(res.jwtToken)
            this.refreshed = false
            return next.handle(request.clone({
              setHeaders: {
                Authorization: "Bearer " + this.jwtService.getJwtToken()
              }
            }));
          })
        ).pipe(catchError((err: HttpErrorResponse) => {
          if (err && err.status == 401) {
            this.logoutService.logout()
          }
          return throwError(() => err);
        }))
      }
      return throwError(() => err);
    }));
  }
}
