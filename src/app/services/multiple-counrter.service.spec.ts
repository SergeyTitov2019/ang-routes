import { TestBed } from '@angular/core/testing';

import { MultipleCounterService } from './multiple-counter.service';

describe('MultipleCounrterService', () => {
  let service: MultipleCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultipleCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
