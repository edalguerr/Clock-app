import { TestBed } from '@angular/core/testing';

import { TimeLocationService } from './time-location.service';

describe('TimeLocationService', () => {
  let service: TimeLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
