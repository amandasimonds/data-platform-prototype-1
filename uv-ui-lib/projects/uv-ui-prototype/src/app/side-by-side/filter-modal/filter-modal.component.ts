import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { NgOnDestroyService } from '../../services/on-destroy.service';
import { SbsFilterService } from '../../services/sbs-filter.service';
import { ISbsFilter } from '../../models/sbs-filter.model';
import { sbsFilters } from '../sample-data/sbs-filters';

@Component({
  selector: 'sbs-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss', '../side-by-side.component.scss']
})
export class FilterModalComponent implements OnInit {

    @Input() searchText = '';
    @Input() searchFilters: ISbsFilter[] = [];

    public appliedFilterList: ISbsFilter[] = [];
    public filterCategoriesList: ISbsFilter[] = sbsFilters;
    public customKeywordMode = false;
    // searchCategoriesList = [];
    keywordSearchResults: ISbsFilter[] = [];

    constructor(
        private filterService: SbsFilterService,
        private ref: ChangeDetectorRef,
        private destroy$: NgOnDestroyService
    ) { }

    onFilterApplied(item: ISbsFilter, i: number) {
        this.filterService.applyFilter(item, i);
    }

    onFilterKeywordApplied (item: ISbsFilter, i: number) {
        this.filterService.applyFilterKeyword(item, i);
    }

    // applyCustomKeyword(text: string) {
    //     this.filterService.applyCustomKeyword(text);
    // }

    ngOnInit(): void {
        this.filterService.appliedFilters$.subscribe(filters => {
            this.appliedFilterList = filters;
            this.ref.detectChanges();
            console.log(filters);
            takeUntil(this.destroy$);
        })
    }

    ngOnChanges(): void {
        if (this.searchText != ''){
            this.customKeywordMode = true;
            // this.keywordSearchResults = this.filterService.searchMatchingKeywords(this.filterCategoriesList, this.searchText);
        } else {
            this.customKeywordMode = false;
        }
    }

}
