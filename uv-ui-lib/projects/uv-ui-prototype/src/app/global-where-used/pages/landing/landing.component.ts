import { Component, ChangeDetectionStrategy } from '@angular/core';
import { StepsService } from '../../../services/steps.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent {

    public expandActionBar = false;
    public projectWizard = false;

    public get backdropMode(): string {
        return this.projectWizard ? 'popup' : 'hidden';
    }

    public get backdropState(): string {
        return this.projectWizard ? 'visible' : 'hidden';
    }

    public gwuTabs = [
        {
            icon: 'more_dots',
            link: '/',
            linkText: 'Link',
            results: ''
        },
        {
            icon: 'more_dots',
            link: '/',
            linkText: 'Link',
            results: ''
        },
        {
            icon: 'more_dots',
            link: '/',
            linkText: 'Link',
            results: ''
        }
    ];

    constructor(private stepsService: StepsService) {}

    ngOnInit(): void {
        this.stepsService.onCancelWizard$.subscribe(value => this.projectWizard = value);
        this.projectWizard = true;
    }

}
