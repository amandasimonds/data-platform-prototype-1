import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { StepsService } from 'projects/uv-ui-prototype/src/app/services/steps.service';
import { IGoal } from './goal.model';
import { taskSelections } from './taskSelections';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepOneComponent {

    public selectedRole = "Select a role";
    public selectedGoal = '';
    public taskSelections = taskSelections;

    @Output() public stepisCompleteEvent = new EventEmitter<boolean>();

    public checkIfComplete() {
        const wizardData = this.stepsService.wizardData$;
        console.log('isComplete', wizardData);
        if (wizardData.value.goal !== '' && wizardData.value.role !== '') {
            this.stepisCompleteEvent.emit(true);
            console.log('emitted');
        } else {
            return
        }
    }

    public roles = [
        {
            name: 'Role 1'
        },
        {
            name: 'Role 2'
        },
        {
            name: 'Role 3'
        },
        {
            name: 'Role 4'
        }
    ];

    constructor(private stepsService: StepsService) {}

    public selectRole(role: string): void {
        this.selectedRole = role;
        this.stepsService.updateWizardData('role', role)
        this.checkIfComplete();
    }

    public selectGoal(goal: string): void {
        this.selectedGoal = goal;
        this.stepsService.updateWizardData('goal', goal);
        this.checkIfComplete();
    }

    public setSelectedGoal(item: IGoal, i: number): void { 
        item.selected = true;
        const array = this.taskSelections;
        const exceptIndex = this.taskSelections.indexOf(item);
        for(let item of array) {
            if (array.indexOf(item) !== exceptIndex) {
                item.selected = false;
            }
        }
    }
}
