import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button.module';
import { ImageButtonModule } from '../image-button/image-button.module';
import { ActionBarComponent } from './action-bar.component';

@NgModule({
    declarations: [ ActionBarComponent ],
    imports: [
        CommonModule, ButtonModule, ImageButtonModule
    ],
    exports: [ ActionBarComponent ]
})
export class ActionBarModule {
}
