import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'prototype-app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainComponent {

    public isExpanded = false;

    public nav = [
        {
            icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/gradient/apps-quad-gradient.svg',
            navlink: '/main/home-splash',
            classes: []
        },
        {
            icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/gradient/apps-gwu-gradient.svg',
            navlink: '/main/global-where-used',
            classes: []
        },

        {
            icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/gradient/apps-sbs-gradient.svg',
            navlink: '/main/side-by-side',
            classes: []
        },
        {
            icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/gradient/apps-design-ripple-gradient.svg',
            navlink: '/main',
            classes: []
        },
        {
            icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/gradient/apps-ingestion-gradient.svg',
            navlink: '/main',
            classes: []
        },
        {
            icon: 'http://dpzaq1wj21co3.cloudfront.net/icons/gradient/apps-settings-gradient.svg',
            navlink: '/main',
            classes: []
        }
    ];

    public expandFilters(event: Event): void {
        console.log('expand button clicked', event);
        this.isExpanded = !this.isExpanded;
    }

    public snippetClick(event: Event): void {
        console.log('snippet was clicked', event);
    }

    public profileClick(event: Event): void {
    console.log('profile was clicked', event);
    }

    public helpBtnClick(event: Event): void {
        console.log('help button was clicked', event);
    }

}
