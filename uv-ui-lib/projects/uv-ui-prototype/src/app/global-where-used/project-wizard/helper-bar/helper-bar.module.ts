import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelperBarComponent } from './helper-bar.component';
import { IconButtonModule } from 'projects/uv-ui-lib/src/public-api';

@NgModule({
  declarations: [HelperBarComponent],
  imports: [
    CommonModule,
    IconButtonModule
  ],
  exports: [HelperBarComponent]
})
export class HelperBarModule { }
