import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component,  ChangeDetectionStrategy, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';
import { MenuTab } from './models/menu-tab.model';
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
    public showContent = false;
    public searchTabs: MenuTab[] = DEFAULT_SEARCH_MENU_STATE.menuTabs;
    public categorySelected = true;
    public reOrderModeActivated = false;
    public filterBarActive = false;
    public items = [
        {title: 'Lorem ipsum', checked: 'checked'},
        {title: 'Ipsum sit amet', checked: ''},
        {title: 'Amet lorem', checked: ''},
        {title: 'Lorem ipsum sit', checked: 'checked'},
        {title: 'Lorem ipsum amet', checked: 'checked'}
    ];

    constructor(private headerService: HeaderService){
        this.categorySelected = false;
    }

    public drop(event: CdkDragDrop<string[]>): void {
        moveItemInArray(this.searchTabs, event.previousIndex, event.currentIndex);
    }

    public ngOnInit(): void {
        this.headerService.setTitle('Search');
        this.headerService.setAppIcon('icons/search.svg#search');
    }

    public reOrderMode(): void {
        this.reOrderModeActivated = !this.reOrderModeActivated;
    }

    public onTabClicked(category: string): void {
        this.searchCategory = category;
        this.categorySelected = true;
    }

    public toggleFilterBar(): void {
        this.filterBarActive = !this.filterBarActive;
    }

    public clearResults(): void {
       this.categorySelected = false;
    }

    public onToggleTabActive(category: string): boolean {
        if (this.searchCategory === category) {
            return true;
        } else {
            return false;
        }
    }

    public trackByFn(_: number, {title}: MenuTab): string {
        return title;
    }
}
