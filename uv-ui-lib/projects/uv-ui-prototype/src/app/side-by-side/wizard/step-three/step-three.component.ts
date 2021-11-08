import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WizardService } from '../../../global-where-used/wizard.service';
import { IGoal } from '../../../models/goal.model';
import { SbsWizardService } from '../sbs-wizard.service';
import { selections } from './selections';


@Component({
  selector: 'sbs-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['../../../global-where-used/project-wizard/step-directions/step-directions.component.scss']
})
export class SbsStepThreeComponent implements OnInit {

    @Output() public stepisCompleteEvent = new EventEmitter<boolean>();
    public selections = selections;

    constructor(private sbsWizardService: SbsWizardService) { }

    ngOnInit(): void {
    }

    public selectFocus(goal: string): void {
        this.sbsWizardService.updateWizardData('focus', goal);
        this.sbsWizardService.updateResults(512);
        this.sbsWizardService.checkIfStep3Complete();
    }

    public setSelectedFocus(item: IGoal, i: number): void { 
        item.selected = true;
        const array = this.selections;
        const exceptIndex = this.selections.indexOf(item);
        for(let item of array) {
            if (array.indexOf(item) !== exceptIndex) {
                item.selected = false;
            }
        }
    }

}
