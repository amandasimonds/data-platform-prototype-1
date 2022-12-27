import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SelectDocumentsModule } from './select-documents/select-documents.module';
import { MatButtonModule } from "@angular/material/button";
import { SideBySideLandingModule } from './landing/landing.module';
import { SideBySideRoutingModule } from './side-by-side-routing.module';
import { SideBySideComponent } from './side-by-side.component';
import { SbsWizardService } from './wizard/sbs-wizard.service';
import { SbsCompareModule } from './sbs-compare/sbs-compare.module';
import { ChangeRequestService } from '../services/change-request/change-request.service';
import { DynamicBarModule, RegisterIconModule, ICON_SET, SearchFieldModule, IconButtonModule } from 'epd-pattern-library';
import { BreadcrumbModule } from 'xng-breadcrumb';

@NgModule({
    declarations: [
        SideBySideComponent
    ],
    imports: [
        RegisterIconModule.forRoot(ICON_SET),
        MatButtonModule,
        MatIconModule,
        CommonModule,
        SbsCompareModule,
        DynamicBarModule,
        SearchFieldModule,
        SideBySideRoutingModule,
        SideBySideLandingModule,
        SelectDocumentsModule,
        BreadcrumbModule,
        IconButtonModule
    ],
    exports: [ SideBySideComponent ],
    providers: [SbsWizardService, ChangeRequestService]
})
export class SideBySideModule { }
