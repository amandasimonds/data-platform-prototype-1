import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StepModel } from '../../models/step.model';
import { SbsWizardDataModel } from './sbs-wizard-data.model';
import { SearchResult } from '../../search/models/search-result.model';
import { ILocation } from './step-one/locations';

const STEPS = [
    { stepIndex: 1, isComplete: false, title: 'Title of Step 1', description: '' },
    { stepIndex: 2, isComplete: false, title: 'Title of Step 2', description: '' },
    { stepIndex: 3, isComplete: false, title: 'Title of Step 3', description: '' }
];

@Injectable()
export class SbsWizardService {

    public emptyEntity: SearchResult = {
        category: '',
        title: '',
        description: '',
        active: false,
        disabled: false,
        date: '',
        formattedDate: ''
    }

    public wizardData: SbsWizardDataModel = {
        locations: [],
        goal: '',
        focus: '',
        entity: this.emptyEntity,
        stepOneComplete: false,
        stepTwoComplete: false,
        stepThreeComplete: false,
        stepOneSkip: false,
        stepTwoSkip: false,
        stepThreeSkip: false
    }

    public initialResultsNumber = 2034

    public wizardData$: BehaviorSubject<SbsWizardDataModel> = new BehaviorSubject<SbsWizardDataModel>(this.wizardData);
    public steps$: BehaviorSubject<StepModel[]> = new BehaviorSubject<StepModel[]>(STEPS);
    public currentStep$: BehaviorSubject<StepModel> = new BehaviorSubject<StepModel>(null);
    public onCancelWizard$ = new BehaviorSubject(false);
    public results$ = new BehaviorSubject<number>(this.initialResultsNumber);
    
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

    public getWizardData(): Observable<SbsWizardDataModel> {
        return this.wizardData$.asObservable();
    }

    public getResults(): Observable<number> {
        return this.results$.asObservable();
    }

    public updateResults(value: number) {
        this.results$.next(this.results$.value - value);
    }

    public updateWizardData(property: string, value: any) {
        const wizardDataObject = this.wizardData$.value;
        if (property !== 'location') {
            this.wizardData$.next(
                Object.defineProperty(wizardDataObject, property, {value : value}));
        } else {
            wizardDataObject.locations.push(value);
        }
        console.log('update', this.wizardData$.value);
    }

    public unselectLocation(item: ILocation, i: number) {
        const wizardDataObject = this.wizardData$.value;
        wizardDataObject.locations.splice(i, 1);
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
        if (wizardData.value.locations !== []) {
            wizardData.value.stepOneComplete = true;
            this.steps$.value[0].isComplete = true;
        } else {
            this.steps$.value[0].isComplete = false;
        }
    }

    public checkIfStep2Complete() {
        const wizardData = this.wizardData$;
        if (wizardData.value.goal !== '') {
            wizardData.value.stepTwoComplete = true;
            this.steps$.value[1].isComplete = true;
        } else {
            wizardData.value.stepTwoComplete = false;
            this.steps$.value[1].isComplete = false;
        }
    }

    public checkIfStep3Complete() {
        const data = this.wizardData$.value;
        if (data.focus !== '') {
            data.stepTwoComplete = true;
            this.steps$.value[2].isComplete = true;
        } else {
            data.stepTwoComplete = false;
            this.steps$.value[2].isComplete = false;
        }
    }

    public resetWizard(): void {
        for (const step of STEPS) {
            step.isComplete = false;
        }
        this.setCurrentStep(this.steps$.value[0]);
        this.wizardData$.next({
            locations: [],
            goal: '',
            focus: '',
            entity: this.emptyEntity,
            stepOneComplete: false,
            stepTwoComplete: false,
            stepThreeComplete: false,
            stepOneSkip: false,
            stepTwoSkip: false,
            stepThreeSkip: false
        });
        this.results$.next(this.initialResultsNumber);
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
