import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button.module';
import { IconButtonModule } from '../icon-button/icon-button.module';
import { AppBarComponent } from './app-bar.component';

@NgModule({
    declarations: [ AppBarComponent ],
    imports: [
        CommonModule, ButtonModule, IconButtonModule
    ],
    exports: [ AppBarComponent ]
})
export class AppBarModule {
}
