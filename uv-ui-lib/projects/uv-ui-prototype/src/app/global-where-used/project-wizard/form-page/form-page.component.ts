import { Location } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { StepModel } from '../../../models/step.model';
import { WizardDataModel } from '../../../models/wizard-data.model';
import { NgOnDestroyService } from '../../../services/on-destroy.service';
import { WizardService } from '../../wizard.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormPageComponent implements OnInit {

  public currentStep: Observable<StepModel>;
  @Output() public onSubmitEvent = new EventEmitter();
  public currentStepNumber: StepModel;
  public wizardData: WizardDataModel
  public wizardMode = '';
  public resultsNumber = 0;

  constructor(
    private wizardService: WizardService,
    private destroy$: NgOnDestroyService,
    private ref: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  public ngOnInit(): void {
    this.currentStep = this.wizardService.getCurrentStep();
    combineLatest([
        this.wizardService.currentStep$.pipe(tap(value => this.currentStepNumber = value)),
        this.wizardService.wizardData$.pipe(tap(data => this.wizardData = data)),
        this.wizardService.results$.pipe(tap(value => this.resultsNumber = value)),
        this.route.queryParams.pipe(tap(queryParams => this.wizardMode = queryParams['wizardMode']))
    ])
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => this.ref.detectChanges());
  }

  ngAfterViewChecked(): void {
    this.ref.detectChanges()
  }

  public get totalResults(): string{
    return this.resultsNumber > 0 ? Math.round(this.resultsNumber).toString() : 'No results'
  }

  public get wizardModeFullscreen() {
    return this.wizardMode === 'fullscreen' ? true : false
  }

  public get isLastStep() {
    return this.wizardService.isLastStep();
  }

  public onNextStep(): void {
    if (!this.wizardService.isLastStep()) {
      this.wizardService.moveToNextStep();
    } else {
      this.onSubmit();
    }
  }

  public onBackStep(): void {
      this.wizardService.moveBackStep();
  }

  public getButtonLabel(): string {
    return this.wizardService.isLastStep() ? 'Finish' : 'Next';
  }

  public onSkipStep(): void {
    const data = this.wizardData;
    switch (this.currentStepNumber.stepIndex){
        case 1:
            this.wizardService.updateWizardData('stepOneSkip', true);
            this.wizardService.updateWizardData('stepOneComplete', false);
            break;
        case 2:
            this.wizardService.updateWizardData('stepTwoSkip', true);
            this.wizardService.updateWizardData('stepTwoComplete', false);
            break;
        case 3:
            this.wizardService.updateWizardData('stepThreeSkip', true);
            this.wizardService.updateWizardData('stepThreeComplete', false);
            break;
    }

    if (data.stepOneSkip && data.stepTwoSkip) {
        console.log('skipped step 1 and 2');
        this.wizardService.cancelWizard();
        this.router.navigate(['main/gwu/wave'], { queryParams: {service: 'wave'}})
    }
    if (data.stepOneSkip && data.stepTwoSkip && data.stepThreeSkip) {
        console.log('go to GWU');
        this.wizardService.cancelWizard();
        this.router.navigate(['main/gwu'], { queryParams: {service: 'wave'}})
    } else {
        this.onNextStep();
    }
  }

  public cancelWizard(): void {
    this.wizardService.resetWizard();
    this.wizardService.cancelWizard();
    this.wizardModeFullscreen ? this.location.back() : null;
  }

  public onSubmit(): void {
    this.onSubmitEvent.emit();
    this.router.navigate(['/main/gwu'], { queryParams: {service: 'wave'}})
  }
}
