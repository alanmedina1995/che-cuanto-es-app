import { InflationValue } from './../interfaces/inflation-value';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { FCI } from '../interfaces/fci';
import { ResultCalcuflation } from '../interfaces/result-calcuflation';

@Injectable({
  providedIn: 'root'
})
export class CostCalculatorServiceService {

  private apiUrl: string = 'https://api.argentinadatos.com';
  private dbUrl = 'http://localhost:3000';

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

  saveDbInflationValue(inflationValue: InflationValue): Observable<InflationValue> {
    return this.getDbInflationValue().pipe(
      switchMap((inflationValueDb: InflationValue[]) => {
        if (inflationValueDb.length > 0) {
          const url = `${this.dbUrl}/inflation/1`;
          return this.http.patch<InflationValue>(url, inflationValue).pipe(
            catchError(error => {
              console.error('Error update inflation value:', error);
              return of({} as InflationValue);
            })
          );
        } else {
          const url = `${this.dbUrl}/inflation`;
          return this.http.post<InflationValue>(url, inflationValue).pipe(
            catchError(error => {
              console.error('Error saving inflation value:', error);
              return of({} as InflationValue);
            })
          );
        }
      })
    );
  }

  getDbInflationValue(): Observable<InflationValue[]>{
    const url = `${this.dbUrl}/inflation`;

    return this.http.get<InflationValue[]>(url)
      .pipe(catchError(() => of([])));
  }

  setResultCalculator(resultCalcuflation: ResultCalcuflation): void {
    this.resultCalcuflation = resultCalcuflation;
  }

}
