import { Component } from '@angular/core';
import { MarketRate } from '../../../interfaces/market-rates';
import { MarketRatesService } from '../../../services/market-rates.service';


@Component({
  selector: 'app-dolars',
  templateUrl: './dolars-page.component.html'
})
export class DolarsComponent {

  public dolarMarketRates: MarketRate[] = [];

  constructor(
    private marketRateService: MarketRatesService
  ){
    this.getDolarValues();
  }

  getDolarValues(): void {
    this.marketRateService.getDolarValues()
    .subscribe(dolarMarketRates =>  this.dolarMarketRates = dolarMarketRates);
  }

}
