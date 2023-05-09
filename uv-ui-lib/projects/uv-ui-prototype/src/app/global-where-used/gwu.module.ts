import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DragDropModule } from '@angular/cdk/drag-drop'
import {
    SidePanelModule,
    BackdropModule,
    ButtonModule,
    IconButtonModule,
    SearchPanelModule,
    TabModule,
    CheckboxModule,
    ActionBarModule,
    UvxIconModule,
    RangeSliderModule,
    SelectableEntityModule,
} from '../../../../uv-ui-lib/src/public-api'
import { GlobalWhereUsedComponent } from './global-where-used.component'
import { GwuRoutingModule } from './global-where-used-routing.module'
import { LandingComponent } from './pages/landing/landing.component'
import { ProfileViewerContainerModule } from './profile-viewer-container/profile-viewer-container.module'
import { WaveComponent } from './wave/wave.component'
import { ForceDirectedGraphComponent } from './force-directed-graph/force-directed-graph.component'
import { GraphModule } from './force-directed-graph/graph/graph.module'
import { ProfileViewerService } from './profile-viewer.service'
import { ProjectWizardModule } from './project-wizard/project-wizard.module'

@NgModule({
    declarations: [GlobalWhereUsedComponent, LandingComponent, WaveComponent, ForceDirectedGraphComponent],
    imports: [
        BackdropModule,
        CommonModule,
        SidePanelModule,
        TabModule,
        ButtonModule,
        IconButtonModule,
        SearchPanelModule,
        DragDropModule,
        CheckboxModule,
        GraphModule,
        GwuRoutingModule,
        ActionBarModule,
        RangeSliderModule,
        ProfileViewerContainerModule,
        UvxIconModule,
        SelectableEntityModule,
        ProjectWizardModule,
    ],
    exports: [GlobalWhereUsedComponent],
    providers: [ProfileViewerService],
})
export class GwuModule {}

