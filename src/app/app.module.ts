import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { UvUiLibModule } from 'uv-ui-lib';
import { UvUiLibModule } from "../../projects/uv-ui-lib/src/lib/uv-ui-lib.module"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataClusteringComponent } from './data-clustering/data-clustering.component';
import { LoginComponent } from './login/login.component';
import { StartPageComponent } from './uv-viewer/start-page/start-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DataClusteringComponent,
    LoginComponent,
    StartPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UvUiLibModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
