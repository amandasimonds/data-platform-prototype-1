import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { SearchResult } from '../models/search-result.model';
import { SearchService } from '../../services/search.service';

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
    }

    mouseLeaveClassRemove(){
        this.classes.splice(0 , 1);
    }

    compareClicked(value: boolean, item: SearchResult, i: number) {
        this.searchService.addToRecentSearches('search '+ item.title, item);
        this.searchService.selectResult(item, i)
        this.searchService.setCompareWarningState(value);
    }

    searchRecent(item: string) {
        this.recentSearchClick.emit(item);
    }

    deleteRecentSearch(title: string) {
        localStorage.removeItem('search ' + title);
        this.recentSearches = this.searchService.getRecentSearches();
    }

    constructor(private searchService: SearchService) {}

    ngOnInit(): void {
        this.recentSearches = this.searchService.getRecentSearches();
    }

    ngOnChanges(): void {
        this.searchResults = this.searchService.typeAheadSearch(this.searchText);
        this.recentSearches = this.searchService.getRecentSearches();
    }
}
