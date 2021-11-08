import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideBySideComponent } from './side-by-side.component';
import { SideBySideLandingComponent } from './landing/landing.component';
import { WizardContainerComponent } from '../global-where-used/project-wizard/wizard-container/wizard-container.component';

export const sideBySideRoutes: Routes = [
	{
		path: '',
		component: SideBySideComponent,
        children: [
            {
                path: 'wizard',
                component: WizardContainerComponent
            },
            {
                path: '', 
                component: SideBySideLandingComponent
            }
        ]
	}
];

@NgModule({
    imports: [RouterModule.forChild(sideBySideRoutes)],
    exports: [RouterModule]
})

export class SideBySideRoutingModule { }
