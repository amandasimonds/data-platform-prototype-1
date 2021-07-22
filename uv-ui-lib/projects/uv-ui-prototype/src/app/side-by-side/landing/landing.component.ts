import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { sourceDocumentSamples } from '../sample-data/source-documents';
import { targetDocumentSamples } from '../sample-data/target-documents';

@Component({
  selector: 'uv-prototype-sbs-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBySideLandingComponent implements OnInit {

    public sourceDocumentSelected = false;

    sourceDocumentsCount = sourceDocumentSamples.length;
    targetDocumentsCount = targetDocumentSamples.length;

  constructor() { }

  ngOnInit(): void {
  }

}
