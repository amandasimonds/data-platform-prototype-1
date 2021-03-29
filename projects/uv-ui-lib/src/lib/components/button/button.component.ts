import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['../../scss/_styles.scss']
})
export class ButtonComponent{

  @Output() public readonly clicked = new EventEmitter<Event>();

  public onClick($event: Event): void {
    this.clicked.emit($event);
}

  @Input() buttonType: string;
  @Input() buttonText: string;
  @Input() iconName: string;
  @Input() dropdownName: string;
  @Input() dropdownId: string;
  @Input() dropdownPlaceholder: string;
}
