import { Component, ChangeDetectionStrategy, EventEmitter, Output, Input, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgOnDestroyService } from 'projects/uv-ui-prototype/src/app/services/on-destroy.service';
import { WizardService } from 'projects/uv-ui-prototype/src/app/global-where-used/wizard.service';
import { takeUntil, tap } from 'rxjs/operators';
import { IGoal } from '../../../../models/goal.model';
import { taskSelections } from './taskSelections';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['../step-directions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepOneComponent {

    public selectedRole = "Select a role";
    public taskSelections = taskSelections;
    public wizardMode = '';
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

    constructor(
        private wizardService: WizardService, 
        private route: ActivatedRoute, 
        private destroy$: NgOnDestroyService,
        private ref: ChangeDetectorRef
        ) {
        const role = this.wizardService.wizardData$.value.role;
        const goal = this.wizardService.wizardData$.value.goal;
        role !== '' ? this.selectedRole = role : null;
        goal === '' ? this.taskSelections.map(item => {item.selected = false}) : null
    }

    ngOnInit(): void {
        this.route.queryParams.pipe(tap(queryParams => this.wizardMode = queryParams['wizardMode']))
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => this.ref.detectChanges());
    }

    public selectRole(role: string): void {
        this.selectedRole = role;
        this.wizardService.updateWizardData('role', role);
        this.wizardService.updateResults(436);
        this.wizardService.checkIfStep1Complete();
    }

    public selectGoal(goal: string): void {
        this.wizardService.updateWizardData('goal', goal);
        this.wizardService.updateResults(512);
        this.wizardService.checkIfStep1Complete();
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
