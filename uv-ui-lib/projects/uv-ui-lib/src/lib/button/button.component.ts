import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'uvx-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
    @Input() public label = 'Button';
    @Input() public mode: 'text' | 'primary' | 'primary-text' | 'secondary' | 'tertiary' | 'round' = 'text';
    @Input() public color: 'primary' | 'gray' | 'help' = 'primary';
    @Input() public icon = '';
    @Input() public disabled = false;
}
