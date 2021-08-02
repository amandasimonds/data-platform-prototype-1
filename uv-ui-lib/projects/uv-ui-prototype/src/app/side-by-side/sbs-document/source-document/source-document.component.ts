import { Component, ChangeDetectionStrategy, Output } from '@angular/core';
import { SidebySideService } from '../../../services/side-by-side.service';
import { ISbsSourceDocument } from '../../models/sbs-source-document.model';
import { sourceDocumentSamples } from '../../sample-data/source-documents';

@Component({
  selector: 'app-source-document',
  templateUrl: './source-document.component.html',
  styleUrls: ['./source-document.component.scss', '../../side-by-side.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SourceDocumentComponent {

    public sourceDocuments: ISbsSourceDocument[] = sourceDocumentSamples;

    @Output() selectedSourceDocument: ISbsSourceDocument = {
        id: 1,
        title:'',
        description: 'string',
        active: false,
        tags: []
    };

    constructor(private sbsService: SidebySideService) { }

    onSourceDocumentSelected(item: ISbsSourceDocument){
        this.sbsService.selectSourceDocuments(item);
        item.active = !item.active;
    }
}
