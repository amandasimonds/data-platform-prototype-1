import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterIconModule } from '../register-icon/register-icon.module';
import { IconButtonComponent } from './icon-button.component';
import { UvxIconModule } from '../uvx-icon/uvx-icon.module';

@NgModule({
    declarations: [ IconButtonComponent ],
    imports: [
        CommonModule,
        RegisterIconModule,
        UvxIconModule
    ],
    exports: [ IconButtonComponent ]
})
export class IconButtonModule {
}
