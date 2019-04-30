import { environment } from '../../../../environments/environment';
import { TonyLoginService } from '../service/tony-login.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { longStackSupport } from 'q';

@Component({
  selector: 'app-tony-login',
  templateUrl: './tony-login.component.html',
  styleUrls: ['./tony-login.component.css']
})
export class TonyLoginComponent implements OnInit {

// Example 1:
  tonyUserLoginForm: FormGroup;
  devjson: any;


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private tService: TonyLoginService) { }

  ngOnInit() {
    this.createForm();

  }

  createForm() {
    this.tonyUserLoginForm = this.fb.group({
      username: '',
      password: '',
    });
  }

  onSubmit(f: any) {
    this.tService.fackLoginFlag = true;
    console.log('fackLoginFlag = ' + this.tService.fackLoginFlag);

    if (f.valid) {
      console.log('this form is good to go.');
    }

    console.log(f.value);
    this.devjson = f.value;

    this.tService.login(f.value)
    .subscribe(data => {
      console.log(data);
      // after login, move the page to create job
      this.router.navigate(['/tony/resource']);
    }, err => {
      console.log('Something Wrong with Login!');
    });
  }



  logout() {
    this.router.navigate(['/tony/logout']);
    console.log('Click Logout');
  }




// Example 2:

// credentials = {username: '', password: ''};
// private urlRoot = environment.serverAddress;
// test: string;

//   constructor(private app: TonyLoginService,
//               private http: HttpClient, private router: Router,
//               private platformLocation: PlatformLocation) {
//                this.logAppStart(platformLocation);
//   }

//   login() {
//     this.app.authenticate(this.credentials, () => {
//         this.router.navigateByUrl(this.urlRoot + '/');
//     });


//     console.log(this.router);
//     return false;
//   }

//   logAppStart(platformLocation: any) { // CHANGED THE TYPE TO ANY TO BE ABLE TO ACCESS THE LOCATION PROPERTY
//     console.log('Your Absolute URL ' + platformLocation.location); // HERE YOU FIND WHAT YOU NEED
// }


}
