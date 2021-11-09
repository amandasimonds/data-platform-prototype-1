import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipComponent } from './chip.component';
import { IconButtonModule } from '../icon-button/icon-button.module';

@NgModule({
  declarations: [ChipComponent],
  imports: [
    CommonModule,
    IconButtonModule
  ],
  exports: [ChipComponent]
})
export class ChipModule { }
