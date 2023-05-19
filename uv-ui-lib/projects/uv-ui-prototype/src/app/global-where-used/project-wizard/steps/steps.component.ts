import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { StepModel } from '../../../models/step.model';
import { SbsWizardService } from '../../../side-by-side/wizard/sbs-wizard.service';
import { WizardService } from '../../wizard.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepsComponent implements OnInit {

    public steps: Observable<StepModel[]>;
    public currentStep: Observable<StepModel>;
    @Input() public wizardModeIsFullscreen = false;
    public app = '';

    constructor(
        private gwuWizardService: WizardService, 
        private sbsWizardService: SbsWizardService,
        private route: ActivatedRoute) { }

    public ngOnInit(): void {
        this.route.queryParams.subscribe(queryParams => {
            this.app = queryParams['app']});
        
        this.isGwu ? this.steps = this.gwuWizardService.getSteps() : this.steps = this.sbsWizardService.getSteps();
        this.isGwu ? this.currentStep = this.gwuWizardService.getCurrentStep() : this.currentStep = this.sbsWizardService.getCurrentStep();
    }

    public get isGwu() {
        return this.app === 'graph';
    }

    public onStepClick(step: StepModel): void {
        this.isGwu ?
        this.gwuWizardService.setCurrentStep(step) :
        this.sbsWizardService.setCurrentStep(step);
    }

    public cancelWizard(): void {
        this.gwuWizardService.resetWizard();
        this.gwuWizardService.cancelWizard();
    }
}
