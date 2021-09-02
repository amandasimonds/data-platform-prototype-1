import { SearchResult } from '../search/models/search-result.model';
import { allSearchResults } from '../search/search-results/sample-search-results/allSearchResults';
import * as configurationsData from '../../sample-data/configurations.json';
import * as partsData from '../../sample-data/parts.json';
import { BehaviorSubject, Observable } from 'rxjs';

export class SearchService {
    public allSearchResults: SearchResult[] = allSearchResults;
    public recentSearchResults: SearchResult[] = [];
    public searchSidebarState = new BehaviorSubject<string>('hidden');
    public compareWarningState = new BehaviorSubject<boolean>(false);

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

    public addToRecentSearches(key: string, item: SearchResult) {
        item.date = new Date().toString();
        console.log(item);
        localStorage.setItem(key, JSON.stringify(item));
    }

    public getRecentSearches() {
        var values = [],
        keys = Object.keys(localStorage).filter(item => item.includes('search')),
        i = keys.length;

        while ( i-- ) {
            values.push( JSON.parse(localStorage.getItem(keys[i])) );
        }
        console.log(values);
        this.recentSearchResults = values;
        return this.recentSearchResults.slice();
    }

    // public getData() {
    //     var data = [...configurationsData, ...partsData];
    //     console.log(data);
    // }

    public typeAheadSearch(input: string) {
        let results = this.allSearchResults.slice();
        results = results.filter(item => 
            item.title.toLowerCase().includes(input.toLowerCase())
        );
        return results;
    }
}
