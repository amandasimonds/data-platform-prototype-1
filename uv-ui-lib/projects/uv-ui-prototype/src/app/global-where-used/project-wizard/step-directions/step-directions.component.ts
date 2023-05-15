import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StepModel } from '../../../models/step.model';

@Component({
  selector: 'app-step-directions',
  templateUrl: './step-directions.component.html',
  styleUrls: ['./step-directions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class StepDirectionsComponent {

    @Input() public step: StepModel;
    public app = '';

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {this.app = params['app']})
    }

    public onCompleteStep(): void {
        this.step.isComplete = true;
    }
}
