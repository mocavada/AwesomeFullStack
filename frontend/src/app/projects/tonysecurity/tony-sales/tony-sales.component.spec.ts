/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TonySalesComponent } from './tony-sales.component';

describe('TonySalesComponent', () => {
  let component: TonySalesComponent;
  let fixture: ComponentFixture<TonySalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TonySalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TonySalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
