import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsComponent } from './steps.component';
import { IconButtonModule } from 'projects/uv-ui-lib/src/public-api';

@NgModule({
  declarations: [StepsComponent],
  imports: [
    CommonModule,
    IconButtonModule
  ],
  exports: [StepsComponent]
})
export class StepsModule { }
