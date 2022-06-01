import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IUser } from '../models/user.model';

@Injectable()
export class UserService {

    public currentUser$: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(
        {
            id: 1,
            new: true,
            name: ''
        }
    );

    public token = environment.authConfig.clientId;

    public setCurrentUser(user: any): void {
        this.currentUser$.next(user);
    }

    public getCurrentUser(): Observable<any> {
        return this.currentUser$.asObservable();
    }

    public getCurrentUserValue(): string {
        return this.currentUser$.value.name;
    }

    public updateUserName(): void {
        const data = JSON.parse(localStorage.getItem('0-'+this.token));
        this.currentUser$.value.name = data.userData.name;
    }
}
