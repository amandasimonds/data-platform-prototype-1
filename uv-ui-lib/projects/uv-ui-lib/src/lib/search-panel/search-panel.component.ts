import { ChangeDetectionStrategy, Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'lib-uv-ui-search-panel',
    templateUrl: './search-panel.component.html',
    styleUrls: ['./search-panel-component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPanelComponent {

    @Output() searchClicked = new EventEmitter<void>();
    @Input() public type: 'basic' | 'full' = 'basic';
    public cssClasses = ['search-panel']

    public onSearch() {
        this.searchClicked.emit();
    }

    ngOnInit(): void {
        this.getCssClasses();
    }

    public getCssClasses() {
        this.cssClasses.push(this.type)
    }

}
