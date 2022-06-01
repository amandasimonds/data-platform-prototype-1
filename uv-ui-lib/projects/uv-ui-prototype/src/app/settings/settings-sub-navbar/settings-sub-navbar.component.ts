import { Component, EventEmitter, Input, Output } from '@angular/core';
import { settingsNavlinks } from '../settingsNavLinks';

@Component({
  selector: 'app-settings-sub-navbar',
  templateUrl: './settings-sub-navbar.component.html',
  styleUrls: ['./settings-sub-navbar.component.scss']
})
export class SettingsSubNavbarComponent {

  @Input() subNavbarIsExpanded = false;
  settingsNavlinks = settingsNavlinks;

  public toggleSubNavbar() {
    this.subNavbarIsExpanded = !this.subNavbarIsExpanded;
  }

}
