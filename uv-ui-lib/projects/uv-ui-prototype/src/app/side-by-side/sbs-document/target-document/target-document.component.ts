import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { NgOnDestroyService } from '../../../services/on-destroy.service';
import { SidebySideService } from '../../../services/side-by-side.service';
import { targetDocumentSamples } from '../../sample-data/target-documents';
import { IEntity } from '../../../models/entity.model';
import { WalletService } from '../../../services/wallet.service';

@Component({
  selector: 'app-target-document',
  templateUrl: './target-document.component.html',
  styleUrls: ['../sbs-document.component.scss', '../../side-by-side.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TargetDocumentComponent implements OnInit {

    public targetDocuments: IEntity[] = targetDocumentSamples;
    public selectedTargetDocuments: IEntity[] = [];

    constructor(
        private sbsService: SidebySideService,
        private ref: ChangeDetectorRef,
        private destroy$: NgOnDestroyService,
        private walletService: WalletService) {}

    public onTargetDocumentSelected(item: IEntity): void {
        item.active = !item.active;
        this.sbsService.selectTargetDocument(item);
        this.walletService.selectEntityForWallet(item);
    }

    public onShowMoreDocumentDetails(event: Event, item: IEntity): void {
        item.showDetails = !item.showDetails;
        event.stopPropagation();
    }

    public ngOnInit(): void {
        this.sbsService.selectedTargetDocuments$
        .pipe(takeUntil(this.destroy$))
        .subscribe(targetDocs => {
            this.selectedTargetDocuments = targetDocs;
            this.ref.detectChanges();
        });
    }
}
