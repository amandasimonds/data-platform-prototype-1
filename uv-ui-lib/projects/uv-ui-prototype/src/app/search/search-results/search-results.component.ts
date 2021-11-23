import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { SearchResult } from '../models/search-result.model';
import { SearchService } from '../../services/search.service';
import { WizardService } from '../../global-where-used/wizard.service';
import { Router } from '@angular/router';
import { FilterResultsPipe } from './filter-results.pipe';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsComponent implements OnChanges, OnInit {

    @Input() public searchResults: SearchResult[] = [];
    @Input() public category = '';
    @Input() public searchText = '';
    @Output() public readonly recentSearchClick = new EventEmitter<SearchResult>();
    public recentSearches: SearchResult[] = [];
    public showToolbar = false;
    public classes: string[] = [];
    public get searchIsEmpty(): boolean {
        return this.searchText === '' ? true : false;
    }

    constructor(
        private searchService: SearchService, 
        private filterResults: FilterResultsPipe,
        private wizardService: WizardService,
        private router: Router) {}

    public ngOnInit(): void {
        this.recentSearches = this.searchService.getRecentSearches();
    }
    
    public ngOnChanges(): void {
        this.searchResults = this.searchService.typeAheadSearch(this.searchText);
        this.recentSearches = this.searchService.getRecentSearches();
    }

    public getSearchCollection(): SearchResult[] {
        return this.searchText === '' ? this.filterResults.transform(this.recentSearches, this.category) : this.filterResults.transform(this.searchResults, this.category);
    }

    public mouseLeaveClass(): void {
        this.classes.push('mouseleave');
    }

    public mouseLeaveClassRemove(): void {
        this.classes.splice(0 , 1);
    }

    public compareClicked(value: boolean, item: SearchResult, i: number): void {
        this.searchService.addToRecentSearches(`search ${item.name}`, item);
        this.searchService.selectResult(item, i);
        this.searchService.setCompareWarningState(value);
        event.stopPropagation();
    }

    public launchClicked(value: boolean, item: SearchResult, i: number, route: string): void {
        console.log('launch click', item);
        this.searchService.addToRecentSearches('search '+ item.name, item);
        this.searchService.selectResult(item, i);
        // this.searchService.setCompareWarningState(value);
        this.wizardService.updateWizardData('entity', item);
        if (route === 'gwu') {
            this.router.navigate(['main/gwu/wave']);
        } else if (route === 'sbs') {
            this.router.navigate(['main/sbs']);
        }
        this.searchService.setSearchSidebarState('hidden');
        event.stopPropagation();
    }

    public searchRecent(item: SearchResult): void {
        this.recentSearchClick.emit(item);
        this.searchService.addToRecentSearches(`search ${item.name}`, item);
    }

    public deleteRecentSearch(title: string): void {
        localStorage.removeItem(`search ${title}`);
        this.recentSearches = this.searchService.getRecentSearches();
    }

    public searchResultClicked(item: SearchResult): void {
        this.searchText === ''; 
        !item.category ? this.searchRecent(item) : null;
    }
}
