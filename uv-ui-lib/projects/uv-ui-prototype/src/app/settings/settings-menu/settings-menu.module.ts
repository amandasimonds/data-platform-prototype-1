import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsMenuComponent } from './settings-menu.component';
import { NavbarExtendedModule } from 'projects/uv-ui-lib/src/public-api';

@NgModule({
  declarations: [SettingsMenuComponent],
  imports: [
    CommonModule,
    NavbarExtendedModule
  ],
  exports: [SettingsMenuComponent]
})
export class SettingsMenuModule { }
