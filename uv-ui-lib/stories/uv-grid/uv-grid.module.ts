import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import UvGridComponent from './uv-grid.component';
import { HeaderModule, NavbarModule } from 'projects/uv-ui-lib/src/public-api';

@NgModule({
    declarations: [ UvGridComponent],
    imports: [
        CommonModule, HeaderModule, NavbarModule
    ],
    exports: [ UvGridComponent ]
})
export class UvGridModule {
}
