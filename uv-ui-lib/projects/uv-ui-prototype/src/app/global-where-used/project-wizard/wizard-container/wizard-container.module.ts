import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'projects/uv-ui-lib/src/public-api';
import { WizardContainerComponent } from './wizard-container.component';
import { StartPageModule } from '../start-page/start-page.module';
import { FormPageModule } from '../form-page/form-page.module';
import { LaunchPointPageModule } from '../launch-point-page/launch-point-page.module';

@NgModule({
  declarations: [WizardContainerComponent],
  imports: [
    CommonModule,
    ModalModule,
    StartPageModule,
    FormPageModule,
    LaunchPointPageModule
  ],
  exports: [WizardContainerComponent]
})
export class WizardContainerModule { }
