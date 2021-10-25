import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StepModel } from '../../../models/step.model';

@Component({
  selector: 'app-step-directions',
  templateUrl: './step-directions.component.html',
  styleUrls: ['./step-directions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class StepDirectionsComponent {

    @Input() public step: StepModel;

    public searchText = '';
    public searchSelected = false;
    public searchSuggestions = [
        {
            title: 'Lorem ipsum dolor sit consectetur',
            description: 'Lorem ipsum dolor sit consectetur adipiscing elit sed do eiusmod tempor'
        },
        {
            title: 'Lorem consectetur',
            description: 'Lorem ipsum dolor elit sed do eiusmod tempor'
        },
        {
            title: 'Dolor sit consectetur',
            description: 'Dolor sit consectetur adipiscing elit sed do eiusmod tempor'
        }
    ];

    public enterSearchSuggestion(item: string): void {
        this.searchText = item;
        this.searchSelected = true;
        this.onCompleteStep();
    }

    public onCompleteStep(): void {
        this.step.isComplete = true;
    }
}
