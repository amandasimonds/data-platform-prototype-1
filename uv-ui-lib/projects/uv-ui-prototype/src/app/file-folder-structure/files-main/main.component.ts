import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { IEntity } from '../../models/entity.model';
import { IFileFolder } from '../../models/file-folder.model';
import { FileFolderStructureService } from '../../services/file-folder.service';
import { NgOnDestroyService } from '../../services/on-destroy.service';
import { presetFiles } from '../presetFiles';
import { optionsMenu } from '../options-menu/options-menu';

@Component({
  selector: 'app-files-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class FilesMainComponent implements OnInit {

  public allFolders = presetFiles;
  public optionMenuItems = optionsMenu;
  public searchResults: any[] = [];

  constructor(
    private fileFolderService: FileFolderStructureService,
    private destroy$: NgOnDestroyService,
    private ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.allFolders = this.fileFolderService.getFolderFiles();
    combineLatest([
      this.fileFolderService.folderFiles$.pipe(tap(files => this.allFolders = files)),
      this.fileFolderService.fileFolderSearchResults.pipe(tap(results => this.searchResults = results))
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.ref.detectChanges();
      });
    console.log(this.searchResults);
  }

  public get noSearchResults(): boolean {
    return this.searchResults[0] === "no results";
  }

  public navigateToFolder(fileFolder: IFileFolder, event: Event) {
    event.stopPropagation();
    this.fileFolderService.navigateToFolder(fileFolder);
    console.log('navigating to folder from main');
  }

  public navigateToProfile(file: IEntity) {
    event.stopPropagation();
    this.fileFolderService.navigateToProfile(file);
    console.log('navigating to profile from main');
  }

  public optionsMenuClicked(fileFolder: IFileFolder, event: Event, index: number) {
    event.stopPropagation();
    !fileFolder.menuActive ? fileFolder.menuActive = true : fileFolder.menuActive = false;
    this.fileFolderService.clearFileFolderMenus(fileFolder, index)
  }
}
