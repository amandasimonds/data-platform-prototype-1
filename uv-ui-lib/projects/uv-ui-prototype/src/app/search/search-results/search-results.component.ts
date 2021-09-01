import { Component, ChangeDetectionStrategy, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
    public recentSearches = recentSearches;
    public showToolbar = false;

    compareClicked(value: boolean) {
        this.searchService.setCompareWarningState(true);
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
