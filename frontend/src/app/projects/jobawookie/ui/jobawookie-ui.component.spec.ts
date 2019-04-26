/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JobawookieUiComponent } from './jobawookie-ui.component';

describe('JobpostUiComponent', () => {
  let component: JobawookieUiComponent;
  let fixture: ComponentFixture<JobawookieUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobawookieUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobawookieUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
