import { Component, Input } from '@angular/core';

@Component({
  selector: 'uvx-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {

    @Input() public label = '';

}
