import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandingMenuComponent } from './expanding-menu.component';
import { IconButtonModule } from '../icon-button/icon-button.module';

@NgModule({
  declarations: [ExpandingMenuComponent],
  imports: [
    CommonModule,
    IconButtonModule
  ],
  exports: [ExpandingMenuComponent]
})
export class ExpandingMenuModule { }
