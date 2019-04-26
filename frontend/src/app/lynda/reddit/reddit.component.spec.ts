/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RedditComponent } from './reddit.component';

describe('RedditComponent', () => {
  let component: RedditComponent;
  let fixture: ComponentFixture<RedditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
