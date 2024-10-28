import { MarketRatesPageComponent } from './pages/market-rates-page/market-rates-page/market-rates-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DolarsComponent } from './pages/dolars/dolars-page/dolars-page.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'cotizaciones', component: MarketRatesPageComponent },
            { path: 'precio-del-dolar', component: DolarsComponent },
            { path: '**', redirectTo: 'cotizaciones' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MarketRatesRoutingModule { }