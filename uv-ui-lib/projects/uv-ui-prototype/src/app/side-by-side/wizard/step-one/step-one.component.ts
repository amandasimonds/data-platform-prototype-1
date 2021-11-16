import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { SearchResult } from '../../../search/models/search-result.model';
import { allSearchResults } from '../../../search/search-results/sample-search-results/allSearchResults';
import { SearchService } from '../../../services/search.service';
import { SbsWizardService } from '../sbs-wizard.service';
import { ILocation, locations } from './locations';

@Component({
  selector: 'sbs-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class SbsStepOneComponent {

    @Input() public locations = locations;
    public locationSelected = false;
    public searchText: string;
    public showSuggestions = false;
    public selectedLocations: ILocation[] = [];

    public searchResults: SearchResult[] = allSearchResults;
    public entitySelected = false;
    public selectedEntity: SearchResult;

    constructor( 
        private sbsWizardService: SbsWizardService, 
        private ref: ChangeDetectorRef,
        private searchService: SearchService
        ) {
            const entity = this.sbsWizardService.wizardData$.value.entity
            if (entity !== this.sbsWizardService.emptyEntity) {
                this.searchText = entity.title;
            } else {
                this.searchText = '';
            }
        }

    public ngAfterViewChecked(): void {
        if (this.searchText.length > 0) {
            this.searchResults = this.searchService.typeAheadSearch(this.searchText);
        }
        this.ref.detectChanges();
    }
    
    public trackItem (index: number, item: SearchResult) {
        return item.title;
    }

    public selectLocation(item: ILocation, i: number): void {
        if (!item.selected) { 
            item.selected = true;
            this.sbsWizardService.updateWizardData('location', item.name);
            this.selectedLocations.push(item);
            this.sbsWizardService.updateResults(36);
        } else {
            this.unselectLocation(item, i);
        }
        this.sbsWizardService.checkIfStep1Complete();
    }

    // public clearSearch() {
    //     this.searchText = '';
    //     this.locationSelected = false;
    //     this.sbsWizardService.updateWizardData('location', '');
    //     this.sbsWizardService.checkIfStep1Complete();
    // }

    public clearSearch() {
        this.searchText = '';
        this.entitySelected = false;
        this.sbsWizardService.updateWizardData('entity', this.sbsWizardService.emptyEntity);
        this.sbsWizardService.checkIfStep1Complete();
    }

    public unselectLocation(item: ILocation, i: number) {
        item.selected = false;
        this.selectedLocations.splice(i, 1);
        this.sbsWizardService.unselectLocation(item, i);
    }

    public typeAhead(input: string): ILocation[] {
        let results = this.locations;
        results = results.filter(item =>
            item.name.toLowerCase().includes(input.toLowerCase())
        );
        return results;
    }
    
    public selectEntity(item: SearchResult): void {
        this.searchText = item.title;
        this.entitySelected = true;
        this.selectedEntity = item;
        this.sbsWizardService.updateWizardData('entity', item);
        this.sbsWizardService.updateResults(310);
        this.sbsWizardService.checkIfStep1Complete();
    }
}
