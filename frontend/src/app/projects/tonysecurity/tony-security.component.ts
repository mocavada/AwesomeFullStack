import { TonyLoginService } from './../../services/tonylogin/tony-login.service';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tony-security',
  templateUrl: './tony-security.component.html',
  styleUrls: ['./tony-security.component.css']
})
export class TonySecurityComponent {


  private urlRoot = environment.serverAddress;
  title = 'Demo';
  greeting = {};

  constructor(private http: HttpClient) {
    http.get(this.urlRoot + '/tony/resource').subscribe(data => this.greeting = data);
  }

  // constructor(private app: TonyLoginService,
  //             private http: HttpClient) {
  //   http.get(this.urlRoot + '/tony/resource').subscribe(data => this.greeting = data);
  // }

  // authenticated() { return this.app.authenticated; }

}
