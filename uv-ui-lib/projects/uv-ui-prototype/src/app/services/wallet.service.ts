import { Injectable } from '@angular/core';
import { presetWallet, IWalletCategory } from '../wallet/wallet-preset';
import { BehaviorSubject, Observable } from 'rxjs';
import { IEntity } from '../models/entity.model';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

    public presetWallet = presetWallet;

  public walletItems = new BehaviorSubject<IWalletCategory[]>([]);
  public selectedEntities = new BehaviorSubject<IEntity[]>([]);

  public get walletItems$(): Observable<IWalletCategory[]> {
      return this.walletItems.asObservable();
  }

  public get selectedEntities$(): Observable<IEntity[]> {
    console.log('getting selected entities');
    return this.selectedEntities.asObservable();
}

  public setWalletItems(items: IWalletCategory[]): void {
      this.walletItems.next(items);
  }

  public setSelectedEntities(entities: IEntity[]): void {
    this.selectedEntities.next(entities);
  }

  public getPresetWallet(): IWalletCategory[] {
      return  this.presetWallet.slice();
  }

  public addEntityToWallet(entities: IEntity[]) {

  }

  public getSelectedEntities() {

  }
}
