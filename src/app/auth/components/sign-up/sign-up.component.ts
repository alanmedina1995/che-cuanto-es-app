import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  public signUpForm: FormGroup;
  passwordControl: AbstractControl;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { 
    this.signUpForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8),
        this.passwordMatchValidator.bind(this)])
    });

    this.passwordControl = this.signUpForm.get('password') || new FormControl('');
  }

  onSignUp() {
    if(this.signUpForm.invalid){
      this.signUpForm.markAllAsTouched();
      alert('Revisá los valores ingresados');
      return;
    }

    const user = this.signUpForm.getRawValue() as User;

    this.authService.signUp(user)
    .subscribe({
      next: () => {
        this.router.navigate(['/']);
      }
    })
  }
  
  passwordMatchValidator(control: AbstractControl) {
    const password = this.passwordControl?.value;
    const confirmPassword = control.value;

    if (password === confirmPassword) {
      return null;
    } else {
      return { passwordsNotMatch: true };
    }
  }

  isValidField(field: string): boolean | null {
    return this.signUpForm.controls[field].errors
    && this.signUpForm.controls[field].touched;
  }

  getFieldError(field: string): string | null {
    if (!this.signUpForm.controls[field]) return null;

    const errors = this.signUpForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido.';

        case 'minLength':
          return 'Este camppo no tiene la cantidad de caracteres requeridos.';
        case 'email':
          return 'Ingresá un email correcto.'
      }
    }

    return null;
  }

  navigateToLogIn(){
    this.router.navigate(['./auth/login']);
  }

}
