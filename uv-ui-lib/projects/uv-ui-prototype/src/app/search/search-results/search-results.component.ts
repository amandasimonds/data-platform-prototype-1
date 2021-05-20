import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { searchItems } from './searchItems';
import { SearchResult } from '../search-result.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsComponent {

    @Input() public searchResults: SearchResult[] = [];

    constructor() {}

}
