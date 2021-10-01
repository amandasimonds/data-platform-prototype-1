import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StepModel } from '../../../models/step.model';
import { StepsService } from '../../../services/steps.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormPageComponent implements OnInit {
  public currentStep: Observable<StepModel>;

  constructor(
    private stepsService: StepsService,
    private router: Router
    ) { }

  public ngOnInit(): void {
    this.currentStep = this.stepsService.getCurrentStep();
  }

  public onNextStep(): void {
    if (!this.stepsService.isLastStep()) {
      this.stepsService.moveToNextStep();
    } else {
      this.onSubmit();
    }
  }

  public showButtonLabel(): string {
    return !this.stepsService.isLastStep() ? 'Next' : 'Finish';
  }

  public cancelWizard(): void {
    this.stepsService.resetWizard();
    this.router.navigate(['/main/gwu']);
  }

  public onSubmit(): void {
    this.stepsService.resetWizard();
    console.log('submit');
    this.router.navigate(['/main/gwu/project-wizard/launch']);
  }
}
