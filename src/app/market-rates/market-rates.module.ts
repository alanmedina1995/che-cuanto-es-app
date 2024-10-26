import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketRatesPageComponent } from './pages/market-rates-page/market-rates-page/market-rates-page.component';
import { MarketRatesTableComponent } from './components/market-rates-table/market-rates-table.component';
import { MarketRatesRoutingModule } from './market-rates-routing.modules';
import { SharedModule } from '../shared/shared.module';
import { DolarsComponent } from './pages/dolars/dolars-page/dolars-page.component';



@NgModule({
  declarations: [
    MarketRatesPageComponent,
    MarketRatesTableComponent,
    DolarsComponent
  ],
  imports: [
    CommonModule,
    MarketRatesRoutingModule,
    SharedModule
  ]
})
export class MarketRatesModule { }
