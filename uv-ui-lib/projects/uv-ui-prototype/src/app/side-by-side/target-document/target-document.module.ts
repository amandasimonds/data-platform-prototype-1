import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TargetDocumentComponent } from './target-document.component';
import { CheckboxModule, IconButtonModule, TooltipModule, UvxIconModule } from 'projects/uv-ui-lib/src/public-api';

@NgModule({
  declarations: [TargetDocumentComponent],
  imports: [
    CommonModule,
    CheckboxModule,
    IconButtonModule,
    UvxIconModule,
    TooltipModule
  ],
  exports: [ TargetDocumentComponent ]
})
export class TargetDocumentModule { }
