import { CdkDragDrop, DragRef } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DragDropService } from '../../services/drag-drop.service';
import { slideInOutRightSidebarAnimation } from '../../shared/animations';
import * as _ from 'lodash';
import { emptyEntity, IEntity } from '../../models/entity.model';
import { WalletService } from '../../services/wallet.service';
import { combineLatest } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { NgOnDestroyService } from '../../services/on-destroy.service';
import { IFileFolder } from '../../models/file-folder.model';
import { FileFolderStructureService } from '../../services/file-folder.service';
import { ToastMessageService } from '../../services/toast-message.service';
import { launchServices } from '../../shared/launch-services';
import { ActivatedRoute, PRIMARY_OUTLET, Router, UrlSegment, UrlSegmentGroup, UrlTree } from '@angular/router';

@Component({
  selector: 'app-wallet-content',
  templateUrl: './wallet-content.component.html',
  styleUrls: ['./wallet-content.component.scss'],
  animations: [slideInOutRightSidebarAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WalletContentComponent implements OnInit {

  @Input() public walletSidebarState = 'hidden';
  @Input() public selectedEntities: IEntity[] = [];
  @Output() public readonly walletSidebarClosedEvent = new EventEmitter<string>();
  @Output() public readonly walletItemAddedEvent = new EventEmitter<Event>();

  public apiList: IEntity[] = [];
  public viewObjectsOpen = true;
  public searchText = '';
  public wallet: IEntity[] = [];
  public folderSelected = false;
  public folderIsEditMode = false;
  public dragging: DragRef = null;
  public walletEntitySelections: IEntity[] = [];
  public walletEntitySelectionsIndices: number[] = [];
  public walletSearchResults: IEntity[] = [];
  public walletSortMenuOpen = false;
  public entitySelectedForPreview: IEntity = emptyEntity;
  public fileFolders: IFileFolder;
  public launchServices = launchServices
  public currentApp = '';

  constructor(
    private walletService: WalletService,
    private fileFolderService: FileFolderStructureService,
    private toastMessageService: ToastMessageService,
    private route: ActivatedRoute,
    private router: Router,
    private ref: ChangeDetectorRef,
    private destroy$: NgOnDestroyService) { }

  ngOnInit(): void {
    this.wallet = this.walletService.getWallet();
    this.fileFolders = this.fileFolderService.getFolderFiles();
    combineLatest([
      this.walletService.selectedEntities$.pipe(tap(entities => this.selectedEntities = entities)),
      this.walletService.walletItems$.pipe(tap(wallet => this.wallet = wallet)),
      this.walletService.selectedWalletEntities$.pipe(tap(selections => this.walletEntitySelections = selections)),
      this.fileFolderService.folderFiles$.pipe(tap(fileFolders => this.fileFolders = fileFolders)),
      this.route.queryParams.pipe(tap(params => {
        this.currentApp = params['app'];
      }))
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.ref.detectChanges());
  }

  public get entitiesSelectedForWallet() {
    return this.selectedEntities.length > 0;
  }

  public get walletFavorites() {
    return this.walletService.getWalletFavorites();
  }

  public get walletFavoritesLimitReached() {
    console.log(this.walletService.getWalletFavorites().length === 5);
    return this.walletService.getWalletFavorites().length === 5;
  }

  public get walletEntitiesSelected() {
    return this.walletEntitySelections.length > 0;
  }

  public get entityIsSelectedForPreview(): boolean {
    return this.entitySelectedForPreview !== emptyEntity;
  }

  public get sortMenuTooltip(): string {
    if (this.wallet.length > 0 && !this.walletSortMenuOpen) {
      return 'Open Sorting options'
    } else {
      return ''
    }
  }

  public onCloseClicked(state: string): void {
    this.walletSidebarClosedEvent.emit(state);
    this.entitySelectedForPreview = emptyEntity;
  }

  public onAddEntityToWallet(entities: IEntity[], event: Event) {
    this.walletService.addEntityToWallet(entities);
    this.walletItemAddedEvent.emit(event);
  }

  public onAddEntityToOpenFolder() {
    const tree: UrlTree = this.router.parseUrl(this.router.url)
    const segmentGroup: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    const urlSegment: UrlSegment[] = segmentGroup.segments;
    const selections = this.walletEntitySelections.length;
    if (urlSegment[3]) {
      console.log('add to current folder: ', urlSegment[3].path);
      const folderName = urlSegment[3].path;
      let folder: IFileFolder = this.fileFolders.folders.find(folder => folder.name === folderName);
      this.fileFolderService.saveEntityToFolder(folder, this.walletEntitySelections);
      this.toastMessageService.setTriggerToast(true);
      this.toastMessageService.setMessage(selections > 1 ? `${selections} Items have been saved to your folder: ${folderName}` : `1 Item has been saved to your folder: ${folderName}`);
    } else {
      console.log('in main: ', urlSegment[0].path);
      this.fileFolderService.saveEntityToMain(this.walletEntitySelections);
      this.toastMessageService.setTriggerToast(true);
      this.toastMessageService.setMessage(selections > 1 ? `${selections} Items have been saved to your Main file folder.` : `1 Item has been saved to your Main file folder.`);
    }
  }

  public selectWalletEntity(entity: IEntity, event: Event) {
    event.stopPropagation()
    this.walletService.selectWalletEntity(entity);
  }

  public deleteEntitySelectionFromWallet() {
    this.walletService.deleteEntitySelectionFromWallet(this.walletEntitySelections);
  }

  public getWalletSearchResults(input: string): IEntity[] {
    let results = this.wallet.slice();
    console.log(results);
    console.log(input);
    results = results.filter(item =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );

    return results;
  }

  public onFavoriteItem(entity: IEntity, event: Event) {
    event.stopPropagation();
    // entity.walletFavorite = !entity.walletFavorite;
    const walletFavorites = this.walletService.getWalletFavorites();
    console.log(walletFavorites.length);
    if (!entity.walletFavorite && walletFavorites.length >= 5) {
      return
    } else if (!entity.walletFavorite && walletFavorites.length < 5) {
      entity.walletFavorite = true;
    } else if (entity.walletFavorite) {
      entity.walletFavorite = false;
    }
    this.walletService.saveWalletToLocalStorage();

  }

  public selectAllCheckClicked() {
    if (this.walletEntitySelections.length === 0) {
      this.walletService.selectAllWalletEntities();
    } else if (this.walletEntitySelections.length > 0) {
      this.walletService.unselectAllWalletEntities();
    }
  }

  public toggleSortMenu() {
    this.walletSortMenuOpen = !this.walletSortMenuOpen;
  }

  public closeSortMenu() {
    this.walletSortMenuOpen = false;
  }

  public sortWalletByNewestFirst() {
    this.walletService.sortWalletByNewestFirst();
  }

  public sortWalletByOldestFirst() {
    this.walletService.sortWalletByOldestFirst();
  }

  public sortWalletByAtoZ() {
    this.walletService.sortWalletByAtoZ();
  }

  public sortWalletByZtoA() {
    this.walletService.sortWalletByZtoA();
  }

  public sortWalletByFavorites() {
    this.walletService.sortWalletByFavorites();
  }

  public sortWalletBySelections() {
    this.walletService.sortWalletBySelections();
  }

  public toggleViewObjects() {
    this.viewObjectsOpen = !this.viewObjectsOpen;
  }

  public openEntityPreview(entity: IEntity) {
    this.entitySelectedForPreview === entity ? this.entitySelectedForPreview = emptyEntity : this.entitySelectedForPreview = entity;
  }

  public launchBarClicked(event: Event) {
    event.stopPropagation();
  }

  public closeEntityPreview() {
    this.entitySelectedForPreview = emptyEntity;
  }

  public saveWalletEntityToFolder(folder: IFileFolder) {
    const selections = this.walletEntitySelections.length;
    this.fileFolderService.saveEntityToFolder(folder, this.walletEntitySelections);
    this.toastMessageService.setTriggerToast(true);
    this.toastMessageService.setMessage(selections > 1 ? `${selections} Items have been saved to your folder: ${folder.name}` : `1 Item has been saved to your folder: ${folder.name}`);
  }

  public saveEntityToFolder(folder: IFileFolder) {
    const selections = this.selectedEntities.length;
    this.fileFolderService.saveEntityToFolder(folder, this.selectedEntities);
    this.toastMessageService.setTriggerToast(true);
    this.toastMessageService.setMessage(selections > 1 ? `${selections} Items have been saved to your folder: ${folder.name}` : `1 Item has been saved to your folder: ${folder.name}`);
  }

  public createFolder() {
    alert("Create Folder dialogue");
  }

  public folderIsSelected(folder: any) {
    folder.selected = !folder.selected;
    folder.selected ? this.folderSelected = true : this.folderSelected = false;
  }

  public editFolder(folder: any) {
    this.folderIsEditMode = !this.folderIsEditMode;
  }

  public unselect(event: Event, index: number, item: IEntity) {
    event.preventDefault();
    index = (index + 1);
    item.selected = false;
    const alreadySelected = _.find(this.walletEntitySelectionsIndices, s => s === (index));
    console.log('alreadySelected', alreadySelected, item, index);
    if (alreadySelected) {
      _.remove(this.walletEntitySelectionsIndices, s => s === (index));
    }
    console.log('walletEntitySelections', this.walletEntitySelectionsIndices, this.walletEntitySelections);
    this.ref.detectChanges();
  }

  public selectIndex(event: Event, index: number, item: IEntity) {
    index = (index + 1);
    item.selected = true;
    this.walletEntitySelectionsIndices.push((index));
    this.walletEntitySelections.push(item)
  }

  public handleItemMouseEvent(event: Event, index: number, item: IEntity) {
    console.log(item.selected, event);
    if (!item.selected) {
      this.selectIndex(event, index, item);
    }
    // else if (item.selected && event.ctrlKey) {
    //   console.log('ctrl click event');
    //   this.unselect(event, (index - 1), item);
    // }
    else if (item.selected) {
      return;
    }
    console.log('selected', this.walletEntitySelectionsIndices, this.walletEntitySelections);
    this.ref.detectChanges();
  }

  // public onDragStart(event: CdkDragStart, index: number) {
  //   this.dragging = event.source._dragRef;
  //   const indices = this.walletEntitySelectionsIndices.length ? this.walletEntitySelectionsIndices : [index + 1];
  //   console.log('dragstart, indices', indices);
  //   event.source.data = {
  //     indices,
  //     values: indices.map(i => this.items[i - 1]),
  //     source: this,
  //   };
  //   // console.log(event.source.data);
  //   this.ref.detectChanges();
  // }

  public onDragEnded() {
    console.log('drag end');
    this.dragging = null;
    this.ref.detectChanges();
  }

  public onDropped(event: CdkDragDrop<any>) {
    const data = event.item.data;
    console.log('onDropped', data);
    if (!event.isPointerOverContainer || !_.get(event, 'item.data.source')) {
      console.log('aborted drop');
      return;
    }
    this.dragging = null;
    // setTimeout(() => this.clearSelected());
  }

  // public clearSelected() {
  //   this.items = this.items.map( item => ({
  //     ...item,
  //     selected: false
  //   }));
  //   this.walletEntitySelectionsIndices = [];
  // }

  public onDroppedIntoList(event: CdkDragDrop<any>): void {
    if (!event.isPointerOverContainer || !_.get(event, 'item.data.source')) {
      console.log('aborted dropIntoList');
      return;
    }
    const data = event.item.data;
    console.log('droppedIntoList data', data);
    console.log('containers', event.previousContainer, event.container.data);
    let spliceIntoIndex = event.currentIndex;
    if (event.previousContainer === event.container) {
      console.log('same container');
      this.walletEntitySelectionsIndices.splice(-1, 1);
      const sum = _.sumBy(this.walletEntitySelectionsIndices, selectedIndex => selectedIndex <= spliceIntoIndex ? 1 : 0);
      spliceIntoIndex -= sum;
    } else if (event.previousContainer !== event.container) {
      console.log('not the same container', event.previousIndex, data, event.container.data);
      event.container.data.splice(spliceIntoIndex, 0, ...data.values);
    }
    // this.clearSelected();
    setTimeout(() => this.ref.detectChanges());
  }

}
