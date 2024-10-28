import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { InflationValue } from '../interfaces/inflation-value';

@Injectable({
  providedIn: 'root'
})
export class CostCalculatorServiceService {

  private apiUrl: string = 'https://api.argentinadatos.com';

  constructor(private http: HttpClient) { }

  getInflationValue(): Observable<InflationValue[]>{
    const url = `${this.apiUrl}/v1/finanzas/indices/inflacion`;

    return this.http.get<InflationValue[]>(url)
    .pipe(catchError(() => of([])));
  }
}
