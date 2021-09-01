import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
;
import { NgOnDestroyService } from '../../services/on-destroy.service';
import { SidebySideService } from '../../services/side-by-side.service';
import { ISbsFilter } from '../../models/sbs-filter.model';
import { ISbsSourceDocument } from '../../models/sbs-source-document.model';
import { ISbsTargetDocument } from '../../models/sbs-target-document.model';
import { sbsFilters } from '../sample-data/sbs-filters';
import { sourceDocumentSamples } from '../sample-data/source-documents';
import { targetDocumentSamples } from '../sample-data/target-documents';

@Component({
  selector: 'sbs-action-bar',
  templateUrl: './sbs-action-bar.component.html',
  styleUrls: ['./sbs-action-bar.component.scss', '../side-by-side.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SbsActionBarComponent implements OnInit {

    @Input() public showTargetDocuments = false;

    selectedTargetDocuments: ISbsTargetDocument[] = [];
    sourceDocumentsList: ISbsSourceDocument[] = [];
    loadedTargetDocuments: ISbsTargetDocument[] = targetDocumentSamples;
    loadedSourceDocuments: ISbsSourceDocument[] = sourceDocumentSamples;

    showMoreSelections = false;
    showFilterModal = false;
    searchText = '';

    constructor(
        private sbsService: SidebySideService, 
        private ref: ChangeDetectorRef,
        private destroy$: NgOnDestroyService
    ) { }

    toggleShowMoreSelections() {
        this.showMoreSelections = !this.showMoreSelections;
    }

    toggleFilterModal() {
        if(this.searchText === ''){
            this.showFilterModal = !this.showFilterModal;
        }
    }

    unselectTargetDocument(item: ISbsTargetDocument) {
        this.sbsService.unselectTargetDocument(item);
    }

    clearSelections(items: ISbsTargetDocument[]) {
        this.sbsService.clearTargetDocumentSelections(items);
    }

    clearSearch() {
        this.searchText = '';
    }

    ngOnInit(): void {
        this.sbsService.sourceDocumentsList$
        .pipe(takeUntil(this.destroy$))
        .subscribe(sourceDocs => {
            this.sourceDocumentsList = sourceDocs;
            this.ref.detectChanges();
        })
        this.sbsService.selectedTargetDocuments$
        .pipe(takeUntil(this.destroy$))
        .subscribe(targetDocs => {
            this.selectedTargetDocuments = targetDocs;
            this.ref.detectChanges();
        })
    }
}
