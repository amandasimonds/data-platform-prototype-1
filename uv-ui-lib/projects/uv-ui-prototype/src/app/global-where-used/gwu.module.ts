import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SidePanelModule, ButtonModule, IconButtonModule, SearchPanelModule, TabModule, CheckboxModule, ActionBarModule, ModalModule } from '../../../../uv-ui-lib/src/public-api';
import { CompletePageComponent } from './project-wizard/complete-page/complete-page.component';
import { GlobalWhereUsedComponent } from './global-where-used.component';
import { StepsService } from '../services/steps.service';
import { GwuRoutingModule } from './global-where-used-routing.module';
import { FormPageModule } from './project-wizard/form-page/form-page.module';
import { LandingComponent } from './pages/landing/landing.component';
import { StartPageModule } from './project-wizard/start-page/start-page.module';
// import { WizardContainerModule } from './project-wizard/wizard-container/wizard-container.module';
import { WizardContainerComponent } from './project-wizard/wizard-container/wizard-container.component';
import { ProfileViewerModule } from './profile-viewer/profile-viewer.module';
import { ProfileViewerContainerModule } from './profile-viewer-container/profile-viewer-container.module';

@NgModule({
    declarations: [
        CompletePageComponent,
        GlobalWhereUsedComponent,
        LandingComponent,
        WizardContainerComponent,
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
        ModalModule,
        ProfileViewerModule,
        ProfileViewerContainerModule
    ],
    exports: [ GlobalWhereUsedComponent ],
    providers: [ StepsService ]
})
export class GwuModule { }
