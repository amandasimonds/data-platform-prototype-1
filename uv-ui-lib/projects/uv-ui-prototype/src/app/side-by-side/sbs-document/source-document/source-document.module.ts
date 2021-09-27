import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconButtonModule, TooltipModule, UvxIconModule } from 'projects/uv-ui-lib/src/public-api';
import { SourceDocumentComponent } from './source-document.component';

@NgModule({
    declarations: [
        SourceDocumentComponent
    ],
    imports: [
        CommonModule,
        IconButtonModule,
        UvxIconModule,
        RouterModule,
        TooltipModule
    ],
    exports: [ SourceDocumentComponent ]
})
export class SourceDocumentModule { }
