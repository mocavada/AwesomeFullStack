import { HttpClient } from '@angular/common/http';
import { LoginStatus } from '../pojo/login-status';
import { JobbusyService } from './jobbusy.service';

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardService {

constructor(  private auth: JobbusyService,
              private router: Router,
              private http: HttpClient) { }

canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot)
: Observable<boolean> | Promise<boolean> | boolean {
    console.log(this.auth.fackLoginFlag);


    // SERVER VERSION
    return this.auth.checkLogin().pipe(map(loginStatus => {
      console.log(loginStatus);
      if (!loginStatus.login) {
        this.router.navigate(['/UserLoginComponent'], {queryParams: {returnUrl: state.url}});
      }
      return loginStatus.login;
    }, catchError(error => {
      this.router.navigate(['/UserLoginComponent'], {queryParams: {returnUrl: state.url}});
      return of(false);
    }))
  );

  }

}
