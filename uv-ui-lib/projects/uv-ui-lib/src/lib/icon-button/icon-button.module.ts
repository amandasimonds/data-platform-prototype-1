import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterIconModule } from '../register-icon/register-icon.module';
import { IconButtonComponent } from './icon-button.component';

@NgModule({
    declarations: [ IconButtonComponent ],
    imports: [
        CommonModule,
        RegisterIconModule
    ],
    exports: [ IconButtonComponent ]
})
export class IconButtonModule {
}
