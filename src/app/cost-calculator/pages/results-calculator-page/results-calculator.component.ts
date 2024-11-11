import { Component } from '@angular/core';
import { CostCalculatorServiceService } from '../../services/cost-calculator-service.service';
import { ResultCalcuflation } from '../../interfaces/result-calcuflation';
import { FCI } from '../../interfaces/fci';
import { resultCalculateFci } from '../../interfaces/result-calculate-fci';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results-calculator',
  templateUrl: './results-calculator.component.html'
})
export class ResultsCalculatorComponent {

  public resultCalcuflation: ResultCalcuflation = {} as ResultCalcuflation;
  public fcis: FCI[] = [];
  
  constructor(
    private costCalculatorService: CostCalculatorServiceService,
    private route: Router
  ) {

  }

  ngOnInit(): void {
    this.getResultValues();
    this.getFciValus();
  }

  getResultValues(): void {
    this.resultCalcuflation = this.costCalculatorService.resultCalcuflation;

    if (!this.resultCalcuflation || 
      !this.resultCalcuflation.cashPrice) {
      this.route.navigate(['./calculator/calculadora-simple']);
    }
  }

  getFciValus(): void {
    this.costCalculatorService.getFciValues()
      .subscribe((fciValues: FCI[]) => {
        this.fcis = fciValues;
        this.calculateFinalAmountWithoutWithdrawals();
        this.calculateFinalAmountWithWithdrawals();
      });
  }

  calculateFinalAmountWithoutWithdrawals(): void {
    for (let fci of this.fcis) {
      const dailyRate = fci.tna / 365;
      const days = this.resultCalcuflation.installments * 30
      let result = this.resultCalcuflation.cashPrice * Math.pow(1 + dailyRate, days);
      if (!fci.resultCalculateFcis) {
        fci.resultCalculateFcis = [];
      }
      fci.resultCalculateFcis.push({ result, isWithdrawals: false })
    }
  }

  calculateFinalAmountWithWithdrawals(): void {

    for (let fci of this.fcis) {
      let balance = this.resultCalcuflation.cashPrice;
      const dailyRate = fci.tna / 365;
      for (let month = 1; month <= this.resultCalcuflation.installments; month++) {
        for (let day = 1; day <= 30; day++) {
          balance += balance * dailyRate;
        }
        balance -= this.resultCalcuflation.installmentValue;
      }
      if (!fci.resultCalculateFcis) {
        fci.resultCalculateFcis = [];
      }
      fci.resultCalculateFcis.push({ result: balance, isWithdrawals: true })
    }
  }


}
