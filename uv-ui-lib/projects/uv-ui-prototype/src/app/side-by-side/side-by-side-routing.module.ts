import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideBySideComponent } from './side-by-side.component';
import { SideBySideLandingComponent } from './landing/landing.component';

export const sideBySideRoutes: Routes = [
	{
		path: '',
		component: SideBySideComponent,
        children: [
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
