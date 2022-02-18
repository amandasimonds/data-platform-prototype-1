import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { NgOnDestroyService } from '../../services/on-destroy.service';
import { SidebySideService } from '../../services/side-by-side.service';
import { sourceDocumentSamples } from '../sample-data/source-documents';
import { targetDocumentSamples } from '../sample-data/target-documents';
import { IEntity } from '../../models/entity.model';

@Component({
  selector: 'sbs-action-bar',
  templateUrl: './sbs-action-bar.component.html',
  styleUrls: ['./sbs-action-bar.component.scss', '../side-by-side.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SbsActionBarComponent implements OnInit {

    @Input() public showTargetDocuments = false;
    @Input() public isDevUser = false;

    public selectedTargetDocuments: IEntity[] = [];
    public sourceDocumentsList: IEntity[] = [];
    public loadedTargetDocuments: IEntity[] = targetDocumentSamples;
    public loadedSourceDocuments: IEntity[] = sourceDocumentSamples;

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

    public unselectTargetDocument(item: IEntity): void {
        this.sbsService.unselectTargetDocument(item);
    }

    public clearSelections(items: IEntity[]): void {
        this.sbsService.clearTargetDocumentSelections();
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
