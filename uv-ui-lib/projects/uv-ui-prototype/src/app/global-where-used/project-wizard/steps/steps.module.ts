import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonModule, TooltipModule } from 'projects/uv-ui-lib/src/public-api';
import { StepsComponent } from './steps.component';

@NgModule({
  declarations: [StepsComponent],
  imports: [
    CommonModule,
    IconButtonModule,
    TooltipModule
  ],
  exports: [StepsComponent]
})
export class StepsModule { }
