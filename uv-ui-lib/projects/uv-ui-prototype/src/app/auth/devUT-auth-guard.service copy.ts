import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';
@Injectable()
export class DevUTAuthGuardService implements CanActivate {

    constructor( public router: Router, private userService: UserService) { }

    canActivate(): boolean {
        this.userService.updateUserName();
        if (this.userService.getCurrentUserValue() === 'abtest@test.com') {
            console.log('auth guard blocked the user', this.userService.getCurrentUserValue());
            this.router.navigate(['unauthorized']);
            return false
        } else {
            console.log('you are not an AB test user, you may pass', this.userService.getCurrentUserValue());
            return true;
        }
    }
}