import { TestBed } from '@angular/core/testing';

import { RequestItemService } from './request-item.service';

describe('RequestItemService', () => {
  let service: RequestItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
