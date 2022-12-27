import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { RegisterIconModule, ICON_SET, ButtonDropdownModule, DynamicBarModule, IconButtonModule } from 'epd-pattern-library';
import { DropdownModule, ExpandingMenuModule, NavbarSubModule, TextInputModule, TooltipModule } from 'projects/uv-ui-lib/src/public-api';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsMenuModule } from './settings-menu/settings-menu.module';
import { ConnectorCreatorComponent } from './connector-creator/connector-creator.component';
import { PositionElementDirective } from '../shared/position-element.directive';
import { ConnectorCreatorService } from '../services/connector-creator.service';
import { SettingsSubNavbarComponent } from './settings-sub-navbar/settings-sub-navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ConnectorTableModule } from './connector-table/connector-table.module';

@NgModule({
  declarations: [
    SettingsComponent,
    ConnectorCreatorComponent,
    SettingsSubNavbarComponent
  ],
  imports: [
    RegisterIconModule.forRoot(ICON_SET),
    ButtonDropdownModule,
    CommonModule,
    ConnectorTableModule,
    MatButtonModule,
    DropdownModule,
    DynamicBarModule,
    SettingsRoutingModule,
    IconButtonModule,
    MatIconModule,
    TextInputModule,
    TooltipModule,
    SettingsMenuModule,
    ExpandingMenuModule,
    NavbarSubModule
  ],
  providers: [
    ConnectorCreatorService
  ],
  exports: [SettingsComponent]
})
export class SettingsModule { }
