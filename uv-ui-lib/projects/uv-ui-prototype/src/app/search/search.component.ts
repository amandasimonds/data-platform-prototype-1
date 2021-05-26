import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component,  ChangeDetectionStrategy, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';
import { SearchResult } from './models/search-result.model';
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
    public reOrderModeActivated = false;
    public filterBarActive = true;

    constructor(private headerService: HeaderService){
        this.categorySelected = false;
    }

    items = [
        {title: "Checkbox"}
    ]

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.searchTabs, event.previousIndex, event.currentIndex);
      }

    ngOnInit(): void {
        this.headerService.setTitle('Search');
        this.headerService.setAppIcon('assets/search.svg#search');
    }

    reOrderMode() {
        this.reOrderModeActivated = !this.reOrderModeActivated;
    }

    onTabClicked(category: string){
        this.searchCategory = category;
        this.categorySelected = true;
    }

    toggleFilterBar(){
        this.filterBarActive = !this.filterBarActive
    }

    clearResults(){
       this.categorySelected = false;
    }

    onToggleTabActive(category: string){
        if (this.searchCategory === category) {
            return true;
        } else {
            return false;
        }
    }

    // public trackByFn(_: number, {link}: this.searchTabs): string {
    //     return link;
    // }
}
