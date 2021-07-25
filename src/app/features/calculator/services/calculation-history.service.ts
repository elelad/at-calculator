import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CalculationHistoryModel } from '../models/caclculation-history.model';

@Injectable({
  providedIn: 'root'
})
export class CalculationHistoryService {
  private _calculationHistory: BehaviorSubject<CalculationHistoryModel[]> = new BehaviorSubject<CalculationHistoryModel[]>([]);
  public calculationHistory$: Observable<CalculationHistoryModel[]> = this._calculationHistory.asObservable();

  constructor() { }

  addCalculationToHistory(calc: CalculationHistoryModel){
    const newHistoryModel = [...this._calculationHistory.value];
    newHistoryModel.unshift(calc);
    this._calculationHistory.next(newHistoryModel);
  }
}
