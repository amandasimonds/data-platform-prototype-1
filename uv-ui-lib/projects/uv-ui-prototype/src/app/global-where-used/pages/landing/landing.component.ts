import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent {

    public expandActionBar = false;

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

}
