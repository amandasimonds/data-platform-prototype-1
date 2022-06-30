import { Component, Input } from '@angular/core';
import { IOptionsMenuItem } from './options-menu-item.interface';

@Component({
  selector: 'uvx-options-menu',
  templateUrl: './options-menu.component.html',
  styleUrls: ['./options-menu.component.scss']
})
export class UvxOptionsMenuComponent {

  @Input() public optionMenuItems: IOptionsMenuItem[];
  @Input() public isVisible = false;
  @Input() public zIndex = '';
  @Input() public rightPos = '';
  @Input() public topPos = '';

}
