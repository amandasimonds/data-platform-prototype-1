import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastMessageComponent } from './toast-message.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ToastMessageComponent],
  imports: [
    MatIconModule,
    CommonModule
  ],
  exports: [ToastMessageComponent]
})
export class ToastMessageModule { }
