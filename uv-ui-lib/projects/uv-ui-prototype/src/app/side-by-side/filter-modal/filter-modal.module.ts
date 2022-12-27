import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    IconButtonModule,
    SearchPanelModule,
    TextInputModule,
} from 'projects/uv-ui-lib/src/public-api';
import { SbsFilterService } from '../sbs-filter.service';
import { FilterKeywordSearchPipe } from '../../pipes/filter-keyword-search.pipe';
import { FilterModalComponent } from './filter-modal.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
    declarations: [
        FilterModalComponent,
        FilterKeywordSearchPipe
    ],
    imports: [
        CommonModule,
        SearchPanelModule,
        TextInputModule,
        MatCheckboxModule,
        IconButtonModule
    ],
    exports: [FilterModalComponent],
    providers: [SbsFilterService]
})
export class FilterModalModule { }
