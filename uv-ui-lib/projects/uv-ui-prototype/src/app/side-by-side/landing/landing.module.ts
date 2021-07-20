import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionBarModule, ButtonModule, DropdownModule, IconButtonModule, UvxIconModule } from '../../../../../uv-ui-lib/src/public-api';
import { SideBySideLandingComponent } from './landing.component';
import { SourceDocumentModule } from '../source-document/source-document.module';

@NgModule({
    declarations: [
        SideBySideLandingComponent,
    ],
    imports: [
        CommonModule,
        ActionBarModule,
        ButtonModule,
        UvxIconModule,
        IconButtonModule,
        SourceDocumentModule
    ],
    exports: [ SideBySideLandingComponent ]
})
export class SideBySideLandingModule { }
