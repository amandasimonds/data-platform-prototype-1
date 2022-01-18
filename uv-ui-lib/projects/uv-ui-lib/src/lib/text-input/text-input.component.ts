import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'uvx-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextInputComponent {

    @Input() public placeholder = '';
    @Input() public id = '';
    @Input() public label = '';
    @Input() public required = false;
    @Input() public value = '';

    @Output() keyup = new EventEmitter<Event>();

    keyupEvent(event: Event) {
      this.keyup.emit(event);
    }
}
