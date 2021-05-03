import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IDropdown } from '../interfaces/dropdown-button.interfaces';

@Component({
    selector: 'lib-uv-ui-dropdown-button',
    templateUrl: './dropdown-button.component.html',
    styleUrls: ['./dropdown-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownButtonComponent {

    @Input() public dropdownName = '';
    @Input() public items: IDropdown[] = [];

    public trackByFn(_: number, {name}: IDropdown): string {
        return name;
    }

}
