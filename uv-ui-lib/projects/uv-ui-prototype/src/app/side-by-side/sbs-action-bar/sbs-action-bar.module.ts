import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionBarModule, ButtonModule, IconButtonModule, UvxIconModule } from 'projects/uv-ui-lib/src/public-api';
import { SbsActionBarComponent } from './sbs-action-bar.component';

@NgModule({
  declarations: [SbsActionBarComponent],
  imports: [
    CommonModule,
    ButtonModule,
    ActionBarModule,
    IconButtonModule,
    UvxIconModule
  ],
  exports: [ SbsActionBarComponent]
})
export class SbsActionBarModule { }
