import { SearchResult } from '../search/models/search-result.model';
import { allSearchResults } from '../search/search-results/sample-search-results/allSearchResults';
import * as configurationsData from '../../sample-data/configurations.json';
import * as partsData from '../../sample-data/parts.json';
import { BehaviorSubject, Observable } from 'rxjs';

export class SearchService {
    public allSearchResults: SearchResult[] = allSearchResults;
    public searchSidebarState = new BehaviorSubject<string>('hidden');

    public get searchState$(): Observable<string> {
        return this.searchSidebarState.asObservable();
    }

    public setSearchSidebarState(state: string): void {
        this.searchSidebarState.next(state);
    }

    public getAllSearchResults(): SearchResult[]{
        return this.allSearchResults.slice();
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
