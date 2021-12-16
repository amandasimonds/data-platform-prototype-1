import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarExtendedComponent } from './navbar-extended.component';
import { IconButtonModule } from '../icon-button/icon-button.module';

@NgModule({
  declarations: [NavbarExtendedComponent],
  imports: [
    CommonModule,
    IconButtonModule
  ],
  exports: [NavbarExtendedComponent]
})
export class NavbarExtendedModule { }
