import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MarketRate } from '../interfaces/market-rates';

@Injectable({
  providedIn: 'root'
})
export class MarketRatesService {

  private apiUrl: string = 'https://dolarapi.com'

  constructor(private http: HttpClient) { }

  getMarketRatesValues(): Observable<MarketRate[]>{
    const url = `${this.apiUrl}/v1/cotizaciones`;

    return this.http.get<MarketRate[]>(url)
    .pipe(catchError(() => of([])));
  }

  getDolarValues(): Observable<MarketRate[]>{
    const url = `${this.apiUrl}/v1/dolares`;

    return this.http.get<MarketRate[]>(url)
    .pipe(catchError(() => of([])));
  }


}
