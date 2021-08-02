import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SbsDocumentComponent } from './sbs-document.component';

@NgModule({
  declarations: [SbsDocumentComponent],
  imports: [
    CommonModule
  ],
  exports: [SbsDocumentComponent]
})
export class SbsDocumentModule { }
