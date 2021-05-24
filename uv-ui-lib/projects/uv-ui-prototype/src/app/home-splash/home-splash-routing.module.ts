import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeSplashComponent } from './home-splash.component';

const routes: Routes = [
  { path: '', component: HomeSplashComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeSplashRoutingModule { }
