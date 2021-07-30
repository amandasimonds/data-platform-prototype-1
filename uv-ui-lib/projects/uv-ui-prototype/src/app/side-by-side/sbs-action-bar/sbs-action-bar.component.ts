import { Component, OnInit, ChangeDetectionStrategy, Input, DoCheck, OnChanges, ChangeDetectorRef } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { NgOnDestroyService } from '../../services/on-destroy.service';
import { SidebySideService } from '../../services/side-by-side.service';
import { ISbsSourceDocument } from '../models/sbs-source-document.model';
import { ISbsTargetDocument } from '../models/sbs-target-document.model';
import { sourceDocumentSamples } from '../sample-data/source-documents';
import { targetDocumentSamples } from '../sample-data/target-documents';

@Component({
  selector: 'sbs-action-bar',
  templateUrl: './sbs-action-bar.component.html',
  styleUrls: ['./sbs-action-bar.component.scss', '../side-by-side.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SbsActionBarComponent implements OnInit, OnChanges, DoCheck {

    @Input() public showTargetDocuments = false;

    selectedTargetDocuments: ISbsTargetDocument[] = [];
    selectedSourceDocuments: ISbsSourceDocument[] = [];
    loadedTargetDocuments: ISbsTargetDocument[] = targetDocumentSamples;
    loadedSourceDocuments: ISbsSourceDocument[] = sourceDocumentSamples;

    showMoreSelections = false;
    showFilterModal = false;

    constructor(
        private sbsService: SidebySideService, 
        private ref: ChangeDetectorRef,
        private destroy$: NgOnDestroyService
    ) { }

    toggleShowMoreSelections() {
        this.showMoreSelections = !this.showMoreSelections;
    }

    toggleFilterModal() {
        this.showFilterModal = !this.showFilterModal;
    }

    unselectTargetDocument(item: ISbsTargetDocument) {
        item.active = !item.active;
        this.sbsService.selectTargetDocument(item);
    }

    clearSelections() {
        this.sbsService.clearTargetDocumentSelections();
    }

    ngOnInit(): void {
        this.sbsService.selectedSourceDocuments$.subscribe(sourceDocs => {
            this.selectedSourceDocuments = sourceDocs;
            this.ref.detectChanges();
            takeUntil(this.destroy$);
        })
        this.sbsService.selectedTargetDocuments$.subscribe(targetDocs => {
            this.selectedTargetDocuments = targetDocs;
            this.ref.detectChanges();
            takeUntil(this.destroy$);
        })
    }

    ngOnChanges(): void {
    }

    ngDoCheck(): void {
    }

}
