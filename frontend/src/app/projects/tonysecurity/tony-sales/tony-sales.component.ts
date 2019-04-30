import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tony-sales',
  templateUrl: './tony-sales.component.html',
  styleUrls: ['./tony-sales.component.css']
})
export class TonySalesComponent {

  title = 'SALES PAGE';
  greeting = {};
  private urlRoot = environment.serverAddress;

  constructor(private http: HttpClient) {
    http.get(this.urlRoot + '/tony/sales').subscribe(data => this.greeting = data);

  }

}
