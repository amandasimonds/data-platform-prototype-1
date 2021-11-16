import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { NgOnDestroyService } from '../../../services/on-destroy.service';
import { ProfileViewerService } from '../../profile-viewer.service';
import { UserService } from '../../../services/user.service';
import { WizardService } from '../../wizard.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent {

    public expandActionBar = false;
    public projectWizard = false;
    public activeService = '';
    public columnCount: number = 1;
    public profileViewerPageLength = '';
    public currentProfileViewerPage = '';
    public currentUser = {id: 1, new: false, name: ''};
    public columns = ['1', '2', '3', '4'];

    public get backdropMode(): string {
        return this.projectWizard ? 'popup' : 'hidden';
    }

    public get backdropState(): string {
        return this.projectWizard ? 'visible' : 'hidden';
    }

    public gwuTabs = [
        {
            icon: 'more_horisontal',
            link: '/',
            linkText: 'Link',
            results: ''
        },
        {
            icon: 'more_horisontal',
            link: '/',
            linkText: 'Link',
            results: ''
        },
        {
            icon: 'more_horisontal',
            link: '/',
            linkText: 'Link',
            results: ''
        }
    ];
    
    constructor(
        private stepsService: WizardService, 
        private route: ActivatedRoute, 
        private router: Router,
        private profileViewerService: ProfileViewerService,
        private userService: UserService,
        private destroy$: NgOnDestroyService,
        private ref: ChangeDetectorRef) {}

    ngOnInit(): void {
        combineLatest([
            this.stepsService.onCancelWizard$.pipe(tap(value => this.projectWizard = value)),
            this.profileViewerService.currentPage$.pipe(tap(value => this.currentProfileViewerPage = value.toString())),
            this.profileViewerService.pages$.pipe(tap(value => this.profileViewerPageLength = value.length.toString())),
            this.userService.getCurrentUser().pipe(tap(value => this.currentUser = value))
        ]).pipe(
            takeUntil(this.destroy$)
        ).subscribe(() => this.ref.detectChanges());
        this.route.queryParams.subscribe(params => {
            this.activeService = params['service'];
        });
    }

    public columnView(count: number) {
        this.profileViewerService.setCurrentColumnCount(count);
        this.columnCount = count;
        this.router.navigate([], { queryParams: { service: 'profile', columnCount : this.columnCount }});
    }

    public getClosest(val: number) {
        // return this.columns.reduce(value => (prev, curr) {
        //     // return (Math.abs(curr - val) < Math.abs(prev - val) ? curr : prev);
        //   });
    }
}
