import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.scss']
})
export class SettingsMenuComponent implements OnInit {

  public subNavbar2IsExpanded = true;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleSubNavbar2() {
      this.subNavbar2IsExpanded = !this.subNavbar2IsExpanded;
  }

}
