import { JobbusyService } from './../../busyqademo/jobbusy/service/jobbusy.service';

import { environment } from './../../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-exp-cookie-session',
  templateUrl: './exp-cookie-session.component.html',
  styleUrls: ['./exp-cookie-session.component.css']
})
export class ExpCookieSessionComponent implements OnInit {

  constructor(private http: HttpClient,
              private auth: JobbusyService) { }

  ngOnInit() {
  }

  onClickMe() {
    this.http.get<string[]>(environment.serverAddress + '/checklogin', {withCredentials: true})
    .subscribe(response => {
      console.log('checklogin');
    });

    this.http.get<string[]>(environment.serverAddress + '/checkout', { withCredentials: true})
    .subscribe(response => {
      console.log(response);
    });
  }
}
