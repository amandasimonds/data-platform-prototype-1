import { Component, ChangeDetectionStrategy, Input, OnInit, SimpleChanges } from '@angular/core';
import { SearchResult } from '../models/search-result.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsComponent implements OnInit {

    @Input() public searchResults: SearchResult[] = [];
    @Input() public documentsSearchResults: SearchResult[] = [];
    @Input() public partsSearchResults: SearchResult[] = [];
    @Input() public requirementsSearchResults: SearchResult[] = [];
    @Input() public category = '';

    constructor(private searchService: SearchService) {
        this.documentsSearchResults = this.searchService.documentsSearchResults;
        this.partsSearchResults = this.searchService.partsSearchResults;
        this.requirementsSearchResults = this.searchService.requirementsSearchResults;
        this.searchResults = this.searchService.allSearchResults;
    }

    ngOnInit(): void {
        // this.getSearchResults();
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(this.category);
        console.log(this.searchResults);
    }

    getSearchResults(){
        if (this.category === 'Documents') {
            this.searchResults = this.documentsSearchResults
        } else if (this.category === 'Requirements') {
            this.searchResults = this.requirementsSearchResults
        } else if (this.category === 'Parts') {
            this.searchResults = this.partsSearchResults
        }
    }
}
