import { Injectable } from '@angular/core';
import { presetWallet, IWalletCategory } from '../wallet/wallet-preset';
import { BehaviorSubject, Observable } from 'rxjs';
import { IEntity } from '../models/entity.model';
import { HttpClient } from '@angular/common/http';

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
        id: 1,
        name: 'WG-12',
        description: 'Lorem upsum door sit amet consectetur',
        date: '',
        active: false,
        selected: false,
        disabled: false,
        formattedDate: '',
        showDetails: false,
        tags: ['Lorem Ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem', 'Ipsum', 'Lorem Ipsum', 'Sit Amet', 'Lorem', 'Lorem, Dolor, and 3 more'],
        progress: 0,
        walletFavorite: false,
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        walletDate: '',
        formattedWalletDate: ''
      },
    ]
  }];

  public initialWalletItems: IEntity[] = [
    {
      category: 'Part',
      id: 1,
      name: 'WG-12',
      description: 'Lorem upsum door sit amet consectetur',
      date: '',
      active: false,
      selected: false,
      disabled: false,
      formattedDate: '',
      showDetails: false,
      tags: ['Lorem Ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem', 'Ipsum', 'Lorem Ipsum', 'Sit Amet', 'Lorem', 'Lorem, Dolor, and 3 more'],
      progress: 0,
      walletFavorite: false,
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      walletDate: '',
      formattedWalletDate: ''
    }
  ]

  public savedWallet: IWalletCategory[] = JSON.parse(localStorage.getItem('wallet'));
  public walletItems$ = new BehaviorSubject<IEntity[]>([]);
  public selectedEntities$ = new BehaviorSubject<IEntity[]>([]);
  public walletFavorites$ = new BehaviorSubject<IEntity[]>([]);
  public selectedWalletEntities$ = new BehaviorSubject<IEntity[]>([]);

  public get walletItemsObservable(): Observable<IEntity[]> {
    return this.walletItems$.asObservable();
  }

  public get selectedEntitiesObservable(): Observable<IEntity[]> {
    console.log('getting selected entities');
    return this.selectedEntities$.asObservable();
  }

  constructor(private http: HttpClient) { }

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
    if (localStorageWallet === null) {
      return this.getPresetLocalStorageWallet();
    } else {
      this.walletItems$.next(localStorageWallet);
      return this.walletItems$.value.slice();
    }
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
    console.log('new entities selected for wallet', this.selectedEntities$.value);
  }

  public addEntityToWallet(entities: IEntity[]) {
    const walletItemsList = this.walletItems$.value.slice();
    console.log(walletItemsList);
    for (let item of this.selectedEntities$.value) {
      item.walletDate = new Date().toString();
      console.log(item.walletDate);
      item.selected = false;
      walletItemsList.push(item);
    }

    this.walletItems$.next(walletItemsList);
    this.saveWalletToLocalStorage();
  }

  // public getSelectedEntities(): IEntity[] {
  //   return this.selectedEntities$;
  // }

  public clearSelectedEntities() {
    this.selectedEntities$.next([]);
  }

  public saveWalletToLocalStorage() {
    const wallet = this.walletItems$.value;
    console.log('save to localstorage', wallet);
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
    console.log('updated wallet entities list', this.selectedWalletEntities$.value);
  }

  public deleteEntitySelectionFromWallet(entities: IEntity[]) {
    console.log('delete these: ', entities);
    const wallet = this.walletItems$.value.slice();
    // const filteredWallet: IEntity[] = [];
    wallet.forEach(item => {
      console.log('item', item.name);
      entities.forEach(entity => {
        console.log('selected entity', entity.name);
        if (entity.name === item.name) {
          const index = wallet.indexOf(item);
          console.log(entity.name, entity.name === item.name, index);
          wallet.splice(index, 1);
        }
        entity.selected = false;
      })
    })

    // entities.forEach(entity =>
    //   wallet.forEach(category => {
    //     console.log(category);
    //     category.items.filter(item => entity.name !== item.name)
    //   }
    //   ))

    console.log(wallet);
    this.walletItems$.next(wallet);
    this.selectedWalletEntities$.next([]);
    this.saveWalletToLocalStorage();
  }

  public setItemAsFavorite(entities: IEntity[]) {
    const walletEntities = this.walletItems$.value.slice();
    console.log(walletEntities);
    const favoritedEntities = walletEntities.filter(entity => entity.walletFavorite);
    this.walletFavorites$.next(favoritedEntities);
    console.log(this.walletFavorites$.value);
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
    console.log(wallet);
      wallet.sort((a, b) => (
        new Date(b.date).getTime() - new Date(a.date).getTime()
    ));
    this.walletItems$.next(wallet);
    console.log(wallet);
  }

  public sortWalletByOldestFirst() {
    const wallet = this.walletItems$.value.slice();
    console.log(wallet);
      wallet.sort((a, b) => (
        new Date(b.date).getTime() - new Date(a.date).getTime()
    ));
    wallet.reverse();
    this.walletItems$.next(wallet);
    console.log(wallet);
  }
}
