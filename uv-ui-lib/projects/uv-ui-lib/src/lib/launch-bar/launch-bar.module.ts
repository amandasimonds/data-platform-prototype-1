import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchBarComponent } from './launch-bar.component';
import { IconButtonModule } from '../icon-button/icon-button.module';
import { TooltipModule } from '../tooltip/tooltip.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LaunchBarComponent],
  imports: [
    CommonModule,
    IconButtonModule,
    TooltipModule,
    RouterModule
  ],
  exports: [LaunchBarComponent]
})
export class LaunchBarModule { }
