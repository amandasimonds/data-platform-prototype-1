import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TargetDocumentComponent } from './target-document.component';

@NgModule({
  declarations: [TargetDocumentComponent],
  imports: [
    CommonModule
  ],
  exports: [ TargetDocumentComponent ]
})
export class TargetDocumentModule { }
