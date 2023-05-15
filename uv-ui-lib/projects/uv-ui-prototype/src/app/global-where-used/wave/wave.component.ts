import { Component, OnInit } from '@angular/core';
import { IEntity } from '../../models/entity.model';
import { WalletService } from '../../services/wallet.service';
import { columns } from './gwu-columns';

@Component({
  selector: 'app-wave',
  templateUrl: './wave.component.html',
  styleUrls: ['./wave.component.scss']
})

export class WaveComponent implements OnInit {

  public columns = columns;

  constructor(private walletService: WalletService){}

  ngOnInit(): void {
    this.walletService.clearSelectedEntities();
  }

  public onGwuEntitySelected(entity: IEntity) {
    this.walletService.selectEntityForWallet(entity);
  }

}
