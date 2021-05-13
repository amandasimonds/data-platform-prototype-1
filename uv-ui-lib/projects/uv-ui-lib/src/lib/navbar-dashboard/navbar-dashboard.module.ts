import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarDashboardComponent } from './navbar-dashboard.component';
import { RouterModule } from '@angular/router'

@NgModule({
    declarations: [ NavbarDashboardComponent ],
    imports: [
        CommonModule, RouterModule
    ],
    exports: [ NavbarDashboardComponent ]
})
export class NavbarDashboardModule {
}
