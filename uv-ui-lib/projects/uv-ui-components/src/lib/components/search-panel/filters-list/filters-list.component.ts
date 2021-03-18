import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'lib-filters-list',
    templateUrl: './filters-list.component.html',
    styleUrls: ['../../../scss/_styles.scss'],
})
export class FiltersListComponent {
    @Input() filters : Filters
    @Input() public filterCSSClasses: string[];

    @Output() public readonly removeClick = new EventEmitter<{filterName: string; concept: string}>();

    public onRemoveClick(filterName: string, concept: string): void {
        this.removeClick.emit({filterName, concept});
    }

}

interface Filters {
  filter: ""
}
