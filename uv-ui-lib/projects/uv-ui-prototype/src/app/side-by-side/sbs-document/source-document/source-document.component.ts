import { Component, ChangeDetectionStrategy, Output, Input, EventEmitter } from '@angular/core';
import { SidebySideService } from '../../../services/side-by-side.service';
import { ISbsSourceDocument } from '../../models/sbs-source-document.model';
import { sourceDocumentSamples } from '../../sample-data/source-documents';

@Component({
  selector: 'app-source-document',
  templateUrl: './source-document.component.html',
  styleUrls: ['../sbs-document.component.scss', '../../side-by-side.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SourceDocumentComponent {

    public sourceDocuments: ISbsSourceDocument[] = sourceDocumentSamples;

    showMoreDocumentDetails = false;

    @Output() selectedSourceDocument: ISbsSourceDocument = {
        id: 1,
        title:'',
        description: 'string',
        active: false,
        tags: []
    };

    @Output() onSourceDocumentClickedEvent: EventEmitter<boolean> = new EventEmitter();

    onShowMoreDocumentDetails() {
        this.showMoreDocumentDetails = !this.showMoreDocumentDetails;
        console.log('click event');
    }

    constructor(private sbsService: SidebySideService) { }

    onSourceDocumentSelected(item: ISbsSourceDocument){
        this.sbsService.selectSourceDocuments(item);
        item.active = !item.active;
        this.onSourceDocumentClickedEvent.emit(true);
    }
}
