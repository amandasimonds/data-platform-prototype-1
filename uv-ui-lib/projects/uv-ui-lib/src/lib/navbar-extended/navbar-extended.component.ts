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
  @Output() public readonly toggleButtonClicked = new EventEmitter<Event>();

  public get isVisible(): boolean {
    return this.navbarExtendedState === 'visible'
  }

  public onToggleButtonClicked($event: Event): void {
    this.toggleButtonClicked.emit($event);
  }

  public toggleExtendedNavbar() {
    this.navbarExtendedState = 'navbar-peek';
  }
}
