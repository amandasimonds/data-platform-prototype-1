import { Component, ChangeDetectionStrategy } from '@angular/core';
import { StepsService } from '../../../services/steps.service';

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

    constructor(private stepsService: StepsService) {}

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
