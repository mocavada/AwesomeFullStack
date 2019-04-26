import {Job} from '../pojo/job';
import { JobType } from '../pojo/job-type';
import { JobbusyService } from '../service/jobbusy.service';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.css']
})
export class JobPostComponent implements OnInit {
  jobCreateForm: FormGroup;
  jobTypeList: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private dService: JobbusyService) {
  }

  ngOnInit() {
    this.createForm();
    this.dService.jobTypeResult$.subscribe(data => {
      if (data != null) {
        console.log(data);
        this.jobTypeList = data;
      }
    });
    this.dService.getJobTypeList();
  }

  createForm() {
    this.jobCreateForm = this.fb.group({
      jobCompany: this.fb.group({
        companyName: [''],
        contactor: [''],
        email: ['', Validators.email],
        phonenumber: ['']
      }),
      // jobCompanyName: [''],
      jobTitle: [''],
      jobType: this.fb.group({
        id: [0],
      }),
      jobDescription: '',
      requirement: '',
      location: '',
      salary: '',
    });
  }

  onSubmit(f) {
    if (f.valid) {
      console.log('This form is good to go.');
      this.dService.postJob(f.value);
    } else {
      // f.value.jobType = parseInt(f.value.jobType, 0);
      console.log(f.value);
      // this.devjson = f.value;
    }


  }
}
