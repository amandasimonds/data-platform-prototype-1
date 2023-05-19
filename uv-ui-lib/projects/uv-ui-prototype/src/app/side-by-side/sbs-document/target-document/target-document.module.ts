import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule, IconButtonModule, TooltipModule, UvxIconModule } from 'projects/uv-ui-lib/src/public-api';
import { TargetDocumentComponent } from './target-document.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
    declarations: [TargetDocumentComponent],
    imports: [CommonModule, CheckboxModule, IconButtonModule, UvxIconModule, MatCheckboxModule, TooltipModule],
    exports: [TargetDocumentComponent],
})
export class TargetDocumentModule {}

