import { ChangeDetectionStrategy, Component, Output, EventEmitter, Input, ElementRef, HostListener } from '@angular/core';

@Component({
    selector: 'uvx-search-panel',
    templateUrl: './search-panel.component.html',
    styleUrls: ['./search-panel-component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPanelComponent {

    @Output() public readonly searchClicked = new EventEmitter<void>();
    @Output() public readonly searchClearClicked = new EventEmitter<Event>();
    @Input() public rounded = false;
    @Input() public mode: 'global' | 'component' | 'component-border' | 'component' = 'component';
    @Input() public placeholder = '';
    @Input() public showSuggestions = false;
    @Input() public width = '';
    @Input() public suggestionsDropdownHeight = '';

    constructor(private elementRef: ElementRef) {}

    @HostListener('document:click', ['$event'])
    public clickOutside(event: any): void {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.showSuggestions = false;
        }
    }

    public onSearch(): void {
        this.searchClicked.emit();
    }

    public onSearchClearClicked($event: Event): void {
        this.searchClearClicked.emit($event);
    }

    public getMode(): string {
        return this.mode === 'global' ? 'global-search-field' : '';
    }
}
