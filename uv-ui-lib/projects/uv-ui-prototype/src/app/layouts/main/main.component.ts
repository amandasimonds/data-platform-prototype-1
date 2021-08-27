import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { AppShellService } from '../../services/app-shell.service';
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
    public appIcon = '';
    public activeAppIcon = '';
    @Input() public searchQuery = '';

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
}
