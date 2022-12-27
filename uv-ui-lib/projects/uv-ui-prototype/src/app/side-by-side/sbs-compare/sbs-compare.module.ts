import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SbsCompareComponent} from './sbs-compare.component';
import {
  UvxToolbarModule,
  IconButtonModule
} from '../../../../../uv-ui-lib/src/public-api';



@NgModule({
  declarations: [SbsCompareComponent],
  imports: [
    CommonModule,
    UvxToolbarModule,
    IconButtonModule
  ],
  exports: [SbsCompareComponent]
})
export class SbsCompareModule { }
