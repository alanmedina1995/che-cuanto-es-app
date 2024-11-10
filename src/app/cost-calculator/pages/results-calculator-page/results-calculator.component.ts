import { Component } from '@angular/core';
import { CostCalculatorServiceService } from '../../services/cost-calculator-service.service';
import { ResultCalcuflation } from '../../interfaces/result-calcuflation';
import { FCI } from '../../interfaces/fci';

@Component({
  selector: 'app-results-calculator',
  templateUrl: './results-calculator.component.html'
})
export class ResultsCalculatorComponent {

  public resultCalcuflation : ResultCalcuflation = {} as ResultCalcuflation;
  private fci: FCI[] = [];

  constructor(
    private costCalculatorService: CostCalculatorServiceService
  ){
    
  }

  ngOnInit(): void{
    this.getResultValues();
    this.getFciValus();
  }

  getResultValues():void{
      this.resultCalcuflation = this.costCalculatorService.resultCalcuflation;
  }

  getFciValus(): void {
    this.costCalculatorService.getFciValues()
    .subscribe((fciValues: FCI[]) => {
      this.fci = fciValues;
      console.log(this.fci);
    });
  }



}
