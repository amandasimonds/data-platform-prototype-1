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
    SvgButtonModule
} from '../../../uv-ui-lib/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StartPageComponent } from './start-page/start-page.component';
import { SideBySideComponent } from './side-by-side/side-by-side.component';
import { HomeSplashComponent } from './home-splash/home-splash.component';
import { GlobalWhereUsedComponent } from './global-where-used/global-where-used.component';
import { MainComponent } from './layouts/main/main.component';
import { SearchComponent } from './search/search.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        StartPageComponent,
        SideBySideComponent,
        HomeSplashComponent,
        GlobalWhereUsedComponent,
        MainComponent,
        SearchComponent
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
        SvgButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
