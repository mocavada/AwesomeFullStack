import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';


@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html'
})

export class SubjectsComponent implements OnInit, OnDestroy {
  title = 'AngularRxJS';
  mySubject$: any;

  ngOnInit() {
    // this.mySubject$ = new Subject();
    // this.mySubject$ = new BehaviorSubject(100);
    this.mySubject$ = new ReplaySubject();
    this.mySubject$.subscribe( x => console.log('first subscribe', x));
    this.mySubject$.next('A');
    this.mySubject$.next('B');
    // this.mySubject$.unsubscribe();

    this.mySubject$.subscribe( x => console.log('second subscribe', x));
    this.mySubject$.next('C');

  }

  ngOnDestroy() {
    this.mySubject$.unsubscribe();
  }
}
