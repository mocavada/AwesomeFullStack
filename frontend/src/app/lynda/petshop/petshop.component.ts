import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import { without, findIndex } from 'lodash';


library.add(faTimes, faPlus);

@Component({
  selector: 'app-petshop',
  templateUrl: './petshop.component.html',
  styleUrls: ['./petshop.component.css']
})
export class PetshopComponent implements OnInit {
  title = 'Mac Pet Shop';
  theList: object[];
  modifiedList: object[];
  orderBy: string;
  orderType: string;
  lastIndex: number;

  addApt(theApt: any) {
    theApt.aptId = this.lastIndex;
    this.theList.unshift(theApt);
    this.modifiedList.unshift(theApt);
    this.lastIndex++;
  }

  deleteApt(theApt: any) {
    theApt.aptId = this.lastIndex;
    this.theList = without(this.theList, theApt);
    this.modifiedList = without(this.theList, theApt);
    this.lastIndex--;
  }

  updateApt(aptInfo) {
    let aptIndex: number;
    let modifiedIndex: number;

    aptIndex = findIndex(this.theList, {
      aptId: aptInfo.theApt.aptId
    });
    modifiedIndex = findIndex(this.modifiedList, {
      aptId: aptInfo.theApt.aptId
    });

    this.theList[aptIndex][aptInfo.labelName] = aptInfo.newValue;
    this.modifiedList[modifiedIndex][aptInfo.labelName] =
      aptInfo.newValue;

  }

  searchApt(theQuery: string) {
    this.modifiedList = this.theList.filter(eachItem => {
      return (
        // tslint:disable-next-line:no-string-literal
        eachItem['petName']
          .toLowerCase()
          .includes(theQuery.toLowerCase()) ||
        // tslint:disable-next-line:no-string-literal
        eachItem['ownerName']
          .toLowerCase()
          .includes(theQuery.toLowerCase()) ||
        // tslint:disable-next-line:no-string-literal
        eachItem['aptNotes']
          .toLowerCase()
          .includes(theQuery.toLowerCase())
      );
    });
    this.sortItems();
  }

  sortItems() {
    let order: number;
    if (this.orderType === 'asc') {
      order = 1;
    } else {
      order = -1;
    }

    this.modifiedList.sort((a, b) => {
      if (
        a[this.orderBy].toLowerCase() < b[this.orderBy].toLowerCase()
      ) {
        return -1 * order;
      }
      if (
        a[this.orderBy].toLowerCase() > b[this.orderBy].toLowerCase()
      ) {
        return 1 * order;
      }
    });
  }

  orderApt(orderObj) {
    this.orderBy = orderObj.orderBy;
    this.orderType = orderObj.orderType;

    this.sortItems();
  }

  constructor(private http: HttpClient) {
    this.orderBy = 'petName';
    this.orderType = 'asc';
  }

  ngOnInit(): void {
    this.lastIndex = 1;
    this.http.get<object[]>('assets/petshop_data.json')
    .subscribe(data => {
      this.theList = data.map((item: any) => {
        item.aptId = this.lastIndex++;
        return item;
      });
      this.modifiedList = data;
      this.sortItems();
    });

  }

}
