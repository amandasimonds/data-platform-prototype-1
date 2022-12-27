import { Component, Input } from '@angular/core';

@Component({
  selector: 'uvx-options-menu',
  templateUrl: './options-menu.component.html',
  styleUrls: ['./options-menu.component.scss']
})
export class UvxOptionsMenuComponent {

  @Input() public isVisible = false;
  @Input() public zIndex = '';

}
