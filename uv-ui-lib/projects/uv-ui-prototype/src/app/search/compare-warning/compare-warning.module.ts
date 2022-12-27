import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonModule } from 'projects/uv-ui-lib/src/public-api';
import { CompareWarningComponent } from './compare-warning.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [CompareWarningComponent],
  imports: [
    CommonModule,
    IconButtonModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  exports: [CompareWarningComponent]
})
export class CompareWarningModule { }
