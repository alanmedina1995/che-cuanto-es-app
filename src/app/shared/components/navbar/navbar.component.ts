import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(
    private router: Router
  ){

  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  navigateToCostCalculator(){
    this.router.navigate(['./calculator']);
  }

  navigateToMarketRates(){
    this.router.navigate(['./market-rates/oficiales']);
  }

  navigateToDolarArgy(){
    this.router.navigate(['./market-rates/dolar-argy']);
  }

  openToModalSignUp(){
    this.router.navigate(['./auth/signUp']);
  }

}
