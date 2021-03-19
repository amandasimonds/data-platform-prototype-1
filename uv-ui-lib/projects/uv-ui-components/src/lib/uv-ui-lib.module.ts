import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { ButtonComponent } from './button/button.component';
import { NavbarDashboardComponent } from './navbar-dashboard/navbar-dashboard.component';
import { HeaderDashboardComponent } from './header-dashboard/header-dashboard.component';
import { NavbarDashboardSubComponent } from './navbar-dashboard-sub/navbar-dashboard-sub.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { WidgetComponent } from './widget/widget.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { LogoSplashBlockComponent } from './logo-splash-block/logo-splash-block.component';
import { SideBySideLandingComponent } from './side-by-side-landing/side-by-side-landing.component';
import { AppSideBarComponent } from './app-side-bar/app-side-bar.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { IconsComponent } from './icons/icons.component';

@NgModule({
  declarations: [
    LoginComponent,
    ButtonComponent,
    NavbarDashboardComponent,
    HeaderDashboardComponent,
    NavbarDashboardSubComponent,
    SearchPanelComponent,
    WidgetComponent,
    HomeContainerComponent,
    LogoSplashBlockComponent,
    SideBySideLandingComponent,
    AppSideBarComponent,
    AppBarComponent,
    IconsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    ButtonComponent,
    NavbarDashboardComponent,
    HeaderDashboardComponent,
    NavbarDashboardSubComponent,
    SearchPanelComponent,
    WidgetComponent,
    HomeContainerComponent,
    LogoSplashBlockComponent,
    SideBySideLandingComponent,
    AppSideBarComponent,
    AppBarComponent,
    IconsComponent
  ]
})
export class UvUiLibModule { }
