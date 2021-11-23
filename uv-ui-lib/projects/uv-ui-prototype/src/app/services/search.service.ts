import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { format, isToday } from 'date-fns';
import { SearchResult } from '../search/models/search-result.model';
import { allSearchResults } from '../search/search-results/sample-search-results/allSearchResults';
import { presetSearches } from '../search/search-results/sample-search-results/presetSearches';
import { configData } from '../shared/data/configData';
import { programData } from '../shared/data/programData';
import { partData } from '../shared/data/partData';
import { materialData } from '../shared/data/materialData';

@Injectable()
export class SearchService {
    public allSearchResults: SearchResult[] = [...configData, ...materialData, ...programData, ...partData];
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
        result.active ? this.setSelectedEntity(resultsList, i) : null;
        this.resultSelectedEvent.next(resultsList);
    }

    public setSelectedEntity(resultsList: SearchResult[], i: number): void {
        this.resultSelected.emit(true);
        resultsList = this.getAllSearchResults()
        .filter((item, index) => i !== index)
        .map(item => ({
            ...item,
            disabled: item.disabled = true
        }));
    }

    public unselectAll(): void {
        const resultsList = [...this.getAllSearchResults(), ...this.resultSelectedEvent.value]
            .map(item => ({
                ...item,
                disabled: item.disabled = false,
                active: item.active = false
            }));
        this.resultSelectedEvent.next(resultsList);
    }

    public addToRecentSearches(key: string, item: SearchResult): void {
        if (this.typeAheadSearch(item.name).length !== 0) {
            item.date = new Date().toString();
            item.formattedDate = isToday(new Date()) ? 'Today at  ' + format(new Date(),' hh:mm a') : format(new Date(), 'd LLLL hh:mm a');
            localStorage.setItem(key, JSON.stringify(item));
        }
    }

    public getRecentSearches(): SearchResult[] {
        const values = [];
        let keys = Object.keys(localStorage).filter(item => item.includes('search')),
        i = keys.length;
        if(i === 0) {
            this.presetRecentSearches();
        }
        while(i--) {
            values.push(JSON.parse(localStorage.getItem(keys[i])));
        }
        values.sort((a, b) => (
            new Date(b.date).getTime() - new Date(a.date).getTime()
        ));
        this.recentSearchResults = values.slice(0, 10);

        return this.recentSearchResults.slice();
    }

    public presetRecentSearches(): void {
        for(let item of presetSearches) {
            item.formattedDate = format(new Date(), 'd LLLL hh:mm a');
            item.date = new Date().toString();
            localStorage.setItem(`search ${item.name}`, JSON.stringify(item));
        }
    }

    public typeAheadSearch(input: string): SearchResult[] {
        let results = this.allSearchResults.slice();
        results = results.filter(item =>
            item.name.toLowerCase().includes(input.toLowerCase())
        );

        return results;
    }
}
