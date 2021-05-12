import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  public title = new BehaviorSubject('Title');
  public appIcon = new BehaviorSubject('assets/search.svg#search');

  constructor() { }

  setTitle(title: string) {
    this.title.next(title);
    console.log("header service", title)
  }

  setAppIcon(appIcon: string) {
      this.appIcon.next(appIcon);
  }
}
