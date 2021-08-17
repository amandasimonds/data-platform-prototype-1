import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule, IconButtonModule } from 'projects/uv-ui-lib/src/public-api';
import { StepsService } from '../../../services/steps.service';
import { StepTemplateComponent } from './step-template.component';

@NgModule({
    declarations: [
        StepTemplateComponent
    ],
    imports: [
        CommonModule,
        IconButtonModule,
        ButtonModule
    ],
    exports: [ StepTemplateComponent ],
    providers: [ StepsService ]
})
export class StepTemplateModule { }
