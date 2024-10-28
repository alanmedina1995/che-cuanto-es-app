import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CostCalculatorPageComponent } from './pages/cost-calculator-page/cost-calculator-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CostCalculatorRoutingModule } from './cost-calculator-routing.module';



@NgModule({
  declarations: [
    CostCalculatorPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CostCalculatorRoutingModule,
    SharedModule
  ]
})
export class CostCalculatorModule { }
