import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CostCalculatorServiceService } from '../../services/cost-calculator-service.service';
import { InflationValue } from './../../interfaces/inflation-value';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ResultCalcuflation, ResultCalcuflationClass } from '../../interfaces/result-calcuflation';

@Component({
  selector: 'app-cost-calculator-page',
  templateUrl: './cost-calculator-page.component.html'
})
export class CostCalculatorPageComponent {

  public costCalculatorForm: FormGroup = new FormGroup({
    cashPrice: new FormControl('', [Validators.required, Validators.min(0)]),
    totalPriceFinanced: new FormControl('', [Validators.required, Validators.min(0)]),
    inflationValue: new FormControl('', [Validators.required, Validators.min(0)]),
    installments: new FormControl('', [Validators.required, Validators.min(0)])
  })

  constructor(
    private router: Router,
    private costCalculatorService: CostCalculatorServiceService,
  ) {

  }


  ngOnInit(): void {
    this.getInflationValue();
  }

  isValidField(field: string): boolean | null {
    return this.costCalculatorForm.controls[field].errors
      && this.costCalculatorForm.controls[field].touched;
  }

  getFieldError(field: string): string | null {
    if (!this.costCalculatorForm.controls[field]) return null;

    const errors = this.costCalculatorForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'min':
          return 'El valor tiene que ser mayor a 0.';
      }
    }

    return null;
  }

  getInflationValue(): void {
    this.costCalculatorService.getInflationValue()
      .subscribe(
        (inflacionValue: InflationValue[]) => {
          if (inflacionValue.length > 0) {
            const inflationValue = inflacionValue[inflacionValue.length - 1];
            this.costCalculatorService.saveDbInflationValue(inflationValue).subscribe(() => {
              this.costCalculatorForm.controls['inflationValue'].setValue(inflationValue.valor);
            });
          } else {
            this.handleDbInflationValue();
          }
        },
        () => {
          this.handleDbInflationValue();
        }
      );
  }

  private handleDbInflationValue(): void {
    this.costCalculatorService.getDbInflationValue().subscribe((inflacionValueDb: InflationValue[]) => {
      if (inflacionValueDb.length > 0) {
        const inflationValueDb = inflacionValueDb[inflacionValueDb.length - 1];
        this.costCalculatorForm.controls['inflationValue'].setValue(inflationValueDb.valor);
      }
    });
  }

  calculateAdjustedInstallments(
  ): void {

    if (this.costCalculatorForm.invalid) {
      this.costCalculatorForm.markAllAsTouched();
      return;
    }

    const adjustedInstallments: number[] = [];
    let totalAdjustedInstallments: number = 0;

    const cashPrice = this.costCalculatorForm.controls['cashPrice'].value;
    const financedPrice = this.costCalculatorForm.controls['totalPriceFinanced'].value;
    const installments = this.costCalculatorForm.controls['installments'].value
    const inflationValue = this.costCalculatorForm.controls['inflationValue'].value / 100;

    const installmentValue = financedPrice / installments;

    for (let i = 1; i <= installments; i++) {

      const adjustedInstallment = installmentValue / Math.pow(1 + inflationValue, i);
      adjustedInstallments.push(adjustedInstallment);

      totalAdjustedInstallments += adjustedInstallment;
    }

    console.log('totalPriceFinanced' + totalAdjustedInstallments);
    console.log('adjustedInstallments' + adjustedInstallments);

    this.costCalculatorForm.reset({ cashPrice: '', totalPriceFinanced: '', installments: '', inflationValue: this.getInflationValue() })

    let resultCalcuflation = new ResultCalcuflationClass(inflationValue, totalAdjustedInstallments, cashPrice,
      financedPrice, installments, installmentValue, adjustedInstallments)

    this.costCalculatorService.setResultCalculator(resultCalcuflation);

    this.router.navigate(['./calculator/resultados']).then(() => {
      this.ngOnDestroy();
    });
  }

  ngOnDestroy() {
  }

}
