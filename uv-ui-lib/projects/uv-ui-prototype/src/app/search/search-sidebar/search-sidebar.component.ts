import { ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { BackdropService } from '../../services/backdrop.service';
import { SearchService } from '../../services/search.service';
import { SearchResult } from '../models/search-result.model';
import { SlideInOutAnimation } from '../../animations';

@Component({
    selector: 'app-search-sidebar',
    templateUrl: './search-sidebar.component.html',
    styleUrls: ['./search-sidebar.component.scss'],
    animations: [
        SlideInOutAnimation
      ]
})
export class SearchSidebarComponent implements OnInit {

    @Input() public searchCategory = 'All';
    @Output() public searchCloseEvent = new EventEmitter<string>();
    searchResults: SearchResult[] = [];
    categoryOption: SearchResult[] = [];
    searchText = '';
    compareWarning = false;
    searchSidebarState = 'hidden';

    categories = [
        {name: 'All', icon: 'list-right'},
        {name: 'Requirements', icon: 'list-right'},
        {name: 'Parts', icon: 'parts'}, 
        {name: 'Documents', icon: 'document'},
        {name: 'Other', icon: 'more_dots'}
    ]
    
    constructor(
        private backdropService: BackdropService,
        private searchService: SearchService,
        private ref: ChangeDetectorRef,
        private elementRef: ElementRef) {     
        }

        @HostListener('document:click', ['$event'])
        clickOutside(event: any) {
            if (!this.elementRef.nativeElement.contains(event.target) && event.target.getAttribute("app-icon") != "app-icon") {
                this.searchCloseEvent.emit('hidden');
            }
        }

    selectCategory(category: string) {
        this.searchCategory = category;
    }

    activateCompare(value: boolean) {
        this.compareWarning = value;
        console.log(this.compareWarning);
    }

    getCategoryResultsNumber(category: string): number {
        let categoryArray = []
        if (category === 'All') {
            return this.searchResults.length
        }
        if(category === 'Requirements' || 'Documents' || 'Parts') {
            categoryArray = this.searchResults.filter(item => item.category === category)
            return categoryArray.length;
        } else {
            categoryArray = this.searchResults.filter(item => item.category != 'Requirements' || 'Documents' || 'Parts')
            return categoryArray.length;
        }
        
    }

    closeSearchSidebar(value: string){
        this.searchCloseEvent.emit(value);
    }

    ngOnInit(): void {
        this.backdropService.setBackdrop(true);
        this.searchResults = this.searchService.getAllSearchResults();
        this.searchService.searchState$.subscribe(state => {
            this.searchSidebarState = state;
            this.ref.detectChanges();
        });
        
    }
}
