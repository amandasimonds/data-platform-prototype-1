import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { WizardService } from 'projects/uv-ui-prototype/src/app/global-where-used/wizard.service';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepThreeComponent implements OnInit{
    public filter1Value = 50;
    public filter2Value = 50;
    public filter3Value = 50;
    public radioOptions = ''

    constructor(private wizardService: WizardService) {
    }

    ngOnInit(): void {
        const data = this.wizardService.wizardData$.value;
        data.filter1 != 0 ? this.filter1Value = data.filter1 : 50;
        data.filter2 != 0 ? this.filter2Value = data.filter2 : 50;
        data.filter3 != 0 ? this.filter3Value = data.filter3 : 50;
    }

    filter1Changed(value: number) {
        let lastNum = this.filter1Value;
        if(lastNum < value) {
            this.wizardService.updateResults(-((this.filter1Value * .1) * 2));
        } else {
            this.wizardService.updateResults(((this.filter1Value * .1) * 2));
        }
        this.filter1Value = value;
    }

    filter2Changed(value: number) {
        let lastNum = this.filter2Value;
        if(lastNum < value) {
            this.wizardService.updateResults(-((this.filter2Value * .1) * 2));
        } else {
            this.wizardService.updateResults(((this.filter2Value * .1) * 2));
        }
        this.filter2Value = value;
    }

    filter3Changed(value: number) {
        let lastNum = this.filter3Value;
        if(lastNum < value) {
            this.wizardService.updateResults(-((this.filter3Value * .1) * 2));
        } else {
            this.wizardService.updateResults(((this.filter3Value * .1) * 2));
        }
        this.filter3Value = value;
    }

    setFilter1() {
        this.wizardService.updateWizardData('filter1', this.filter1Value);
        this.wizardService.checkIfStep3Complete();
    }

    setFilter2() {
        this.wizardService.updateWizardData('filter2', this.filter2Value);
        this.wizardService.checkIfStep3Complete();
    }

    setFilter3() {
        this.wizardService.updateWizardData('filter3', this.filter3Value);
        this.wizardService.checkIfStep3Complete();
    }
}
