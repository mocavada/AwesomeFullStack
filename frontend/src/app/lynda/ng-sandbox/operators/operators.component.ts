import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/interval';

/// Example 1
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
/// Example 2
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html'
})
export class OperatorsComponent implements OnInit, OnDestroy {

  test$: any;

  ngOnInit() {
    /// Example 1
    // const numbers$ = Observable.interval(1000);
    //
    // numbers$
    //   .take(10)
    //   .filter(x => x % 3 === 0 )
    //   .map(x => x * 10)
    //   // .filter(x => x > 40 )
    //   .subscribe( x => console.log(x));

    /// Example 2
    const numbers$ = Observable.interval(1000);
    const letters$ = Observable.of('a', 'b', 'c', 'd', 'e');

    letters$.mergeMap(x =>
        numbers$
          .take(5)
          .map(i => i + x)
        ).subscribe(x => console.log(x));

    this.test$ = letters$;

    // letters$.switchMap(x =>
    //   numbers$
    //     .take(5)
    //     .map(i => x + i)
    //   ).subscribe(x => console.log(x));
  }

  ngOnDestroy() {
    // this.test$.unsubscribe();
  }

}
