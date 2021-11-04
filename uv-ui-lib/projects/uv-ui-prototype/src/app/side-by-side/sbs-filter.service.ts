import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISbsFilter } from '../models/sbs-filter.model';

@Injectable()
export class SbsFilterService {

    public filterAppliedEvent = new BehaviorSubject<ISbsFilter[]>([]);
    public keywordSearchedEvent = new BehaviorSubject<ISbsFilter[]>([]);

    public readonly appliedFilters$ = this.filterAppliedEvent.asObservable();
    public readonly keywordSearchResults$ = this.keywordSearchedEvent.asObservable();

    public keywordSearchResults: ISbsFilter[] = [];

    public applyFilter(filter: ISbsFilter, i: number): void {
        filter.active = !filter.active;
        const appliedFilters = [...this.filterAppliedEvent.value, filter].filter(item => item.active);
        this.filterAppliedEvent.next(appliedFilters);
    }

    public applyFilterKeyword(filter: ISbsFilter, i: number): void {
        filter.active = !filter.active;
        const appliedFilters = [...this.filterAppliedEvent.value, filter].filter(item => item.active);
        this.filterAppliedEvent.next(appliedFilters);
    }

    public searchMatchingKeywords(filters: ISbsFilter[], searchInput: string): void {
        for (let i = 0; i <= filters.length; i++) {
            for (let j = 0; j < filters[i].keywords.length; j++) {
                const keyword = filters[i].keywords[j].name;
                if(keyword.toLowerCase().includes(searchInput.toLowerCase())) {
                    this.keywordSearchResults.push({
                        name: filters[i].name,
                        active: false,
                        keywords: [
                            {
                                name: keyword,
                                active: false
                            }
                        ]
                    });
                } else {
                    this.keywordSearchResults.splice(j, 1);
                }
            }
        }
    }

    public getAppliedFilters(): ISbsFilter[] {
        return this.filterAppliedEvent.value.slice();
    }
}
