import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    ActionBarModule,
    IconButtonModule,
    UvxIconModule,
    SearchPanelModule,
    ButtonModule,
} from 'projects/uv-ui-lib/src/public-api';
import { FilterModalModule } from '../filter-modal/filter-modal.module';
import { SbsActionBarComponent } from './sbs-action-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [SbsActionBarComponent],
    imports: [
        CommonModule,
        ButtonModule,
        ActionBarModule,
        IconButtonModule,
        UvxIconModule,
        FilterModalModule,
        RouterModule,
        SearchPanelModule,
        FormsModule,
    ],
    exports: [SbsActionBarComponent],
})
export class SbsActionBarModule {}

