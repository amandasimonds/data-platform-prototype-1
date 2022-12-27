import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsMenuComponent } from './settings-menu.component';
import { ExpandingMenuModule } from 'projects/uv-ui-lib/src/public-api';
import { PositionElementDirective } from '../../shared/position-element.directive';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SettingsMenuComponent, PositionElementDirective],
  imports: [
    CommonModule,
    ExpandingMenuModule,
    MatIconModule
  ],
  exports: [SettingsMenuComponent]
})
export class SettingsMenuModule { }
