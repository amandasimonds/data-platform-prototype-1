import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionBarModule, BackdropModule, ButtonModule, IconButtonModule, UvxIconModule } from '../../../../../uv-ui-lib/src/public-api';
import { SourceDocumentModule } from '../sbs-document/source-document/source-document.module';
import { TargetDocumentModule } from '../sbs-document/target-document/target-document.module';
import { SbsActionBarModule } from '../sbs-action-bar/sbs-action-bar.module';
import { SideBySideLandingComponent } from './landing.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        SideBySideLandingComponent
    ],
    imports: [
        CommonModule,
        ActionBarModule,
        RouterModule,
        ButtonModule,
        UvxIconModule,
        IconButtonModule,
        SourceDocumentModule,
        TargetDocumentModule,
        SbsActionBarModule,
        BackdropModule
    ],
    exports: [ SideBySideLandingComponent ]
})
export class SideBySideLandingModule { }
