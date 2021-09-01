import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { AppShellService } from '../../services/app-shell.service';
import { navItems } from './navItems';
import { SearchService } from '../../services/search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'prototype-app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainComponent implements OnInit {

    public navlinks = navItems;
    public title = '';
    public appIcon = '';
    public activeAppIcon = '';
    public compareWarning = false;
    public searchSidebarState = 'hidden';
    public currentApp = '';

    @Input() public searchQuery = '';

    constructor(
        public appShellService: AppShellService, 
        public searchService: SearchService,
        private ref: ChangeDetectorRef,
        private route: ActivatedRoute) { 
        }

    public ngOnInit(): void {
        this.appShellService.currentTitle$.subscribe(title => { this.title = title;
            this.ref.detectChanges();
        });
        this.appShellService.currentIcon$.subscribe(icon => { this.appIcon = icon;
            this.ref.detectChanges();
        });
        this.appShellService.currentApp$.subscribe(icon => { this.activeAppIcon = icon;
            this.ref.detectChanges();
        });
        this.searchService.searchState$.subscribe(state => { this.searchSidebarState = state;
            this.ref.detectChanges();
        });
        this.searchService.compareWarning$.subscribe(state => { this.compareWarning = state;
            this.ref.detectChanges();
        });
        this.route.queryParams.subscribe(
            params => {
                this.currentApp =  params['app'];
            }
        )
    }

    public get checkifSearch(): boolean {
        return this.title === 'Search';
    }

    toggleSearchSidebar() {
        this.searchSidebarState == 'hidden' ? 
            (this.searchService.setSearchSidebarState('visible'),
            this.appShellService.setActiveAppNav('search')) : 
            (this.searchService.setSearchSidebarState('hidden'),
            this.appShellService.setActiveAppNav(this.currentApp));
    }

    closeSearchSidebar() {
            this.searchService.setSearchSidebarState('hidden');
            this.appShellService.setActiveAppNav(this.currentApp);
    }
}
