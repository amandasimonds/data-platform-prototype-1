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

    public formatLabel(value: number) {
        if (value >= 1000) {
          return Math.round(value / 1000) + 'k';
        }
    
        return value;
      }

    public searchText = '';
    public searchSelected = false;

    public taskSelections = [
        {
            name: 'Compare',
            icon: 'compare',
            selected: false
        },
        {
            name: 'Current',
            icon: 'thunderbolt',
            selected: false
        },
        {
            name: 'Design',
            icon: 'package',
            selected: false
        },
        {
            name: 'Replace',
            icon: 'replace',
            selected: false
        },
        {
            name: 'Similar',
            icon: 'clone',
            selected: false
        },
        {
            name: 'Update',
            icon: 'refresh',
            selected: false
        },
        {
            name: 'Validate',
            icon: 'check_alt',
            selected: false
        }
    ];

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

    constructor(private route: ActivatedRoute, private router: Router) {}

    public enterSearchSuggestion(item: string): void {
        this.searchText = item;
        this.searchSelected = true;
        this.onCompleteStep();
    }

    public onCompleteStep(): void {
        this.step.isComplete = true;
    }
}
