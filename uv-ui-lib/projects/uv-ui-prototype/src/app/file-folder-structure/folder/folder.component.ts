import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, PRIMARY_OUTLET, Router, UrlSegment, UrlSegmentGroup, UrlTree } from '@angular/router';
import { combineLatest } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { IEntity } from '../../models/entity.model';
import { IFileFolder } from '../../models/file-folder.model';
import { DataService } from '../../services/data.service';
import { FileFolderStructureService } from '../../services/file-folder.service';
import { NgOnDestroyService } from '../../services/on-destroy.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {

  public openFolder: IFileFolder;
  public allFolders: IFileFolder;
  public searchResults: any[] = [];

  // public currentFolder: any;
  // public currentFile = '';

  constructor(private dataService: DataService,
    private fileFolderService: FileFolderStructureService,
    private router: Router,
    private route: ActivatedRoute,
    private destroy$: NgOnDestroyService,
    private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.allFolders = this.fileFolderService.getFolderFiles();
    this.getFolderFromUrlTree();
    combineLatest([
      this.fileFolderService.folderFiles$.pipe(tap(files => this.allFolders = files)),
      this.fileFolderService.fileFolderSearchResults.pipe(tap(results => this.searchResults = results))
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.ref.detectChanges();
      });
      console.log(this.searchResults.length);
      
  }

  ngAfterViewChecked(): void {

    this.searchResults.length !== 0 ? this.router.navigate(['/main/file-folder-structure'], { queryParamsHandling: 'merge' }) : null;
  }

  public getFolderFromUrlTree() {
    const tree: UrlTree = this.router.parseUrl(this.router.url)
    const segmentGroup: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    const urlSegment: UrlSegment[] = segmentGroup.segments;
    if (urlSegment[3]) {
      console.log('current folder: ', urlSegment[3].path);
      const folderName = urlSegment[3].path;
      let folder: IFileFolder = this.allFolders.folders.find(folder => folder.name === folderName);
      this.openFolder = folder
    } else {
      console.log('in main: ', urlSegment[0].path);
    }
  }

  public navigateToFolder(fileFolder: IFileFolder, event: Event) {
    event.stopPropagation();
    this.fileFolderService.navigateToFolder(fileFolder);
    console.log('navigating to folder from folder', fileFolder);
  }

  public navigateToProfile(file: IEntity, event: Event) {
    event.stopPropagation();
    this.fileFolderService.navigateToProfile(file);
    console.log('navigating to profile from folder');
  }

  public optionsMenuClicked(fileFolder: IFileFolder, event: Event, index: number) {
    event.stopPropagation();
    !fileFolder.menuActive ? fileFolder.menuActive = true : fileFolder.menuActive = false;
    this.fileFolderService.clearFileFolderMenus(fileFolder, index)
  }

}
