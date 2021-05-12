import { Component,  ChangeDetectionStrategy, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'lib-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

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

    items = [
        {
            title: 'API 13M-4 / ISO 13503-4', 
            description: 'Recommended Practice for Measuring Stimulation and Gravel-pack Fluid Leakoff Under Static Conditions'
        },
        {
            title: 'API 13M-4 / ISO 13503-4', 
            description: 'Recommended Practice for Measuring Stimulation and Gravel-pack Fluid Leakoff Under Static Conditions'
        },
        {
            title: 'API 13M-4 / ISO 13503-4', 
            description: 'Recommended Practice for Measuring Stimulation and Gravel-pack Fluid Leakoff Under Static Conditions'
        },
        {
            title: 'API 13M-4 / ISO 13503-4', 
            description: 'Recommended Practice for Measuring Stimulation and Gravel-pack Fluid Leakoff Under Static Conditions'
        },
        {
            title: 'API 13M-4 / ISO 13503-4', 
            description: 'Recommended Practice for Measuring Stimulation and Gravel-pack Fluid Leakoff Under Static Conditions'
        },
        {
            title: 'API 13M-4 / ISO 13503-4', 
            description: 'Recommended Practice for Measuring Stimulation and Gravel-pack Fluid Leakoff Under Static Conditions'
        },
        {
            title: 'API 13M-4 / ISO 13503-4', 
            description: 'Recommended Practice for Measuring Stimulation and Gravel-pack Fluid Leakoff Under Static Conditions'
        },
        {
            title: 'API 13M-4 / ISO 13503-4', 
            description: 'Recommended Practice for Measuring Stimulation and Gravel-pack Fluid Leakoff Under Static Conditions'
        },
        {
            title: 'API 13M-4 / ISO 13503-4', 
            description: 'Recommended Practice for Measuring Stimulation and Gravel-pack Fluid Leakoff Under Static Conditions'
        },
        {
            title: 'API 13M-4 / ISO 13503-4', 
            description: 'Recommended Practice for Measuring Stimulation and Gravel-pack Fluid Leakoff Under Static Conditions'
        },
        {
            title: 'API 13M-4 / ISO 13503-4', 
            description: 'End Recommended Practice for Measuring Stimulation and Gravel-pack Fluid Leakoff Under Static Conditions'
        },
    ]

    constructor(private headerService: HeaderService){}

    ngOnInit(): void {
        this.headerService.setTitle('Search')
    }
}
