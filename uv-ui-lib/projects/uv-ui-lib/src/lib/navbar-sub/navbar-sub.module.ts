import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarSubComponent } from './navbar-sub.component';

@NgModule({
  declarations: [NavbarSubComponent],
  imports: [
    CommonModule
  ],
  exports: [NavbarSubComponent]
})
export class NavbarSubModule { }
