import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipComponent } from './chip.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ChipComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [ChipComponent]
})
export class ChipModule { }
