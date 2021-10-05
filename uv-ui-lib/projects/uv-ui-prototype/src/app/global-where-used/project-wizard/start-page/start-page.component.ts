import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StepsService } from '../../../services/steps.service';

@Component({
  selector: 'app-wizard-start',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss', '../../global-where-used.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartPageComponent {

    @Output() public createNewProjectEvent = new EventEmitter();

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private stepsService: StepsService) {}

    public cancelWizard() {
        this.stepsService.resetWizard();
        this.stepsService.cancelWizard();
    }

    public createNewProject() {
        this.createNewProjectEvent.emit();
    }

}
