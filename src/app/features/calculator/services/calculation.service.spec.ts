import { TestBed } from '@angular/core/testing';

import { CalculationService } from './calculation.service';

describe('CalculationService', () => {
  let service: CalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('calculateString should return correct calculation', () => {
    const stringToCalculate = '1+2.6*3+1/3+2*2.5/2.1+3-21';
    const results = service.calculateString(stringToCalculate);
    expect(results).toEqual(eval(stringToCalculate));
  });

  it('calculateMultiplyAndDivide should return correct calculation', () => {
    const stringToCalculate = '2*3/2*4/5*7';
    const results = service.calculateMultiplyAndDivide(stringToCalculate);
    expect(results).toEqual(eval(stringToCalculate));
  });

  it('replaceMultiplyAndDivide should return array of strings without * or /', () => {
    const arrayToConvert = ['2', '+', '2*3/7', '-', '6'];
    const s = service.replaceMultiplyAndDivide(arrayToConvert);
    const foundNotAllowedChars = s.find(i => i.includes('*') || i.includes('/'));

    expect(foundNotAllowedChars).toBeUndefined();
  });

  it('isOperator should return false when 0', () => {
    const s = service.isOperator('0');
    expect(s).toBeFalse();
  });

  it('splitArrayToResult should return correct calculation', () => {
    const s = service.splitArrayToResult(['1', '+', '3']);
    expect(s).toEqual(4);
  });

  it('calculateBasedOnOperator should return correct calculation', () => {
    const s = service.calculateBasedOnOperator(1, 3, '+');
    expect(s).toEqual(4);
  });

});
