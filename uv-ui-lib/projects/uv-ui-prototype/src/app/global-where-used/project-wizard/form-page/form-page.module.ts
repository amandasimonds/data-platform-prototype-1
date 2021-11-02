import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule, IconButtonModule, ModalModule } from 'projects/uv-ui-lib/src/public-api';
import { WizardService } from '../../../services/wizard.service';
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
        IconButtonModule
    ],
    exports: [ FormPageComponent ],
    providers: [ WizardService ]
})
export class FormPageModule { }
