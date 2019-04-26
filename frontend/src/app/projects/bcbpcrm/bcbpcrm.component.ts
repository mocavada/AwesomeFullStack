import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Subject, Observable, pipe} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-bcbpcrm',
  templateUrl: './bcbpcrm.component.html',
  styleUrls: ['./bcbpcrm.component.css']
})
export class BcbpcrmComponent implements OnInit {

  results$ = new BehaviorSubject<object>(null);
  click: boolean;
  showList: any;
  list: object[];
  newList: object[];
  tableShow: any;
  array = [];
  gSheetUrl = 'https://spreadsheets.google.com/feeds/list/1ZV0dufCsdoazv3_HYWUmzpB0sQB7LPR7E1ggKj-lD0w/od6/public/values?alt=json';

  constructor(private http: HttpClient) {
    this.getInfo();
  }

  getInfo() {
    let firstname: string;
    let lastname: string;
    let email: string;
    let phone: number;

    this.http.get<object[]>(this.gSheetUrl).subscribe(data => {
      this.results$.next(data);
      // tslint:disable-next-line:prefer-for-of
      for (let x = 0; x < data['feed']['entry'].length; x++) {
        firstname = (data['feed']['entry'][x]['gsx$firstname']['$t']);
        lastname = (data['feed']['entry'][x]['gsx$lastname']['$t']);
        phone = (data['feed']['entry'][x]['gsx$phonenumber']['$t']);
        email = (data['feed']['entry'][x]['gsx$emailaddress']['$t']);
        this.array.push({firstname, lastname, phone, email});
      }
      console.log(this.array);
      return this.array;
    }, err => {
      console.log('Something Wrong with Getting Data!');
    });
  }

  showTable(list: any) {
    this.click = !this.click;
    if (this.click) {
      this.showList = this.array;
      console.log(this.showList);
    }
    console.log(this.click);
  }

  ngOnInit() {
  }
}
