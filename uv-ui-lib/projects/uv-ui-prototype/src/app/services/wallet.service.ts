import { Injectable } from '@angular/core';
import { presetWallet, IWalletCategory } from '../wallet/wallet-preset';
import { BehaviorSubject, Observable } from 'rxjs';
import { IEntity } from '../models/entity.model';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  public presetWallet = presetWallet;
  public initialWalletCategory: IWalletCategory =  {
    name: 'Documents',
    open: false,
    selected: false,
    items: []
};

  public walletItems$ = new BehaviorSubject<IWalletCategory[]>([this.initialWalletCategory]);
  public selectedEntities$ = new BehaviorSubject<IEntity[]>([]);

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

  public getPresetWallet(): IWalletCategory[] {
    return this.presetWallet.slice();
  }

  public addEntityToWallet(entities: IEntity[]) {
    const walletItemsList = this.walletItems$.value;
    for(let item of this.selectedEntities$.value) {
      walletItemsList[0].items.push(item);
    }

    this.walletItems$.next(walletItemsList);
  }

  // public getSelectedEntities(): IEntity[] {
  //   return this.selectedEntities$;
  // }

  public selectEntityForWallet(entity: IEntity): void {
    const entitiesList: IEntity[] = this.selectedEntities$.value;
    console.log('selectEntity', entity.selected);
    if (!entity.selected) {
      entity.selected = true;
      entitiesList.push(entity);
      console.log('entity selected', entitiesList);
    } else if (entity.selected) {
      console.log('entity unselected');
      entity.selected = false;
    }
    const newList = entitiesList.filter(entity => entity.selected);
    this.selectedEntities$.next(newList);
    console.log('entitySelected', this.selectedEntities$.value);
  }

  public clearSelectedEntities() {
    this.selectedEntities$.next([]);
  }
}
