import { MarketRatesPageComponent } from './pages/market-rates-page/market-rates-page/market-rates-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DolarsComponent } from './pages/dolars/dolars-page/dolars-page.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'oficiales', component: MarketRatesPageComponent },
            { path: 'dolar-argy', component: DolarsComponent },
            { path: '**', redirectTo: 'oficiales' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MarketRatesRoutingModule { }