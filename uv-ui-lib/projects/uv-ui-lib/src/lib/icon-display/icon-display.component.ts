import { Component } from '@angular/core';
import { ICON_SET } from '../register-icon/icon-set';

@Component({
  selector: 'uvx-icon-display',
  templateUrl: './icon-display.component.html',
  styleUrls: ['./icon-display.component.scss']
})
export class IconDisplayComponent {

public icons = ICON_SET;

}
