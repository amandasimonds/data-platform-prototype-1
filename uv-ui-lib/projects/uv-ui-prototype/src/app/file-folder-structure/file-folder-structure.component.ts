import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router, Navigation } from '@angular/router';
import { AppShellService } from '../services/app-shell.service';
import { FileFolderStructureService } from '../services/file-folder.service';
import { WalletService } from '../services/wallet.service';

@Component({
  selector: 'app-file-folder-structure',
  templateUrl: './file-folder-structure.component.html',
  styleUrls: ['./file-folder-structure.component.scss']
})
export class FileFolderStructureComponent implements OnInit {

  public createFolderDialogue = false;
  public walletSidebarState = 'hidden';

  @Input() public searchText = '';
  @Input() public newFolderName = '';

  constructor(
    private appShellService: AppShellService,
    private fileFolderService: FileFolderStructureService,
    private walletService: WalletService,
    private location: Location,
    private ref: ChangeDetectorRef,
    private router: Router) { }

  ngOnInit(): void {
    this.appShellService.setNavIcon('file-folder-structure');
    this.router.events.subscribe((event) => {
      // console.log(event);
    })
    this.walletService.walletSidebarState$.subscribe(state => this.walletSidebarState = state);
  }

  public ngAfterViewChecked(): void {
    if (this.searchText !== '') {
      this.fileFolderService.typeAheadSearchFileFolder(this.searchText, 'explorer');
      this.ref.detectChanges();
    } else if (this.searchText === '') {
      this.fileFolderService.fileFolderSearchResults.next([]);
    }
  }

  public navigateToMain() {
    this.router.navigate(['/main/file-folder-structure'], { queryParamsHandling: 'merge' });
  }

  public createFolder() {
    this.createFolderDialogue = true;
  }

  public toggleWalletSidebar() {
    let state = '';
    this.walletSidebarState === 'visible' ? state = 'hidden' : state = 'visible';
    this.walletService.setWalletSidebarState(state);
  }

  back(): void {
    // this.history.pop()
    // if (this.history.length > 0) {
    this.location.back()
    // } else {
    //   this.router.navigateByUrl('/')
    // }
  }

  forward(): void {
    // this.history.pop()
    // if (this.history.length > 0) {
    this.location.forward()
    // } else {
    //   this.router.navigateByUrl('/')
    // }
  }
}
