import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchjob',
  templateUrl: './search-job.component.html',
  styleUrls: ['.././jobawookie-ui.component.css']
})
export class SearchJobComponent implements OnInit {
  @Output() queryEvt = new EventEmitter<string>();
  @Output() orderEvt = new EventEmitter<string>();
  @Input() orderBy;
  @Input() orderType;


  handleQuery(query: string) {
    this.queryEvt.emit(query);
  }

  handleSort(orderItems) {
    this.orderBy = orderItems.orderBy;
    this.orderType = orderItems.orderType;
    this.orderEvt.emit(orderItems);
  }

  constructor() { }

  ngOnInit() {
  }

}
