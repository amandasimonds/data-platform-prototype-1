import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppShellService {
    public title = new BehaviorSubject<string>('Title');
    public headerIcon = new BehaviorSubject<string>('apps-quad');
    public navIcon = new BehaviorSubject<string>('');

    public get currentAppNavIcon$(): Observable<string> {
        return this.navIcon.asObservable();
    }

    public get currentAppTitle$(): Observable<string> {
        return this.title.asObservable();
    }

    public get currentAppHeaderIcon$(): Observable<string> {
        return this.headerIcon.asObservable();
    }

    public setTitle(title: string): void {
        this.title.next(title);
    }

    public setHeaderIcon(headerIcon: string): void {
        this.headerIcon.next(headerIcon);
    }

    public setNavIcon(navIcon: string): void {
        this.navIcon.next(navIcon);
    }
}
