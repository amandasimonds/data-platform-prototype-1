import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class UvLightService {
    public currentHighlight$: BehaviorSubject<string> = new BehaviorSubject<string>('');

    public setCurrentHighlight(value: string): void {
        this.currentHighlight$.next(value);
    }

    public getCurrentHighlight(): Observable<string> {
        return this.currentHighlight$.asObservable();
    }
}
