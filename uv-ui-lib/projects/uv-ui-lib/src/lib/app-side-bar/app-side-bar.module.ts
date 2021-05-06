import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button.module';
import { ImageButtonModule } from '../image-button/image-button.module';
import { AppSideBarComponent } from './app-side-bar.component';

@NgModule({
    declarations: [ AppSideBarComponent],
    imports: [
        CommonModule, ButtonModule, ImageButtonModule
    ],
    exports: [ AppSideBarComponent ]
})
export class AppSideBarModule {
}