import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { PoliticyPageComponent } from './pages/politicy-page/politicy-page.component';
import { TermPageComponent } from './pages/term-page/term-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignUpComponent } from '../auth/components/sign-up/sign-up.component';
import { AuthModule } from '../auth/auth.module';


@NgModule({
  declarations: [
    FooterComponent,
    PoliticyPageComponent,
    TermPageComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    FooterComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
