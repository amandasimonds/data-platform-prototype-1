import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchBarComponent } from './launch-bar.component';
import { IconButtonModule } from '../icon-button/icon-button.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from '../tooltip/tooltip.module';

@NgModule({
  declarations: [LaunchBarComponent],
  imports: [
    CommonModule,
    IconButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    TooltipModule
  ],
  exports: [LaunchBarComponent]
})
export class LaunchBarModule { }
