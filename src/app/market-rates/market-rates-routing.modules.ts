import { MarketRatesPageComponent } from './pages/market-rates-page/market-rates-page/market-rates-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: MarketRatesPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MarketRatesRoutingModule { }