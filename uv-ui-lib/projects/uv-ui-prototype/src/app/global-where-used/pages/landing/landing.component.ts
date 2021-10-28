import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileViewerService } from '../../../services/profile-viewer.service';
import { StepsService } from '../../../services/steps.service';

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
        private stepsService: StepsService, 
        private route: ActivatedRoute, 
        private router: Router,
        private profileViewerService: ProfileViewerService) {}

    ngOnInit(): void {
        this.stepsService.onCancelWizard$.subscribe(value => this.projectWizard = value);
        this.projectWizard = false;
        this.profileViewerService.currentPage$.subscribe(value => 
            this.currentProfileViewerPage = value.toString()
        );
        this.profileViewerService.pages$.subscribe(value => 
            this.profileViewerPageLength = value.length.toString()
        );
        this.route.queryParams.subscribe(params => {
            this.activeService = params['service'];
        });
    }

    public columnView(count: number) {
        this.profileViewerService.setCurrentColumnCount(count);
        this.columnCount = count;
        this.router.navigate([], { queryParams: { service: 'profile', columnCount : this.columnCount }});
    }
}
