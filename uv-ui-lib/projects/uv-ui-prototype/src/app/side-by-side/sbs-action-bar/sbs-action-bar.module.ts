import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    ActionBarModule,
    IconButtonModule,
    UvxIconModule,
    SearchPanelModule
} from 'projects/uv-ui-lib/src/public-api';
import { FilterModalModule } from '../filter-modal/filter-modal.module';
import { SbsActionBarComponent } from './sbs-action-bar.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SbsActionBarComponent],
  imports: [
    CommonModule,
    ActionBarModule,
    IconButtonModule,
    UvxIconModule,
    FilterModalModule,
    SearchPanelModule,
    FormsModule,
    MatButtonModule
  ],
  exports: [ SbsActionBarComponent]
})
export class SbsActionBarModule { }
