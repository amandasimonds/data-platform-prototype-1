import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ISbsDocument } from '../models/sbs-document.model';
import { sourceDocumentSamples } from '../sample-data/source-documents';

@Component({
  selector: 'app-source-document',
  templateUrl: './source-document.component.html',
  styleUrls: ['./source-document.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SourceDocumentComponent implements OnInit {

    public sourceDocuments: ISbsDocument[] = sourceDocumentSamples;

  constructor() { }

  ngOnInit(): void {
  }

}
