import { JobbusyService } from '../service/jobbusy.service';
import { Job } from '../pojo/job';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobList: Job[];

  constructor(private dService: JobbusyService) { }

  ngOnInit() {
    this.dService.jobResult$.subscribe(data => {
      if (data != null) {
        this.jobList = data;
        console.log('Loading Data');
        console.log(this.jobList);
      }
    });
    console.log('Get Data');
    this.dService.getData();
  }

  editMode(item: Job) {
    item.editMode = true;
  }

  submitEditedJob(item: Job) {
    this.dService.editJob(item).subscribe(data => {
      console.log('Update Successfully');
      item.editMode = false;
    }, err => {
      console.log('Something Wrong with Edit Job');
    });
  }

  deleteJob(job: Job) {
    console.log(this.jobList.indexOf(job));

    this.dService.deleteJob(job).subscribe(data => {
       this.jobList.splice(this.jobList.indexOf(job), 1);
    }, err => {
      console.log('Something Wrong with Delete Job');
    });
  }



}
