import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    public profileSlideOutState = new BehaviorSubject<string>('hidden');

    public get profileSlideOutState$(): Observable<string> {
        return this.profileSlideOutState.asObservable();
    }

    public setProfileSlideOutState(profileSlideOutState: string): void {
        this.profileSlideOutState.next(profileSlideOutState);
    }
}
