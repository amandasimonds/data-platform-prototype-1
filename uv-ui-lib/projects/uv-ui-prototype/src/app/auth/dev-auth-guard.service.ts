import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';
import { ENV } from '../app-env';
@Injectable()
export class DevAuthGuardService implements CanActivate {

    constructor(public auth: AuthService, public router: Router, private userService: UserService) { }

    public get isNotDevUser(): boolean {
        return this.userService.getCurrentUserValue() === 'user_cummins@test.com' ||
            this.userService.getCurrentUserValue() === 'user_chevron@test.com' ||
            this.userService.getCurrentUserValue() === 'abtest@test.com';
    }

    canActivate(): boolean {
        this.userService.updateUserName();
        if (environment.authConfig.clientId === ENV.ut_client_id && this.isNotDevUser) {
            console.log('auth guard blocked the user', this.userService.getCurrentUserValue());
            this.router.navigate(['unauthorized']);
            return false
        } else {
            console.log('you are indeed a dev, you may pass', this.userService.getCurrentUserValue());
            return true;
        }
    }
}