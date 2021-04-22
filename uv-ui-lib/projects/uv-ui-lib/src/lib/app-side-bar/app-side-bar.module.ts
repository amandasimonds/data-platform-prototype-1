import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button.module';
import { IconButtonModule } from '../icon-button/icon-button.module';
import { AppSideBarComponent } from './app-side-bar.component';

@NgModule({
    declarations: [ AppSideBarComponent],
    imports: [
        CommonModule, ButtonModule, IconButtonModule
    ],
    exports: [ AppSideBarComponent ]
})
export class AppSideBarModule {
}
