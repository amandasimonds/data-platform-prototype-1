import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalWhereUsedComponent } from './global-where-used.component';
import { LandingComponent } from './pages/landing/landing.component';
import { WaveComponent } from './wave/wave.component';
import { ForceDirectedGraphComponent } from './force-directed-graph/force-directed-graph.component';
import { ProfileViewerContainerComponent } from './profile-viewer-container/profile-viewer-container.component';
import { WizardContainerComponent } from './project-wizard/wizard-container/wizard-container.component';
import {G6Component} from './g6/g6.component';

const routes: Routes = [
    {
        path: '',
        component: GlobalWhereUsedComponent,
        data: { breadcrumb: 'Atlas' },
        children: [
            {
                path: 'wizard',
                component: WizardContainerComponent
            },
            {
                path: '',
                component: LandingComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'force-directed-graph',
                        pathMatch: 'full'
                    },
                    {
                        path: 'wave',
                        component: G6Component,
                        data: { breadcrumb: 'Graph Viewer' }
                    },
                    {
                        path: 'force-directed-graph',
                        component: G6Component,
                        data: { breadcrumb: 'Graph Viewer' }
                    },
                    {
                        path: ':id',
                        component: ProfileViewerContainerComponent,
                        data: {
                            breadcrumb: (id: string) => {
                                return `Profile: ${id}`;
                            }
                        },
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GwuRoutingModule { }
