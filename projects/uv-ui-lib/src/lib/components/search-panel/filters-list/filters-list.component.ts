import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'lib-filters-list',
    templateUrl: './filters-list.component.html',
    styleUrls: ['../../../scss/_styles.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersListComponent {
  @Input() filters : Filters
    @Input() public filterList: IFilterMap[];
    @Input() public filterCSSClasses: string[];

    @Output() public readonly removeClick = new EventEmitter<{filterName: string; concept: string}>();

    public onRemoveClick(filterName: string, concept: string): void {
        this.removeClick.emit({filterName, concept});
    }

    public trackByFiltersFn(_: number, filter: IFilterMap): string {
        const filterKey = Object.keys(filter)[0];
        return filter[filterKey].name;
    }

    public trackByFn(_: number, filterName: string): string {
        return filterName;
    }

}

interface Filters {
  filter: ""
}

interface IFilterMap {
  filter: ""
}
