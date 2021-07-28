import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { SidebySideService } from '../../services/side-by-side.service';
import { ISbsTargetDocument } from '../models/sbs-target-document.model';
import { targetDocumentSamples } from '../sample-data/target-documents';

@Component({
  selector: 'app-target-document',
  templateUrl: './target-document.component.html',
  styleUrls: ['./target-document.component.scss', '../side-by-side.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TargetDocumentComponent {

    public targetDocuments: ISbsTargetDocument[] = targetDocumentSamples;

    @Output() selectedTargetDocument = new EventEmitter<ISbsTargetDocument>();

    constructor(private sbsService: SidebySideService) {}

    onTargetDocumentSelected(item: ISbsTargetDocument){
        item.active = !item.active;
        if(item.active === true){
            this.sbsService.selectTargetDocument(item);
        }
    }
}
