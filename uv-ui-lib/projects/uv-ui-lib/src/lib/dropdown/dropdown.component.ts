import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IDropdown } from '../interfaces/dropdown.interfaces';

@Component({
    selector: 'uvx-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent {

    public open = false;
    @Input() public selectId = '';
    @Input() public dropdownName = '';
    @Input() public items: IDropdown[] = [];

    public toggle() {
       this.open = !this.open
    }

    public trackByFn(_: number, {name}: IDropdown): string {
        return name;
    }

}
