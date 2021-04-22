import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'lib-uv-ui-dropdown-button',
    templateUrl: './dropdown-button.component.html',
    styleUrls: ['./dropdown-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownButtonComponent {

    @Input() public dropdownName = '';
    @Input() public dropdownId = '';
    @Input() public dropdownPlaceholder = '';

}
