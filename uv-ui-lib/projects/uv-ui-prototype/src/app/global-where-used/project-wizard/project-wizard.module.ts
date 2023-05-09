import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelperBarModule } from './helper-bar/helper-bar.module';
import { HelperBarService } from './helper-bar/helper-bar.service';
import { StepDirectionsModule } from './step-directions/step-directions.module';
import { StepsModule } from './steps/steps.module';
import { WizardContainerModule } from './wizard-container/wizard-container.module';
import { WizardService } from '../wizard.service';
import { SbsWizardService } from '../../side-by-side/wizard/sbs-wizard.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HelperBarModule,
    StepDirectionsModule,
    StepsModule,
    WizardContainerModule
  ],
  providers: [HelperBarService, WizardService, SbsWizardService]
})
export class ProjectWizardModule { }
