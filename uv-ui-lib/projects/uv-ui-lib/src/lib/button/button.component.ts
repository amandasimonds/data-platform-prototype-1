import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'uv-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
    @Input() public label = 'Button';
    @Input() public mode: 'basic' | 'primary' | 'round' = 'basic';
    @Input() public icon = '';
    @Input() public disabled = false;
}
