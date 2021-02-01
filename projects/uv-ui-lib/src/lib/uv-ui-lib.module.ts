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
    ButtonComponent],
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
    ButtonComponent
  ]
})
export class UvUiLibModule { }
