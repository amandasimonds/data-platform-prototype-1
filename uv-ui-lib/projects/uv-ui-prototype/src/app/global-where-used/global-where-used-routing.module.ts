import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalWhereUsedComponent } from './global-where-used.component';
import { LandingComponent } from './pages/landing/landing.component';
import { WaveComponent } from './wave/wave.component';
import { ForceDirectedGraphComponent } from './force-directed-graph/force-directed-graph.component';
import { ProfileViewerContainerComponent } from './profile-viewer-container/profile-viewer-container.component';

const routes: Routes = [
    {
        path: '',
        component: GlobalWhereUsedComponent,
        children: [
            {
                path: '',
                component: LandingComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'wave',
                        pathMatch: 'full'
                    },
                    {
                        path: 'wave',
                        component: WaveComponent
                    },
                    {
                        path: 'force-directed-graph',
                        component: ForceDirectedGraphComponent
                    },
                    {
                        path: 'profile',
                        component: ProfileViewerContainerComponent
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
