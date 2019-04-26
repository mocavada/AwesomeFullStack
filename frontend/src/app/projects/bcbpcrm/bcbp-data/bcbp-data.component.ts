import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bcbp-data',
  templateUrl: './bcbp-data.component.html'
})
export class BcbpDataComponent implements OnInit {

  @Input() list: any;
  constructor() { }

  ngOnInit() {
  }

}
