import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { WizardService } from './wizard.service';
import { SidePanelModule, IconButtonModule, SearchPanelModule, TabModule, CheckboxModule, ActionBarModule, ModalModule, UvxIconModule, RangeSliderModule, SelectableEntityModule } from '../../../../uv-ui-lib/src/public-api';
import { GlobalWhereUsedComponent } from './global-where-used.component';
import { GwuRoutingModule } from './global-where-used-routing.module';
import { FormPageModule } from './project-wizard/form-page/form-page.module';
import { LandingComponent } from './pages/landing/landing.component';
import { StartPageModule } from './project-wizard/start-page/start-page.module';
import { ProfileViewerModule } from './profile-viewer/profile-viewer.module';
import { ProfileViewerContainerModule } from './profile-viewer-container/profile-viewer-container.module';
import { LaunchPointPageModule } from './project-wizard/launch-point-page/launch-point-page.module';
import { WaveComponent } from './wave/wave.component';
import { ForceDirectedGraphComponent } from './force-directed-graph/force-directed-graph.component';
import { WizardContainerModule } from './project-wizard/wizard-container/wizard-container.module';
import { GraphModule } from './force-directed-graph/graph/graph.module';
import { WalletItemModule } from '../wallet/wallet-item/wallet-item.module';
import { BackdropModule } from 'epd-pattern-library';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        GlobalWhereUsedComponent,
        LandingComponent,
        WaveComponent,
        ForceDirectedGraphComponent
    ],
    imports: [
        BackdropModule,
        CommonModule,
        SidePanelModule,
        TabModule,
        MatButtonModule,
        IconButtonModule,
        SearchPanelModule,
        DragDropModule,
        CheckboxModule,
        GraphModule,
        GwuRoutingModule,
        LaunchPointPageModule,
        FormPageModule,
        ActionBarModule,
        RangeSliderModule,
        StartPageModule,
        ModalModule,
        ProfileViewerModule,
        ProfileViewerContainerModule,
        UvxIconModule,
        WizardContainerModule,
        SelectableEntityModule
    ],
    exports: [ GlobalWhereUsedComponent ],
    providers: [ WizardService ]
})
export class GwuModule { }
