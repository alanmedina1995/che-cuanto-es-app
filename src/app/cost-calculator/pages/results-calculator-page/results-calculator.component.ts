import { Component } from '@angular/core';
import { CostCalculatorServiceService } from '../../services/cost-calculator-service.service';

@Component({
  selector: 'app-results-calculator',
  templateUrl: './results-calculator.component.html'
})
export class ResultsCalculatorComponent {

  public inflationValue: number = 0;
  public totalAdjustedInstallments: number = 0;
  public cashPrice: number = 0;
  public financedPrice: number = 0;
  public installmentValue: number = 0;
  public adjustedInstallments: number[] = []

  constructor(
    private costCalculatorService: CostCalculatorServiceService
  ){
    
  }

  ngOnInit(): void{
    this.getResultValues();
  }

  getResultValues():void{
    this.inflationValue = this.costCalculatorService.inflationValue * 100;
    this.totalAdjustedInstallments = this.costCalculatorService.totalAdjustedInstallments;
    this.cashPrice = this.costCalculatorService.cashPrice;
    this.financedPrice = this.costCalculatorService.financedPrice;
    this.installmentValue = this.costCalculatorService.installmentValue;
    this.adjustedInstallments = this.costCalculatorService.adjustedInstallments;
  }



}
