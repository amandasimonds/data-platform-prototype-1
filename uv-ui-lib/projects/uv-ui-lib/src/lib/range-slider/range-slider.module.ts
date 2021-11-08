import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeSliderComponent } from './range-slider.component';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from '../tooltip/tooltip.module';

@NgModule({
  declarations: [RangeSliderComponent],
  imports: [
    CommonModule,
    FormsModule,
    TooltipModule
  ],
  exports: [RangeSliderComponent]
})
export class RangeSliderModule { }
