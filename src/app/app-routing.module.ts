import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DataClusteringComponent } from './data-clustering/data-clustering.component';
import { LoginComponent } from "./login/login.component";
import { StartPageComponent } from "./uv-viewer/start-page/start-page.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full"},
  {
    path: "",
    component: AppComponent,
    children: [
      {path: "login", component: LoginComponent},
      {path: "data-clustering", component: DataClusteringComponent},
      {path: "start-page", component: StartPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
