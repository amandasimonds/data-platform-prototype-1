import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISbsFilter } from '../side-by-side/models/sbs-filter.model';
import { ISbsKeyword } from '../side-by-side/models/sbs-keyword.model';

@Injectable()
export class SbsFilterService {

    private filterAppliedEvent = new BehaviorSubject<ISbsFilter[]>([]);
    private filterKeywordAppliedEvent = new BehaviorSubject<ISbsKeyword[]>([]);

    readonly appliedFilters$ = this.filterAppliedEvent.asObservable();
    readonly appliedFilterKeywords$ = this.filterKeywordAppliedEvent.asObservable();

    public applyFilter(filter: ISbsFilter, i: number){
        filter.active = !filter.active;
        let appliedFilters = [...this.filterAppliedEvent.value, filter].filter(item => item.active === true);
        this.filterAppliedEvent.next(appliedFilters);
    }

    public applyFilterKeyword(filter: ISbsKeyword, i: number){
        filter.active = !filter.active;
        let appliedFilterKeywords = [...this.filterKeywordAppliedEvent.value, filter].filter(item => item.active === true);
        this.filterKeywordAppliedEvent.next(appliedFilterKeywords);
    }

    public getAppliedFilters(): ISbsFilter[]{
        return this.filterAppliedEvent.value.slice();
    }

    public applyCustomKeyword(text: string) {
        let appliedFilterKeywords = [
            ...this.filterKeywordAppliedEvent.value,  
            {
                name: text,
                active: true,
                category: 'custom'
            }].filter(item => item.active === true);
        this.filterKeywordAppliedEvent.next(appliedFilterKeywords);
    }

    // public sortFilterCategories(){
    //     let author = this.getAppliedFilters().filter((item: ISbsFilter) => item.category === 'author')
    // }
}
