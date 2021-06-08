import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component,  ChangeDetectionStrategy, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';
import { SearchResult } from './models/search-result.model';
import { DEFAULT_SEARCH_MENU_STATE } from './models/search-results-state';

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
    public searchTabs = DEFAULT_SEARCH_MENU_STATE.menuTabs;
    public categorySelected = true;
    public reOrderModeActivated = false;
    public filterBarActive = true;
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

    public drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.searchTabs, event.previousIndex, event.currentIndex);
    }

    public ngOnInit(): void {
        this.headerService.setTitle('Search');
        this.headerService.setAppIcon('assets/search.svg#search');
    }

    public reOrderMode() {
        this.reOrderModeActivated = !this.reOrderModeActivated;
    }

    public onTabClicked(category: string) {
        this.searchCategory = category;
        this.categorySelected = true;
    }

    public toggleFilterBar() {
        this.filterBarActive = !this.filterBarActive;
    }

    public clearResults() {
       this.categorySelected = false;
    }

    public onToggleTabActive(category: string): boolean {
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
