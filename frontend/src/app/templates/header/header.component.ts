import { TonyLoginService } from './../../services/tonylogin/tony-login.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/finally';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  title = 'Awesome';
  private urlRoot = environment.serverAddress;

  // constructor(private app: TonyLoginService, private http: HttpClient, private router: Router) {
  //   this.app.authenticate(undefined, undefined);
  // }
  // logout() {
  //   this.http.post(this.urlRoot + '/tony/logout', {}).finally(() => {
  //       this.app.authenticated = false;
  //       this.router.navigateByUrl(this.urlRoot + '/tony/login');
  //   }).subscribe();
  // }

}
