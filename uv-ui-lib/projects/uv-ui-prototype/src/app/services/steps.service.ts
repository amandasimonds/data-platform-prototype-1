import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StepModel } from '../models/step.model';
import { WizardDataModel } from '../models/wizard-data.model';
import { allSearchResults } from '../search/search-results/sample-search-results/allSearchResults';

const STEPS = [
    { stepIndex: 1, isComplete: false },
    { stepIndex: 2, isComplete: false },
    { stepIndex: 3, isComplete: false }
];

const wizardData = {
    role: '',
    goal: '',
    entity: allSearchResults[1],
    filter1: 0,
    filter2: 0,
    filter3: 0
}

@Injectable()
export class StepsService {

    public wizardData$: BehaviorSubject<WizardDataModel> = new BehaviorSubject<WizardDataModel>(wizardData);
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
        console.log(this.wizardData$.value);
    }

    public moveToNextStep(): void {
        const index = this.currentStep$.value.stepIndex;

        if (index < this.steps$.value.length) {
        this.currentStep$.next(this.steps$.value[index]);
        }
    }

    public resetWizard(): void {
        for (const step of STEPS) {
            step.isComplete = false;
        }
        this.setCurrentStep(this.steps$.value[0]);
    }

    public isLastStep(): boolean {
        return this.currentStep$.value.stepIndex === this.steps$.value.length;
    }

    public cancelWizard() {
        this.onCancelWizard$.next(false);
    }
}
