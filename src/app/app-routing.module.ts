import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { StartPageComponent } from "./start-page/start-page.component";
import { HomeComponent } from "./home/home.component";

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
            path: "home",
            component: HomeComponent
          }
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
