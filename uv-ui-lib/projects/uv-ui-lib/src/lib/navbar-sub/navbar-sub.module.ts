import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarSubComponent } from './navbar-sub.component';
import { IconButtonModule } from '../icon-button/icon-button.module';
import { TooltipModule } from '../tooltip/tooltip.module';

@NgModule({
  declarations: [NavbarSubComponent],
  imports: [
    CommonModule,
    IconButtonModule,
    TooltipModule
  ],
  exports: [NavbarSubComponent]
})
export class NavbarSubModule { }
