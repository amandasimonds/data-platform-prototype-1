import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeSliderComponent } from './range-slider.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RangeSliderComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [RangeSliderComponent]
})
export class RangeSliderModule { }
