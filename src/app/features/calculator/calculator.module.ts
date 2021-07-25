import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorScreenComponent } from './components/calculator-screen/calculator-screen.component';
import { CalculatorRoutingModule } from './calculator-routing.module';
import { FormsModule } from '@angular/forms';
import { CalculatorInputComponent } from './components/calculator-input/calculator-input.component';
import { CalculationHistoryComponent } from './components/calculation-history/calculation-history.component';


@NgModule({
  declarations: [
    CalculatorScreenComponent,
    CalculatorInputComponent,
    CalculationHistoryComponent
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    FormsModule,
  ],
})
export class CalculatorModule { }
