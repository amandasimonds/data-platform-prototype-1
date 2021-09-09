import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { SearchResult } from '../models/search-result.model';
import { SlideInOutAnimation } from '../../animations';
import { takeUntil } from 'rxjs/operators';
import { NgOnDestroyService } from '../../services/on-destroy.service';

@Component({
    selector: 'app-search-sidebar',
    templateUrl: './search-sidebar.component.html',
    styleUrls: ['./search-sidebar.component.scss'],
    animations: [
        SlideInOutAnimation
    ]
})
export class SearchSidebarComponent implements OnInit, AfterViewChecked {

    @Input() public searchCategory = 'All';
    @Output() public searchCloseEvent = new EventEmitter<string>();
    @Input() searchResults: SearchResult[] = [];
    recentSearches: SearchResult[] = [];
    @Input() searchText = '';
    categoryOption: SearchResult[] = [];
    compareWarning = false;
    searchSidebarState = 'hidden';
    resultsNumber = 0;

    @ViewChild('resultsContainer', { static: true }) public resultsDiv: ElementRef;

    categories = [
        {name: 'All', icon: 'list-right'},
        {name: 'Requirements', icon: 'list-right'},
        {name: 'Parts', icon: 'parts'}, 
        {name: 'Documents', icon: 'document'}
    ]
    
    constructor(
        private searchService: SearchService,
        private ref: ChangeDetectorRef,
        private elementRef: ElementRef,
        private destroy$: NgOnDestroyService) {     
        }

    // @HostListener('document:click', ['$event'])
    // clickOutside(event: any) {
    //     if (!this.elementRef.nativeElement.contains(event.target) 
    //     && event.target.getAttribute("app-icon") != "app-icon") {
    //         this.searchCloseEvent.emit('hidden');
    //     }
    // }

    resetScroll() {
        this.resultsDiv.nativeElement.scrollTop = 0;
    }

    selectCategory(category: string) {
        this.searchCategory = category;
    }

    activateCompare(value: boolean) {
        this.searchService.setCompareWarningState(value);
    }

    getCategoryResultsNumber(category: string): number {
        // console.log(category);
        let results: SearchResult[] = []
        this.searchText === '' ? results = this.recentSearches : results = this.searchResults;
        if (category === 'All') {
            // console.log(category, results);
            return results.length
        }
        else {
            results = results.filter(item => item.category === category)
            // console.log(category, results);
            return results.length;
        }
    }

    onCloseSearchSidebar(value: string, item: string){
        this.searchService.addToRecentSearches('search '+ item, {title: item});
        this.searchCloseEvent.emit(value);
        this.searchText = '';
        this.resetScroll();
    }

    updateResults(e: Event) {
        this.searchResults = this.searchService.typeAheadSearch(this.searchText);
    }

    searchRecentSearch(item: string){
        this.searchText = item;
        this.resetScroll();
    }

    ngOnInit(): void {  
        this.recentSearches = this.searchService.getRecentSearches();
        this.searchResults = this.searchService.getAllSearchResults();
        this.searchService.searchState$
            .pipe(takeUntil(this.destroy$))
            .subscribe(state => { this.searchSidebarState = state;
                this.ref.detectChanges();
            });
    }

    ngAfterViewChecked(): void {
        this.searchResults = this.searchService.typeAheadSearch(this.searchText);
        this.recentSearches = this.searchService.getRecentSearches();
    }
}
