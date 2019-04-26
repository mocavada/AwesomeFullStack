/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppLoginService } from './app-login.service';

describe('Service: AppLogin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppLoginService]
    });
  });

  it('should ...', inject([AppLoginService], (service: AppLoginService) => {
    expect(service).toBeTruthy();
  }));
});
