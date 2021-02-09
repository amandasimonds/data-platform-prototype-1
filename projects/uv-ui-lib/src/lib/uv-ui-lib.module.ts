import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UvUiLibComponent } from './uv-ui-lib.component';


import { NavbarDarkComponent } from './components/navbar-dark/navbar-dark.component';
import { LoginComponent } from './components/login/login.component';
import { IconsComponent } from './components/icons/icons.component';
import { ButtonComponent } from './components/button/button.component';
import { NavbarDashboardComponent } from './components/navbar-dashboard/navbar-dashboard.component';
import { HeaderDashboardComponent } from './components/header-dashboard/header-dashboard.component';
import { NavbarDashboardSubComponent } from './components/navbar-dashboard-sub/navbar-dashboard-sub.component';

@NgModule({
  declarations: [
    UvUiLibComponent,
    NavbarDarkComponent,
    LoginComponent,
    IconsComponent,
    ButtonComponent,
    NavbarDashboardComponent,
    HeaderDashboardComponent,
    NavbarDashboardSubComponent],
  imports: [
    CommonModule
  ],
  exports: [
    UvUiLibComponent,
    NavbarDarkComponent,
    LoginComponent,
    ButtonComponent,
    IconsComponent,
    NavbarDashboardComponent,
    HeaderDashboardComponent,
    NavbarDashboardSubComponent
  ]
})
export class UvUiLibModule { }
