import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    ButtonModule,
    CheckboxModule,
    IconButtonModule,
    SearchPanelModule,
    TextInputModule,
    UvxIconModule
} from 'projects/uv-ui-lib/src/public-api';
import { SbsFilterService } from '../../services/sbs-filter.service';
import { FilterKeywordSearchPipe } from '../../pipes/filter-keyword-search.pipe';
import { FilterModalComponent } from './filter-modal.component';

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
