import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'lib-uv-ui-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent {

    @Input() svgPath = '';
    @Input() label = '';
    @Input() isDisabled = false;
    @Input() isActive = false;

}
