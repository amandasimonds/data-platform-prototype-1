import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { presetFiles } from '../file-folder-structure/presetFiles';
import { emptyEntity, IEntity } from '../models/entity.model';
import { IFileFolder } from '../models/file-folder.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class FileFolderStructureService {

  public presetFiles = presetFiles;
  public emptyPresetFileFolder = {
    name: "",
    type: "",
    folders: [{}],
    files: [{}],
    open: false,
    shared: false,
    menuOpen: false,
    file: emptyEntity
  }

  public allFoldersAndFilesArray = new BehaviorSubject<any[]>([]);
  public get allFoldersAndFilesArray$(): Observable<any[]> {
    return this.allFoldersAndFilesArray.asObservable();
  }

  public setAllFoldersAndFiles() {
    this.getFolderFiles();
    const folderFiles = this.folderFiles$.value;
    const collection: any[] = [];
    for (let i = 0; i < folderFiles.folders.length; i++) {
      !folderFiles.folders[i].folders[i] ? null :
        collection.push(folderFiles.folders[i].folders[i]);
      !folderFiles.folders[i].files[i] ? null :
        collection.push(folderFiles.folders[i].files[i]);
    }
    this.allFoldersAndFilesArray.next([...this.folderFiles$.value.folders, ...this.folderFiles$.value.files, ...collection]);
  }

  public folderFiles$ = new BehaviorSubject<IFileFolder>({});
  public savedFolderFiles: IFileFolder = JSON.parse(localStorage.getItem('file-folders'));

  public currentOpenFolder = new BehaviorSubject<IFileFolder>(presetFiles);
  public fileFolderSearchResults = new BehaviorSubject<any[]>([]);

  public get currentOpenFolder$(): Observable<IFileFolder> {
    return this.currentOpenFolder.asObservable();
  }

  public get fileFolderSearchResults$(): Observable<any[]> {
    return this.fileFolderSearchResults.asObservable();
  }

  public setCurrentOpenFolder(folder: IFileFolder): void {
    this.currentOpenFolder.next(folder);
  }

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) {
    this.setAllFoldersAndFiles();
  }

  public getFolderFiles(): IFileFolder {
    const localStorageFiles = JSON.parse(localStorage.getItem('file-folders'));
    if (localStorageFiles === null) {
      return this.getPresetFolderFiles();
    } else {
      this.folderFiles$.next(localStorageFiles);
      return this.folderFiles$.value;
    }
  }

  public getPresetFolderFiles(): IFileFolder {
    this.folderFiles$.next(this.presetFiles);
    return this.presetFiles;
  }

  public saveFileFoldersToLocalStorage(currentFolders: IFileFolder) {
    localStorage.setItem('file-folders', JSON.stringify(currentFolders));
  }

  public saveEntityToFolder(selectedFolder: IFileFolder, selectedEntities: IEntity[]) {
    const currentFolders = this.folderFiles$.value;
    currentFolders.folders.forEach(fileFolder => {
      if (selectedFolder.name === fileFolder.name) {
        const updateFiles = fileFolder.files.concat(selectedEntities);
        fileFolder.files = updateFiles;
      }
    })
    this.folderFiles$.next(currentFolders);
    this.saveFileFoldersToLocalStorage(currentFolders);
  }

  public saveEntityToMain(selectedEntities: IEntity[]) {
    const currentFolders = this.folderFiles$.value;
    const updateFiles = currentFolders.files.concat(selectedEntities);
    currentFolders.files = updateFiles;
    this.folderFiles$.next(currentFolders);
    this.saveFileFoldersToLocalStorage(currentFolders);
  }

  public navigateToFolder(fileFolder: IFileFolder) {
    this.setCurrentOpenFolder(fileFolder);
    this.router.navigate(['/main/file-folder-structure/folder', fileFolder.name], { relativeTo: this.route, queryParamsHandling: "merge" })
  }

  public navigateToProfile(file: IEntity) {
    this.dataService.setEntityBeingViewed(file);
    this.router.navigate(['/main/file-folder-structure/profile', file.name], { relativeTo: this.route, queryParamsHandling: "merge" });
  }

  public createFolder(newFolderName: string) {
    const currentFolders = this.folderFiles$.value;
    currentFolders.folders.push(
      {
        name: newFolderName,
        type: "folder",
        folders: [],
        files: [],
        open: false,
        shared: false,
        menuOpen: false,
        file: null,
        menuActive: false
      })
    this.folderFiles$.next(currentFolders);
    this.saveFileFoldersToLocalStorage(currentFolders);
  }

  public clearFileFolderMenus(fileFolder: IFileFolder, i: number) {
    console.log('clear folder menus', fileFolder, i);
    let allFolders = this.folderFiles$.value;
    const newFolders = allFolders.folders
      .map((item, index) => (
        i !== index ? {
          ...item,
          menuActive: false
        } : {
          ...item,
          menuActive: true
        }
      ));
    allFolders.folders = newFolders
    this.folderFiles$.next(allFolders);
  }

  public typeAheadSearchFileFolder(input: string, location: string): any[] {
    let results = this.allFoldersAndFilesArray.value;
    results = results.filter(item =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    console.log(results);
    location === 'explorer' ?
      this.fileFolderSearchResults.next(results) : null;
      results.length === 0 ? results.push("no results") : null;
    return results;
  }
}

