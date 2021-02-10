import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
// import { IFilterInfoMap } from '../../../models/interfaces/widgets.interfaces';

@Component({
    selector: 'lib-filters-list',
    templateUrl: './filters-list.component.html',
    styleUrls: ['../../../scss/_styles.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersListComponent {
    @Input() public filterList: [];
    @Input() public filterCSSClasses: string[];

    @Output() public readonly removeClick = new EventEmitter<{filterName: string; concept: string}>();

    public onRemoveClick(filterName: string, concept: string): void {
        this.removeClick.emit({filterName, concept});
    }

    // public trackByFiltersFn(_: number, filter: IFilterInfoMap): string {
    //     const filterKey = Object.keys(filter)[0];

    //     return filter[filterKey].name;
    // }

    public trackByFn(_: number, filterName: string): string {
        return filterName;
    }
}
