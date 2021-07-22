import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ISbsTargetDocument } from '../models/sbs-target-document.model';
import { targetDocumentSamples } from '../sample-data/target-documents';

@Component({
  selector: 'app-target-document',
  templateUrl: './target-document.component.html',
  styleUrls: ['../source-document/source-document.component.scss', './target-document.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TargetDocumentComponent implements OnInit {

    public targetDocuments: ISbsTargetDocument[] = targetDocumentSamples;

    ngOnInit(): void {}

}
