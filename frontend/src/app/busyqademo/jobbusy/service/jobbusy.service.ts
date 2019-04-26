import { Job } from '../pojo/job';
import { JobType } from '../pojo/job-type';
import { JobPostUser } from '../pojo/job-post-user';

import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable, pipe, throwError } from 'rxjs';

import {map, take, catchError} from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobbusyService {
  fackLoginFlag = false;
  jobTypeResult$ = new BehaviorSubject<[JobType]>(null);
  jobResult$ = new BehaviorSubject<[Job]>(null);

  constructor(private http: HttpClient) {
  }

  // GET JOB
  getData() {
    this.http
    .get<[Job]>(environment.serverAddress + '/jobs', {withCredentials: true})
    .subscribe(data => {
      this.jobResult$.next(data);
    }, err => {
        console.log('Something Wrong with Get Data');
    });
  }

  // PULL JOB TYPE LIST
  pullJobTypeList(jobTypeList: [JobType]) {
    this.jobTypeResult$.next(jobTypeList);
  }

  // GET JOB TYPE LIST
  getJobTypeList() {
    this.http
    .get<[JobType]>(environment.serverAddress + '/jobtypes', {withCredentials: true})
    .subscribe(data => {
      this.pullJobTypeList(data);
    }, err => {
        console.log('Something Wrong with Get Job Type');
        console.log(err);
    });
  }

  // POST JOB
  postJob(job: Job) {
    this.http
    .post<any>(environment.serverAddress + '/job', job, {withCredentials: true})
    .subscribe(data => {
      console.log(data);
      this.jobResult$.next(data);
    }, err => {
      console.log('Something Wrong with Post Job');
      console.log(err);
    });
  }

  // EDIT JOB
  editJob(job: Job) {
    return this.http
    .patch<any>(environment.serverAddress + '/job', job, {withCredentials: true});
  }

  // DELETE JOB
  deleteJob(job: Job) {
    return this.http
    .delete<any>(environment.serverAddress + '/job/' + job.id, {withCredentials: true});
  }

  // LOGIN
  login(jobPostUser: JobPostUser) {
    return this.http
    .post<JobPostUser>(environment.serverAddress + '/login', jobPostUser, {withCredentials: true});
  }

  // CHECK LOGIN
  checkLogin(): Observable<any> {
    return this.http.get(environment.serverAddress + '/checklogin', {withCredentials: true})
    .pipe(map((response: Response) => {
      console.log(response);
      return response;
    }, catchError(error => {
      return Observable.throw(error);
    }))
    );
  }






}
