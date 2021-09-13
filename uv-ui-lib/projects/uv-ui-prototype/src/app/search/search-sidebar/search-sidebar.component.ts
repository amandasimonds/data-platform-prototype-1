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
    @Input() recentSearches: SearchResult[] = [];
    @Input() searchText = '';
    searchSidebarState = 'hidden';

    @ViewChild('resultsContainer', { static: true }) public resultsDiv: ElementRef;

    categories = [
        {name: 'All', icon: 'list-right', resultCount: 0},
        {name: 'Requirements', icon: 'list-right', resultCount: 0},
        {name: 'Parts', icon: 'parts', resultCount: 0}, 
        {name: 'Documents', icon: 'document', resultCount: 0}
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
        let results: SearchResult[] = []
        this.searchText === '' ? results = this.recentSearches : results = this.searchResults;
        if (category === 'All') {
            return results.length
        }
        else {
            results = results.filter(item => item.category === category)
            return results.length;
        }
    }

    onCloseSearchSidebar(state: string, searchText: string){
        let searchItem = {category: '', title: searchText, description: '', active: false, disabled: false, date: ''}
        searchText = searchText.trim();
        console.log(searchText);
        if (searchText != '') {
            this.searchService.addToRecentSearches('search '+ searchText, searchItem);
        }
        this.searchCloseEvent.emit(state);
        this.searchText = '';
        this.resetScroll();
    }

    updateResults(e: Event) {
        this.searchResults = this.searchService.typeAheadSearch(this.searchText);
    }

    searchRecentSearch(item: SearchResult){
        this.searchText = item.title;
        console.log(this.searchText);
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
