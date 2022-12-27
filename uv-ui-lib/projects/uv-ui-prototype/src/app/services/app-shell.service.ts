import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppShellService {
    public navIcon = new BehaviorSubject<string>('');

    public get currentAppNavIcon$(): Observable<string> {
        return this.navIcon.asObservable();
    }

    public setNavIcon(navIcon: string): void {
        this.navIcon.next(navIcon);
    }
}
