import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterIconModule } from '../register-icon/register-icon.module';
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
