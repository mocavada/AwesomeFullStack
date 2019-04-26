import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-observers',
  templateUrl: './observers.component.html'
})
export class ObserversComponent implements OnInit, OnDestroy {
  observable$;

    ngOnInit() {
      this.observable$ = Observable.create((observer) => {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        setTimeout(() => {
          observer.next(4);
          observer.complete();
        }, 1000);
      });

      console.log('just before subscribe');

      this.observable$.subscribe({
        next: x => console.log('got value ' + x),
        error: err => console.error('something wrong occurred: ' + err),
        complete: () => console.log('done'),
      });
      console.log('just after subscribe');
    }

    ngOnDestroy() {
    }

  }

