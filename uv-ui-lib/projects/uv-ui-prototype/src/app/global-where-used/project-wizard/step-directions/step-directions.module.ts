import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule, DropdownModule, IconButtonModule, RangeSliderModule, SearchPanelModule, TextInputModule } from 'projects/uv-ui-lib/src/public-api';
import { FormsModule } from '@angular/forms';
import { StepsService } from '../../../services/steps.service';
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
        RangeSliderModule
    ],
    exports: [ StepDirectionsComponent ],
    providers: [ StepsService ]
})
export class StepDirectionsModule { }
