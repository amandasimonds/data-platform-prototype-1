import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HeaderService {
    public title = new BehaviorSubject<string>('Title');
    public appIcon = new BehaviorSubject<string>('apps-quad');

    public get currentTitle$(): Observable<string> {
        return this.title.asObservable();
    }

    public get currentIcon$(): Observable<string> {
        return this.appIcon.asObservable();
    }

    public setTitle(title: string): void {
        this.title.next(title);
    }

    public setAppIcon(appIcon: string): void {
        this.appIcon.next(appIcon);
    }
}
