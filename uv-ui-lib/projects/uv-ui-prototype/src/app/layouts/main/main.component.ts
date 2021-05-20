import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { navItems } from './navItems';
import { HeaderService } from '../../services/header.service';

@Component({
    selector: 'prototype-app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainComponent implements OnInit {

    public nav = navItems;
    public title = '';
    public appIcon = '';
    @Input() public searchQuery = '';

    constructor(public headerService: HeaderService, private ref: ChangeDetectorRef) { }
    
    ngOnInit() {
        this.headerService.currentTitle$.subscribe(title => {
            this.title = title;
            this.ref.detectChanges();
        });
        this.headerService.currentIcon$.subscribe(icon => {
            this.appIcon = icon;
            this.ref.detectChanges();
        });
    }

    onSearchAction(query: string) {
        // if (query === 'part')
    }
}
