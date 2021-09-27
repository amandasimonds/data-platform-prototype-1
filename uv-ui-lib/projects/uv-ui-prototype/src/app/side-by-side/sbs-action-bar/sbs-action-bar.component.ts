import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
;
import { NgOnDestroyService } from '../../services/on-destroy.service';
import { SidebySideService } from '../../services/side-by-side.service';
import { ISbsSourceDocument } from '../../models/sbs-source-document.model';
import { ISbsTargetDocument } from '../../models/sbs-target-document.model';
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

    public selectedTargetDocuments: ISbsTargetDocument[] = [];
    public sourceDocumentsList: ISbsSourceDocument[] = [];
    public loadedTargetDocuments: ISbsTargetDocument[] = targetDocumentSamples;
    public loadedSourceDocuments: ISbsSourceDocument[] = sourceDocumentSamples;

    public showMoreSelections = false;
    public showFilterModal = false;
    public searchText = '';

    constructor(
        private sbsService: SidebySideService,
        private ref: ChangeDetectorRef,
        private destroy$: NgOnDestroyService
    ) { }

    public toggleShowMoreSelections(): void {
        this.showMoreSelections = !this.showMoreSelections;
    }

    public toggleFilterModal(): void {
        if(this.searchText === ''){
            this.showFilterModal = !this.showFilterModal;
        }
    }

    public unselectTargetDocument(item: ISbsTargetDocument): void {
        this.sbsService.unselectTargetDocument(item);
    }

    public clearSelections(items: ISbsTargetDocument[]): void {
        this.sbsService.clearTargetDocumentSelections(items);
    }

    public clearSearch(): void {
        this.searchText = '';
    }

    public ngOnInit(): void {
        this.sbsService.sourceDocumentsList$
        .pipe(takeUntil(this.destroy$))
        .subscribe(sourceDocs => {
            this.sourceDocumentsList = sourceDocs;
            this.ref.detectChanges();
        });
        this.sbsService.selectedTargetDocuments$
        .pipe(takeUntil(this.destroy$))
        .subscribe(targetDocs => {
            this.selectedTargetDocuments = targetDocs;
            this.ref.detectChanges();
        });
    }
}
