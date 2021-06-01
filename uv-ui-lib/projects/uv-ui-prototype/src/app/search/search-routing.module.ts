import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchComponent } from './search.component';

const routes: Routes = [
    { path: '', component: SearchComponent, children: [
        { path: '', component: LandingComponent },
        { path: 'landing', component: LandingComponent },
        { path: 'search-results', component: SearchResultsComponent }
    ]}
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class SearchRoutingModule { }
