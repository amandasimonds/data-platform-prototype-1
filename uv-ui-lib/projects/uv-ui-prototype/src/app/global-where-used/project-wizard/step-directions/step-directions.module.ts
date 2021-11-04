import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule, DropdownModule, IconButtonModule, RangeSliderModule, SearchPanelModule, TextInputModule, TooltipModule, UvxIconModule } from 'projects/uv-ui-lib/src/public-api';
import { FormsModule } from '@angular/forms';
import { WizardService } from '../../wizard.service';
import { StepDirectionsComponent } from './step-directions.component';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';

@NgModule({
    declarations: [
        StepDirectionsComponent,
        StepOneComponent,
        StepTwoComponent,
        StepThreeComponent
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
        UvxIconModule
    ],
    exports: [ StepDirectionsComponent ],
    providers: [ WizardService ]
})
export class StepDirectionsModule { }
