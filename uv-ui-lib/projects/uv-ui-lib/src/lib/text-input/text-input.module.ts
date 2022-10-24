import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonModule } from '../icon-button/icon-button.module';
import { TextInputComponent } from './text-input.component';

@NgModule({
    declarations: [ TextInputComponent],
    imports: [
        CommonModule, IconButtonModule
    ],
    exports: [ TextInputComponent ]
})
export class TextInputModule {
}
