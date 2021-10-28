import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { SearchResult } from 'projects/uv-ui-prototype/src/app/search/models/search-result.model';
import { SearchService } from 'projects/uv-ui-prototype/src/app/services/search.service';
import { StepsService } from 'projects/uv-ui-prototype/src/app/services/steps.service';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepTwoComponent {

    @Output() public stepisCompleteEvent = new EventEmitter<boolean>();
    @Input() public searchResults: SearchResult[] = [];
    public entitySelected = false;
    public searchText = '';
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

    constructor( private stepsService: StepsService, private searchService: SearchService) {}

    public selectEntity(item: string): void {
        this.searchText = item;
        this.entitySelected = true;
        this.stepsService.updateWizardData('entity', item);
        this.checkIfComplete();
    }

    public checkIfComplete() {
        const wizardData = this.stepsService.wizardData$;
        console.log('isComplete', wizardData);
        if (wizardData.value.goal !== '' && wizardData.value.role !== '') {
            this.stepisCompleteEvent.emit(true);
            console.log('emitted');
        } else {
            return
        }
    }
    
    public ngAfterViewChecked(): void {
        this.searchResults = this.searchService.typeAheadSearch(this.searchText);
    }
}
