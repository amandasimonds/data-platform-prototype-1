import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button.module';
import { ImageButtonModule } from '../image-button/image-button.module';
import { NavbarDashboardSubComponent } from './navbar-dashboard-sub.component';

@NgModule({
    declarations: [ NavbarDashboardSubComponent ],
    imports: [
        CommonModule, ButtonModule, ImageButtonModule
    ],
    exports: [ NavbarDashboardSubComponent ]
})
export class NavbarDashboardSubModule {
}
