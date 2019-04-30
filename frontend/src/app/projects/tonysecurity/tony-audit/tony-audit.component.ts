import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tony-audit',
  templateUrl: './tony-audit.component.html',
  styleUrls: ['./tony-audit.component.css']
})
export class TonyAuditComponent {

  title = 'AUDIT PAGE';
  greeting = {};
  private urlRoot = environment.serverAddress;

  constructor(private http: HttpClient) {
    http.get(this.urlRoot + '/tony/audit').subscribe(data => this.greeting = data);
  }

}
