import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'lib-uv-ui-svg-button',
  templateUrl: './svg-button.component.html',
  styleUrls: ['./svg-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgButtonComponent {
    @Input() public icon = '';
    @Input() public color: 'gray' | 'blue' | 'black' = 'black';
    @Input() public size: 'small' | 'xs' | 'xxs' = 'small';

    public get cssClasses(): string[] {

        return [this.color, this.size];
    }
}
