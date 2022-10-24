import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonModule, CheckboxModule } from 'projects/uv-ui-lib/src/public-api';
import { CompareWarningComponent } from './compare-warning.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CompareWarningComponent],
  imports: [
    CommonModule,
    IconButtonModule,
    MatButtonModule,
    CheckboxModule
  ],
  exports: [ CompareWarningComponent ]
})
export class CompareWarningModule { }
