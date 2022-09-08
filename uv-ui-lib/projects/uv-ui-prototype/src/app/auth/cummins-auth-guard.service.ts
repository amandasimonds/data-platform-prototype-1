import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { ENV } from '../app-env';
import { environment } from '../../environments/environment';
@Injectable()
export class CustomerCuAuthGuardService implements CanActivate {

    constructor(public auth: AuthService, public router: Router, private userService: UserService) { }

    public get isChevronOrDev(): boolean {
        return this.userService.getCurrentUserValue() === 'user_cummins@test.com' || this.userService.getCurrentUserValue() === 'devdesigner@test.com';
    }

    canActivate(): boolean {
        this.userService.updateUserName();
        if (environment.authConfig.clientId === ENV.ut_client_id && !this.isChevronOrDev) {
            console.log('auth guard blocked the user', this.userService.getCurrentUserValue());
            this.router.navigate(['main/home-splash']);
            return false
        } else {
            console.log('you are indeed a cummins user or you are just a dev boss', this.userService.getCurrentUserValue(), this.isChevronOrDev);
            return true;
        }
    }
}