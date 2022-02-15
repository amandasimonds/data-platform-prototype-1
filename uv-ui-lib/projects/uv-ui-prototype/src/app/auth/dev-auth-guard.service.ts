import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
@Injectable()
export class DevAuthGuardService implements CanActivate {

    constructor(public auth: AuthService, public router: Router, private userService: UserService) { }

    canActivate(): boolean {
        this.userService.updateUserName();
        if (this.userService.getCurrentUserValue() === 'abtest@test.com') {
            console.log('dev auth guard blocks you', this.userService.getCurrentUserValue());
            this.router.navigate(['unauthorized']);
            return false
        } else {
            console.log('you are indeed a dev user', this.userService.getCurrentUserValue());
            return true;
        }
    }
}