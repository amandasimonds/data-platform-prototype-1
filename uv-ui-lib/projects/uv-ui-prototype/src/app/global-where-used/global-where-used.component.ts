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
            icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/actions/more-horizontal-blue.svg',
            link: '/',
            linkText: 'Link'
        },
        {
            icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/actions/more-horizontal-blue.svg',
            link: '/',
            linkText: 'Link'
        },
        {
            icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/actions/more-horizontal-blue.svg',
            link: '/',
            linkText: 'Link'
        }
    ];
}
