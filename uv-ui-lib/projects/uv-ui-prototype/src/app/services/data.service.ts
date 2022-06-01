import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { presetFiles } from '../file-folder-structure/presetFiles';
import { emptyEntity, IEntity } from '../models/entity.model';
import { IFileFolder } from '../models/file-folder.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public folderBeingViewed = new BehaviorSubject<IFileFolder>(presetFiles);

  public get currentFolderBeingViewed$(): Observable<IFileFolder> {
    return this.folderBeingViewed.asObservable();
  }

  public setFolderBeingViewed(fileFolder: IFileFolder): void {
    this.folderBeingViewed.next(fileFolder);
  }

  public entityBeingViewed = new BehaviorSubject<IEntity>(emptyEntity);

  public get currentEntityBeingViewed$(): Observable<IEntity> {
    return this.entityBeingViewed.asObservable();
  }

  public setEntityBeingViewed(file: IEntity): void {
    this.entityBeingViewed.next(file);
  }

  public updateFileFolder(fileFolder: IFileFolder) {
    this.setFolderBeingViewed(fileFolder);
  }
}
