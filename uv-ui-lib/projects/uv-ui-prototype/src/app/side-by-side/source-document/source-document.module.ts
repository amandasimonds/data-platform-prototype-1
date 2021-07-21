import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourceDocumentComponent } from './source-document.component';

@NgModule({
    declarations: [
        SourceDocumentComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [ SourceDocumentComponent ]
})
export class SourceDocumentModule { }
