import { ChangeDetectionStrategy, Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
    selector: 'lib-uv-ui-search-panel',
    templateUrl: './search-panel.component.html',
    styleUrls: ['./search-panel-component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPanelComponent implements OnInit {

    @Output() readonly searchClicked = new EventEmitter<void>();
    @Input() public type: 'basic' | 'full' = 'basic';
    public cssClasses = ['search-panel'];

    public onSearch() {
        this.searchClicked.emit();
    }

    public ngOnInit(): void {
        this.getCssClasses();
    }

    public getCssClasses() {
        this.cssClasses.push(this.type);
    }

}
