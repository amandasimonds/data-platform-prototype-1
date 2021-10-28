import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const PAGES = [1, 2, 3, 4];

@Injectable()
export class ProfileViewerService {

    public pages$ = new BehaviorSubject<number[]>(PAGES);
    public currentPage$ = new BehaviorSubject<number>(null);
    public columnCount$ = new BehaviorSubject<number>(3);

    constructor() {
        this.currentPage$.next(this.pages$.value[0]);
    }

    public get currentColumnCount$(): Observable<number> {
        return this.columnCount$.asObservable();
    }

    public setCurrentColumnCount(value: number): void {
        this.columnCount$.next(value);
        console.log('service', value);
    }

    public setCurrentPage(page: number): void {
        this.currentPage$.next(page);
        console.log(this.currentPage$.value);
    }

    public getCurrentPage(): Observable<number> {
        return this.currentPage$.asObservable();
    }

    public getPages(): Observable<number[]> {
        return this.pages$.asObservable();
    }
}
