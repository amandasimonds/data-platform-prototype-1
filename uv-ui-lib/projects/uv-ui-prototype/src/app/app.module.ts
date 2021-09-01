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
    BackdropModule
} from '../../../uv-ui-lib/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeSplashModule } from './home-splash/home-splash.module';
import { MainComponent } from './layouts/main/main.component';
import { SearchModule } from './search/search.module';
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

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ActionBarModule,
        BackdropModule,
        ButtonModule,
        CompareWarningModule,
        SidePanelModule,
        SearchPanelModule,
        SearchSidebarModule,
        HeaderModule,
        NavbarModule,
        IconButtonModule,
        HomeSplashModule,
        SearchModule,
        SideBySideModule,
        TabModule,
        HttpClientModule,
        RegisterIconModule,
        UvxIconModule,
        RegisterIconModule.forRoot(ICON_SET),
        AuthConfigModule
    ],
    providers: [
        HelperService, 
        AppShellService,
        AuthService, 
        HttpClient, 
        SearchService, 
        SidebySideService,
        NgOnDestroyService,
        BackdropService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
