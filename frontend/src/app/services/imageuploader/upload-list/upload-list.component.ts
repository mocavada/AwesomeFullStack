import { UploadFileService } from '../upload-file.service';
import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-upload-list',
  templateUrl: './upload-list.component.html'
})
export class UploadListComponent implements OnInit {


  showFile = false;
  fileUploads: Observable<string[]>;
  fileUploadsNormal: any;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
  }

  showFiles(enable: boolean) {
    this.showFile = enable;

    if (enable) {
      // this.fileUploads = this.uploadService.getFiles();
      this.uploadService.getFiles().subscribe(response => {
        this.fileUploadsNormal = response;
      });

    }
  }
}
