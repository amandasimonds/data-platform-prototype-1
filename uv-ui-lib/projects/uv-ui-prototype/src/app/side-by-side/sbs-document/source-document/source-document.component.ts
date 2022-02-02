import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { SidebySideService } from '../../../services/side-by-side.service';
import { sourceDocumentSamples } from '../../sample-data/source-documents';
import { IEntity } from '../../../models/entity.model';
import { WalletService } from '../../../services/wallet.service';

@Component({
    selector: 'app-source-document',
    templateUrl: './source-document.component.html',
    styleUrls: ['../sbs-document.component.scss', '../../side-by-side.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SourceDocumentComponent implements OnInit {

    public sourceDocuments: IEntity[] = sourceDocumentSamples;

    constructor(private sbsService: SidebySideService, private walletService: WalletService) { }

    ngOnInit(): void {
        // this.walletService.clearSelectedEntities();
    }

    public onSourceDocumentSelected(item: IEntity, i: number): void {
        this.sbsService.selectSourceDocument(item, i);
        this.walletService.selectEntityForWallet(item);
    }

    public onShowMoreDocumentDetails(event: Event, item: IEntity): void {
        item.showDetails = !item.showDetails;
        event.stopPropagation();
    }
}
