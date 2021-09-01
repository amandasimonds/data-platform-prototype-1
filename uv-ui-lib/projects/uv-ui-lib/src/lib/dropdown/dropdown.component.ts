import { Component, ChangeDetectionStrategy, Input, HostListener, ElementRef, ViewChild } from '@angular/core';
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

    constructor(private elementRef: ElementRef) {}

    @HostListener('document:click', ['$event'])
    clickOutside(event: any) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.open = false;
        }
    }

    @HostListener('document:mouseout', ['$event'])
    mouseOutside(event: any) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.open = false;
        }
    }

    public toggle() {
       this.open = !this.open
    }

    public trackByFn(_: number, {name}: IDropdown): string {
        return name;
    }

}
