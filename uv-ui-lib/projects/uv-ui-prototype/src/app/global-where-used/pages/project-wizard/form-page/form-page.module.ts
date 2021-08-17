import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalModule } from 'projects/uv-ui-lib/src/public-api';
import { StepsService } from '../../../../services/steps.service';
import { StepTemplateModule } from '../../../components/step-template/step-template.module';
import { StepsComponent } from '../../../components/steps/steps.component';
import { FormPageComponent } from './form-page.component';
@NgModule({
    declarations: [
        StepsComponent,
        FormPageComponent,
    ],
    imports: [
        CommonModule,
        StepTemplateModule,
        ModalModule
    ],
    exports: [ FormPageComponent ],
    providers: [ StepsService ]
})
export class FormPageModule { }
