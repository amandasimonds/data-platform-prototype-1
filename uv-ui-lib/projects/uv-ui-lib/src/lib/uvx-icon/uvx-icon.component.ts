import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'uvx-icon',
  templateUrl: './uvx-icon.component.html',
  styleUrls: ['./uvx-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UvxIconComponent {

    @Input() public icon = '';
    @Input() public color: 'black' | 'primary' | 'success' | 'gray' | 'white' = 'black';
    @Input() public size: 'xs' | 'sm' | 'md' | 'xl' | 'bg' | 'checkmark' = 'sm';

}
