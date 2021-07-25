import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { of, Subject } from 'rxjs';
import { distinctUntilChanged, switchMap, takeUntil } from 'rxjs/operators';
import { CalculationService } from '../../services/calculation.service';
import { CalculatorInputComponent } from '../calculator-input/calculator-input.component';
import { CalculationHistoryService } from '../../services/calculation-history.service';

@Component({
  selector: 'app-calculator-screen',
  templateUrl: './calculator-screen.component.html',
  styleUrls: ['./calculator-screen.component.scss'],
})
export class CalculatorScreenComponent implements AfterViewInit, OnDestroy {
  @ViewChild('calculatorInput') calculatorInput: CalculatorInputComponent | undefined;

  result: number = 0;

  private destroy: Subject<void> = new Subject();


  constructor(private calculationService: CalculationService, public calculationHistoryService: CalculationHistoryService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.calculatorInput?.calculate
      .pipe(
        distinctUntilChanged(),
        switchMap(value => {
          const result = this.calculationService.calculateString(value);
          const timestamp = new Date();
          const calculation = value + '=' + result;
          this.calculationHistoryService.addCalculationToHistory({ timestamp, calculation });
          return of(result);
        }),
        takeUntil(this.destroy)
      )
      .subscribe(v => this.result = v);
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
