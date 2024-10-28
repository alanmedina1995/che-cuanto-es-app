import { TestBed } from '@angular/core/testing';

import { CostCalculatorServiceService } from './cost-calculator-service.service';

describe('CostCalculatorServiceService', () => {
  let service: CostCalculatorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostCalculatorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
