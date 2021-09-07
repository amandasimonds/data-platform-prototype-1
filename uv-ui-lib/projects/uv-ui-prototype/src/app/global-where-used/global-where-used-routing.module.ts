import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormPageComponent } from './project-wizard/form-page/form-page.component';
import { CompletePageComponent } from './project-wizard/complete-page/complete-page.component';
import { GlobalWhereUsedComponent } from './global-where-used.component';
import { WizardContainerComponent } from './project-wizard/wizard-container/wizard-container.component';
import { StartPageComponent } from './project-wizard/start-page/start-page.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
    { 
        path: '', 
        component: GlobalWhereUsedComponent, 
        children: [
            {
                path: '', 
                redirectTo: 'project-wizard', 
                pathMatch: 'full' 
            },
            {
                path: 'landing',
                component: LandingComponent
            },
            {
                path: 'project-wizard',
                component: WizardContainerComponent,
                children: [
                    {
                        path: '', 
                        redirectTo: 'start', 
                        pathMatch: 'full' 
                    },
                    {
                        path: 'start',
                        component: StartPageComponent
                    },
                    {
                        path: 'form',
                        component: FormPageComponent
                    },
                    {
                        path: 'complete',
                        component: CompletePageComponent
                    },
                ]
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GwuRoutingModule { }
