import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsMenuComponent } from './settings-menu.component';
import { ExpandingMenuModule, UvxIconModule } from 'projects/uv-ui-lib/src/public-api';
import { PositionElementDirective } from '../../shared/position-element.directive';

@NgModule({
  declarations: [SettingsMenuComponent, PositionElementDirective],
  imports: [
    CommonModule,
    ExpandingMenuModule,
    UvxIconModule
  ],
  exports: [SettingsMenuComponent]
})
export class SettingsMenuModule { }
