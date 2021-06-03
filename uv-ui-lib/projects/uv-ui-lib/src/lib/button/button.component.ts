import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'lib-uv-ui-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
    @Input() public label = 'Button';
    @Input() public size: 'small' | 'medium' | 'large' = 'medium';
    @Input() public type: 'btn' | 'btn-login' | 'btn-chip' | 'btn-blue' | 'btn-round' = 'btn';

    public get classes(): string[] {

        return ['button', this.type];
    }
}
