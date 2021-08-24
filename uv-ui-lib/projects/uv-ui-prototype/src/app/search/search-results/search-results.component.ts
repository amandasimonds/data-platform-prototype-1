import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { SearchResult } from '../models/search-result.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss', '../search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsComponent implements OnInit {

    @Input() public searchResults: SearchResult[] = [];
    @Input() public category = '';
    @Input() public searchText = '';

    constructor(private searchService: SearchService) {
        // this.searchResults = this.searchService.allSearchResults;
        // this.searchResults = this.searchService.typeAheadSearch(this.searchText);
    }

    ngOnInit() {
        console.log('search results', this.searchResults);
    }

    ngOnChanges(): void {
        console.log('search results', this.searchResults);
        this.searchResults = this.searchService.typeAheadSearch(this.searchText);
    }
}
