import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button.module';
import { IconButtonModule } from '../icon-button/icon-button.module';
import { TextInputComponent } from './text-input.component';

@NgModule({
    declarations: [ TextInputComponent],
    imports: [
        CommonModule, ButtonModule, IconButtonModule
    ],
    exports: [ TextInputComponent ]
})
export class TextInputModule {
}
