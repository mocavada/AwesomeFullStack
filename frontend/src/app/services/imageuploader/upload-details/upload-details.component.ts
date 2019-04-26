import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-upload-details',
  templateUrl: './upload-details.component.html'
})
export class UploadDetailsComponent implements OnInit {

  @Input() fileUpload: string;

  constructor() { }

  ngOnInit() {
  }

}
