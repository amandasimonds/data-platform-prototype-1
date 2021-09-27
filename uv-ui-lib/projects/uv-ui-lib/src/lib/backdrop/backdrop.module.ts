import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UvxIconModule } from '../uvx-icon/uvx-icon.module';
import { BackdropComponent } from './backdrop.component';

@NgModule({
  declarations: [BackdropComponent],
  imports: [
    CommonModule,
    UvxIconModule
  ],
  exports: [BackdropComponent]
})
export class BackdropModule { }
