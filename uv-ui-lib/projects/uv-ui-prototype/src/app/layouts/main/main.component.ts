import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { AppShellService } from '../../services/app-shell.service';
import { navItems } from './navItems';
import { SlideInOutAnimation } from '../../animations';

@Component({
    selector: 'prototype-app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    animations: [SlideInOutAnimation],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainComponent implements OnInit {

    public navlinks = navItems;
    public title = '';
    public appIcon = '';
    public activeAppIcon = '';
    public compareWarning = false;
    // animationState = 'out';
    @Input() public searchQuery = '';
    @Input() showSearchSidebar = false;

    constructor(
        public appShellService: AppShellService, 
        private ref: ChangeDetectorRef) { }

    public ngOnInit(): void {
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
    }

    public get checkifSearch(): boolean {
        return this.title === 'Search';
    }

    consoleLog(item: { app: string; icon: string; active: boolean; navlink: string; }){
        console.log(item.active);
    }

    toggleSearchSidebar() {
        this.showSearchSidebar = !this.showSearchSidebar;
        // console.log(this.animationState);
    //   this.animationState = this.animationState === 'out' ? 'in' : 'out';
    //   console.log(this.animationState);
    }

    ngOnChanges(): void {
    }
}
