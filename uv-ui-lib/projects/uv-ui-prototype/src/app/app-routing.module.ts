import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './layouts/main/main.component';
import { SideBySideComponent } from './side-by-side/side-by-side.component';
import { GlobalWhereUsedComponent } from './global-where-used/global-where-used.component';

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
                loadChildren: () => import('./home-splash/home-splash.module').then(m => m.HomeSplashModule)
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
                loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
