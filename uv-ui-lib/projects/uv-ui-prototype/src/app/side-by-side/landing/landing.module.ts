import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionBarModule, ButtonModule, IconButtonModule, UvxIconModule } from '../../../../../uv-ui-lib/src/public-api';
import { SourceDocumentModule } from '../sbs-document/source-document/source-document.module';
import { TargetDocumentModule } from '../sbs-document/target-document/target-document.module';
import { SbsActionBarModule } from '../sbs-action-bar/sbs-action-bar.module';
import { SideBySideLandingComponent } from './landing.component';

@NgModule({
    declarations: [
        SideBySideLandingComponent
    ],
    imports: [
        CommonModule,
        ActionBarModule,
        ButtonModule,
        UvxIconModule,
        IconButtonModule,
        SourceDocumentModule,
        TargetDocumentModule,
        SbsActionBarModule
    ],
    exports: [ SideBySideLandingComponent ]
})
export class SideBySideLandingModule { }
