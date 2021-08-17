import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'projects/uv-ui-lib/src/public-api';
import { WizardContainerComponent } from './wizard-container.component';



@NgModule({
  declarations: [WizardContainerComponent],
  imports: [
    CommonModule,
    ModalModule
  ],
  exports: [WizardContainerComponent]
})
export class WizardContainerModule { }
