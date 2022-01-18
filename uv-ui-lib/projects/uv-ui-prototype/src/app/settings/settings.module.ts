import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { ConnectorTableComponent } from './connector-table/connector-table.component';
import { ButtonDropdownModule } from 'epd-pattern-library';
import { ActionBarModule, ButtonModule, DropdownModule, ExpandingMenuModule, TextInputModule, UvxIconModule } from 'projects/uv-ui-lib/src/public-api';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsMenuModule } from './settings-menu/settings-menu.module';
import { ConnectorCreatorComponent } from './connector-creator/connector-creator.component';
import { PositionElementDirective } from '../shared/position-element.directive';
import { ConnectorCreatorService } from '../services/connector-creator.service';

@NgModule({
  declarations: [
    SettingsComponent, 
    ConnectorTableComponent,
    ConnectorCreatorComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ButtonDropdownModule,
    DropdownModule,
    SettingsRoutingModule,
    UvxIconModule,
    TextInputModule,
    ActionBarModule,
    SettingsMenuModule,
    ExpandingMenuModule
  ],
  // providers: [
  //   ConnectorCreatorService
  // ],
  exports: [SettingsComponent]
})
export class SettingsModule { }
