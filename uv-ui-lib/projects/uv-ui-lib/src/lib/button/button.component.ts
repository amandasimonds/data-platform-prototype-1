import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'lib-uv-ui-button',
    templateUrl: './button.component.html',
    styleUrls: ['../scss/_styles.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
    @Input() public buttonType = '';
    @Input() public buttonText = '';
    @Input() public iconName = '';
    @Input() public dropdownName = '';
    @Input() public dropdownId = '';
    @Input() public dropdownPlaceholder = '';

    @Output() public readonly clicked = new EventEmitter<Event>();

    public onClick($event: Event): void {
        this.clicked.emit($event);
    }
}
