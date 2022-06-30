import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UvxToolbarComponent } from './toolbar.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [UvxToolbarComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [UvxToolbarComponent]
})
export class UvxToolbarModule { }
