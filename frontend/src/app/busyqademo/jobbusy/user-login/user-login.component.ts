import { JobbusyService } from '../service/jobbusy.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { longStackSupport } from 'q';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  jobUserLoginForm: FormGroup;
  devjson: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private dService: JobbusyService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.jobUserLoginForm = this.fb.group({
      userName: '',
      password: '',
    });
  }

  onSubmit(f: any) {
    this.dService.fackLoginFlag = true;
    console.log('fackLoginFlag = ' + this.dService.fackLoginFlag);

    if (f.valid) {
      console.log('this form is good to go.');
    }

    console.log(f.value);
    this.devjson = f.value;
    this.dService.login(f.value)
    .subscribe(data => {
      console.log(data);
      // after login, move the page to create job
      this.router.navigate(['/PostJob']);
    }, err => {
      console.log('Something Wrong with Login!');
    });
  }

  logout() {
    this.dService.fackLoginFlag = false;
    console.log('fackLoginFlag = ' + this.dService.fackLoginFlag);
  }

}
