import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tony-admin',
  templateUrl: './tony-admin.component.html',
  styleUrls: ['./tony-admin.component.css']
})
export class TonyAdminComponent {

  title = 'ADMIN PAGE';
  greeting = {};
  private urlRoot = environment.serverAddress;

  constructor(private http: HttpClient) {
    http.get(this.urlRoot + '/tony/admin').subscribe(data => this.greeting = data);
  }

}
