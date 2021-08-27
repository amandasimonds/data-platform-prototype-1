import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BackdropService {
    public backdropActive = new BehaviorSubject<boolean>(false);

    public get backdropState$(): Observable<boolean> {
        return this.backdropActive.asObservable();
    }

    public setBackdrop(backdropActive: boolean): void {
        this.backdropActive.next(backdropActive);
    }
}
