import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
    ButtonModule, 
    CheckboxModule, 
    IconButtonModule, 
    SearchPanelModule, 
    TextInputModule, 
    UvxIconModule } from 'projects/uv-ui-lib/src/public-api';
import { FilterModalComponent } from './filter-modal.component';
import { SbsFilterService } from '../../services/sbs-filter.service';
import { FilterKeywordSearchPipe } from '../../pipes/filter-keyword-search.pipe';

@NgModule({
    declarations: [ 
        FilterModalComponent,
        FilterKeywordSearchPipe
    ],
    imports: [
        CommonModule,
        SearchPanelModule,
        ButtonModule,
        UvxIconModule,
        TextInputModule,
        CheckboxModule,
        IconButtonModule
    ],
    exports: [FilterModalComponent],
    providers: [SbsFilterService]
})
export class FilterModalModule { }
