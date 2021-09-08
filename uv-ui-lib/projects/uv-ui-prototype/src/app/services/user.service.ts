import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class UserService {
    
    currentUser$: BehaviorSubject<any> = new BehaviorSubject<any>(
        {
            id: 1,
            new: true,
            name: 'User'
        }
    ) 

    setCurrentUser(user: any): void {
        this.currentUser$.next(user);
    }
    
    getCurrentUser(): Observable<any> {
        return this.currentUser$.asObservable();
    }
}
