import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { ConnectorTableComponent } from './connector-table/connector-table.component';
import { ButtonDropdownModule } from 'epd-pattern-library';
import { ActionBarModule, ButtonModule, DropdownModule, ExpandingMenuModule, IconButtonModule, NavbarSubModule, TextInputModule, TooltipModule, UvxIconModule } from 'projects/uv-ui-lib/src/public-api';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsMenuModule } from './settings-menu/settings-menu.module';
import { ConnectorCreatorComponent } from './connector-creator/connector-creator.component';
import { PositionElementDirective } from '../shared/position-element.directive';
import { ConnectorCreatorService } from '../services/connector-creator.service';
import { SettingsSubNavbarComponent } from './settings-sub-navbar/settings-sub-navbar.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    SettingsComponent, 
    ConnectorTableComponent,
    ConnectorCreatorComponent,
    SettingsSubNavbarComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ButtonDropdownModule,
    DropdownModule,
    IconButtonModule,
    SettingsRoutingModule,
    UvxIconModule,
    MatIconModule,
    TextInputModule,
    ActionBarModule,
    TooltipModule,
    SettingsMenuModule,
    ExpandingMenuModule,
    NavbarSubModule
  ],
  // providers: [
  //   ConnectorCreatorService
  // ],
  exports: [SettingsComponent, SettingsSubNavbarComponent]
})
export class SettingsModule { }
