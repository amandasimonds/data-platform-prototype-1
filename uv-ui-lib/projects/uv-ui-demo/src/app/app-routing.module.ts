import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { StartPageComponent } from "./start-page/start-page.component";
import { HomeSplashComponent } from './home-splash/home-splash.component';
import { SideBySideComponent } from './side-by-side/side-by-side.component';
import { GlobalWhereUsedComponent } from "./global-where-used/global-where-used.component";

const routes: Routes = [
  {
    path: "", redirectTo: "/login", pathMatch: "full"
  },
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "start-page",
        component: StartPageComponent,
        children: [
          {
            path: "home-splash",
            component: HomeSplashComponent
          },
          {
            path: "side-by-side",
            component: SideBySideComponent
          },
          {
            path: "global-where-used",
            component: GlobalWhereUsedComponent
          },
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
