/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GuestbookUiComponent } from './guestbook-ui.component';

describe('GuestbookUiComponent', () => {
  let component: GuestbookUiComponent;
  let fixture: ComponentFixture<GuestbookUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestbookUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestbookUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
