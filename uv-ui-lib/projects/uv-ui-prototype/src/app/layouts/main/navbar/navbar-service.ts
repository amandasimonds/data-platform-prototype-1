import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NavbarService {

    public activeAppIcon = new BehaviorSubject<string>('');
    public searchPanelState = new BehaviorSubject<string>('hidden');

    public get activeAppIcon$(): Observable<string> {
        return this.activeAppIcon.asObservable();
    }

    public get searchPanelState$(): Observable<string> {
        return this.searchPanelState.asObservable();
    }

    public setActiveAppIcon(activeAppIcon: string): void {
        this.activeAppIcon.next(activeAppIcon);
    }

    public setSearchPanelState(searchPanelState: string): void {
        this.searchPanelState.next(searchPanelState);
    }
}
