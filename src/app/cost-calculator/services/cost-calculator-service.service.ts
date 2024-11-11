import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { InflationValue } from '../interfaces/inflation-value';
import { FCI } from '../interfaces/fci';
import { ResultCalcuflation } from '../interfaces/result-calcuflation';

@Injectable({
  providedIn: 'root'
})
export class CostCalculatorServiceService {

  private apiUrl: string = 'https://api.argentinadatos.com';

  public resultCalcuflation: ResultCalcuflation = {} as ResultCalcuflation;

  constructor(private http: HttpClient) { }

  getInflationValue(): Observable<InflationValue[]> {
    const url = `${this.apiUrl}/v1/finanzas/indices/inflacion`;

    return this.http.get<InflationValue[]>(url)
      .pipe(catchError(() => of([])));
  }

  getFciValues(): Observable<FCI[]> {
    const url = `${this.apiUrl}/v1/finanzas/fci/otros/ultimo`;

    return this.http.get<FCI[]>(url)
      .pipe(catchError(() => of([])));
  }


  setResultCalculator(resultCalcuflation: ResultCalcuflation): void {
    this.resultCalcuflation = resultCalcuflation;
  }

}
