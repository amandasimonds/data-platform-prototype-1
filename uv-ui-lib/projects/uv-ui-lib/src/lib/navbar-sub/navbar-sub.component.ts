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

  @Output() public readonly toggleButtonClicked = new EventEmitter<Event>();

  public onToggleButtonClicked($event: Event): void {
    this.isExpanded = false;
    console.log('toggle clicked', this.isExpanded);
    this.toggleButtonClicked.emit($event);
  }

  public onNavbarClicked($event: Event): void {
    console.log('on navbar clicked', this.isExpanded);
    this.isExpanded = true;
    // this.toggleButtonClicked.emit($event);
  }

  public get expandIcon(): string {
    if (!this.rightSide && !this.isExpanded) {
      return 'chevron_right'
    } else if (!this.rightSide && this.isExpanded ) {
      return 'chevron_left'
    } else if (this.rightSide && !this.isExpanded) {
      return 'chevron_left'
    } else if (this.rightSide && this.isExpanded) {
      return 'chevron_right'
    } else {
      return 'close'
    }
  }

}
