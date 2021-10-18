import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ICON_SET } from 'projects/uv-ui-lib/src/lib/register-icon/icon-set';
import {
    ActionBarModule,
    ButtonModule,
    SidePanelModule,
    SearchPanelModule,
    HeaderModule,
    NavbarModule,
    IconButtonModule,
    TabModule,
    RegisterIconModule,
    UvxIconModule,
    BackdropModule,
    ModalModule,
    IconDisplayModule
} from '../../../uv-ui-lib/src/public-api';
import {MatTooltipModule} from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeSplashModule } from './home-splash/home-splash.module';
import { MainComponent } from './layouts/main/main.component';
import { HelperService } from './services/helper.service';
import { SearchService } from './services/search.service';
import { SideBySideModule } from './side-by-side/side-by-side.module';
import { SidebySideService } from './services/side-by-side.service';
import { AuthConfigModule } from './auth/auth-config.module';
import { AuthService } from './auth/auth.service';
import { NgOnDestroyService } from './services/on-destroy.service';
import { BackdropService } from './services/backdrop.service';
import { AppShellService } from './services/app-shell.service';
import { SearchSidebarModule } from './search/search-sidebar/search-sidebar.module';
import { CompareWarningModule } from './search/compare-warning/compare-warning.module';
import { UvLightComponent } from './uv-light/uv-light.component';
import { UserService } from './services/user.service';
import { UvLightService } from './services/uv-light.service';
import { IconDisplayComponent } from './icon-display/icon-display.component';
import { ProfileViewerService } from './services/profile-viewer.service';
import {MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions} from '@angular/material/tooltip';

export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 1000,
  hideDelay: 100,
  touchendHideDelay: 100,
};

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        MainComponent,
        UvLightComponent,
        IconDisplayComponent
    ],
    imports: [
        ActionBarModule,
        AppRoutingModule,
        AuthConfigModule,
        BackdropModule,
        BrowserAnimationsModule,
        BrowserModule,
        ButtonModule,
        CompareWarningModule,
        HeaderModule,
        HomeSplashModule,
        HttpClientModule,
        IconButtonModule,
        IconDisplayModule,
        ModalModule,
        MatTooltipModule,
        NavbarModule,
        RegisterIconModule,
        RegisterIconModule.forRoot(ICON_SET),
        SearchPanelModule,
        SearchSidebarModule,
        SidePanelModule,
        SideBySideModule,
        TabModule,
        UvxIconModule
    ],
    providers: [
        AppShellService,
        AuthService,
        BackdropService,
        HelperService,
        HttpClient,
        NgOnDestroyService,
        ProfileViewerService,
        SearchService,
        SidebySideService,
        UserService,
        UvLightService,
        {provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
