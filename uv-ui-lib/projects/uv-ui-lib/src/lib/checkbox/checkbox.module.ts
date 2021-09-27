import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UvxIconModule } from '../uvx-icon/uvx-icon.module';
import { CheckboxComponent } from './checkbox.component';

@NgModule({
    declarations: [ CheckboxComponent ],
    imports: [
        CommonModule,
        UvxIconModule
    ],
    exports: [ CheckboxComponent ]
})
export class CheckboxModule {
}
