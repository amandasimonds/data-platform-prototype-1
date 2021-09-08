import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class UvLightService {
    currentHighlight$: BehaviorSubject<string> = new BehaviorSubject<string>('') 

    setCurrentHighlight(value: string): void {
        this.currentHighlight$.next(value);
    }
    
    getCurrentHighlight(): Observable<string> {
        return this.currentHighlight$.asObservable();
    }
}
