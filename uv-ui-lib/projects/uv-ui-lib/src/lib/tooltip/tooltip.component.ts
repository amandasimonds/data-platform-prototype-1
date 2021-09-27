import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'uvx-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent {

    @Input() public label = '';

}
