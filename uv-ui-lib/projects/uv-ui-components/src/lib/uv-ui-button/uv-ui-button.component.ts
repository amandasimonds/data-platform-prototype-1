import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'lib-uv-ui-button',
    templateUrl: './uv-ui-button.component.html',
    styleUrls: [ './uv-ui-button.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UvUiButtonComponent {
    @Input() public primary = false;
    @Input() public backgroundColor?: string;
    @Input() public size: 'small' | 'medium' | 'large' = 'medium';
    @Input() public label = 'Button';

    @Output() public readonly clicked = new EventEmitter<Event>();

    public get classes(): string[] {
        const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';

        return [ 'storybook-button', `storybook-button--${ this.size }`, mode ];
    }

    public onClick($event: Event): void {
        this.clicked.emit($event);
    }
}
