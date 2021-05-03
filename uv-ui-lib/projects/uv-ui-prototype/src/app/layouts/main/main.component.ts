import { Component, ChangeDetectionStrategy } from '@angular/core';
import { navItems } from './navItems';

@Component({
    selector: 'prototype-app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainComponent {

    public isExpanded = false;
    public nav = navItems;

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
