import { Component,  ChangeDetectionStrategy, OnInit, EventEmitter } from '@angular/core';
import { HeaderService } from '../services/header.service';
import { MenuTab } from './models/menu-tab.model';
import { SearchResult } from './models/search-result.model';
// import { searchItems } from './search-results/searchItems';
import { DEFAULT_SEARCH_MENU_STATE, SearchResultsSideMenuState } from './models/search-results-state';

@Component({
  selector: 'lib-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

    public searchItemsArray: SearchResult[] = [];
    public searchItem: SearchResult = {category: '', title: '', description: ''};
    public searchCategory = '';
    public activeExample = true;
    public showContent = false;
    public searchTabs = DEFAULT_SEARCH_MENU_STATE.menuTabs;
    categorySelected = true;

    constructor(private headerService: HeaderService){
        this.categorySelected = false;
    }

    ngOnInit(): void {
        this.headerService.setTitle('Search');
        this.headerService.setAppIcon('assets/search.svg#search');
    }

    onTabClicked(category: string){
        console.log('tab category: ' + category);
        this.searchCategory = category;
        this.categorySelected = true;
    }

    getPartsResults(){
        this.searchItemsArray.push({
            category: 'Parts',
            title: 'API 13M-4 / ISO 13503-4',
            description: 'Recommended Practice for Measuring Stimulation and Gravel-pack Fluid Leakoff Under Static Conditions'
        });
        this.searchCategory = 'parts';
    }

    getRequirementsResults(){
        this.searchItemsArray.push({
            category: 'Parts',
            title: 'API 13M-4 / ISO 13503-4',
            description: 'Recommended Practice for Measuring Stimulation and Gravel-pack Fluid Leakoff Under Static Conditions'
        });
    }

    getDocumentsResults(){
        this.searchItemsArray.push({
            category: 'Parts',
            title: 'API 13M-4 / ISO 13503-4',
            description: 'Recommended Practice for Measuring Stimulation and Gravel-pack Fluid Leakoff Under Static Conditions'
        });
    }

    getRecentSearches(){
        this.searchItemsArray.push({
            category: 'Parts',
            title: 'API 13M-4 / ISO 13503-4',
            description: 'Recommended Practice for Measuring Stimulation and Gravel-pack Fluid Leakoff Under Static Conditions'
        });
    }

    clearResults(){
       this.categorySelected = false;
    }

    getTabState(){
        if (this.searchCategory === 'parts') {
            return true;
        } else {
            return false;
        }
    }

    toggleActive(){
        this.activeExample = !this.activeExample;
        return this.activeExample;
    }

    onSelected(searchItem: SearchResult) {
        this.searchItemsArray.push(searchItem)
    }

    // public trackByFn(_: number, {link}: this.searchTabs): string {
    //     return link;
    // }
}
