import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { Location } from '@angular/common';
import { AppShellService } from '../../services/app-shell.service';
import { navItems } from './navItems';
import { FadeInOutAnimation, SlideInOutAnimation } from '../../animations';
import { SearchService } from '../../services/search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'prototype-app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    animations: [ FadeInOutAnimation ],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainComponent implements OnInit {

    public navlinks = navItems;
    public title = '';
    public appIcon = '';
    public activeAppIcon = '';
    public compareWarning = false;
    public searchSidebarState = 'hidden';

    @Input() public searchQuery = '';

    constructor(
        public appShellService: AppShellService, 
        public searchService: SearchService,
        private ref: ChangeDetectorRef,
        private location: Location,
        private route: ActivatedRoute) { }

    public ngOnInit(): void {
        console.log(this.location);
        this.appShellService.currentTitle$.subscribe(title => {
            this.title = title;
            this.ref.detectChanges();
        });
        this.appShellService.currentIcon$.subscribe(icon => {
            this.appIcon = icon;
            this.ref.detectChanges();
        });
        this.appShellService.currentApp$.subscribe(icon => {
            this.activeAppIcon = icon;
            this.ref.detectChanges();
        });
        this.searchService.searchState$.subscribe(state => {
            this.searchSidebarState = state;
            this.ref.detectChanges();
        });
    }

    public get checkifSearch(): boolean {
        return this.title === 'Search';
    }

    toggleSearchSidebar() {
        this.searchSidebarState == 'hidden' ? 
            (this.searchService.setSearchSidebarState('visible'),
            this.appShellService.setActiveAppNav('search')) : 
            (this.searchService.setSearchSidebarState('hidden'),
            this.appShellService.setActiveAppNav(''));
    }
}
