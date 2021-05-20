import { Component,  ChangeDetectionStrategy, OnInit, EventEmitter } from '@angular/core';
import { HeaderService } from '../services/header.service';
// import { searchItems } from './search-results/searchItems';

@Component({
  selector: 'lib-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

    public searchItems: {title: string, description: string}[] = [];
    public searchCategory = '';

    public searchTabs = [
        {
            icon: 'assets/filter.svg#filter',
            link: '/',
            linkText: 'Parts',
            results: '49',
            action: 'this.partsResults()'
        },
        {
            icon: 'assets/filter.svg#filter',
            link: '/',
            linkText: 'Requirements',
            results: '274',
            action: 'this.partsResults()'
        },
        {
            icon: 'assets/filter.svg#filter',
            link: '/',
            linkText: 'Documents',
            results: '276',
            action: 'this.partsResults()'
        },
        {
            icon: 'assets/filter.svg#filter',
            link: '/',
            linkText: 'Recent Searches',
            results: '',
            action: 'this.partsResults()'
        }
    ];

    constructor(private headerService: HeaderService){}

    ngOnInit(): void {
        this.headerService.setTitle('Search');
        this.headerService.setAppIcon('assets/search.svg#search');
    }

    getPartsResults(){
        this.searchItems.push({
            title: 'API 13M-4 / ISO 13503-4',
            description: 'Recommended Practice for Measuring Stimulation and Gravel-pack Fluid Leakoff Under Static Conditions'
        });
        this.searchCategory = 'parts';
    }

    getRequirementsResults(){
        this.searchItems.push({
            title: 'API 13M-4 / ISO 13503-4',
            description: 'Recommended Practice for Measuring Stimulation and Gravel-pack Fluid Leakoff Under Static Conditions'
        });
    }

    getDocumentsResults(){
        this.searchItems.push({
            title: 'API 13M-4 / ISO 13503-4',
            description: 'Recommended Practice for Measuring Stimulation and Gravel-pack Fluid Leakoff Under Static Conditions'
        });
    }

    getRecentSearches(){
        this.searchItems.push({
            title: 'API 13M-4 / ISO 13503-4',
            description: 'Recommended Practice for Measuring Stimulation and Gravel-pack Fluid Leakoff Under Static Conditions'
        });
    }

    clearResults(){
        this.searchItems = [];
    }

    getTabState(){
        if (this.searchCategory === 'parts') {
            return true;
        } else {
            return false;
        }
    }

    onSelected() {
        
    }

    // public trackByFn(_: number, {link}: this.searchTabs): string {
    //     return link;
    // }
}
