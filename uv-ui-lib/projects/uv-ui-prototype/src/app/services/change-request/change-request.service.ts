import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { format, isToday } from 'date-fns';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChangeRequestItem } from '../../models/change-request.model';
import { emptyEntity } from '../../models/entity.model';
import { presetChangeRequests } from './change-request-data';

@Injectable({
  providedIn: 'root'
})
export class ChangeRequestService {

  public presetChangeRequests = presetChangeRequests;

  public changeRequestsList = new BehaviorSubject<ChangeRequestItem[]>(this.presetChangeRequests);

  public get changeRequestsList$(): Observable<ChangeRequestItem[]> {
    return this.changeRequestsList.asObservable();
  }

  public setChangeRequestsList() {

  }

  public createChangeRequest(form: NgForm) {
    const newList = this.changeRequestsList.value.slice();
    const formattedDate = format(new Date(), 'dd/MM/yyyy hh:mm a');
    const newRequest: ChangeRequestItem = {
      title: '',
      updatedDate: new Date().toString(),
      formattedDate: formattedDate,
      priority: form.value.priority,
      description: form.value.description,
      entity: emptyEntity
    }
    newList.push(newRequest);
    this.changeRequestsList.next(newList);
    this.sortChangeRequestsByNewestFirst();
  }

  public getPresetChangeRequests(): ChangeRequestItem[] {
    this.changeRequestsList.next(this.presetChangeRequests);
    return this.presetChangeRequests;
  }

  public sortChangeRequestsByNewestFirst() {
    const list = this.changeRequestsList.value.slice();
    console.log(list);
    list.sort((a, b) =>
      new Date(b.updatedDate).getTime() - new Date(a.updatedDate).getTime()
    );
    console.log(list);
    this.changeRequestsList.next(list);
    console.log('updated dates');
  }

}
