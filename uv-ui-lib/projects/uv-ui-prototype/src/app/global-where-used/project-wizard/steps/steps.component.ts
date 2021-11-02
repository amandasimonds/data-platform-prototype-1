import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StepModel } from '../../../models/step.model';
import { WizardService } from '../../../services/wizard.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepsComponent implements OnInit {

    public steps: Observable<StepModel[]>;
    public currentStep: Observable<StepModel>;

    constructor(private stepsService: WizardService, private router: Router) { }

    public ngOnInit(): void {
        this.steps = this.stepsService.getSteps();
        this.currentStep = this.stepsService.getCurrentStep();
    }

    public onStepClick(step: StepModel): void {
        this.stepsService.setCurrentStep(step);
    }

    public cancelWizard(): void {
        this.stepsService.resetWizard();
        this.stepsService.cancelWizard();
    }
}
