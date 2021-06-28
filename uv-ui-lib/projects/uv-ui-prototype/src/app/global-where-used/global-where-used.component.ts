import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'prototype-uv-ui-global-where-used',
  templateUrl: './global-where-used.component.html',
  styleUrls: ['./global-where-used.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlobalWhereUsedComponent implements OnInit{

    public gwuTabs = [
        {
            icon: 'more_dots',
            link: '/',
            linkText: 'Link',
            results: ''
        },
        {
            icon: 'more_dots',
            link: '/',
            linkText: 'Link',
            results: ''
        },
        {
            icon: 'more_dots',
            link: '/',
            linkText: 'Link',
            results: ''
        }
    ];

    constructor(private headerService: HeaderService){}

    public ngOnInit(): void {
        this.headerService.setTitle('Global Where Used');
        this.headerService.setAppIcon('apps-gwu');
    }
}
