import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, CardModule, UvxIconModule } from '../../../../../uv-ui-lib/src/public-api';
import { SourceDocumentComponent } from './source-document.component';

@NgModule({
    declarations: [
        SourceDocumentComponent
    ],
    imports: [
        CommonModule,
        ButtonModule,
        UvxIconModule,
        CardModule
    ],
    exports: [ SourceDocumentComponent ]
})
export class SourceDocumentModule { }
