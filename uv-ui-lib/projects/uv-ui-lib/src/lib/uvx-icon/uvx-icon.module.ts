import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UvxIconComponent } from './uvx-icon.component';
import { RegisterIconModule } from '../register-icon/register-icon.module';

@NgModule({
    declarations: [ UvxIconComponent ],
    imports: [
        CommonModule,
        RegisterIconModule
    ],
    exports: [ UvxIconComponent ]
})
export class UvxIconModule {
}
