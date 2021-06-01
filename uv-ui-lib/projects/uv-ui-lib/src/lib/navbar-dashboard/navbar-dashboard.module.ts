import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarDashboardComponent } from './navbar-dashboard.component';

@NgModule({
    declarations: [ NavbarDashboardComponent ],
    imports: [
        CommonModule, RouterModule
    ],
    exports: [ NavbarDashboardComponent ]
})
export class NavbarDashboardModule {
}
