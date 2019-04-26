import { AppLoginService } from '../service/app-login.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-sucess',
  templateUrl: './login-sucess.component.html',
  styleUrls: ['./login-sucess.component.css']
})
export class LoginSucessComponent {

  title = 'Demo';
  greeting = {};

  constructor(private app: AppLoginService, private http: HttpClient) {
    http.get('resource').subscribe(data => this.greeting = data);
  }

  authenticated() { return this.app.authenticated; }

}
