import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './auth/services/auth.guard';

const routes: Routes = [
  {
    path: 'market-rates',
    loadChildren: () => import('./market-rates/market-rates.module').then(m => m.MarketRatesModule)
  },
  {
    path:'calculator',
    canActivate: [AuthGuard],
    loadChildren: () => import('./cost-calculator/cost-calculator.module').then(m => m.CostCalculatorModule)
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)

  },
  {
    path:'legals',
    loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
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
