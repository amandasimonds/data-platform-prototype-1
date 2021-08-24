import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { BackdropService } from '../../services/backdrop.service';
import { SearchService } from '../../services/search.service';
import { SearchResult } from '../models/search-result.model';

@Component({
    selector: 'app-search-sidebar',
    templateUrl: './search-sidebar.component.html',
    styleUrls: ['./search-sidebar.component.scss']
})
export class SearchSidebarComponent implements OnInit {

    @Input() public searchCategory = 'Parts';
    searchResults: SearchResult[] = [];
    categoryOption: SearchResult[] = [];

    categories = [
        {name: 'Requirements', icon: 'list-right'},
        {name: 'Parts', icon: 'parts'}, 
        {name: 'Documents', icon: 'document'},
        {name: 'Other', icon: 'more_dots'}
    ]
    
    constructor(
        private backdropService: BackdropService,
        private searchService: SearchService,
        private location: Location) {     
        }

        selectCategory(category: string) {
        this.searchCategory = category;
        }

    getCategoryResultsNumber(category: string): number {
        let categoryArray = []
        if(category === 'Requirements' || 'Documents' || 'Parts') {
            categoryArray = this.searchResults.filter(item => item.category === category)
        } else {
            categoryArray = this.searchResults.filter(item => item.category != 'Requirements' || 'Documents' || 'Parts')
        }
        return categoryArray.length;
    }

    goBack(){
        this.location.back();
    }

    ngOnInit(): void {
        this.backdropService.setBackdrop(true);
        this.searchResults = this.searchService.getAllSearchResults();
    }

}
