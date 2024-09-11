import { TestBed } from '@angular/core/testing';

import { ShippointService } from './shippoint.service';

describe('ShippointService', () => {
  let service: ShippointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShippointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
