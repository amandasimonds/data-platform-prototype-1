import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SidebySideService } from '../../../services/side-by-side.service';
import { sourceDocumentSamples } from '../../sample-data/source-documents';
import { IEntity } from '../../../models/entity.model';

@Component({
  selector: 'app-source-document',
  templateUrl: './source-document.component.html',
  styleUrls: ['../sbs-document.component.scss', '../../side-by-side.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SourceDocumentComponent {

    public sourceDocuments: IEntity[] = sourceDocumentSamples;

    constructor(private sbsService: SidebySideService) { }

    public onSourceDocumentSelected(item: IEntity, i: number): void {
        this.sbsService.selectSourceDocument(item, i);
    }

    public onShowMoreDocumentDetails(event: Event, item: IEntity): void {
        item.showDetails = !item.showDetails;
        event.stopPropagation();
    }
}
