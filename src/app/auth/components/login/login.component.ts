import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor (
    private authService: AuthService,
    private router: Router
  ){}

  onLogin(){

    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return;
    }

    const user = this.loginForm.getRawValue() as User;

    this.authService.login(user).subscribe({
      next: (loggedIn) => {
        if(loggedIn) {
          this.router.navigate(['/']);
        }
        else{
          this.loginForm.reset();
          alert('El nombre de usuario y/o contraseña son incorrectos.');
        }
      }
    })
  }

  isValidField(field: string): boolean | null {
    return this.loginForm.controls[field].errors
    && this.loginForm.controls[field].touched;
  }

  getFieldError(field: string): string | null {
    if (!this.loginForm.controls[field]) return null;

    const errors = this.loginForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido.';
      }
    }

    return null;
  }

  navigateToSignUp(){
    this.router.navigate(['./auth/signUp']);
  }

}
