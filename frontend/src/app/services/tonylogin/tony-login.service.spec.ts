/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TonyLoginService } from './tony-login.service';

describe('Service: TonyLogin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TonyLoginService]
    });
  });

  it('should ...', inject([TonyLoginService], (service: TonyLoginService) => {
    expect(service).toBeTruthy();
  }));
});
