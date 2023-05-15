import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LaunchPointModel } from '../../../models/launch-point.model';
import { StepModel } from '../../../models/step.model';
import { WizardDataModel } from '../../../models/wizard-data.model';
import { WizardService } from '../../wizard.service';

@Component({
  selector: 'app-launch-point-page',
  templateUrl: './launch-point-page.component.html',
  styleUrls: ['./launch-point-page.component.scss']
})
export class LaunchPointPageComponent {

    @Input() public step: StepModel;
    selectionHover = false;
    public wizardData: WizardDataModel = this.stepsService.wizardData$.value;

    public taskSelections: LaunchPointModel[] = [];

    constructor(private router: Router, private stepsService: WizardService) {
    }

    ngOnInit(): void {
        this.stepsService.wizardData$.subscribe(data => this.wizardData = data);
        this.getLaunchPointOptions();
    }

    public onLaunchPointSelected(route: string): void {
        this.stepsService.cancelWizard();
        this.stepsService.resetWizard();
        this.router.navigate([`main/gwu/${route}`], { queryParams: {service: `${route}`}});
    }

    getLaunchPointOptions() {
        const data = this.wizardData;
        if (!data.stepOneSkip) {
            this.taskSelections.push({
                name: 'Wave',
                icon: 'compare',
                selected: false,
                route: 'wave'
            },
            {
                name: 'Force Directed Graph',
                icon: 'force_directed_graph',
                selected: false,
                route: 'force-directed-graph'
            })
        }
        if (!data.stepTwoSkip) {
            this.taskSelections.push({
                name: 'Profile',
                icon: 'profile',
                selected: false,
                route: 'profile'
            })
        }
    }

    cancelWizard(){
        this.stepsService.cancelWizard();
        this.stepsService.resetWizard();
    }
}
