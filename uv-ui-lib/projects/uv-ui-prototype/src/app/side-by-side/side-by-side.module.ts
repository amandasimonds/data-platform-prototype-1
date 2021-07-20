import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBySideComponent } from './side-by-side.component';
import { SideBySideRoutingModule } from './side-by-side-routing.module';
import { ActionBarModule, SidePanelModule, ButtonModule, IconButtonModule, SearchPanelModule, TabModule, CheckboxModule } from '../../../../uv-ui-lib/src/public-api';
import { TasksModule } from './tasks/tasks.module';
import { SideBySideLandingModule } from './landing/landing.module';
import { SourceDocumentModule } from './source-document/source-document.module';

@NgModule({
    declarations: [
        SideBySideComponent,
    ],
    imports: [
        CommonModule,
        SideBySideRoutingModule,
        ActionBarModule,
        TasksModule,
        SideBySideLandingModule,
        SourceDocumentModule
    ],
    exports: [ SideBySideComponent ]
})
export class SideBySideModule { }
