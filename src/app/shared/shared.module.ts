import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { PoliticyPageComponent } from './pages/politicy-page/politicy-page.component';
import { TermPageComponent } from './pages/term-page/term-page.component';


@NgModule({
  declarations: [
    FooterComponent,
    PoliticyPageComponent,
    TermPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent
  ]
})
export class SharedModule { }
