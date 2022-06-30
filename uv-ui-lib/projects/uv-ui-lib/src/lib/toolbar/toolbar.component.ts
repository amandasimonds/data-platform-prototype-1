import { Component, Input } from '@angular/core';
import { IToolbarItem } from './toolbar-item.interface';

@Component({
  selector: 'uvx-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class UvxToolbarComponent {

  @Input() public toolbarItems: IToolbarItem[];
  @Input() public isVisible = false;
  @Input() public color: 'primary' | '' = '';
  @Input() public zIndex = '';
  @Input() public rightPos = '';
  @Input() public topPos = '';

}
