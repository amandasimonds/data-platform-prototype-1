import { Component,  ChangeDetectionStrategy, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';
import { searchItems } from './searchItems';

@Component({
  selector: 'lib-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

    public items = searchItems;

    public searchTabs = [
        {
            icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/actions/more-horizontal-blue.svg',
            link: '/',
            linkText: 'Parts'
        },
        {
            icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/actions/more-horizontal-blue.svg',
            link: '/',
            linkText: 'Requirements'
        },
        {
            icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/actions/more-horizontal-blue.svg',
            link: '/',
            linkText: 'Documents'
        },
        {
            icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/actions/more-horizontal-blue.svg',
            link: '/',
            linkText: 'Recent Searches'
        }
    ];

    constructor(private headerService: HeaderService){}

    ngOnInit(): void {
        this.headerService.setTitle('Search')
        this.headerService.setAppIcon('assets/search.svg#search')
    }
}
