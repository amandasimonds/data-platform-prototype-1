import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NavbarDarkComponent } from './components/navbar-dark/navbar-dark.component';
import { LoginComponent } from './components/login/login.component';
import { IconsComponent } from './components/icons/icons.component';
import { ButtonComponent } from './components/button/button.component';
import { NavbarDashboardComponent } from './components/navbar-dashboard/navbar-dashboard.component';
import { HeaderDashboardComponent } from './components/header-dashboard/header-dashboard.component';
import { NavbarDashboardSubComponent } from './components/navbar-dashboard-sub/navbar-dashboard-sub.component';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { BadgeComponent } from './components/badge/badge.component';
import { FiltersListComponent } from './components/search-panel/filters-list/filters-list.component';
import { WidgetComponent } from './components/widget/widget.component';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { LogoSplashBlockComponent } from './components/logo-splash-block/logo-splash-block.component';
import { SideBySideLandingComponent } from './components/side-by-side-landing/side-by-side-landing.component';
import { AppSideBarComponent } from './components/app-side-bar/app-side-bar.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';

@NgModule({
  declarations: [
    NavbarDarkComponent,
    LoginComponent,
    IconsComponent,
    ButtonComponent,
    NavbarDashboardComponent,
    HeaderDashboardComponent,
    NavbarDashboardSubComponent,
    SearchPanelComponent,
    BadgeComponent,
    FiltersListComponent,
    WidgetComponent,
    HomeContainerComponent,
    LogoSplashBlockComponent,
    SideBySideLandingComponent,
    AppSideBarComponent,
    AppBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NavbarDarkComponent,
    LoginComponent,
    ButtonComponent,
    IconsComponent,
    NavbarDashboardComponent,
    HeaderDashboardComponent,
    NavbarDashboardSubComponent,
    SearchPanelComponent,
    BadgeComponent,
    FiltersListComponent,
    WidgetComponent,
    HomeContainerComponent,
    LogoSplashBlockComponent,
    SideBySideLandingComponent,
    AppSideBarComponent,
    AppBarComponent
  ]
})
export class UvUiLibModule { }