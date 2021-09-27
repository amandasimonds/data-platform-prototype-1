import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SidebySideService } from '../../../services/side-by-side.service';
import { ISbsSourceDocument } from '../../../models/sbs-source-document.model';
import { sourceDocumentSamples } from '../../sample-data/source-documents';

@Component({
  selector: 'app-source-document',
  templateUrl: './source-document.component.html',
  styleUrls: ['../sbs-document.component.scss', '../../side-by-side.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SourceDocumentComponent {

    public sourceDocuments: ISbsSourceDocument[] = sourceDocumentSamples;

    constructor(private sbsService: SidebySideService) { }

    public onSourceDocumentSelected(item: ISbsSourceDocument, i: number): void {
        this.sbsService.selectSourceDocument(item, i);
    }

    public onShowMoreDocumentDetails(event: Event, item: ISbsSourceDocument): void {
        item.showDetails = !item.showDetails;
        event.stopPropagation();
    }
}
