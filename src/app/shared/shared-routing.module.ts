import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliticyPageComponent } from './pages/politicy-page/politicy-page.component';
import { TermPageComponent } from './pages/term-page/term-page.component';

const routes: Routes = [
    {
        path: '',
        children: [
          { path: 'politicas-de-privacidad', component:  PoliticyPageComponent},
          { path: 'terminos-y-condiciones', component:  TermPageComponent},
          { path: '**', redirectTo: '/' },
        ]
      }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SharedRoutingModule { }