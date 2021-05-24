import { ChangeDetectionStrategy, Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'lib-uv-ui-search-panel',
    templateUrl: './search-panel.component.html',
    styleUrls: ['./search-panel-component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPanelComponent {

    @Output() searchClicked = new EventEmitter<void>();

    onSearch() {
        this.searchClicked.emit();
    }

}
