import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class UserService {

    public currentUser$: BehaviorSubject<any> = new BehaviorSubject<any>(
        {
            id: 1,
            new: true,
            name: 'User'
        }
    );

    public setCurrentUser(user: any): void {
        this.currentUser$.next(user);
    }

    public getCurrentUser(): Observable<any> {
        return this.currentUser$.asObservable();
    }
}
