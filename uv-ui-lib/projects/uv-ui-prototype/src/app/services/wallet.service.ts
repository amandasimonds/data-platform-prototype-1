import { Injectable } from '@angular/core';
import { presetWallet, IWalletCategory } from '../wallet/wallet-preset';
import { BehaviorSubject, Observable } from 'rxjs';
import { IEntity } from '../models/entity.model';

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
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    ]
  }];

  public savedWallet: IWalletCategory[] = JSON.parse(localStorage.getItem('wallet'));

  public walletItems$ = new BehaviorSubject<IWalletCategory[]>([]);
  public selectedEntities$ = new BehaviorSubject<IEntity[]>([]);
  public selectedWalletEntities$ = new BehaviorSubject<IEntity[]>([]);

  public get walletItemsObservable(): Observable<IWalletCategory[]> {
    return this.walletItems$.asObservable();
  }

  public get selectedEntitiesObservable(): Observable<IEntity[]> {
    console.log('getting selected entities');
    return this.selectedEntities$.asObservable();
  }

  public setWalletItems(items: IWalletCategory[]): void {
    this.walletItems$.next(items);
  }

  public setSelectedEntities(entities: IEntity[]): void {
    this.selectedEntities$.next(entities);
  }

  public getWallet(): IWalletCategory[] {
    const localStorageWallet = JSON.parse(localStorage.getItem('wallet'));
    if (localStorageWallet === null) {
      return this.getPresetLocalStorageWallet();
    } else {
      this.walletItems$.next(localStorageWallet);
      return this.walletItems$.value.slice();
    }
  }

  public getPresetLocalStorageWallet(): IWalletCategory[] {
    this.walletItems$.next(this.initialWalletCategory);
    return this.initialWalletCategory;
  }

  public getPresetWallet(): IWalletCategory[] {
    return this.presetWallet.slice();
  }

  public selectEntityForWallet(entity: IEntity): void {
    const entitiesList: IEntity[] = this.selectedEntities$.value;
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
    const walletItemsList = this.walletItems$.value;
    console.log(walletItemsList);
    for (let item of this.selectedEntities$.value) {
      item.selected = false;
      walletItemsList[0].items.push(item);
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
    const newList = entitiesList.filter(entity => entity.selected);
    this.selectedWalletEntities$.next(newList);
    console.log('new selected wallet entities list', this.selectedWalletEntities$.value);
  }

  public deleteEntitySelectionFromWallet(entities: IEntity[]) {
    console.log('delete these: ', entities);
    const wallet = this.walletItems$.value.slice();
    wallet.forEach((category) => category.items.forEach((item: IEntity) => {
      entities.forEach(entity => {
        if(entity.name === item.name) {
          const index = category.items.indexOf(item);
          category.items.splice(index, 1);
        }
        entity.selected = false;
      })
    }))

    console.log(wallet);
    this.walletItems$.next(wallet);
    this.selectedWalletEntities$.next([]);
  }
}
