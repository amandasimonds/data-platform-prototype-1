import { ChangeDetectionStrategy, Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'uvx-search-panel',
    templateUrl: './search-panel.component.html',
    styleUrls: ['./search-panel-component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPanelComponent {

    @Output() public readonly searchClicked = new EventEmitter<void>();
    @Output() public readonly searchCloseClicked = new EventEmitter<Event>();
    @Input() public mode: 'global' | 'component' | 'component-border' | 'component' = 'component';
    @Input() public placeholder = '';

    public onSearch(): void {
        this.searchClicked.emit();
    }

    public onSearchCloseClicked($event: Event): void {
        this.searchCloseClicked.emit($event);
    }

    public getMode(): string {
        return this.mode === 'global' ? 'global-search-field' : '';
    }

}
