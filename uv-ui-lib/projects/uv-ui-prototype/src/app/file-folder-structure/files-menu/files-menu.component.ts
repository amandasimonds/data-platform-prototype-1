import { ChangeDetectorRef, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { combineLatest } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { IEntity } from '../../models/entity.model';
import { IFileFolder } from '../../models/file-folder.model';
import { allSearchResults } from '../../search/search-results/sample-search-results/allSearchResults';
import { FileFolderStructureService } from '../../services/file-folder.service';
import { NgOnDestroyService } from '../../services/on-destroy.service';
import { launchServices } from '../../shared/launch-services';

@Component({
  selector: 'app-files-menu',
  templateUrl: './files-menu.component.html',
  styleUrls: ['./files-menu.component.scss']
})
export class FilesMenuComponent implements OnInit {

  @Input() subNavbarIsExpanded = true;
  @Input() searchText = '';
  launchServices = launchServices;

  public allFolders: IFileFolder;
  public recentlyViewed = allSearchResults.slice(0, 3);
  public mostPopular = allSearchResults.slice(5, 9);
  public searchResults: any[] = [];

  constructor(
    private fileFolderService: FileFolderStructureService,
    private destroy$: NgOnDestroyService,
    private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.allFolders = this.fileFolderService.getFolderFiles();
    combineLatest([
      this.fileFolderService.folderFiles$.pipe(tap(files => this.allFolders = files)),
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.ref.detectChanges());
  }

  public ngAfterViewChecked(): void {
    if (this.searchText !== '') {
      this.searchResults = this.fileFolderService.typeAheadSearchFileFolder(this.searchText, 'menu');
      this.ref.detectChanges();
      console.log(this.searchText);
    }
  }

  public toggleSubNavbar() {
    this.subNavbarIsExpanded = !this.subNavbarIsExpanded;
  }

  public openEntityProfileFromMenu(file: IEntity) {
    this.fileFolderService.navigateToProfile(file);
  }

}
