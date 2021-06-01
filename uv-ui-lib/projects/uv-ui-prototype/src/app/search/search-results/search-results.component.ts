import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { SearchResult } from '../models/search-result.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsComponent {

    @Input() public searchResults: SearchResult[] = [];
    @Input() public category = '';

    constructor(private searchService: SearchService) {
        this.searchResults = this.searchService.allSearchResults;
    }
}
