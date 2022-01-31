import { Injectable } from '@angular/core';
import { presetWallet, IWalletCategory } from '../wallet/wallet-preset';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

    public presetWallet = presetWallet;

  public walletItems = new BehaviorSubject<IWalletCategory[]>([]);

  public get walletItems$(): Observable<IWalletCategory[]> {
      return this.walletItems.asObservable();
  }

  public setWalletItems(items: IWalletCategory[]): void {
      this.walletItems.next(items);
  }

  public getPresetWallet(): IWalletCategory[] {
      return  this.presetWallet.slice();
  }
}
