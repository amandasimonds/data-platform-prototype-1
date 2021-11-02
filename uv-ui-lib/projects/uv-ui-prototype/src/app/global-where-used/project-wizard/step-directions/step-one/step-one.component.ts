import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { WizardService } from 'projects/uv-ui-prototype/src/app/services/wizard.service';
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
    public taskSelections = taskSelections;

    @Output() public stepisCompleteEvent = new EventEmitter<boolean>();

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

    constructor(private stepsService: WizardService) {
        const role = this.stepsService.wizardData$.value.role;
        const goal = this.stepsService.wizardData$.value.goal;
        role !== '' ? this.selectedRole = role : null;
        goal === '' ? this.taskSelections.map(item => {item.selected = false}) : null
    }

    public selectRole(role: string): void {
        this.selectedRole = role;
        this.stepsService.updateWizardData('role', role)
        this.stepsService.checkIfStep1Complete();
    }

    public selectGoal(goal: string): void {
        this.stepsService.updateWizardData('goal', goal);
        this.stepsService.checkIfStep1Complete();
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
