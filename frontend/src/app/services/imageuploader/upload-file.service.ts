import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', environment.serverAddress + '/post', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<string[]> {
    return this.http.get<string[]>(environment.serverAddress + '/getallfiles');

    // return <Observable<string[]>>this.http.get(environment.serverAddress + '/getallfiles');
  }
}
