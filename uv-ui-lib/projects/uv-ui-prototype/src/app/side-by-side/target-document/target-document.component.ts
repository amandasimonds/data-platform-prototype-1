import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ISbsDocument } from '../models/sbs-document.model';
import { sourceDocumentSamples } from '../sample-data/source-documents';

@Component({
  selector: 'app-target-document',
  templateUrl: './target-document.component.html',
  styleUrls: ['../source-document/source-document.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TargetDocumentComponent implements OnInit {

    public sourceDocuments: ISbsDocument[] = sourceDocumentSamples;

  constructor() { }

  ngOnInit(): void {
  }

}
