import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgButtonComponent } from './svg-button.component';

@NgModule({
    declarations: [ SvgButtonComponent ],
    imports: [
        CommonModule
    ],
    exports: [ SvgButtonComponent ]
})
export class SvgButtonModule {
}
