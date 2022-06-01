import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {

  public message = new BehaviorSubject<string>('Toast Message');
  public triggerToast = new BehaviorSubject<boolean>(false);

  public get message$(): Observable<string> {
    return this.message.asObservable();
  }

  public get triggerToast$(): Observable<boolean> {
    return this.triggerToast.asObservable();
  }

  public setMessage(message: string): void {
    this.message.next(message);
  }

  public setTriggerToast(triggerToast: boolean): void {
    this.triggerToast.next(triggerToast);
  }
}
