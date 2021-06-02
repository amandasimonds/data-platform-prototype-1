import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'lib-uv-ui-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
    @Input() public buttonText = 'Button';
    @Input() public type: 'btn' | 'btn-login' | 'btn-chip' | 'btn-blue' | 'btn-round' = 'btn';

    public get cssClasses(): string[] {

        return ['btn', this.type];
    }
}
