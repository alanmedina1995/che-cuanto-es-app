import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CostCalculatorPageComponent } from './pages/cost-calculator-page/cost-calculator-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CostCalculatorRoutingModule } from './cost-calculator-routing.module';
import { ResultsCalculatorComponent } from './pages/results-calculator-page/results-calculator.component';

@NgModule({
  declarations: [
    CostCalculatorPageComponent,
    ResultsCalculatorComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CostCalculatorRoutingModule,
    SharedModule
  ]
})
export class CostCalculatorModule { }
