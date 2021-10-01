import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StepModel } from '../../../models/step.model';

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
            route: ''
        },
        {
            name: 'Profile',
            icon: 'document',
            selected: false,
            route: ''
        },
        {
            name: 'Force Directed Graph',
            icon: 'apps-gwu',
            selected: false,
            route: ''
        },
        {
            name: 'Search Results',
            icon: 'search',
            selected: false,
            route: ''
        }
    ];

    constructor(private router: Router) {}

    public onLaunchPointSelected(route: string): void {
        this.router.navigate(['main/gwu/landing'])
    }

}
