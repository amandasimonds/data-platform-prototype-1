import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    ActionBarModule,
    ButtonModule,
    SearchPanelModule,
    CheckboxModule
} from '../../../../uv-ui-lib/src/public-api';
import { SideBySideLandingModule } from './landing/landing.module';
import { SideBySideRoutingModule } from './side-by-side-routing.module';
import { SourceDocumentModule } from './sbs-document/source-document/source-document.module';
import { SideBySideComponent } from './side-by-side.component';
import { SbsWizardService } from './wizard/sbs-wizard.service';

@NgModule({
    declarations: [
        SideBySideComponent
    ],
    imports: [
        CommonModule,
        SideBySideRoutingModule,
        ActionBarModule,
        SideBySideLandingModule,
        SourceDocumentModule,
        CheckboxModule,
        SearchPanelModule,
        ButtonModule
    ],
    exports: [ SideBySideComponent ],
    providers: [SbsWizardService]
})
export class SideBySideModule { }
