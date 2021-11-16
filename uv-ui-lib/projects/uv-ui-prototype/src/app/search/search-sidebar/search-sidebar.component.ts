import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, EventEmitter, ChangeDetectionStrategy, Input, OnInit, Output, ViewChild, OnChanges } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { SearchService } from '../../services/search.service';
import { SearchResult } from '../models/search-result.model';
import { slideInOutAnimation } from '../../animations';
import { NgOnDestroyService } from '../../services/on-destroy.service';

@Component({
    selector: 'app-search-sidebar',
    templateUrl: './search-sidebar.component.html',
    styleUrls: ['./search-sidebar.component.scss'],
    animations: [slideInOutAnimation],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchSidebarComponent implements OnInit, AfterViewChecked, OnChanges {

    @Input() public searchCategory = 'All';
    @Input() public searchResults: SearchResult[] = [];
    @Input() public recentSearches: SearchResult[] = [];
    @Input() public searchText = '';
    @Input() public searchSidebarState = 'hidden';
    @Output() public readonly searchCloseEvent = new EventEmitter<string>();
    public searchCategoryIcon = 'design';

    @ViewChild('resultsContainer', { static: true }) public resultsDiv: ElementRef;

    public categories = [
        {name: 'All', icon: 'design', resultCount: 0},
        {name: 'Materials', icon: 'global_where_used', resultCount: 0},
        {name: 'Requirements', icon: 'list-right', resultCount: 0},
        {name: 'Parts', icon: 'parts', resultCount: 0},
        {name: 'Documents', icon: 'document', resultCount: 0}
    ];

    constructor(
        private searchService: SearchService,
        private ref: ChangeDetectorRef,
        private destroy$: NgOnDestroyService) {
        }

    public resetScroll(): void {
        this.resultsDiv.nativeElement.scrollTop = 0;
    }

    public selectCategory(category: string): void {
        this.searchCategory = category;
        switch(this.searchCategory) {
            case 'All':
                this.searchCategoryIcon = 'design';
                break;
            case 'Materials':
                this.searchCategoryIcon = 'global_where_used';
                break;
            case 'Requirements':
                this.searchCategoryIcon = 'list-right';
                break;
            case 'Parts':
                this.searchCategoryIcon =  'parts';
                break;
            case 'Documents':
                this.searchCategoryIcon = 'document';
                break;
            default:
                this.searchCategoryIcon = 'design';
                break;
        }
    }

    public activateCompare(value: boolean): void {
        this.searchService.setCompareWarningState(value);
    }

    public getCategoryResultsNumber(category: string): number {
        let results: SearchResult[] = [];
        this.searchText === '' ? results = this.recentSearches : results = this.searchResults;
        if (category === 'All') {
            return results.length;
        } else {
            results = results.filter(item => item.category === category);

            return results.length;
        }
    }

    public onCloseClicked(state: string): void{
        this.searchCloseEvent.emit(state);
        this.searchSidebarClosed(this.searchText);
    }

    public searchSidebarClosed(searchText: string): void {
        const searchItem = {
            category: '',
            title: searchText,
            description: '',
            active: false,
            disabled: false,
            date: '',
            formattedDate: ''
        };
        searchText.trim();
        if (searchText !== '') {
            this.searchService.addToRecentSearches('search '+ searchText, searchItem);
        }
        this.searchText = '';
        this.resetScroll();
    }

    public updateResults(e: Event): void {
        this.searchResults = this.searchService.typeAheadSearch(this.searchText);
    }

    public searchRecentSearch(item: SearchResult): void {
        this.searchText = item.title;
        this.resetScroll();
    }

    public searchClear(): void {
        this.searchText = ''; 
        this.resetScroll(); 
        this.searchCategory = 'All';
    }

    public ngOnInit(): void {
        this.recentSearches = this.searchService.getRecentSearches();
        this.searchResults = this.searchService.getAllSearchResults();
        this.searchService.searchState$
            .pipe(takeUntil(this.destroy$))
            .subscribe(state => {
                this.searchSidebarState = state;
                this.ref.detectChanges();
            });
    }

    public ngOnChanges(): void {
        if(this.searchSidebarState === 'hidden') {
            this.searchSidebarClosed(this.searchText);
        }
    }

    public ngAfterViewChecked(): void {
        this.searchResults = this.searchService.typeAheadSearch(this.searchText);
        this.ref.detectChanges();
        this.recentSearches = this.searchService.getRecentSearches();
    }
}
