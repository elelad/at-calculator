import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorScreenComponent } from './components/calculator-screen/calculator-screen.component';

const routes: Routes = [
  {
    path: '',
    component: CalculatorScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule { }
