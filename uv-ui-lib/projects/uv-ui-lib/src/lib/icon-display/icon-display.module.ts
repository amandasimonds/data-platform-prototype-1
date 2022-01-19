import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDisplayComponent } from './icon-display.component';
import { IconButtonModule } from '../icon-button/icon-button.module';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [IconDisplayComponent],
  imports: [
    ButtonModule,
    CommonModule,
    IconButtonModule
  ],
  exports: [IconDisplayComponent]
})
export class IconDisplayModule { }
