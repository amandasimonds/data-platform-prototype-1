import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { AppShellService } from '../../services/app-shell.service';
import { SearchService } from '../../services/search.service';
import { NgOnDestroyService } from '../../services/on-destroy.service';
import { UserService } from '../../services/user.service';
import { UvLightService } from '../../services/uv-light.service';
import { navItems } from './navItems';

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
    public currentUser = {id: 1, new: false, name: ''};
    public currentHighlight = '';
    public uvLight = false;
    public selectedItem = '';

    @Input() public searchQuery = '';

    public get backdropMode(): string {
        if(this.compareWarning){
            return 'popup';
        } else if (this.uvLight) {
            return 'uv-light';
        } else {
            return '';
        }
    }

    constructor(
        public appShellService: AppShellService,
        public searchService: SearchService,
        private ref: ChangeDetectorRef,
        private route: ActivatedRoute,
        private destroy$: NgOnDestroyService,
        private userService: UserService,
        private uvlService: UvLightService) {
        }

    public ngOnInit(): void {
        combineLatest([
            this.appShellService.currentAppTitle$.pipe(tap(title => this.title = title)),
            this.appShellService.currentAppHeaderIcon$.pipe(tap(icon => this.headerIcon = icon)),
            this.appShellService.currentAppNavIcon$.pipe(tap(icon => this.navActiveIcon = icon)),
            this.searchService.searchState$.pipe(tap(state => this.searchSidebarState = state)),
            this.searchService.compareWarning$.pipe(tap(state => this.compareWarning = state)),
            this.userService.currentUser$.pipe(tap(user => this.currentUser = user)),
            this.uvlService.currentHighlight$.pipe(tap(highlight => this.currentHighlight = highlight))
        ]).pipe(
            takeUntil(this.destroy$)
        ).subscribe(() => this.ref.detectChanges());
        this.route.queryParams.subscribe(
            params => {
                this.currentApp =  params['app'];
            }
        );
    }

    public get checkifSearch(): boolean {
        return this.title === 'Search';
    }

    public toggleSearchSidebar(): void {
        this.searchSidebarState === 'hidden' ?
            (this.searchService.setSearchSidebarState('visible'),
            this.appShellService.setNavIcon('search')) :
            (this.searchService.setSearchSidebarState('hidden'),
            this.appShellService.setNavIcon(this.currentApp));
    }

    public toggleUvLight(): void {
        this.uvLight = !this.uvLight;
    }

    public closeSearchSidebar(): void {
        this.searchService.setSearchSidebarState('hidden');
        this.appShellService.setNavIcon(this.currentApp);
    }
}
