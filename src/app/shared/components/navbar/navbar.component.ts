import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  public activeUser = false;
  public user = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ){

  }

  ngOnInit(): void {
    this.authService.auth().subscribe({
      next:(user) => {
        if (user) {
          this.activeUser = true;
          this.user = user.username;
        }
      }
    });
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  onLogout() {
    this.activeUser = false;
    return this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/']);
      }
    })
  }

}
