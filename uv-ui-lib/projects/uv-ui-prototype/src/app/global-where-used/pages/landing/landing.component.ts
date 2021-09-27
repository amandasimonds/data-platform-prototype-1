import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

    expandActionBar = false;

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
