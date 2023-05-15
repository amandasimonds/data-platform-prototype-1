import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule, IconButtonModule, ModalModule, TooltipModule } from 'projects/uv-ui-lib/src/public-api';
import { WizardService } from '../../wizard.service';
import { HelperBarModule } from '../helper-bar/helper-bar.module';
import { StepDirectionsModule } from '../step-directions/step-directions.module';
import { StepsModule } from '../steps/steps.module';
import { FormPageComponent } from './form-page.component';

@NgModule({
    declarations: [
        FormPageComponent
    ],
    imports: [
        CommonModule,
        StepDirectionsModule,
        StepsModule,
        ModalModule,
        ButtonModule,
        IconButtonModule,
        HelperBarModule,
        TooltipModule
    ],
    exports: [ FormPageComponent ],
    providers: [ WizardService ]
})
export class FormPageModule { }
