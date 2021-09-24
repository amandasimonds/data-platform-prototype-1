import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule, IconButtonModule, SearchPanelModule, TextInputModule } from 'projects/uv-ui-lib/src/public-api';
import { StepsService } from '../../../services/steps.service';
import { StepDirectionsComponent } from './step-directions.component';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { FormsModule } from '@angular/forms';

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
        TextInputModule,
        SearchPanelModule,
        FormsModule
    ],
    exports: [ StepDirectionsComponent ],
    providers: [ StepsService ]
})
export class StepDirectionsModule { }
