import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StepModel } from '../../../models/step.model';
import { StepsService } from '../../../services/steps.service';

@Component({
  selector: 'app-launch-point-page',
  templateUrl: './launch-point-page.component.html',
  styleUrls: ['./launch-point-page.component.scss']
})
export class LaunchPointPageComponent {

    @Input() public step: StepModel;
    selectionHover = false;

    public taskSelections = [
        {
            name: 'Wave',
            icon: 'compare',
            selected: false,
            route: 'wave'
        },
        {
            name: 'Profile',
            icon: 'document',
            selected: false,
            route: 'profile'
        },
        {
            name: 'Force Directed Graph',
            icon: 'apps-gwu',
            selected: false,
            route: 'force-directed-graph'
        },
        {
            name: 'Search Results',
            icon: 'search',
            selected: false,
            route: 'profile'
        }
    ];

    constructor(private router: Router, private stepsService: StepsService) {}

    public onLaunchPointSelected(route: string): void {
        this.stepsService.cancelWizard();
        this.stepsService.resetWizard();
        this.router.navigate([`main/gwu/${route}`]);
    }

}
