import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { StepModel } from '../../../models/step.model';

@Component({
  selector: 'app-step-directions',
  templateUrl: './step-directions.component.html',
  styleUrls: ['./step-directions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class StepDirectionsComponent {

    @Input() public step: StepModel;

    public onCompleteStep(): void {
        this.step.isComplete = true;
    }
}
