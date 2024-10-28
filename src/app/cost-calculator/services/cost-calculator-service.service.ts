import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { InflationValue } from '../interfaces/inflation-value';

@Injectable({
  providedIn: 'root'
})
export class CostCalculatorServiceService {

  private apiUrl: string = 'https://api.argentinadatos.com';

  public inflationValue: number = 0;
  public totalAdjustedInstallments: number = 0;
  public cashPrice: number = 0;
  public financedPrice: number = 0;
  public installments: number = 0;
  public installmentValue: number = 0;
  public adjustedInstallments: number[] = [];

  constructor(private http: HttpClient) { }

  getInflationValue(): Observable<InflationValue[]> {
    const url = `${this.apiUrl}/v1/finanzas/indices/inflacion`;

    return this.http.get<InflationValue[]>(url)
      .pipe(catchError(() => of([])));
  }

  setResultCalculator(inflationValue: number, totalAdjustedInstallments: number,
    cashPrice: number, financedPrice: number, installmentValue: number
    , adjustedInstallments: number[]): void {

    this.inflationValue = inflationValue;
    this.totalAdjustedInstallments = totalAdjustedInstallments;
    this.cashPrice = cashPrice;
    this.financedPrice = financedPrice;
    this.installmentValue = installmentValue;
    this.adjustedInstallments = adjustedInstallments;

  }

}
