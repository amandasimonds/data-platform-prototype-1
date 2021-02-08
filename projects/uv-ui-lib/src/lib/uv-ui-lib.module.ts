import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UvUiLibComponent } from './uv-ui-lib.component';


import { NavbarDarkComponent } from './components/navbar-dark/navbar-dark.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderSbsComponent } from './components/header-sbs/header-sbs.component';
import { HeaderSbsSubComponent } from './components/header-sbs-sub/header-sbs-sub.component';
import { ContentSbsLeftComponent } from './components/content-sbs-left/content-sbs-left.component';
import { IconsComponent } from './components/icons/icons.component';
import { ButtonComponent } from './components/button/button.component';
import { NavbarDashboardComponent } from './components/navbar-dashboard/navbar-dashboard.component';
import { HeaderDashboardComponent } from './components/header-dashboard/header-dashboard.component';
import { IconPngsComponent } from './components/icons/iconPngs.component';
import { NavbarDashboardSubComponent } from './components/navbar-dashboard-sub/navbar-dashboard-sub.component';

@NgModule({
  declarations: [
    UvUiLibComponent,
    NavbarDarkComponent,
    HeaderComponent,
    SearchBoxComponent,
    LoginComponent,
    HeaderSbsComponent,
    HeaderSbsSubComponent,
    ContentSbsLeftComponent,
    IconsComponent,
    ButtonComponent,
    NavbarDashboardComponent,
    HeaderDashboardComponent,
    IconPngsComponent,
    NavbarDashboardSubComponent],
  imports: [
    CommonModule
  ],
  exports: [
    UvUiLibComponent,
    NavbarDarkComponent,
    HeaderComponent,
    SearchBoxComponent,
    LoginComponent,
    HeaderSbsComponent,
    HeaderSbsSubComponent,
    ContentSbsLeftComponent,
    ButtonComponent,
    IconsComponent,
    NavbarDashboardComponent,
    HeaderDashboardComponent,
    IconPngsComponent,
    NavbarDashboardSubComponent
  ]
})
export class UvUiLibModule { }
