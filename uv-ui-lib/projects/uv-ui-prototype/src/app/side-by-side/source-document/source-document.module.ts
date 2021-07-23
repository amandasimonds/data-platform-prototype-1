import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourceDocumentComponent } from './source-document.component';
import { IconButtonModule, UvxIconModule } from 'projects/uv-ui-lib/src/public-api';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        SourceDocumentComponent
    ],
    imports: [
        CommonModule,
        IconButtonModule,
        UvxIconModule,
        RouterModule
    ],
    exports: [ SourceDocumentComponent ]
})
export class SourceDocumentModule { }
