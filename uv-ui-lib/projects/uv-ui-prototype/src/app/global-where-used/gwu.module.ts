import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SidePanelModule, ButtonModule, IconButtonModule, SearchPanelModule, TabModule, CheckboxModule, ActionBarModule } from '../../../../uv-ui-lib/src/public-api';
import { CompletePageComponent } from './pages/complete-page/complete-page.component';
import { GlobalWhereUsedComponent } from './global-where-used.component';
import { StepsService } from '../services/steps.service';
import { GwuRoutingModule } from './global-where-used-routing.module';
import { FormPageModule } from './pages/form-page/form-page.module';
import { LandingComponent } from './pages/landing/landing.component';
@NgModule({
    declarations: [
        CompletePageComponent,
        GlobalWhereUsedComponent,
        LandingComponent
    ],
    imports: [
        CommonModule,
        SidePanelModule,
        TabModule,
        ButtonModule,
        IconButtonModule,
        SearchPanelModule,
        DragDropModule,
        CheckboxModule,
        GwuRoutingModule,
        FormPageModule,
        ActionBarModule
    ],
    exports: [ GlobalWhereUsedComponent ],
    providers: [ StepsService ]
})
export class GwuModule { }
