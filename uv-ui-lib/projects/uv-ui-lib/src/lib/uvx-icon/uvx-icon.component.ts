import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'uvx-icon',
  templateUrl: './uvx-icon.component.html',
  styleUrls: ['./uvx-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UvxIconComponent {

    @Input() icon = '';
    @Input() color: 'black' | 'primary' | 'gray' = 'black';
    @Input() size: 'xs' | 'sm' | 'md' = 'sm';

}
