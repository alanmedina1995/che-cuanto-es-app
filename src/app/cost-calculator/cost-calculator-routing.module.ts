import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostCalculatorPageComponent } from './pages/cost-calculator-page/cost-calculator-page.component';
import { ResultsCalculatorComponent } from './pages/results-calculator-page/results-calculator.component';


const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'calculadora-simple', component: CostCalculatorPageComponent },
            { path: 'resultados', component: ResultsCalculatorComponent },
            { path: '**', redirectTo: 'calculadora-simple' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CostCalculatorRoutingModule { }