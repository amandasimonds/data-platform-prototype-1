import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class HelperBarService {

    private currentState$: BehaviorSubject<string>;

    public setCurrentState(state: string): void {
        this.currentState$.next(state);
    }

    public getCurrentState(): Observable<any> {
        return this.currentState$.asObservable();
    }
}
