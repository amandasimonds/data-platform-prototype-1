import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectDocumentsComponent } from './select-documents.component';
import { SourceDocumentModule } from '../sbs-document/source-document/source-document.module';
import { TargetDocumentModule } from '../sbs-document/target-document/target-document.module';



@NgModule({
  declarations: [SelectDocumentsComponent],
  imports: [
    CommonModule,
    SourceDocumentModule,
    TargetDocumentModule
  ],
  exports: [SelectDocumentsComponent]
})
export class SelectDocumentsModule { }
