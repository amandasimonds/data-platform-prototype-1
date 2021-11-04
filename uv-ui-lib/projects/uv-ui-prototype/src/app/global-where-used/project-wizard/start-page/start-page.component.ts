import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { WizardService } from '../../wizard.service';

@Component({
  selector: 'app-wizard-start',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss', '../../global-where-used.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartPageComponent {

    @Output() public createNewProjectEvent = new EventEmitter();

    constructor(
        private stepsService: WizardService) {}

    public cancelWizard() {
        this.stepsService.resetWizard();
        this.stepsService.cancelWizard();
    }

    public createNewProject() {
        this.createNewProjectEvent.emit();
    }

}
