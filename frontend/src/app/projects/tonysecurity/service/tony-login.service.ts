import { environment } from '../../../../environments/environment';

import { TonyUser } from '../pojo/tony-user';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable, pipe, throwError } from 'rxjs';
import { Router } from '@angular/router';

import {map, take, catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TonyLoginService {

  fackLoginFlag = false;
  // jobTypeResult$ = new BehaviorSubject<[JobType]>(null);
  // jobResult$ = new BehaviorSubject<[Job]>(null);

  authenticated = false;
  private urlRoot = environment.serverAddress;
  credentials = {username: '', password: ''};

  constructor(private http: HttpClient,
              private router: Router) {
  }

  // LOGIN
  login(tonyUser: TonyUser) {
    return this.http
    .post<TonyUser>(environment.serverAddress + '/tony/login', tonyUser);
  }

  // login() {
  //   this.authenticate(this.credentials, () => {
  //       this.router.navigateByUrl('/tony/login');
  //   });
  //   return false;
  // }

  // authenticate(credentials, callback) {

  //   const headers = new HttpHeaders(credentials ? {
  //       authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
  //   } : {});

  //   this.http.get(environment.serverAddress + '/tony/user', {headers: headers}).subscribe(response => {
  //       if (response['username']) {
  //           this.authenticated = true;
  //       } else {
  //           this.authenticated = false;
  //       }
  //       return callback && callback();
  //   });

}
