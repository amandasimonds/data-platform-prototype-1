import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StepModel } from '../models/step.model';

const STEPS = [
    { stepIndex: 1, isComplete: false },
    { stepIndex: 2, isComplete: false },
    { stepIndex: 3, isComplete: false }
];

@Injectable()
export class StepsService {

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

    public resetWizard(): void {
        for (const step of STEPS) {
            step.isComplete = false;
        }
        this.setCurrentStep(this.steps$.value[0]);
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
