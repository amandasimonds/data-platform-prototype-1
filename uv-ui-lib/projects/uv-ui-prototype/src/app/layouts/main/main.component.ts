import { Component, ChangeDetectionStrategy, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { navItems } from './navItems';
import { HeaderService } from '../../services/header.service';

@Component({
    selector: 'prototype-app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainComponent implements OnChanges {

    public isExpanded = false;
    public nav = navItems;

    public title = '';
    public appIcon = '';

    constructor(private headerService: HeaderService) { }

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
    
    ngOnInit() {
        this.headerService.title.subscribe(title => {
        this.title = title;
        console.log("main component", this.title)
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.headerService.title.subscribe(title => {
            this.title = title;
            console.log("main component onChange", this.title)
            });
    }
}
