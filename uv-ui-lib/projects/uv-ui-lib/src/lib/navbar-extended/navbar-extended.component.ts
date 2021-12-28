import { Component, EventEmitter, Input, Output } from '@angular/core';
import { slideInOutAnimation } from '../animations';

@Component({
  selector: 'uvx-navbar-extended',
  templateUrl: './navbar-extended.component.html',
  styleUrls: ['./navbar-extended.component.scss'],
  animations: [slideInOutAnimation],
})
export class NavbarExtendedComponent {

  @Input() public navbarExtendedState = 'navbar-peek';
  @Input() public subNavbarIsExpanded = false;
  @Output() public readonly toggleButtonClicked = new EventEmitter<Event>();

  public get isVisible(): boolean {
    return this.subNavbarIsExpanded
  }

  public onToggleButtonClicked($event: Event): void {
    this.toggleButtonClicked.emit($event);
  }

  public toggleExtendedNavbar() {
    this.subNavbarIsExpanded = !this.subNavbarIsExpanded;
  }
}
