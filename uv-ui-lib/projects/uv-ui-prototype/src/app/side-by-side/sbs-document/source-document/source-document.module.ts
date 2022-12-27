import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'projects/uv-ui-lib/src/public-api';
import { SourceDocumentComponent } from './source-document.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
        SourceDocumentComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        RouterModule,
        TooltipModule
    ],
    exports: [ SourceDocumentComponent ]
})
export class SourceDocumentModule { }
