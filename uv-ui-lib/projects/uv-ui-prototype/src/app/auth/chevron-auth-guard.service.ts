import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { ENV } from '../app-env';
import { environment } from '../../environments/environment';
@Injectable()
export class CustomerChAuthGuardService implements CanActivate {

    constructor(public auth: AuthService, public router: Router, private userService: UserService) { }

    public get isCumminsOrDev(): boolean {
        return this.userService.getCurrentUserValue() === 'user_chevron@test.com' || this.userService.getCurrentUserValue() === 'devdesigner@test.com';
    }

    canActivate(): boolean {
        this.userService.updateUserName();
        if (environment.authConfig.clientId === ENV.ut_client_id && !this.isCumminsOrDev) {
            console.log('auth guard blocked the user', this.userService.getCurrentUserValue());
            this.router.navigate(['main/home-splash']);
            return false
        } else {
            console.log('you are indeed a chevron user or you are just a boss in the dev environment', this.userService.getCurrentUserValue());
            return true;
        }
    }
}