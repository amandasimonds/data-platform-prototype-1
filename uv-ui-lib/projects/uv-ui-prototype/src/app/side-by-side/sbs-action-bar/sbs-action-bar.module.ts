import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    ActionBarModule,
    ButtonModule,
    IconButtonModule,
    UvxIconModule,
    SearchPanelModule
} from 'projects/uv-ui-lib/src/public-api';
import { FilterModalModule } from '../filter-modal/filter-modal.module';
import { SbsActionBarComponent } from './sbs-action-bar.component';

@NgModule({
  declarations: [SbsActionBarComponent],
  imports: [
    CommonModule,
    ButtonModule,
    ActionBarModule,
    IconButtonModule,
    UvxIconModule,
    FilterModalModule,
    SearchPanelModule,
    FormsModule
  ],
  exports: [ SbsActionBarComponent]
})
export class SbsActionBarModule { }
