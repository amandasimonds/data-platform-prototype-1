import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'prototype-uv-ui-global-where-used',
  templateUrl: './global-where-used.component.html',
  styleUrls: ['./global-where-used.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlobalWhereUsedComponent {

    public gwuTabs = [
        {
            icon: 'assets/more-horizontal.svg#moreHorizontal',
            link: '/',
            linkText: 'Link',
            results: ''
        },
        {
            icon: 'assets/more-horizontal.svg#moreHorizontal',
            link: '/',
            linkText: 'Link',
            results: ''
        },
        {
            icon: 'assets/more-horizontal.svg#moreHorizontal',
            link: '/',
            linkText: 'Link',
            results: ''
        }
    ];
}
