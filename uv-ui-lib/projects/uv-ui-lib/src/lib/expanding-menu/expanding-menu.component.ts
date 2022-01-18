import { Component, EventEmitter, Input, Output } from '@angular/core';
import { slideInOutAnimation } from '../animations';

@Component({
  selector: 'uvx-expanding-menu',
  templateUrl: './expanding-menu.component.html',
  styleUrls: ['./expanding-menu.component.scss'],
  animations: [slideInOutAnimation],
})
export class ExpandingMenuComponent {

  @Input() public menuExpandedState = 'navbar-peek';
  @Input() public menuIsExpanded = false;
  @Output() public readonly toggleButtonClicked = new EventEmitter<Event>();

  public get isVisible(): boolean {
    return this.menuIsExpanded
  }

  public onToggleButtonClicked($event: Event): void {
    this.toggleButtonClicked.emit($event);
  }

  public toggleExtendedNavbar() {
    this.menuIsExpanded = !this.menuIsExpanded;
  }
}
