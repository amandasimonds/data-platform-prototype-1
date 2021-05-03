import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button.module';
import { ImageButtonModule } from '../image-button/image-button.module';
import { AppBarComponent } from './app-bar.component';

@NgModule({
    declarations: [ AppBarComponent ],
    imports: [
        CommonModule, ButtonModule, ImageButtonModule
    ],
    exports: [ AppBarComponent ]
})
export class AppBarModule {
}
