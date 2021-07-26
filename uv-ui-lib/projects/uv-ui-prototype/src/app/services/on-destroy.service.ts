import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NgOnDestroyService extends Subject<null> implements OnDestroy {
    // TODO: add explicit constructor

    public ngOnDestroy(): void {
        this.next(null);
        this.complete();
    }
}
