import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule, CheckboxModule, DropdownModule, IconButtonModule, RangeSliderModule, SearchPanelModule, TextInputModule, TooltipModule, UvxIconModule } from 'projects/uv-ui-lib/src/public-api';
import { FormsModule } from '@angular/forms';
import { WizardService } from '../../wizard.service';
import { StepDirectionsComponent } from './step-directions.component';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { SbsStepOneComponent } from '../../../side-by-side/wizard/step-one/step-one.component';
import { SbsStepTwoComponent } from '../../../side-by-side/wizard/step-two/step-two.component';
import { SbsStepThreeComponent } from '../../../side-by-side/wizard/step-three/step-three.component';

@NgModule({
    declarations: [
        StepDirectionsComponent,
        StepOneComponent,
        StepTwoComponent,
        StepThreeComponent,
        SbsStepOneComponent,
        SbsStepTwoComponent,
        SbsStepThreeComponent
    ],
    imports: [
        CommonModule,
        IconButtonModule,
        ButtonModule,
        DropdownModule,
        TextInputModule,
        SearchPanelModule,
        FormsModule,
        RangeSliderModule,
        TooltipModule,
        UvxIconModule,
        CheckboxModule
    ],
    exports: [ StepDirectionsComponent ],
    providers: [ WizardService ]
})
export class StepDirectionsModule { }
