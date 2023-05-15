import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WizardService } from '../../wizard.service';

@Component({
  selector: 'app-wizard-container',
  templateUrl: './wizard-container.component.html',
  styleUrls: ['./wizard-container.component.scss', '../../global-where-used.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WizardContainerComponent {

    public wizardStart = true;
    public wizardSteps = false;
    public launchPoint = false;
    public wizardMode = '';

    constructor(
        private stepsService: WizardService, 
        private router: Router, 
        private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe(queryParams => this.wizardMode = queryParams['wizardMode'])
    }

    public startWizard() {
        this.wizardStart = false;
        this.wizardSteps = true;
    }

    public cancelWizard() {
        this.stepsService.cancelWizard();
    }

    public startLaunchPoint() {
        this.wizardSteps = false;
        this.launchPoint = true;
    }
}
