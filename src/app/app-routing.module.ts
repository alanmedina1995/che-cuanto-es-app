import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./market-rates/market-rates.module').then(m => m.MarketRatesModule)
  },
  {
    path:'calculator',
    loadChildren: () => import('./cost-calculator/cost-calculator.module').then(m => m.CostCalculatorModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
