import { Component,  ChangeDetectionStrategy, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';
import { searchItems } from './search-results/searchItems';

@Component({
  selector: 'lib-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

    public items = searchItems

    public searchTabs = [
        {
            icon: 'assets/filter.svg#filter',
            link: '/',
            linkText: 'Parts',
            results: '49'
        },
        {
            icon: 'assets/filter.svg#filter',
            link: '/',
            linkText: 'Requirements',
            results: '274'
        },
        {
            icon: 'assets/filter.svg#filter',
            link: '/',
            linkText: 'Documents',
            results: '276'
        },
        {
            icon: 'assets/filter.svg#filter',
            link: '/',
            linkText: 'Recent Searches',
            results: ''
        }
    ];

    constructor(private headerService: HeaderService){}

    ngOnInit(): void {
        this.headerService.setTitle('Search');
        this.headerService.setAppIcon('assets/search.svg#search');
    }
}
