import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css']
})
export class RedditComponent implements OnInit, OnDestroy {
  title = 'Reddit Crawler';

  searchSubject$ = new Subject<string>();
  results$: Observable<any>;
  searchString: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Ex.1 Button using Observable
    // Observable.fromEvent(document, 'click')
    //   .subscribe(x => console.log(x));

    // Ex.2 Search Bar
      // this.searchSubjects$
      // .debounceTime(2000)
      // .subscribe(x => console.log('debounced: ', x));

    // Ex. 3 Search & Get Images from Web
    this.results$ = this.searchSubject$
    .debounceTime(200)
    .distinctUntilChanged()
    .do(x => console.log('do', x))
    .switchMap(searchString => this.queryAPI(searchString));
  }

  queryAPI(searchString) {
    console.log('queryAPI', searchString);

    return this.http.get(`https://www.reddit.com/r/aww/search.json?q=${searchString}`)
    .map(result => result['data']['children']);
  }

  inputChanged($event) {
    console.log('input changed', $event);
    this.searchSubject$.next($event);
  }

  ngOnDestroy() { }
}
