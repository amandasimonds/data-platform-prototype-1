import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IDropdown } from '../interfaces/dropdown.interfaces';

@Component({
    selector: 'uvx-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent {

    @Input() public dropdownName = '';
    @Input() public items: IDropdown[] = [];

    public trackByFn(_: number, {name}: IDropdown): string {
        return name;
    }

}
