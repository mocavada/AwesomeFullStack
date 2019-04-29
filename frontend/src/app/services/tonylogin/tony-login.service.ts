import { environment } from './../../../environments/environment';

import { TonyUser } from './../../projects/tonysecurity/pojo/tony-user';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable, pipe, throwError } from 'rxjs';

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

  constructor(private http: HttpClient) {
  }

  // LOGIN
  login(jobPostUser: TonyUser) {
    return this.http
    .post<TonyUser>(environment.serverAddress + '/tony/login', jobPostUser);
  }



//   authenticate(credentials: any, callback: any) {

//         const headers = new HttpHeaders(credentials ? {
//             authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
//         } : {});

//         this.http.get(this.urlRoot + '/tony/user', {headers}).subscribe(response => {
//             if (response['name']) {
//                 this.authenticated = true;
//             } else {
//                 this.authenticated = false;
//             }
//             return callback && callback();
//         });

//     }



}
