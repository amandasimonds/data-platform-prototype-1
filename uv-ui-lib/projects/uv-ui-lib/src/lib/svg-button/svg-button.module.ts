import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterIconModule } from '../register-icon/register-icon.module';
import { SvgButtonComponent } from './svg-button.component';

@NgModule({
    declarations: [ SvgButtonComponent ],
    imports: [
        CommonModule,
        RegisterIconModule
    ],
    exports: [ SvgButtonComponent ]
})
export class SvgButtonModule {
}
