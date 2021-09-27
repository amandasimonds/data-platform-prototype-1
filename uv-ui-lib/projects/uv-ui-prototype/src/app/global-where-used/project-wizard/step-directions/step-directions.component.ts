import { Component, Input, ViewEncapsulation } from '@angular/core';
import { StepModel } from '../../../models/step.model';

@Component({
  selector: 'app-step-directions',
  templateUrl: './step-directions.component.html',
  styleUrls: ['./step-directions.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class StepDirectionsComponent {

    @Input() step: StepModel;

    searchText = '';
    searchSelected = false;

    taskSelections = [
        {
            name: 'Compare',
            icon: 'compare',
            selected: false
        },
        {
            name: 'Current',
            icon: 'compare',
            selected: false
        },
        {
            name: 'Design',
            icon: 'apps-design-ripple',
            selected: false
        },
        {
            name: 'Replace',
            icon: 'compare',
            selected: false
        },
        {
            name: 'Similar',
            icon: 'reorder',
            selected: false
        },
        {
            name: 'Update',
            icon: 'clock',
            selected: false
        },
        {
            name: 'Validate',
            icon: 'checked',
            selected: false
        }
    ]

    searchSuggestions = [
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
    ]

    enterSearchSuggestion(item: string) {
        this.searchText = item;
        this.searchSelected = true;
        this.onCompleteStep()
    }

    onCompleteStep() {
        this.step.isComplete = true;
    }

}
