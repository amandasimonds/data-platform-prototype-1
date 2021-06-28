import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterIconModule } from '../register-icon/register-icon.module';
import { ButtonComponent } from './button.component';

@NgModule({
    declarations: [ ButtonComponent ],
    imports: [
        CommonModule,
        RegisterIconModule
    ],
    exports: [ ButtonComponent ]
})
export class ButtonModule {
}
