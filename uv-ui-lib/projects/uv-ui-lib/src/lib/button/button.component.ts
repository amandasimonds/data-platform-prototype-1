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
    @Input() public type: 'basic' | 'flat' | 'round' = 'basic';
    @Input() public color: 'primary' | 'none' = 'none';
    @Input() public svgPath = '';
    @Input() public state: 'active' | 'disabled' | 'normal' = 'normal';

    public get classes(): string[] {
        return ['button', this.type, this.type+'--'+this.color, this.type+'--'+this.state];
    }

    public get svg(): string {
        return this.svgPath;
    }
}
