import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { AppShellService } from '../../services/app-shell.service';
import { SearchService } from '../../services/search.service';
import { NgOnDestroyService } from '../../services/on-destroy.service';
import { UvLightService } from '../../services/uv-light.service';
import { navItems } from './navItems';
import { settingsNavlinks } from '../../settings/settingsNavLinks';
import { IUser } from '../../models/user.model';
import { ToastMessageService } from '../../services/toast-message.service';
import { WalletService } from '../../services/wallet.service';
import { ProfileService } from '../../services/profile.service';

@Component({
    selector: 'prototype-app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
    public navlinks = navItems;
    public settingsNavlinks = settingsNavlinks;
    public title = '';
    public headerIcon = '';
    public navActiveIcon = '';
    public compareWarning = false;
    public searchSidebarState = 'hidden';
    public profileSlideOutState = 'hidden';
    public currentApp = '';
    public currentService = '';
    public currentUser: IUser = { id: 1, new: false, name: '' };
    public currentHighlight = '';
    public uvLight = false;
    public selectedItem = '';
    public miniWalletOpen = false;
    public walletIsOpen = false;
    public walletSidebarState = 'hidden';
    public subNavbarState = 'navbar-peek';
    public navbarIsExpanded = false;
    public subNavbarIsExpanded = false;
    public subNavbar2IsExpanded = false;
    public displayToastMessage = false;
    public toastMessageText = '';

    @Input() public searchQuery = '';

    public get backdropIsVisible(): boolean {
        return this.searchSidebarState === 'hidden' ? false : true;
    }

    public get headerIsHighlight(): boolean {
        return this.currentHighlight === 'header';
    }

    public get checkifDashboard(): boolean {
        return this.title === 'Dashboard';
    }

    public get isDevUser(): boolean {
        return true;
    }

    public get isCreatingConnector(): boolean {
        return this.currentService === 'connector-creator';
    }

    public get isInService(): boolean {
        return this.currentApp !== 'home-splash';
    }

    constructor(
        public appShellService: AppShellService,
        public searchService: SearchService,
        public profileService: ProfileService,
        private walletService: WalletService,
        private ref: ChangeDetectorRef,
        private route: ActivatedRoute,
        private router: Router,
        private destroy$: NgOnDestroyService,
        private toastMessageService: ToastMessageService,
        private uvlService: UvLightService
    ) {}

    public ngOnInit(): void {
        combineLatest([
            this.appShellService.currentAppTitle$.pipe(tap((title) => (this.title = title))),
            this.appShellService.currentAppHeaderIcon$.pipe(tap((icon) => (this.headerIcon = icon))),
            this.appShellService.currentAppNavIcon$.pipe(tap((icon) => (this.navActiveIcon = icon))),
            this.toastMessageService.message$.pipe(tap((message) => (this.toastMessageText = message))),
            this.toastMessageService.triggerToast$.pipe(tap((trigger) => (this.displayToastMessage = trigger))),
            this.searchService.searchState$.pipe(tap((state) => (this.searchSidebarState = state))),
            this.profileService.profileSlideOutState$.pipe(tap((state) => (this.profileSlideOutState = state))),
            this.searchService.compareWarning$.pipe(tap((state) => (this.compareWarning = state))),
            this.uvlService.getCurrentHighlight().pipe(tap((highlight) => (this.currentHighlight = highlight))),
            this.walletService.walletIsOpen$.pipe(tap((isOpen) => (this.walletIsOpen = isOpen))),
            this.route.queryParams.pipe(
                tap((params) => {
                    this.currentApp = params['app'];
                    this.currentService = params['service'];
                })
            ),
        ])
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.ref.detectChanges());
    }

    public handleNavlinkAction(item: string) {
        item === 'search' ? this.toggleSearchSidebar() : this.closeSearchSidebar();
    }

    public toggleSearchSidebar(): void {
        this.searchSidebarState === 'hidden'
            ? (this.searchService.setSearchSidebarState('visible'), this.appShellService.setNavIcon('search'))
            : (this.searchService.setSearchSidebarState('hidden'), this.appShellService.setNavIcon(this.currentApp));
    }

    public onProfileClose() {
        this.profileSlideOutState = 'hidden';
        this.profileService.setProfileSlideOutState('hidden');
    }

    public toggleUvLight(): void {
        this.uvLight = !this.uvLight;
    }

    public closeSearchSidebar(): void {
        this.searchService.setSearchSidebarState('hidden');
        this.appShellService.setNavIcon(this.currentApp);
    }

    public launchWizard(): void {
        if (this.currentApp === 'sbs') {
            console.log('sbs', this.currentUser);
            this.router.navigate(['sbs/wizard'], {
                relativeTo: this.route,
                queryParams: { wizardMode: 'fullscreen', app: 'sbs' },
            });
        } else if (this.currentApp === 'graph') {
            this.router.navigate(['graph/wizard'], {
                relativeTo: this.route,
                queryParams: { wizardMode: 'fullscreen', app: 'graph' },
            });
        } else {
            this.router.navigate(['graph/wizard'], {
                relativeTo: this.route,
                queryParams: { wizardMode: 'fullscreen', app: 'graph' },
            });
        }
    }

    public logout() {
        localStorage.clear();
        this.router.navigate(['/logout']);
    }

    public closeCompareWarning(): void {
        this.compareWarning = false;
    }

    public toggleWallet() {
        if (!this.miniWalletOpen) {
            setTimeout(() => {
                this.miniWalletOpen = true;
                // this.walletService.setWalletIsOpen(false);
            }, 150);
        } else if (this.miniWalletOpen) {
            this.miniWalletOpen = false;
        }
        this.walletSidebarState = 'hidden';
        this.walletService.setWalletIsOpen(this.walletSidebarState === 'visible' || !this.walletIsOpen ? true : false);
    }

    public toggleWalletSidebar() {
        this.miniWalletOpen = false;
        this.walletSidebarState === 'visible'
            ? (this.walletSidebarState = 'hidden')
            : (this.walletSidebarState = 'visible');
        this.walletService.setWalletIsOpen(this.walletSidebarState === 'visible' || !this.walletIsOpen ? true : false);
    }

    public toggleSubNavbar() {
        console.log('toggling on main');
        this.subNavbarIsExpanded = !this.subNavbarIsExpanded;
    }

    public toggleSubNavbar2() {
        this.subNavbar2IsExpanded = !this.subNavbar2IsExpanded;
    }

    public toggleExpandNavbar() {
        this.navbarIsExpanded = !this.navbarIsExpanded;
    }
}

