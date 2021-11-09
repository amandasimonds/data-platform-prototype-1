import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'uvx-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent {

  @Input() public label = '';
  @Input() public mode: 'primary' | 'secondary' = 'primary';
  @Output() public clearClickedEvent = new EventEmitter<Event>();

  clearClicked(e: Event) {
      this.clearClickedEvent.emit(e);
  }
}
