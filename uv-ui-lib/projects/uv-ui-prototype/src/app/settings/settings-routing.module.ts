import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectorCreatorComponent } from './connector-creator/connector-creator.component';
import { ConnectorTableComponent } from './connector-table/connector-table.component';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
    {
        path: '',
        component: SettingsComponent,
        children: [
            {
                path: '',
                redirectTo: 'connector-table',
                pathMatch: 'full'
            },
            {
                path: 'connector-creator',
                component: ConnectorCreatorComponent
            },
            {
                path: 'connector-table',
                component: ConnectorTableComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingsRoutingModule { }
