import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'uvx-navbar-sub',
  templateUrl: './navbar-sub.component.html',
  styleUrls: ['./navbar-sub.component.scss']
})
export class NavbarSubComponent {

  @Input() public isExpanded = false;
  @Input() public expandedWidth = '';
  @Input() public withPadding = false;
  @Input() public name = '';
  @Input() public rightSide = false;
  @Input() public zIndex = '';

  @Output() public readonly toggleButtonClicked = new EventEmitter<Event>();

  public onToggleButtonClicked($event: Event): void {
    this.isExpanded = false;
    this.toggleButtonClicked.emit($event);
  }

  public onNavbarClicked($event: Event): void {
    this.isExpanded = true;
    // this.toggleButtonClicked.emit($event);
  }

  public get expandIcon(): string {
    if (!this.rightSide && !this.isExpanded) {
      return 'double_right'
    } else if (!this.rightSide && this.isExpanded ) {
      return 'double_left'
    } else if (this.rightSide && !this.isExpanded) {
      return 'double_left'
    } else if (this.rightSide && this.isExpanded) {
      return 'double_right'
    } else {
      return 'close'
    }
  }

}
