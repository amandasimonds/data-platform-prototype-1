import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SidePanelModule, ButtonModule, IconButtonModule, SearchPanelModule, TabModule, CheckboxModule, ActionBarModule } from '../../../../uv-ui-lib/src/public-api';
import { CompletePageComponent } from './pages/project-wizard/complete-page/complete-page.component';
import { GlobalWhereUsedComponent } from './global-where-used.component';
import { StepsService } from '../services/steps.service';
import { GwuRoutingModule } from './global-where-used-routing.module';
import { FormPageModule } from './pages/project-wizard/form-page/form-page.module';
import { LandingComponent } from './pages/landing/landing.component';
import { StartPageModule } from './pages/project-wizard/start-page/start-page.module';
import { WizardContainerComponent } from './components/wizard-container/wizard-container.component';
import { WizardContainerModule } from './components/wizard-container/wizard-container.module';

@NgModule({
    declarations: [
        CompletePageComponent,
        GlobalWhereUsedComponent,
        LandingComponent,
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
        ActionBarModule,
        StartPageModule,
        WizardContainerModule
    ],
    exports: [ GlobalWhereUsedComponent ],
    providers: [ StepsService ]
})
export class GwuModule { }
