import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { AuthService } from './auth.service'; 
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.auth().pipe(map((user) => {
      if (user) {
        return true;
      } else {
        this.router.navigate(['./auth/login']);
        alert('Por favor inicia sesión.')
        return false;
      }
    }));
  }  

}
