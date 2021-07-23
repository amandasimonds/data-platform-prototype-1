import { EventEmitter, Injectable } from '@angular/core';
import { ISbsSourceDocument } from '../side-by-side/models/sbs-source-document.model';
import { ISbsTargetDocument } from '../side-by-side/models/sbs-target-document.model';
import { sourceDocumentSamples } from '../side-by-side/sample-data/source-documents';
import { targetDocumentSamples } from '../side-by-side/sample-data/target-documents';

@Injectable()
export class SidebySideService {

    targetDocumentSelected = new EventEmitter<ISbsTargetDocument>();
    sourceDocumentSelected = new EventEmitter<ISbsSourceDocument>();

    public targetDocuments: ISbsTargetDocument[] = targetDocumentSamples;
    public sourceDocuments: ISbsSourceDocument[] = sourceDocumentSamples;

    public getTargetDocuments(): ISbsTargetDocument[]{
        return this.targetDocuments.slice();
    }

    public getSourceDocuments(): ISbsSourceDocument[]{
        return this.sourceDocuments.slice();
    }
}
