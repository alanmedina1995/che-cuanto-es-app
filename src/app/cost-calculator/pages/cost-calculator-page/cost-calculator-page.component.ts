import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CostCalculatorServiceService } from '../../services/cost-calculator-service.service';
import { InflationValue } from './../../interfaces/inflation-value';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cost-calculator-page',
  templateUrl: './cost-calculator-page.component.html'
})
export class CostCalculatorPageComponent {

  // public costCalculatorForm: FormGroup =  this.fb.group({
  //   cashPrice: [0, [Validators.required, Validators.min(0)]],
  //   totalPriceFinanced: [0, [Validators.required, Validators.min(0)]],
  //   inflationValue: [0, [Validators.required, Validators.min(0)]],
  //   installments: [0, [Validators.required, Validators.min(2)]]
  // });

  public costCalculatorForm: FormGroup = new FormGroup({
    cashPrice: new FormControl('', [Validators.required, Validators.min(0)]),
    totalPriceFinanced: new FormControl('', [Validators.required, Validators.min(0)]),
    inflationValue: new FormControl('', [Validators.required, Validators.min(0)]),
    installments: new FormControl('', [Validators.required, Validators.min(0)])
  })

  private inflationValue: number = 0;
  private totalAdjustedInstallments: number = 0;
  private cashPrice: number = 0;
  private financedPrice: number = 0;
  private installments: number = 0;
  private installmentValue: number = 0;
  private adjustedInstallments: number[] = [];

  constructor(
    private fb: FormBuilder,
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
      .subscribe((inflacionValue: InflationValue[]) => {
        if (inflacionValue.length > 0) {
          this.inflationValue = inflacionValue[inflacionValue.length - 1].valor;
          this.costCalculatorForm.controls['inflationValue'].setValue(this.inflationValue);
        }
      });
  }

  calculateAdjustedInstallments(
  ): void {

    if (this.costCalculatorForm.invalid) {
      this.costCalculatorForm.markAllAsTouched();
      return;
    }

    this.cashPrice = this.costCalculatorForm.controls['cashPrice'].value;
    this.financedPrice = this.costCalculatorForm.controls['totalPriceFinanced'].value;
    this.installments = this.costCalculatorForm.controls['installments'].value
    this.inflationValue = this.costCalculatorForm.controls['inflationValue'].value / 100;

    this.installmentValue = this.financedPrice / this.installments;

    for (let i = 1; i <= this.installments; i++) {

      const adjustedInstallment = this.installmentValue / Math.pow(1 + this.inflationValue, i);
      this.adjustedInstallments.push(adjustedInstallment);

      this.totalAdjustedInstallments += adjustedInstallment;
    }

    console.log('totalPriceFinanced' + this.totalAdjustedInstallments);
    console.log('adjustedInstallments' + this.adjustedInstallments);

    this.costCalculatorForm.reset({ cashPrice: '', totalPriceFinanced: '', installments: '', inflationValue: this.getInflationValue() })
    this.costCalculatorService.setResultCalculator(this.inflationValue,
      this.totalAdjustedInstallments,
      this.cashPrice,
      this.financedPrice,
      this.installmentValue,
      this.adjustedInstallments);
    
    this.router.navigate(['./calculator/resultados']).then(() => {
      this.ngOnDestroy();
    });
  }

  ngOnDestroy(){
  }

}
