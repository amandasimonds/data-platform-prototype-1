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

@Injectable()
export class StepsService {

    public wizardData = {
        role: '',
        goal: '',
        entity: allSearchResults[1],
        filter1: 0,
        filter2: 0,
        filter3: 0
    }

    @Output() public stepisCompleteEvent = new EventEmitter<boolean>();
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
        console.log(property, value);
        const wizardDataObject = this.wizardData$.value;
        this.wizardData$.next(
            Object.defineProperty(wizardDataObject, property, {value : value})
        )
        console.log('new', this.wizardData$.value);
    }

    public moveToNextStep(): void {
        const index = this.currentStep$.value.stepIndex;
        if (index < this.steps$.value.length) {
        this.currentStep$.next(this.steps$.value[index]);
        }
    }

    public checkIfComplete() {
        const wizardData = this.wizardData$;
        console.log('isComplete', wizardData);
        if (wizardData.value.goal !== '' && wizardData.value.role !== '') {
            this.stepisCompleteEvent.emit(true);
            console.log('emitted');
        } else {
            return
        }
    }

    public resetWizard(): void {
        for (const step of STEPS) {
            step.isComplete = false;
        }
        this.setCurrentStep(this.steps$.value[0]);
        this.wizardData$.next(
           this.wizardData
        )
    }

    public isLastStep(): boolean {
        return this.currentStep$.value.stepIndex === this.steps$.value.length;
    }

    public cancelWizard(): void {
        this.onCancelWizard$.next(false);
        this.resetWizard();
    }
}
