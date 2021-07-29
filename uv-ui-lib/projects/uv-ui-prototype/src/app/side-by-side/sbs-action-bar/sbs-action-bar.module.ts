import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
    ActionBarModule, 
    ButtonModule, 
    IconButtonModule, 
    UvxIconModule } from 'projects/uv-ui-lib/src/public-api';
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
    FilterModalModule
  ],
  exports: [ SbsActionBarComponent]
})
export class SbsActionBarModule { }
