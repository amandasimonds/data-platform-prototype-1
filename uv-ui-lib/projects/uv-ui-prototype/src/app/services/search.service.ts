import { SearchResult } from '../search/models/search-result.model';
import { allSearchResults } from '../search/search-results/sample-search-results/allSearchResults';
import { BehaviorSubject, Observable } from 'rxjs';
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable()
export class SearchService {
    public allSearchResults: SearchResult[] = allSearchResults;
    public recentSearchResults: SearchResult[] = [];
    public searchSidebarState = new BehaviorSubject<string>('hidden');
    public compareWarningState = new BehaviorSubject<boolean>(false);

    private resultSelectedEvent = new BehaviorSubject<SearchResult[]>([]);
    readonly searchResultsList$ = this.resultSelectedEvent.asObservable();
    @Output() resultSelected = new EventEmitter<boolean>();

    public get searchState$(): Observable<string> {
        return this.searchSidebarState.asObservable();
    }

    public get compareWarning$(): Observable<boolean> {
        return this.compareWarningState.asObservable();
    }

    public setSearchSidebarState(state: string): void {
        this.searchSidebarState.next(state);
    }

    public setCompareWarningState(state: boolean): void {
        this.compareWarningState.next(state);
    }

    public getAllSearchResults(): SearchResult[] {
        return this.allSearchResults.slice();
    }

    public selectResult(result: SearchResult, i: number) {
        console.log('selectResult()');
        result.active = !result.active;
        let resultsList: SearchResult[] = [];
        const exceptIndex = i;
        if (result.active) {
            this.resultSelected.emit(true);
            resultsList = this.getAllSearchResults()
            .filter((item, index) => exceptIndex !== index)
            .map(item => {
                return {...item, disabled: item.disabled = true};
            });
        } else {
            this.resultSelected.emit(false);
            resultsList = this.getAllSearchResults()
            .map(item => {
                return {...item, disabled: item.disabled = false};
            });
        }
        this.resultSelectedEvent.next(resultsList);
    }

    public unselectAll() {
        let resultsList = this.getAllSearchResults()
            .map(item => {
                return {...item, disabled: item.disabled = false, active: item.active = false};
            });
            this.resultSelectedEvent.next(resultsList);
    }

    public addToRecentSearches(key: string, item: SearchResult) {
        item.date = new Date().toString();
        localStorage.setItem(key, JSON.stringify(item));
    }

    public getRecentSearches() {
        var values = [],
        keys = Object.keys(localStorage).filter(item => item.includes('search')),
        i = keys.length;
        while ( i-- ) {
            values.push( JSON.parse(localStorage.getItem(keys[i])) );
        }
        this.recentSearchResults = values;
        return this.recentSearchResults.slice();
    }

    public typeAheadSearch(input: string) {
        let results = this.allSearchResults.slice();
        results = results.filter(item => 
            item.title.toLowerCase().includes(input.toLowerCase())
        );
        return results;
    }
}
