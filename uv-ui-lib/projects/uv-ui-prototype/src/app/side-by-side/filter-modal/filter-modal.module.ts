import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
    ButtonModule, 
    SearchPanelModule, 
    TextInputModule, 
    UvxIconModule } from 'projects/uv-ui-lib/src/public-api';
import { FilterModalComponent } from './filter-modal.component';

@NgModule({
  declarations: [FilterModalComponent],
  imports: [
    CommonModule,
    SearchPanelModule,
    ButtonModule,
    UvxIconModule,
    TextInputModule
  ],
  exports: [FilterModalComponent]
})
export class FilterModalModule { }
