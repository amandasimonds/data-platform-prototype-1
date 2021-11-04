import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StepModel } from '../models/step.model';
import { WizardDataModel } from '../models/wizard-data.model';
import { SearchResult } from '../search/models/search-result.model';

const STEPS = [
    { stepIndex: 1, isComplete: false },
    { stepIndex: 2, isComplete: false },
    { stepIndex: 3, isComplete: false }
];

@Injectable()
export class WizardService {

    public emptyEntity: SearchResult = {
        category: '',
        title: '',
        description: '',
        active: false,
        disabled: false,
        date: '',
        formattedDate: ''
    }

    public wizardData = {
        role: '',
        goal: '',
        entity: this.emptyEntity,
        filter1: 0,
        filter2: 0,
        filter3: 0,
        stepOneComplete: false,
        stepTwoComplete: false,
        stepThreeComplete: false,
        stepOneSkip: false,
        stepTwoSkip: false,
        stepThreeSkip: false,
    }

    public wizardData$: BehaviorSubject<WizardDataModel> = new BehaviorSubject<WizardDataModel>(this.wizardData);
    public steps$: BehaviorSubject<StepModel[]> = new BehaviorSubject<StepModel[]>(STEPS);
    public currentStep$: BehaviorSubject<StepModel> = new BehaviorSubject<StepModel>(null);
    public onCancelWizard$ = new BehaviorSubject(false);
    

    constructor() {
        this.currentStep$.next(this.steps$.value[0]);
    }

    public setCurrentStep(step: StepModel): void {
        this.currentStep$.next(step);
    }

    public getCurrentStep(): Observable<StepModel> {
        return this.currentStep$.asObservable();
    }

    public getSteps(): Observable<StepModel[]> {
        return this.steps$.asObservable();
    }

    public getWizardData(): Observable<WizardDataModel> {
        return this.wizardData$.asObservable();
    }

    public updateWizardData(property: string, value: any) {
        const wizardDataObject = this.wizardData$.value;
        this.wizardData$.next(
            Object.defineProperty(wizardDataObject, property, {value : value})
        )
        console.log('update', this.wizardData$.value);
    }

    public moveToNextStep(): void {
        const index = this.currentStep$.value.stepIndex;
        if (index < this.steps$.value.length) {
            this.currentStep$.next(this.steps$.value[index]);
        }
    }

    public moveBackStep(): void {
        const index = this.currentStep$.value.stepIndex;
        this.currentStep$.next(this.steps$.value[index - 2]);
    }

    public checkIfStep1Complete() {
        const wizardData = this.wizardData$;
        if (wizardData.value.goal !== '' && wizardData.value.role !== '') {
            wizardData.value.stepOneComplete = true;
            this.steps$.value[0].isComplete = true;
        } else {
            this.steps$.value[0].isComplete = false;
        }
    }

    public checkIfStep2Complete() {
        const wizardData = this.wizardData$;
        if (wizardData.value.entity === this.emptyEntity || wizardData.value.entity === null) {
            wizardData.value.stepTwoComplete = false;
            this.steps$.value[1].isComplete = false;
        } else {
            wizardData.value.stepTwoComplete = true;
            this.steps$.value[1].isComplete = true;
        }
    }

    public checkIfStep3Complete() {
        const data = this.wizardData$.value;
        if (data.filter1 === null && data.filter2 === null && data.filter3 === null) {
            data.stepTwoComplete = false;
            this.steps$.value[2].isComplete = false;
        } else {
            data.stepTwoComplete = true;
            this.steps$.value[2].isComplete = true;
        }
    }

    public resetWizard(): void {
        for (const step of STEPS) {
            step.isComplete = false;
        }
        this.setCurrentStep(this.steps$.value[0]);
        this.wizardData$.next({
            role: '',
            goal: '',
            entity: this.emptyEntity,
            filter1: 0,
            filter2: 0,
            filter3: 0,
            stepOneComplete: false,
            stepTwoComplete: false,
            stepThreeComplete: false,
            stepOneSkip: false,
            stepTwoSkip: false,
            stepThreeSkip: false,
        });
        console.log('reset wizard');
    }

    public isLastStep(): boolean {
        return this.currentStep$.value.stepIndex === this.steps$.value.length;
    }

    public cancelWizard(): void {
        this.onCancelWizard$.next(false);
        this.resetWizard();
    }
}
