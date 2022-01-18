import { Component, ChangeDetectionStrategy, Input, HostListener, ElementRef } from '@angular/core';
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
    @Input() public width = '';
    @Input() public mode: 'input' | 'fancy' = 'fancy';
    @Input() public hasBorder = false;
    @Input() public label = '';
    @Input() public required = false;

    constructor(private elementRef: ElementRef) {}

    @HostListener('document:click', ['$event'])
    public clickOutside(event: any): void {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.open = false;
        }
    }

    public toggle(): void {
        this.open = !this.open;
    }

    public trackByFn(_: number, {name}: IDropdown): string {
        return name;
    }
}
