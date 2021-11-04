import { ChangeDetectorRef, ChangeDetectionStrategy, Component, Input, OnInit, OnChanges } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { NgOnDestroyService } from '../../services/on-destroy.service';
import { SbsFilterService } from '../sbs-filter.service';
import { ISbsFilter } from '../../models/sbs-filter.model';
import { sbsFilters } from '../sample-data/sbs-filters';

@Component({
  selector: 'sbs-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss', '../side-by-side.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterModalComponent implements OnInit, OnChanges {

    @Input() public searchText = '';
    @Input() public searchFilters: ISbsFilter[] = [];

    public appliedFilterList: ISbsFilter[] = [];
    public filterCategoriesList: ISbsFilter[] = sbsFilters;
    public customKeywordMode = false;
    public keywordSearchResults: ISbsFilter[] = [];

    constructor(
        private filterService: SbsFilterService,
        private ref: ChangeDetectorRef,
        private destroy$: NgOnDestroyService
    ) { }

    public onFilterApplied(item: ISbsFilter, i: number): void {
        this.filterService.applyFilter(item, i);
    }

    public onFilterKeywordApplied(item: ISbsFilter, i: number): void {
        this.filterService.applyFilterKeyword(item, i);
    }

    public ngOnInit(): void {
        this.filterService.appliedFilters$
        .pipe(takeUntil(this.destroy$))
        .subscribe(filters => {
            this.appliedFilterList = filters;
            this.ref.detectChanges();
            console.log(filters);
        });
    }

    public ngOnChanges(): void {
        if (this.searchText !== ''){
            this.customKeywordMode = true;
        } else {
            this.customKeywordMode = false;
        }
    }

}
