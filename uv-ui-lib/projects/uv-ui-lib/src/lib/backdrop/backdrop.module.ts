import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackdropComponent } from './backdrop.component';
import { UvxIconModule } from '../uvx-icon/uvx-icon.module';

@NgModule({
  declarations: [BackdropComponent],
  imports: [
    CommonModule,
    UvxIconModule
  ],
  exports: [BackdropComponent]
})
export class BackdropModule { }
