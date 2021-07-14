import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'uvx-image-button',
  templateUrl: './image-button.component.html',
  styleUrls: ['./image-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageButtonComponent {

    @Input() public src = '';
}
