import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISbsFilter } from '../models/sbs-filter.model';

@Injectable()
export class SbsFilterService {

    private filterAppliedEvent = new BehaviorSubject<ISbsFilter[]>([]);
    private keywordSearchedEvent = new BehaviorSubject<ISbsFilter[]>([]);

    readonly appliedFilters$ = this.filterAppliedEvent.asObservable();
    // readonly appliedFilterKeywords$ = this.filterKeywordAppliedEvent.asObservable();
    readonly keywordSearchResults$ = this.keywordSearchedEvent.asObservable();

    keywordSearchResults: ISbsFilter[] = [];

    public applyFilter(filter: ISbsFilter, i: number){
        filter.active = !filter.active;
        let appliedFilters = [...this.filterAppliedEvent.value, filter].filter(item => item.active === true);
        this.filterAppliedEvent.next(appliedFilters);
    }

    public applyFilterKeyword(filter: ISbsFilter, i: number){
        filter.active = !filter.active;
        let appliedFilters = [...this.filterAppliedEvent.value, filter].filter(item => item.active === true);
        this.filterAppliedEvent.next(appliedFilters);
    }

    public searchMatchingKeywords(filters: ISbsFilter[], searchInput: string) {
        for (let i = 0; i <= filters.length; i++){
            for (let j = 0; j < filters[i].keywords.length; j++){
                let keyword = filters[i].keywords[j].name;
                if(keyword.toLowerCase().includes(searchInput.toLowerCase())) {
                    this.keywordSearchResults.push({
                        name: filters[i].name,
                        active: false,
                        keywords: [
                            {
                                name: keyword,
                                active: false,
                            }
                        ]
                    })
                } else {
                    this.keywordSearchResults.splice(j, 1)
                }
            }
            console.log(this.keywordSearchResults);
            // return this.keywordSearchResults;
        }
    }

    public getAppliedFilters(): ISbsFilter[]{
        return this.filterAppliedEvent.value.slice();
    }

    // public applyCustomKeyword(text: string) {
    //     let appliedFilters = [
    //         ...this.filterAppliedEvent.value,  
    //         {
    //             name: text,
    //             active: true,

    //         }].filter(item => item.active === true);
    //     this.filterAppliedEvent.next(appliedFilters);
    // }

    // public sortFilterCategories(){
    //     let author = this.getAppliedFilters().filter((item: ISbsFilter) => item.category === 'author')
    // }

    
}
