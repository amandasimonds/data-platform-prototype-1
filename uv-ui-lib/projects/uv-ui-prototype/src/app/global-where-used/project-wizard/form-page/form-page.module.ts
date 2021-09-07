import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule, ModalModule } from 'projects/uv-ui-lib/src/public-api';
import { StepsService } from '../../../services/steps.service';
import { StepTemplateModule } from '../step-template/step-template.module';
import { StepsModule } from '../steps/steps.module';
import { FormPageComponent } from './form-page.component';
@NgModule({
    declarations: [
        FormPageComponent,
    ],
    imports: [
        CommonModule,
        StepTemplateModule,
        StepsModule,
        ModalModule,
        ButtonModule
    ],
    exports: [ FormPageComponent ],
    providers: [ StepsService ]
})
export class FormPageModule { }
