import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { 
    ActionBarModule, 
    ButtonModule, 
    IconButtonModule, 
    UvxIconModule,
    SearchPanelModule } from 'projects/uv-ui-lib/src/public-api';
import { SbsActionBarComponent } from './sbs-action-bar.component';
import { FilterModalModule } from '../filter-modal/filter-modal.module';

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
