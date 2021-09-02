import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { SearchResult } from '../models/search-result.model';
import { SearchService } from '../../services/search.service';
import { recentSearches } from './sample-search-results/recent-searches';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss', '../search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsComponent {

    @Input() public searchResults: SearchResult[] = [];
    @Input() public category = '';
    @Input() public searchText = '';
    @Output() public recentSearchClick = new EventEmitter<string>();
    public recentSearches: SearchResult[] = [];
    public showToolbar = false;
    public classes: string[] = [];

    mouseLeaveClass(){
        this.classes.push('mouseleave')
        console.log('mouseleave');
    }

    compareClicked(value: boolean, item: SearchResult) {
        this.searchService.setCompareWarningState(value);
        let now = new Date().toString();
        this.searchService.addToRecentSearches('search '+ now, item);
    }

    searchRecent(item: string) {
        this.recentSearchClick.emit(item);
    }

    deleteRecentSearch() {

    }

    constructor(private searchService: SearchService) {
        // this.searchResults = this.searchService.allSearchResults;
        // this.searchResults = this.searchService.typeAheadSearch(this.searchText);
    }

    ngOnInit(): void {
        this.recentSearches = this.searchService.getRecentSearches();
    }

    ngOnChanges(): void {
        console.log('search results', this.searchResults);
        this.searchResults = this.searchService.typeAheadSearch(this.searchText);
        this.recentSearches = this.searchService.getRecentSearches();
    }
}
