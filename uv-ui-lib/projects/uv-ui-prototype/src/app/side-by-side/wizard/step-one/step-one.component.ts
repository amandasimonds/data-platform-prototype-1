import { ChangeDetectorRef, Component, Input } from '@angular/core';
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

    constructor( 
        private sbsWizardService: SbsWizardService, 
        private ref: ChangeDetectorRef
        ) {
            const entity = this.sbsWizardService.wizardData$.value.entity
            if (entity !== this.sbsWizardService.emptyEntity) {
                this.searchText = entity.title;
            } else {
                this.searchText = '';
            }
        }

    public ngAfterViewChecked(): void {
        this.ref.detectChanges();
    }
    
    public trackItem (index: number, item: ILocation) {
        return item.name;
    }

    public selectLocation(item: ILocation, index: number): void {
        if (!item.selected) { 
            item.selected = true;
            console.log('yas it is selected');
            this.sbsWizardService.updateWizardData('location', item.name);
            this.sbsWizardService.updateResults(310);
        } else {
            item.selected = false;
            this.sbsWizardService.unselectLocation(item, index);
        }
        this.sbsWizardService.checkIfStep1Complete();
    }

    public clearSearch() {
        this.searchText = '';
        this.locationSelected = false;
        this.sbsWizardService.updateWizardData('location', '');
        this.sbsWizardService.checkIfStep1Complete();
    }
}
