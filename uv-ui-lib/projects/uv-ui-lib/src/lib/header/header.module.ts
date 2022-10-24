import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterIconModule } from 'epd-pattern-library';
import { HeaderComponent } from './header.component';

@NgModule({
    declarations: [ HeaderComponent ],
    imports: [
        CommonModule,
        RegisterIconModule
    ],
    exports: [ HeaderComponent ]
})
export class HeaderModule {
}
