import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, Event, RouterEvent } from '@angular/router';
import { combineLatest } from 'rxjs';
import { filter, takeUntil, tap } from 'rxjs/operators';
import { NgOnDestroyService } from '../../../services/on-destroy.service';
import { ProfileViewerService } from '../../profile-viewer.service';
import { UserService } from '../../../auth/user.service';
import { WizardService } from '../../wizard.service';
import { TabLink } from 'epd-pattern-library/lib/dynamic-bar/dynamic-bar.model';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent {

    public expandActionBar = false;
    public projectWizard = false;
    public activeService = '';
    public currentUser = { id: 1, new: false, name: '' };
    public chevronUser = 'user_chevron@test.com';
    public cumminsUser = 'user_cummins@test.com';
    public activeLink = '';

    public atlasTabs: TabLink[] = [
        {
            link: 'wave',
            label: 'WHFA-196'
        },
        {
            link: 'WHFA-196',
            label: 'Profile'
        }
    ]

    public get isDevUser(): boolean {
        return this.currentUser.name === this.chevronUser || this.currentUser.name === this.cumminsUser ? false : true;
    }

    public get backdropState(): boolean {
        return this.projectWizard ? true : false;
    }

    constructor(
        private stepsService: WizardService,
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private destroy$: NgOnDestroyService,
        private ref: ChangeDetectorRef) {
        router.events.pipe(
            filter((e: Event): e is RouterEvent => e instanceof RouterEvent)
        ).subscribe((e: RouterEvent) => {
            this.activeLink = e.url
        });
    }

    ngOnInit(): void {
        combineLatest([
            this.stepsService.onCancelWizard$.pipe(tap(value => this.projectWizard = value)),
            this.userService.getCurrentUser().pipe(tap(value => this.currentUser = value))
        ]).pipe(
            takeUntil(this.destroy$)
        ).subscribe(() => this.ref.detectChanges());
        this.route.queryParams.subscribe(params => {
            this.activeService = params['service'];
        });
    }
}
