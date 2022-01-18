import { Component, ElementRef, ViewChild } from '@angular/core';
import { connectorCreatorSteps } from '../connector-creator/connector-creator-steps';

@Component({
  selector: 'app-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.scss']
})
export class SettingsMenuComponent {

  public settingsMenuIsExpanded = true;
  public connectorCreatorSteps = connectorCreatorSteps;

  @ViewChild('section') div:ElementRef;




  public toggleSettingsMenu() {
      this.settingsMenuIsExpanded = !this.settingsMenuIsExpanded;
  }
}
