import { Component, OnInit, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { SidebySideService } from '../../services/side-by-side.service';
import { ISbsSourceDocument } from '../models/sbs-source-document.model';
import { ISbsTargetDocument } from '../models/sbs-target-document.model';
import { sourceDocumentSamples } from '../sample-data/source-documents';

@Component({
  selector: 'app-source-document',
  templateUrl: './source-document.component.html',
  styleUrls: ['./source-document.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SourceDocumentComponent implements OnInit {

    public sourceDocuments: ISbsSourceDocument[] = sourceDocumentSamples;

    @Output() selectedSourceDocument: ISbsSourceDocument = {
        id: 1,
        title:'',
        description: 'string',
        active: false,
        tags: []
    };

    onSourceDocumentSelected(item: ISbsSourceDocument){
        this.sbsService.sourceDocumentSelected.emit(this.selectedSourceDocument);
        item.active = !item.active;
    }

    // onTargetDocumentSelected(event: boolean) {
    //     this.sbsService.sourceDocumentSelected
    //         .subscribe(
    //             (document: ISbsSourceDocument) => {
    //                 this.selectedSourceDocument = document;
    //                 this.selectedSourceDocument.active = true;
    //             }
    //         )
    // }

  constructor(private sbsService: SidebySideService) { }

  ngOnInit(): void {
  }

}
