import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StepsService } from 'projects/uv-ui-prototype/src/app/services/steps.service';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepOneComponent {

    public selectedRole = "Select a role";

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

    
    public taskSelections = [
        {
            name: 'Compare',
            icon: 'compare',
            selected: false
        },
        {
            name: 'Current',
            icon: 'thunderbolt',
            selected: false
        },
        {
            name: 'Design',
            icon: 'package',
            selected: false
        },
        {
            name: 'Replace',
            icon: 'replace',
            selected: false
        },
        {
            name: 'Similar',
            icon: 'clone',
            selected: false
        },
        {
            name: 'Update',
            icon: 'refresh',
            selected: false
        },
        {
            name: 'Validate',
            icon: 'check_alt',
            selected: false
        },
        {
            name: 'Test',
            icon: 'activate_all',
            selected: false
        }
    ];

    constructor(private stepsService: StepsService) {}

    public selectRole(role: string) {
        this.selectedRole = role;
        this.stepsService.updateWizardData('role', role)
    }

}
