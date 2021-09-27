import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

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
}
