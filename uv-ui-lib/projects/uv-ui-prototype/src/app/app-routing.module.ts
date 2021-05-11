import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeSplashComponent } from './home-splash/home-splash.component';
import { SideBySideComponent } from './side-by-side/side-by-side.component';
import { GlobalWhereUsedComponent } from './global-where-used/global-where-used.component';
import { MainComponent } from './layouts/main/main.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
        {
            path: 'login',
            component: LoginComponent
        },
        {
            path: 'main',
            component: MainComponent,
            children: [
            {
                path: 'home-splash',
                component: HomeSplashComponent
            },
            {
                path: 'side-by-side',
                component: SideBySideComponent
            },
            {
                path: 'global-where-used',
                component: GlobalWhereUsedComponent
            },
            {
                path: 'search',
                component: SearchComponent
            }
            ]
        }
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
