import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
import { SearchResult } from 'projects/uv-ui-prototype/src/app/search/models/search-result.model';
import { SearchService } from 'projects/uv-ui-prototype/src/app/services/search.service';
import { WizardService } from 'projects/uv-ui-prototype/src/app/services/wizard.service';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepTwoComponent {

    @Input() public searchResults: SearchResult[] = [];
    public entitySelected = false;
    public searchText: string;

    constructor( 
        private stepsService: WizardService, 
        private searchService: SearchService,
        private ref: ChangeDetectorRef
        ) {
            const entity = this.stepsService.wizardData$.value.entity
            if (entity !== this.stepsService.emptyEntity) {
                this.searchText = entity.title;
            } else {
                this.searchText = '';
            }
        }

    public ngAfterViewChecked(): void {
        this.searchResults = this.searchService.typeAheadSearch(this.searchText);
        this.ref.detectChanges();
    }
    public trackItem (index: number, item: SearchResult) {
        return item.title;
    }

    public selectEntity(item: SearchResult): void {
        this.searchText = item.title;
        this.entitySelected = true;
        this.stepsService.updateWizardData('entity', item);
        this.stepsService.checkIfStep2Complete();
    }

    public clearSearch() {
        this.searchText = '';
        this.entitySelected = false;
        this.stepsService.updateWizardData('entity', this.stepsService.emptyEntity);
        this.stepsService.checkIfStep2Complete();
    }
}
