import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input, ChangeDetectorRef } from '@angular/core';
import { SearchResult } from 'projects/uv-ui-prototype/src/app/search/models/search-result.model';
import { SearchService } from 'projects/uv-ui-prototype/src/app/services/search.service';
import { WizardService } from 'projects/uv-ui-prototype/src/app/global-where-used/wizard.service';

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
    public selectedEntity: SearchResult;
    public showSuggestions = false;

    constructor( 
        private wizardService: WizardService, 
        private searchService: SearchService,
        private ref: ChangeDetectorRef
        ) {
            const entity = this.wizardService.wizardData$.value.entity
            if (entity !== this.wizardService.emptyEntity) {
                this.searchText = entity.name;
                this.selectedEntity = entity;
            } else {
                this.searchText = '';
                this.selectedEntity = this.wizardService.emptyEntity;
            }
        }

    public ngAfterViewChecked(): void {
        if (this.searchText.length > 0) {
            this.searchResults = this.searchService.typeAheadSearch(this.searchText);
        }
        this.ref.detectChanges();
    }
    
    public trackItem (index: number, item: SearchResult) {
        return item.name;
    }

    public selectEntity(item: SearchResult): void {
        this.searchText = item.name;
        this.entitySelected = true;
        this.selectedEntity = item;
        this.wizardService.updateWizardData('entity', item);
        this.wizardService.updateResults(310);
        this.wizardService.checkIfStep2Complete();
    }

    public clearSearch() {
        this.searchText = '';
        this.entitySelected = false;
        this.wizardService.updateWizardData('entity', this.wizardService.emptyEntity);
        this.wizardService.checkIfStep2Complete();
    }
}
