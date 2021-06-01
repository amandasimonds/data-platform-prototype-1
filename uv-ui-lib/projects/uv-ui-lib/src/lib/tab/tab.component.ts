import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'lib-uv-ui-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent {

    @Input() public svgPath = '';
    @Input() public label = '';
    @Input() public isDisabled = false;
    @Input() public isActive = false;
    @Input() public isReorderMode = false;

}
