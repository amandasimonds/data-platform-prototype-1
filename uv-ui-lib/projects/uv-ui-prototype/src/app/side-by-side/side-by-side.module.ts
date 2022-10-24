import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    ActionBarModule,
    SearchPanelModule,
    CheckboxModule,
    IconButtonModule,
    UvxOptionsMenuModule,
    UvxToolbarModule
} from '../../../../uv-ui-lib/src/public-api';
import { MatButtonModule } from "@angular/material/button";
import { SideBySideLandingModule } from './landing/landing.module';
import { SideBySideRoutingModule } from './side-by-side-routing.module';
import { SourceDocumentModule } from './sbs-document/source-document/source-document.module';
import { SideBySideComponent } from './side-by-side.component';
import { SbsWizardService } from './wizard/sbs-wizard.service';
import { SbsCompareComponent } from './sbs-compare/sbs-compare.component';
import { SelectDocumentsComponent } from './select-documents/select-documents.component';
import { MatIconModule } from '@angular/material/icon';
import { ClickOutsideModule } from '../shared/directives/click-outside/click-outside.module';
import { ChangeRequestService } from '../services/change-request/change-request.service';
import { TargetDocumentModule } from './sbs-document/target-document/target-document.module';

@NgModule({
    declarations: [
        SideBySideComponent,
        SbsCompareComponent,
        SelectDocumentsComponent
    ],
    imports: [
        ActionBarModule,
        MatButtonModule,
        CheckboxModule,
        ClickOutsideModule,
        CommonModule,
        SideBySideRoutingModule,
        SideBySideLandingModule,
        SourceDocumentModule,
        SearchPanelModule,
        IconButtonModule,
        MatIconModule,
        TargetDocumentModule,
        UvxOptionsMenuModule,
        UvxToolbarModule
    ],
    exports: [ SideBySideComponent ],
    providers: [SbsWizardService, ChangeRequestService]
})
export class SideBySideModule { }
