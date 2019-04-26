import { AppLoginService } from './service/app-login.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/finally';


@Component({
  selector: 'app-user-access',
  templateUrl: './user-access.component.html',
  styleUrls: ['./user-access.component.css']
})
export class UserAccessComponent {

  constructor(private app: AppLoginService, private http: HttpClient, private router: Router) {
    this.app.authenticate(undefined, undefined);
  }
  logout() {
    this.http.post('logout', {}).finally(() => {
        this.app.authenticated = false;
        this.router.navigateByUrl('/login');
    }).subscribe();
  }

}
