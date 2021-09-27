import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, IconButtonModule, CheckboxModule } from 'projects/uv-ui-lib/src/public-api';
import { CompareWarningComponent } from './compare-warning.component';

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
