import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { devEnv, testEnv } from '../auth/env';

@Injectable()
export class UserService {

    public currentUser$: BehaviorSubject<any> = new BehaviorSubject<any>(
        {
            id: 1,
            new: true,
            name: ''
        }
    );

    public token = devEnv.clientId;
    // public token = testEnv.clientId;

    constructor(private auth: AuthService) {}

    public setCurrentUser(user: any): void {
        this.currentUser$.next(user);
    }

    public getCurrentUser(): Observable<any> {
        return this.currentUser$.asObservable();
    }

    public updateUserName(): void {
        const data = JSON.parse(localStorage.getItem('0-'+this.token));
        this.currentUser$.value.name = data.userData.name;
    }
}
