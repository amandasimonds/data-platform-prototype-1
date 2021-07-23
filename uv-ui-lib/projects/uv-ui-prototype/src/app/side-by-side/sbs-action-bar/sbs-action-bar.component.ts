import { Component, OnInit, ChangeDetectionStrategy, Input, DoCheck, OnChanges, ChangeDetectorRef } from '@angular/core';
import { SidebySideService } from '../../services/side-by-side.service';
import { ISbsSourceDocument } from '../models/sbs-source-document.model';
import { ISbsTargetDocument } from '../models/sbs-target-document.model';
import { sourceDocumentSamples } from '../sample-data/source-documents';

@Component({
  selector: 'sbs-action-bar',
  templateUrl: './sbs-action-bar.component.html',
  styleUrls: ['./sbs-action-bar.component.scss', '../side-by-side.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SbsActionBarComponent implements OnInit, OnChanges {

    @Input() public showTargetDocuments = false;

    loadedTargetDocuments: ISbsTargetDocument[] = [];
    loadedSourceDocuments: ISbsSourceDocument[] = [];

    sourceDocumentsCount = sourceDocumentSamples.length;
    targetDocumentsCount = this.loadedTargetDocuments.length;

    constructor(private sbsService: SidebySideService) { }

    ngOnInit(): void {
    this.sbsService.sourceDocumentSelected
        .subscribe(
                () => {
                    this.loadedTargetDocuments = this.sbsService.getTargetDocuments();
                    this.loadedSourceDocuments = this.sbsService.getSourceDocuments();
                    this.targetDocumentsCount = this.loadedTargetDocuments.length;
                }
            )
    }

    ngOnChanges(): void {
    }

}
