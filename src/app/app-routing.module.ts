import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'market-rates',
    loadChildren: () => import('./market-rates/market-rates.module').then(m => m.MarketRatesModule)
  },
  {
    path:'calculator',
    loadChildren: () => import('./cost-calculator/cost-calculator.module').then(m => m.CostCalculatorModule)
  },
  {
    path: '**',
    redirectTo: 'market-rates'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
