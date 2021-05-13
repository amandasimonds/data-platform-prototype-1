import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HeaderService {
    public title = new BehaviorSubject<string>('Title');
    public appIcon = new BehaviorSubject<string>('assets/apps-quad.svg#dashboard');

    public get currentTitle$(): Observable<string> {
        return this.title.asObservable();
    }

    public get currentIcon$(): Observable<string> {
        return this.appIcon.asObservable();
    }

    setTitle(title: string) {
        this.title.next(title);
    }

    setAppIcon(appIcon: string) {
        this.appIcon.next(appIcon);
    }
}
