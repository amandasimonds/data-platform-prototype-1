import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { AppShellService } from '../../services/app-shell.service';
import { SearchService } from '../../services/search.service';
import { NgOnDestroyService } from '../../services/on-destroy.service';
import { UserService } from '../../auth/user.service';
import { UvLightService } from '../../services/uv-light.service';
import { navItems } from './navItems';
import { environment } from 'projects/uv-ui-prototype/src/environments/environment';

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
    public chevronUser = 'user_chevron@test.com';
    public cumminsUser = 'user_cummins@test.com';
    public miniWalletOpen = false;
    public walletOpen = false;
    public walletSidebarState = 'visible';
    public subNavbarState = 'navbar-peek';
    public navbarIsExpanded = false;
    public subNavbarIsExpanded = false;

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

    public get headerIsHighlight(): boolean {
        return this.currentHighlight === 'header';
    }

    public handleNavlinkAction(item: string) {
        item === 'search' ? this.toggleSearchSidebar() : this.closeSearchSidebar();
    }

    constructor(
        public appShellService: AppShellService,
        public searchService: SearchService,
        private ref: ChangeDetectorRef,
        private route: ActivatedRoute,
        private router: Router,
        private destroy$: NgOnDestroyService,
        private userService: UserService,
        private uvlService: UvLightService) {
        }

    public ngOnInit(): void {
        this.userService.updateUserName();
        combineLatest([
            this.appShellService.currentAppTitle$.pipe(tap(title => this.title = title)),
            this.appShellService.currentAppHeaderIcon$.pipe(tap(icon => this.headerIcon = icon)),
            this.appShellService.currentAppNavIcon$.pipe(tap(icon => this.navActiveIcon = icon)),
            this.searchService.searchState$.pipe(tap(state => this.searchSidebarState = state)),
            this.searchService.compareWarning$.pipe(tap(state => this.compareWarning = state)),
            this.userService.getCurrentUser().pipe(tap(user => this.currentUser = user)),
            this.uvlService.getCurrentHighlight().pipe(tap(highlight => this.currentHighlight = highlight))
        ]).pipe(
            takeUntil(this.destroy$)
        ).subscribe(() => this.ref.detectChanges());
        this.route.queryParams.subscribe(
            params => {
                this.currentApp =  params['app'];
            }
        );
    }

    public get checkifDashboard(): boolean {
        return this.title === 'Dashboard';
    }

    public get isDevUser(): boolean {
        return this.currentUser.name === this.chevronUser || this.currentUser.name === this.cumminsUser ? false : true;
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

    public launchWizard(): void {
        if (this.currentApp === 'sbs' || this.currentUser.name === 'user_chevron@test.com') {
            console.log('sbs', this.currentUser);
            this.router.navigate(['sbs/wizard'], {relativeTo: this.route, queryParams: {wizardMode: 'fullscreen', app: 'sbs'}});
        } else if (this.currentApp === 'gwu' || this.currentUser.name === 'user_cummins@test.com') {
            this.router.navigate(['gwu/wizard'], {relativeTo: this.route, queryParams: {wizardMode: 'fullscreen',  app: 'gwu'}});
        } else {
            console.log('default', this.currentUser);
            this.router.navigate(['gwu/wizard'], {relativeTo: this.route, queryParams: {wizardMode: 'fullscreen',  app: 'gwu'}});
        }
    }

    public logout() {
        localStorage.clear();
        window.location.href = `${environment.authConfig.authority}/v2/logout?federated`;
        this.router.navigate(['/logout']);
    }
    
    public closeCompareWarning(): void {
        this.compareWarning = false;
    }

    public toggleWallet() {
        setTimeout(() => {this.miniWalletOpen = !this.miniWalletOpen;}, 100);
        this.walletOpen = !this.walletOpen;
    }

    public toggleWalletSidebar() {
        console.log('full wallet toggle', this.walletSidebarState);
        this.miniWalletOpen = false;
        this.walletSidebarState === 'visible' ? this.walletSidebarState = 'hidden' : this.walletSidebarState = 'visible';
    }

    public toggleSubNavbar() {
        this.subNavbarIsExpanded = !this.subNavbarIsExpanded;
    }

    public toggleExpandNavbar() {
        this.navbarIsExpanded = !this.navbarIsExpanded;
    }
}
