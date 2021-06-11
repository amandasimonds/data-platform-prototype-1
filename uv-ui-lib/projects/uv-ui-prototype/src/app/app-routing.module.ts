import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './layouts/main/main.component';
import { SideBySideComponent } from './side-by-side/side-by-side.component';
import { GlobalWhereUsedComponent } from './global-where-used/global-where-used.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthGuardComponent } from './layouts/auth-guard/auth-guard.component';

const routes: Routes = [
    {
        path: '',
        component: AuthGuardComponent,
        // canActivate: [AuthGuardService]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'logout',
        component: LoginComponent
    },
    {
		path: 'auth-callback',
		component: AuthGuardComponent
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
            },
            {
                path: 'settings',
                component: SettingsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
