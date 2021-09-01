import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompareWarningComponent } from './compare-warning.component';
import { ButtonModule, IconButtonModule, CheckboxModule } from 'projects/uv-ui-lib/src/public-api';

@NgModule({
  declarations: [CompareWarningComponent],
  imports: [
    CommonModule,
    IconButtonModule,
    ButtonModule,
    CheckboxModule
  ],
  exports: [ CompareWarningComponent ]
})
export class CompareWarningModule { }
