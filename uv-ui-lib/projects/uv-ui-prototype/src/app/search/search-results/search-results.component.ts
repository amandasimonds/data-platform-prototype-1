import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnChanges, ChangeDetectorRef } from '@angular/core';
import { SearchResult } from '../models/search-result.model';
import { SearchService } from '../../services/search.service';
import { takeUntil, tap } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { NgOnDestroyService } from '../../services/on-destroy.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss', '../search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsComponent implements OnChanges {

    @Input() public searchResults: SearchResult[] = [];
    @Input() public category = '';
    @Input() public searchText = '';
    // @Input() public compareWarningActive = false;
    @Output() public recentSearchClick = new EventEmitter<SearchResult>();
    public recentSearches: SearchResult[] = [];
    public showToolbar = false;
    public classes: string[] = [];

    mouseLeaveClass() {this.classes.push('mouseleave')}
    mouseLeaveClassRemove() {this.classes.splice(0 , 1);}

    compareClicked(value: boolean, item: SearchResult, i: number) {
        this.searchService.addToRecentSearches('search '+ item.title, item);
        this.searchService.selectResult(item, i)
        this.searchService.setCompareWarningState(value);
        event.stopPropagation();
    }

    searchRecent(item: SearchResult) {
        this.recentSearchClick.emit(item);
        this.searchService.addToRecentSearches('search '+ item.title, item);
    }

    deleteRecentSearch(title: string) {
        localStorage.removeItem('search ' + title);
        this.recentSearches = this.searchService.getRecentSearches();
    }

    constructor(private searchService: SearchService, private ref: ChangeDetectorRef, private destroy$: NgOnDestroyService) {
        // this.compareWarningActive = this.searchService.compareWarningState.value;
    }

    ngOnInit(): void {
        this.recentSearches = this.searchService.getRecentSearches();
    }

    ngOnChanges(): void {
        this.searchResults = this.searchService.typeAheadSearch(this.searchText);
        this.recentSearches = this.searchService.getRecentSearches();
        // console.log(this.compareWarningActive);
    }
}
