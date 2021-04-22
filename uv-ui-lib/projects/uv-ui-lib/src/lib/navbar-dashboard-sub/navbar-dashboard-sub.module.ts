import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button.module';
import { IconButtonModule } from '../icon-button/icon-button.module';
import { NavbarDashboardSubComponent } from './navbar-dashboard-sub.component';

@NgModule({
    declarations: [ NavbarDashboardSubComponent ],
    imports: [
        CommonModule, ButtonModule, IconButtonModule
    ],
    exports: [ NavbarDashboardSubComponent ]
})
export class NavbarDashboardSubModule {
}
