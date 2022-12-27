import { Injectable } from '@angular/core';
import { presetWallet, IWalletCategory } from '../wallet/wallet-preset';
import { BehaviorSubject, Observable } from 'rxjs';
import { IEntity } from '../models/entity.model';
import { HttpClient } from '@angular/common/http';
import { ToastMessageService } from './toast-message.service';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  public presetWallet = presetWallet;
  public initialWalletCategory: IWalletCategory[] = [{
    name: 'Documents',
    open: false,
    selected: false,
    items: [
      {
        category: 'Part',
        type: 'file',
        id: 1,
        name: 'WG-12',
        description: 'Description about the item.',
        date: '',
        active: false,
        selected: false,
        disabled: false,
        formattedDate: '',
        showDetails: false,
        tags: ['Lorem Ipsum', 'Sit amet', 'Placeholder Tag', 'Lorem', 'Ipsum', 'Lorem Ipsum', 'Sit Amet', 'Lorem', 'Placeholder Tag'],
        progress: 0,
        walletFavorite: false,
        details: 'Details about the item.',
        walletDate: '',
        formattedWalletDate: '',
        launchbar: false,
        menuActive: false
      },
    ]
  }];

  public initialWalletItems: IEntity[] = [
    {
      category: 'Part',
      type: 'file',
      id: 1,
      name: 'ED-720385 Handguard Assembly',
      description: 'Description about the item.',
      date: '',
      active: false,
      selected: false,
      disabled: false,
      formattedDate: '',
      showDetails: false,
      tags: ['Lorem Ipsum', 'Sit amet', 'Placeholder Tag', 'Lorem', 'Ipsum', 'Lorem Ipsum', 'Sit Amet', 'Lorem', 'Placeholder Tag'],
      progress: 0,
      walletFavorite: false,
      details: 'Details about the item.',
      walletDate: new Date().toString(),
      formattedWalletDate: '',
      launchbar: false,
      menuActive: false
    },
    {
      category: 'Part',
      type: 'file',
      id: 1,
      name: 'SDS Hydrogen Sulfide',
      description: 'Description about the item.',
      date: '',
      active: false,
      selected: false,
      disabled: false,
      formattedDate: '',
      showDetails: false,
      tags: ['SDS', 'Chemical', 'Placeholder Tag', 'Lorem', 'Ipsum', 'Lorem Ipsum', 'Sit Amet', 'Lorem', 'Placeholder Tag'],
      progress: 0,
      walletFavorite: false,
      details: 'Details about the item.',
      walletDate: new Date().toString(),
      formattedWalletDate: '',
      launchbar: false,
      menuActive: false
    }
  ]

  public savedWallet: IWalletCategory[] = JSON.parse(localStorage.getItem('wallet'));
  public walletItems$ = new BehaviorSubject<IEntity[]>([]);
  public selectedEntities$ = new BehaviorSubject<IEntity[]>([]);
  public selectedWalletEntities$ = new BehaviorSubject<IEntity[]>([]);

  public walletSidebarState = new BehaviorSubject<string>('hidden');
  public walletIsOpen = new BehaviorSubject<boolean>(false);

  public get walletIsOpen$(): Observable<boolean> {
    return this.walletIsOpen.asObservable();
  }

  public get walletSidebarState$(): Observable<string> {
    return this.walletSidebarState.asObservable();
  }

  public setWalletIsOpen(isOpen: boolean): void {
    this.walletIsOpen.next(isOpen);
  }

  public setWalletSidebarState(state: string): void {
    this.walletSidebarState.next(state);
  }

  public get walletItemsObservable(): Observable<IEntity[]> {
    return this.walletItems$.asObservable();
  }

  public get selectedEntitiesObservable(): Observable<IEntity[]> {
    return this.selectedEntities$.asObservable();
  }

  constructor(private http: HttpClient, private toastMessageService: ToastMessageService) { }

  // public getWalletApi() {
  //   const result = JSON.stringify(walletApi);
  //   console.log(typeof result, result);
  //   return this.http.get<IEntity[]>(result);
  // }

  public setWalletItems(items: IEntity[]): void {
    this.walletItems$.next(items);
  }

  public setSelectedEntities(entities: IEntity[]): void {
    this.selectedEntities$.next(entities);
  }

  public getWallet(): IEntity[] {
    const localStorageWallet = JSON.parse(localStorage.getItem('wallet'));
    if (localStorageWallet === null || localStorageWallet.length === 0) {
      return this.getPresetLocalStorageWallet();
    } else {
      this.walletItems$.next(localStorageWallet);
      return this.walletItems$.value.slice();
    }
  }

  public getWalletFavorites(): IEntity[] {
    const wallet = this.walletItems$.value.slice();
    const walletFavorites = wallet.filter(item => item.walletFavorite);
    return walletFavorites;
  }

  public getPresetLocalStorageWallet(): IEntity[] {
    this.walletItems$.next(this.initialWalletItems);
    return this.initialWalletItems;
  }

  // public getPresetWallet(): IEntity[] {
  //   return this.presetWallet.slice();
  // }

  public selectEntityForWallet(entity: IEntity): void {
    const entitiesList: IEntity[] = this.selectedEntities$.value.slice();
    if (!entity.selected) {
      entity.selected = true;
      entitiesList.push(entity);
    } else if (entity.selected) {
      entity.selected = false;
    }
    const filteredList = entitiesList.filter(entity => entity.selected);
    this.selectedEntities$.next(filteredList);
  }

  public addEntityToWallet(entities: IEntity[]) {
    const walletItemsList = this.walletItems$.value.slice();
    const oldItems = entities.filter(entity1 => walletItemsList.some(entity2 => entity1.name === entity2.name));
    const newItems = entities.filter(entity1 => !walletItemsList.some(entity2 => entity1.name === entity2.name));
    for (let item of oldItems) {
      for (let walletItem of walletItemsList) {
        item.name === walletItem.name ? walletItem.walletDate = new Date().toString() : null;
      }
    }
    for (let item of newItems) {
      item.walletDate = new Date().toString();
      item.selected = false;
      walletItemsList.unshift(item);
    }
    this.walletItems$.next(walletItemsList);
    this.sortWalletByNewestFirst();
    this.saveWalletToLocalStorage();
    this.selectedEntities$.next([]);
    this.toastMessageService.setTriggerToast(true);
    this.toastMessageService.setMessage(newItems.length > 1 ? `${newItems.length} Items have been added to your wallet.` : `1 Item has been added to your wallet.`)
  }

  public addEntityToFolder(entities: IEntity[]) {
    const walletItemsList = this.walletItems$.value.slice();
    const oldItems = entities.filter(entity1 => walletItemsList.some(entity2 => entity1.name === entity2.name));
    const newItems = entities.filter(entity1 => !walletItemsList.some(entity2 => entity1.name === entity2.name));
    for (let item of oldItems) {
      for (let walletItem of walletItemsList) {
        item.name === walletItem.name ? walletItem.walletDate = new Date().toString() : null;
      }
    }
    for (let item of newItems) {
      item.walletDate = new Date().toString();
      item.selected = false;
      walletItemsList.unshift(item);
    }
    this.walletItems$.next(walletItemsList);
    this.sortWalletByNewestFirst();
    this.saveWalletToLocalStorage();
    this.selectedEntities$.next([]);
    this.toastMessageService.setTriggerToast(true);
    this.toastMessageService.setMessage(newItems.length > 1 ? `${newItems.length} Items have been added to your wallet.` : `1 Item has been added to your wallet.`)
  }

  // public getSelectedEntities(): IEntity[] {
  //   return this.selectedEntities$;
  // }

  public clearSelectedEntities() {
    this.selectedEntities$.next([]);
  }

  public resetItemsToInactive(items: IEntity[]) {
    items.map(item => ({
      ...item,
      active: false
    }));
  }

  public saveWalletToLocalStorage() {
    const wallet = this.walletItems$.value;
    localStorage.setItem('wallet', JSON.stringify(wallet));
  }

  public selectWalletEntity(entity: IEntity) {
    const entitiesList: IEntity[] = this.selectedWalletEntities$.value;
    if (!entity.selected) {
      entity.selected = true;
      entitiesList.push(entity);
    } else if (entity.selected) {
      entity.selected = false;
    }
    this.updateSelectedWalletEntities();
  }

  public updateSelectedWalletEntities() {
    const updatedList = this.walletItems$.value.filter(entity => entity.selected);
    this.selectedWalletEntities$.next(updatedList);
  }

  public deleteEntitySelectionFromWallet(entities: IEntity[]) {
    const wallet = this.walletItems$.value.slice();
    if (entities.length === wallet.length) {
      this.walletItems$.next([]);
    } else {
      // const filteredWallet: IEntity[] = [];
      wallet.forEach(item => {
        entities.forEach(entity => {
          if (entity.name === item.name) {
            const index = wallet.indexOf(item);
            wallet.splice(index, 1);
          }
          entity.selected = false;
        })
      })
      this.walletItems$.next(wallet);
    }

    // entities.forEach(entity =>
    //   wallet.forEach(category => {
    //     console.log(category);
    //     category.items.filter(item => entity.name !== item.name)
    //   }
    //   ))

    console.log(wallet);
    this.selectedWalletEntities$.next([]);
    this.saveWalletToLocalStorage();
  }

  public typeAheadSearch(input: string): IEntity[] {
    let results = this.walletItems$.value.slice();
    results = results.filter(item =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );

    return results;
  }

  public selectAllWalletEntities() {
    const walletEntities = this.walletItems$.value.slice();
    const newWallet = walletEntities.map(entity => ({
      ...entity,
      selected: true
    }))
    this.walletItems$.next(newWallet);
    this.updateSelectedWalletEntities();
  }

  public unselectAllWalletEntities() {
    const walletEntities = this.walletItems$.value.slice();
    const newWallet = walletEntities.map(entity => ({
      ...entity,
      selected: false
    }))
    this.walletItems$.next(newWallet);
    this.updateSelectedWalletEntities();
  }

  public sortWalletByNewestFirst() {
    const wallet = this.walletItems$.value.slice();
    wallet.sort((a, b) =>
      new Date(b.walletDate).getTime() - new Date(a.walletDate).getTime()
    );
    this.walletItems$.next(wallet);
    this.saveWalletToLocalStorage();
  }

  public sortWalletByOldestFirst() {
    let wallet = this.walletItems$.value.slice();
    wallet.sort((a, b) => (
      new Date(b.walletDate).getTime() - new Date(a.walletDate).getTime()
    ));
    wallet.reverse();
    this.walletItems$.next(wallet);
    this.saveWalletToLocalStorage();
  }

  public sortWalletByAtoZ() {
    const wallet = this.walletItems$.value.slice();
    wallet.sort((a, b) => (
      a.name.localeCompare(b.name)
    ));
    this.walletItems$.next(wallet);
  }

  public sortWalletByZtoA() {
    const wallet = this.walletItems$.value.slice();
    wallet.sort((a, b) => (
      a.name.localeCompare(b.name)
    ));
    wallet.reverse();
    this.walletItems$.next(wallet);
  }

  public sortWalletByFavorites() {
    const wallet = this.walletItems$.value.slice();
    wallet.sort((a, b) => (
      Number(a.walletFavorite) - Number(b.walletFavorite)
    ));
    wallet.reverse();
    this.walletItems$.next(wallet);
  }

  public sortWalletBySelections() {
    const wallet = this.walletItems$.value.slice();
    wallet.sort((a, b) => (
      Number(a.selected) - Number(b.selected)
    ));
    wallet.reverse();
    this.walletItems$.next(wallet);
  }
}
