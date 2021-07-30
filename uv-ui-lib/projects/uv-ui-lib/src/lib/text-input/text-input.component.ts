import { Component, Input } from '@angular/core';

@Component({
  selector: 'uvx-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent {

    @Input() placeholder = '';
    @Input() id = '';
    @Input() label = '';
}
