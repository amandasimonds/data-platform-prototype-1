import { Location } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { StepModel } from '../../../models/step.model';
import { WizardDataModel } from '../../../models/wizard-data.model';
import { NgOnDestroyService } from '../../../services/on-destroy.service';
import { SbsWizardDataModel } from '../../../side-by-side/wizard/sbs-wizard-data.model';
import { SbsWizardService } from '../../../side-by-side/wizard/sbs-wizard.service';
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
  public wizardData: WizardDataModel;
  public sbsWizardData: SbsWizardDataModel;
  public wizardMode = '';
  public resultsNumber = 0;
  public app = '';

  constructor(
    private wizardService: WizardService,
    private sbsWizardService: SbsWizardService,
    private destroy$: NgOnDestroyService,
    private ref: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  public ngOnInit(): void {
    combineLatest([
         this.route.queryParams.pipe(tap(queryParams => {
            this.wizardMode = queryParams['wizardMode'],
            this.app = queryParams['app']})),
        this.wizardService.currentStep$.pipe(tap(value => this.currentStepNumber = value)),
        this.sbsWizardService.currentStep$.pipe(tap(value => this.currentStepNumber = value)),
        this.wizardService.wizardData$.pipe(tap(data => this.wizardData = data)),
        this.sbsWizardService.wizardData$.pipe(tap(data => this.sbsWizardData = data)),
        this.wizardService.results$.pipe(tap(value => this.resultsNumber = value)),
        this.sbsWizardService.results$.pipe(tap(value => this.resultsNumber = value)),
       
    ])
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => this.ref.detectChanges());
    if (this.isGwu) {
        this.currentStep = this.wizardService.getCurrentStep();
    } else {
        this.currentStep = this.sbsWizardService.getCurrentStep();
    } 
  }

  ngAfterViewChecked(): void {
    this.ref.detectChanges()
  }

  public get totalResults(): string{
    return this.resultsNumber > 0 ? Math.round(this.resultsNumber).toString() : 'No results'
  }

  public get wizardModeFullscreen() {
    return this.wizardMode === 'fullscreen';
  }

  public get isLastStep() {
    return this.isGwu ? this.wizardService.isLastStep() : this.sbsWizardService.isLastStep();
  }

  public get isGwu() {
      return this.app === 'gwu';
  }

  public onNextStep(): void {
    if (this.isGwu && !this.wizardService.isLastStep()) {
      this.wizardService.moveToNextStep();
    } else if (!this.isGwu && !this.sbsWizardService.isLastStep()){
        this.sbsWizardService.moveToNextStep();
    } else {
      this.onSubmit();
    }
  }

  public onBackStep(): void {
      this.isGwu ? this.wizardService.moveBackStep() : this.sbsWizardService.moveBackStep();
  }

  public getButtonLabel(): string {
      if (this.isGwu) {
          return this.wizardService.isLastStep() ? 'Finish' : 'Next';
        } else {
            return this.sbsWizardService.isLastStep() ? 'Finish' : 'Next';
        }
  }

  public onSkipStep(): void {
    if (this.isGwu) {  
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

        if (data.stepOneSkip && data.stepTwoSkip || data.stepOneSkip && data.stepTwoSkip && data.stepThreeSkip) {
            this.wizardService.cancelWizard();
            this.router.navigate(['main/gwu/wave'], { queryParams: {service: 'wave'}})
        } else {
            this.onNextStep();
        }
    } else {
        const data = this.sbsWizardData;
        switch (this.currentStepNumber.stepIndex){
            case 1:
                this.sbsWizardService.updateWizardData('stepOneSkip', true);
                this.sbsWizardService.updateWizardData('stepOneComplete', false);
                break;
            case 2:
                this.sbsWizardService.updateWizardData('stepTwoSkip', true);
                this.sbsWizardService.updateWizardData('stepTwoComplete', false);
                break;
            case 3:
                this.sbsWizardService.updateWizardData('stepThreeSkip', true);
                this.sbsWizardService.updateWizardData('stepThreeComplete', false);
                break;
        }

        if (data.stepOneSkip && data.stepTwoSkip) {
            this.sbsWizardService.cancelWizard();
            this.router.navigate(['main/sbs'])
        } else {
            this.onNextStep();
        }
    }
  }

  public cancelWizard(): void {
    this.wizardService.resetWizard();
    this.wizardService.cancelWizard();
    this.wizardModeFullscreen ? this.location.back() : null;
  }

  public onSubmit(): void {
      console.log('submit');
    this.onSubmitEvent.emit();
    if (this.isGwu) {
        this.router.navigate(['/main/gwu'], { queryParams: {service: 'wave'}});
        this.wizardService.resetWizard();
    } else {
        this.router.navigate(['/main/sbs'], { queryParams: {app: 'sbs'}});
        this.sbsWizardService.resetWizard();
    } 
  }
}
