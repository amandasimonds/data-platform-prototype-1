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
    public recentSearches = recentSearches;
    public showToolbar = false;
    public classes: string[] = [];

    mouseLeaveClass(){
        this.classes.push('mouseleave')
        console.log('mouseleave');
    }

    compareClicked(value: boolean, data: string) {
        this.searchService.setCompareWarningState(true)
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

    ngOnChanges(): void {
        console.log('search results', this.searchResults);
        this.searchResults = this.searchService.typeAheadSearch(this.searchText);
    }
}
