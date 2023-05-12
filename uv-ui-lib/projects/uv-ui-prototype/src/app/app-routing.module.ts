import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './pages/login/login.component'
import { AuthCallbackComponent } from './pages/auth-callback/auth-callback.component'
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component'

const routes: Routes = [
    {
        path: '',
        // redirectTo: 'main',
        redirectTo: 'data-platform-prototype-1/main',
        pathMatch: 'full'
    },
    {
        path: 'unauthorized',
        component: UnauthorizedComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'logout',
        component: LoginComponent,
    },
    {
        path: 'auth-callback',
        component: AuthCallbackComponent,
    },
    {
        path: 'main',
        loadChildren: () => import('./layouts/main/main.module').then((m) => m.MainModule),
        data: { breadcrumb: { skip: true } },
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

