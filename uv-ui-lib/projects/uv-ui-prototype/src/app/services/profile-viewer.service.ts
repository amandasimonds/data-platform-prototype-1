import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ProfileViewerService {
    public columnCount = new BehaviorSubject<number>(3);

    public get currentColumnCount$(): Observable<number> {
        return this.columnCount.asObservable();
    }

    public setCurrentColumnCount(value: number): void {
        this.columnCount.next(value);
        console.log('service', value);
    }
}
