import { Component, Input } from '@angular/core';
import { MarketRate } from '../../interfaces/market-rates';

@Component({
  selector: 'app-market-rates-table',
  templateUrl: './market-rates-table.component.html'
})
export class MarketRatesTableComponent {
  
  @Input()
  public marketRates: MarketRate[] = [];
}
