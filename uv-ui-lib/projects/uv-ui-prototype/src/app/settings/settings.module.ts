import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { ConnectorTableComponent } from './connector-table/connector-table.component';
import { ButtonDropdownModule } from 'epd-pattern-library';
import { ActionBarModule, ButtonModule, NavbarExtendedModule, UvxIconModule } from 'projects/uv-ui-lib/src/public-api';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsMenuModule } from './settings-menu/settings-menu.module';
import { ConnectorCreatorComponent } from './connector-creator/connector-creator.component';

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
    SettingsRoutingModule,
    UvxIconModule,
    ActionBarModule,
    SettingsMenuModule,
    NavbarExtendedModule
  ],
  exports: [SettingsComponent]
})
export class SettingsModule { }
