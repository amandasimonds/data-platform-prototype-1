import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

    public columnView(count: number) {
        this.profileViewerService.setCurrentColumnCount(count);
    }

    constructor(private stepsService: StepsService, private route: ActivatedRoute, private profileViewerService: ProfileViewerService) {}

    ngOnInit(): void {
        this.stepsService.onCancelWizard$.subscribe(value => this.projectWizard = value);
        this.projectWizard = false;
        this.route.queryParams.subscribe(params => {
            this.activeService = params['service'];
        });
    }

}
