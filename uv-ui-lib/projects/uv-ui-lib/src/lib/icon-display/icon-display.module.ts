import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDisplayComponent } from './icon-display.component';
import { IconButtonModule } from '../icon-button/icon-button.module';

@NgModule({
  declarations: [IconDisplayComponent],
  imports: [
    CommonModule,
    IconButtonModule
  ],
  exports: [IconDisplayComponent]
})
export class IconDisplayModule { }
