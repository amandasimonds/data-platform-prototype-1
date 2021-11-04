import { Location } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { StepModel } from '../../../models/step.model';
import { WizardDataModel } from '../../../models/wizard-data.model';
import { allSearchResults } from '../../../search/search-results/sample-search-results/allSearchResults';
import { NgOnDestroyService } from '../../../services/on-destroy.service';
import { WizardService } from '../../../services/wizard.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormPageComponent implements OnInit {

  public currentStep: Observable<StepModel>;
  @Output() public onSubmitEvent = new EventEmitter();
  @Input() public totalResultsnumber = allSearchResults.length;
  public currentStepNumber: StepModel;
  public wizardData: WizardDataModel
  public wizardMode = '';

  public get wizardModeFullscreen() {
    return this.wizardMode === 'fullscreen' ? true : false
  }

  constructor(
    private stepsService: WizardService,
    private destroy$: NgOnDestroyService,
    private ref: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  public ngOnInit(): void {
    this.currentStep = this.stepsService.getCurrentStep();
    combineLatest([
        this.stepsService.currentStep$.pipe(tap(value => this.currentStepNumber = value)),
        this.stepsService.wizardData$.pipe(tap(data => this.wizardData = data)),
        this.route.queryParams.pipe(tap(queryParams => this.wizardMode = queryParams['wizardMode']))
    ])
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => this.ref.detectChanges());
  }

  ngAfterViewChecked(): void {
    this.ref.detectChanges()
  }

  public onNextStep(): void {
    if (!this.stepsService.isLastStep()) {
      this.stepsService.moveToNextStep();
    } else {
      this.onSubmit();
    }
  }

  public onBackStep(): void {
      this.stepsService.moveBackStep();
  }

  public getButtonLabel(): string {
    return this.stepsService.isLastStep() ? 'Finish' : 'Next';
  }

  public onSkipStep(): void {
    const data = this.wizardData;
    switch (this.currentStepNumber.stepIndex){
        case 1:
            this.stepsService.updateWizardData('stepOneSkip', true);
            this.stepsService.updateWizardData('stepOneComplete', false);
            break;
        case 2:
            this.stepsService.updateWizardData('stepTwoSkip', true);
            this.stepsService.updateWizardData('stepTwoComplete', false);
            break;
        case 3:
            this.stepsService.updateWizardData('stepThreeSkip', true);
            this.stepsService.updateWizardData('stepThreeComplete', false);
            break;
    }

    if (data.stepOneSkip && data.stepTwoSkip) {
        console.log('skipped step 1 and 2');
        this.stepsService.cancelWizard();
        this.router.navigate(['main/gwu/wave'], { queryParams: {service: 'wave'}})
    }
    if (data.stepOneSkip && data.stepTwoSkip && data.stepThreeSkip) {
        console.log('go to GWU');
        this.stepsService.cancelWizard();
        this.router.navigate(['main/gwu'], { queryParams: {service: 'wave'}})
    } else {
        this.onNextStep();
    }
  }

  public cancelWizard(): void {
    this.stepsService.resetWizard();
    this.stepsService.cancelWizard();
    this.wizardModeFullscreen ? this.location.back() : null;
  }

  public onSubmit(): void {
    this.onSubmitEvent.emit();
    this.router.navigate(['/main/gwu'], { queryParams: {service: 'wave'}})
  }
}
