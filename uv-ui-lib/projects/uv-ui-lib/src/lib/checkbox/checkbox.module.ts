import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox.component';
import { UvxIconModule } from '../uvx-icon/uvx-icon.module';

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
