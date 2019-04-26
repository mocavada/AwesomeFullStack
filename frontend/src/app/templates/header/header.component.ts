import { AppLoginService } from '../../busyqacrm/service/app-login.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  title = 'AWESOME';
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
