/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TonyAuditComponent } from './tony-audit.component';

describe('TonyAuditComponent', () => {
  let component: TonyAuditComponent;
  let fixture: ComponentFixture<TonyAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TonyAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TonyAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
