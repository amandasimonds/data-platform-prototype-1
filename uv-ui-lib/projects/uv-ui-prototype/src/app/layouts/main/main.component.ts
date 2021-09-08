import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { AppShellService } from '../../services/app-shell.service';
import { navItems } from './navItems';
import { SearchService } from '../../services/search.service';
import { ActivatedRoute } from '@angular/router';
import { takeUntil, tap } from 'rxjs/operators';
import { NgOnDestroyService } from '../../services/on-destroy.service';
import { combineLatest } from 'rxjs';

@Component({
    selector: 'prototype-app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainComponent implements OnInit {

    public navlinks = navItems;
    public title = '';
    public headerIcon = '';
    public navActiveIcon = '';
    public compareWarning = false;
    public searchSidebarState = 'hidden';
    public currentApp = '';
    public selectedItem = '';

    @Input() public searchQuery = '';

    constructor(
        public appShellService: AppShellService, 
        public searchService: SearchService,
        private ref: ChangeDetectorRef,
        private route: ActivatedRoute,
        private destroy$: NgOnDestroyService) { 
        }

    public ngOnInit(): void {
        combineLatest([
            this.appShellService.currentAppTitle$.pipe(tap(title => this.title = title)),
            this.appShellService.currentAppHeaderIcon$.pipe(tap(icon => this.headerIcon = icon)),
            this.appShellService.currentAppNavIcon$.pipe(tap(icon => this.navActiveIcon = icon)),
            this.searchService.searchState$.pipe(tap(state => this.searchSidebarState = state)),
            this.searchService.compareWarning$.pipe(tap(state => this.compareWarning = state))
        ]).pipe( 
            // do other things if you want
            takeUntil(this.destroy$)
        ).subscribe( () => this.ref.detectChanges());
        this.route.queryParams.subscribe(
            params => { this.currentApp =  params['app'];}
        )
    }

    public get checkifSearch(): boolean {
        return this.title === 'Search';
    }

    toggleSearchSidebar() {
        this.searchSidebarState == 'hidden' ? 
            (this.searchService.setSearchSidebarState('visible'),
            this.appShellService.setNavIcon('search')) : 
            (this.searchService.setSearchSidebarState('hidden'),
            this.appShellService.setNavIcon(this.currentApp));
    }

    closeSearchSidebar() {
        this.searchService.setSearchSidebarState('hidden');
        this.appShellService.setNavIcon(this.currentApp);
    }
}
