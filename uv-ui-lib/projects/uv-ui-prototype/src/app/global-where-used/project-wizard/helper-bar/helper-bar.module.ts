import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelperBarComponent } from './helper-bar.component';
import { IconButtonModule, TooltipModule } from 'projects/uv-ui-lib/src/public-api';

@NgModule({
  declarations: [HelperBarComponent],
  imports: [
    CommonModule,
    IconButtonModule,
    TooltipModule
  ],
  exports: [HelperBarComponent]
})
export class HelperBarModule { }
