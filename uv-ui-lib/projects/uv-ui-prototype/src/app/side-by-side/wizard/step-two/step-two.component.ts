import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IGoal } from '../../../models/goal.model';
import { SbsWizardService } from '../sbs-wizard.service';
import { selections } from './selections';

@Component({
  selector: 'sbs-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['../../../global-where-used/project-wizard/step-directions/step-directions.component.scss']
})
export class SbsStepTwoComponent implements OnInit {

    @Output() public stepisCompleteEvent = new EventEmitter<boolean>();
    public selections = selections;

    constructor(private wizardService: SbsWizardService) { }

    ngOnInit(): void {
    }

    public selectFocus(goal: string): void {
        this.wizardService.updateWizardData('goal', goal);
        this.wizardService.updateResults(512);
        this.wizardService.checkIfStep2Complete();
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
