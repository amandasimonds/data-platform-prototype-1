import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TargetDocumentComponent } from './target-document.component';
import { CheckboxModule, IconButtonModule, UvxIconModule } from 'projects/uv-ui-lib/src/public-api';

@NgModule({
  declarations: [TargetDocumentComponent],
  imports: [
    CommonModule,
    CheckboxModule,
    IconButtonModule,
    UvxIconModule
  ],
  exports: [ TargetDocumentComponent ]
})
export class TargetDocumentModule { }
