import { Component, Input } from '@angular/core';

@Component({
  selector: 'uvx-navbar-sub',
  templateUrl: './navbar-sub.component.html',
  styleUrls: ['./navbar-sub.component.scss']
})
export class NavbarSubComponent {

  @Input() public isExpanded = false;

}
