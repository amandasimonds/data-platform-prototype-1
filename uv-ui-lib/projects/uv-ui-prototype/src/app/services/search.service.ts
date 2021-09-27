import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { format, isToday } from 'date-fns';
import { SearchResult } from '../search/models/search-result.model';
import { allSearchResults } from '../search/search-results/sample-search-results/allSearchResults';
import { presetSearches } from '../search/search-results/sample-search-results/presetSearches';

@Injectable()
export class SearchService {
    public allSearchResults: SearchResult[] = allSearchResults;
    public presetSearchResults: SearchResult[] = presetSearches;
    public recentSearchResults: SearchResult[] = [];
    public searchSidebarState = new BehaviorSubject<string>('hidden');
    public compareWarningState = new BehaviorSubject<boolean>(false);
    public resultSelectedEvent = new BehaviorSubject<SearchResult[]>([]);
    public searchResults = new BehaviorSubject<SearchResult[]>([]);
    @Output() public readonly resultSelected = new EventEmitter<boolean>();

    public get searchResultsList$(): Observable<SearchResult[]> {
        return this.searchResults.asObservable();
    }
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
    public setSearchResults(results: SearchResult[]): void {
        this.searchResults.next(results);
    };
    public getAllSearchResults(): SearchResult[] {
        return this.allSearchResults.slice();
    }

    public selectResult(result: SearchResult, i: number): void {
        result.active = !result.active;
        let resultsList: SearchResult[] = [];
        const exceptIndex = i;
        if (result.active) {
            this.resultSelected.emit(true);
            resultsList = this.getAllSearchResults()
            .filter((item, index) => exceptIndex !== index)
            .map(item => ({
                ...item,
                disabled: item.disabled = true
            }));
        } else {
            this.resultSelected.emit(false);
            resultsList = [...this.getAllSearchResults(), ...this.getRecentSearches()]
            .map(item => ({
                ...item, 
                disabled: !item.disabled
            }));
        }
        this.resultSelectedEvent.next(resultsList);
    }

    public unselectAll(): void {
        console.log(this.getRecentSearches().length);
        console.log(this.getAllSearchResults().length);
        const resultsList = [...this.getAllSearchResults(), ...this.resultSelectedEvent.value]
            .map(item => ({
                ...item,
                disabled: item.disabled = false,
                active: item.active = false
            }));
        this.resultSelectedEvent.next(resultsList);
    }

    public addToRecentSearches(key: string, item: SearchResult): void {
        if (this.typeAheadSearch(item.title).length !== 0) {
            item.date = new Date().toString();
            item.formattedDate = isToday(new Date()) ? 'Today at  ' + format(new Date(),' hh:mm a') : format(new Date(), 'd LLLL hh:mm a');
            localStorage.setItem(key, JSON.stringify(item));
        }
    }

    public getRecentSearches(): SearchResult[] {
        var values = [];
        var keys = Object.keys(localStorage).filter(item => item.includes('search')),
        i = keys.length;
        if(i === 0) {
            this.presetRecentSearches();
        }
        while(i--) {
            values.push(JSON.parse(localStorage.getItem(keys[i])));
        }
        values = values.sort((a, b) => (
            new Date(b.date).getTime() - new Date(a.date).getTime()
        ));
        this.recentSearchResults = values.slice(0, 10);

        return this.recentSearchResults.slice();
    }

    public presetRecentSearches(): void {
        for(let item of presetSearches) {
            item.formattedDate = format(new Date(), 'd LLLL hh:mm a');
            item.date = new Date().toString();
            localStorage.setItem('search ' + item.title, JSON.stringify(item));
        }
    }

    public typeAheadSearch(input: string): SearchResult[] {
        let results = this.allSearchResults.slice();
        results = results.filter(item =>
            item.title.toLowerCase().includes(input.toLowerCase())
        );

        return results;
    }
}
