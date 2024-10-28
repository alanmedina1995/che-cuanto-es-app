import { MarketRatesService } from './../../../services/market-rates.service';
import { Component } from '@angular/core';
import { MarketRate } from '../../../interfaces/market-rates';

@Component({
  selector: 'app-market-rates-page',
  templateUrl: './market-rates-page.component.html'
})
export class MarketRatesPageComponent {

  public marketRates: MarketRate[] = [];

  constructor(private marketRatesService: MarketRatesService) {
    this.getMarketRatesValues();
  }

  getMarketRatesValues(): void {
    this.marketRatesService.getMarketRatesValues()
    .subscribe(marketRates => this.marketRates = marketRates);
  }

}
