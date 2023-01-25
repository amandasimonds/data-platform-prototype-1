import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { WizardService } from './wizard.service';
import { SidePanelModule, IconButtonModule, TabModule, ActionBarModule, ModalModule, RangeSliderModule, SelectableEntityModule } from '../../../../uv-ui-lib/src/public-api';
import { GlobalWhereUsedComponent } from './global-where-used.component';
import { GwuRoutingModule } from './global-where-used-routing.module';
import { FormPageModule } from './project-wizard/form-page/form-page.module';
import { LandingModule } from './pages/landing/landing.module';
import { StartPageModule } from './project-wizard/start-page/start-page.module';
import { ProfileViewerModule } from './profile-viewer/profile-viewer.module';
import { ProfileViewerContainerModule } from './profile-viewer-container/profile-viewer-container.module';
import { LaunchPointPageModule } from './project-wizard/launch-point-page/launch-point-page.module';
import { WaveComponent } from './wave/wave.component';
import { ForceDirectedGraphComponent } from './force-directed-graph/force-directed-graph.component';
import { GraphModule } from './force-directed-graph/graph/graph.module';
import { WalletItemModule } from '../wallet/wallet-item/wallet-item.module';
import { G6Module } from './g6/g6.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BreadcrumbModule } from 'xng-breadcrumb';

@NgModule({
    declarations: [
        GlobalWhereUsedComponent,
        WaveComponent,
        ForceDirectedGraphComponent
    ],
    imports: [
        LandingModule,
        CommonModule,
        SidePanelModule,
        TabModule,
        MatButtonModule,
        IconButtonModule,
        DragDropModule,
        MatCheckboxModule,
        GraphModule,
        GwuRoutingModule,
        LaunchPointPageModule,
        FormPageModule,
        ActionBarModule,
        RangeSliderModule,
        StartPageModule,
        MatIconModule,
        ModalModule,
        ProfileViewerModule,
        ProfileViewerContainerModule,
        SelectableEntityModule,
        BreadcrumbModule,
        G6Module
    ],
    exports: [GlobalWhereUsedComponent],
    providers: [WizardService]
})
export class GwuModule { }
