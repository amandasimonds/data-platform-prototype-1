import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import UvUiShellComponent from './uv-ui-shell.component';
import { HeaderModule, NavbarModule } from 'projects/uv-ui-lib/src/public-api';

@NgModule({
    declarations: [ UvUiShellComponent],
    imports: [
        CommonModule, HeaderModule, NavbarModule
    ],
    exports: [ UvUiShellComponent ]
})
export class UvUiShellModule {
}
