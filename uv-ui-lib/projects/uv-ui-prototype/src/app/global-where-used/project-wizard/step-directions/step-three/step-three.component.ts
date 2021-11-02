import { Component, ChangeDetectionStrategy } from '@angular/core';
import { WizardService } from 'projects/uv-ui-prototype/src/app/services/wizard.service';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepThreeComponent {
    public filter1Value = 50;
    public filter2Value = 50;
    public filter3Value = 50;

    constructor(private stepsService: WizardService) {}

    filter1Changed(value: number) {
        this.filter1Value = value;
    }

    filter2Changed(value: number) {
        this.filter2Value = value;
    }

    filter3Changed(value: number) {
        this.filter3Value = value;
    }

    setFilter1() {
        this.stepsService.updateWizardData('filter1', this.filter1Value);
        this.stepsService.checkIfStep3Complete();
    }

    setFilter2() {
        this.stepsService.updateWizardData('filter2', this.filter2Value);
        this.stepsService.checkIfStep3Complete();
    }

    setFilter3() {
        this.stepsService.updateWizardData('filter3', this.filter3Value);
        this.stepsService.checkIfStep3Complete();
    }
}
