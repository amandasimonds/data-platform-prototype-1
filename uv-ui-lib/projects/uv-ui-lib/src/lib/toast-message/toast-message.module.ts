import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastMessageComponent } from './toast-message.component';
import { UvxIconModule } from '../uvx-icon/uvx-icon.module';



@NgModule({
  declarations: [ToastMessageComponent],
  imports: [
    UvxIconModule,
    CommonModule
  ],
  exports: [ToastMessageComponent]
})
export class ToastMessageModule { }
