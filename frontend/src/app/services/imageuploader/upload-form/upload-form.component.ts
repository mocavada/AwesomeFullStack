import { UploadFileService } from '../upload-file.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
  }

  selectFile(event) {
      const file = event.target.files.item(0);

      if (file.type.match('image.*')) {
        this.selectedFiles = event.target.files;
      } else {
        alert('invalid format');
      }
  }

  uploadFile() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService
      .pushFileToStorage(this.currentFileUpload)
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress.percentage = Math.round(100 * event.loaded / event.total);
        } else if ( event instanceof HttpResponse) {
          console.log('File is completely uploaded');
        }
    });

    this.selectedFiles = undefined;
  }

}
