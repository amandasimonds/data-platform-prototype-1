import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StepsService } from '../../../services/steps.service';
import { StepTemplateModule } from '../../components/step-template/step-template.module';
import { StepsComponent } from '../../components/steps/steps.component';
import { FormPageComponent } from './form-page.component';
@NgModule({
    declarations: [
        StepsComponent,
        FormPageComponent,
    ],
    imports: [
        CommonModule,
        StepTemplateModule
    ],
    exports: [ FormPageComponent ],
    providers: [ StepsService ]
})
export class FormPageModule { }
