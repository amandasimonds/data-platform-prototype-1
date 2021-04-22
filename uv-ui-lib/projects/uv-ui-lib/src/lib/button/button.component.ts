import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'lib-uv-ui-button',
    templateUrl: './button.component.html',
    styleUrls: ['../scss/_styles.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
    @Input() public buttonText = '';

}
