import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterIconModule } from 'epd-pattern-library';
import { UvxIconComponent } from './uvx-icon.component';

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
