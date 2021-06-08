import { ChangeDetectionStrategy, Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'lib-uv-ui-search-panel',
    templateUrl: './search-panel.component.html',
    styleUrls: ['./search-panel-component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPanelComponent {

    @Output() readonly searchClicked = new EventEmitter<void>();
    @Input() public type: 'basic' | 'full' = 'basic';

    public onSearch() {
        this.searchClicked.emit();
    }

    public get classes(): string[] {
        return ['search-panel', this.type ];
    }

}
