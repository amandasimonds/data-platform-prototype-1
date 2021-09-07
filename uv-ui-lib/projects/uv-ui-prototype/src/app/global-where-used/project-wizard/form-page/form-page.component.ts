import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StepModel } from '../../../models/step.model';
import { Observable } from 'rxjs';
import { StepsService } from '../../../services/steps.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormPageComponent implements OnInit {
  currentStep: Observable<StepModel>;

  constructor(
    private stepsService: StepsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentStep = this.stepsService.getCurrentStep();
  }

  onNextStep() {
    if (!this.stepsService.isLastStep()) {
      this.stepsService.moveToNextStep();
    } else {
      this.onSubmit();
    }
  }

  showButtonLabel() {
    return !this.stepsService.isLastStep() ? 'Continue' : 'Finish';
  }

  cancelWizard() {
    this.stepsService.resetWizard();
    this.router.navigate(['/main/gwu']);
  }

  onSubmit(): void {
    this.stepsService.resetWizard();
    //TODO: add logic to save project to project list (use local storage?)
    this.router.navigate(['/main/gwu']);
  }
}
