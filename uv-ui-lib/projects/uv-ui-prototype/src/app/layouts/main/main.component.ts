import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { navItems } from './navItems';

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

    public ngOnInit(): void {
        this.headerService.currentTitle$.subscribe(title => {
            this.title = title;
            this.ref.detectChanges();
        });
        this.headerService.currentIcon$.subscribe(icon => {
            this.appIcon = icon;
            this.ref.detectChanges();
        });
    }

    get checkifSearch(): boolean {
        return this.title === 'Search'
    } 
}
