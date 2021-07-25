import { TestBed } from '@angular/core/testing';

import { CalculationHistoryService } from './calculation-history.service';

describe('CalculationHistoryService', () => {
  let service: CalculationHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculationHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
