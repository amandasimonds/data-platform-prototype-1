import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { NgOnDestroyService } from '../../services/on-destroy.service';
import { SidebySideService } from '../../services/side-by-side.service';
import { ISbsTargetDocument } from '../models/sbs-target-document.model';
import { targetDocumentSamples } from '../sample-data/target-documents';

@Component({
  selector: 'app-target-document',
  templateUrl: './target-document.component.html',
  styleUrls: ['./target-document.component.scss', '../side-by-side.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TargetDocumentComponent implements OnInit {

    public targetDocuments: ISbsTargetDocument[] = targetDocumentSamples;
    public selectedTargetDocuments: ISbsTargetDocument[] = [];

    constructor(
        private sbsService: SidebySideService, 
        private ref: ChangeDetectorRef,
        private destroy$: NgOnDestroyService) {}

    onTargetDocumentSelected(item: ISbsTargetDocument){
        item.active = !item.active;
        this.sbsService.selectTargetDocument(item);
    }

    ngOnInit(): void {
        this.sbsService.selectedTargetDocuments$.subscribe(targetDocs => {
            this.selectedTargetDocuments = targetDocs;
            this.ref.detectChanges();
            takeUntil(this.destroy$);
        })
    }
}
