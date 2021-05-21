import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
    AppBarModule,
    ButtonModule,
    AppSideBarModule,
    NavbarDashboardSubModule,
    SearchPanelModule,
    HeaderModule,
    NavbarDashboardModule,
    WidgetModule,
    TaskSnippetModule,
    SnippetModule,
    DropdownButtonModule,
    ImageButtonModule,
    SvgButtonModule,
    TabModule
} from '../../../uv-ui-lib/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StartPageComponent } from './start-page/start-page.component';
import { SideBySideComponent } from './side-by-side/side-by-side.component';
import { HomeSplashModule } from './home-splash/home-splash.module';
import { GlobalWhereUsedComponent } from './global-where-used/global-where-used.component';
import { MainComponent } from './layouts/main/main.component';
import { SearchModule } from './search/search.module';
import { HelperService } from './services/helper.service';
import { AuthService } from './services/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        StartPageComponent,
        SideBySideComponent,
        GlobalWhereUsedComponent,
        MainComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppBarModule,
        ButtonModule,
        AppSideBarModule,
        SearchPanelModule,
        NavbarDashboardSubModule,
        HeaderModule,
        NavbarDashboardModule,
        WidgetModule,
        TaskSnippetModule,
        SnippetModule,
        DropdownButtonModule,
        ImageButtonModule,
        SvgButtonModule,
        HomeSplashModule,
        SearchModule,
        TabModule,
        HttpClientModule
    ],
    providers: [HelperService, AuthService, HttpClient],
    bootstrap: [AppComponent]
})
export class AppModule { }
