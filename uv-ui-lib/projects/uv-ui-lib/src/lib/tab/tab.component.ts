import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'uvx-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent {

    @Input() public icon = '';
    @Input() public label = '';
    @Input() public mode: 'horizontal' | 'vertical' = 'horizontal';
    @Input() public isDisabled = false;
    @Input() public isActive = false;
    @Input() public isReorderMode = false;

}
